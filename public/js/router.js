define(['jquery',
        'underscore',
        'backbone',
        'views/detailResultList',
        'views/searchResultList',
        'views/loginDialog',
        'views/signupDialog',
        'views/flashMessage',
        'collections/words',
        'collections/detailWords',
        'i18n!nls/trailsy'],
function($, _, Backbone, detailResultListView, searchResultListView, loginDialog, signupDialog, flash, words, detailWords, i18n){
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
                this.setFromLangValue(model.get('language_id'));
                var tmpWords = new detailWords(model.get('translations') );
                tmpWords.url = 'words/'+id+'/translations';
                if (true === $.browser.mobile) {
                    $('#translations').css("-webkit-transform","translate(0px, 0px)");
                    $('#search, #user').css("-webkit-transform","translate(-450px, 0px)");
                    var self = this;
                    setTimeout(function(){
                        var nav = $('nav').append('<a href="#"  class="back">&#x2B05;</a>');
                        $('.back', nav).on('click', _.bind(self.onClickBack, self));
                        $('#search, #user').addClass('hidden');
                        detailResultListView.setCollection(tmpWords);
                        detailResultListView.render(targetLang);
                    }, 500);
                } else {
                    detailResultListView.setCollection(tmpWords);
                    detailResultListView.render(targetLang);
                }

            }, this));
            this.setTargetLangValue(targetLang);
        },

        /**
         * handler when clicking back on mobile phone
         * @param jquery event e
         */
        onClickBack: function(e) {
            e.preventDefault();
            e.stopPropagation();


            $('#translations, .back').css("-webkit-transform","translate(450px, 0px)");
            setTimeout(function(){
                $('.back').remove();
                $('#search, #user').removeClass('hidden');
                $('#search, #user').css("-webkit-transform","translate(0px, 0px)");
                window.history.back();
            }, 500);


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

        login: function() { loginDialog.show(); },
        logout: function() { loginDialog.logout(); },
        
        signup: function() { signupDialog.show(); },
        validation: function(id, code) { signupDialog.validation(id, code); }
    });

    var init = function(){
        window.AppRouter = new appRouter;
        Backbone.history.start({pushStack:true});
    };
    return {
        init: init
    };
});
