define(['jquery', 'underscore', 'text!templates/signup.html'],
function($, _, html) {
    var signupDialog = {
        signupHtml: null,

        appdendDiv: function() {
            this.signupHtml = $(html);
            $('nav').append(this.signupHtml);
        },

        show: function() {

            if (null === this.signupHtml) {
                this.appdendDiv();
            }
            //Fade in the Popup
            this.signupHtml.fadeIn(300);

            //Set the center alignment padding + border see css style
            var popMargTop = (this.signupHtml.height() + 24) / 2;
            var popMargLeft = (this.signupHtml.width() + 24) / 2;

            this.signupHtml.css({
                'margin-top' : -popMargTop,
                'margin-left' : -popMargLeft
            });

            // Add the mask to body
            $('body').append('<div id="mask"></div>');
            $('#mask').fadeIn(300);
            $('a.closeButton, #mask').on('click', _.bind(this.hide, this));
            $('.signin', this.signupHtml).on('submit', _.bind(this.submitForm, this));
        },

        //callback on successful login
        loginSuccess: function(formData) {
            console.log(formData);
            $('#login-error', this.loginHtml).hide();
            this.hide();
        },

        loginFailed: function() {
            $('#login-error', this.loginHtml).text('Wrong Username or Password');
            $('#login-error', this.loginHtml).show();
        },

        //hide popup and mask
        hide: function() {
            $('#mask , .login-popup').fadeOut(300 , _.bind(function() {
                $('#login-error', this.loginHtml).hide();
                $('#mask').remove();
            }, this));
            AppRouter.navigate('home', true);
        },

        //submit form
        submitForm: function() {
            var form = $('.signin', this.loginHtml);
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
    return signupDialog;
})
