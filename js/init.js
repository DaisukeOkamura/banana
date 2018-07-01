/**
 * velocity-animate (C) 2014-2017 Julian Shapiro.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Velocity=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e};function n(e){return!0===e||!1===e}function r(e){return"[object Function]"===Object.prototype.toString.call(e)}function i(e){return!(!e||!e.nodeType)}function o(e){return"number"==typeof e}function a(t){if(!t||"object"!==(void 0===t?"undefined":e(t))||t.nodeType||"[object Object]"!==Object.prototype.toString.call(t))return!1;var n=Object.getPrototypeOf(t);return!n||n.hasOwnProperty("constructor")&&n.constructor===Object}function l(e){return"string"==typeof e}function u(e){return e&&o(e.length)&&r(e.velocity)}function s(e){return e&&e!==window&&o(e.length)&&!l(e)&&!r(e)&&!i(e)&&(0===e.length||i(e[0]))}function c(e){return Array.prototype.slice.call(e,0)}function f(e,t,n,r){e&&Object.defineProperty(e,t,{configurable:!r,writable:!r,value:n})}function d(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=!0,i=!1,o=void 0;try{for(var a,l=arguments[Symbol.iterator]();!(r=(a=l.next()).done);r=!0){var u=a.value;if(void 0!==u&&u==u)return u}}catch(e){i=!0,o=e}finally{try{!r&&l.return&&l.return()}finally{if(i)throw o}}}var v=Date.now?Date.now:function(){return(new Date).getTime()};function p(e,t){e instanceof Element&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(\\s|$)","gi")," "))}var y={};function g(e,t){var n,i,o=e[0],a=e[1];l(o)?r(a)?y[o]&&(n=y,i=o,!Object.prototype.propertyIsEnumerable.call(n,i))?console.warn("VelocityJS: Trying to override internal 'registerAction' callback",o):!0===t?f(y,o,a):y[o]=a:console.warn("VelocityJS: Trying to set 'registerAction' callback to an invalid value:",o,a):console.warn("VelocityJS: Trying to set 'registerAction' name to an invalid value:",o)}g(["registerAction",g],!0);var h=400,m={fast:200,normal:400,slow:600},w={};function b(e){var t=e[0],n=e[1];l(t)?r(n)?w[t]?console.warn("VelocityJS: Trying to override 'registerEasing' callback",t):w[t]=n:console.warn("VelocityJS: Trying to set 'registerEasing' callback to an invalid value:",t,n):console.warn("VelocityJS: Trying to set 'registerEasing' name to an invalid value:",t)}function S(e,t,n,r){return t+e*(n-t)}function x(e){return Math.min(Math.max(e,0),1)}function k(e,t){return 1-3*t+3*e}function O(e,t){return 3*t-6*e}function _(e){return 3*e}function E(e,t,n){return((k(t,n)*e+O(t,n))*e+_(t))*e}function T(e,t,n){return 3*k(t,n)*e*e+2*O(t,n)*e+_(t)}function M(e,t,n,r){var i=4,o=.001,a=1e-7,l=10,u=11,s=1/(u-1),c="Float32Array"in window;if(4===arguments.length){for(var f=0;f<4;++f)if("number"!=typeof arguments[f]||isNaN(arguments[f])||!isFinite(arguments[f]))return;e=x(e),n=x(n);var d=c?new Float32Array(u):new Array(u),v=!1,p="generateBezier("+[e,t,n,r]+")",y=function(i,o,a,l){return v||h(),0===i?o:1===i?a:e===t&&n===r?o+i*(a-o):o+E(g(i),t,r)*(a-o)};return y.getControlPoints=function(){return[{x:e,y:t},{x:n,y:r}]},y.toString=function(){return p},y}function g(t){for(var r=u-1,c=0,f=1;f!==r&&d[f]<=t;++f)c+=s;var v=c+(t-d[--f])/(d[f+1]-d[f])*s,p=T(v,e,n);return p>=o?function(t,r){for(var o=0;o<i;++o){var a=T(r,e,n);if(0===a)return r;r-=(E(r,e,n)-t)/a}return r}(t,v):0===p?v:function(t,r,i){var o=void 0,u=void 0,s=0;do{(o=E(u=r+(i-r)/2,e,n)-t)>0?i=u:r=u}while(Math.abs(o)>a&&++s<l);return u}(t,c,c+s)}function h(){v=!0,e===t&&n===r||function(){for(var t=0;t<u;++t)d[t]=E(t*s,e,n)}()}}g(["registerEasing",b],!0),b(["linear",S]),b(["swing",function(e,t,n){return t+(.5-Math.cos(e*Math.PI)/2)*(n-t)}]),b(["spring",function(e,t,n){return t+(1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e))*(n-t)}]);var A=M(.42,0,1,1),q=M(0,0,.58,1),V=M(.42,0,.58,1);function N(e){return-e.tension*e.x-e.friction*e.v}function L(e,t,n){var r={x:e.x+n.dx*t,v:e.v+n.dv*t,tension:e.tension,friction:e.friction};return{dx:r.v,dv:N(r)}}function J(e,t){var n={dx:e.v,dv:N(e)},r=L(e,.5*t,n),i=L(e,.5*t,r),o=L(e,t,i),a=1/6*(n.dx+2*(r.dx+i.dx)+o.dx),l=1/6*(n.dv+2*(r.dv+i.dv)+o.dv);return e.x=e.x+a*t,e.v=e.v+l*t,e}b(["ease",M(.25,.1,.25,1)]),b(["easeIn",A]),b(["ease-in",A]),b(["easeOut",q]),b(["ease-out",q]),b(["easeInOut",V]),b(["ease-in-out",V]),b(["easeInSine",M(.47,0,.745,.715)]),b(["easeOutSine",M(.39,.575,.565,1)]),b(["easeInOutSine",M(.445,.05,.55,.95)]),b(["easeInQuad",M(.55,.085,.68,.53)]),b(["easeOutQuad",M(.25,.46,.45,.94)]),b(["easeInOutQuad",M(.455,.03,.515,.955)]),b(["easeInCubic",M(.55,.055,.675,.19)]),b(["easeOutCubic",M(.215,.61,.355,1)]),b(["easeInOutCubic",M(.645,.045,.355,1)]),b(["easeInQuart",M(.895,.03,.685,.22)]),b(["easeOutQuart",M(.165,.84,.44,1)]),b(["easeInOutQuart",M(.77,0,.175,1)]),b(["easeInQuint",M(.755,.05,.855,.06)]),b(["easeOutQuint",M(.23,1,.32,1)]),b(["easeInOutQuint",M(.86,0,.07,1)]),b(["easeInExpo",M(.95,.05,.795,.035)]),b(["easeOutExpo",M(.19,1,.22,1)]),b(["easeInOutExpo",M(1,0,0,1)]),b(["easeInCirc",M(.6,.04,.98,.335)]),b(["easeOutCirc",M(.075,.82,.165,1)]),b(["easeInOutCirc",M(.785,.135,.15,.86)]);var I={};function C(e,t){return o(e)?e:l(e)?m[e.toLowerCase()]||parseFloat(e.replace("ms","").replace("s","000")):null==t?void 0:C(t)}function j(e){if(n(e))return e;null!=e&&console.warn("VelocityJS: Trying to set 'cache' to an invalid value:",e)}function P(e){if(r(e))return e;null!=e&&console.warn("VelocityJS: Trying to set 'begin' to an invalid value:",e)}function F(e,t){if(r(e))return e;null==e||t||console.warn("VelocityJS: Trying to set 'complete' to an invalid value:",e)}function H(e){var t=C(e);if(!isNaN(t))return t;null!=e&&console.error("VelocityJS: Trying to set 'delay' to an invalid value:",e)}function R(e,t){var n=C(e);if(!isNaN(n)&&n>=0)return n;null==e||t||console.error("VelocityJS: Trying to set 'duration' to an invalid value:",e)}function W(e,t,n){if(l(e))return w[e];if(r(e))return e;if(Array.isArray(e)){if(1===e.length)return i=e[0],I[i]||(I[i]=function(e,t,n){return 0===e?t:1===e?n:t+Math.round(e*i)*(1/i)*(n-t)});if(2===e.length)return function e(t,n,r){var i={x:-1,v:0,tension:parseFloat(t)||500,friction:parseFloat(n)||20},o=[0],a=null!=r,l=0,u=void 0,s=void 0;for(u=a?(l=e(i.tension,i.friction))/r*.016:.016;s=J(s||i,u),o.push(1+s.x),l+=16,Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4;);return a?function(e,t,n){return 0===e?t:1===e?n:t+o[Math.floor(e*(o.length-1))]*(n-t)}:l}(e[0],e[1],t);if(4===e.length)return M.apply(null,e)||!1}var i;null==e||n||console.error("VelocityJS: Trying to set 'easing' to an invalid value:",e)}function B(e){if(!1===e)return 0;var t=parseInt(e,10);if(!isNaN(t)&&t>=0)return Math.min(t,60);null!=e&&console.warn("VelocityJS: Trying to set 'fpsLimit' to an invalid value:",e)}function z(e){switch(e){case!1:return 0;case!0:return!0;default:var t=parseInt(e,10);if(!isNaN(t)&&t>=0)return t}null!=e&&console.warn("VelocityJS: Trying to set 'loop' to an invalid value:",e)}function $(e,t){if(!1===e||l(e))return e;null==e||t||console.warn("VelocityJS: Trying to set 'queue' to an invalid value:",e)}function G(e){switch(e){case!1:return 0;case!0:return!0;default:var t=parseInt(e,10);if(!isNaN(t)&&t>=0)return t}null!=e&&console.warn("VelocityJS: Trying to set 'repeat' to an invalid value:",e)}function Q(e){if(o(e))return e;null!=e&&console.error("VelocityJS: Trying to set 'speed' to an invalid value:",e)}function D(e){if(n(e))return e;null!=e&&console.error("VelocityJS: Trying to set 'sync' to an invalid value:",e)}var U={mobileHA:!0},Z=void 0,Y=void 0,X=void 0,K=void 0,ee=void 0,te=void 0,ne=void 0,re=void 0,ie=void 0,oe=void 0,ae=void 0,le=void 0,ue=void 0,se=void 0,ce=void 0,fe=void 0;Object.defineProperties(U,{reset:{enumerable:!0,value:function(){Z=!0,Y=void 0,X=void 0,K=0,ee=h,te=W("swing",h),ne=60,re=0,oe=980/60,ae=!0,le=!0,ue="",se=0,ce=1,fe=!0}},cache:{enumerable:!0,get:function(){return Z},set:function(e){void 0!==(e=j(e))&&(Z=e)}},begin:{enumerable:!0,get:function(){return Y},set:function(e){void 0!==(e=P(e))&&(Y=e)}},complete:{enumerable:!0,get:function(){return X},set:function(e){void 0!==(e=F(e))&&(X=e)}},delay:{enumerable:!0,get:function(){return K},set:function(e){void 0!==(e=H(e))&&(K=e)}},duration:{enumerable:!0,get:function(){return ee},set:function(e){void 0!==(e=R(e))&&(ee=e)}},easing:{enumerable:!0,get:function(){return te},set:function(e){void 0!==(e=W(e,ee))&&(te=e)}},fpsLimit:{enumerable:!0,get:function(){return ne},set:function(e){void 0!==(e=B(e))&&(ne=e,oe=980/e)}},loop:{enumerable:!0,get:function(){return re},set:function(e){void 0!==(e=z(e))&&(re=e)}},mobileHA:{enumerable:!0,get:function(){return ie},set:function(e){n(e)&&(ie=e)}},minFrameTime:{enumerable:!0,get:function(){return oe}},promise:{enumerable:!0,get:function(){return ae},set:function(e){void 0!==(e=function(e){if(n(e))return e;null!=e&&console.warn("VelocityJS: Trying to set 'promise' to an invalid value:",e)}(e))&&(ae=e)}},promiseRejectEmpty:{enumerable:!0,get:function(){return le},set:function(e){void 0!==(e=function(e){if(n(e))return e;null!=e&&console.warn("VelocityJS: Trying to set 'promiseRejectEmpty' to an invalid value:",e)}(e))&&(le=e)}},queue:{enumerable:!0,get:function(){return ue},set:function(e){void 0!==(e=$(e))&&(ue=e)}},repeat:{enumerable:!0,get:function(){return se},set:function(e){void 0!==(e=G(e))&&(se=e)}},speed:{enumerable:!0,get:function(){return ce},set:function(e){void 0!==(e=Q(e))&&(ce=e)}},sync:{enumerable:!0,get:function(){return fe},set:function(e){void 0!==(e=D(e))&&(fe=e)}}}),U.reset();var de=[],ve={},pe=new Set,ye=[],ge=new Map,he="velocityData";function me(e){var t=e[he];if(t)return t;for(var n=e.ownerDocument.defaultView,r=0,i=0;i<ye.length;i++){var o=ye[i];l(o)?e instanceof n[o]&&(r|=1<<i):e instanceof o&&(r|=1<<i)}var a={types:r,count:0,computedStyle:null,cache:{},queueList:{},lastAnimationList:{},lastFinishList:{},window:n};return Object.defineProperty(e,he,{value:a}),a}var we=window&&window===window.window,be=we&&void 0!==window.pageYOffset,Se={isClient:we,isMobile:we&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:we&&/Android/i.test(navigator.userAgent),isGingerbread:we&&/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:we&&window.chrome,isFirefox:we&&/Firefox/i.test(navigator.userAgent),prefixElement:we&&document.createElement("div"),windowScrollAnchor:be,scrollAnchor:be?window:!we||document.documentElement||document.body.parentNode||document.body,scrollPropertyLeft:be?"pageXOffset":"scrollLeft",scrollPropertyTop:be?"pageYOffset":"scrollTop",className:"velocity-animating",isTicking:!1,first:void 0,last:void 0,firstNew:void 0};function xe(e){var t=Se.last;e._prev=t,e._next=void 0,t?t._next=e:Se.first=e,Se.last=e,Se.firstNew||(Se.firstNew=e);var n=e.element;me(n).count++||function(e,t){e instanceof Element&&(e.classList?e.classList.add(t):(p(e,t),e.className+=(e.className.length?" ":"")+t))}(n,Se.className)}function ke(e,t,n){var r=me(e);if(!1!==n&&(r.lastAnimationList[n]=t),!1===n)xe(t);else{l(n)||(n="");var i=r.queueList[n];if(i){for(;i._next;)i=i._next;i._next=t,t._prev=i}else null===i?r.queueList[n]=t:(r.queueList[n]=null,xe(t))}}function Oe(e){var t=e._next,n=e._prev,r=null==e.queue?e.options.queue:e.queue;(Se.firstNew===e&&(Se.firstNew=t),Se.first===e?Se.first=t:n&&(n._next=t),Se.last===e?Se.last=n:t&&(t._prev=n),r)&&(me(e.element)&&(e._next=e._prev=void 0))}var _e={};function Ee(e){var t=e.options,n=d(e.queue,t.queue),r=d(e.loop,t.loop,U.loop),i=d(e.repeat,t.repeat,U.repeat),o=8&e._flags;if(o||!r&&!i){var a=e.element,u=me(a);if(--u.count||o||p(a,Se.className),t&&++t._completed===t._total){!o&&t.complete&&(!function(e){var t=e.complete||e.options.complete;if(t)try{var n=e.elements;t.call(n,n,e)}catch(e){setTimeout(function(){throw e},1)}}(e),t.complete=null);var s=t._resolver;s&&(s(e.elements),delete t._resolver)}!1!==n&&(o||(u.lastFinishList[n]=e.timeStart+d(e.duration,t.duration,U.duration)),function(e,t,n){if(!1!==t){l(t)||(t="");var r=me(e),i=r.queueList[t];i?(r.queueList[t]=i._next||null,n||xe(i)):null===i&&delete r.queueList[t]}}(a,n)),Oe(e)}else i&&!0!==i?e.repeat=i-1:r&&!0!==r&&(e.loop=r-1,e.repeat=d(e.repeatAgain,t.repeatAgain,U.repeatAgain)),r&&(e._flags^=64),!1!==n&&(me(e.element).lastFinishList[n]=e.timeStart+d(e.duration,t.duration,U.duration)),e.timeStart=e.ellapsedTime=e.percentComplete=0,e._flags&=-5}function Te(e){var t=e[0],n=e[1],i=e[2];if((!l(t)||window[t]instanceof Object)&&(l(t)||t instanceof Object))if(l(n))if(r(i)){var o=ye.indexOf(t),a=3;if(o<0&&!l(t))if(ge.has(t))o=ye.indexOf(ge.get(t));else for(var u in window)if(window[u]===t){(o=ye.indexOf(u))<0&&(o=ye.push(u)-1,de[o]={},ge.set(t,u));break}if(o<0&&(o=ye.push(t)-1,de[o]={}),de[o][n]=i,l(e[a])){var s=e[a++],c=ve[s];c||(c=ve[s]=[]),c.push(i)}!1===e[a]&&pe.add(n)}else console.warn("VelocityJS: Trying to set 'registerNormalization' callback to an invalid value:",n,i);else console.warn("VelocityJS: Trying to set 'registerNormalization' name to an invalid value:",n);else console.warn("VelocityJS: Trying to set 'registerNormalization' constructor to an invalid value:",t)}function Me(e){var t=e[0],n=e[1],r=ye.indexOf(t);if(r<0&&!l(t))if(ge.has(t))r=ye.indexOf(ge.get(t));else for(var i in window)if(window[i]===t){r=ye.indexOf(i);break}return r>=0&&de[r].hasOwnProperty(n)}function Ae(e,t){for(var n=me(e),r=void 0,i=ye.length-1,o=n.types;!r&&i>=0;i--)o&1<<i&&(r=de[i][t]);return r}function qe(e,t,n,r){var i=pe.has(t),o=!i&&me(e);(i||o&&o.cache[t]!==n)&&(i||(o.cache[t]=n||void 0),(r=r||Ae(e,t))&&r(e,n),Gt.debug>=2&&console.info('Set "'+t+'": "'+n+'"',e))}g(["registerNormalization",Te]),g(["hasNormalization",Me]);var Ve={};function Ne(e){var t=Ve[e];return t||(Ve[e]=e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()}))}var Le=/#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/gi,Je=/#([a-f\d])([a-f\d])([a-f\d])/gi,Ie=/(rgba?\(\s*)?(\b[a-z]+\b)/g,Ce=/rgb(a?)\(([^\)]+)\)/gi,je=/\s+/g,Pe={};function Fe(e,t,n,r){return"rgba("+parseInt(t,16)+","+parseInt(n,16)+","+parseInt(r,16)+",1)"}function He(e){return e.replace(Le,Fe).replace(Je,function(e,t,n,r){return Fe(0,t+t,n+n,r+r)}).replace(Ie,function(e,t,n){return Pe[n]?(t||"rgba(")+Pe[n]+(t?"":",1)"):e}).replace(Ce,function(e,t,n){return"rgba("+n.replace(je,"")+(t?"":",1")+")"})}function Re(e,t,n){if("border-box"===ze(e,"boxSizing").toString().toLowerCase()===n){var r="width"===t?["Left","Right"]:["Top","Bottom"],i=["padding"+r[0],"padding"+r[1],"border"+r[0]+"Width","border"+r[1]+"Width"],o=0,a=!0,l=!1,u=void 0;try{for(var s,c=i[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var f=s.value,d=parseFloat(ze(e,f));isNaN(d)||(o+=d)}}catch(e){l=!0,u=e}finally{try{!a&&c.return&&c.return()}finally{if(l)throw u}}return n?-o:o}return 0}function We(e,t){return e.getBoundingClientRect()[t]+Re(e,t,!0)+"px"}function Be(e,t){var n=me(e),r=n.computedStyle?n.computedStyle:n.window.getComputedStyle(e,null),i=0;if(n.computedStyle||(n.computedStyle=r),"none"===r.display)switch(t){case"width":case"height":return qe(e,"display","auto"),i=We(e,t),qe(e,"display","none"),String(i)}if((i=r[t])||(i=e.style[t]),"auto"===i)switch(t){case"width":case"height":i=We(e,t);break;case"top":case"left":case"right":case"bottom":var o=ze(e,"position");if("fixed"===o||"absolute"===o){i=e.getBoundingClientRect[t]+"px";break}default:i="0px"}return i?String(i):""}function ze(e,t,n,r){var i=me(e),o=void 0;return pe.has(t)&&(r=!0),!r&&i&&null!=i.cache[t]?o=i.cache[t]:(n=n||Ae(e,t))&&(o=n(e),i&&(i.cache[t]=o)),Gt.debug>=2&&console.info('Get "'+t+'": "'+o+'"',e),o}var $e=/^#([A-f\d]{3}){1,2}$/i,Ge={function:function(e,t,n,r,i,o){return e.call(t,r,n.length,i)},number:function(e,t,n,r,i,o){return String(e)+function(e){for(var t in ve)if(ve[t].includes(e))return t;return""}(o.fn)},string:function(e,t,n,r,i,o){return He(e)},undefined:function(e,t,n,r,i,o){return He(ze(t,i,o.fn)||"")}};function Qe(t,n){var i=t.tweens=Object.create(null),a=t.elements,u=t.element,s=a.indexOf(u),c=me(u),f=d(t.queue,t.options.queue),v=d(t.options.duration,U.duration);for(var p in n)if(n.hasOwnProperty(p)){var y=Ne(p),g=Ae(u,y),h=n[p];if(!g&&"tween"!==y){Gt.debug&&console.log('Skipping "'+p+'" due to a lack of browser support.');continue}if(null==h){Gt.debug&&console.log('Skipping "'+p+'" due to no value supplied.');continue}var m=i[y]={},b=void 0,S=void 0;if(m.fn=g,r(h)&&(h=h.call(u,s,a.length,a)),Array.isArray(h)){var x=h[1],k=h[2];b=h[0],l(x)&&(/^[\d-]/.test(x)||$e.test(x))||r(x)||o(x)?S=x:l(x)&&w[x]||Array.isArray(x)?(m.easing=W(x,v),S=k):S=x||k}else b=h;m.end=Ge[void 0===b?"undefined":e(b)](b,u,a,s,y,m),null==S&&!1!==f&&void 0!==c.queueList[f]||(m.start=Ge[void 0===S?"undefined":e(S)](S,u,a,s,y,m),Ye(y,m,v))}}var De=/((?:[+\-*/]=)?(?:[+-]?\d*\.\d+|[+-]?\d+)[a-z%]*|(?:.(?!$|[+-]?\d|[+\-*/]=[+-]?\d))+.|.)/g,Ue=/^([+\-*/]=)?([+-]?\d*\.\d+|[+-]?\d+)(.*)$/;function Ze(e,t){for(var n=e.length,r=[],i=[],o=void 0,a=0;a<n;a++){if(!l(e[a]))return;""===e[a]?r[a]=[""]:r[a]=c(e[a].match(De)),i[a]=0,o=o||r[a].length>1}for(var u=[],s=u.pattern=[],f=function(e){if(l(s[s.length-1]))s[s.length-1]+=e;else if(e){s.push(e);for(var t=0;t<n;t++)u[t].push(null)}},d=function(){if(!(o||s.length>1)){for(var r="display"===t,i="visibility"===t,a=0;a<n;a++){var l=e[a];u[a][0]=l,u[a].easing=W(r&&"none"===l||i&&"hidden"===l||!r&&!i?"at-end":"at-start",400)}return s[0]=!1,u}},v=!0,p=0;p<n;p++)u[p]=[];for(;v;){for(var y=[],g=[],h=void 0,m=!1,w=!1,b=0;b<n;b++){var S=i[b]++,x=r[b][S];if(!x){if(b)return;for(;b<n;b++){var k=i[b]++;if(r[b][k])return d()}v=!1;break}var O=x.match(Ue);if(O){if(h)return d();var _=parseFloat(O[2]),E=O[3],T=O[1]?O[1][0]+E:void 0,M=T||E;g.includes(M)||g.push(M),E||(_?w=!0:m=!0),y[b]=T?[_,M,!0]:[_,M]}else{if(y.length)return d();if(h){if(h!==x)return d()}else h=x}}if(h)f(h);else if(g.length)if(2===g.length&&m&&!w&&g.splice(g[0]?1:0,1),1===g.length){var A=g[0];switch(A[0]){case"+":case"-":case"*":case"/":return void(t&&console.error('Velocity: The first property must not contain a relative function "'+t+'":',e))}s.push(!1);for(var q=0;q<n;q++)u[q].push(y[q][0]);f(A)}else{f("calc(");for(var V=s.length-1,N=0;N<g.length;N++){var L=g[N],J=L[0],I="*"===J||"/"===J,C=I||"+"===J||"-"===J;I&&(s[V]+="(",f(")")),N&&f(" "+(C?J:"+")+" "),s.push(!1);for(var j=0;j<n;j++){var P=y[j],F=P[1]===L?P[0]:3===P.length?u[j-1][u[j-1].length-1]:I?1:0;u[j].push(F)}f(C?L.substring(1):L)}f(")")}}for(var H=0,R=0;H<s.length;H++){var B=s[H];l(B)?R&&B.indexOf(",")>=0?R++:B.indexOf("rgb")>=0&&(R=1):R&&(R<4?s[H]=!0:R=0)}return u}function Ye(e,t,n,r){var i=t.start,o=t.end;if(l(o)&&l(i)){var a=Ze([i,o],e);if(!a&&r){var u=i.match(/\d\.?\d*/g)||["0"],s=u.length,c=0;a=Ze([o.replace(/\d+\.?\d*/g,function(){return u[c++%s]}),o],e)}if(a)switch(Gt.debug&&console.log("Velocity: Sequence found:",a),a[0].percent=0,a[1].percent=1,t.sequence=a,t.easing){case w["at-start"]:case w.during:case w["at-end"]:a[0].easing=a[1].easing=t.easing}}}function Xe(e){if(Se.firstNew===e&&(Se.firstNew=e._next),!(1&e._flags)){var t=e.element,n=e.tweens;d(e.options.duration,U.duration);for(var r in n){var i=n[r];if(null==i.start){var o=ze(e.element,r);l(o)?(i.start=He(o),Ye(r,i,0,!0)):Array.isArray(o)||console.warn("bad type",i,r,o)}Gt.debug&&console.log('tweensContainer "'+r+'": '+JSON.stringify(i),t)}e._flags|=1}}function Ke(e){var t=e.begin||e.options.begin;if(t)try{var n=e.elements;t.call(n,n,e)}catch(e){setTimeout(function(){throw e},1)}}function et(e){var t=e.progress||e.options.progress;if(t)try{var n=e.elements,r=e.percentComplete,i=e.options,o=e.tween;t.call(n,n,r,Math.max(0,e.timeStart+(null!=e.duration?e.duration:null!=i.duration?i.duration:U.duration)-ct),void 0!==o?o:String(100*r),e)}catch(e){setTimeout(function(){throw e},1)}}function tt(){var e=!0,t=!1,n=void 0;try{for(var r,i=it[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){et(r.value)}}catch(e){t=!0,n=e}finally{try{!e&&i.return&&i.return()}finally{if(t)throw n}}it.clear();var o=!0,a=!1,l=void 0;try{for(var u,s=rt[Symbol.iterator]();!(o=(u=s.next()).done);o=!0){Ee(u.value)}}catch(e){a=!0,l=e}finally{try{!o&&s.return&&s.return()}finally{if(a)throw l}}rt.clear()}var nt=1e3/60,rt=new Set,it=new Set,ot=function(){var e=window.performance||{};if("function"!=typeof e.now){var t=e.timing&&e.timing.navigationStart?e.timing.navigationStart:v();e.now=function(){return v()-t}}return e}(),at=function(e){return setTimeout(e,Math.max(0,nt-(ot.now()-ct)))},lt=window.requestAnimationFrame||at,ut=void 0,st=void 0,ct=0;try{(st=new Worker(URL.createObjectURL(new Blob(["("+function(){var e=this,t=void 0;this.onmessage=function(n){switch(n.data){case!0:t||(t=setInterval(function(){e.postMessage(!0)},1e3/30));break;case!1:t&&(clearInterval(t),t=0);break;default:e.postMessage(n.data)}}}+")()"])))).onmessage=function(e){!0===e.data?ft():tt()},Se.isMobile||void 0===document.hidden||document.addEventListener("visibilitychange",function(){st.postMessage(Se.isTicking&&document.hidden)})}catch(e){}function ft(e){if(!ut){if(ut=!0,!1!==e){var t=ot.now(),n=ct?t-ct:nt,r=U.speed,i=U.easing,o=U.duration,a=void 0,l=void 0;if(n>=U.minFrameTime||!ct){for(ct=t;Se.firstNew;)Xe(Se.firstNew);for(a=Se.first;a&&a!==Se.firstNew;a=a._next){var u=a.element,s=me(u);if(u.parentNode&&s){var c=a.options,f=a._flags,d=a.timeStart;if(!d){var v=null!=a.queue?a.queue:c.queue;d=t-n,!1!==v&&(d=Math.max(d,s.lastFinishList[v]||0)),a.timeStart=d}16&f?a.timeStart+=n:2&f||(a._flags|=2,c._ready++)}else Oe(a)}for(a=Se.first;a&&a!==Se.firstNew;a=l){var p=a._flags;if(l=a._next,2&p&&!(16&p)){var y=a.options;if(32&p&&y._ready<y._total)a.timeStart+=n;else{var g=null!=a.speed?a.speed:null!=y.speed?y.speed:r,h=a.timeStart;if(!(4&p)){var m=null!=a.delay?a.delay:y.delay;if(m){if(h+m/g>t)continue;a.timeStart=h+=m/(m>0?g:1)}a._flags|=4,0==y._started++&&(y._first=a,y.begin&&(Ke(a),y.begin=void 0))}1!==g&&(a.timeStart=h+=Math.min(n,t-h)*(1-g));var w=null!=a.easing?a.easing:null!=y.easing?y.easing:i,b=a.ellapsedTime=t-h,x=null!=a.duration?a.duration:null!=y.duration?y.duration:o,k=a.percentComplete=Gt.mock?1:Math.min(b/x,1),O=a.tweens,_=64&p;for(var E in(a.progress||y._first===a&&y.progress)&&it.add(a),1===k&&rt.add(a),O){var T=O[E],M=T.sequence,A=M.pattern,q="",V=0;if(A){for(var N=(T.easing||w)(k,0,1,E),L=0,J=0;J<M.length-1;J++)M[J].percent<N&&(L=J);for(var I=M[L],C=M[L+1]||I,j=(k-I.percent)/(C.percent-I.percent),P=C.easing||S;V<A.length;V++){var F=I[V];if(null==F)q+=A[V];else{var H=C[V];if(F===H)q+=F;else{var R=P(_?1-j:j,F,H,E);q+=!0===A[V]?Math.round(R):R}}}"tween"!==E?(1===k&&q.startsWith("calc(0 + ")&&(q=q.replace(/^calc\(0[^\d]* \+ ([^\(\)]+)\)$/,"$1")),qe(a.element,E,q,T.fn)):a.tween=q}else console.warn("VelocityJS: Missing pattern:",E,JSON.stringify(T[E])),delete O[E]}}}}(it.size||rt.size)&&(document.hidden?st?st.postMessage(""):setTimeout(tt,1):tt())}}Se.first?(Se.isTicking=!0,document.hidden?st?!1===e&&st.postMessage(!0):at(ft):lt(ft)):(Se.isTicking=!1,ct=0,document.hidden&&st&&st.postMessage(!1)),ut=!1}}function dt(e,t,n){if(Xe(e),void 0===t||t===d(e.queue,e.options.queue,n)){if(!(4&e._flags)){var r=e.options;0==r._started++&&(r._first=e,r.begin&&(Ke(e),r.begin=void 0)),e._flags|=4}for(var i in e.tweens){var o=e.tweens[i],a=o.sequence,l=a.pattern,u="",s=0;if(l)for(var c=a[a.length-1];s<l.length;s++){var f=c[s];u+=null==f?l[s]:f}qe(e.element,i,u,o.fn)}Ee(e)}}g(["finish",function(e,t,n){var r=$(e[0],!0),i=U.queue,o=!0===e[void 0===r?0:1];if(u(t)&&t.velocity.animations){var a=!0,l=!1,s=void 0;try{for(var c,f=t.velocity.animations[Symbol.iterator]();!(a=(c=f.next()).done);a=!0)dt(c.value,r,i)}catch(e){l=!0,s=e}finally{try{!a&&f.return&&f.return()}finally{if(l)throw s}}}else{for(;Se.firstNew;)Xe(Se.firstNew);for(var d,v=Se.first;v&&(o||v!==Se.firstNew);v=d||Se.firstNew)d=v._next,t&&!t.includes(v.element)||dt(v,r,i)}n&&(u(t)&&t.velocity.animations&&t.then?t.then(n._resolver):n._resolver(t))}],!0);var vt={isExpanded:1,isReady:2,isStarted:4,isStopped:8,isPaused:16,isSync:32,isReverse:64};function pt(e,t,n,r){void 0!==t&&t!==d(e.queue,e.options.queue,n)||(r?e._flags|=16:e._flags&=-17)}function yt(e,t,n,r){var i=0===r.indexOf("pause"),o="false"!==(r.indexOf(".")>=0?r.replace(/^.*\./,""):void 0)&&$(e[0]),a=U.queue;if(u(t)&&t.velocity.animations){var l=!0,s=!1,c=void 0;try{for(var f,d=t.velocity.animations[Symbol.iterator]();!(l=(f=d.next()).done);l=!0){pt(f.value,o,a,i)}}catch(e){s=!0,c=e}finally{try{!l&&d.return&&d.return()}finally{if(s)throw c}}}else for(var v=Se.first;v;)t&&!t.includes(v.element)||pt(v,o,a,i),v=v._next;n&&(u(t)&&t.velocity.animations&&t.then?t.then(n._resolver):n._resolver(t))}function gt(t,n,r,i){var s=t[0],c=t[1];if(!s)return console.warn("VelocityJS: Cannot access a non-existant property!"),null;if(void 0===c&&!a(s)){if(Array.isArray(s)){if(1===n.length){var f={},d=!0,v=!1,p=void 0;try{for(var y,g=s[Symbol.iterator]();!(d=(y=g.next()).done);d=!0){var h=y.value;f[h]=He(ze(n[0],h))}}catch(e){v=!0,p=e}finally{try{!d&&g.return&&g.return()}finally{if(v)throw p}}return f}var m=[],w=!0,b=!1,S=void 0;try{for(var x,k=n[Symbol.iterator]();!(w=(x=k.next()).done);w=!0){var O=x.value,_={},E=!0,T=!1,M=void 0;try{for(var A,q=s[Symbol.iterator]();!(E=(A=q.next()).done);E=!0){var V=A.value;_[V]=He(ze(O,V))}}catch(e){T=!0,M=e}finally{try{!E&&q.return&&q.return()}finally{if(T)throw M}}m.push(_)}}catch(e){b=!0,S=e}finally{try{!w&&k.return&&k.return()}finally{if(b)throw S}}return m}if(1===n.length)return He(ze(n[0],s));var N=[],L=!0,J=!1,I=void 0;try{for(var C,j=n[Symbol.iterator]();!(L=(C=j.next()).done);L=!0){var P=C.value;N.push(He(ze(P,s)))}}catch(e){J=!0,I=e}finally{try{!L&&j.return&&j.return()}finally{if(J)throw I}}return N}var F=[];if(a(s)){for(var H in s)if(s.hasOwnProperty(H)){var R=!0,W=!1,B=void 0;try{for(var z,$=n[Symbol.iterator]();!(R=(z=$.next()).done);R=!0){var G=z.value,Q=s[H];l(Q)||o(Q)?qe(G,H,s[H]):(F.push('Cannot set a property "'+H+'" to an unknown type: '+(void 0===Q?"undefined":e(Q))),console.warn('VelocityJS: Cannot set a property "'+H+'" to an unknown type:',Q))}}catch(e){W=!0,B=e}finally{try{!R&&$.return&&$.return()}finally{if(W)throw B}}}}else if(l(c)||o(c)){var D=!0,U=!1,Z=void 0;try{for(var Y,X=n[Symbol.iterator]();!(D=(Y=X.next()).done);D=!0){qe(Y.value,s,String(c))}}catch(e){U=!0,Z=e}finally{try{!D&&X.return&&X.return()}finally{if(U)throw Z}}}else F.push('Cannot set a property "'+s+'" to an unknown type: '+(void 0===c?"undefined":e(c))),console.warn('VelocityJS: Cannot set a property "'+s+'" to an unknown type:',c);r&&(F.length?r._rejecter(F.join(", ")):u(n)&&n.velocity.animations&&n.then?n.then(r._resolver):r._resolver(n))}function ht(e,t,n){Xe(e),void 0!==t&&t!==d(e.queue,e.options.queue,n)||(e._flags|=8,Ee(e))}g(["option",function(e,t,n,r){var i=e[0],o=r.indexOf(".")>=0?r.replace(/^.*\./,""):void 0,a="false"!==o&&$(o,!0),l=void 0,s=e[1];if(!i)return console.warn("VelocityJS: Cannot access a non-existant key!"),null;if(u(t)&&t.velocity.animations)l=t.velocity.animations;else{l=[];for(var c=Se.first;c;c=c._next)t.indexOf(c.element)>=0&&d(c.queue,c.options.queue)===a&&l.push(c);if(t.length>1&&l.length>1){for(var f=1,v=l[0].options;f<l.length;)if(l[f++].options!==v){v=null;break}v&&(l=[l[0]])}}if(void 0===s){var p=[],y=vt[i],g=!0,h=!1,m=void 0;try{for(var w,b=l[Symbol.iterator]();!(g=(w=b.next()).done);g=!0){var S=w.value;void 0===y?p.push(d(S[i],S.options[i])):p.push(0==(S._flags&y))}}catch(e){h=!0,m=e}finally{try{!g&&b.return&&b.return()}finally{if(h)throw m}}return 1===t.length&&1===l.length?p[0]:p}var x=void 0;switch(i){case"cache":s=j(s);break;case"begin":s=P(s);break;case"complete":s=F(s);break;case"delay":s=H(s);break;case"duration":s=R(s);break;case"fpsLimit":s=B(s);break;case"loop":s=z(s);break;case"percentComplete":x=!0,s=parseFloat(s);break;case"repeat":case"repeatAgain":s=G(s);break;default:if("_"!==i[0]){var k=parseFloat(s);s===String(k)&&(s=k);break}case"queue":case"promise":case"promiseRejectEmpty":case"easing":case"started":return void console.warn("VelocityJS: Trying to set a read-only key:",i)}if(void 0===s||s!=s)return console.warn("VelocityJS: Trying to set an invalid value:"+i+"="+s+" ("+e[1]+")"),null;var O=!0,_=!1,E=void 0;try{for(var T,M=l[Symbol.iterator]();!(O=(T=M.next()).done);O=!0){var A=T.value;x?A.timeStart=ct-d(A.duration,A.options.duration,U.duration)*s:A[i]=s}}catch(e){_=!0,E=e}finally{try{!O&&M.return&&M.return()}finally{if(_)throw E}}n&&(u(t)&&t.velocity.animations&&t.then?t.then(n._resolver):n._resolver(t))}],!0),g(["pause",yt],!0),g(["resume",yt],!0),g(["property",gt],!0),g(["reverse",function(e,t,n,r){throw new SyntaxError("VelocityJS: The 'reverse' action is built in and private.")}],!0),g(["stop",function(e,t,n,r){var i=$(e[0],!0),o=U.queue,a=!0===e[void 0===i?0:1];if(u(t)&&t.velocity.animations){var l=!0,s=!1,c=void 0;try{for(var f,d=t.velocity.animations[Symbol.iterator]();!(l=(f=d.next()).done);l=!0)ht(f.value,i,o)}catch(e){s=!0,c=e}finally{try{!l&&d.return&&d.return()}finally{if(s)throw c}}}else{for(;Se.firstNew;)Xe(Se.firstNew);for(var v,p=Se.first;p&&(a||p!==Se.firstNew);p=v||Se.firstNew)v=p._next,t&&!t.includes(p.element)||ht(p,i,o)}n&&(u(t)&&t.velocity.animations&&t.then?t.then(n._resolver):n._resolver(t))}],!0),g(["style",gt],!0),g(["tween",function(e,n,r,i){var u=void 0;if(n){if(1!==n.length)throw new Error("VelocityJS: Cannot tween more than one element!")}else{if(!e.length)return console.info('Velocity(<element>, "tween", percentComplete, property, end | [end, <easing>, <start>], <easing>) => value\nVelocity(<element>, "tween", percentComplete, {property: end | [end, <easing>, <start>], ...}, <easing>) => {property: value, ...}'),null;n=[document.body],u=!0}var s=e[0],c={elements:n,element:n[0],queue:!1,options:{duration:1e3},tweens:null},f={},v=e[1],p=void 0,y=void 0,g=e[2],m=0;if(l(e[1])?_e&&_e[e[1]]?(y=_e[e[1]],v={},g=e[2]):(p=!0,v=t({},e[1],e[2]),g=e[3]):Array.isArray(e[1])&&(p=!0,v={tween:e[1]},g=e[2]),!o(s)||s<0||s>1)throw new Error("VelocityJS: Must tween a percentage from 0 to 1!");if(!a(v))throw new Error("VelocityJS: Cannot tween an invalid property!");if(u)for(var w in v)if(v.hasOwnProperty(w)&&(!Array.isArray(v[w])||v[w].length<2))throw new Error("VelocityJS: When not supplying an element you must force-feed values: "+w);var b=W(d(g,U.easing),h);for(var x in y?Xt(c,y):Qe(c,v),c.tweens){var k=c.tweens[x],O=k.sequence,_=O.pattern,E="",T=0;if(m++,_){for(var M=(k.easing||b)(s,0,1,x),A=0,q=0;q<O.length-1;q++)O[q].percent<M&&(A=q);for(var V=O[A],N=O[A+1]||V,L=(s-V.percent)/(N.percent-V.percent),J=N.easing||S;T<_.length;T++){var I=V[T];if(null==I)E+=_[T];else{var C=N[T];if(I===C)E+=I;else{var j=J(L,I,C,x);E+=!0===_[T]?Math.round(j):j}}}f[x]=E}}if(p&&1===m)for(var P in f)if(f.hasOwnProperty(P))return f[P];return f}],!0);var mt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgrey:11119017,darkgreen:25600,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,grey:8421504,green:32768,greenyellow:11403055,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgrey:13882323,lightgreen:9498256,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};for(var wt in mt)if(mt.hasOwnProperty(wt)){var bt=mt[wt];Pe[wt]=Math.floor(bt/65536)+","+Math.floor(bt/256%256)+","+bt%256}function St(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}function xt(e){return 1-St(1-e)}!function(e,t){b([e,function(e,n,r){return 0===e?n:1===e?r:Math.pow(e,2)*((t+1)*e-t)*(r-n)}])}("easeInBack",1.7),function(e,t){b([e,function(e,n,r){return 0===e?n:1===e?r:(Math.pow(--e,2)*((t+1)*e+t)+1)*(r-n)}])}("easeOutBack",1.7),function(e,t){t*=1.525,b([e,function(e,n,r){return 0===e?n:1===e?r:.5*((e*=2)<1?Math.pow(e,2)*((t+1)*e-t):Math.pow(e-2,2)*((t+1)*(e-2)+t)+2)*(r-n)}])}("easeInOutBack",1.7),b(["easeInBounce",function(e,t,n){return 0===e?t:1===e?n:xt(e)*(n-t)}]),b(["easeOutBounce",function(e,t,n){return 0===e?t:1===e?n:St(e)*(n-t)}]),b(["easeInOutBounce",function(e,t,n){return 0===e?t:1===e?n:(e<.5?.5*xt(2*e):.5*St(2*e-1)+.5)*(n-t)}]);var kt=2*Math.PI;function Ot(e,t){return function(n,r){if(void 0===r)return Re(n,e,t)+"px";qe(n,e,parseFloat(r)-Re(n,e,t)+"px")}}!function(e,t,n){b([e,function(e,r,i){return 0===e?r:1===e?i:-t*Math.pow(2,10*(e-=1))*Math.sin((e-n/kt*Math.asin(1/t))*kt/n)*(i-r)}])}("easeInElastic",1,.3),function(e,t,n){b([e,function(e,r,i){return 0===e?r:1===e?i:(t*Math.pow(2,-10*e)*Math.sin((e-n/kt*Math.asin(1/t))*kt/n)+1)*(i-r)}])}("easeOutElastic",1,.3),function(e,t,n){b([e,function(e,r,i){if(0===e)return r;if(1===e)return i;var o=n/kt*Math.asin(1/t);return((e=2*e-1)<0?t*Math.pow(2,10*e)*Math.sin((e-o)*kt/n)*-.5:t*Math.pow(2,-10*e)*Math.sin((e-o)*kt/n)*.5+1)*(i-r)}])}("easeInOutElastic",1,.3*1.5),b(["at-start",function(e,t,n){return 0===e?t:n}]),b(["during",function(e,t,n){return 0===e||1===e?t:n}]),b(["at-end",function(e,t,n){return 1===e?n:t}]),Te(["Element","innerWidth",Ot("width",!0)]),Te(["Element","innerHeight",Ot("height",!0)]),Te(["Element","outerWidth",Ot("width",!1)]),Te(["Element","outerHeight",Ot("height",!1)]);var _t=/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|let|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i,Et=/^(li)$/i,Tt=/^(tr)$/i,Mt=/^(table)$/i,At=/^(tbody)$/i;function qt(e,t){return function(n,r){if(null==r)return ze(n,"client"+e,null,!0),ze(n,"scroll"+e,null,!0),n["scroll"+t]+"px";var i=parseFloat(r);switch(r.replace(String(i),"")){case"":case"px":n["scroll"+t]=i;break;case"%":var o=parseFloat(ze(n,"client"+e)),a=parseFloat(ze(n,"scroll"+e));n["scroll"+t]=Math.max(0,a-o)*i/100}}}Te(["Element","display",function(e,t){var n=e.style;if(void 0===t)return Be(e,"display");if("auto"===t){var r=e&&e.nodeName,i=me(e);t=_t.test(r)?"inline":Et.test(r)?"list-item":Tt.test(r)?"table-row":Mt.test(r)?"table":At.test(r)?"table-row-group":"block",i.cache.display=t}n.display=t}]),Te(["HTMLElement","scroll",qt("Height","Top"),!1]),Te(["HTMLElement","scrollTop",qt("Height","Top"),!1]),Te(["HTMLElement","scrollLeft",qt("Width","Left"),!1]),Te(["HTMLElement","scrollWidth",function(e,t){if(null==t)return e.scrollWidth+"px"}]),Te(["HTMLElement","clientWidth",function(e,t){if(null==t)return e.clientWidth+"px"}]),Te(["HTMLElement","scrollHeight",function(e,t){if(null==t)return e.scrollHeight+"px"}]),Te(["HTMLElement","clientHeight",function(e,t){if(null==t)return e.clientHeight+"px"}]);var Vt=/^(b(lockSize|o(rder(Bottom(LeftRadius|RightRadius|Width)|Image(Outset|Width)|LeftWidth|R(adius|ightWidth)|Spacing|Top(LeftRadius|RightRadius|Width)|Width)|ttom))|column(Gap|RuleWidth|Width)|f(lexBasis|ontSize)|grid(ColumnGap|Gap|RowGap)|height|inlineSize|le(ft|tterSpacing)|m(a(rgin(Bottom|Left|Right|Top)|x(BlockSize|Height|InlineSize|Width))|in(BlockSize|Height|InlineSize|Width))|o(bjectPosition|utline(Offset|Width))|p(adding(Bottom|Left|Right|Top)|erspective)|right|s(hapeMargin|troke(Dashoffset|Width))|t(extIndent|op|ransformOrigin)|w(idth|ordSpacing))$/;function Nt(e,t){return function(n,r){if(void 0===r)return Be(n,e)||Be(n,t);n.style[e]=n.style[t]=r}}function Lt(e){return function(t,n){if(void 0===n)return Be(t,e);t.style[e]=n}}var Jt=/^(webkit|moz|ms|o)[A-Z]/,It=Se.prefixElement;for(var Ct in It.style)if(Jt.test(Ct)){var jt=Ct.replace(/^[a-z]+([A-Z])/,function(e,t){return t.toLowerCase()}),Pt=Vt.test(jt)?"px":void 0;Te(["Element",jt,Nt(Ct,jt),Pt])}else if(!Me(["Element",Ct])){var Ft=Vt.test(Ct)?"px":void 0;Te(["Element",Ct,Lt(Ct),Ft])}function Ht(e){return function(t,n){if(void 0===n)return t.getAttribute(e);t.setAttribute(e,n)}}var Rt=document.createElement("div"),Wt=/^SVG(.*)Element$/,Bt=/Element$/;function zt(e){return function(t,n){if(void 0===n)try{return t.getBBox()[e]+"px"}catch(e){return"0px"}t.setAttribute(e,n)}}Object.getOwnPropertyNames(window).forEach(function(e){var t=Wt.exec(e);if(t&&"SVG"!==t[1])try{var n=t[1]?document.createElementNS("http://www.w3.org/2000/svg",(t[1]||"svg").toLowerCase()):document.createElement("svg");for(var i in n){var o=n[i];!l(i)||"o"===i[0]&&"n"===i[1]||i===i.toUpperCase()||Bt.test(i)||i in Rt||r(o)||Te([e,i,Ht(i)])}}catch(t){console.error("VelocityJS: Error when trying to identify SVG attributes on "+e+".",t)}}),Te(["SVGElement","width",zt("width")]),Te(["SVGElement","height",zt("height")]),Te(["Element","tween",function(e,t){if(void 0===t)return""}]);var $t,Gt=nn;if(function(e){e.Actions=y,e.Easings=w,e.Sequences=_e,e.State=Se,e.defaults=U,e.patch=rn,e.debug=!1,e.mock=!1,e.version="2.0.4",e.Velocity=nn}($t||($t={})),function(){if(document.documentMode)return document.documentMode;for(var e=7;e>4;e--){var t=document.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}}()<=8)throw new Error("VelocityJS cannot run on Internet Explorer 8 or earlier");if(window){var Qt=window.jQuery,Dt=window.Zepto;rn(window,!0),rn(Element&&Element.prototype),rn(NodeList&&NodeList.prototype),rn(HTMLCollection&&HTMLCollection.prototype),rn(Qt,!0),rn(Qt&&Qt.fn),rn(Dt,!0),rn(Dt&&Dt.fn)}var Ut=function(t){if($t.hasOwnProperty(t))switch(void 0===t?"undefined":e(t)){case"number":case"boolean":f(Gt,t,{get:function(){return $t[t]},set:function(e){$t[t]=e}},!0);break;default:f(Gt,t,$t[t],!0)}};for(var Zt in $t)Ut(Zt);var Yt=/(\d*\.\d+|\d+\.?|from|to)/g;function Xt(e,t){var n=e.tweens=Object.create(null),r=e.element;for(var i in t.tweens)if(t.tweens.hasOwnProperty(i)){var o=Ae(r,i);if(!o&&"tween"!==i){Gt.debug&&console.log("Skipping ["+i+"] due to a lack of browser support.");continue}n[i]={fn:o,sequence:t.tweens[i]}}}g(["registerSequence",function e(t){if(a(t[0]))for(var n in t[0])t[0].hasOwnProperty(n)&&e([n,t[0][n]]);else if(l(t[0])){var r=t[0],i=t[1];if(l(r))if(a(i)){_e[r]&&console.warn("VelocityJS: Replacing named sequence:",r);var u={},s=new Array(100),c=[],f=_e[r]={},d=R(i.duration);for(var v in f.tweens={},o(d)&&(f.duration=d),i)if(i.hasOwnProperty(v)){var p=String(v).match(Yt);if(p){var y=!0,g=!1,m=void 0;try{for(var w,b=p[Symbol.iterator]();!(y=(w=b.next()).done);y=!0){var S=w.value,x="from"===S?0:"to"===S?100:parseFloat(S);if(x<0||x>100)console.warn("VelocityJS: Trying to use an invalid value as a percentage (0 <= n <= 100):",r,x);else if(isNaN(x))console.warn("VelocityJS: Trying to use an invalid number as a percentage:",r,v,S);else for(var k in u[String(x)]||(u[String(x)]=[]),u[String(x)].push(v),i[v])c.includes(k)||c.push(k)}}catch(e){g=!0,m=e}finally{try{!y&&b.return&&b.return()}finally{if(g)throw m}}}}var O=Object.keys(u).sort(function(e,t){var n=parseFloat(e),r=parseFloat(t);return n>r?1:n<r?-1:0});O.forEach(function(e){s.push.apply(u[e])});var _=!0,E=!1,T=void 0;try{for(var M,A=c[Symbol.iterator]();!(_=(M=A.next()).done);_=!0){var q=M.value,V=[],N=Ne(q),L=!0,J=!1,I=void 0;try{for(var C,j=O[Symbol.iterator]();!(L=(C=j.next()).done);L=!0){var P=C.value,F=!0,H=!1,B=void 0;try{for(var z,$=u[P][Symbol.iterator]();!(F=(z=$.next()).done);F=!0){var G=i[z.value];G[N]&&V.push(l(G[N])?G[N]:G[N][0])}}catch(e){H=!0,B=e}finally{try{!F&&$.return&&$.return()}finally{if(H)throw B}}}}catch(e){J=!0,I=e}finally{try{!L&&j.return&&j.return()}finally{if(J)throw I}}if(V.length){var Q=Ze(V,N),D=0;if(Q){var U=!0,Z=!1,Y=void 0;try{for(var X,K=O[Symbol.iterator]();!(U=(X=K.next()).done);U=!0){var ee=X.value,te=!0,ne=!1,re=void 0;try{for(var ie,oe=u[ee][Symbol.iterator]();!(te=(ie=oe.next()).done);te=!0){var ae=i[ie.value][N];ae&&(Array.isArray(ae)&&ae.length>1&&(l(ae[1])||Array.isArray(ae[1]))&&(Q[D].easing=W(ae[1],f.duration||h)),Q[D++].percent=parseFloat(ee)/100)}}catch(e){ne=!0,re=e}finally{try{!te&&oe.return&&oe.return()}finally{if(ne)throw re}}}}catch(e){Z=!0,Y=e}finally{try{!U&&K.return&&K.return()}finally{if(Z)throw Y}}f.tweens[N]=Q}}}}catch(e){E=!0,T=e}finally{try{!_&&A.return&&A.return()}finally{if(E)throw T}}}else console.warn("VelocityJS: Trying to set 'registerSequence' sequence to an invalid value:",r,i);else console.warn("VelocityJS: Trying to set 'registerSequence' name to an invalid value:",r)}}],!0);var Kt=void 0;try{Kt=Promise}catch(e){}var en=", if that is deliberate then pass `promiseRejectEmpty:false` as an option";function tn(e,t){f(t,"promise",e),f(t,"then",e.then.bind(e)),f(t,"catch",e.catch.bind(e)),e.finally&&f(t,"finally",e.finally.bind(e))}function nn(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var v=U,p=arguments,g=p[0],h=a(g)&&(g.p||a(g.properties)&&!g.properties.names||l(g.properties)),m=0,w=void 0,b=void 0,S=void 0,x=void 0,k=void 0,O=void 0,_=void 0;i(this)?w=[this]:s(this)?(w=c(this),u(this)&&(x=this.velocity.animations)):h?(w=c(g.elements||g.e),m++):i(g)?(w=c([g]),m++):s(g)&&(w=c(g),m++),w&&(f(w,"velocity",nn.bind(w)),x&&f(w.velocity,"animations",x));var E="reverse"===(b=h?d(g.properties,g.p):p[m++]),T=!E&&l(b),M=T&&_e[b],A=h?d(g.options,g.o):p[m];if(a(A)&&(S=A),Kt&&d(S&&S.promise,v.promise)&&(k=new Kt(function(e,t){_=t,O=function(t){u(t)&&t.promise?(delete t.then,delete t.catch,delete t.finally,e(t),tn(t.promise,t)):e(t)}}),w&&tn(k,w)),k){var q=S&&S.promiseRejectEmpty,V=d(q,v.promiseRejectEmpty);w||T?b||(V?_("Velocity: No properties supplied"+(n(q)?"":en)+". Aborting."):O()):V?_("Velocity: No elements supplied"+(n(q)?"":en)+". Aborting."):O()}if(!w&&!T||!b)return k;if(T){for(var N=[],L=k&&{_promise:k,_resolver:O,_rejecter:_};m<p.length;)N.push(p[m++]);var J=b.replace(/\..*$/,""),I=y[J];if(I){var C=I(N,w,L,b);return void 0!==C?C:w||k}if(!M)return void console.error("VelocityJS: First argument ("+b+") was not a property map, a known action, or a registered redirect. Aborting.")}var j=void 0;if(a(b)||E||M){var B={},Z=v.sync;if(k&&(f(B,"_promise",k),f(B,"_rejecter",_),f(B,"_resolver",O)),f(B,"_ready",0),f(B,"_started",0),f(B,"_completed",0),f(B,"_total",0),a(S)){var Y=R(S.duration);j=void 0!==Y,B.duration=d(Y,v.duration),B.delay=d(H(S.delay),v.delay),B.easing=W(d(S.easing,v.easing),B.duration)||W(v.easing,B.duration),B.loop=d(z(S.loop),v.loop),B.repeat=B.repeatAgain=d(G(S.repeat),v.repeat),null!=S.speed&&(B.speed=d(Q(S.speed),1)),n(S.promise)&&(B.promise=S.promise),B.queue=d($(S.queue),v.queue),S.mobileHA&&!Se.isGingerbread&&(B.mobileHA=!0),E||(null!=S.display&&(b.display=S.display,console.error('Deprecated "options.display" used, this is now a property:',S.display)),null!=S.visibility&&(b.visibility=S.visibility,console.error('Deprecated "options.visibility" used, this is now a property:',S.visibility)));var X=P(S.begin),K=F(S.complete),ee=function(e){if(r(e))return e;null!=e&&console.warn("VelocityJS: Trying to set 'progress' to an invalid value:",e)}(S.progress),te=D(S.sync);null!=X&&(B.begin=X),null!=K&&(B.complete=K),null!=ee&&(B.progress=ee),null!=te&&(Z=te)}else if(!h){var ne=0;if(B.duration=R(p[m],!0),void 0===B.duration?B.duration=v.duration:(j=!0,ne++),!r(p[m+ne])){var re=W(p[m+ne],d(B&&R(B.duration),v.duration),!0);void 0!==re&&(ne++,B.easing=re)}var ie=F(p[m+ne],!0);void 0!==ie&&(B.complete=ie),B.loop=v.loop,B.repeat=B.repeatAgain=v.repeat}if(E&&!1===B.queue)throw new Error("VelocityJS: Cannot reverse a queue:false animation.");!j&&M&&M.duration&&(B.duration=M.duration);var oe={options:B,elements:w,_prev:void 0,_next:void 0,_flags:Z?32:0,percentComplete:0,ellapsedTime:0,timeStart:0};x=[];var ae=!0,le=!1,ue=void 0;try{for(var se,ce=w[Symbol.iterator]();!(ae=(se=ce.next()).done);ae=!0){var fe=se.value,de=0;if(i(fe)){if(E){var ve=me(fe).lastAnimationList[B.queue];if(!(b=ve&&ve.tweens)){console.error("VelocityJS: Attempting to reverse an animation on an element with no previous animation:",fe);continue}de|=64&~(64&ve._flags)}var pe=Object.assign({},oe,{element:fe,_flags:oe._flags|de});B._total++,x.push(pe),M?Xt(pe,M):E?pe.tweens=b:(pe.tweens=Object.create(null),Qe(pe,b)),ke(fe,pe,B.queue)}}}catch(e){le=!0,ue=e}finally{try{!ae&&ce.return&&ce.return()}finally{if(le)throw ue}}!1===Se.isTicking&&ft(!1),x&&f(w.velocity,"animations",x)}return w||k}function rn(e,t){try{f(e,(t?"V":"v")+"elocity",nn)}catch(e){console.warn("VelocityJS: Error when trying to add prototype.",e)}}var on,an=nn;if(function(e){e.Actions=y,e.Easings=w,e.Sequences=_e,e.State=Se,e.defaults=U,e.patch=rn,e.debug=!1,e.mock=!1,e.version="2.0.4",e.Velocity=nn}(on||(on={})),function(){if(document.documentMode)return document.documentMode;for(var e=7;e>4;e--){var t=document.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}}()<=8)throw new Error("VelocityJS cannot run on Internet Explorer 8 or earlier");if(window){var ln=window.jQuery,un=window.Zepto;rn(window,!0),rn(Element&&Element.prototype),rn(NodeList&&NodeList.prototype),rn(HTMLCollection&&HTMLCollection.prototype),rn(ln,!0),rn(ln&&ln.fn),rn(un,!0),rn(un&&un.fn)}var sn=function(t){if(on.hasOwnProperty(t))switch(void 0===t?"undefined":e(t)){case"number":case"boolean":f(an,t,{get:function(){return on[t]},set:function(e){on[t]=e}},!0);break;default:f(an,t,on[t],!0)}};for(var cn in on)sn(cn);return an});
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();

