require.config({
    jqueryoffline: 'vendor/jquery.offline',
    underscore: 'vendor/underscore-min',
    backbone: 'vendor/backbone'
})

require(['jquery',
         'order!vendor/underscore-min',
        'order!vendor/backbone','order!app','domReady', 'order!vendor/jquery.offline'],
    function($,_,Backbone,app, domReady, jqueryoffline){
        domReady(function() {
            app.init();
        });
});
