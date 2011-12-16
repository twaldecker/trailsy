define(['jquery',
        'underscore',
        'backbone',
        'views/detailResultList',
        'views/searchResultList',
        'collections/words'],
function($, _, Backbone, detailResultListView, searchResultListView, words){
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
            words.getOrFetch(id,_.bind(function() {
                console.log('rendering word id: '+id);
                detailResultListView.render(id);
            }, this));

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