require.config({
    paths: {
        'underscore': 'vendor/underscore',
        'backbone': 'vendor/backbone'
    }
})

require(['jquery',
         'underscore',
         'backbone',
         'app',
         'domReady',
         'vendor/detectmobilebrowser'],
    function($,_,Backbone,app, domReady, detection){
        domReady(function() {
            app.init();
        });
});
