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
(function(a){function e(b,f,g){jQuery.isFunction(f)&&(g=f,f=null);var h=b+"?"+a.param(f||{});return d[h]?!1:(d[h]=!0,jQuery.ajax({type:"GET",url:b,data:f,success:function(a,i){delete d[h];if(undefined===a){window.navigator.onLine||(c=function(){e(b,f,g)});return}g(a,i)},error:function(){delete d[h]},dataType:"json",ifModified:!0}))}var b="offline.jquery:",c=null,d={};typeof a.support.localStorage=="undefined"&&(a.support.localStorage=!!window.localStorage),a.support.localStorage?(a(window).bind("online",function(){c&&c()}),a(window).bind("offline",function(){jQuery.event.trigger("ajaxStop")}),a.retrieveJSON=function(d,f,g){function n(){var a=[];for(var b=0;b<localStorage.length;++b){var c=localStorage.key(b);/:date$/.test(c)&&a.push(c)}a.sort(function(a,b){var c=localStorage[a],d=localStorage[b];return c<d?-1:c>d?1:0});for(var b=0;b<a.length/2;++b){var c=a[b];delete localStorage[c],delete localStorage[c.substr(0,c.length-5)]}}function o(){return e(d,f,function(a,b){if(b=="notmodified")return!1;for(;;)try{localStorage[j]=JSON.stringify(a),localStorage[j+":date"]=new Date;break}catch(c){(c.name=="QUOTA_EXCEEDED_ERR"||c.name=="NS_ERROR_DOM_QUOTA_REACHED")&&n()}var d=k&&{cachedAt:m,retrievedAt:h};g(a,b,d)})}a.isFunction(f)&&(g=f,f={});var h=new Date,i=a.param(f),j=b+d+":"+i,k=localStorage[j],l=localStorage[j+":date"],m=new Date(Date.parse(l));if(k){console.log("reached text");return;var p,q}return window.navigator.onLine?o():(c=o,!0)},a.clearJSON=function(c,d){var e=a.param(d||{});delete localStorage[b+c+":"+e],delete localStorage[b+c+":"+e+":date"]}):(a.retrieveJSON=e,a.clearJSON=a.noop)})(jQuery)