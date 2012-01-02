define(["jquery","underscore","backbone","views/detailResultList","views/searchResultList","views/loginDialog","views/signupDialog","collections/words","collections/detailWords"],function(a,b,c,d,e,f,g,h,i){var j=c.Router.extend({loginState:!1,routes:{"":"home",login:"login",logout:"logout",signup:"signup","search/:query/targetLang/:lang":"search","words/:word/targetLang/:lang":"words","validation/:id/code/:code":"validation"},initialize:function(){this.setLoginState(a("#loginLink").hasClass("hidden"))},home:function(){},setLoginState:function(a){this.loginState=a},getLoginState:function(){return this.loginState},checkLoginState:function(){return!1===this.getLoginState()?(this.navigate("login",!0),!1):!0},words:function(a,c){h.getOrFetch(a,b.bind(function(){var b=h.get(a);this.setSearchText(b.get("word"));var e=new i(b.get("translations"));e.url="words/"+a+"/translations",d.setCollection(e),d.render(c)},this)),this.setTargetLangValue(c)},setTargetLangValue:function(b){var c=a("#targetLanguage");c.val(b),e.setTargetLang(b)},setSearchText:function(b){var c=a("#searchInput");c.val(b)},search:function(b,c){a("#searchInput").addClass("loading"),h.fetch({data:jQuery.param({word:b,lang:c}),url:"words/search",success:function(){e.render(),a("#searchInput").removeClass("loading")},error:function(){a("#searchInput").removeClass("loading")}}),this.setSearchText(b),this.setTargetLangValue(c)},login:function(){f.show()},logout:function(){a.ajax({url:"/log_out",type:"GET",contentType:"application/json; charset=utf-8",beforeSend:function(b){var c=a('meta[name="csrf-token"]').attr("content");c&&b.setRequestHeader("X-CSRF-Token",c)},success:b.bind(function(){a("#logoutLink").addClass("hidden"),a("#loginLink").removeClass("hidden"),a("#signupLink").removeClass("hidden"),this.setLoginState(!1)},this),error:b.bind(console.log,this)})},signup:function(){console.log("show signup dialog"),g.show()},validation:function(c,d){a.ajax({url:"/user/"+c+"/validate/"+d,type:"GET",contentType:"application/json; charset=utf-8",beforeSend:function(b){var c=a('meta[name="csrf-token"]').attr("content");c&&b.setRequestHeader("X-CSRF-Token",c)},success:b.bind(console.log,"success"),error:b.bind(console.log,"failure")})}}),k=function(){window.AppRouter=new j,c.history.start({pushStack:!0})};return{init:k}})