define(['jquery','underscore','backbone',
        'views/searchResult','views/detailResultList',
        'collections/words'],
function($, _, Backbone, searchResultView, detailResultListView, words){
    /**
     * view for search result list
     */
    var searchResultListView = Backbone.View.extend({
        el: $("#searchResults"),

        collection: null,
        targetLang: 'en',

        events : {
            "keyup #searchInput":     "search",
            "search #searchInput":    "search",
            "change #targetLanguage": "changeLang"
        },

        initialize: function() {
            this.items_element = $("#searchResultList");
            _.bindAll(this, 'unrender', 'render', 'search', 'changeLang', 'appendItem');
            this.collection = words;
            this.collection.bind('refresh', this.render);
            this.collection.bind('add', this.render);
        },

        changeLang: function() {
            this.targetLang = $("#targetLanguage").val();
            this.search();
            console.log('selected lang: ' + this.targetLang);
        },

        search: function() {
            var input = $("#searchInput");
            var searchText = input.val();
            if (searchText.length < 3) {
                this.unrender();
                window.location.hash = '';
                return;
            }
            window.location.hash = 'search/'+searchText;
            //router.navigate('search/'+input, true);
        },

        unrender: function() {
            this.items_element.html("");
            detailResultListView.unrender();
        },

        appendItem: function(item) {
            var view = new searchResultView({model: item}),
                el = view.render().el;
            var that = this;
            $(el).bind('click', function(){
                detailResultListView.render();
            });
            this.items_element.append(el);
        },

        render: function () {
            this.unrender();
            this.collection.each(function(item){ // in case collection is not empty
                this.appendItem(item);
            }, this);
        }
    });
    return new searchResultListView;
});