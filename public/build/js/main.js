/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 1.0.1 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
/*!
 * jQuery JavaScript Library v1.7
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Nov 3 16:18:21 2011 -0400
 */
/*!
     * Sizzle CSS Selector Engine
     *  Copyright 2011, The Dojo Foundation
     *  Released under the MIT, BSD, and GPL Licenses.
     *  More information: http://sizzlejs.com/
     */
/**
 * @license RequireJS order 0.26.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
/*!
 * jQuery Offline
 * Version 1.0.0
 *
 * http://github.com/wycats/jquery-offline
 *
 * Copyright 2010, Yehuda Katz
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Date: Fri Jul 9 10:20:00 2010 -0800
 */

/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 1.0.1 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
/*!
 * jQuery JavaScript Library v1.7
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Nov 3 16:18:21 2011 -0400
 */
/*!
     * Sizzle CSS Selector Engine
     *  Copyright 2011, The Dojo Foundation
     *  Released under the MIT, BSD, and GPL Licenses.
     *  More information: http://sizzlejs.com/
     */
var requirejs,require,define;(function(){function isFunction(a){return ostring.call(a)==="[object Function]"}function isArray(a){return ostring.call(a)==="[object Array]"}function mixin(a,b,c){for(var d in b)!(d in empty)&&(!(d in a)||c)&&(a[d]=b[d]);return req}function makeError(a,b,c){var d=new Error(b+"\nhttp://requirejs.org/docs/errors.html#"+a);return c&&(d.originalError=c),d}function configurePackageDir(a,b,c){var d,e,f;for(d=0;f=b[d];d++)f=typeof f=="string"?{name:f}:f,e=f.location,c&&(!e||e.indexOf("/")!==0&&e.indexOf(":")===-1)&&(e=c+"/"+(e||f.name)),a[f.name]={name:f.name,location:e||f.name,main:(f.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}}function jQueryHoldReady(a,b){a.holdReady?a.holdReady(b):b?a.readyWait+=1:a.ready(!0)}function newContext(a){function t(a){var b,c;for(b=0;c=a[b];b++)if(c===".")a.splice(b,1),b-=1;else if(c==="..")if(b!==1||a[2]!==".."&&a[0]!=="..")b>0&&(a.splice(b-1,2),b-=2);else break}function u(a,b){var c,e;return a&&a.charAt(0)==="."&&b&&(d.pkgs[b]?b=[b]:(b=b.split("/"),b=b.slice(0,b.length-1)),a=b.concat(a.split("/")),t(a),e=d.pkgs[c=a[0]],a=a.join("/"),e&&a===c+"/"+e.main&&(a=c)),a}function v(a,c){var d=a?a.indexOf("!"):-1,e=null,f=c?c.name:null,i=a,j,k,l;return d!==-1&&(e=a.substring(0,d),a=a.substring(d+1,a.length)),e&&(e=u(e,f)),a&&(e?(l=h[e],l&&l.normalize?j=l.normalize(a,function(a){return u(a,f)}):j=u(a,f)):(j=u(a,f),k=g[j],k||(k=b.nameToUrl(j,null,c),g[j]=k))),{prefix:e,name:j,parentMap:c,url:k,originalName:i,fullName:e?e+"!"+(j||""):j}}function w(){var a=!0,b=d.priorityWait,c,e;if(b){for(e=0;c=b[e];e++)if(!j[c]){a=!1;break}a&&delete d.priorityWait}return a}function x(a,b,c){return function(){var d=aps.call(arguments,0),e;return c&&isFunction(e=d[d.length-1])&&(e.__requireJsBuild=!0),d.push(b),a.apply(null,d)}}function y(a,c){var d=x(b.require,a,c);return mixin(d,{nameToUrl:x(b.nameToUrl,a),toUrl:x(b.toUrl,a),defined:x(b.requireDefined,a),specified:x(b.requireSpecified,a),isBrowser:req.isBrowser}),d}function z(a){b.paused.push(a)}function A(a){var c,e,f,g,i,j=a.callback,m=a.map,n=m.fullName,p=a.deps,s=a.listeners;if(j&&isFunction(j)){if(d.catchError.define)try{e=req.execCb(n,a.callback,p,h[n])}catch(t){f=t}else e=req.execCb(n,a.callback,p,h[n]);n&&(a.cjsModule&&a.cjsModule.exports!==undefined?e=h[n]=a.cjsModule.exports:e===undefined&&a.usingExports?e=h[n]:(h[n]=e,q[n]&&(r[n]=!0)))}else n&&(e=h[n]=j,q[n]&&(r[n]=!0));k[a.id]&&(delete k[a.id],a.isDone=!0,b.waitCount-=1,b.waitCount===0&&(l=[])),delete o[n],req.onResourceLoad&&!a.placeholder&&req.onResourceLoad(b,m,a.depArray);if(f)return g=(n?v(n).url:"")||f.fileName||f.sourceURL,i=f.moduleTree,f=makeError("defineerror",'Error evaluating module "'+n+'" at location "'+g+'":\n'+f+"\nfileName:"+g+"\nlineNumber: "+(f.lineNumber||f.line),f),f.moduleName=n,f.moduleTree=i,req.onError(f);for(c=0;j=s[c];c++)j(e);return undefined}function B(a,b){return function(c){a.depDone[b]||(a.depDone[b]=!0,a.deps[b]=c,a.depCount-=1,a.depCount||A(a))}}function C(a,e){var f=e.map,g=f.fullName,i=f.name,k=p[a]||(p[a]=h[a]),l;if(e.loading)return;e.loading=!0,l=function(a){e.callback=function(){return a},A(e),j[e.id]=!0,c()},l.fromText=function(a,c){var d=useInteractive;j[a]=!1,b.scriptCount+=1,b.fake[a]=!0,d&&(useInteractive=!1),req.exec(c),d&&(useInteractive=!0),b.completeLoad(a)},g in h?l(h[g]):k.load(i,y(f.parentMap,!0),l,d)}function D(a){k[a.id]||(k[a.id]=a,l.push(a),b.waitCount+=1)}function E(a){this.listeners.push(a)}function F(a,b){var c=a.fullName,d=a.prefix,e=d?p[d]||(p[d]=h[d]):null,g,i,k;return c&&(g=o[c]),g||(i=!0,g={id:(d&&!e?n++ +"__p@:":"")+(c||"__r@"+n++),map:a,depCount:0,depDone:[],depCallbacks:[],deps:[],listeners:[],add:E},f[g.id]=!0,c&&(!d||p[d])&&(o[c]=g)),d&&!e?(k=F(v(d),!0),k.add(function(b){var c=v(a.originalName,a.parentMap),d=F(c,!0);g.placeholder=!0,d.add(function(a){g.callback=function(){return a},A(g)})})):i&&b&&(j[g.id]=!1,z(g),D(g)),g}function G(a,c,e,g){var i=v(a,g),l=i.name,n=i.fullName,o=F(i),p=o.id,s=o.deps,t,u,w,x,z;if(n){if(n in h||j[p]===!0||n==="jquery"&&d.jQuery&&d.jQuery!==e().fn.jquery)return;f[p]=!0,j[p]=!0,n==="jquery"&&e&&jQueryCheck(e())}o.depArray=c,o.callback=e;for(t=0;t<c.length;t++)u=c[t],u&&(u=v(u,l?i:g),w=u.fullName,x=u.prefix,c[t]=w,w==="require"?s[t]=y(i):w==="exports"?(s[t]=h[n]={},o.usingExports=!0):w==="module"?o.cjsModule=z=s[t]={id:l,uri:l?b.nameToUrl(l,null,g):undefined,exports:h[n]}:!(w in h)||w in k||n in q&&!(n in q&&r[w])?(n in q&&(q[w]=!0,delete h[w],m[u.url]=!1),o.depCount+=1,o.depCallbacks[t]=B(o,t),F(u,!0).add(o.depCallbacks[t])):s[t]=h[w]);o.depCount?D(o):A(o)}function H(a){G.apply(null,a)}function I(a,b){if(a.isDone)return undefined;var c=a.map.fullName,d=a.depArray,e,f,g,i,l,m;if(c){if(b[c])return h[c];b[c]=!0}if(d)for(e=0;e<d.length;e++)f=d[e],f&&(i=v(f).prefix,i&&(l=k[i])&&I(l,b),g=k[f],g&&!g.isDone&&j[f]&&(m=I(g,b),a.depCallbacks[e](m)));return c?h[c]:undefined}function J(){var a=d.waitSeconds*1e3,e=a&&b.startTime+a<(new Date).getTime(),f="",g=!1,h=!1,k,m,n;if(b.pausedCount>0)return undefined;if(d.priorityWait)if(w())c();else return undefined;for(k in j)if(!(k in empty)){g=!0;if(!j[k])if(e)f+=k+" ";else{h=!0;break}}if(!g&&!b.waitCount)return undefined;if(e&&f)return m=makeError("timeout","Load timeout for modules: "+f),m.requireType="timeout",m.requireModules=f,req.onError(m);if(h||b.scriptCount)return(isBrowser||isWebWorker)&&!checkLoadedTimeoutId&&(checkLoadedTimeoutId=setTimeout(function(){checkLoadedTimeoutId=0,J()},50)),undefined;if(b.waitCount){for(i=0;n=l[i];i++)I(n,{});b.paused.length&&c(),checkLoadedDepth<5&&(checkLoadedDepth+=1,J())}return checkLoadedDepth=0,req.checkReadyState(),undefined}var b,c,d={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},catchError:{}},e=[],f={require:!0,exports:!0,module:!0},g={},h={},j={},k={},l=[],m={},n=0,o={},p={},q={},r={},s=0;return jQueryCheck=function(a){if(!b.jQuery){var c=a||(typeof jQuery!="undefined"?jQuery:null);if(c){if(d.jQuery&&c.fn.jquery!==d.jQuery)return;if("holdReady"in c||"readyWait"in c)b.jQuery=c,H(["jquery",[],function(){return jQuery}]),b.scriptCount&&(jQueryHoldReady(c,!0),b.jQueryIncremented=!0)}}},c=function(){var a,c,f,g,h,i,k;s+=1,b.scriptCount<=0&&(b.scriptCount=0);while(e.length){i=e.shift();if(i[0]===null)return req.onError(makeError("mismatch","Mismatched anonymous define() module: "+i[i.length-1]));H(i)}if(!d.priorityWait||w())while(b.paused.length){h=b.paused,b.pausedCount+=h.length,b.paused=[];for(g=0;a=h[g];g++)c=a.map,f=c.url,k=c.fullName,c.prefix?C(c.prefix,a):!m[f]&&!j[k]&&(req.load(b,k,f),m[f]=!0);b.startTime=(new Date).getTime(),b.pausedCount-=h.length}return s===1&&J(),s-=1,undefined},b={contextName:a,config:d,defQueue:e,waiting:k,waitCount:0,specified:f,loaded:j,urlMap:g,urlFetched:m,scriptCount:0,defined:h,paused:[],pausedCount:0,plugins:p,needFullExec:q,fake:{},fullExec:r,managerCallbacks:o,makeModuleMap:v,normalize:u,configure:function(a){var e,f,g,h,i,j;a.baseUrl&&a.baseUrl.charAt(a.baseUrl.length-1)!=="/"&&(a.baseUrl+="/"),e=d.paths,g=d.packages,h=d.pkgs,mixin(d,a,!0);if(a.paths){for(f in a.paths)f in empty||(e[f]=a.paths[f]);d.paths=e}i=a.packagePaths;if(i||a.packages){if(i)for(f in i)f in empty||configurePackageDir(h,i[f],f);a.packages&&configurePackageDir(h,a.packages),d.pkgs=h}a.priority&&(j=b.requireWait,b.requireWait=!1,b.takeGlobalQueue(),c(),b.require(a.priority),c(),b.requireWait=j,d.priorityWait=a.priority),(a.deps||a.callback)&&b.require(a.deps||[],a.callback)},requireDefined:function(a,b){return v(a,b).fullName in h},requireSpecified:function(a,b){return v(a,b).fullName in f},require:function(d,e,f){var g,i,j;if(typeof d=="string")return isFunction(e)?req.onError(makeError("requireargs","Invalid require call")):req.get?req.get(b,d,e):(g=d,f=e,j=v(g,f),i=j.fullName,i in h?h[i]:req.onError(makeError("notloaded","Module name '"+j.fullName+"' has not been loaded yet for context: "+a)));(d&&d.length||e)&&G(null,d,e,f);if(!b.requireWait)while(!b.scriptCount&&b.paused.length)b.takeGlobalQueue(),c();return b.require},takeGlobalQueue:function(){globalDefQueue.length&&(apsp.apply(b.defQueue,[b.defQueue.length-1,0].concat(globalDefQueue)),globalDefQueue=[])},completeLoad:function(a){var d;b.takeGlobalQueue();while(e.length){d=e.shift();if(d[0]===null){d[0]=a;break}if(d[0]===a)break;H(d),d=null}d?H(d):H([a,[],a==="jquery"&&typeof jQuery!="undefined"?function(){return jQuery}:null]),jQueryCheck(),req.isAsync&&(b.scriptCount-=1),c(),req.isAsync||(b.scriptCount-=1)},toUrl:function(a,c){var d=a.lastIndexOf("."),e=null;return d!==-1&&(e=a.substring(d,a.length),a=a.substring(0,d)),b.nameToUrl(a,e,c)},nameToUrl:function(a,c,d){var e,f,g,h,i,j,k,l,m=b.config;a=u(a,d&&d.fullName);if(req.jsExtRegExp.test(a))l=a+(c?c:"");else{e=m.paths,f=m.pkgs,i=a.split("/");for(j=i.length;j>0;j--){k=i.slice(0,j).join("/");if(e[k]){i.splice(0,j,e[k]);break}if(g=f[k]){a===g.name?h=g.location+"/"+g.main:h=g.location,i.splice(0,j,h);break}}l=i.join("/")+(c||".js"),l=(l.charAt(0)==="/"||l.match(/^\w+:/)?"":m.baseUrl)+l}return m.urlArgs?l+((l.indexOf("?")===-1?"?":"&")+m.urlArgs):l}},b.jQueryCheck=jQueryCheck,b.resume=c,b}function getInteractiveScript(){var a,b,c;if(interactiveScript&&interactiveScript.readyState==="interactive")return interactiveScript;a=document.getElementsByTagName("script");for(b=a.length-1;b>-1&&(c=a[b]);b--)if(c.readyState==="interactive")return interactiveScript=c;return null}var version="1.0.1",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,cjsRequireRegExp=/require\(\s*["']([^'"\s]+)["']\s*\)/g,currDirRegExp=/^\.\//,jsSuffixRegExp=/\.js$/,ostring=Object.prototype.toString,ap=Array.prototype,aps=ap.slice,apsp=ap.splice,isBrowser=typeof window!="undefined"&&!!navigator&&!!document,isWebWorker=!isBrowser&&typeof importScripts!="undefined",readyRegExp=isBrowser&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera=typeof opera!="undefined"&&opera.toString()==="[object Opera]",empty={},contexts={},globalDefQueue=[],interactiveScript=null,checkLoadedDepth=0,useInteractive=!1,req,cfg={},currentlyAddingScript,s,head,baseElement,scripts,script,src,subPath,mainScript,dataMain,i,ctx,jQueryCheck,checkLoadedTimeoutId;if(typeof define!="undefined")return;if(typeof requirejs!="undefined"){if(isFunction(requirejs))return;cfg=requirejs,requirejs=undefined}typeof require!="undefined"&&!isFunction(require)&&(cfg=require,require=undefined),req=requirejs=function(a,b){var c=defContextName,d,e;return!isArray(a)&&typeof a!="string"&&(e=a,isArray(b)?(a=b,b=arguments[2]):a=[]),e&&e.context&&(c=e.context),d=contexts[c]||(contexts[c]=newContext(c)),e&&d.configure(e),d.require(a,b)},req.config=function(a){return req(a)},require||(require=req),req.toUrl=function(a){return contexts[defContextName].toUrl(a)},req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,s=req.s={contexts:contexts,skipAsync:{}},req.isAsync=req.isBrowser=isBrowser,isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=function(a){throw a},req.load=function(a,b,c){req.resourcesReady(!1),a.scriptCount+=1,req.attach(c,a,b),a.jQuery&&!a.jQueryIncremented&&(jQueryHoldReady(a.jQuery,!0),a.jQueryIncremented=!0)},define=function(a,b,c){var d,e;return typeof a!="string"&&(c=b,b=a,a=null),isArray(b)||(c=b,b=[]),!b.length&&isFunction(c)&&c.length&&(c.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(a,c){b.push(c)}),b=(c.length===1?["require"]:["require","exports","module"]).concat(b)),useInteractive&&(d=currentlyAddingScript||getInteractiveScript(),d&&(a||(a=d.getAttribute("data-requiremodule")),e=contexts[d.getAttribute("data-requirecontext")])),(e?e.defQueue:globalDefQueue).push([a,b,c]),undefined},define.amd={multiversion:!0,plugins:!0,jQuery:!0},req.exec=function(text){return eval(text)},req.execCb=function(a,b,c,d){return b.apply(d,c)},req.addScriptToDom=function(a){currentlyAddingScript=a,baseElement?head.insertBefore(a,baseElement):head.appendChild(a),currentlyAddingScript=null},req.onScriptLoad=function(a){var b=a.currentTarget||a.srcElement,c,d,e;if(a.type==="load"||b&&readyRegExp.test(b.readyState))interactiveScript=null,c=b.getAttribute("data-requirecontext"),d=b.getAttribute("data-requiremodule"),e=contexts[c],contexts[c].completeLoad(d),b.detachEvent&&!isOpera?b.detachEvent("onreadystatechange",req.onScriptLoad):b.removeEventListener("load",req.onScriptLoad,!1)},req.attach=function(a,b,c,d,e,f){var g;return isBrowser?(d=d||req.onScriptLoad,g=b&&b.config&&b.config.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),g.type=e||"text/javascript",g.charset="utf-8",g.async=!s.skipAsync[a],b&&g.setAttribute("data-requirecontext",b.contextName),g.setAttribute("data-requiremodule",c),g.attachEvent&&!isOpera?(useInteractive=!0,f?g.onreadystatechange=function(a){g.readyState==="loaded"&&(g.onreadystatechange=null,g.attachEvent("onreadystatechange",d),f(g))}:g.attachEvent("onreadystatechange",d)):g.addEventListener("load",d,!1),g.src=a,f||req.addScriptToDom(g),g):(isWebWorker&&(importScripts(a),b.completeLoad(c)),null)};if(isBrowser){scripts=document.getElementsByTagName("script");for(i=scripts.length-1;i>-1&&(script=scripts[i]);i--){head||(head=script.parentNode);if(dataMain=script.getAttribute("data-main")){cfg.baseUrl||(src=dataMain.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath,dataMain=mainScript.replace(jsSuffixRegExp,"")),cfg.deps=cfg.deps?cfg.deps.concat(dataMain):[dataMain];break}}}req.checkReadyState=function(){var a=s.contexts,b;for(b in a)if(!(b in empty)&&a[b].waitCount)return;req.resourcesReady(!0)},req.resourcesReady=function(a){var b,c,d;req.resourcesDone=a;if(req.resourcesDone){b=s.contexts;for(d in b)d in empty||(c=b[d],c.jQueryIncremented&&(jQueryHoldReady(c.jQuery,!1),c.jQueryIncremented=!1))}},req.pageLoaded=function(){document.readyState!=="complete"&&(document.readyState="complete")},isBrowser&&document.addEventListener&&(document.readyState||(document.readyState="loading",window.addEventListener("load",req.pageLoaded,!1))),req(cfg),req.isAsync&&typeof setTimeout!="undefined"&&(ctx=s.contexts[cfg.context||defContextName],ctx.requireWait=!0,setTimeout(function(){ctx.requireWait=!1,ctx.takeGlobalQueue(),ctx.jQueryCheck(),ctx.scriptCount||ctx.resume(),req.checkReadyState()},0))})(),function(a,b){function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function M(){return!1}function N(){return!0}function V(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function W(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(R.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function X(a){var b=Y.split(" "),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bl(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function bm(a,b){if(b.nodeType!==1||!f.hasData(a))return;var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}function bn(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}function bo(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bp(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bq(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bp(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bp)}function br(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bi,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bE(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bz:bA;if(d>0)return c!=="border"&&f.each(e,function(){c||(d-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?d+=parseFloat(f.css(a,c+this))||0:d-=parseFloat(f.css(a,"border"+this+"Width"))||0}),d+"px";d=bB(a,b,b);if(d<0||d==null)d=a.style[b]||0;return d=parseFloat(d)||0,c&&f.each(e,function(){d+=parseFloat(f.css(a,"padding"+this))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+this+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+this))||0)}),d+"px"}function b_(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bR),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function ca(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bV,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=ca(a,c,d,e,l,g)));return(k||!l)&&!g["*"]&&(l=ca(a,c,d,e,"*",g)),l}function cb(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function cc(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bG.test(a)?d(a,e):cc(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)cc(a+"["+e+"]",b[e],c,d);else d(a,b)}function cd(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j)return j!==f[0]&&f.unshift(j),d[j]}function ce(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ck(){try{return new a.XMLHttpRequest}catch(b){}}function cl(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cu(){return setTimeout(cv,0),ct=f.now()}function cv(){ct=b}function cw(a,b){var c={};return f.each(cs.concat.apply([],cs.slice(0,b)),function(){c[this]=a}),c}function cx(a){if(!cm[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cn||(cn=c.createElement("iframe"),cn.frameBorder=cn.width=cn.height=0),b.appendChild(cn);if(!co||!cn.createElement)co=(cn.contentWindow||cn.contentDocument).document,co.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),co.close();d=co.createElement(a),co.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cn)}cm[a]=e}return cm[a]}function cA(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c=a.document,d=a.navigator,e=a.location,f=function(){function K(){if(e.isReady)return;try{c.documentElement.doScroll("left")}catch(a){setTimeout(K,1);return}e.ready()}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=/-([a-z]|[0-9])/ig,x=/^-ms-/,y=function(a,b){return(b+"").toUpperCase()},z=d.userAgent,A,B,C,D=Object.prototype.toString,E=Object.prototype.hasOwnProperty,F=Array.prototype.push,G=Array.prototype.slice,H=String.prototype.trim,I=Array.prototype.indexOf,J={};return e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(a==="body"&&!d&&c.body)return this.context=c,this[0]=c.body,this.selector=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?g=[null,a,null]:g=i.exec(a);if(g&&(g[1]||!d)){if(g[1])return d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes),e.merge(this,a);h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}return this.context=c,this.selector=a,this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}return e.isFunction(a)?f.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),e.makeArray(a,this))},selector:"",jquery:"1.7",length:0,size:function(){return this.length},toArray:function(){return G.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();return e.isArray(a)?F.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return e.each(this,a,b)},ready:function(a){return e.bindReady(),B.add(a),this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(G.apply(this,arguments),"slice",G.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:F,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){return a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f),e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;B.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(B)return;B=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",C,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",C),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&K()}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return a!=null&&m.test(a)&&!isNaN(a)},type:function(a){return a==null?String(a):J[D.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!E.call(a,"constructor")&&!E.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||E.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(x,"ms-").replace(w,y)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:H?function(a){return a==null?"":H.call(a)}:function(a){return a==null?"":a.toString().replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?F.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(I)return I.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];return a.length=d,a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=G.call(arguments,2),g=function(){return a.apply(c,f.concat(G.call(arguments)))};return g.guid=a.guid=a.guid||g.guid||e.guid++,g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){return f&&f instanceof e&&!(f instanceof a)&&(f=a(f)),e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){J["[object "+b+"]"]=b.toLowerCase()}),A=e.uaMatch(z),A.browser&&(e.browser[A.browser]=!0,e.browser.version=A.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?C=function(){c.removeEventListener("DOMContentLoaded",C,!1),e.ready()}:c.attachEvent&&(C=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",C),e.ready())}),typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return e}),e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){return c=[],this},disable:function(){return c=d=e=b,this},disabled:function(){return!c},lock:function(){return d=b,(!e||e===!0)&&o.disable(),this},locked:function(){return!d},fireWith:function(b,c){return d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c)),this},fire:function(){return o.fireWith(this,arguments),this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){return i.done(a).fail(b).progress(c),this},always:function(){return i.done.apply(i,arguments).fail.apply(i,arguments)},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;return i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i),i},when:function(a){function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}var b=i.call(arguments,0),c=0,d=b.length,e=new Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=a.getElementsByTagName("input")[0],k={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,unknownElems:!!a.getElementsByTagName("nav").length,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:a.className!=="t",enctype:!!c.createElement("form").enctype,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,k.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,k.optDisabled=!h.disabled;try{delete a.test}catch(v){k.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function(){k.noCloneEvent=!1}),a.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),k.radioValue=i.value==="t",i.setAttribute("checked","checked"),a.appendChild(i),l=c.createDocumentFragment(),l.appendChild(a.lastChild),k.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",m=c.getElementsByTagName("body")[0],o=c.createElement(m?"div":"body"),p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},m&&f.extend(p,{position:"absolute",left:"-999px",top:"-999px"});for(t in p)o.style[t]=p[t];o.appendChild(a),n=m||b,n.insertBefore(o,n.firstChild),k.appendChecked=i.checked,k.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,k.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",k.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",q=a.getElementsByTagName("td"),u=q[0].offsetHeight===0,q[0].style.display="",q[1].style.display="none",k.reliableHiddenOffsets=u&&q[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",a.appendChild(j),k.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(a.attachEvent)for(t in{submit:1,change:1,focusin:1})s="on"+t,u=s in a,u||(a.setAttribute(s,"return;"),u=typeof a[s]=="function"),k[t+"Bubbles"]=u;return f(function(){var a,b,d,e,g,h,i=1,j="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",l="visibility:hidden;border:0;",n="style='"+j+"border:5px solid #000;padding:0;'",p="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>";m=c.getElementsByTagName("body")[0];if(!m)return;a=c.createElement("div"),a.style.cssText=l+"width:0;height:0;position:static;top:0;margin-top:"+i+"px",m.insertBefore(a,m.firstChild),o=c.createElement("div"),o.style.cssText=j+l,o.innerHTML=p,a.appendChild(o),b=o.firstChild,d=b.firstChild,g=b.nextSibling.firstChild.firstChild,h={doesNotAddBorder:d.offsetTop!==5,doesAddBorderForTableAndCells:g.offsetTop===5},d.style.position="fixed",d.style.top="20px",h.fixedPosition=d.offsetTop===20||d.offsetTop===15,d.style.position=d.style.top="",b.style.overflow="hidden",b.style.position="relative",h.subtractsBorderForOverflowNotVisible=d.offsetTop===-5,h.doesNotIncludeMarginInBodyOffset=m.offsetTop!==i,m.removeChild(a),o=a=null,f.extend(k,h)}),o.innerHTML="",n.removeChild(o),o=l=g=h=m=j=a=i=null,k}(),f.boxModel=f.support.boxModel;var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?f.cache[a[f.expando]]:a[f.expando],!!a&&!m(a)},data:function(a,c,d,e){if(!f.acceptData(a))return;var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[f.expando]:a[f.expando]&&f.expando,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[f.expando]=n=++f.uuid:n=f.expando),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);return g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d),o&&!h[c]?g.events:(k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h,i)},removeData:function(a,b,c){if(!f.acceptData(a))return;var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[f.expando]:f.expando;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)?b=b:b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" "));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[f.expando]:a.removeAttribute?a.removeAttribute(f.expando):a[f.expando]=null)},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}return typeof a=="object"?this.each(function(){f.data(this,a)}):(d=a.split("."),d[1]=d[1]?"."+d[1]:"",c===b?(h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h)),h===b&&d[1]?this.data(d[0]):h):this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)}))},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){return typeof a!="string"&&(c=a,a="fx"),c===b?f.queue(this[0],a):this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){return a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);return m(),d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){return a=f.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return f.isFunction(a)?this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];if(!arguments.length)return g?(c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type],c&&"get"in c&&(d=c.get(g,"value"))!==b?d:(d=g.value,typeof d=="string"?d.replace(q,""):d==null?"":d)):b;return e=f.isFunction(a),this.each(function(d){var g=f(this),h;if(this.nodeType!==1)return;e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}return j&&!h.length&&i.length?f(i[g]).val():h},set:function(a,b){var c=f.makeArray(b);return f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;return!a||j===3||j===8||j===2?b:e&&c in f.attrFn?f(a)[c](d):"getAttribute"in a?(i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w)),d!==b?d===null?(f.removeAttr(a,c),b):h&&"set"in h&&i&&(g=h.set(a,d,c))!==b?g:(a.setAttribute(c,""+d),d):h&&"get"in h&&i&&(g=h.get(a,c))!==null?g:(g=a.getAttribute(c),g===null?b:g)):f.prop(a,c,d)},removeAttr:function(a,b){var c,d,e,g,h=0;if(a.nodeType===1){d=(b||"").split(p),g=d.length;for(;h<g;h++)e=d[h].toLowerCase(),c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1)}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return w&&f.nodeName(a,"button")?w.get(a,b):b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;return!a||i===3||i===8||i===2?b:(h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]),d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c])},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);return e||(e=c.createAttribute(d),a.setAttributeNode(e)),e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/\.(.*)$/,A=/^(?:textarea|input|select)$/i,B=/\./g,C=/ /g,D=/[^\w\s.|`]/g,E=/^([^\.]*)?(?:\.(.+))?$/,F=/\bhover(\.\S+)?/,G=/^key/,H=/^(?:mouse|contextmenu)|click/,I=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,J=function(a){var b=I.exec(a);return b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)")),b},K=function(a,b){return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||a.id===b[2])&&(!b[3]||b[3].test(a.className))},L=function(a){return f.event.special.hover?a:a.replace(F,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))return;d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f=="undefined"||!!a&&f.event.triggered===a.type?b:f.event.dispatch.apply(i.elem,arguments)},i.elem=a),c=L(c).split(" ");for(k=0;k<c.length;k++){l=E.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,namespace:n.join(".")},p),g&&(o.quick=J(g),!o.quick&&f.expr.match.POS.test(g)&&(o.isPositional=!0)),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null},global:{},remove:function(a,b,c,d){var e=f.hasData(a)&&f._data(a),g,h,i,j,k,l,m,n,o,p,q;if(!e||!(m=e.events))return;b=L(b||"").split(" ");for(g=0;g<b.length;g++){h=E.exec(b[g])||[],i=h[1],j=h[2];if(!i){j=j?"."+j:"";for(l in m)f.event.remove(a,l+j,c,d);return}n=f.event.special[i]||{},i=(d?n.delegateType:n.bindType)||i,p=m[i]||[],k=p.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;if(c||j||d||n.remove)for(l=0;l<p.length;l++){q=p[l];if(!c||c.guid===q.guid)if(!j||j.test(q.namespace))if(!d||d===q.selector||d==="**"&&q.selector)p.splice(l--,1),q.selector&&p.delegateCount--,n.remove&&n.remove.call(a,q)}else p.length=0;p.length===0&&k!==p.length&&((!n.teardown||n.teardown.call(a,j)===!1)&&f.removeEvent(a,i,e.handle),delete m[i])}f.isEmptyObject(m)&&(o=e.handle,o&&(o.elem=null),f.removeData(a,["events","handle"],!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"",(g||!e)&&c.preventDefault();if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,n=null;for(m=e.parentNode;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length;l++){m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d);if(c.isPropagationStopped())break}return c.type=h,c.isDefaultPrevented()||(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n)),c.result}return},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=(f.event.special[c.type]||{}).handle,j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click"))for(m=c.target;m!=this;m=m.parentNode||this){o={},q=[];for(k=0;k<e;k++)r=d[k],s=r.selector,t=o[s],r.isPositional?t=(t||(o[s]=f(s))).index(m)>=0:t===b&&(t=o[s]=r.quick?K(m,r.quick):f(m).is(s)),t&&q.push(r);q.length&&j.push({elem:m,matches:q})}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){p=j[k],c.currentTarget=p.elem;for(l=0;l<p.matches.length&&!c.isImmediatePropagationStopped();l++){r=p.matches[l];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=(i||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;return a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];return a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey),h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},focus:{delegateType:"focusin",noBubble:!0},blur:{delegateType:"focusout",noBubble:!0},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(this instanceof f.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?N:M):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0;else return new f.Event(a,b)},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=N;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=N;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=N,this.stopPropagation()},isDefaultPrevented:M,isPropagationStopped:M,isImmediatePropagationStopped:M},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]=f.event.special[b]={delegateType:b,bindType:b,handle:function(a){var b=this,c=a.relatedTarget,d=a.handleObj,e=d.selector,g,h;if(!c||d.origType===a.type||c!==b&&!f.contains(b,c))g=a.type,a.type=d.origType,h=d.handler.apply(this,arguments),a.type=g;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(A.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;A.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return f.event.remove(this,"._change"),A.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=M;else if(!e)return this;return g===1&&(h=e,e=function(a){return f().off(a),h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++)),this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;return f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler),this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=M),this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return f(this.context).on(a,this.selector,b,c),this},die:function(a,b){return f(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;return f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),G.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),H.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){return i=!1,0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length!==1||w[0]!=="~"&&w[0]!=="+"||!d.parentNode?d:d.parentNode,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);return l&&(m(l,h,e,f),m.uniqueSort(e)),e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}return d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]),{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw"Syntax error, unrecognized expression: "+a};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);return a[0]=e++,a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");return!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" "),a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);return d||e.push.apply(e,g),!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){return a.unshift(!0),a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}return j=a.nodeIndex-e,c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){return a=Array.prototype.slice.call(a,0),b?(b.push.apply(b,a),b):a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){return a===b?(h=!0,0):!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition?-1:1:a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b)return h=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(b.querySelectorAll&&b.querySelectorAll(".TEST").length===0)return;m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!a.getElementsByClassName||a.getElementsByClassName("e").length===0)return;a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var O=/Until$/,P=/^(?:parents|prevUntil|prevAll)/,Q=/,/,R=/^.[^:#\[\.,]*$/,S=Array.prototype.slice,T=f.expr.match.POS,U={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(W(this,a,!1),"not",a)},filter:function(a){return this.pushStack(W(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?T.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=T.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}return c=c.length>1?f.unique(c):c,this.pushStack(c,"closest",a)},index:function(a){return a?typeof a=="string"?f.inArray(this[0],f(a)):f.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(V(c[0])||V(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=S.call(arguments);return O.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!U[a]?f.unique(e):e,(this.length>1||Q.test(d))&&P.test(a)&&(e=e.reverse()),this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var Y="abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",Z=/ jQuery\d+="(?:\d+|null)"/g,$=/^\s+/,_=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,ba=/<([\w:]+)/,bb=/<tbody/i,bc=/<|&#?\w+;/,bd=/<(?:script|style)/i,be=/<(?:script|object|embed|option|style)/i,bf=new RegExp("<(?:"+Y.replace(" ","|")+")","i"),bg=/checked\s*(?:[^=]|=\s*.checked.)/i,bh=/\/(java|ecma)script/i,bi=/^\s*<!(?:\[CDATA\[|\-\-)/,bj={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bk=X(c);bj.optgroup=bj.option,bj.tbody=bj.tfoot=bj.colgroup=bj.caption=bj.thead,bj.th=bj.td,f.support.htmlSerialize||(bj._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.isFunction(a)?this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))}):typeof a!="object"&&a!==b?this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a)):f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return f.isFunction(a)?this.each(function(b){f(this).wrapInner(a.call(this,b))}):this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);return a.push.apply(a,this.toArray()),this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);return a.push.apply(a,f(arguments[0]).toArray()),a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Z,""):null;if(typeof a=="string"&&!bd.test(a)&&(f.support.leadingWhitespace||!$.test(a))&&!bj[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(_,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){return this[0]&&this[0].parentNode?f.isFunction(a)?this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=f(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})):this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bg.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bl(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,br)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];return b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!be.test(j)&&(f.support.checkClone||!bg.test(j))&&!f.support.unknownElems&&bf.test(j)&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1),{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1)return e[b](this[0]),this;for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bn(a,d),e=bo(a),g=bo(d);for(h=0;e[h];++h)g[h]&&bn(e[h],g[h])}if(b){bm(a,d);if(c){e=bo(a),g=bo(d);for(h=0;e[h];++h)bm(e[h],g[h])}}return e=g=null,d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!bc.test(k))k=b.createTextNode(k);else{k=k.replace(_,"<$1></$2>");var l=(ba.exec(k)||["",""])[1].toLowerCase(),m=bj[l]||bj._default,n=m[0],o=b.createElement("div");b===c?bk.appendChild(o):X(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=bb.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&$.test(k)&&o.insertBefore(b.createTextNode($.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bq(k[i]);else bq(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||bh.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bs=/alpha\([^)]*\)/i,bt=/opacity=([^)]*)/,bu=/([A-Z]|^ms)/g,bv=/^-?\d+(?:px)?$/i,bw=/^-?\d/,bx=/^([\-+])=([\-+.\de]+)/,by={position:"absolute",visibility:"hidden",display:"block"},bz=["Left","Right"],bA=["Top","Bottom"],bB,bC,bD;f.fn.css=function(a,c){return arguments.length===2&&c===b?this:f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bB(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b)return k&&"get"in k&&(g=k.get(a,!1,e))!==b?g:j[c];h=typeof d,h==="string"&&(g=bx.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bB)return bB(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c)return a.offsetWidth!==0?bE(a,b,d):(f.swap(a,by,function(){e=bE(a,b,d)}),e)},set:function(a,b){if(!bv.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bt.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bs,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bs.test(g)?g.replace(bs,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;return f.swap(a,{display:"inline-block"},function(){b?c=bB(a,"margin-right","marginRight"):c=a.style.marginRight}),c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bC=function(a,c){var d,e,g;c=c.replace(bu,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bD=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;return f===null&&g&&(e=g[b])&&(f=e),!bv.test(f)&&bw.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d)),f===""?"auto":f}),bB=bC||bD,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bF=/%20/g,bG=/\[\]$/,bH=/\r?\n/g,bI=/#.*$/,bJ=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bK=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bL=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bM=/^(?:GET|HEAD)$/,bN=/^\/\//,bO=/\?/,bP=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bQ=/^(?:select|textarea)/i,bR=/\s+/,bS=/([?&])_=[^&]*/,bT=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bU=f.fn.load,bV={},bW={},bX,bY,bZ=["*/"]+["*"];try{bX=e.href}catch(b$){bX=c.createElement("a"),bX.href="",bX=bX.href}bY=bT.exec(bX.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bU)return bU.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;return f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bP,"")).find(g):c)),d&&i.each(d,[c,b,a])}}),this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bQ.test(this.nodeName)||bK.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bH,"\r\n")}}):{name:b.name,value:c.replace(bH,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){return f.isFunction(d)&&(g=g||e,e=d,d=b),f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cb(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),cb(a,b),a},ajaxSettings:{url:bX,isLocal:bL.test(bY[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bZ},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:b_(bV),ajaxTransport:b_(bW),ajax:function(a,c){function w(a,c,l,m){if(s===2)return;s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cd(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=ce(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bJ.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return s||(d.mimeType=a),this},abort:function(a){return a=a||"abort",p&&p.abort(a),w(0,a),this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bI,"").replace(bN,bY[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bR),d.crossDomain==null&&(r=bT.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bY[1]&&r[2]==bY[2]&&(r[3]||(r[1]==="http:"?80:443))==(bY[3]||(bY[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),ca(bV,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bM.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bO.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bS,"$1_="+x);d.url=y+(y===d.url?(bO.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bZ+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(!d.beforeSend||d.beforeSend.call(e,v,d)!==!1&&s!==2){for(u in{success:1,error:1,complete:1})v[u](d[u]);p=ca(bW,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){s<2?w(-1,z):f.error(z)}}return v}return v.abort(),!1},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)cc(g,a[g],c,e);return d.join("&").replace(bF,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cf=f.now(),cg=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cf++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cg.test(b.url)||e&&cg.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";return b.jsonp!==!1&&(j=j.replace(cg,l),b.url===j&&(e&&(k=k.replace(cg,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){return g||f.error(h+" was not called"),g[0]},b.dataTypes[0]="json","script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return f.globalEval(a),a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ch=a.ActiveXObject?function(){for(var a in cj)cj[a](0,1)}:!1,ci=0,cj;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ck()||cl()}:ck,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ch&&delete cj[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++ci,ch&&(cj||(cj={},f(a).unload(ch)),cj[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cm={},cn,co,cp=/^(?:toggle|show|hide)$/,cq=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cr,cs=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],ct;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cw("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cx(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cw("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";return f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cw("toggle",3),a,b,c),this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cx(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cp.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=cq.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);return f.isEmptyObject(a)?this.each(e.complete,[!1]):(a=f.extend({},a),e.queue===!1?this.each(g):this.queue(e.queue,g))},stop:function(a,c,d){return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cw("show",1),slideUp:cw("hide",1),slideToggle:cw("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)},d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]==null||!!this.elem.style&&this.elem.style[this.prop]!=null){var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a}return this.elem[this.prop]},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=ct||cu(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cr&&(cr=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=ct||cu(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}return i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cr),cr=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now))}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cy=/^t(?:able|d|h)$/i,cz=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cA(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cy.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;return f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft)),{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cz.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cz.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;return c===b?(e=this[0],e?(g=cA(e),g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]):null):this.each(function(){g=cA(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f}(window);
/**
 * @license RequireJS order 0.26.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
(function(){function e(a){var e=a.currentTarget||a.srcElement,f,g,h;if(a.type==="load"||b.test(e.readyState)){g=e.getAttribute("data-requiremodule"),d[g]=!0;for(f=0;h=c[f];f++)if(d[h.name])h.req([h.name],h.onLoad);else break;f>0&&c.splice(0,f),setTimeout(function(){e.parentNode.removeChild(e)},15)}}var a=typeof document!="undefined"&&typeof window!="undefined"&&(document.createElement("script").async||window.opera&&Object.prototype.toString.call(window.opera)==="[object Opera]"||"MozAppearance"in document.documentElement.style),b=/^(complete|loaded)$/,c=[],d={};define('order',{version:"0.26.0",load:function(b,d,f,g){var h=d.nameToUrl(b,null);if(g.isBuild){d([b],f);return}require.s.skipAsync[h]=!0,a?d([b],f):d.specified(b)?d([b],f):(c.push({name:b,req:d,onLoad:f}),require.attach(h,null,b,e,"script/cache"))}})})();
// Underscore.js 1.2.2
// (c) 2011 Jeremy Ashkenas, DocumentCloud Inc.
// Underscore is freely distributable under the MIT license.
// Portions of Underscore are inspired or borrowed from Prototype,
// Oliver Steele's Functional, and John Resig's Micro-Templating.
// For all details and documentation:
// http://documentcloud.github.com/underscore
(function(){function r(a,c,d){if(a===c)return a!==0||1/a==1/c;if(a==null||c==null)return a===c;if(a._chain)a=a._wrapped;if(c._chain)c=c._wrapped;if(b.isFunction(a.isEqual))return a.isEqual(c);if(b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return false;switch(e){case "[object String]":return String(a)==String(c);case "[object Number]":return a=+a,c=+c,a!=a?c!=c:a==0?1/a==1/c:a==c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==
c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if(typeof a!="object"||typeof c!="object")return false;for(var f=d.length;f--;)if(d[f]==a)return true;d.push(a);var f=0,g=true;if(e=="[object Array]"){if(f=a.length,g=f==c.length)for(;f--;)if(!(g=f in a==f in c&&r(a[f],c[f],d)))break}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return false;for(var h in a)if(m.call(a,h)&&(f++,!(g=m.call(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(m.call(c,
h)&&!f--)break;g=!f}}d.pop();return g}var s=this,F=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,G=k.unshift,l=p.toString,m=p.hasOwnProperty,v=k.forEach,w=k.map,x=k.reduce,y=k.reduceRight,z=k.filter,A=k.every,B=k.some,q=k.indexOf,C=k.lastIndexOf,p=Array.isArray,H=Object.keys,t=Function.prototype.bind,b=function(a){return new n(a)};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports)exports=module.exports=b;exports._=b}else typeof define==="function"&&define.amd?
define('underscore',[],function(){return b}):s._=b;b.VERSION="1.2.2";var j=b.each=b.forEach=function(a,c,b){if(a!=null)if(v&&a.forEach===v)a.forEach(c,b);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(b,a[e],e,a)===o)break}else for(e in a)if(m.call(a,e)&&c.call(b,a[e],e,a)===o)break};b.map=function(a,c,b){var e=[];if(a==null)return e;if(w&&a.map===w)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=
d!==void 0;a==null&&(a=[]);if(x&&a.reduce===x)return e&&(c=b.bind(c,e)),f?a.reduce(c,d):a.reduce(c);j(a,function(a,b,i){f?d=c.call(e,d,a,b,i):(d=a,f=true)});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){a==null&&(a=[]);if(y&&a.reduceRight===y)return e&&(c=b.bind(c,e)),d!==void 0?a.reduceRight(c,d):a.reduceRight(c);a=(b.isArray(a)?a.slice():b.toArray(a)).reverse();return b.reduce(a,c,d,e)};b.find=b.detect=function(a,c,b){var e;
D(a,function(a,g,h){if(c.call(b,a,g,h))return e=a,true});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.filter===z)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(A&&a.every===A)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,a,g,h)))return o});
return e};var D=b.some=b.any=function(a,c,d){var c=c||b.identity,e=false;if(a==null)return e;if(B&&a.some===B)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;return q&&a.indexOf===q?a.indexOf(c)!=-1:b=D(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(c.call?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};
b.max=function(a,c,d){if(!c&&b.isArray(a))return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a))return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var c=[],b;
j(a,function(a,f){f==0?c[0]=a:(b=Math.floor(Math.random()*(f+1)),c[f]=c[b],c[b]=a)});return c};b.sortBy=function(a,c,d){return b.pluck(b.map(a,function(a,b,g){return{value:a,criteria:c.call(d,a,b,g)}}).sort(function(a,c){var b=a.criteria,d=c.criteria;return b<d?-1:b>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};j(a,function(a,c){var b=e(a,c);(d[b]||(d[b]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<
f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:a.toArray?a.toArray():b.isArray(a)?i.call(a):b.isArguments(a)?i.call(a):b.values(a)};b.size=function(a){return b.toArray(a).length};b.first=b.head=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||
d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];b.reduce(d,function(d,g,h){if(0==h||(c===true?b.last(d)!=g:!b.include(d,g)))d[d.length]=g,e[e.length]=a[h];return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,
true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a,c){return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d)return d=b.sortedIndex(a,c),a[d]===c?d:-1;if(q&&a.indexOf===q)return a.indexOf(c);
for(d=0,e=a.length;d<e;d++)if(a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(C&&a.lastIndexOf===C)return a.lastIndexOf(b);for(var d=a.length;d--;)if(a[d]===b)return d;return-1};b.range=function(a,b,d){arguments.length<=1&&(b=a||0,a=0);for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;)g[f++]=a,a+=d;return g};var E=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;
e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));E.prototype=a.prototype;var b=new E,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var b=c.apply(this,arguments);return m.call(d,b)?d[b]:d[b]=a.apply(this,arguments)}};b.delay=
function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(a,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i=b.debounce(function(){h=g=false},c);return function(){d=this;e=arguments;var b;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);i()},c));g?h=true:a.apply(d,e);i();g=true}};b.debounce=function(a,b){var d;return function(){var e=this,f=arguments;clearTimeout(d);d=setTimeout(function(){d=
null;a.apply(e,f)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments));return b.apply(this,d)}};b.compose=function(){var a=i.call(arguments);return function(){for(var b=i.call(arguments),d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=H||function(a){if(a!==
Object(a))throw new TypeError("Invalid object");var b=[],d;for(d in a)m.call(a,d)&&(b[b.length]=d);return b};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)b[d]!==void 0&&(a[d]=b[d])});return a};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?
a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=function(a){if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(m.call(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=l.call(arguments)=="[object Arguments]"?function(a){return l.call(a)=="[object Arguments]"}:
function(a){return!(!a||!m.call(a,"callee"))};b.isFunction=function(a){return l.call(a)=="[object Function]"};b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};
b.isUndefined=function(a){return a===void 0};b.noConflict=function(){s._=F;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.mixin=function(a){j(b.functions(a),function(c){I(c,b[c]=a[c])})};var J=0;b.uniqueId=function(a){var b=J++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,
interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};b.template=function(a,c){var d=b.templateSettings,d="var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"+a.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(d.escape,function(a,b){return"',_.escape("+b.replace(/\\'/g,"'")+"),'"}).replace(d.interpolate,function(a,b){return"',"+b.replace(/\\'/g,"'")+",'"}).replace(d.evaluate||null,function(a,b){return"');"+b.replace(/\\'/g,"'").replace(/[\r\n\t]/g," ")+";__p.push('"}).replace(/\r/g,
"\\r").replace(/\n/g,"\\n").replace(/\t/g,"\\t")+"');}return __p.join('');",e=new Function("obj","_",d);return c?e(c,b):function(a){return e(a,b)}};var n=function(a){this._wrapped=a};b.prototype=n.prototype;var u=function(a,c){return c?b(a).chain():a},I=function(a,c){n.prototype[a]=function(){var a=i.call(arguments);G.call(a,this._wrapped);return u(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];n.prototype[a]=function(){b.apply(this._wrapped,
arguments);return u(this._wrapped,this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];n.prototype[a]=function(){return u(b.apply(this._wrapped,arguments),this._chain)}});n.prototype.chain=function(){this._chain=true;return this};n.prototype.value=function(){return this._wrapped}}).call(this);

define("vendor/underscore-min", function(){});

//     Backbone.js 0.5.3
//     (c) 2010 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://documentcloud.github.com/backbone


(function(root, factory) {
    // Set up Backbone appropriately for the environment.
    if (typeof exports !== 'undefined') {
        // Node/CommonJS, no need for jQuery in that case.
        factory(root, exports, require('underscore'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define('backbone', ['underscore', 'jquery', 'exports'], function(_, $, exports) {
            factory(root, exports, _, $);
        });
    } else {
        // Browser globals
        root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender));
    }
}(this, function(root, Backbone, _, $) {

    // Initial Setup
    // -------------

    // Save the previous value of the `Backbone` variable.
    var previousBackbone = root.Backbone;

    // Create a local reference to slice.
    var slice = Array.prototype.slice;

    // Current version of the library. Keep in sync with `package.json`.
    Backbone.VERSION = '0.5.3';

    // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
    // to its previous owner. Returns a reference to this Backbone object.
    Backbone.noConflict = function() {
        root.Backbone = previousBackbone;
        return Backbone;
    };

    // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option will
    // fake `"PUT"` and `"DELETE"` requests via the `_method` parameter and set a
    // `X-Http-Method-Override` header.
    Backbone.emulateHTTP = false;

    // Turn on `emulateJSON` to support legacy servers that can't deal with direct
    // `application/json` requests ... will encode the body as
    // `application/x-www-form-urlencoded` instead and will send the model in a
    // form param named `model`.
    Backbone.emulateJSON = false;

    // Backbone.Events
    // -----------------

    // A module that can be mixed in to *any object* in order to provide it with
    // custom events. You may `bind` or `unbind` a callback function to an event;
    // `trigger`-ing an event fires all callbacks in succession.
    //
    //     var object = {};
    //     _.extend(object, Backbone.Events);
    //     object.bind('expand', function(){ alert('expanded'); });
    //     object.trigger('expand');
    //
    Backbone.Events = {

        // Bind an event, specified by a string name, `ev`, to a `callback` function.
        // Passing `"all"` will bind the callback to all events fired.
        bind : function(ev, callback, context) {
            var calls = this._callbacks || (this._callbacks = {});
            var list  = calls[ev] || (calls[ev] = {});
            var tail = list.tail || (list.tail = list.next = {});
            tail.callback = callback;
            tail.context = context;
            list.tail = tail.next = {};
            return this;
        },

        // Remove one or many callbacks. If `callback` is null, removes all
        // callbacks for the event. If `ev` is null, removes all bound callbacks
        // for all events.
        unbind : function(ev, callback) {
            var calls, node, prev;
            if (!ev) {
                this._callbacks = null;
            } else if (calls = this._callbacks) {
                if (!callback) {
                    calls[ev] = {};
                } else if (node = calls[ev]) {
                    while ((prev = node) && (node = node.next)) {
                        if (node.callback !== callback) continue;
                        prev.next = node.next;
                        node.context = node.callback = null;
                        break;
                    }
                }
            }
            return this;
        },

        // Trigger an event, firing all bound callbacks. Callbacks are passed the
        // same arguments as `trigger` is, apart from the event name.
        // Listening for `"all"` passes the true event name as the first argument.
        trigger : function(eventName) {
            var node, calls, callback, args, ev, events = ['all', eventName];
            if (!(calls = this._callbacks)) return this;
            while (ev = events.pop()) {
                if (!(node = calls[ev])) continue;
                args = ev == 'all' ? arguments : slice.call(arguments, 1);
                while (node = node.next) if (callback = node.callback) callback.apply(node.context || this, args);
            }
            return this;
        }

    };

    // Backbone.Model
    // --------------

    // Create a new model, with defined attributes. A client id (`cid`)
    // is automatically generated and assigned for you.
    Backbone.Model = function(attributes, options) {
        var defaults;
        attributes || (attributes = {});
        if (defaults = this.defaults) {
            if (_.isFunction(defaults)) defaults = defaults.call(this);
            attributes = _.extend({}, defaults, attributes);
        }
        this.attributes = {};
        this._escapedAttributes = {};
        this.cid = _.uniqueId('c');
        this.set(attributes, {silent : true});
        this._changed = false;
        this._previousAttributes = _.clone(this.attributes);
        if (options && options.collection) this.collection = options.collection;
        this.initialize(attributes, options);
    };

    // Attach all inheritable methods to the Model prototype.
    _.extend(Backbone.Model.prototype, Backbone.Events, {

        // Has the item been changed since the last `"change"` event?
        _changed : false,

        // The default name for the JSON `id` attribute is `"id"`. MongoDB and
        // CouchDB users may want to set this to `"_id"`.
        idAttribute : 'id',

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize : function(){},

        // Return a copy of the model's `attributes` object.
        toJSON : function() {
            return _.clone(this.attributes);
        },

        // Get the value of an attribute.
        get : function(attr) {
            return this.attributes[attr];
        },

        // Get the HTML-escaped value of an attribute.
        escape : function(attr) {
            var html;
            if (html = this._escapedAttributes[attr]) return html;
            var val = this.attributes[attr];
            return this._escapedAttributes[attr] = _.escape(val == null ? '' : '' + val);
        },

        // Returns `true` if the attribute contains a value that is not null
        // or undefined.
        has : function(attr) {
            return this.attributes[attr] != null;
        },

        // Set a hash of model attributes on the object, firing `"change"` unless you
        // choose to silence it.
        set : function(attrs, options) {

            // Extract attributes and options.
            options || (options = {});
            if (!attrs) return this;
            if (attrs.attributes) attrs = attrs.attributes;
            var now = this.attributes, escaped = this._escapedAttributes;

            // Run validation.
            if (!options.silent && this.validate && !this._performValidation(attrs, options)) return false;

            // Check for changes of `id`.
            if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

            // We're about to start triggering change events.
            var alreadyChanging = this._changing;
            this._changing = true;

            // Update attributes.
            for (var attr in attrs) {
                var val = attrs[attr];
                if (!_.isEqual(now[attr], val)) {
                    now[attr] = val;
                    delete escaped[attr];
                    this._changed = true;
                    if (!options.silent) this.trigger('change:' + attr, this, val, options);
                }
            }

            // Fire the `"change"` event, if the model has been changed.
            if (!alreadyChanging) {
                if (!options.silent && this._changed) this.change(options);
                this._changing = false;
            }
            return this;
        },

        // Remove an attribute from the model, firing `"change"` unless you choose
        // to silence it. `unset` is a noop if the attribute doesn't exist.
        unset : function(attr, options) {
            if (!(attr in this.attributes)) return this;
            options || (options = {});
            var value = this.attributes[attr];

            // Run validation.
            var validObj = {};
            validObj[attr] = void 0;
            if (!options.silent && this.validate && !this._performValidation(validObj, options)) return false;

            // changedAttributes needs to know if an attribute has been unset.
            (this._unsetAttributes || (this._unsetAttributes = [])).push(attr);

            // Remove the attribute.
            delete this.attributes[attr];
            delete this._escapedAttributes[attr];
            if (attr == this.idAttribute) delete this.id;
            this._changed = true;
            if (!options.silent) {
                this.trigger('change:' + attr, this, void 0, options);
                this.change(options);
            }
            return this;
        },

        // Clear all attributes on the model, firing `"change"` unless you choose
        // to silence it.
        clear : function(options) {
            options || (options = {});
            var attr;
            var old = this.attributes;

            // Run validation.
            var validObj = {};
            for (attr in old) validObj[attr] = void 0;
            if (!options.silent && this.validate && !this._performValidation(validObj, options)) return false;

            this.attributes = {};
            this._escapedAttributes = {};
            this._changed = true;
            if (!options.silent) {
                for (attr in old) {
                    this.trigger('change:' + attr, this, void 0, options);
                }
                this.change(options);
            }
            return this;
        },

        // Fetch the model from the server. If the server's representation of the
        // model differs from its current attributes, they will be overriden,
        // triggering a `"change"` event.
        fetch : function(options) {
            options || (options = {});
            var model = this;
            var success = options.success;
            options.success = function(resp, status, xhr) {
                if (!model.set(model.parse(resp, xhr), options)) return false;
                if (success) success(model, resp);
            };
            options.error = wrapError(options.error, model, options);
            return (this.sync || Backbone.sync).call(this, 'read', this, options);
        },

        // Set a hash of model attributes, and sync the model to the server.
        // If the server returns an attributes hash that differs, the model's
        // state will be `set` again.
        save : function(attrs, options) {
            options || (options = {});
            if (attrs && !this.set(attrs, options)) return false;
            var model = this;
            var success = options.success;
            options.success = function(resp, status, xhr) {
                if (!model.set(model.parse(resp, xhr), options)) return false;
                if (success) success(model, resp, xhr);
            };
            options.error = wrapError(options.error, model, options);
            var method = this.isNew() ? 'create' : 'update';
            return (this.sync || Backbone.sync).call(this, method, this, options);
        },

        // Destroy this model on the server if it was already persisted. Upon success, the model is removed
        // from its collection, if it has one.
        destroy : function(options) {
            options || (options = {});
            if (this.isNew()) return this.trigger('destroy', this, this.collection, options);
            var model = this;
            var success = options.success;
            options.success = function(resp) {
                model.trigger('destroy', model, model.collection, options);
                if (success) success(model, resp);
            };
            options.error = wrapError(options.error, model, options);
            return (this.sync || Backbone.sync).call(this, 'delete', this, options);
        },

        // Default URL for the model's representation on the server -- if you're
        // using Backbone's restful methods, override this to change the endpoint
        // that will be called.
        url : function() {
            var base = getUrl(this.collection) || this.urlRoot || urlError();
            if (this.isNew()) return base;
            return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + encodeURIComponent(this.id);
        },

        // **parse** converts a response into the hash of attributes to be `set` on
        // the model. The default implementation is just to pass the response along.
        parse : function(resp, xhr) {
            return resp;
        },

        // Create a new model with identical attributes to this one.
        clone : function() {
            return new this.constructor(this);
        },

        // A model is new if it has never been saved to the server, and lacks an id.
        isNew : function() {
            return this.id == null;
        },

        // Call this method to manually fire a `change` event for this model.
        // Calling this will cause all objects observing the model to update.
        change : function(options) {
            this.trigger('change', this, options);
            this._previousAttributes = _.clone(this.attributes);
            this._unsetAttributes = null;
            this._changed = false;
        },

        // Determine if the model has changed since the last `"change"` event.
        // If you specify an attribute name, determine if that attribute has changed.
        hasChanged : function(attr) {
            if (attr) return this._previousAttributes[attr] != this.attributes[attr];
            return this._changed;
        },

        // Return an object containing all the attributes that have changed, or false
        // if there are no changed attributes. Useful for determining what parts of a
        // view need to be updated and/or what attributes need to be persisted to
        // the server. Unset attributes will be set to undefined.
        changedAttributes : function(now) {
            now || (now = this.attributes);
            var old = this._previousAttributes, unset = this._unsetAttributes;

            var changed = false;
            for (var attr in now) {
                if (!_.isEqual(old[attr], now[attr])) {
                    changed || (changed = {});
                    changed[attr] = now[attr];
                }
            }

            if (unset) {
                changed || (changed = {});
                var len = unset.length;
                while (len--) changed[unset[len]] = void 0;
            }

            return changed;
        },

        // Get the previous value of an attribute, recorded at the time the last
        // `"change"` event was fired.
        previous : function(attr) {
            if (!attr || !this._previousAttributes) return null;
            return this._previousAttributes[attr];
        },

        // Get all of the attributes of the model at the time of the previous
        // `"change"` event.
        previousAttributes : function() {
            return _.clone(this._previousAttributes);
        },

        // Run validation against a set of incoming attributes, returning `true`
        // if all is well. If a specific `error` callback has been passed,
        // call that instead of firing the general `"error"` event.
        _performValidation : function(attrs, options) {
            var error = this.validate(attrs);
            if (error) {
                if (options.error) {
                    options.error(this, error, options);
                } else {
                    this.trigger('error', this, error, options);
                }
                return false;
            }
            return true;
        }

    });

    // Backbone.Collection
    // -------------------

    // Provides a standard collection class for our sets of models, ordered
    // or unordered. If a `comparator` is specified, the Collection will maintain
    // its models in sort order, as they're added and removed.
    Backbone.Collection = function(models, options) {
        options || (options = {});
        if (options.comparator) this.comparator = options.comparator;
        _.bindAll(this, '_onModelEvent', '_removeReference');
        this._reset();
        if (models) this.reset(models, {silent: true});
        this.initialize.apply(this, arguments);
    };

    // Define the Collection's inheritable methods.
    _.extend(Backbone.Collection.prototype, Backbone.Events, {

        // The default model for a collection is just a **Backbone.Model**.
        // This should be overridden in most cases.
        model : Backbone.Model,

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize : function(){},

        // The JSON representation of a Collection is an array of the
        // models' attributes.
        toJSON : function() {
            return this.map(function(model){ return model.toJSON(); });
        },

        // Add a model, or list of models to the set. Pass **silent** to avoid
        // firing the `added` event for every new model.
        add : function(models, options) {
            if (_.isArray(models)) {
                for (var i = 0, l = models.length; i < l; i++) {
                    this._add(models[i], options);
                }
            } else {
                this._add(models, options);
            }
            return this;
        },

        // Remove a model, or a list of models from the set. Pass silent to avoid
        // firing the `removed` event for every model removed.
        remove : function(models, options) {
            if (_.isArray(models)) {
                for (var i = 0, l = models.length; i < l; i++) {
                    this._remove(models[i], options);
                }
            } else {
                this._remove(models, options);
            }
            return this;
        },

        // Get a model from the set by id.
        get : function(id) {
            if (id == null) return null;
            return this._byId[id.id != null ? id.id : id];
        },

        // Get a model from the set by client id.
        getByCid : function(cid) {
            return cid && this._byCid[cid.cid || cid];
        },

        // Get the model at the given index.
        at : function(index) {
            return this.models[index];
        },

        // Force the collection to re-sort itself. You don't need to call this under normal
        // circumstances, as the set will maintain sort order as each item is added.
        sort : function(options) {
            options || (options = {});
            if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
            this.models = this.sortBy(this.comparator);
            if (!options.silent) this.trigger('reset', this, options);
            return this;
        },

        // Pluck an attribute from each model in the collection.
        pluck : function(attr) {
            return _.map(this.models, function(model){ return model.get(attr); });
        },

        // When you have more items than you want to add or remove individually,
        // you can reset the entire set with a new list of models, without firing
        // any `added` or `removed` events. Fires `reset` when finished.
        reset : function(models, options) {
            models  || (models = []);
            options || (options = {});
            this.each(this._removeReference);
            this._reset();
            this.add(models, {silent: true});
            if (!options.silent) this.trigger('reset', this, options);
            return this;
        },

        // Fetch the default set of models for this collection, resetting the
        // collection when they arrive. If `add: true` is passed, appends the
        // models to the collection instead of resetting.
        fetch : function(options) {
            options || (options = {});
            var collection = this;
            var success = options.success;
            options.success = function(resp, status, xhr) {
                collection[options.add ? 'add' : 'reset'](collection.parse(resp, xhr), options);
                if (success) success(collection, resp);
            };
            options.error = wrapError(options.error, collection, options);
            return (this.sync || Backbone.sync).call(this, 'read', this, options);
        },

        // Create a new instance of a model in this collection. After the model
        // has been created on the server, it will be added to the collection.
        // Returns the model, or 'false' if validation on a new model fails.
        create : function(model, options) {
            var coll = this;
            options || (options = {});
            model = this._prepareModel(model, options);
            if (!model) return false;
            var success = options.success;
            options.success = function(nextModel, resp, xhr) {
                coll.add(nextModel, options);
                if (success) success(nextModel, resp, xhr);
            };
            model.save(null, options);
            return model;
        },

        // **parse** converts a response into a list of models to be added to the
        // collection. The default implementation is just to pass it through.
        parse : function(resp, xhr) {
            return resp;
        },

        // Proxy to _'s chain. Can't be proxied the same way the rest of the
        // underscore methods are proxied because it relies on the underscore
        // constructor.
        chain : function () {
            return _(this.models).chain();
        },

        // Reset all internal state. Called when the collection is reset.
        _reset : function(options) {
            this.length = 0;
            this.models = [];
            this._byId  = {};
            this._byCid = {};
        },

        // Prepare a model to be added to this collection
        _prepareModel : function(model, options) {
            if (!(model instanceof Backbone.Model)) {
                var attrs = model;
                model = new this.model(attrs, {collection: this});
                if (model.validate && !model._performValidation(model.attributes, options)) model = false;
            } else if (!model.collection) {
                model.collection = this;
            }
            return model;
        },

        // Internal implementation of adding a single model to the set, updating
        // hash indexes for `id` and `cid` lookups.
        // Returns the model, or 'false' if validation on a new model fails.
        _add : function(model, options) {
            options || (options = {});
            model = this._prepareModel(model, options);
            if (!model) return false;
            var already = this.getByCid(model);
            if (already) throw new Error(["Can't add the same model to a set twice", already.id]);
            this._byId[model.id] = model;
            this._byCid[model.cid] = model;
            var index = options.at != null ? options.at :
                this.comparator ? this.sortedIndex(model, this.comparator) :
                    this.length;
            this.models.splice(index, 0, model);
            model.bind('all', this._onModelEvent);
            this.length++;
            options.index = index;
            if (!options.silent) model.trigger('add', model, this, options);
            return model;
        },

        // Internal implementation of removing a single model from the set, updating
        // hash indexes for `id` and `cid` lookups.
        _remove : function(model, options) {
            options || (options = {});
            model = this.getByCid(model) || this.get(model);
            if (!model) return null;
            delete this._byId[model.id];
            delete this._byCid[model.cid];
            var index = this.indexOf(model);
            this.models.splice(index, 1);
            this.length--;
            options.index = index;
            if (!options.silent) model.trigger('remove', model, this, options);
            this._removeReference(model);
            return model;
        },

        // Internal method to remove a model's ties to a collection.
        _removeReference : function(model) {
            if (this == model.collection) {
                delete model.collection;
            }
            model.unbind('all', this._onModelEvent);
        },

        // Internal method called every time a model in the set fires an event.
        // Sets need to update their indexes when models change ids. All other
        // events simply proxy through. "add" and "remove" events that originate
        // in other collections are ignored.
        _onModelEvent : function(ev, model, collection, options) {
            if ((ev == 'add' || ev == 'remove') && collection != this) return;
            if (ev == 'destroy') {
                this._remove(model, options);
            }
            if (model && ev === 'change:' + model.idAttribute) {
                delete this._byId[model.previous(model.idAttribute)];
                this._byId[model.id] = model;
            }
            this.trigger.apply(this, arguments);
        }

    });

    // Underscore methods that we want to implement on the Collection.
    var methods = ['forEach', 'each', 'map', 'reduce', 'reduceRight', 'find', 'detect',
        'filter', 'select', 'reject', 'every', 'all', 'some', 'any', 'include',
        'contains', 'invoke', 'max', 'min', 'sortBy', 'sortedIndex', 'toArray', 'size',
        'first', 'rest', 'last', 'without', 'indexOf', 'lastIndexOf', 'isEmpty', 'groupBy'];

    // Mix in each Underscore method as a proxy to `Collection#models`.
    _.each(methods, function(method) {
        Backbone.Collection.prototype[method] = function() {
            return _[method].apply(_, [this.models].concat(_.toArray(arguments)));
        };
    });

    // Backbone.Router
    // -------------------

    // Routers map faux-URLs to actions, and fire events when routes are
    // matched. Creating a new one sets its `routes` hash, if not set statically.
    Backbone.Router = function(options) {
        options || (options = {});
        if (options.routes) this.routes = options.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments);
    };

    // Cached regular expressions for matching named param parts and splatted
    // parts of route strings.
    var namedParam    = /:([\w\d]+)/g;
    var splatParam    = /\*([\w\d]+)/g;
    var escapeRegExp  = /[-[\]{}()+?.,\\^$|#\s]/g;

    // Set up all inheritable **Backbone.Router** properties and methods.
    _.extend(Backbone.Router.prototype, Backbone.Events, {

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize : function(){},

        // Manually bind a single named route to a callback. For example:
        //
        //     this.route('search/:query/p:num', 'search', function(query, num) {
        //       ...
        //     });
        //
        route : function(route, name, callback) {
            Backbone.history || (Backbone.history = new Backbone.History);
            if (!_.isRegExp(route)) route = this._routeToRegExp(route);
            Backbone.history.route(route, _.bind(function(fragment) {
                var args = this._extractParameters(route, fragment);
                callback && callback.apply(this, args);
                this.trigger.apply(this, ['route:' + name].concat(args));
            }, this));
        },

        // Simple proxy to `Backbone.history` to save a fragment into the history.
        navigate : function(fragment, triggerRoute) {
            Backbone.history.navigate(fragment, triggerRoute);
        },

        // Bind all defined routes to `Backbone.history`. We have to reverse the
        // order of the routes here to support behavior where the most general
        // routes can be defined at the bottom of the route map.
        _bindRoutes : function() {
            if (!this.routes) return;
            var routes = [];
            for (var route in this.routes) {
                routes.unshift([route, this.routes[route]]);
            }
            for (var i = 0, l = routes.length; i < l; i++) {
                this.route(routes[i][0], routes[i][1], this[routes[i][1]]);
            }
        },

        // Convert a route string into a regular expression, suitable for matching
        // against the current location hash.
        _routeToRegExp : function(route) {
            route = route.replace(escapeRegExp, "\\$&")
                .replace(namedParam, "([^\/]*)")
                .replace(splatParam, "(.*?)");
            return new RegExp('^' + route + '$');
        },

        // Given a route, and a URL fragment that it matches, return the array of
        // extracted parameters.
        _extractParameters : function(route, fragment) {
            return route.exec(fragment).slice(1);
        }

    });

    // Backbone.History
    // ----------------

    // Handles cross-browser history management, based on URL fragments. If the
    // browser does not support `onhashchange`, falls back to polling.
    Backbone.History = function() {
        this.handlers = [];
        _.bindAll(this, 'checkUrl');
    };

    // Cached regex for cleaning hashes.
    var hashStrip = /^#*/;

    // Cached regex for detecting MSIE.
    var isExplorer = /msie [\w.]+/;

    // Has the history handling already been started?
    var historyStarted = false;

    // Set up all inheritable **Backbone.History** properties and methods.
    _.extend(Backbone.History.prototype, {

        // The default interval to poll for hash changes, if necessary, is
        // twenty times a second.
        interval: 50,

        // Get the cross-browser normalized URL fragment, either from the URL,
        // the hash, or the override.
        getFragment : function(fragment, forcePushState) {
            if (fragment == null) {
                if (this._hasPushState || forcePushState) {
                    fragment = window.location.pathname;
                    var search = window.location.search;
                    if (search) fragment += search;
                } else {
                    fragment = window.location.hash;
                }
            }
            fragment = decodeURIComponent(fragment.replace(hashStrip, ''));
            if (!fragment.indexOf(this.options.root)) fragment = fragment.substr(this.options.root.length);
            return fragment;
        },

        // Start the hash change handling, returning `true` if the current URL matches
        // an existing route, and `false` otherwise.
        start : function(options) {

            // Figure out the initial configuration. Do we need an iframe?
            // Is pushState desired ... is it available?
            if (historyStarted) throw new Error("Backbone.history has already been started");
            this.options          = _.extend({}, {root: '/'}, this.options, options);
            this._wantsPushState  = !!this.options.pushState;
            this._hasPushState    = !!(this.options.pushState && window.history && window.history.pushState);
            var fragment          = this.getFragment();
            var docMode           = document.documentMode;
            var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));
            if (oldIE) {
                this.iframe = $('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
                this.navigate(fragment);
            }

            // Depending on whether we're using pushState or hashes, and whether
            // 'onhashchange' is supported, determine how we check the URL state.
            if (this._hasPushState) {
                $(window).bind('popstate', this.checkUrl);
            } else if ('onhashchange' in window && !oldIE) {
                $(window).bind('hashchange', this.checkUrl);
            } else {
                setInterval(this.checkUrl, this.interval);
            }

            // Determine if we need to change the base url, for a pushState link
            // opened by a non-pushState browser.
            this.fragment = fragment;
            historyStarted = true;
            var loc = window.location;
            var atRoot  = loc.pathname == this.options.root;
            if (this._wantsPushState && !this._hasPushState && !atRoot) {
                this.fragment = this.getFragment(null, true);
                window.location.replace(this.options.root + '#' + this.fragment);
                // Return immediately as browser will do redirect to new url
                return true;
            } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
                this.fragment = loc.hash.replace(hashStrip, '');
                window.history.replaceState({}, document.title, loc.protocol + '//' + loc.host + this.options.root + this.fragment);
            }

            if (!this.options.silent) {
                return this.loadUrl();
            }
        },

        // Add a route to be tested when the fragment changes. Routes added later may
        // override previous routes.
        route : function(route, callback) {
            this.handlers.unshift({route : route, callback : callback});
        },

        // Checks the current URL to see if it has changed, and if it has,
        // calls `loadUrl`, normalizing across the hidden iframe.
        checkUrl : function(e) {
            var current = this.getFragment();
            if (current == this.fragment && this.iframe) current = this.getFragment(this.iframe.location.hash);
            if (current == this.fragment || current == decodeURIComponent(this.fragment)) return false;
            if (this.iframe) this.navigate(current);
            this.loadUrl() || this.loadUrl(window.location.hash);
        },

        // Attempt to load the current URL fragment. If a route succeeds with a
        // match, returns `true`. If no defined routes matches the fragment,
        // returns `false`.
        loadUrl : function(fragmentOverride) {
            var fragment = this.fragment = this.getFragment(fragmentOverride);
            var matched = _.any(this.handlers, function(handler) {
                if (handler.route.test(fragment)) {
                    handler.callback(fragment);
                    return true;
                }
            });
            return matched;
        },

        // Save a fragment into the hash history. You are responsible for properly
        // URL-encoding the fragment in advance. This does not trigger
        // a `hashchange` event.
        navigate : function(fragment, triggerRoute) {
            var frag = (fragment || '').replace(hashStrip, '');
            if (this.fragment == frag || this.fragment == decodeURIComponent(frag)) return;
            if (this._hasPushState) {
                var loc = window.location;
                if (frag.indexOf(this.options.root) != 0) frag = this.options.root + frag;
                this.fragment = frag;
                window.history.pushState({}, document.title, loc.protocol + '//' + loc.host + frag);
            } else {
                window.location.hash = this.fragment = frag;
                if (this.iframe && (frag != this.getFragment(this.iframe.location.hash))) {
                    this.iframe.document.open().close();
                    this.iframe.location.hash = frag;
                }
            }
            if (triggerRoute) this.loadUrl(fragment);
        }

    });

    // Backbone.View
    // -------------

    // Creating a Backbone.View creates its initial element outside of the DOM,
    // if an existing element is not provided...
    Backbone.View = function(options) {
        this.cid = _.uniqueId('view');
        this._configure(options || {});
        this._ensureElement();
        this.delegateEvents();
        this.initialize.apply(this, arguments);
    };

    // Element lookup, scoped to DOM elements within the current view.
    // This should be prefered to global lookups, if you're dealing with
    // a specific view.
    var selectorDelegate = function(selector) {
        return $(selector, this.el);
    };

    // Cached regex to split keys for `delegate`.
    var eventSplitter = /^(\S+)\s*(.*)$/;

    // List of view options to be merged as properties.
    var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName'];

    // Set up all inheritable **Backbone.View** properties and methods.
    _.extend(Backbone.View.prototype, Backbone.Events, {

        // The default `tagName` of a View's element is `"div"`.
        tagName : 'div',

        // Attach the `selectorDelegate` function as the `$` property.
        $       : selectorDelegate,

        // Initialize is an empty function by default. Override it with your own
        // initialization logic.
        initialize : function(){},

        // **render** is the core function that your view should override, in order
        // to populate its element (`this.el`), with the appropriate HTML. The
        // convention is for **render** to always return `this`.
        render : function() {
            return this;
        },

        // Remove this view from the DOM. Note that the view isn't present in the
        // DOM by default, so calling this method may be a no-op.
        remove : function() {
            $(this.el).remove();
            return this;
        },

        // For small amounts of DOM Elements, where a full-blown template isn't
        // needed, use **make** to manufacture elements, one at a time.
        //
        //     var el = this.make('li', {'class': 'row'}, this.model.escape('title'));
        //
        make : function(tagName, attributes, content) {
            var el = document.createElement(tagName);
            if (attributes) $(el).attr(attributes);
            if (content) $(el).html(content);
            return el;
        },

        // Set callbacks, where `this.events` is a hash of
        //
        // *{"event selector": "callback"}*
        //
        //     {
        //       'mousedown .title':  'edit',
        //       'click .button':     'save'
        //     }
        //
        // pairs. Callbacks will be bound to the view, with `this` set properly.
        // Uses event delegation for efficiency.
        // Omitting the selector binds the event to `this.el`.
        // This only works for delegate-able events: not `focus`, `blur`, and
        // not `change`, `submit`, and `reset` in Internet Explorer.
        delegateEvents : function(events) {
            if (!(events || (events = this.events))) return;
            if (_.isFunction(events)) events = events.call(this);
            this.undelegateEvents();
            for (var key in events) {
                var method = this[events[key]];
                if (!method) throw new Error('Event "' + events[key] + '" does not exist');
                var match = key.match(eventSplitter);
                var eventName = match[1], selector = match[2];
                method = _.bind(method, this);
                eventName += '.delegateEvents' + this.cid;
                if (selector === '') {
                    $(this.el).bind(eventName, method);
                } else {
                    $(this.el).delegate(selector, eventName, method);
                }
            }
        },

        // Clears all callbacks previously bound to the view with `delegateEvents`.
        undelegateEvents : function() {
            $(this.el).unbind('.delegateEvents' + this.cid);
        },

        // Performs the initial configuration of a View with a set of options.
        // Keys with special meaning *(model, collection, id, className)*, are
        // attached directly to the view.
        _configure : function(options) {
            if (this.options) options = _.extend({}, this.options, options);
            for (var i = 0, l = viewOptions.length; i < l; i++) {
                var attr = viewOptions[i];
                if (options[attr]) this[attr] = options[attr];
            }
            this.options = options;
        },

        // Ensure that the View has a DOM element to render into.
        // If `this.el` is a string, pass it through `$()`, take the first
        // matching element, and re-assign it to `el`. Otherwise, create
        // an element from the `id`, `className` and `tagName` properties.
        _ensureElement : function() {
            if (!this.el) {
                var attrs = this.attributes || {};
                if (this.id) attrs.id = this.id;
                if (this.className) attrs['class'] = this.className;
                this.el = this.make(this.tagName, attrs);
            } else if (_.isString(this.el)) {
                this.el = $(this.el).get(0);
            }
        }

    });

    // The self-propagating extend function that Backbone classes use.
    var extend = function (protoProps, classProps) {
        var child = inherits(this, protoProps, classProps);
        child.extend = this.extend;
        return child;
    };

    // Set up inheritance for the model, collection, and view.
    Backbone.Model.extend = Backbone.Collection.extend =
        Backbone.Router.extend = Backbone.View.extend = extend;

    // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
    var methodMap = {
        'create': 'POST',
        'update': 'PUT',
        'delete': 'DELETE',
        'read'  : 'GET'
    };

    // Backbone.sync
    // -------------

    // Override this function to change the manner in which Backbone persists
    // models to the server. You will be passed the type of request, and the
    // model in question. By default, makes a RESTful Ajax request
    // to the model's `url()`. Some possible customizations could be:
    //
    // * Use `setTimeout` to batch rapid-fire updates into a single request.
    // * Send up the models as XML instead of JSON.
    // * Persist models via WebSockets instead of Ajax.
    //
    // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
    // as `POST`, with a `_method` parameter containing the true HTTP method,
    // as well as all requests with the body as `application/x-www-form-urlencoded` instead of
    // `application/json` with the model in a param named `model`.
    // Useful when interfacing with server-side languages like **PHP** that make
    // it difficult to read the body of `PUT` requests.
    Backbone.sync = function(method, model, options) {
        var type = methodMap[method];

        // Default JSON-request options.
        var params = {type : type,
                      dataType : 'json',
                      //add csrf token for rails update
                      beforeSend: function( xhr ) {
                        var token = $('meta[name="csrf-token"]').attr('content');
                        if (token) xhr.setRequestHeader('X-CSRF-Token', token);
            }};


        // Ensure that we have a URL.
        if (!options.url) {
            params.url = getUrl(model) || urlError();
        }

        // Ensure that we have the appropriate request data.
        if (!options.data && model && (method == 'create' || method == 'update')) {
            params.contentType = 'application/json';
            params.data = JSON.stringify(model.toJSON());
        }

        // For older servers, emulate JSON by encoding the request into an HTML-form.
        if (Backbone.emulateJSON) {
            params.contentType = 'application/x-www-form-urlencoded';
            params.data = params.data ? {model : params.data} : {};
        }

        // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
        // And an `X-HTTP-Method-Override` header.
        if (Backbone.emulateHTTP) {
            if (type === 'PUT' || type === 'DELETE') {
                if (Backbone.emulateJSON) params.data._method = type;
                params.type = 'POST';
                params.beforeSend = function(xhr) {
                    xhr.setRequestHeader('X-HTTP-Method-Override', type);
                };
            }
        }

        // Don't process data on a non-GET request.
        if (params.type !== 'GET' && !Backbone.emulateJSON) {
            params.processData = false;
        }

        if (method == 'read') {
            return jQuery.retrieveJSON(_.extend(params, options));
        }

        // Make the request, allowing the user to override any Ajax options.
        return $.ajax(_.extend(params, options));
    };

    // Helpers
    // -------

    // Shared empty constructor function to aid in prototype-chain creation.
    var ctor = function(){};

    // Helper function to correctly set up the prototype chain, for subclasses.
    // Similar to `goog.inherits`, but uses a hash of prototype properties and
    // class properties to be extended.
    var inherits = function(parent, protoProps, staticProps) {
        var child;

        // The constructor function for the new subclass is either defined by you
        // (the "constructor" property in your `extend` definition), or defaulted
        // by us to simply call `super()`.
        if (protoProps && protoProps.hasOwnProperty('constructor')) {
            child = protoProps.constructor;
        } else {
            child = function(){ return parent.apply(this, arguments); };
        }

        // Inherit class (static) properties from parent.
        _.extend(child, parent);

        // Set the prototype chain to inherit from `parent`, without calling
        // `parent`'s constructor function.
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();

        // Add prototype properties (instance properties) to the subclass,
        // if supplied.
        if (protoProps) _.extend(child.prototype, protoProps);

        // Add static properties to the constructor function, if supplied.
        if (staticProps) _.extend(child, staticProps);

        // Correctly set child's `prototype.constructor`.
        child.prototype.constructor = child;

        // Set a convenience property in case the parent's prototype is needed later.
        child.__super__ = parent.prototype;

        return child;
    };

    // Helper function to get a URL from a Model or Collection as a property
    // or as a function.
    var getUrl = function(object) {
        if (!(object && object.url)) return null;
        return _.isFunction(object.url) ? object.url() : object.url;
    };

    // Throw an error when a URL is needed, and none is supplied.
    var urlError = function() {
        throw new Error('A "url" property or function must be specified');
    };

    // Wrap an optional error callback with a fallback error event.
    var wrapError = function(onError, originalModel, options) {
        return function(model, resp) {
            var resp = model === originalModel ? resp : model;
            if (onError) {
                onError(model, resp, options);
            } else {
                originalModel.trigger('error', model, resp, options);
            }
        };
    };

    return Backbone;
}));
define("vendor/backbone", function(){});

