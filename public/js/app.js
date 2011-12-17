define(['jquery','backbone','router'], function($, Backbone, router){
    var init = function(){
        console.log("Started");
        router.init();
        $("#searchInput").focus();
        // In here you can load your routers/views/whatever
    };

    return { init: init};
});