(this.webpackJsonpjbook=this.webpackJsonpjbook||[]).push([[75],{244:function(e,n,t){(function(n){var t=function(e){var n=/\blang(?:uage)?-([\w-]+)\b/i,t=0,r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(n){return n instanceof a?new a(n.type,e(n.content),n.alias):Array.isArray(n)?n.map(e):n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var a,i;switch(t=t||{},r.util.type(n)){case"Object":if(i=r.util.objId(n),t[i])return t[i];for(var o in a={},t[i]=a,n)n.hasOwnProperty(o)&&(a[o]=e(n[o],t));return a;case"Array":return i=r.util.objId(n),t[i]?t[i]:(a=[],t[i]=a,n.forEach((function(n,r){a[r]=e(n,t)})),a);default:return n}},getLanguage:function(e){for(;e&&!n.test(e.className);)e=e.parentElement;return e?(e.className.match(n)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(u){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(u.stack)||[])[1];if(e){var n=document.getElementsByTagName("script");for(var t in n)if(n[t].src==e)return n[t]}return null}},isActive:function(e,n,t){for(var r="no-"+n;e;){var a=e.classList;if(a.contains(n))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!t}},languages:{extend:function(e,n){var t=r.util.clone(r.languages[e]);for(var a in n)t[a]=n[a];return t},insertBefore:function(e,n,t,a){var i=(a=a||r.languages)[e],o={};for(var l in i)if(i.hasOwnProperty(l)){if(l==n)for(var s in t)t.hasOwnProperty(s)&&(o[s]=t[s]);t.hasOwnProperty(l)||(o[l]=i[l])}var u=a[e];return a[e]=o,r.languages.DFS(r.languages,(function(n,t){t===u&&n!=e&&(this[n]=o)})),o},DFS:function e(n,t,a,i){i=i||{};var o=r.util.objId;for(var l in n)if(n.hasOwnProperty(l)){t.call(n,l,n[l],a||l);var s=n[l],u=r.util.type(s);"Object"!==u||i[o(s)]?"Array"!==u||i[o(s)]||(i[o(s)]=!0,e(s,t,l,i)):(i[o(s)]=!0,e(s,t,null,i))}}},plugins:{},highlightAll:function(e,n){r.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var a={callback:t,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),r.hooks.run("before-all-elements-highlight",a);for(var i,o=0;i=a.elements[o++];)r.highlightElement(i,!0===n,a.callback)},highlightElement:function(t,a,i){var o=r.util.getLanguage(t),l=r.languages[o];t.className=t.className.replace(n,"").replace(/\s+/g," ")+" language-"+o;var s=t.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&(s.className=s.className.replace(n,"").replace(/\s+/g," ")+" language-"+o);var u={element:t,language:o,grammar:l,code:t.textContent};function c(e){u.highlightedCode=e,r.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,r.hooks.run("after-highlight",u),r.hooks.run("complete",u),i&&i.call(u.element)}if(r.hooks.run("before-sanity-check",u),!u.code)return r.hooks.run("complete",u),void(i&&i.call(u.element));if(r.hooks.run("before-highlight",u),u.grammar)if(a&&e.Worker){var g=new Worker(r.filename);g.onmessage=function(e){c(e.data)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(r.highlight(u.code,u.grammar,u.language));else c(r.util.encode(u.code))},highlight:function(e,n,t){var i={code:e,grammar:n,language:t};return r.hooks.run("before-tokenize",i),i.tokens=r.tokenize(i.code,i.grammar),r.hooks.run("after-tokenize",i),a.stringify(r.util.encode(i.tokens),i.language)},tokenize:function(e,n){var t=n.rest;if(t){for(var u in t)n[u]=t[u];delete n.rest}var c=new o;return l(c,c.head,e),function e(n,t,o,u,c,g){for(var f in o)if(o.hasOwnProperty(f)&&o[f]){var h=o[f];h=Array.isArray(h)?h:[h];for(var d=0;d<h.length;++d){if(g&&g.cause==f+","+d)return;var p=h[d],v=p.inside,m=!!p.lookbehind,y=!!p.greedy,k=p.alias;if(y&&!p.pattern.global){var b=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,b+"g")}for(var w=p.pattern||p,x=u.next,A=c;x!==t.tail&&!(g&&A>=g.reach);A+=x.value.length,x=x.next){var S=x.value;if(t.length>n.length)return;if(!(S instanceof a)){var E,O=1;if(y){if(!(E=i(w,A,n,m)))break;var P=E.index,j=E.index+E[0].length,L=A;for(L+=x.value.length;L<=P;)L+=(x=x.next).value.length;if(A=L-=x.value.length,x.value instanceof a)continue;for(var N=x;N!==t.tail&&(L<j||"string"==typeof N.value);N=N.next)O++,L+=N.value.length;O--,S=n.slice(A,L),E.index-=A}else if(!(E=i(w,0,S,m)))continue;P=E.index;var C=E[0],M=S.slice(0,P),W=S.slice(P+C.length),_=A+S.length;g&&_>g.reach&&(g.reach=_);var z=x.prev;M&&(z=l(t,z,M),A+=M.length),s(t,z,O),x=l(t,z,new a(f,v?r.tokenize(C,v):C,k,C)),W&&l(t,x,W),1<O&&e(n,t,o,x.prev,A,{cause:f+","+d,reach:_})}}}}}(e,c,n,c.head,0),function(e){for(var n=[],t=e.head.next;t!==e.tail;)n.push(t.value),t=t.next;return n}(c)},hooks:{all:{},add:function(e,n){var t=r.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=r.hooks.all[e];if(t&&t.length)for(var a,i=0;a=t[i++];)a(n)}},Token:a};function a(e,n,t,r){this.type=e,this.content=n,this.alias=t,this.length=0|(r||"").length}function i(e,n,t,r){e.lastIndex=n;var a=e.exec(t);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function o(){var e={value:null,prev:null,next:null},n={value:null,prev:e,next:null};e.next=n,this.head=e,this.tail=n,this.length=0}function l(e,n,t){var r=n.next,a={value:t,prev:n,next:r};return n.next=a,r.prev=a,e.length++,a}function s(e,n,t){for(var r=n.next,a=0;a<t&&r!==e.tail;a++)r=r.next;(n.next=r).prev=n,e.length-=a}if(e.Prism=r,a.stringify=function e(n,t){if("string"==typeof n)return n;if(Array.isArray(n)){var a="";return n.forEach((function(n){a+=e(n,t)})),a}var i={type:n.type,content:e(n.content,t),tag:"span",classes:["token",n.type],attributes:{},language:t},o=n.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),r.hooks.run("wrap",i);var l="";for(var s in i.attributes)l+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+l+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener&&(r.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),a=t.language,i=t.code,o=t.immediateClose;e.postMessage(r.highlight(i,r.languages[a],a)),o&&e.close()}),!1)),r;var u=r.util.currentScript();function c(){r.manual||r.highlightAll()}if(u&&(r.filename=u.src,u.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var g=document.readyState;"loading"===g||"interactive"===g&&u&&u.defer?document.addEventListener("DOMContentLoaded",c):window.requestAnimationFrame?window.requestAnimationFrame(c):window.setTimeout(c,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),"undefined"!=typeof n&&(n.Prism=t)}).call(this,t(22))}}]);
//# sourceMappingURL=75.063b79db.chunk.js.map