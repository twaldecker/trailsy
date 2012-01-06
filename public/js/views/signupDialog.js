define(['jquery',
        'underscore',
        'text!templates/signup.html',
        'views/flashMessage',
        'i18n!nls/trailsy'],
function($, _, html, flash, i18n) {
    var signupDialog = {
        signupHtml: null,

        appendDiv: function() {
            var template = _.template(html);
            this.signupHtml = $(template(i18n));
            $('nav').append(this.signupHtml);
        },

        show: function() {

            if (null === this.signupHtml) {
                this.appendDiv();
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

            $('#mask').fadeIn(300);
            $('a.closeButton, #mask').on('click', _.bind(this.hide, this));
            $('#signup-box form').on('submit', _.bind(this.submitForm, this));
        },

        //callback on successful login
        signupSuccess: function(formData) {
            console.log(formData);
            $('#signup-box div.error', this.loginHtml).hide();
            this.hide();
        },

        signupError: function() {
            $('#signup-box div.error', this.loginHtml).text('Wrong Username or Password');
            $('#signup-box div.error', this.loginHtml).show();
        },

        //hide popup and mask
        hide: function() {
            $('#mask , #signup-box').fadeOut(300 , _.bind(function() {
                $('#signup-box div.error', this.loginHtml).hide();
                $('a.closeButton. #mask').unbind();
            }, this));
            $('#signup-box form').unbind();
            AppRouter.navigate('home', true);
        },

        //submit form
        submitForm: function() {
            var form = $('#signup-box form', this.loginHtml);
            if (form.length) {
                var formData = form.serialize();
                $.ajax({url:'/users',
                        data: formData,
                        type:'POST',
                        beforeSend: function( xhr ) {
                            var token = $('meta[name="csrf-token"]').attr('content');
                            if (token) xhr.setRequestHeader('X-CSRF-Token', token);
                            },
                        success: _.bind(this.signupSuccess, this, formData),
                        error: _.bind(this.signupError, this)
                });
            }
        }
    }
    return signupDialog;
})