/*
 RequireJS text 1.0.2 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
 */
(function(){var k=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],n=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,o=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,i=typeof location!=="undefined"&&location.href,p=i&&location.protocol&&location.protocol.replace(/\:/,""),q=i&&location.hostname,r=i&&(location.port||void 0),j=[];define('text',[],function(){var g,h,l;typeof window!=="undefined"&&window.navigator&&window.document?h=function(a,c){var b=g.createXhr();b.open("GET",a,!0);b.onreadystatechange=
    function(){b.readyState===4&&c(b.responseText)};b.send(null)}:typeof process!=="undefined"&&process.versions&&process.versions.node?(l=require.nodeRequire("fs"),h=function(a,c){c(l.readFileSync(a,"utf8"))}):typeof Packages!=="undefined"&&(h=function(a,c){var b=new java.io.File(a),e=java.lang.System.getProperty("line.separator"),b=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(b),"utf-8")),d,f,g="";try{d=new java.lang.StringBuffer;(f=b.readLine())&&f.length()&&
    f.charAt(0)===65279&&(f=f.substring(1));for(d.append(f);(f=b.readLine())!==null;)d.append(e),d.append(f);g=String(d.toString())}finally{b.close()}c(g)});return g={version:"1.0.2",strip:function(a){if(a){var a=a.replace(n,""),c=a.match(o);c&&(a=c[1])}else a="";return a},jsEscape:function(a){return a.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r")},createXhr:function(){var a,c,b;if(typeof XMLHttpRequest!==
    "undefined")return new XMLHttpRequest;else for(c=0;c<3;c++){b=k[c];try{a=new ActiveXObject(b)}catch(e){}if(a){k=[b];break}}if(!a)throw Error("createXhr(): XMLHttpRequest not available");return a},get:h,parseName:function(a){var c=!1,b=a.indexOf("."),e=a.substring(0,b),a=a.substring(b+1,a.length),b=a.indexOf("!");b!==-1&&(c=a.substring(b+1,a.length),c=c==="strip",a=a.substring(0,b));return{moduleName:e,ext:a,strip:c}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(a,c,b,e){var d=g.xdRegExp.exec(a),
    f;if(!d)return!0;a=d[2];d=d[3];d=d.split(":");f=d[1];d=d[0];return(!a||a===c)&&(!d||d===b)&&(!f&&!d||f===e)},finishLoad:function(a,c,b,e,d){b=c?g.strip(b):b;d.isBuild&&(j[a]=b);e(b)},load:function(a,c,b,e){if(e.isBuild&&!e.inlineText)b();else{var d=g.parseName(a),f=d.moduleName+"."+d.ext,m=c.toUrl(f),h=e&&e.text&&e.text.useXhr||g.useXhr;!i||h(m,p,q,r)?g.get(m,function(c){g.finishLoad(a,d.strip,c,b,e)}):c([f],function(a){g.finishLoad(d.moduleName+"."+d.ext,d.strip,a,b,e)})}},write:function(a,c,b){if(c in
    j){var e=g.jsEscape(j[c]);b.asModule(a+"!"+c,"define(function () { return '"+e+"';});\n")}},writeFile:function(a,c,b,e,d){var c=g.parseName(c),f=c.moduleName+"."+c.ext,h=b.toUrl(c.moduleName+"."+c.ext)+".js";g.load(f,b,function(){var b=function(a){return e(h,a)};b.asModule=function(a,b){return e.asModule(a,h,b)};g.write(a,f,b,d)},d)}}})})();
