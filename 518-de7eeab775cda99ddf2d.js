(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{2030:function(e,t,l){"use strict";var a=l(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(21)),u=a(l(26)),s=a(l(29)),c=a(l(30)),i=a(l(31)),r=a(l(0)),d=a(l(2)),f=a(l(95)),o=a(l(341));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,a=(0,i.default)(e);if(t){var n=(0,i.default)(this).constructor;l=Reflect.construct(a,arguments,n)}else l=a.apply(this,arguments);return(0,c.default)(this,l)}}var b={isSelectableMenu:d.default.bool},p=function(e){(0,s.default)(l,e);var t=m(l);function l(){return(0,n.default)(this,l),t.apply(this,arguments)}return(0,u.default)(l,[{key:"getChildContext",value:function(){return{isSelectableMenu:!0}}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement("div",{id:"isSelected"},r.default.createElement("p",null,"The item is disabled. The selection state should not change with any user interaction.")),r.default.createElement(f.default,{role:"menu"},r.default.createElement(o.default.Item,{text:"Disabled Menu Item",key:"1",className:"TestDisabledItem",isSelectable:!0,isDisabled:!0}),r.default.createElement(o.default.Item,{isDisabled:!0,isSelectable:!0,text:"Nested Menu",key:"2",className:"TestNestedMenu",subMenuItems:[r.default.createElement(o.default.Item,{text:"Default 2.1",key:"2.1",className:"TestNestedMenuContent"})]}),r.default.createElement(o.default.Item,{isDisabled:!0,text:"Disabled Selected Menu Item",key:"3",className:"TestDisabledItem",isSelectable:!0,isSelected:!0}),r.default.createElement(o.default.Item,{isDisabled:!0,text:"Disabled eIFU Icon Menu Item",key:"4",className:"TestDisabledItem",isInstructionsForUse:!0})))}}]),l}(r.default.Component);p.childContextTypes=b;var y=p;t.default=y}}]);