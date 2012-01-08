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
                var targetLang = parseInt($("#targetLanguage").val(), 10);
                var sourceLangElement = $("#sourceLanguage");
                var sourceLang = parseInt(sourceLangElement.val(),10);
                                
                if ('addWord' === this.dialogType) {
                    //copy the value of the searchbox in the word box.
                    $('#addword_word', this.addWordHtml).val(word);
                    
                    if(1 === sourceLang) {
                        //insert a select box with the language
                        this.addLangField(sourceLang);
                    } else {
                        //insert a hidden lang field
                        lang = $('<input type="hidden" value="'+sourceLang+'" id="addword_language">');
                        $('#addword_example', this.addWordHtml).after(lang);
                    }
                }
                
                if ('addTranslation' === this.dialogType && 1 === targetLang) {
                    //if the target lang field is all, then add a lang field in the form.
                    this.addLangField(2);
                }              
            },
            
            /**
             * This method adds a langauge select box and a label after the example sentence.
             * The selected field can be set with the selected parameter.
             */
            addLangField: function(selected) {
                var label = $('<label for="addword_language">'+i18n.lang+'</label>');
                $('#addword_example',this.addWordHtml).after(label);

                var langSelect = $('#sourceLanguage').clone();
                $('[value="1"]', langSelect).remove();
                langSelect.attr('id', 'addword_language');
                label.after(langSelect);
                langSelect.val(selected);
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
                //Set the focus in a form element. if the user adds a word, the word is already set through the
                // search input and so the focus goes to the example sentence.
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
                var addWordLang = $('#addword_language', this.addWordHtml).val();
                if (undefined != addWordLang) {
                    return addWordLang;
                }
                return $("#targetLanguage").val();
            },

            //submit form
            submitForm: function() {

                var newWord = {word:        $('#addword_word', this.addWordHtml).val(),
                               example:     $('#addword_example', this.addWordHtml).val(),
                               language_id: this.getLanguageId()};
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
