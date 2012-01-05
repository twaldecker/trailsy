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
             * This function handles the rendering of the template.
             */
            applyTemplate: function() {
                var word = $('input#word').val();
                var addWordModel = {
                    addWordHeading: i18n.addTranslationFor + ' ' + word,
                    word: i18n.word, 
                    example: i18n.example, 
                    add: i18n.add,
                    sentence: i18n.sentence    
                };
                if('addWord' === this.dialogType) {
                    addWordModel.addWordHeading = i18n.addWord;
                }
                var template = _.template(html);
                this.addWordHtml = $(template(addWordModel));
                if ('addWord' === this.dialogType) {
                    /* If dialog type is addWord, then: */
                    /* add a language selectbox and a label */
                    var label = $('<label for="sourceLanguage">'+i18n.lang+'</label>');
                    $('#addword_example',this.addWordHtml).after(label);
                    var langSelect = $("#sourceLanguage").clone();
                    langSelect.attr('id', 'addword_language');
                    label.after(langSelect);
                    
                    /*copy the source language and the word from the main form */
                    langSelect.val($("#sourceLanguage").val());
                    $('#addword_word', this.addWordHtml).val(word);
                }
            },

            appendDiv: function() {
                $('nav').append(this.addWordHtml);
            },

            setDialogType: function(type) {
                this.dialogType = type;
            },

            /**
             *
             * @param bool showLanguages
             */
            show: function() {
                this.applyTemplate();
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
                //Set the focus in a form element. if the user adds a word, the word is already set through the search input and so the focus goes to the example sentence.
                if('addWord' === this.dialogType) {
                    $('#addword_example', this.addWordHtml).focus();
                } else {
                    $('#addword_word', this.addWordHtml).focus();
                }
                $('#addWord-box .closeButton').on('click', _.bind(this.hide, this));
                $('#addWord-box form').on('submit', _.bind(this.submitForm, this));
            },

            //callback on successful save
            saveSuccess: function(result) {
                if ('addWord' === this.dialogType) {
                    AppRouter.navigate('words/'+ result.id, true);
                }
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
                $('#addWord-box .closeButton').unbind();
                $('#addWord-box form').unbind();
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

                var newWord = {word:        $('#addword_word', this.addWordHtml).val(),
                               example:     $('#addword_example', this.addWordHtml).val(),
                               language_id: $('#addword_language', this.addWordHtml).val()};
                var options = {success: _.bind(this.saveSuccess, this),
                               error:   _.bind(this.saveFailed, this)};

                if ('addWord' === this.dialogType) {
                    options.silent = true;
                }

                this.collection.addOrUpdate(newWord, options);
            }
        }
        return addWordDialog;
    })
