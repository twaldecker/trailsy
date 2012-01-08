define(['jquery','backbone','router'], function($, Backbone, router){
    var init = function(){
        router.init();
        $("input#word").focus();
        // In here you can load your routers/views/whatever
    };

    return { init: init};
});