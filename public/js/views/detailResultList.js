define(['jquery',
        'underscore',
        'backbone',
        'views/detailResult',
        'views/addWordDialog',
        'i18n!nls/trailsy'],
function($,  _, Backbone, detailResultView, addWordDialog, i18n){
    /**
     * list view for detail results
     */
    var detailResultListView = Backbone.View.extend({
        el: $("#translations"),
        input: $("input#word"),
        collection: null,

        events : {
            "click #addWord": "onClickAdd"

        },

        initialize: function() {
            this.items_element = $("#translationList"); //we append our translations to this lement
            _.bindAll(this, 'render', 'onClickAdd',
                            'appendItem', 'unrender',
                            'setCollection',
                            'appendAddWordLink');
        },

        onClickAdd: function(e) {
            e.preventDefault();
            e.stopPropagation();
            addWordDialog.setCollection(this.collection);
            addWordDialog.setDialogType('addTranslation');
            addWordDialog.show();
        },

        appendAddWordLink: function() {
            var word = this.input.val();
            this.items_element.append('<li class="detailResult">' +
                '<a href="#" id="addWord">' + i18n.addTranslationFor + ' '+ word +'</a></li>');
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
                if (item.get('language_id') == this.targetLang || this.targetLang == 1)
                    this.appendItem(item);
            }, this);

            this.appendAddWordLink();
        }
    });
    return new detailResultListView;
});
