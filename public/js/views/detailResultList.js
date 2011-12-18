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
            this.items_element = $("#translationList"); //we append our translations to this alement
            _.bindAll(this, 'render', 'add', 'appendItem', 'unrender', 'setCollection');
            //this.collection = words;
        },

        add: function() {
            console.log('clicked add');
        },

        setCollection: function(collection) {
            this.collection = collection;
        },

        unrender: function() {
            this.items_element.html("");
        },

        appendItem: function(item, key) {
            var model = this.collection.get(item.id);
            var view = new detailResultView({
                'model': model}),
                el = view.render(this.search).el;
            this.items_element.append(el);
        },

        render: function (id, targetLang) {
            this.unrender();
            if ('' === id) {
                return
            }
            var word = this.collection.get(id);

            _(word.get('translations')).each(function(item, key){ // in case collection is not empty
                if (item.language_id == targetLang)
                this.appendItem(item, key);
            }, this);
        }
    });
    return new detailResultListView;
});