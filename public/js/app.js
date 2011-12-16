define(['jquery','backbone','router'], function($, Backbone, router){
    var init = function(){
        console.log("Started");
        //var router = new homeRouter;
        router.init();
        // In here you can load your routers/views/whatever
    };

    return { init: init};
});