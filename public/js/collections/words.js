define(['backbone','underscore','collections/abstractWords'],function(Backbone,_,abstractWords){
    var words = abstractWords.extend({
        url: 'words'


    });

    return new words;
});