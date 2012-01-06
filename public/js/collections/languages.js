define(['underscore', 'backbone', 'models/language'],
    function(_,Backbone, languageModel) {
        var languages = Backbone.Collection.extend({

            model: languageModel,
            url:   'languages',

            initialize: function(attributes, options) {
                options || (options = {});
                this.init && this.init(attributes, options);
                this.fetch();
            }
        });

        return new languages;
    });