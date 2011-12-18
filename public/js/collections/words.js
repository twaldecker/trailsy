define(['backbone','underscore','models/word'],function(Backbone,_,wordModel){
    var words = Backbone.Collection.extend({
        model: wordModel,
        url: 'words',

        initialize: function(attributes, options) {
            options || (options = {});
            this.bind("error", this.defaultErrorHandler);
            this.init && this.init(attributes, options);
        },

        defaultErrorHandler: function(model, error) {
            if (error.status == 401 || error.status == 403) {
                AppRouter.navigate('login', true);
            }
        },

        /**
         * create own models for each translation
         * @param response
         *
        parse: function(response) {
            var words = [];
            var tmpWords = [];
            if (!_.isArray(response)) {
                tmpWords.push(response);
            } else {
                tmpWords = response;
            }
            _(tmpWords).each(function(word){
                words.push(word);
                _(word.translations).each(function(translation){
                    words.push(translation);
                });
            });

            return words;
        },*/

        getOrFetch: function(id, callback) {
            var word = this.get(id);
            if ('undefined' === typeof word) {
                this.fetch({url:this.url+'/'+id,
                            success: _.bind(callback, this)
                });
            } else {
                callback();
            }
        }
    });

    return new words;
});