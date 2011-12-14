require.config({
    jquery: 'vendor/jquery/dist/jquery',
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone'
})

require(['jquery',
         'order!vendor/underscore/underscore','order!vendor/backbone','order!app'],
    function($,_,Backbone,app){
        app.init();
});
