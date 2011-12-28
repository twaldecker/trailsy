define(['jquery',
        'underscore',
        'backbone',
        'views/detailResultList',
        'views/searchResultList',
        'views/loginDialog',
        'views/signupDialog',
        'collections/words',
        'collections/detailWords'],
function($, _, Backbone, detailResultListView, searchResultListView, loginDialog, signupDialog, words, detailWords){
    var appRouter = Backbone.Router.extend({
        loginState: false,

        routes: {
            '': 'home',
            'login': 'login',
            'logout': 'logout',
            'signup': 'signup',
            'search/:query/targetLang/:lang': 'search',
            'words/:word/targetLang/:lang':  'words'
        },

        initialize: function() {
            //if loginLink is hidden we are logged in
            this.setLoginState( $('#loginLink').hasClass('hidden') );
        },

        'home': function(){
        },

        /**
         *
         * @param bool loggedIn
         */
        setLoginState: function(loggedIn) {
            this.loginState = loggedIn;
        },

        getLoginState: function() {
            return this.loginState;
        },

        words: function(id, targetLang) {
            words.getOrFetch(id,_.bind(function() {
                console.log('loaded word id: '+id);
                //var tmpWords = new detailWords({url:'words/'+id+'/translations'});
                var model = words.get(id);
                this.setSearchText(model.get('word'));
                //tmpWords.add(model);
                var tmpWords = new detailWords(model.get('translations') );
                tmpWords.url = 'words/'+id+'/translations';
                detailResultListView.setCollection(tmpWords);
                detailResultListView.render(id, targetLang);
            }, this));
            this.setTargetLangValue(targetLang);
        },

        setTargetLangValue: function(targetLang) {
            var options = $("#targetLanguage");
            options.val(targetLang);
            searchResultListView.setTargetLang(targetLang);
        },

        setSearchText: function(text) {
            var input = $('#searchInput');
            input.val(text);
        },

        search: function(query, targetLang) {
            $("#searchInput").addClass('loading');
            words.fetch({data: jQuery.param({word: query, lang: targetLang}),
                         url:'words/search',
                         success: function(){
                             searchResultListView.render();
                             $("#searchInput").removeClass('loading');
                            },
                         error: function() {$("#searchInput").removeClass('loading');}});
            this.setSearchText(query);
            this.setTargetLangValue(targetLang);
        },

        login: function() {
            console.log('show login dialog');
            loginDialog.show();
        },

        logout: function() {
            $.ajax({url:'/log_out',
                type:'GET',
                contentType: "application/json; charset=utf-8",
                beforeSend: function( xhr ) {
                    var token = $('meta[name="csrf-token"]').attr('content');
                    if (token) xhr.setRequestHeader('X-CSRF-Token', token);
                },
                success: _.bind(function(){
                    $('#logoutLink').addClass('hidden');
                    $('#loginLink').removeClass('hidden');
                    $('#signupLink').removeClass('hidden');
                    this.setLoginState(false);
                }, this),
                error: _.bind(console.log, this)
            });
        },
        
        signup: function() {
            console.log('show signup dialog');
            signupDialog.show();
        }
    });

    var init = function(){
        window.AppRouter = new appRouter;
        Backbone.history.start({pushStack:true});
    };
    return {
        init: init
    };
});