define('text!templates/detailResult.html',[],function () { return '<div class="rateUp arrowUp"> </div>\n<div>\n    <span class="rating"><%= rating %></span>\n    <span class="detailWord"><%= word %></span>\n    <span class="detailExample"><%= example %></span>\n    <span class="editIcon">&#009998; </span>\n    <span class="saveIcon hidden">&#010003;</span>\n</div>\n<div class="rateDown arrowDown"></div>\n';});

define('views/detailResult',["jquery","backbone","underscore","text!templates/detailResult.html"],function(a,b,c,d){var e=b.View.extend({model:null,tagName:"li",className:"detailResult",template:null,initialize:function(){c.bindAll(this,"render","unrender","editWord","saveWord","onClickRating"),this.model=this.options.model,this.model.bind("change",this.render),this.model.view=this,this.template=c.template(d)},onClickRating:function(a){if(!1===AppRouter.checkLoginState())return;var b=this.model.get("user_voted");if(parseInt(b,10)===a){this.model.save({user_voted:0});return}this.model.save({user_voted:a});return},editWord:function(){!0===AppRouter.getLoginState()?(a(".detailWord",this.model.el).attr("contentEditable",!0),a(".detailWord",this.model.el).focus(),a(".detailExample",this.model.el).attr("contentEditable",!0),a(".editIcon",this.model.el).addClass("hidden"),a(".saveIcon",this.model.el).removeClass("hidden"),a(".saveIcon",this.model.el).on("click",c.bind(this.saveWord,this))):AppRouter.navigate("login",!0)},saveWord:function(){this.model.save({word:a(".detailWord",this.model.el).text(),example:a(".detailExample",this.model.el).text()})},unrender:function(){return a(this.model.el).remove(),this},render:function(){var b=this.model,d=a(this.el);d.html(this.template(b.toJSON()));var e=parseInt(b.get("user_voted"),10);return!0===AppRouter.getLoginState()&&e!==0&&(e===1?a(".rateUp",d).addClass("voted"):e===-1&&a(".rateDown",d).addClass("voted")),a(".rateUp",d).on("click",c.bind(this.onClickRating,this,1)),a(".rateDown",d).on("click",c.bind(this.onClickRating,this,-1)),a(".editIcon",d).on("click",c.bind(this.editWord,this)),a(".editIcon",d).removeClass("hidden"),this.model.el=d,this}});return e});
define('text!templates/addWord.html',[],function () { return '    <div id="addWord-box" class="addWord popup">\n        <a href="#" class="closeButton">x</a>\n\n        <h1><%= linkText %></h1>\n\n        <form method="post" action="#" onsubmit="return false;">\n            <fieldset>\n\n                <label for="word"><%= word %></label>\n                <input id="word" name="word" value="" type="text" autocomplete="on" placeholder="Word">\n\n                <label for="example"><%= example %> <%= sentence %></label>\n                <input id="example" name="example" value="" type="text" placeholder="<%= example %> <%= sentence %>">\n\n                <button class="submit button" type="submit"><%= add %></button>\n\n            </fieldset>\n        </form>\n\n        <div class="error hidden"></div>\n    </div>';});

