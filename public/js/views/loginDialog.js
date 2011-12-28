define(['jquery', 'underscore', 'text!templates/login.html'],
function($, _, html) {
    var loginDialog = {
        loginHtml: null,

        appendDiv: function() {
            this.loginHtml = $(html);
            $('nav').append(this.loginHtml);
        },

        show: function() {

            if (null === this.loginHtml) {
                this.appendDiv();
            }
            //Fade in the Popup
            this.loginHtml.fadeIn(300);

            //Set the center alignment padding + border see css style
            var popMargTop = (this.loginHtml.height() + 24) / 2;
            var popMargLeft = (this.loginHtml.width() + 24) / 2;

            this.loginHtml.css({
                'margin-top' : -popMargTop,
                'margin-left' : -popMargLeft
            });

            // Add the mask to body
            $('body').append('<div id="mask"></div>');
            $('#mask').fadeIn(300);
            $('a.closeButton, #mask').on('click', _.bind(this.hide, this));
            $('#login-box form').on('submit', _.bind(this.submitForm, this));
        },

        //callback on successful login
        loginSuccess: function(formData) {
            console.log(formData);
            $('#login-error', this.loginHtml).hide();
            this.hide();
            $('#loginLink').addClass('hidden');
            $('#logoutLink').removeClass('hidden');
            $('#signupLink').addClass('hidden');
            AppRouter.setLoginState(true);
        },

        loginFailed: function() {
            $('#login-box .error').text('Wrong Username or Password');
            $('#login-box .error').show();
        },

        //hide popup and mask
        hide: function() {
            $('#mask , #login-box').fadeOut(300 , _.bind(function() {
                $('#login-error', this.loginHtml).hide();
                $('#mask').remove();
            }, this));
            AppRouter.navigate('home', true);
        },

        //submit form
        submitForm: function() {
            var form = $('#login-box form');
            if (form.length) {
                var formData = form.serialize();
                $.ajax({url:'/sessions',
                        data: formData,
                        type:'POST',
                        beforeSend: function( xhr ) {
                            var token = $('meta[name="csrf-token"]').attr('content');
                            if (token) xhr.setRequestHeader('X-CSRF-Token', token);
                            },
                        success: _.bind(this.loginSuccess, this, formData),
                        error: _.bind(this.loginFailed, this)
                        });
            }
        }
    }
    return loginDialog;
})