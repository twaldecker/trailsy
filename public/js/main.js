require.config({
    paths: {
        'underscore': 'vendor/underscore',
        'backbone': 'vendor/backbone',
        'jquerymobile':'http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min'
    }
})

require(['jquery',
         'underscore',
         'backbone','app','domReady', 'vendor/detectmobilebrowser'],
    function($,_,Backbone,app, domReady, detection){
        domReady(function() {
            if ( false === $.browser.mobile) {

                var ss = document.createElement("link");
                ss.type = "text/css";
                ss.rel = "stylesheet";
                ss.href = 'http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.css';
                $("head").append( ss );
                /*
                var script = document.createElement( 'script' );
                script.type = 'text/javascript';
                var url = 'http://code.jquery.com/mobile/1.0/jquery.mobile-1.0.min.js';
                script.src = url;
                $("head").append( script );*/
                require(['require','jquerymobile'], function(require) {
                    $.mobile.hashListeningEnabled = false;
                    $.mobile.pushStateEnabled = false;
                });

            }
            app.init();
        });
});
