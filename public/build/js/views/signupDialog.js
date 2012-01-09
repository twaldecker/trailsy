define(["jquery","underscore","text!templates/signup.html","views/flashMessage","i18n!nls/trailsy"],function(a,b,c,d,e){var f={signupHtml:null,mask:a("#mask"),errorDiv:null,form:null,show:function(){if(null===this.signupHtml){var d=b.template(c);this.signupHtml=a(d(e)),a("nav").append(this.signupHtml),this.errorDiv=a("#signup-box .error"),this.form=a("#signup-box form")}this.signupHtml.css({"margin-top":(this.signupHtml.height()+24)/-2,"margin-left":(this.signupHtml.width()+24)/-2}),this.signupHtml.fadeIn(300),this.mask.fadeIn(300),a("#signup-box a, #mask").on("click",b.bind(this.hide,this)),this.form.on("submit",b.bind(this.submitForm,this)),a("#signup-box #user_email").focus()},hide:function(){a("#mask , #signup-box").fadeOut(300,b.bind(function(){a("#signup-box a, #mask").unbind(),this.form.unbind(),a("#signup-box form input").val(""),this.clearErrors()},this)),AppRouter.navigate("home",!0)},clearErrors:function(){this.errorDiv.hide(),this.errorDiv.empty()},submitForm:function(){this.form.length&&a.ajax({url:"/users",data:this.form.serialize(),type:"POST",beforeSend:b.bind(function(b){var c=a('meta[name="csrf-token"]').attr("content");c&&b.setRequestHeader("X-CSRF-Token",c),this.clearErrors()},this),success:b.bind(this.signupSuccess,this),error:b.bind(this.signupError,this)})},signupSuccess:function(){d.showMessage("info",e.signup_aftersubmit),this.hide()},signupError:function(c,d,f){var g=a.parseJSON(c.responseText),h=a("<ul></ul>");b.each(g,function(c,d){var f=a("<li>");h.append(f),b.each(c,function(b){var c=a("<p>").text(e[b]);f.append(c)})}),this.errorDiv.append(h),this.errorDiv.show()},validation:function(c,d){a.ajax({url:"/user/"+c+"/validate/"+d,type:"GET",contentType:"application/json; charset=utf-8",beforeSend:function(b){var c=a('meta[name="csrf-token"]').attr("content");c&&b.setRequestHeader("X-CSRF-Token",c)},success:b.bind(this.validationSuccess,this),error:b.bind(this.validationError,this)})},validationSuccess:function(){d.showMessage("success",e.validation_success)},validationError:function(){d.showMessage("error",e.validation_error)}};return f})