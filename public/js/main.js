require.config({
    paths: {
        'underscore': 'vendor/underscore',
        'backbone': 'vendor/backbone',
        'json2': 'vendor/json2',
        'jsoncache': 'vendor/jsoncache'
    }
})

require(['jquery',
         'underscore',
         'backbone',
         'app',
         'domReady',
         'vendor/detectmobilebrowser',
         'jsoncache',
         'json2'],
    function($,_,Backbone,app, domReady, detection, jsoncache, json2){
        domReady(function() {
            app.init();
        });
});
