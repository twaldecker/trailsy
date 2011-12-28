define(['jquery','underscore','backbone',
        'views/detailResult'],
function($,  _, Backbone, detailResultView){
    /**
     * list view for detail results
     */
    var detailResultListView = Backbone.View.extend({
        el: $("#translations"),
        collection: null,

        events : {
            "click #addTranslation": "add"
        },

        initialize: function() {
            this.items_element = $("#translationList"); //we append our translations to this lement
            _.bindAll(this, 'render', 'add', 'appendItem', 'unrender', 'setCollection');
        },

        add: function() {
            console.log('clicked add');
        },

        setCollection: function(collection) {
            this.collection = collection;
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

        render: function (id, targetLang) {
            this.unrender();
            this.items_element.removeClass('hidden');
            if ('' === id) {
                return
            }

            this.collection.each(function(item){ // in case collection is not empty
                if (item.get('language_id') == targetLang)
                    this.appendItem(item);
            }, this);
        }
    });
    return new detailResultListView;
});