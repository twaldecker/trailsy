define(['jquery',
        'underscore',
        'backbone',
        'views/searchResult',
        'views/detailResultList',
        'views/addWordDialog',
        'i18n!nls/trailsy',
        'collections/words'],
function($, _, Backbone, searchResultView, detailResultListView, addWordDialog, i18n, words){
    /**
     * view for search result list
     */
    var searchResultListView = Backbone.View.extend({
        el: $("#search"),
        input: $("input#word"),

        collection: null,
        searchTimeout: null,

        events : {
            "keydown input#word":   "keyDown",
            "keyup input#word":     "keyUp",
            "search input#word":    "search",
            "blur input#word":      "blur",
            "focus input#word":     "focus",
            "change #sourceLanguage, #targetLanguage": "changeLang",
            "mousedown #addWord":     "onClickAdd"
        },

        initialize: function() {
            this.items_element = $("ul#result");
            _.bindAll(this, 'unrender', 'render', 'search', 'changeLang',
                            'appendItem', 'focus', 'blur','keyDown', 'keyUp',
                            'delayedSearch', 'onClickAdd');
            this.collection = words;
            this.collection.bind('refresh', this.render);
            this.collection.bind('add', this.render);
        },


        onClickAdd: function(e) {
            e.preventDefault();
            e.stopPropagation();
            addWordDialog.setCollection(this.collection);
            addWordDialog.setDialogType('addWord');
            addWordDialog.show(true);
        },

        changeLang: function() {
            this.search();
        },

        focus: function() {
        },

        blur: function() {
            if (false === $.browser.mobile) {
                this.items_element.addClass('hidden');
            }
            var em = this.items_element.children('li.selected');
            if (em.length) {
                em.removeClass('selected');
            }
        },

        keyUp: function(e) {
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
            var searchText = this.input.val();
            if (searchText.length < 3) {
                this.blur();
                AppRouter.navigate('home', true);
                return true;
            }
            AppRouter.navigate('search/'+searchText+'/from/'+
                                $('#sourceLanguage').val()+'/to/'+
                                $('#targetLanguage').val(), true);
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
                    AppRouter.navigate(this.collection.url+'/'+parseInt(model_id,10)+'/targetLang/'+
                                       $('#targetLanguage').val(), true);
                    this.input.blur();
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

        appendAddWordLink: function() {
            var word = this.input.val();
            this.el.append('<a href="#" id="addWord">' + i18n.add +' '+ i18n.word +' '+ word +'</a>');
        },

        unrender: function() {
            this.items_element.html("");
            $('#addWord', this.el).remove();
            detailResultListView.unrender();
        },

        appendItem: function(item) {
            var view = new searchResultView({model: item});
            el = view.render().el;
            var that = this;
            $(el).on('mousedown', function(){
                AppRouter.navigate(that.collection.url+'/'+item.get('id')+'/targetLang/'+
                                   $('#targetLanguage').val(), true);
            });
            this.items_element.append(el);
        },

        render: function () {
            this.unrender();
            
            this.input.focus();
            if (0 === this.collection.length) {
                this.appendAddWordLink();
                return;
            }
            this.collection.each(function(item){ // in case collection is not empty
                this.appendItem(item);
            }, this);
            this.items_element.removeClass('hidden');
        }
    });
    return new searchResultListView;
});