/*********************************************************************************************/
//以下main
/*********************************************************************************************/
var 
wW,
wH,
iwW,
iwH,
visitCount;
menuFlg = false;

/*********************************************************************************************/
//SETTING
/*********************************************************************************************/
function baseSetting(){
	wW = $(window).width();
	iwW = $(window).innerWidth();
	wH = $(window).height();
	iwH = $(window).innerHeight();
	
	$('.base_h').css({'height':wH+'px'});
	$('.page-background').css({'height':wH+'px'});
	
	if($('body').hasClass('Android')){
			$('body').addClass('wf-sawarabimincho');		
		}
}
/*********************************************************************************************/
//cookie
/*********************************************************************************************/
//実行処理
$(function() {
  
  var loadingTxt = $("#loader_text");
  //Cookieの読み込み
  cookieArr = $.cookie();
  
  //訪問回数の処理
  if (cookieArr['visitCount'] == null) {  //初訪問の時
    visitCount = 1;
    $.cookie('visitCount', visitCount);
  } else {  //2回目以降の訪問の時
    visitCount = $.cookie('visitCount');
    visitCount ++;
    $.cookie('visitCount', visitCount);
  }
  if (visitCount == 1) {
  loadingTxt.text("朝食にはバナナ");
  } else if (visitCount == 2) {
  loadingTxt.text("今日バナナ食べた？");
  } else if (visitCount == 3) {
  loadingTxt.text("バナナのポテンシャル");
  } else if (visitCount == 4) {
  loadingTxt.text("8月7日はバナナの日");    
  } else if (visitCount == 5) {
  loadingTxt.text("バナナの中のバナナ");
  } else if (visitCount == 6) {
  loadingTxt.text("バナナを食べるゴリラ");
  } else if (visitCount >= 7) {
   $.removeCookie('visitCount'); 
  } 
});
/*********************************************************************************************/
//loading
/*********************************************************************************************/
function loading(){

	  $('#loading_line_inner').delay(250).velocity({'width':'0'},625,function(){
		$('#loading_line_box').addClass('non');
		$('#loading_line_inner').css({'width':''});
		$('.loading_line_yellow').css({'width':''});
		$('.loading_line_white').css({'width':''});
	});			
}