/*
 RequireJS i18n 1.0.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
 */
(function(){function n(a,b,k,d,c,g){b[a]&&(k.push(a),(b[a]===!0||b[a]===1)&&d.push(c+a+"/"+g))}function o(a,b,k,d,c){b=d+b+"/"+c;require._fileExists(a.toUrl(b))&&k.push(b)}var q=/(^.*(^|\/)nls(\/|$))([^\/]*)\/?([^\/]*)/,r={};define('i18n',{version:"1.0.0",load:function(a,b,k,d){var d=d||{},c=q.exec(a),g=c[1],l=c[4],i=c[5],m=l.split("-"),e=[],p={},h,j,f="";c[5]?(g=c[1],a=g+i):(i=c[4],l=d.locale||(d.locale=typeof navigator==="undefined"?"root":(navigator.language||navigator.userLanguage||"root").toLowerCase()),
    m=l.split("-"));if(d.isBuild){e.push(a);o(b,"root",e,g,i);for(h=0;j=m[h];h++)f+=(f?"-":"")+j,o(b,f,e,g,i);b(e,function(){k()})}else b([a],function(a){var c=[];n("root",a,c,e,g,i);for(h=0;j=m[h];h++)f+=(f?"-":"")+j,n(f,a,c,e,g,i);b(e,function(){var d,e;for(d=c.length-1;d>-1&&(j=c[d]);d--){e=a[j];if(e===!0||e===1)e=b(g+j+"/"+i);var h=p,f=void 0;for(f in e)!(f in r)&&!(f in h)&&(h[f]=e[f])}k(p)})})}})})();
