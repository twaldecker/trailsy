define(['backbone','underscore','models/word'],function(Backbone,_,wordModel){
    var detailWords = Backbone.Collection.extend({
        model: wordModel,
        url: 'words',

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

    return detailWords;
});