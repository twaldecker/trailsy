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
        input: $("input#word"),

        routes: {
            '': 'home',
            'login': 'login',
            'logout': 'logout',
            'signup': 'signup',
            'search/:query/from/:fromLang/to/:toLang': 'search',
            'words/:word/targetLang/:lang':  'words',
            'validation/:id/code/:code': 'validation'
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

        checkLoginState: function() {
            if (false === this.getLoginState()) {
                this.navigate('login', true);
                return false;
            } else {
                return true;
            }
        },

        words: function(id, targetLang) {
            words.getOrFetch(id,_.bind(function() {
                var model = words.get(id);
                this.setSearchText(model.get('word'));
                var tmpWords = new detailWords(model.get('translations') );
                tmpWords.url = 'words/'+id+'/translations';
                detailResultListView.setCollection(tmpWords);
                detailResultListView.render(targetLang);
            }, this));
            this.setTargetLangValue(targetLang);
        },


        setFromLangValue: function(fromLang) {
            $("#sourceLanguage").val(fromLang);
        },

        setTargetLangValue: function(targetLang) {
            var options = $("#targetLanguage");
            options.val(targetLang);
        },

        setSearchText: function(text) {
            this.input.val(text);
        },

        search: function(query, fromLang, toLang) {
            this.input.addClass('loading');
            words.fetch({data: jQuery.param({word: query, fromLang: fromLang, toLang: toLang }),
                         url:'words/search',
                         success: function(){
                             searchResultListView.render();
                             $("input#word").removeClass('loading');
                            },
                         error: function() {$("input#word").removeClass('loading');}
            });
            this.setSearchText(query);
            this.setFromLangValue(fromLang)
            this.setTargetLangValue(toLang);
        },

        login: function() {
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
        },

        validation: function(id, code) {
            $.ajax({url: '/user/'+id+'/validate/'+code,
                type: 'GET',
                contentType: 'application/json; charset=utf-8',
                beforeSend: function( xhr ) {
                    var token = $('meta[name="csrf-token"]').attr('content');
                    if (token) xhr.setRequestHeader('X-CSRF-Token', token);
                },
                success: _.bind(console.log, "success"),
                error: _.bind(console.log, "failure")
            })
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
