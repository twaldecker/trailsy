define(['jquery','backbone','router', 'collections/words'], function($, Backbone, router, words){
    var init = function(){
        console.log("Started");
        //var router = new homeRouter;
        router.init();
        // In here you can load your routers/views/whatever
    };

    return { init: init};
});