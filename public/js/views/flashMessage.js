define(['jquery',
        'underscore',
        'backbone',
        'text!templates/flashMessage.html'],
function($, _, Backbone, html, i18n){
  var flashMessage = {
    flashHtml: null,
  
    showMessage: function(vtype, vmessage) {
      var template = _.template(html);
      this.flashHtml = $(template({type: vtype, message: vmessage}));
      $('#flashMessage').append(this.flashHtml);
      this.flashHtml.fadeIn(1000).delay(4000).fadeOut(1000);
    }
  }
  return flashMessage;
});
