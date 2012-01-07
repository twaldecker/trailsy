define(['jquery',
        'underscore',
        'text!templates/login.html',
        'views/flashMessage',
        'i18n!nls/trailsy'],
function($, _, html, flash, i18n) {
    var loginDialog = {
        
        loginHtml: null,
        mask: $('#mask'),
        errorDiv: null,
        form: null,
        
        /**
         * This method appends the template to the dom, and fades in the pupup
         * and the mask. And registers the events.
         */
        show: function() {

            if (null === this.loginHtml) {
                var template = _.template(html);
                this.loginHtml = $(template(i18n));
                $('nav').append(this.loginHtml);
                this.errorDiv = $('#login-box .error');
                this.form = $('#login-box form');
            }

            //Set the center alignment padding + border see css style
            this.loginHtml.css({
                'margin-top': (this.loginHtml.height() + 24) / -2,
                'margin-left': (this.loginHtml.width() + 24) / -2
            });

            this.mask.fadeIn(300);
            this.loginHtml.fadeIn(300);
            
            $('#login-box a, #mask').on('click', _.bind(this.hide, this));
            this.form.on('submit', _.bind(this.submitForm, this));
        },
        
        /**
         * This method hides the popup and the mask.
         * It also unbinds the handlers.
         */         
        hide: function() {
            $('#mask , #login-box').fadeOut(300 , _.bind(function() {
                this.clearErrors();
                $('#login-box form input').val(''); /*clear all input values*/
                $('#login-box a, #mask').unbind();
                this.form.unbind();
            }, this));
            
            AppRouter.navigate('home', true);
        },
        
        /**
         * This method empties the error div and hides it.
         */
        clearErrors: function() {
            this.errorDiv.hide();
            this.errorDiv.empty();
        },
        
        /**
         * This method is responsilbe for delivering the form data and binds
         * the callbacks for success and error.
         */
        submitForm: function() {
            if (this.form.length) {
                $.ajax({url:'/sessions',
                        data: this.form.serialize(),
                        type:'POST',
                        beforeSend: _.bind(function( xhr ) {
                            var token = $('meta[name="csrf-token"]').attr('content');
                            if (token) xhr.setRequestHeader('X-CSRF-Token', token);
                            this.clearErrors();
                            }, this),
                        success: _.bind(this.loginSuccess, this),
                        error: _.bind(this.loginError, this)
                        });
            }
        },

        /**
         * This is the callback after successful login.
         * it displays a flash, changes the navigation,
         * sets the status variable and
         * at the end calls the hide method.
         */
        loginSuccess: function() {
            flash.showMessage('info', i18n.login_success);
            $('#loginLink').addClass('hidden');
            $('#logoutLink').removeClass('hidden');
            $('#signupLink').addClass('hidden');
            AppRouter.setLoginState(true);            
            this.hide();
        },

        /**
         * This is the callback after an error in the login request.
         * it displays a helpful Wrong username or password message.
         */
        loginError: function() {
            this.errorDiv.text(i18n.login_error);
            this.errorDiv.show();
        },

        /**
         * This is the logout method. it calls the logout url and sets the
         * status variable.
         */
        logout: function() {
            $.ajax({url:'/log_out',
                type:'GET',
                contentType: "application/json; charset=utf-8",
                beforeSend: function( xhr ) {
                    var token = $('meta[name="csrf-token"]').attr('content');
                    if (token) xhr.setRequestHeader('X-CSRF-Token', token);
                },
                success: _.bind(function(){
                    $('#logoutLink').addClass('hidden');
                    $('#loginLink').removeClass('hidden');
                    $('#signupLink').removeClass('hidden');
                    AppRouter.setLoginState(false);
                    flash.showMessage('info', i18n.logout_success);
                }, this),
                error: _.bind(function(){
                    flash.showMessage('error', i18n.logout_error);
                }, this)
            })
        }
        
    }
    return loginDialog;
})
