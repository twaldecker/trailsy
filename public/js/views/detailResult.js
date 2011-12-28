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
            _.bindAll(this, 'render', 'unrender', 'editWord', 'saveWord');
            this.model = this.options.model;
            this.model.bind('change', this.render);
            this.model.view = this;
            this.template = _.template(detailResultTemplate);
        },

        editWord: function() {
            if (true === AppRouter.getLoginState()) {
                $('.detailWord', this.model.el).attr('contentEditable', true);
                $('.detailWord', this.model.el).focus();
                $('.detailExample', this.model.el).attr('contentEditable', true);
                $('.editIcon', this.model.el).addClass('hidden');
                $('.saveIcon', this.model.el).removeClass('hidden');
                $('.saveIcon', this.model.el).on('click', _.bind(this.saveWord, this));
            } else  {
                AppRouter.navigate('login', true);
            }
        },

        saveWord: function() {
            this.model.set({word: $('.detailWord', this.model.el).text()});
            this.model.set({example: $('.detailExample', this.model.el).text()});
            this.model.save();
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
            $('.rateUp', el).on('click', function(){
                console.log('clicked rate up');
            });
            $('.rateDown', el).on('click', function(){
                console.log('clicked rate down');
            });
            $('.editIcon', el).on('click', _.bind(this.editWord, this));
            $('.editIcon', el).removeClass('hidden');
            this.model.el = el;
            return this;
        }
    });

    return detailResultView;
});