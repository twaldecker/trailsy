require.config({
    paths: {
        underscore: 'vendor/underscore',
        backbone: 'vendor/backbone'
    }
})

require(['jquery',
         'underscore',
         'backbone','app','domReady'],
    function($,_,Backbone,app, domReady){
        domReady(function() {
            app.init();
        });
});
