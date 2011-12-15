define(['backbone','underscore','models/word'],function(Backbone,_,wordModel){
    var words = Backbone.Collection.extend({
        model: wordModel,
        url: 'words',
        getOrFetch: function(id) {
            var word = this.get(id);
            if ('undefined' === typeof word) {
                this.fetch({url:this.url+'/'+id, success: function(fetchedWord){
                    return fetchedWord;
                }});
            } else {
                return word;
            }
        }
    });

    return new words;
});