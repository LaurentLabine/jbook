(this.webpackJsonpjbook=this.webpackJsonpjbook||[]).push([[100],{269:function(e,n){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var n={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(n).forEach((function(i){var s=n[i],a=[];/^\w+$/.test(i)||a.push(/\w+/.exec(i)[0]),"diff"===i&&a.push("bold"),e.languages.diff[i]={pattern:RegExp("^(?:["+s+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:a,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(i)[0]}}}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:n})}(Prism)}}]);
//# sourceMappingURL=100.f97e7aa3.chunk.js.map