//OPENING
$(function() {
	$('#loader_main').velocity({ opacity: 1 },{ duration: 500, delay: 500, easing: 'linear'});
  var loadCount = 0,
	imgCount = $("img").size(),
	
	targetEle = $('.loading_bar span'),
	nowPosition = 0;
    $("img").each(function(){
		var src = $(this).attr('src');
		$('<img>').attr('src',src).load(function(){
			loadCount++;
		});
	});
    var loadTimer = setInterval(function(){
        if(nowPosition > 99.9){
            clearInterval(loadTimer);
        	targetEle.stop().animate({'height':'100%'},500,function(){
    			$('#loading_line_box').removeClass('non');
    			$('.loading_line_yellow').delay(750).animate({'width':'100%'},625);
				  $('.loading_line_white').delay(875).animate({'width':'100%'},625,function(){
					     $('#loader_box').addClass('non');
					     loading();
    			     });
        	});
        }else{
			var targetPosition = (loadCount / imgCount) * 100;
			nowPosition += (targetPosition - nowPosition) *0.02; 
      targetEle.stop().animate({'height':nowPosition + '%'},50);   	
		}
	},5);
});

/*********************************************************************************************/
//page
/*********************************************************************************************/
$(window).on('load', function() {
    $('.sorryTxt, .pageTxt, .page-inner_link').addClass('shown');
    
});
/*********************************************************************************************/
//link移動
/*********************************************************************************************/