define('nls/trailsy',{
    'root': {
        'login': 'Log in',
        'word' : 'Word',
        'addTranslationFor': 'Add a Translation for',
        'example': 'Example',
        'sentence': 'Sentence',
        'email': 'Email',
        'password': 'Password',
        'signup': 'Sign up',
        'add': 'Add'
    },
    'de-de': true
});
define('views/addWordDialog',['jquery',
        'underscore',
        'text!templates/addWord.html',
        'i18n!nls/trailsy'],
    function($, _, html, i18n) {
        var addWordDialog = {
            collection: null,
            addWordHtml: null,

            setCollection: function(collection) {
                this.collection = collection;
            },


            /**
             *
             * @param bool showLanguages
             */
            applyTemplate: function() {
                var word = $('#searchInput').val();
                var addWordModel = {linkText: i18n.addTranslationFor + ' ' + word,
                    word: i18n.word, example: i18n.example, add: i18n.add,
                    sentence: i18n.sentence};
                var template = _.template(html);
                this.addWordHtml = $(template(addWordModel));
                if ('addWord' === this.dialogType) {
                    var targetLang = $("#targetLanguage").clone();
                    targetLang.attr('id', 'sourceLanguage');
                    $('#example',this.addWordHtml).after(targetLang);
                    $('#word', this.addWordHtml).val(word);
                }
            },

            appendDiv: function() {
                $('nav').append(this.addWordHtml);
            },

            setDialogType: function(type) {
                this.dialogType = type;
            },

            /**
             *
             * @param bool showLanguages
             */
            show: function() {


                this.applyTemplate();
                this.appendDiv();

                //Fade in the Popup
                this.addWordHtml.fadeIn(300);

                //Set the center alignment padding + border see css style
                var popMargTop = (this.addWordHtml.height() + 24) / 2;
                var popMargLeft = (this.addWordHtml.width() + 24) / 2;

                this.addWordHtml.css({
                    'margin-top' : -popMargTop,
                    'margin-left' : -popMargLeft
                });


                $('#addWord-box .closeButton').on('click', _.bind(this.hide, this));
                $('#addWord-box form').on('submit', _.bind(this.submitForm, this));
            },

            //callback on successful save
            saveSuccess: function(result) {
                if ('addWord' === this.dialogType) {
                    AppRouter.navigate('words/'+ result.id, true);
                }
                this.hide();
            },

            saveFailed: function(error) {
                if (error.status == 401 || error.status == 403) {
                    AppRouter.navigate('login', true);
                }
                $('#addWord-box .error').removeClass('hidden');
                $('#addWord-box .error').text('An Error occured.');
            },

            //hide popup and mask
            hide: function() {
                $('input', this.addWordHtml).val('');
                $('#addWord-box').fadeOut(300 , _.bind(function() {
                    this.addWordHtml.remove();
                }, this));
                $('#addWord-box .closeButton').unbind();
                $('#addWord-box form').unbind();
            },

            getLanguageId: function() {
                var addWordLang = $('#sourceLanguage', this.addWordHtml).val();
                if (undefined != addWordLang) {
                    return addWordLang;
                }
                return $("#targetLanguage").val()
            },

            //submit form
            submitForm: function() {

                var newWord = {word:        $('#word', this.addWordHtml).val(),
                               example:     $('#example', this.addWordHtml).val(),
                               language_id: this.getLanguageId()};
                var options = {success: _.bind(this.saveSuccess, this),
                               error:   _.bind(this.saveFailed, this)};

                if ('addWord' === this.dialogType) {
                    options.silent = true;
                }

                this.collection.addOrUpdate(newWord, options);
            }
        }
        return addWordDialog;
    })
