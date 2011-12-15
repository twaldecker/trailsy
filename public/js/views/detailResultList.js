define(['jquery','backbone','underscore',
        'collections/words', 'views/detailResult'],function($,Backbone,_, words, detailResultView){
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
            this.items_element = $("#searchResultList"); //we append our translations to this alement
            _.bindAll(this, 'render', 'add', 'appendItem', 'unrender');
            this.collection = words;
        },

        add: function() {
            console.log('clicked add');
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

        render: function () {
            this.unrender();
            this.collection.each(function(item, key){ // in case collection is not empty
                this.appendItem(item, key);
            }, this);
        }
    });
    return new detailResultListView;
});