require.config({
    jquery: 'vendor/jquery',
    underscore: 'vendor/underscore/underscore',
    backbone: 'vendor/backbone'
})

require(['jquery',
         'order!vendor/underscore/underscore','order!vendor/backbone','order!app','domReady'],
    function($,_,Backbone,app, domReady){
        domReady(function() {
            app.init();
        });
});
