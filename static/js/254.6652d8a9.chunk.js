(this.webpackJsonpjbook=this.webpackJsonpjbook||[]).push([[254],{423:function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"==typeof r&&!r(e))return e;for(var o,i=c.length;-1!==t.code.indexOf(o=n(a,i));)++i;return c[i]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function c(i){for(var u=0;u<i.length&&!(o>=r.length);u++){var s=i[u];if("string"==typeof s||s.content&&"string"==typeof s.content){var p=r[o],g=t.tokenStack[p],l="string"==typeof s?s:s.content,f=n(a,p),k=l.indexOf(f);if(-1<k){++o;var h=l.substring(0,k),m=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),b=l.substring(k+f.length),d=[];h&&d.push.apply(d,c([h])),d.push(m),b&&d.push.apply(d,c([b])),"string"==typeof s?i.splice.apply(i,[u,1].concat(d)):s.content=d}}else s.content&&c(s.content)}return i}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=254.6652d8a9.chunk.js.map