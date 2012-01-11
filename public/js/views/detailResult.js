define(['jquery',
        'backbone',
        'underscore',
        'text!templates/detailResult.html',
        'collections/languages'],
function($,Backbone,_,detailResultTemplate, languages){
    /**
     * view for single detail result
     */
    var detailResultView = Backbone.View.extend({

        model: null,

        tagName: "li",
        className: "detailResult",

        template: null,

        initialize: function() {
            _.bindAll(this, 'render', 'unrender', 'editWord', 'saveWord', 'onClickRating');
            this.model = this.options.model;
            this.model.bind('change', this.render);
            this.model.view = this;
            this.template = _.template(detailResultTemplate);
        },

        /**
         * handle clicking on rating buttons
         *
         * @param direction
         */
        onClickRating: function(direction) {
            if (false === AppRouter.checkLoginState()) return;
            var currentVote = this.model.get('user_voted');

            if (parseInt(currentVote, 10) === direction) {
                this.model.save({'user_voted': 0});
                return;
            }
            this.model.save({'user_voted': direction});
            return;
        },

        editWord: function() {
            if (true === AppRouter.getLoginState()) {
                $('.word h2', this.model.el).attr('contentEditable', true);
                $('.word h2', this.model.el).focus();
                $('.word p', this.model.el).attr('contentEditable', true);
                $('.edit.icon', this.model.el).addClass('hidden');
                $('.save.icon', this.model.el).removeClass('hidden');
                $('.save.icon', this.model.el).on('click', _.bind(this.saveWord, this));
            } else  {
                AppRouter.navigate('login', true);
            }
        },

        saveWord: function() {
            this.model.save({word:    $('.word h2', this.model.el).text(),
                             example: $('.word p', this.model.el).text()});
        },

        unrender: function() {
            $(this.model.el).remove();
            return this;
        },

        render: function() {
            var model = this.model;
            var el = $(this.el);


            var resultModel = model.toJSON();
            if (parseInt($('#targetLanguage').val(),10) === 1) {
                resultModel.lang  = languages.get(this.model.get('language_id')).get('code').toUpperCase();
            }
            el.html(this.template(resultModel));

            var userVoting = parseInt(model.get('user_voted'), 10);
            if (true === AppRouter.getLoginState() && userVoting !== 0) {
                if (userVoting === 1) {
                    $('.rateUp', el).addClass('voted');
                } else if (userVoting === -1) {
                    $('.rateDown', el).addClass('voted');
                }
            }

            $('.rateUp', el).on('click', _.bind(this.onClickRating, this, 1));
            $('.rateDown', el).on('click',  _.bind(this.onClickRating, this, -1));
            $('.edit.icon', el).on('click', _.bind(this.editWord, this));
            $('.edit.icon', el).removeClass('hidden');
            this.model.el = el;
            return this;
        }
    });

    return detailResultView;
});
