define(['jquery','backbone','underscore'],function($,Backbone,_){
    /**
     * view for single detail result
     */
    var detailResultView = Backbone.View.extend({

        model: null,

        tagName: "li",
        className: "detailResult",

        template: _.template('<span class="rateUp"> &#000043;</span><span class="rateDown">&#008722;</span>   ' +
                             '<span class="word"> Translation: <%= word %></span>'),

        initialize: function() {
            _.bindAll(this, 'render', 'unrender');
            this.model = this.options.model;
            //this.model.bind('change', this.render);
            this.model.view = this;
        },

        unrender: function() {
            $(this.model.el).remove();
            return this;
        },

        render: function() {
            var model = this.model;
            var el = $(this.el);
            el.html(this.template(model));
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