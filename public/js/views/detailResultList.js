define(['jquery',
        'underscore',
        'backbone',
        'views/detailResult',
        'text!templates/addWord.html',
        'i18n!nls/trailsy'],
function($,  _, Backbone, detailResultView, addWordHtml, i18n){
    /**
     * list view for detail results
     */
    var detailResultListView = Backbone.View.extend({
        el: $("#translations"),
        collection: null,

        events : {
            "click #addTranslation": "onClickAdd",
            "click #addTranslation-box .submit": "submitTranslation"
        },

        initialize: function() {
            this.items_element = $("#translationList"); //we append our translations to this lement
            _.bindAll(this, 'render', 'onClickAdd',
                            'appendItem', 'unrender',
                            'setCollection',
                            'submitTranslation',
                            'appendAddWordLink');
            this.addWordTemplate = _.template(addWordHtml);
        },

        submitTranslation: function() {
            console.log('clicked submit translation');
            var form = $('#addTranslation-box form');
            if (form.length) {
                var formData = form.serializeArray();
                var newWord = {word: formData[0].value, example: formData[1].value,
                               language_id: this.targetLang};
                this.collection.create(newWord);
                $('#addTranslation-box').fadeOut(200);
            }
        },

        onClickAdd: function(e) {
            e.preventDefault();
            var translationBox = $('#addTranslation-box');
            //Set the center alignment padding + border see css style
            var popMargTop = (translationBox.height() + 24) / 2;
            var popMargLeft = (translationBox.width() + 24) / 2;
            translationBox.css({
                'margin-top' : -popMargTop,
                'margin-left' : -popMargLeft
            });
            translationBox.fadeIn(200);
            $('#addTranslation-box .closeButton').on('click', _.bind(function() {
                $('#addTranslation-box').fadeOut(200);
            }, this));
        },

        appendAddWordLink: function() {
            var word = $('#searchInput').val();
            var addWordModel = {currentWord: word, addTranslationFor: i18n.addTranslationFor,
                                word: i18n.word, example: i18n.example, add: i18n.add,
                                sentence: i18n.sentence};
            this.items_element.append(this.addWordTemplate(addWordModel));
        },

        setCollection: function(collection) {
            this.collection = collection;
            this.collection.bind('add', this.render);
        },

        unrender: function() {
            this.items_element.html("");
            this.items_element.addClass('hidden');
        },

        appendItem: function(item) {
            var model = this.collection.get(item.id);
            var view = new detailResultView({
                'model': model}),
                el = view.render(this.search).el;
            this.items_element.append(el);
        },

        render: function (targetLang) {
            if ('string' === typeof targetLang)
                this.targetLang = targetLang;
            this.unrender();
            this.items_element.removeClass('hidden');

            this.collection.each(function(item){ // in case collection is not empty
                if (item.get('language_id') == this.targetLang)
                    this.appendItem(item);
            }, this);

            this.appendAddWordLink();
        }
    });
    return new detailResultListView;
});