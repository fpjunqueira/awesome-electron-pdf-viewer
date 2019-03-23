function _asyncToGenerator(t){return function(){var c=t.apply(this,arguments);return new Promise(function(i,a){return function e(t,r){try{var n=c[t](r),o=n.value}catch(t){return void a(t)}if(!n.done)return Promise.resolve(o).then(function(t){e("next",t)},function(t){e("throw",t)});i(o)}("next")})}}!function(t){"use strict";var f,s=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},o=e.iterator||"@@iterator",r=e.toStringTag||"@@toStringTag",n="object"==typeof module,i=t.regeneratorRuntime;if(i)n&&(module.exports=i);else{(i=t.regeneratorRuntime=n?module.exports:{}).wrap=c;var h="suspendedStart",p="suspendedYield",v="executing",y="completed",g={},a=l.prototype=m.prototype;u.prototype=a.constructor=l,l.constructor=u,l[r]=u.displayName="GeneratorFunction",i.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===u||"GeneratorFunction"===(e.displayName||e.name))},i.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,r in t||(t[r]="GeneratorFunction")),t.prototype=Object.create(a),t},i.awrap=function(t){return new x(t)},w(F.prototype),i.async=function(t,e,r,n){var o=new F(c(t,e,r,n));return i.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},w(a),a[o]=function(){return this},a[r]="Generator",a.toString=function(){return"[object Generator]"},i.keys=function(r){var n=[];for(var t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},i.values=D,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=f,this.done=!1,this.delegate=null,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&s.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=f)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?this.next=o.finallyLoc:this.complete(i),g},complete:function(t,e){if("throw"===t.type)throw t.arg;"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=t.arg,this.next="end"):"normal"===t.type&&e&&(this.next=e)},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:D(t),resultName:e,nextLoc:r},g}}}function c(t,e,r,n){var a,c,s,u,o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),l=new L(n||[]);return i._invoke=(a=t,c=r,s=l,u=h,function(t,e){if(u===v)throw new Error("Generator is already running");if(u===y){if("throw"===t)throw e;return E()}for(;;){var r=s.delegate;if(r){if("return"===t||"throw"===t&&r.iterator[t]===f){s.delegate=null;var n=r.iterator.return;if(n){var o=d(n,r.iterator,e);if("throw"===o.type){t="throw",e=o.arg;continue}}if("return"===t)continue}var o=d(r.iterator[t],r.iterator,e);if("throw"===o.type){s.delegate=null,t="throw",e=o.arg;continue}t="next",e=f;var i=o.arg;if(!i.done)return u=p,i;s[r.resultName]=i.value,s.next=r.nextLoc,s.delegate=null}if("next"===t)s.sent=s._sent=e;else if("throw"===t){if(u===h)throw u=y,e;s.dispatchException(e)&&(t="next",e=f)}else"return"===t&&s.abrupt("return",e);u=v;var o=d(a,c,s);if("normal"===o.type){u=s.done?y:p;var i={value:o.arg,done:s.done};if(o.arg!==g)return i;s.delegate&&"next"===t&&(e=f)}else"throw"===o.type&&(u=y,t="throw",e=o.arg)}}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function m(){}function u(){}function l(){}function w(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function x(t){this.arg=t}function F(c){function s(t,e,r,n){var o=d(c[t],c,e);if("throw"!==o.type){var i=o.arg,a=i.value;return a instanceof x?Promise.resolve(a.arg).then(function(t){s("next",t,r,n)},function(t){s("throw",t,r,n)}):Promise.resolve(a).then(function(t){i.value=t,r(i)},n)}n(o.arg)}var e;"object"==typeof process&&process.domain&&(s=process.domain.bind(s)),this._invoke=function(r,n){function t(){return new Promise(function(t,e){s(r,n,t,e)})}return e=e?e.then(t,t):t()}}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function D(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(s.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=f,t.done=!0,t};return n.next=n}}return{next:E}}function E(){return{value:f,done:!0}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this),function(t){"use strict";window.runPDFA=function(){var t,e=(t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e,r,n,o,i,a,c,s,u,l,f,h,p,v,y,g,d,m,w,x;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("PDFA validation test begins."),!(e="newsletter.pdf"),"",void 0,!10,r="../TestFiles/"+e,t.next=12,PDFNet.PDFACompliance.createFromUrl(!1,r,"",PDFNet.PDFACompliance.Conformance.e_Level1B,void 0,10,!1);case 12:return n=t.sent,t.next=15,n.getErrorCount();case 15:if(0!==(o=t.sent)){t.next=20;break}console.log(e+" is a valid PDFA."),t.next=47;break;case 20:console.log(e+" is NOT a valid PDFA."),i=0;case 22:if(i<o)return t.next=25,n.getError(i);t.next=47;break;case 25:return a=t.sent,t.next=28,PDFNet.PDFACompliance.getPDFAErrorMessage(a);case 28:return c=t.sent,t.next=31,n.getRefObjCount(a);case 31:if(!(0<(s=t.sent))){t.next=44;break}u=[],l=0;case 35:if(l<s)return t.next=38,n.getRefObj(a,l);t.next=43;break;case 38:f=t.sent,u.push(f);case 40:l++,t.next=35;break;case 43:console.log("Error:"+c+". Objects:"+u.toString());case 44:i++,t.next=22;break;case 47:t.next=52;break;case 49:t.prev=49,t.t0=t.catch(0),console.log(t.t0);case 52:return t.prev=52,console.log("PDFA conversion test begins."),p="fish_pdfa.pdf",!0,v="",y=void 0,g=10,d="../TestFiles/"+(h="fish.pdf"),console.log("Converting input document: "+h),t.next=65,PDFNet.PDFACompliance.createFromUrl(!0,d,v,PDFNet.PDFACompliance.Conformance.e_Level1B,y,g);case 65:return m=t.sent,t.next=68,m.getErrorCount();case 68:return 0===t.sent?console.log(h+" is a valid PDFA."):console.log(h+" is NOT a valid PDFA."),console.log("Save and validate the converted document: "+p),!0,t.next=74,m.saveAsFromBuffer(!0);case 74:return w=t.sent,saveBufferAsPDFDoc(w,p),!1,t.next=79,PDFNet.PDFACompliance.createFromBuffer(!1,w,v,PDFNet.PDFACompliance.Conformance.e_Level1B,y,g);case 79:return x=t.sent,t.next=82,x.getErrorCount();case 82:0===t.sent?console.log(p+" is a valid PDFA."):console.log(p+" is NOT a valid PDFA."),t.next=89;break;case 86:t.prev=86,t.t1=t.catch(52),console.log(t.t1);case 89:case"end":return t.stop()}},t,void 0,[[0,49],[52,86]])})),function(){return t.apply(this,arguments)});PDFNet.runWithCleanup(e,window.sampleL)}}();