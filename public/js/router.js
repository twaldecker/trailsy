define(['jquery',
        'underscore',
        'backbone',
        'views/detailResultList',
        'views/searchResultList',
        'views/loginDialog',
        'views/signupDialog',
        'views/flashMessage',
        'collections/words',
        'collections/translations',
        'i18n!nls/trailsy',
        'text!templates/backButton.html'],
function($, _, Backbone, detailResultListView, searchResultListView, loginDialog,
         signupDialog, flash, words, translations, i18n, backButtonHtml){
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
                var tmpWords = new translations(model.get('translations') );
                tmpWords.url = 'words/'+id+'/translations';
                if (true === $.browser.mobile) {
                    $('#translations').css("-webkit-transform","translate(0px, 0px)");
                    $('#search, #user').css("-webkit-transform","translate(-450px, 0px)");
                    var self = this;
                    setTimeout(function(){
                        var template = _.template(backButtonHtml);
                        var nav = $('nav').append(template(i18n));
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
            }, 500);


        },


        /**
         * set the Value of the
         * sourceLanguage select Box
         *
         * @param int fromLang
         */
        setFromLangValue: function(fromLang) {
            $("#sourceLanguage").val(fromLang);
        },

        /**
         * set the value of the targetLanguage Box
         *
         * @param int targetLang
         */
        setTargetLangValue: function(targetLang) {
            var options = $("#targetLanguage");
            options.val(targetLang);
        },

        /**
         * set the searchText of the search input filed
         *
         * @param string text
         */
        setSearchText: function(text) {
            this.input.val(text);
        },

        /**
         * trigger search in backend
         *
         * @param string query
         * @param int fromLang
         * @param int toLang
         */
        search: function(query, fromLang, toLang) {
            this.input.addClass('loading');
            words.fetch({data: jQuery.param({word: query, fromLang: fromLang }),
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
