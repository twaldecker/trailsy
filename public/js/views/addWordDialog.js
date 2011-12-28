define(['jquery',
        'underscore',
        'text!templates/addWord.html',
        'i18n!nls/trailsy'],
    function($, _, html, i18n) {
        var addWordDialog = {
            collection: null,
            addWordHtml: null,

            setCollection: function(collection) {
                this.collection = collection;
            },


            /**
             *
             * @param bool showLanguages
             */
            applyTemplate: function(showLanguages) {
                var word = $('#searchInput').val();
                var addWordModel = {linkText: i18n.addTranslationFor + ' ' + word,
                    word: i18n.word, example: i18n.example, add: i18n.add,
                    sentence: i18n.sentence};
                var template = _.template(html);
                this.addWordHtml = $(template(addWordModel));
                if (true === showLanguages) {
                    var targetLang = $("#targetLanguage").clone();
                    targetLang.attr('id', 'sourceLanguage');
                    $('#example',this.addWordHtml).after(targetLang);
                }
            },

            appendDiv: function() {
                $('nav').append(this.addWordHtml);
            },

            /**
             *
             * @param bool showLanguages
             */
            show: function(showLanguages) {


                this.applyTemplate(showLanguages);
                this.appendDiv();

                //Fade in the Popup
                this.addWordHtml.fadeIn(300);

                //Set the center alignment padding + border see css style
                var popMargTop = (this.addWordHtml.height() + 24) / 2;
                var popMargLeft = (this.addWordHtml.width() + 24) / 2;

                this.addWordHtml.css({
                    'margin-top' : -popMargTop,
                    'margin-left' : -popMargLeft
                });


                $('#addWord-box .closeButton').on('click', _.bind(this.hide, this));
                $('#addWord-box form').on('submit', _.bind(this.submitForm, this));
            },

            //callback on successful save
            saveSuccess: function() {
                this.hide();
            },

            saveFailed: function(error) {
                if (error.status == 401 || error.status == 403) {
                    AppRouter.navigate('login', true);
                }
                $('#addWord-box .error').removeClass('hidden');
                $('#addWord-box .error').text('An Error occured.');
            },

            //hide popup and mask
            hide: function() {
                $('input', this.addWordHtml).val('');
                $('#addWord-box').fadeOut(300 , _.bind(function() {
                    this.addWordHtml.remove();
                }, this));
            },

            getLanguageId: function() {
                var addWordLang = $('#sourceLanguage', this.addWordHtml).val();
                if (undefined != addWordLang) {
                    return addWordLang;
                }
                return $("#targetLanguage").val()
            },

            //submit form
            submitForm: function() {


                var newWord = {word: $('#word', this.addWordHtml).val(),
                               example: $('#example', this.addWordHtml).val(),
                    language_id: this.getLanguageId()};
                this.collection.create(newWord, {success: _.bind(this.saveSuccess, this),
                                                 error: _.bind(this.saveFailed, this)});
                $('#addWord-box').fadeOut(300);
            }
        }
        return addWordDialog;
    })
