(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{1009:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(n(0)),u=f(n(2)),i=f(n(10)),l=f(n(5)),a=f(n(7)),c=f(n(994));function f(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var o=_(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=l.default.bind(c.default),g={defaultValue:u.default.oneOfType([u.default.string,u.default.number]),disabled:u.default.bool,isIncomplete:u.default.bool,isInvalid:u.default.bool,onBlur:u.default.func,onChange:u.default.func,onFocus:u.default.func,onInput:u.default.func,name:u.default.string,pattern:u.default.string,refCallback:u.default.func,required:u.default.bool,type:u.default.string,value:u.default.oneOfType([u.default.string,u.default.number]),ariaLabel:u.default.string},j={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(l,e);var t,n,r,u=v(l);function l(){return b(this,l),u.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,r=t.disabled,u=t.isIncomplete,l=t.isInvalid,a=t.onBlur,c=t.onChange,f=t.onFocus,b=t.onInput,y=t.name,h=t.pattern,v=t.refCallback,O=t.required,_=t.type,g=t.ariaLabel,j=t.value,T=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},m(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"])),I=this.context,P=(void 0===_||["text","number","password","email","search","tel","url","hidden"].includes(_))&&w("form-input",{"form-error":l},{"form-incomplete":u&&O&&!l},I.className),E=(0,i.default)(P,T.className);return T&&Object.prototype.hasOwnProperty.call(T,"aria-label")?e=g||T["aria-label"]:g&&(e=g),T["aria-label"]=e,O&&(T["aria-required"]="true"),void 0!==j?T.value=j:void 0!==n&&(T.defaultValue=n),T.placeholder&&(T.placeholder=null),o.default.createElement("input",s({},T,{ref:function(e){v&&v(e)},name:y,type:_,pattern:h,onBlur:a,onChange:c,onFocus:f,onInput:b,disabled:r,required:O,className:E}))}}])&&y(t.prototype,n),r&&y(t,r),l}(o.default.Component);T.propTypes=g,T.defaultProps=j,T.contextType=a.default,T.isInput=!0;var I=T;t.default=I},1022:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper":"TimeInput-test-module__content-wrapper___E1Vtp"}},2130:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(0)),u=r(n(5)),i=r(n(1007)),l=r(n(1014)),a=r(n(1022)),c=u.default.bind(a.default),f=function(){return o.default.createElement("div",{className:c("content-wrapper")},o.default.createElement(i.default,{id:"timeInput",name:"time-input",variant:l.default.FORMAT_12_HOUR,required:!0,isIncomplete:!0}))};t.default=f},994:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2m4Lc","orion-fusion-theme":"Input-module__orion-fusion-theme___1P-S4","form-input":"Input-module__form-input___3oe9F","form-error":"Input-module__form-error___3tyh6","form-incomplete":"Input-module__form-incomplete___2OzNB"}},995:function(e,t){var n,r,o=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===u||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:u}catch(e){n=u}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var a,c=[],f=!1,s=-1;function p(){f&&a&&(f=!1,a.length?c=a.concat(c):s=-1,c.length&&d())}function d(){if(!f){var e=l(p);f=!0;for(var t=c.length;t;){for(a=c,c=[];++s<t;)a&&a[s].run();s=-1,t=c.length}a=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function b(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new m(e,t)),1!==c.length||f||l(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=b,o.addListener=b,o.once=b,o.off=b,o.removeListener=b,o.removeAllListeners=b,o.emit=b,o.prependListener=b,o.prependOnceListener=b,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);