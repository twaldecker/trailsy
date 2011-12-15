define(['jquery',
        'backbone',
        'views/detailResultList',
        'views/searchResultList',
        'collections/words'],
function($, Backbone, detailResultListView, searchResultListView, words){
    var appRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'search/:query': 'search',
            'words/:word':  'words'
        },
        'home': function(){
        },

        words: function(id) {
            console.log('load detail view for word: '+ id);
            words.getOrFetch(id);
        },

        search: function(query) {
            words.fetch({data: jQuery.param({word: query}),
                         url:'words/search',
                         success: function(){
                             searchResultListView.render();
                            }});
            var input = $('#searchInput');
            input.val(query);
        }
    });

    var init = function(){
        var app_router = new appRouter;
        Backbone.history.start({pushStack:true});
    };
    return {
        init: init
    };
});