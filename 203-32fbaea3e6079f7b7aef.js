(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1088:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(18)),o=r(n(24)),a=r(n(21)),d=r(n(26)),l=r(n(29)),c=r(n(30)),i=r(n(31)),f=r(n(0)),s=r(n(2));n(1110),n(1111);var p=["children"];function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,i.default)(e);if(t){var u=(0,i.default)(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return(0,c.default)(this,n)}}var v={children:s.default.node.isRequired},h=function(e){(0,l.default)(n,e);var t=m(n);function n(){return(0,a.default)(this,n),t.apply(this,arguments)}return(0,d.default)(n,[{key:"componentDidMount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"componentWillUnmount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"render",value:function(){var e=this.props,t=e.children,n=(0,o.default)(e,p);return f.default.createElement("div",(0,u.default)({"data-embedded-content-consumer-provider-test-template":!0},n),t)}}]),n}(f.default.Component);h.propTypes=v;var y=h;t.default=y},1089:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper":"EmbeddedContentConsumerCommon-module__content-wrapper___1WHhV"}},1110:function(e,t,n){"use strict";n.r(t),t.default={}},1111:function(e,t,n){"use strict";n.r(t),t.default={}},1419:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(0)),o=r(n(5)),a=r(n(1088)),d=r(n(1089)),l=o.default.bind(d.default),c=function(){return u.default.createElement(a.default,null,u.default.createElement("div",{className:l("content-wrapper")},u.default.createElement("h1",null,"Basic Content"),u.default.createElement("p",null,"This example demonstrates that the embedded content consumer will display the providers web content within an iframe.")))};t.default=c}}]);