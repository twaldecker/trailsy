define(['jquery',
        'backbone',
        'underscore',
        'text!templates/detailResult.html'],
function($,Backbone,_,detailResultTemplate){
    /**
     * view for single detail result
     */
    var detailResultView = Backbone.View.extend({

        model: null,

        tagName: "li",
        className: "detailResult",

        template: null,

        initialize: function() {
            _.bindAll(this, 'render', 'unrender');
            this.model = this.options.model;
            this.model.bind('change', this.render);
            this.model.view = this;
            this.template = _.template(detailResultTemplate);
        },

        unrender: function() {
            $(this.model.el).remove();
            return this;
        },

        render: function() {
            var model = this.model;
            var el = $(this.el);
            el.html(this.template(model.toJSON()));
            var that = this;
            $('.rateUp', el).bind('click', function(){
                console.log('clicked rate up');
            });
            $('.rateDown', el).bind('click', function(){
                console.log('clicked rate down');
            });
            this.model.el = el;
            return this;
        }
    });

    return detailResultView;
});