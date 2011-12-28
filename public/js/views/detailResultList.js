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
            "click #addTranslation": "add",
            "click #addTranslation-box .submit": "submitTranslation"
        },

        initialize: function() {
            this.items_element = $("#translationList"); //we append our translations to this lement
            _.bindAll(this, 'render', 'add', 'appendItem', 'unrender', 'setCollection', 'submitTranslation');
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

        add: function() {
            console.log('clicked add');
            $('#addTranslation-box').fadeIn(200);
            $('#addTranslation-box .closeButton').on('click', _.bind(function() {
                $('#addTranslation-box').fadeOut(200);
            }, this));
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
            if (targetLang)
                this.targetLang = targetLang;
            this.unrender();
            this.items_element.removeClass('hidden');

            this.collection.each(function(item){ // in case collection is not empty
                if (item.get('language_id') == this.targetLang)
                    this.appendItem(item);
            }, this);
            var word = $('#searchInput').val();
            var addWordModel = {currentWord: word, addTranslationFor: i18n.addTranslationFor,
                                word: i18n.word, example: i18n.example, add: i18n.add, sentence: i18n.sentence};
            this.items_element.append(this.addWordTemplate(addWordModel));
        }
    });
    return new detailResultListView;
});