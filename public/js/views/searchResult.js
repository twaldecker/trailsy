define(['jquery','underscore','backbone', 'text!templates/searchResult.html'],
function($,_,Backbone, searchResultTemplate){
    /**
     * view for single search result
     */
    var searchResultView = Backbone.View.extend({
        tagName: "li",
        /*className: "searchResult",*/

        initialize: function() {
            _.bindAll(this, 'render', 'unrender');
            this.model.bind('change', this.render);
            this.model.view = this;
            this.template = _.template(searchResultTemplate);
        },

        unrender: function() {
            $(this.model.el).remove();
            return this;
        },

        render: function() {
            var model = this.model.toJSON();
            var el = $(this.el);
            el.attr('data-id', model.id);
            el.html(this.template(model));
            this.model.el = el;
            return this;
        }

    });
    return searchResultView;
})
