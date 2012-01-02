define(['backbone','underscore','models/word'],function(Backbone,_,wordModel){
    var detailWords = Backbone.Collection.extend({
        model: wordModel,

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

        getOrFetch: function(id, callback) {
            var word = this.get(id);
            if ('undefined' === typeof word) {
                this.fetch({url:this.url+'/'+id,
                    success: _.bind(callback, this)
                });
            } else {
                callback();
            }
        },

        addOrUpdate: function(attributes, options) {
            var oldWord = this.find(function(word){
                return word.get('word') == attributes.word
            });
            if (!oldWord) {
                this.create(attributes, options);
            } else {
                oldWord.save(attributes, options);
            }
        }
    });

    return detailWords;
});