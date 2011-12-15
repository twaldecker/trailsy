define(['backbone','underscore','models/word'],function(Backbone,_,wordModel){
    var words = Backbone.Collection.extend({
        model: wordModel,
        url: 'words'
    });

    return new words;
});