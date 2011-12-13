define(['backbone','views/detailResultList'],function(Backbone,detailResultListView){
    var homeRouter = Backbone.Router.extend({
        initialize: function(){
            Backbone.history.start();
        },
        routes: {
            '': 'home'
        },
        'home': function(){
            detailResultListView.render();
        }
    });

    return new homeRouter();
});