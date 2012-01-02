require.config({
    paths: {
        jqueryoffline: 'vendor/jquery.offline',
        underscore: 'vendor/underscore',
        backbone: 'vendor/backbone'
    }
})

require(['jquery',
         'underscore',
         'backbone','app','domReady', 'jqueryoffline'],
    function($,_,Backbone,app, domReady, jqueryoffline){
        domReady(function() {
            app.init();
        });
});
