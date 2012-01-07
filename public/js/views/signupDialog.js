define(['jquery',
        'underscore',
        'text!templates/signup.html',
        'views/flashMessage',
        'i18n!nls/trailsy'],
function($, _, html, flash, i18n) {
    var signupDialog = {
        
        signupHtml: null,
        mask: $('#mask'),
        errorDiv: null,
        form: null,
        
        /**
         * This method shows up the form and registers the events
         */
        show: function() {

            if (null === this.signupHtml) { //Add html if it doesn't exist
                var template = _.template(html);
                this.signupHtml = $(template(i18n));
                $('nav').append(this.signupHtml);
                this.errorDiv = $('#signup-box .error');
                this.form = $('#signup-box form');
            }
            
            //Set the center alignment padding + border see css style
            this.signupHtml.css({
                'margin-top' : (this.signupHtml.height() + 24) / -2,
                'margin-left' : (this.signupHtml.width() + 24) / -2
            });

            this.signupHtml.fadeIn(300);
            this.mask.fadeIn(300);
            
            //bind the events
            $('#signup-box a, #mask').on('click', _.bind(this.hide, this));
            this.form.on('submit', _.bind(this.submitForm, this));
        },
        
        /**
         * This method hides the popup and unregisters the events.
         */
        hide: function() {
            $('#mask , #signup-box').fadeOut(300 , _.bind( function() {
                $('#signup-box a, #mask').unbind();
                this.form.unbind();
                $('#signup-box form input').val(''); //clean values and
                this.clearErrors();                 // error div
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
         * This is the submit handler. it does the request and binds 
         * the success and error handlers to the request.
         */
        submitForm: function() {
            if (this.form.length) {
                $.ajax({url:'/users',
                    data: this.form.serialize(),
                    type:'POST',
                    beforeSend: _.bind(function( xhr ) {
                        var token = $('meta[name="csrf-token"]').attr('content');
                        if (token) xhr.setRequestHeader('X-CSRF-Token', token);
                        this.clearErrors();
                        }, this
                    ),
                    success: _.bind(this.signupSuccess, this),
                    error: _.bind(this.signupError, this)
                });
            }
        },        

        /**
         * This is the callback function after a successful signup process.
         * It triggers the hide function and displays a flash message.
         */
        signupSuccess: function() {
            flash.showMessage('info', i18n.signup_aftersubmit);
            this.hide();
        },

        /**
         * This is the callback function after getting an error message back from the server.
         * It is responsible for showing the error message.
         */
        signupError: function(jqXHR, textStatus, errorThrown) {
            var response = $.parseJSON(jqXHR.responseText);
            var errorHtml = $('<ul></ul>');
            _.each(response, function (errors, field) { //go through error fields
                var ele = $('<li>');     //create for each field a li
                ele.text(field);        // set the name
                errorHtml.append(ele); //  and append it to the ul
                _.each(errors, function(message) {
                    var a = $('<p>').text(i18n[message]);
                    ele.append(a);
                });
            });
            this.errorDiv.append(errorHtml);
            this.errorDiv.show();
        },
        
        /**
         * This method handles the process of the validation of an email address.
         * It binds the methods validationSuccess and validationError.
         */
        validation: function(id, code) {
            $.ajax({url: '/user/'+id+'/validate/'+code,
                type: 'GET',
                contentType: 'application/json; charset=utf-8',
                beforeSend: function( xhr ) {
                    var token = $('meta[name="csrf-token"]').attr('content');
                    if (token) xhr.setRequestHeader('X-CSRF-Token', token);
                },
                success: _.bind(this.validationSuccess, this),
                error: _.bind(this.validationError, this)
            })
        },
        
        validationSuccess: function() {
            flash.showMessage('success', 'test');
        },
        
        validationError: function() {
            flash.showMessage('error', 'error');
        }
    }
    return signupDialog;
});
