(this.webpackJsonpjbook=this.webpackJsonpjbook||[]).push([[353],{522:function(e,a){Prism.languages.racket=Prism.languages.extend("scheme",{"lambda-parameter":{pattern:/(\(lambda\s+\()[^()'\s]+/,lookbehind:!0}}),Prism.languages.DFS(Prism.languages.racket,(function(e,a){if("RegExp"===Prism.util.type(a)){var r=a.source.replace(/\\(.)|\[\^?((?:\\.|[^\\\]])*)\]/g,(function(e,a,r){if(a){if("("===a)return"[([]";if(")"===a)return"[)\\]]"}return r?("^"===e[1]?"[^":"[")+r.replace(/\\(.)|[()]/g,(function(e,a){return"("===e||"("===a?"([":")"===e||")"===a?")\\]":e}))+"]":e}));this[e]=RegExp(r,a.flags)}})),Prism.languages.insertBefore("racket","string",{lang:{pattern:/^#lang.+/m,greedy:!0,alias:"keyword"}}),Prism.languages.rkt=Prism.languages.racket}}]);
//# sourceMappingURL=353.21ec9102.chunk.js.map