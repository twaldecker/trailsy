define(['jquery',
        'underscore',
        'backbone',
        'views/detailResultList',
        'views/searchResultList',
        'collections/words',
        'collections/detailWords'],
function($, _, Backbone, detailResultListView, searchResultListView, words, detailWords){
    var appRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
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

        search: function(query, targetLang) {
            words.fetch({data: jQuery.param({word: query, lang: targetLang}),
                         url:'words/search',
                         success: function(){
                             searchResultListView.render();
                            }});
            var input = $('#searchInput');
            input.val(query);
            this.setTargetLangValue(targetLang);
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