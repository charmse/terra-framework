(window.webpackJsonp=window.webpackJsonp||[]).push([[487],{1106:function(e,t,n){"use strict";n.r(t),t.default={container:"SlideGroupDemo-module__container___LsaHD",slide:"SlideGroupDemo-module__slide____vwHw","content-wrapper":"SlideGroupDemo-module__content-wrapper___2MZqu",button:"SlideGroupDemo-module__button___13fP-","custom-slide":"SlideGroupDemo-module__custom-slide___lWzSl"}},2083:function(e,t,n){"use strict";var u=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(21)),o=u(n(26)),c=u(n(32)),l=u(n(29)),a=u(n(30)),i=u(n(31)),d=u(n(0)),f=u(n(5)),s=u(n(345)),m=u(n(1106));function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,u=(0,i.default)(e);if(t){var r=(0,i.default)(this).constructor;n=Reflect.construct(u,arguments,r)}else n=u.apply(this,arguments);return(0,a.default)(this,n)}}var _=f.default.bind(m.default),v=function(e){(0,l.default)(n,e);var t=p(n);function n(e){var u;return(0,r.default)(this,n),(u=t.call(this,e)).state={counter:1},u.increment=u.increment.bind((0,c.default)(u)),u.decrement=u.decrement.bind((0,c.default)(u)),u}return(0,o.default)(n,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],t=1;t<=this.state.counter;t+=1)e.push(d.default.createElement("div",{key:t},d.default.createElement("h2",null,"Slide"," ",t),d.default.createElement("br",null),4!==t?d.default.createElement("button",{type:"button",id:"increment-".concat(t),className:_("button"),onClick:this.increment},"Increment"):null,1!==t?d.default.createElement("button",{type:"button",id:"decrement-".concat(t),className:_("button"),onClick:this.decrement},"Decrement"):null));return d.default.createElement("div",{className:_("content-wrapper")},d.default.createElement(s.default,{items:e,isAnimated:!0,id:"SlideGroup"}))}}]),n}(d.default.Component);t.default=v}}]);