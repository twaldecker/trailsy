define(['jquery','backbone','router'], function($, Backbone, router){
    var init = function(){
        router.init();
        $("#searchInput").focus();
        // In here you can load your routers/views/whatever
    };

    return { init: init};
});