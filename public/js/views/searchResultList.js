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
        targetLang: '1',
        searchTimeout: null,

        events : {
            "keydown #searchInput":   "keyDown",
            "keyup #searchInput":     "keyUp",
            "search #searchInput":    "search",
            "blur #searchInput":      "blur",
            "focus #searchInput":     "focus",
            "change #targetLanguage": "changeLang"
        },

        initialize: function() {
            this.items_element = $("#searchResultList");
            _.bindAll(this, 'unrender', 'render', 'search', 'changeLang',
                     'appendItem', 'focus', 'blur','keyDown', 'keyUp', 'delayedSearch', 'setTargetLang');
            this.collection = words;
            this.collection.bind('refresh', this.render);
            this.collection.bind('add', this.render);
        },

        setTargetLang: function(targetLang) {
            this.targetLang = targetLang;
        },

        changeLang: function() {
            this.targetLang = $("#targetLanguage").val();
            this.search();
            console.log('selected lang: ' + this.targetLang);
        },

        focus: function() {
            console.log('focused search input');
        },

        blur: function() {
            this.items_element.hide('slow', 'swing');
            var em = this.items_element.children('li.selected');
            if (em.length) {
                em.removeClass('selected');
            }
        },

        keyUp: function(e) {
            console.log(e);
            if (e.keyCode == 27 || e.keyCode == 13 || e.keyCode == 9
                || e.keyCode == 40 || e.keyCode == 38) return true;
            this.delayedSearch();
        },

        delayedSearch: function() {
            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }
            this.searchTimeout = setTimeout(_.bind(function(){
                this.search();
            }, this), 350);
        },

        search: function() {
            if (this.searchTimeout) {
                clearTimeout(this.searchTimeout);
            }
            var input = $("#searchInput");
            var searchText = input.val();
            if (searchText.length < 3) {
                this.blur();
                AppRouter.navigate('home', true);
                return true;
            }
            AppRouter.navigate('search/'+searchText+'/targetLang/'+this.targetLang, true);
        },

        keyDown: function(e) {
            // Esc
            if (e.keyCode == 27) {
                e.preventDefault();
                this.blur();
                AppRouter.navigate('home', true);
                return false;
            }
            // Enter
            if (e.keyCode == 13 || e.keyCode == 9) {
                // If an item is selected, change input value
                var em = this.items_element.children('li.selected');
                if (em.length) {
                    var model_id = em.attr('data-id');
                    AppRouter.navigate(this.collection.url+'/'+parseInt(model_id,10)+'/targetLang/'+this.targetLang, true);
                    $("#searchInput").blur();
                    return false;
                }
                this.search();
                return true;
            }
            // Down
            if (e.keyCode == 40) {
                e.preventDefault();
                var em = this.items_element.children('li.selected');
                if (em.length == 0) {
                    this.items_element.children('li:first').addClass('selected');
                } else {
                    if (em == this.items_element.children('li:last')) {
                        em.removeClass('selected');
                    } else {
                        em.removeClass('selected').next('li').addClass('selected');
                    }
                }
                return false;
            }
            // Up
            if (e.keyCode == 38) {
                e.preventDefault();
                var em = this.items_element.children('li.selected');
                if (em.length == 0) {
                    this.items_element.children('li:last').addClass('selected');
                } else {
                    if (em == this.items_element.children('li:first')) {
                        em.removeClass('selected');
                    } else {
                        em.removeClass('selected').prev('li').addClass('selected');
                    }
                }
                return false;
            }
            return true;
        },

        unrender: function() {
            this.items_element.html("");
            detailResultListView.unrender();
        },

        appendItem: function(item) {
            var view = new searchResultView({model: item}),
                el = view.render().el;
            var that = this;
            $(el).on('mousedown', function(){
                AppRouter.navigate(that.collection.url+'/'+item.get('id')+'/targetLang/'+this.targetLang, true);
            });
            this.items_element.append(el);
        },

        render: function () {
            this.unrender();
            this.collection.each(function(item){ // in case collection is not empty
                this.appendItem(item);
            }, this);
            this.items_element.show('fast', 'swing');
            $("#searchInput").focus();
        }
    });
    return new searchResultListView;
});