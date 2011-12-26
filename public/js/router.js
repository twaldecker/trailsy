define(['jquery',
        'underscore',
        'backbone',
        'views/detailResultList',
        'views/searchResultList',
        'views/loginDialog',
        'collections/words',
        'collections/detailWords'],
function($, _, Backbone, detailResultListView, searchResultListView, loginDialog, words, detailWords){
    var appRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'login': 'login',
            'search/:query/targetLang/:lang': 'search',
            'words/:word/targetLang/:lang':  'words'
        },
        'home': function(){
        },

        words: function(id, targetLang) {
            words.getOrFetch(id,_.bind(function() {
                console.log('loaded word id: '+id);
                var tmpWords = new detailWords();
                var model = words.get(id);
                this.setSearchText(model.get('word'));
                tmpWords.add(model);
                tmpWords.add(model.get('translations'));
                detailResultListView.setCollection(tmpWords);
                detailResultListView.render(id, targetLang);
            }, this));
            this.setTargetLangValue(targetLang);
        },

        setTargetLangValue: function(targetLang) {
            var options = $("#targetLanguage");
            options.val(targetLang);
            searchResultListView.setTargetLang(targetLang);
        },

        setSearchText: function(text) {
            var input = $('#searchInput');
            input.val(text);
        },

        search: function(query, targetLang) {
            $("#searchInput").addClass('loading');
            words.fetch({data: jQuery.param({word: query, lang: targetLang}),
                         url:'words/search',
                         success: function(){
                             searchResultListView.render();
                             $("#searchInput").removeClass('loading');
                            },
                         error: function() {$("#searchInput").removeClass('loading');}});
            this.setSearchText(query);
            this.setTargetLangValue(targetLang);
        },

        login: function() {
            console.log('show login dialog');
            loginDialog.show();
        }
    });

    var init = function(){
        window.AppRouter = new appRouter;
        Backbone.history.start({pushStack:true});
    };
    return {
        init: init
    };
});