(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{1771:function(e,t,n){"use strict";n.r(t),t.default={"test-popup-area":"BoundedHeightPopup-test-module__test-popup-area___2qAu4","popup-text":"BoundedHeightPopup-test-module__popup-text___3H0wZ"}},2070:function(e,t,n){"use strict";var o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=o(n(21)),a=o(n(26)),d=o(n(32)),l=o(n(29)),s=o(n(30)),r=o(n(31)),i=o(n(0)),f=o(n(5)),c=o(n(129)),p=o(n(1771));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,r.default)(e);if(t){var u=(0,r.default)(this).constructor;n=Reflect.construct(o,arguments,u)}else n=o.apply(this,arguments);return(0,s.default)(this,n)}}var N=f.default.bind(p.default),v=function(e){(0,l.default)(n,e);var t=h(n);function n(e){var o;return(0,u.default)(this,n),(o=t.call(this,e)).handleButtonClick=o.handleButtonClick.bind((0,d.default)(o)),o.handleRequestClose=o.handleRequestClose.bind((0,d.default)(o)),o.setButtonNode=o.setButtonNode.bind((0,d.default)(o)),o.getButtonNode=o.getButtonNode.bind((0,d.default)(o)),o.setParentNode=o.setParentNode.bind((0,d.default)(o)),o.getParentNode=o.getParentNode.bind((0,d.default)(o)),o.state={open:!0},o}return(0,a.default)(n,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"setParentNode",value:function(e){this.parentNode=e}},{key:"getParentNode",value:function(){return this.parentNode}},{key:"render",value:function(){return i.default.createElement("div",{id:"test-popup-area",className:N("test-popup-area"),ref:this.setParentNode},i.default.createElement(c.default,{boundingRef:this.getParentNode,contentHeight:"480",classNameArrow:"test-arrow",classNameContent:"test-content",isOpen:this.state.open,onRequestClose:this.handleRequestClose,targetRef:this.getButtonNode},i.default.createElement("p",{className:N("popup-text")},"This popup is bounded by height.")),i.default.createElement("button",{type:"button",id:"bounded-button",onClick:this.handleButtonClick,ref:this.setButtonNode},"Bounded Height"))}}]),n}(i.default.Component);t.default=v}}]);