function linkMove(){
   $('a[href^="#"]').click(function() {// # クリック処理
      var speed = 350; //スクロール速度ミリ秒
      var href= $(this).attr("href"); // アンカーの値取
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;// 移動先を数値で取得
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
}

/*********************************************************************************************/
//MENU
/*********************************************************************************************/
function menuMove(){
	var h_button = $('#n_btn');
	var h_menu = $('#menu');
	if(menuFlg == false){
		menuFlg = true;
		if( h_button.hasClass('n_btn_fix')){
			h_button.addClass('n_btn_pause');		
		}
		h_button.addClass('n_btn_on');
		h_menu.removeClass('non')
		      .removeClass('menu_close')
		      .addClass('menu_open');		
	}else{
		menuFlg = false;
		h_button.removeClass('n_btn_on');
		h_menu.removeClass('menu_open')		
		      .addClass('menu_close');	
		if( h_button.hasClass('n_btn_fix')){
			h_button.delay(250).queue(function() {
				$(this).removeClass('n_btn_pause').dequeue();
			});
		}else if($(window).scrollTop() > wH){	
			h_button.delay(250).queue(function() {
				$(this).removeClass('n_btn_nofix');
				$(this).addClass('n_btn_fix').dequeue();
			});			
		}
		h_menu.delay(500).queue(function() {
			$(this).addClass('non').dequeue();
		});
	}
}

/*********************************************************************************************/
//CloseMENU
/*********************************************************************************************/
$(document).on('click', function(e) {
    // ２．クリックされた場所の判定
    if(!$(e.target).closest('#menu').length && !$(e.target).closest('#n_header').length){
         var h_button = $('#n_btn');
	       var h_menu = $('#menu');
        if(menuFlg == true){
           menuFlg = false;
           h_button.removeClass('n_btn_on');
		       h_menu.removeClass('menu_open')		
		      .addClass('menu_close');
		      if( h_button.hasClass('n_btn_fix')){
			       h_button.delay(250).queue(function() {
				     $(this).removeClass('n_btn_pause').dequeue();
			     });
		      }else if($(window).scrollTop() > wH){	
			     h_button.delay(250).queue(function() {
				  $(this).removeClass('n_btn_nofix');
				  $(this).addClass('n_btn_fix').dequeue();
			     });			
		      }
		      h_menu.delay(500).queue(function() {
			    $(this).addClass('non').dequeue();
		      });
		      
        }  
    }
});

/*********************************************************************************************/
//SCROLL
/*********************************************************************************************/
function scrollMenu(){
	var h_button = $('#n_btn');  
	if($(this).scrollTop() > wH){
		if( h_button.hasClass('n_btn_fix') == false && h_button.hasClass('n_btn_on') == false){
			  h_button.removeClass('n_btn_pause')
			          .removeClass('n_btn_nofix')
			          .addClass('n_btn_fix');
		}
	}else{
		if( h_button.hasClass('n_btn_fix')){
			  h_button.removeClass('n_btn_fix')
			          .addClass('n_btn_nofix');
		}
	}
}


/*********************************************************************************************/
// スライダーの定義
/*********************************************************************************************/
function topFunc(){
  var timer;
  var _slide = $('#slider');
  var slideLength = _slide.find('li').length;
  var currentnum = 0;
  var beforenum = 0;
  var clickFlag = false;
  
  var slide = {
    init : function(){
      _slide.find('li').each(function(){
        var imgSrc = $(this).find('img').attr('src');
                     $(this).css({'backgroundImage':'url('+ imgSrc +')'});//背景に設定しないときは消す
      });
      
      _slide.find('li').eq(0).addClass('active');
      slide.auto();
    },
    
    play : function(){
    
      _slide.find('li').removeClass('before');
      _slide.find('li').eq(beforenum).addClass('before');
      setTimeout(function(){
        _slide.find('li').eq(beforenum).removeClass('active');
        clickFlag = false;
        beforenum = currentnum;
      }, 4000);//2000
      
      
      
      _slide.find('li').eq(currentnum).addClass('active').removeClass('before');
      
    },
    
    auto : function(){
      timer = setInterval(function(){
        currentnum++;
        if(currentnum > slideLength-1) currentnum = 0;
        slide.play();
        
      }, 6000);//4000
    }
  };
  
  // init
  slide.init();

}
/*********************************************************************************************/
// 専門店の紹介
/*********************************************************************************************/
//専門店の数によってボタン表示・非表示
//resizeされたときに１回だけ処理させる
var widthFlag = '';
$(function() {
    // 画面サイズのチェック
    $(window).on('load resize', function() {
        widthCheck();
    });
});
 
// 画面サイズのチェック
function widthCheck() {
    // 画面幅取得
     var winWidth = $(window).width();
    // 画面幅768以下でフラグがspでない時
    if(winWidth <= 768 && widthFlag != 'sp') {
        // フラグをSPに変更
        widthFlag = 'sp';
        
       $("#shop_main").each(function () {//.shop_boxの数をカウント
      var num = $(this).find('.shop_box').length;
       if(num > 2){//.shop_boxが2件よりも多かったら
           $('.shop_box').eq(1).show(); // 追加。
          $('.shop_box:nth-child(n + 3)').hide();
          $(this).find('#shop_button').css('display','block');
        }
        else {
          $(this).find('#shop_button').css('display','none');   
        }
        
      });
 
 
    // 画面幅768よりおおきく、フラグがpcでない時
    } else if(winWidth > 768 && widthFlag != 'pc') {
        // フラグをPCに変更
        widthFlag = 'pc';
        
        $("#shop_main").each(function () {//.shop_boxの数をカウント
       
       var num = $(this).find('.shop_box').length;
       if(num > 3){//.shop_boxが3件よりも多かったら
           $('.shop_box').eq(2).show(); // 追加。
          $('.shop_box:nth-child(n + 4)').hide(); 
          $(this).find('#shop_button').css('display','block');
        }
        else {
          $(this).find('#shop_button').css('display','none');
          
        }
       
      });
        
        
    }
}


function Shoplistdoor(){
    var clickEventType=((window.ontouchstart!==null)?'click':'touchstart');
    $('#shop_button').on(clickEventType,'span',function(){
        var shopListpc = $('.shop_box:nth-child(n + 4)');
        var shopListsp = $('.shop_box:nth-child(n + 3)');
      if (iwW > 768) {  
        if (shopListpc .is(':hidden')) {
            shopListpc .slideDown();
            shopListpc .toggleClass("active");
            $(this).text('close');
        } else {
            shopListpc .slideUp();
            shopListpc .removeClass('active');
            $(this).text('read more');
        }
      }
      else {
        if (shopListsp .is(':hidden')) {
            shopListsp .slideDown();
            shopListsp .toggleClass("active");
            $(this).text('close');
        } else {
            shopListsp .slideUp();
            shopListsp .removeClass('active');
            $(this).text('read more');
        }
        
        
      }  
      
    });
}

/*********************************************************************************************/
// animationの定義
/*********************************************************************************************/
function animationJS01(){

    var $parent = $('.js-elem');

    init();

    function init(){
      countElem();
    }
    function waypoint($target){
      $target.waypoint(function(){
        $target.addClass('shown');
      }, {
        offset: '90%'
      });
      
    }
     
    function countElem(){
      $parent.each(function(){
        var $this = $(this);
        var $target = $this.find('.fade-in-up');
        var len = $target.length;

        for (var i = 0; i <= len; i++) {
          waypoint( $target.eq(i) );
        }
      });
    }
}

/*********************************************************************************************/
// animationの定義
/*********************************************************************************************/
function animationJS02(){
	  
	  var $intro_title01 = $('#introJS01');
	  var $intro_txt01 = $('#introJS02');
	  var $intro_textBox = $('#introJS03');
	  var $intro_img = $('#introJS04');
	  var $intro_title03 = $('#introJS05');
	  var $intro_txt03 = $('#introJS06');
	  var $nutrition_imag = $('#introJS07');
	  var $nutrition_deco2 = $('#introJS08');
	  var $insta_title = $('#introJS09');
	  var $insta_parts = $('.fade-in-left01, .fade-in-left02, .fade-in-left03, .fade-in-right01, .fade-in-right02, .fade-in-right03');
   
	  $intro_title01.waypoint(function() {
		$intro_title01.addClass("shown");
    	$intro_txt01.delay(200).queue(function() {
		   $(this).addClass("shown").dequeue();
         });
    }
		,{offset:'80%'}
	);
	  
	$intro_textBox.waypoint(function() {
		$intro_textBox.addClass("shown");
    }
		,{offset:'80%'}
	);
	  
	  $intro_img.waypoint(function() {
		$("#length_txt").addClass("shown");
    }
		,{offset:'90%'}
	);
	  $intro_title03.waypoint(function() {
		$intro_title03.addClass("shown");
        $intro_txt03.delay(200).queue(function() {
		   $(this).addClass("shown").dequeue();
         });
    }
		,{offset:'80%'}
	);
	
	  $nutrition_imag.waypoint(function() {
		$nutrition_imag.addClass("zoomIn");
    	
    }
		,{offset:'80%'}
	);
	  $nutrition_deco2.waypoint(function() {
		$nutrition_deco2.addClass("boundleft");
    	
    }
		,{offset:'90%'}
	);
	
	if($('body').hasClass('js_isPc')){
					
	  $insta_title.waypoint(function() {
		$insta_parts.addClass("shown");
      }
		,{offset:'100%'}
	);
	} else if ($('body').hasClass('js_isMobile')){
	    $insta_title.waypoint(function() {
		$insta_parts.addClass("shown");
      }
		,{offset:'80%'}
	);
	}
}

/*********************************************************************************************/
// functionを装備
/*********************************************************************************************/
$(window).on('load resize',baseSetting);
$(window).on('load',linkMove);
$(window).on('load',animationJS01);
$(window).on('load',animationJS02);
$(window).on('resize scroll',scrollMenu);
$(window).on('load',topFunc);
$(document).on('click','#n_btn',menuMove);
$(window).on('load',Shoplistdoor);