;
define('views/detailResultList',["jquery","underscore","backbone","views/detailResult","views/addWordDialog","i18n!nls/trailsy"],function(a,b,c,d,e,f){var g=c.View.extend({el:a("#translations"),collection:null,events:{"click #addWord":"onClickAdd"},initialize:function(){this.items_element=a("#translationList"),b.bindAll(this,"render","onClickAdd","appendItem","unrender","setCollection","appendAddWordLink")},onClickAdd:function(a){a.preventDefault(),a.stopPropagation(),e.setCollection(this.collection),e.setDialogType("addTranslation"),e.show()},appendAddWordLink:function(){var b=a("#searchInput").val();this.items_element.append('<li class="detailResult"><a href="#" id="addWord">'+f.addTranslationFor+" "+b+"</a></li>")},setCollection:function(a){this.collection=a,this.collection.bind("add",this.render)},unrender:function(){this.items_element.html(""),this.items_element.addClass("hidden")},appendItem:function(a){var b=this.collection.get(a.id),c=new d({model:b}),e=c.render(this.search).el;this.items_element.append(e)},render:function(a){"string"==typeof a&&(this.targetLang=a),this.unrender(),this.items_element.removeClass("hidden"),this.collection.each(function(a){a.get("language_id")==this.targetLang&&this.appendItem(a)},this),this.appendAddWordLink()}});return new g});
define('text!templates/searchResult.html',[],function () { return '<span class="lang"><%= language.code.toUpperCase() %></span>\n<span class="word"><%= word %></span>';});

