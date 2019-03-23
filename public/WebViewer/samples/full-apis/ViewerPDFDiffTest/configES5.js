!function(e){"use strict";var f,s=Object.prototype.hasOwnProperty,t="function"==typeof Symbol?Symbol:{},o=t.iterator||"@@iterator",r=t.toStringTag||"@@toStringTag",n="object"==typeof module,a=e.regeneratorRuntime;if(a)n&&(module.exports=a);else{(a=e.regeneratorRuntime=n?module.exports:{}).wrap=c;var p="suspendedStart",h="suspendedYield",d="executing",y="completed",v={},i=l.prototype=m.prototype;u.prototype=i.constructor=l,l.constructor=u,l[r]=u.displayName="GeneratorFunction",a.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,l):(e.__proto__=l,r in e||(e[r]="GeneratorFunction")),e.prototype=Object.create(i),e},a.awrap=function(e){return new x(e)},w(b.prototype),a.async=function(e,t,r,n){var o=new b(c(e,t,r,n));return a.isGeneratorFunction(t)?o:o.next().then(function(e){return e.done?e.value:o.next()})},w(i),i[o]=function(){return this},i[r]="Generator",i.toString=function(){return"[object Generator]"},a.keys=function(r){var n=[];for(var e in r)n.push(e);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in r)return e.value=t,e.done=!1,e}return e.done=!0,e}},a.values=P,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=f,this.done=!1,this.delegate=null,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&s.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=f)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function e(e,t){return a.type="throw",a.arg=r,n.next=e,!!t}for(var t=this.tryEntries.length-1;0<=t;--t){var o=this.tryEntries[t],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var i=s.call(o,"catchLoc"),c=s.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&s.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?this.next=o.finallyLoc:this.complete(a),v},complete:function(e,t){if("throw"===e.type)throw e.arg;"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=e.arg,this.next="end"):"normal"===e.type&&t&&(this.next=t)},finish:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;0<=t;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},v}}}function c(e,t,r,n){var i,c,s,u,o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),l=new k(n||[]);return a._invoke=(i=e,c=r,s=l,u=p,function(e,t){if(u===d)throw new Error("Generator is already running");if(u===y){if("throw"===e)throw t;return _()}for(;;){var r=s.delegate;if(r){if("return"===e||"throw"===e&&r.iterator[e]===f){s.delegate=null;var n=r.iterator.return;if(n){var o=g(n,r.iterator,t);if("throw"===o.type){e="throw",t=o.arg;continue}}if("return"===e)continue}var o=g(r.iterator[e],r.iterator,t);if("throw"===o.type){s.delegate=null,e="throw",t=o.arg;continue}e="next",t=f;var a=o.arg;if(!a.done)return u=h,a;s[r.resultName]=a.value,s.next=r.nextLoc,s.delegate=null}if("next"===e)s.sent=s._sent=t;else if("throw"===e){if(u===p)throw u=y,t;s.dispatchException(t)&&(e="next",t=f)}else"return"===e&&s.abrupt("return",t);u=d;var o=g(i,c,s);if("normal"===o.type){u=s.done?y:h;var a={value:o.arg,done:s.done};if(o.arg!==v)return a;s.delegate&&"next"===e&&(t=f)}else"throw"===o.type&&(u=y,e="throw",t=o.arg)}}),a}function g(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function m(){}function u(){}function l(){}function w(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function x(e){this.arg=e}function b(c){function s(e,t,r,n){var o=g(c[e],c,t);if("throw"!==o.type){var a=o.arg,i=a.value;return i instanceof x?Promise.resolve(i.arg).then(function(e){s("next",e,r,n)},function(e){s("throw",e,r,n)}):Promise.resolve(i).then(function(e){a.value=e,r(a)},n)}n(o.arg)}var t;"object"==typeof process&&process.domain&&(s=process.domain.bind(s)),this._invoke=function(r,n){function e(){return new Promise(function(e,t){s(r,n,e,t)})}return t=t?t.then(e,e):e()}}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(s.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=f,e.done=!0,e};return n.next=n}}return{next:_}}function _(){return{value:f,done:!0}}}("object"==typeof global?global:"object"==typeof window?window:"object"==typeof self?self:this);var _slicedToArray=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};function _asyncToGenerator(e){return function(){var c=e.apply(this,arguments);return new Promise(function(a,i){return function t(e,r){try{var n=c[e](r),o=n.value}catch(e){return void i(e)}if(!n.done)return Promise.resolve(o).then(function(e){t("next",e)},function(e){t("throw",e)});a(o)}("next")})}}!function(){var f=null,i=null,o=null,n=window.parent.window.document,c=[null,null],a=n.getElementById("viewer");a.addEventListener("ready",_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return e.next=4,f.PDFDoc.createFromURL("../../../samples/files/test_doc_1.pdf");case 4:return t=e.sent,e.next=7,f.PDFDoc.createFromURL("../../../samples/files/test_doc_2.pdf");case 7:return r=e.sent,e.next=10,d(t,r);case 10:n.getElementById("fileUpload1").disabled=!1,n.getElementById("fileUpload2").disabled=!1;case 12:case"end":return e.stop()}},e,void 0)}))),n.getElementById("fileUpload1").addEventListener("change",function(e){l(e.target.files[0],0)}),n.getElementById("fileUpload2").addEventListener("change",function(e){l(e.target.files[0],1)});var e,t,r,s,u=(e=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=n.getElementById("compareButton")).classList.contains("disabled")){e.next=3;break}return e.abrupt("return");case 3:t.classList.remove("disabled"),t.addEventListener("click",_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c[0].getPDFDoc();case 2:return t=e.sent,e.next=5,c[1].getPDFDoc();case 5:return r=e.sent,e.next=8,d(t,r);case 8:case"end":return e.stop()}},e,void 0)})));case 5:case"end":return e.stop()}},e,void 0)})),function(){return e.apply(this,arguments)}),l=function(e,t){var r=new i.Document(e.name,"pdf"),n=i.getDefaultBackendType(),o={workerTransportPromise:i.initPDFWorkerTransports(n,{}),extension:"pdf"},a=new i.PartRetrievers.LocalPdfPartRetriever(e);r.loadAsync(a,function(e){e&&console.warn(e),c[t]=r,null!==c[1]&&null!==c[0]&&u()},o)},p=(t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f=a.querySelector("iframe").contentWindow.PDFNet,t=n.getElementById("viewer").getElementsByTagName("iframe")[0],i=t.contentWindow.CoreControls,o=t.contentWindow.Annotations,f=a.querySelector("iframe").contentWindow.PDFNet,readerControl.setEngineType(readerControl.constants.engineTypes.PDFNETJS),i.resetWorker(),e.next=9,i.getDefaultBackendType();case 9:return r=e.sent,i.enableFullPDF(!0),i.initPDFWorkerTransports(r,{}),e.next=14,f.initialize();case 14:case"end":return e.stop()}},e,void 0)})),function(){return t.apply(this,arguments)}),h=(r=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new o.Color(200,0,0,1),r=new o.Color(0,200,200,1),e.next=4,f.createDiffOptions();case 4:return(n=e.sent).setColorA(t),n.setColorB(r),n.setBlendMode(5),e.abrupt("return",n);case 9:case"end":return e.stop()}},e,void 0)})),function(){return r.apply(this,arguments)}),d=(s=_asyncToGenerator(regeneratorRuntime.mark(function e(t,r){var a,i,n,o,c,s,u,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.PDFDoc.create();case 2:return(a=e.sent).lock(),e.next=6,h();case 6:return i=e.sent,n=[],e.next=10,t.getPageIterator(1);case 10:return o=e.sent,e.next=13,r.getPageIterator(1);case 13:c=e.sent,s=0;case 16:return e.next=18,o.hasNext();case 18:if(e.sent)return e.next=21,o.current();e.next=27;break;case 21:u=e.sent,n[s]=[u],s++;case 24:o.next(),e.next=16;break;case 27:s=0;case 29:return e.next=31,c.hasNext();case 31:if(e.sent)return e.next=34,c.current();e.next=40;break;case 34:l=e.sent,(n[s]||(n[s]=[null])).push(l),s++;case 37:c.next(),e.next=29;break;case 40:return n.forEach(function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r=_slicedToArray(t,2),n=r[0],o=r[1];return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n||(n=new f.Page(0)),o||(o=new f.Page(0)),e.next=4,a.appendVisualDiff(n,o,i);case 4:case"end":return e.stop()}},e,void 0)}));return function(e){return t.apply(this,arguments)}}()),e.next=43,a.unlock();case 43:readerControl.loadDocument(a);case 44:case"end":return e.stop()}},e,void 0)})),function(e,t){return s.apply(this,arguments)})}(window);