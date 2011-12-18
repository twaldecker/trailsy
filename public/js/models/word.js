define(['backbone','underscore'],function(Backbone,_){
    var wordModel = Backbone.Model.extend({
        initialize: function(attributes, options) {
            options || (options = {});
            this.bind("error", this.defaultErrorHandler);
            this.init && this.init(attributes, options);
        },

        defaultErrorHandler: function(model, error) {
            if (error.status == 401 || error.status == 403) {
                AppRouter.navigate('login', true);
            }
        }

    });

    return wordModel;
});