define('views/searchResult',['jquery','underscore','backbone', 'text!templates/searchResult.html'],
function($,_,Backbone, searchResultTemplate){
    /**
     * view for single search result
     */
    var searchResultView = Backbone.View.extend({
        tagName: "li",
        className: "searchResult",

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
});
define('text!templates/login.html',[],function () { return '<div id="login-box" class="login popup">\n    <a href="#" class="closeButton">x</a>\n    \n    <h1>Log in</h1>\n    \n    <form method="post" action="#" onsubmit="return false;">\n        <fieldset>\n            \n            <label for="username">Email</label>\n            <input id="username" name="email" value="" type="email" autocomplete="on" placeholder="Email" />\n            \n            <label for="password">Password</label>\n            <input id="password" name="password" value="" type="password" placeholder="Password" />\n            \n            <button class="submit button" type="submit">Log in</button>\n\n            <p><a class="forgot" href="#">Forgot your password?</a></p>\n\n        </fieldset>\n    </form>\n    \n    <div class="error"></div>\n</div>\n';});

define('views/loginDialog',['jquery', 'underscore', 'text!templates/login.html'],
function($, _, html) {
    var loginDialog = {
        loginHtml: null,

        appendDiv: function() {
            this.loginHtml = $(html);
            $('nav').append(this.loginHtml);
        },

        show: function() {

            if (null === this.loginHtml) {
                this.appendDiv();
            }
            //Fade in the Popup
            this.loginHtml.fadeIn(300);

            //Set the center alignment padding + border see css style
            var popMargTop = (this.loginHtml.height() + 24) / 2;
            var popMargLeft = (this.loginHtml.width() + 24) / 2;

            this.loginHtml.css({
                'margin-top' : -popMargTop,
                'margin-left' : -popMargLeft
            });

            // Add the mask to body
            $('body').append('<div id="mask"></div>');
            $('#mask').fadeIn(300);
            $('a.closeButton, #mask').on('click', _.bind(this.hide, this));
            $('#login-box form').on('submit', _.bind(this.submitForm, this));
        },

        //callback on successful login
        loginSuccess: function(formData) {
            console.log(formData);
            $('#login-error', this.loginHtml).hide();
            this.hide();
            $('#loginLink').addClass('hidden');
            $('#logoutLink').removeClass('hidden');
            $('#signupLink').addClass('hidden');
            AppRouter.setLoginState(true);
        },

        loginFailed: function() {
            $('#login-box .error').text('Wrong Username or Password');
            $('#login-box .error').show();
        },

        //hide popup and mask
        hide: function() {
            $('#mask , #login-box').fadeOut(300 , _.bind(function() {
                $('#login-error', this.loginHtml).hide();
                $('a.closeButton, #mask').unbind();
                $('#mask').remove();
            }, this));
            $('#login-box form').unbind();
            AppRouter.navigate('home', true);
        },

        //submit form
        submitForm: function() {
            var form = $('#login-box form');
            if (form.length) {
                var formData = form.serialize();
                $.ajax({url:'/sessions',
                        data: formData,
                        type:'POST',
                        beforeSend: function( xhr ) {
                            var token = $('meta[name="csrf-token"]').attr('content');
                            if (token) xhr.setRequestHeader('X-CSRF-Token', token);
                            },
                        success: _.bind(this.loginSuccess, this, formData),
                        error: _.bind(this.loginFailed, this)
                        });
            }
        }
    }
    return loginDialog;
})
;
define('text!templates/signup.html',[],function () { return '<div id="signup-box" class="signup popup">\n    <a href="#" class="closeButton">x</a>\n    \n    <h1>Create a new account</h1>\n    \n    <form action="#" method="post" onsubmit="return false;">\n        <fieldset>\n\n            <label for="user[email]">Email</label>\n            <input name="user[email]" size="30" type="email" autocomplete="on" placeholder="Email" />\n\n            <label for="user[password]">Password:</label>\n            <input name="user[password]" size="30" type="password" placeholder="use a strong Password" />\n            \n            <label for="user[password_confirmation]">Password confirmation:</label>\n            <input name="user[password_confirmation]" size="30" type="password" placeholder="confirm your Password"/>\n\n            <button class="submit button" type="submit">Sign up</button>\n\n        </fieldset>\n    </form>\n    \n    <div class="error"></div>\n</div>\n';});

define('views/signupDialog',['jquery', 'underscore', 'text!templates/signup.html'],
function($, _, html) {
    var signupDialog = {
        signupHtml: null,

        appendDiv: function() {
            this.signupHtml = $(html);
            $('nav').append(this.signupHtml);
        },

        show: function() {

            if (null === this.signupHtml) {
                this.appendDiv();
            }
            //Fade in the Popup
            this.signupHtml.fadeIn(300);

            //Set the center alignment padding + border see css style
            var popMargTop = (this.signupHtml.height() + 24) / 2;
            var popMargLeft = (this.signupHtml.width() + 24) / 2;

            this.signupHtml.css({
                'margin-top' : -popMargTop,
                'margin-left' : -popMargLeft
            });

            // Add the mask to body
            $('body').append('<div id="mask"></div>');
            $('#mask').fadeIn(300);
            $('a.closeButton, #mask').on('click', _.bind(this.hide, this));
            $('#signup-box form').on('submit', _.bind(this.submitForm, this));
        },

        //callback on successful login
        signupSuccess: function(formData) {
            console.log(formData);
            $('#signup-box div.error', this.loginHtml).hide();
            this.hide();
        },

        signupError: function() {
            $('#signup-box div.error', this.loginHtml).text('Wrong Username or Password');
            $('#signup-box div.error', this.loginHtml).show();
        },

        //hide popup and mask
        hide: function() {
            $('#mask , #signup-box').fadeOut(300 , _.bind(function() {
                $('#signup-box div.error', this.loginHtml).hide();
                $('a.closeButton. #mask').unbind();
                $('#mask').remove();
            }, this));
            $('#signup-box form').unbind();
            AppRouter.navigate('home', true);
        },

        //submit form
        submitForm: function() {
            var form = $('#signup-box form', this.loginHtml);
            if (form.length) {
                var formData = form.serialize();
                $.ajax({url:'/users',
                        data: formData,
                        type:'POST',
                        beforeSend: function( xhr ) {
                            var token = $('meta[name="csrf-token"]').attr('content');
                            if (token) xhr.setRequestHeader('X-CSRF-Token', token);
                            },
                        success: _.bind(this.signupSuccess, this, formData),
                        error: _.bind(this.signupError, this)
                });
            }
        }
    }
    return signupDialog;
})
;
define('models/word',["backbone","underscore"],function(a,b){var c=a.Model.extend({initialize:function(a,b){b||(b={}),this.bind("error",this.defaultErrorHandler),this.init&&this.init(a,b)},defaultErrorHandler:function(a,b){(b.status==401||b.status==403)&&AppRouter.navigate("login",!0)}});return c});
define('collections/words',['backbone','underscore','models/word'],function(Backbone,_,wordModel){
    var words = Backbone.Collection.extend({
        model: wordModel,
        url: 'words',

        initialize: function(attributes, options) {
            options || (options = {});
            this.bind("error", this.defaultErrorHandler);
            this.init && this.init(attributes, options);
        },

        defaultErrorHandler: function(model, error) {
            if (error.status == 401 || error.status == 403) {
                AppRouter.navigate('login', true);
            }
        },

        getOrFetch: function(id, callback) {
            var word = this.get(id);
            if ('undefined' === typeof word) {
                this.fetch({url:this.url+'/'+id,
                            success: _.bind(callback, this)
                });
            } else {
                callback();
            }
        },

        addOrUpdate: function(attributes, options) {
            var oldWord = this.find(function(word){
                return word.get('word') == attributes.word
            });
            if (!oldWord) {
                this.create(attributes, options);
            } else {
                oldWord.save(attributes, options);
            }
        }
    });

    return new words;
});
define('views/searchResultList',["jquery","underscore","backbone","views/searchResult","views/detailResultList","views/addWordDialog","i18n!nls/trailsy","collections/words"],function(a,b,c,d,e,f,g,h){var i=c.View.extend({el:a("#searchResults"),collection:null,targetLang:"1",searchTimeout:null,events:{"keydown #searchInput":"keyDown","keyup #searchInput":"keyUp","search #searchInput":"search","blur #searchInput":"blur","focus #searchInput":"focus","change #targetLanguage":"changeLang","mousedown #addWord":"onClickAdd"},initialize:function(){this.items_element=a("#searchResultList"),b.bindAll(this,"unrender","render","search","changeLang","appendItem","focus","blur","keyDown","keyUp","delayedSearch","setTargetLang","onClickAdd"),this.collection=h,this.collection.bind("refresh",this.render),this.collection.bind("add",this.render)},setTargetLang:function(a){this.targetLang=a},onClickAdd:function(a){a.preventDefault(),a.stopPropagation(),f.setCollection(this.collection),f.setDialogType("addWord"),f.show(!0)},changeLang:function(){this.targetLang=a("#targetLanguage").val(),this.search(),console.log("selected lang: "+this.targetLang)},focus:function(){},blur:function(){this.items_element.addClass("hidden");var a=this.items_element.children("li.selected");a.length&&a.removeClass("selected")},keyUp:function(a){if(a.keyCode==27||a.keyCode==13||a.keyCode==9||a.keyCode==40||a.keyCode==38)return!0;this.delayedSearch()},delayedSearch:function(){this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(b.bind(function(){this.search()},this),350)},search:function(){this.searchTimeout&&clearTimeout(this.searchTimeout);var b=a("#searchInput"),c=b.val();if(c.length<3)return this.blur(),AppRouter.navigate("home",!0),!0;AppRouter.navigate("search/"+c+"/targetLang/"+this.targetLang,!0)},keyDown:function(b){if(b.keyCode==27)return b.preventDefault(),this.blur(),AppRouter.navigate("home",!0),!1;if(b.keyCode==13||b.keyCode==9){var c=this.items_element.children("li.selected");if(c.length){var d=c.attr("data-id");return AppRouter.navigate(this.collection.url+"/"+parseInt(d,10)+"/targetLang/"+this.targetLang,!0),a("#searchInput").blur(),!1}return this.search(),!0}if(b.keyCode==40){b.preventDefault();var c=this.items_element.children("li.selected");return c.length==0?this.items_element.children("li:first").addClass("selected"):c==this.items_element.children("li:last")?c.removeClass("selected"):c.removeClass("selected").next("li").addClass("selected"),!1}if(b.keyCode==38){b.preventDefault();var c=this.items_element.children("li.selected");return c.length==0?this.items_element.children("li:last").addClass("selected"):c==this.items_element.children("li:first")?c.removeClass("selected"):c.removeClass("selected").prev("li").addClass("selected"),!1}return!0},appendAddWordLink:function(){var b=a("#searchInput").val();this.el.append('<a href="#" id="addWord">'+g.add+" "+g.word+" "+b+"</a>")},unrender:function(){this.items_element.html(""),a("#addWord",this.el).remove(),e.unrender()},appendItem:function(b){var c=new d({model:b}),e=c.render().el,f=this;a(e).on("mousedown",function(){AppRouter.navigate(f.collection.url+"/"+b.get("id")+"/targetLang/"+f.targetLang,!0)}),this.items_element.append(e)},render:function(){this.unrender(),this.items_element.removeClass("hidden"),a("#searchInput").focus(),0===this.collection.length&&this.appendAddWordLink(),this.collection.each(function(a){this.appendItem(a)},this)}});return new i});
define('collections/detailWords',['backbone','underscore','models/word'],function(Backbone,_,wordModel){
    var detailWords = Backbone.Collection.extend({
        model: wordModel,

        initialize: function(attributes, options) {
            options || (options = {});
            this.bind("error", this.defaultErrorHandler);
            this.init && this.init(attributes, options);
        },

        defaultErrorHandler: function(model, error) {
            if (error.status == 401 || error.status == 403) {
                AppRouter.navigate('login', true);
            }
        },

        getOrFetch: function(id, callback) {
            var word = this.get(id);
            if ('undefined' === typeof word) {
                this.fetch({url:this.url+'/'+id,
                    success: _.bind(callback, this)
                });
            } else {
                callback();
            }
        },

        addOrUpdate: function(attributes, options) {
            var oldWord = this.find(function(word){
                return word.get('word') == attributes.word
            });
            if (!oldWord) {
                this.create(attributes, options);
            } else {
                oldWord.save(attributes, options);
            }
        }
    });

    return detailWords;
});
define('router',['jquery',
        'underscore',
        'backbone',
        'views/detailResultList',
        'views/searchResultList',
        'views/loginDialog',
        'views/signupDialog',
        'collections/words',
        'collections/detailWords'],
function($, _, Backbone, detailResultListView, searchResultListView, loginDialog, signupDialog, words, detailWords){
    var appRouter = Backbone.Router.extend({
        loginState: false,

        routes: {
            '': 'home',
            'login': 'login',
            'logout': 'logout',
            'signup': 'signup',
            'search/:query/targetLang/:lang': 'search',
            'words/:word/targetLang/:lang':  'words',
            'validation/:id/code/:code': 'validation'
        },

        initialize: function() {
            //if loginLink is hidden we are logged in
            this.setLoginState( $('#loginLink').hasClass('hidden') );
        },

        'home': function(){
        },

        /**
         *
         * @param bool loggedIn
         */
        setLoginState: function(loggedIn) {
            this.loginState = loggedIn;
        },

        getLoginState: function() {
            return this.loginState;
        },

        checkLoginState: function() {
            if (false === this.getLoginState()) {
                this.navigate('login', true);
                return false;
            } else {
                return true;
            }
        },

        words: function(id, targetLang) {
            words.getOrFetch(id,_.bind(function() {
                var model = words.get(id);
                this.setSearchText(model.get('word'));
                var tmpWords = new detailWords(model.get('translations') );
                tmpWords.url = 'words/'+id+'/translations';
                detailResultListView.setCollection(tmpWords);
                detailResultListView.render(targetLang);
            }, this));
            this.setTargetLangValue(targetLang);
        },

        setTargetLangValue: function(targetLang) {
            var options = $("#targetLanguage");
            options.val(targetLang);
            searchResultListView.setTargetLang(targetLang);
        },

        setSearchText: function(text) {
            var input = $('#searchInput');
            input.val(text);
        },

        search: function(query, targetLang) {
            $("#searchInput").addClass('loading');
            words.fetch({data: jQuery.param({word: query, lang: targetLang}),
                         url:'words/search',
                         success: function(){
                             searchResultListView.render();
                             $("#searchInput").removeClass('loading');
                            },
                         error: function() {$("#searchInput").removeClass('loading');}});
            this.setSearchText(query);
            this.setTargetLangValue(targetLang);
        },

        login: function() {
            loginDialog.show();
        },

        logout: function() {
            $.ajax({url:'/log_out',
                type:'GET',
                contentType: "application/json; charset=utf-8",
                beforeSend: function( xhr ) {
                    var token = $('meta[name="csrf-token"]').attr('content');
                    if (token) xhr.setRequestHeader('X-CSRF-Token', token);
                },
                success: _.bind(function(){
                    $('#logoutLink').addClass('hidden');
                    $('#loginLink').removeClass('hidden');
                    $('#signupLink').removeClass('hidden');
                    this.setLoginState(false);
                }, this),
                error: _.bind(console.log, this)
            });
        },
        
        signup: function() {
            console.log('show signup dialog');
            signupDialog.show();
        },

        validation: function(id, code) {
            $.ajax({url: '/user/'+id+'/validate/'+code,
                type: 'GET',
                contentType: 'application/json; charset=utf-8',
                beforeSend: function( xhr ) {
                    var token = $('meta[name="csrf-token"]').attr('content');
                    if (token) xhr.setRequestHeader('X-CSRF-Token', token);
                },
                success: _.bind(console.log, "success"),
                error: _.bind(console.log, "failure")
            })
        }
    });

    var init = function(){
        window.AppRouter = new appRouter;
        Backbone.history.start({pushStack:true});
    };
    return {
        init: init
    };
});

define('app',["jquery","backbone","router"],function(a,b,c){var d=function(){c.init(),a("#searchInput").focus()};return{init:d}});
/*!
 * jQuery Offline
 * Version 1.0.0
 *
 * http://github.com/wycats/jquery-offline
 *
 * Copyright 2010, Yehuda Katz
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Date: Fri Jul 9 10:20:00 2010 -0800
 */

(function($) {

    var prefix = "offline.jquery:",
        mostRecent = null,
        requesting = {};

    // Allow the user to explicitly turn off localStorage
    // before loading this plugin
    if (typeof $.support.localStorage === "undefined") {
        $.support.localStorage = !!window.localStorage;
    }

    // modified getJSON which uses ifModified: true
    function getJSON(url, data, fn) {
        if (jQuery.isFunction(data)) {
            fn = data;
            data = null;
        }

        var requestingKey = url + "?" + $.param(data || {});
        if (requesting[requestingKey]) {
            return false;
        }

        requesting[requestingKey] = true;

        return jQuery.ajax({
            type: "GET",
            url: url,
            data: data,
            success: function(responseData, text) {
                delete requesting[requestingKey];

                // handle lack of response (error callback isn't called in this case)
                if (undefined === responseData) {
                    if (!window.navigator.onLine) {
                        // requeue the request for the next time we come online
                        mostRecent = function() {
                            getJSON(url, data, fn);
                        };
                    }
                    return;
                }

                fn(responseData, text);
            },
            error: function() {
                delete requesting[requestingKey];
            },
            dataType: "json",
            ifModified: true
        });
    }

    if ($.support.localStorage) {
        // If localStorage is available, define jQuery.retrieveJSON
        // and jQuery.clearJSON to operate in terms of the offline
        // cache
        // If the user comes online, run the most recent request
        // that was queued due to the user being offline
        $(window).bind("online", function() {
            if (mostRecent) {
                mostRecent();
            }
        });

        // If the user goes offline, hide any loading bar
        // the user may have created
        $(window).bind("offline", function() {
            jQuery.event.trigger("ajaxStop");
        });

        $.retrieveJSON = function(params) {
            var url = params.url;
            var data = params.data ? params.data : '';
            var fn = params.success;

            // remember when this request started so we can report
            // the time when a follow-up Ajax request completes.
            // this is especially important when the user comes
            // back online, since retrieveDate may be minutes,
            // hours or even days before the Ajax request finally
            // completes
            var retrieveDate = new Date;

            // get a String value for the data passed in, and then
            // use it to calculate a cache key
            var param       = $.param(data),
                key         = prefix + url + ":" + param,
                text        = localStorage[key],
                dateString  = localStorage[key + ":date"],
                date        = new Date(Date.parse(dateString));

            function cleanupLocalStorage() {
                // take all date keys and remove the oldest half
                var dateKeys = [];
                for (var i = 0; i < localStorage.length; ++i) {
                    var key = localStorage.key(i);
                    if (/:date$/.test(key)) {
                        dateKeys.push(key);
                    }
                }
                dateKeys.sort(function(a, b) {
                    var date_a = localStorage[a], date_b = localStorage[b];
                    return date_a < date_b ? -1 : (date_a > date_b ? +1 : 0);
                });
                for (var i = 0; i < dateKeys.length / 2; ++i) {
                    var key = dateKeys[i];
                    delete localStorage[key];
                    delete localStorage[key.substr(0, key.length - 5)]; // :date
                }
            }

            // create a function that will make an Ajax request and
            // store the result in the cache. This function will be
            // deferred until later if the user is offline
            function getData() {
                return getJSON(url, data, function(json, status) {
                    if ( status == 'notmodified' ) {
                        // Just return if the response has a 304 status code
                        return false;
                    }

                    while (true) {
                        try {
                            localStorage[key] = JSON.stringify(json);
                            localStorage[key + ":date"] = new Date;
                            break;
                        } catch (e) {
                            if (e.name == "QUOTA_EXCEEDED_ERR" || e.name ==
                                "NS_ERROR_DOM_QUOTA_REACHED") {
                                cleanupLocalStorage();
                            }
                        }
                    }

                    // If this is a follow-up request, create an object
                    // containing both the original time of the cached
                    // data and the time that the data was originally
                    // retrieved from the cache. With this information,
                    // users of jQuery Offline can provide the user
                    // with improved feedback if the lag is large
                    var data = text && { cachedAt: date, retrievedAt: retrieveDate };
                    fn(json, status, data);
                });
            }

            // If there is anything in the cache, call the callback
            // right away, with the "cached" status string
            if( text ) {
                var obj = $.parseJSON(text);
                var response = fn( obj, "cached", { cachedAt: date } );
                if( response === false ) {
                    var dfd = $.Deferred().promise();
                    dfd.done = function(callback) { callback(obj) };
                    return dfd;
                }
            }

            // If the user is online, make the Ajax request right away;
            // otherwise, make it the most recent callback so it will
            // get triggered when the user comes online
            if (window.navigator.onLine) {
                return getData();
            } else {
                mostRecent = getData;
            }

            return true;
        };

        // jQuery.clearJSON is simply a wrapper around deleting the
        // localStorage for a URL/data pair
        $.clearJSON = function(url, data) {
            var param = $.param(data || {});
            delete localStorage[prefix + url + ":" + param];
            delete localStorage[prefix + url + ":" + param + ":date"];
        };
    } else {
        // If localStorage is unavailable, just make all requests
        // regular Ajax requests.
        $.retrieveJSON = getJSON;
        $.clearJSON = $.noop;
    }

})(jQuery);
define("vendor/jquery.offline", function(){});

/*
 RequireJS domReady 1.0.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
 */
define('domReady',[],function(){function k(a){for(var b=0,c;c=a[b];b++)c(f)}function l(){var a=g,b=h;c&&(a.length&&(g=[],k(a)),d.resourcesDone&&b.length&&(h=[],k(b)))}function e(){c||(c=!0,i&&clearInterval(i),l())}function b(a){c?a(f):g.push(a);return b}var j=typeof window!=="undefined"&&window.document,c=!j,f=j?document:null,g=[],h=[],d=requirejs||require||{},m=d.resourcesReady,i;if("resourcesReady"in d)d.resourcesReady=function(a){m&&m(a);a&&l()};j&&(document.addEventListener?(document.addEventListener("DOMContentLoaded",
    e,!1),window.addEventListener("load",e,!1)):window.attachEvent&&(window.attachEvent("onload",e),self===self.top&&(i=setInterval(function(){try{document.body&&(document.documentElement.doScroll("left"),e())}catch(a){}},30))),document.readyState==="complete"&&e());b.withResources=function(a){c&&d.resourcesDone?a(f):h.push(a);return b};b.version="1.0.0";b.load=function(a,c,d,e){e.isBuild?d(null):b(d)};return b});
require.config({
    jqueryoffline: 'vendor/jquery.offline',
    underscore: 'vendor/underscore-min',
    backbone: 'vendor/backbone'
})

require(['jquery',
         'order!vendor/underscore-min',
        'order!vendor/backbone','order!app','domReady', 'order!vendor/jquery.offline'],
    function($,_,Backbone,app, domReady, jqueryoffline){
        domReady(function() {
            app.init();
        });
});

define("main", function(){});
