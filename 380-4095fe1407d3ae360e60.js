(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{1008:function(t,e,o){"use strict";o.r(e),e.default={wrapper:"HookshotTestDocCommon-module__wrapper___232un",content:"HookshotTestDocCommon-module__content___1OjRA","default-hookshot-wrapper":"HookshotTestDocCommon-module__default-hookshot-wrapper___2f5AK","content-wrapper":"HookshotTestDocCommon-module__content-wrapper___uQY81","hookshot-wrapper":"HookshotTestDocCommon-module__hookshot-wrapper___3pFVu","hookshot-content-wrapper":"HookshotTestDocCommon-module__hookshot-content-wrapper___1ysoU","hookshot-auto-flipped":"HookshotTestDocCommon-module__hookshot-auto-flipped___AVQSw","hookshot-auto-90":"HookshotTestDocCommon-module__hookshot-auto-90___1nqBM","hookshot-flip-pushed":"HookshotTestDocCommon-module__hookshot-flip-pushed___3Vl7s","hookshot-auto-neg-90":"HookshotTestDocCommon-module__hookshot-auto-neg-90___3W1xV","hookshot-auto-pushed":"HookshotTestDocCommon-module__hookshot-auto-pushed___3mruV","hookshot-wrapper-auto-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-90___14DA9","hookshot-wrapper-auto-neg-90":"HookshotTestDocCommon-module__hookshot-wrapper-auto-neg-90___3Ya6C","hookshot-wrapper-auto-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-auto-pushed___3TotB","hookshot-wrapper-flip-pushed":"HookshotTestDocCommon-module__hookshot-wrapper-flip-pushed___1rhG-","hookshot-flip-flipped":"HookshotTestDocCommon-module__hookshot-flip-flipped___3nf-d","hookshot-none-offset":"HookshotTestDocCommon-module__hookshot-none-offset___1NBb8","hookshot-push-pushed":"HookshotTestDocCommon-module__hookshot-push-pushed___3mSko","hookshot-container-right":"HookshotTestDocCommon-module__hookshot-container-right___3YI7W","hookshot-container-up":"HookshotTestDocCommon-module__hookshot-container-up___2m43N","hookshot-container-down":"HookshotTestDocCommon-module__hookshot-container-down___3GPo2","hookshot-container-left":"HookshotTestDocCommon-module__hookshot-container-left___YtlgK"}},1018:function(t,e,o){"use strict";var n=o(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(0)),l=n(o(5)),r=n(o(164)),u=n(o(1008)),s=l.default.bind(u.default),h=function(t){return a.default.createElement(r.default.Content,t,a.default.createElement("div",{className:s("hookshot-content-wrapper")},"Hookshot"))};e.default=h},1019:function(t,e,o){"use strict";var n=o(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(18)),l=n(o(24)),r=n(o(21)),u=n(o(26)),s=n(o(32)),h=n(o(29)),c=n(o(30)),d=n(o(31)),i=n(o(0)),m=n(o(5)),f=n(o(2)),p=n(o(164)),_=n(o(1018)),k=n(o(1008)),v=["hookshotContentProps","id","isOpen","contentAttachment","targetAttachment","attachmentMargin","includeSvgs","type"];function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=(0,d.default)(t);if(e){var a=(0,d.default)(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return(0,c.default)(this,o)}}var C=m.default.bind(k.default),T={hookshotContentProps:f.default.any,id:f.default.string,isOpen:f.default.bool,includeSvgs:f.default.bool,contentAttachment:f.default.string,targetAttachment:f.default.string,type:f.default.string,attachmentMargin:f.default.number},b=function(t){return"middle start"===t?{vertical:"middle",horizontal:"start"}:"middle end"===t?{vertical:"middle",horizontal:"end"}:"middle center"===t?{vertical:"middle",horizontal:"center"}:"top start"===t?{vertical:"top",horizontal:"start"}:"top end"===t?{vertical:"top",horizontal:"end"}:"top center"===t?{vertical:"top",horizontal:"center"}:"bottom start"===t?{vertical:"bottom",horizontal:"start"}:"bottom end"===t?{vertical:"bottom",horizontal:"end"}:{vertical:"bottom",horizontal:"center"}},E=function(t){(0,h.default)(o,t);var e=g(o);function o(t){var n;return(0,r.default)(this,o),(n=e.call(this,t)).triggerHookshot=n.triggerHookshot.bind((0,s.default)(n)),n.handleRequestClose=n.handleRequestClose.bind((0,s.default)(n)),n.state={open:t.isOpen},n}return(0,u.default)(o,[{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"triggerHookshot",value:function(){this.setState({open:!0})}},{key:"render",value:function(){var t=this.props,e=t.hookshotContentProps,o=t.id,n=(t.isOpen,t.contentAttachment),r=t.targetAttachment,u=t.attachmentMargin,s=t.includeSvgs,h=t.type,c=(0,l.default)(t,v),d=i.default.createElement("div",null,i.default.createElement("svg",{id:"svg1",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#78C346",d:"M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"}),i.default.createElement("path",{fill:"#FFF",d:"M20 36.4L6.7 23.1l3.6-3.6 9.7 9.9 17.7-17.9 3.6 3.6L20 36.4z"})),i.default.createElement("svg",{id:"svg2",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",height:"2em",width:"2em"},i.default.createElement("path",{fill:"#B1B5B6",d:"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm13.9 33.8l-2.1 2.1-1.2 1.2-1 .9-9.6-9.7-9.6 9.7-2.2-2.1-1.1-1.1-1-1 9.7-9.8-9.7-9.8 1-1 1.1-1.1 2.2-2.1 9.6 9.7 9.6-9.7 1 .9 1.2 1.2 2.1 2.1-9.7 9.8 9.7 9.8z"})));return i.default.createElement("div",{id:"".concat(o,"-bounds"),className:C(["wrapper","hookshot-wrapper-".concat(h)])},i.default.createElement(p.default,(0,a.default)({id:o,contentAttachment:b(n),targetAttachment:b(r),attachmentMargin:u,isEnabled:!0,isOpen:this.state.open,targetRef:function(){return document.getElementById("trigger-".concat(o))},boundingRef:function(){return document.getElementById("".concat(o,"-bounds"))}},c),i.default.createElement(_.default,{id:"".concat(o,"-content"),onEsc:e.closeOnEsc?this.handleRequestClose:void 0,onOutsideClick:e.closeOnOutsideClick?this.handleRequestClose:void 0,onResize:e.closeOnResize?this.handleRequestClose:void 0})),i.default.createElement("button",{type:"button",id:"trigger-".concat(o),className:C(["content","hookshot-".concat(h)]),onClick:this.triggerHookshot},"Trigger Hookshot"),s&&d)}}]),o}(i.default.Component);E.propTypes=T,E.defaultProps={hookshotContentProps:{},id:"hookshot",isOpen:!1,includeSvgs:!1,contentAttachment:"middle end",targetAttachment:"middle start"};var w=E;e.default=w},1995:function(t,e,o){"use strict";var n=o(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(o(21)),l=n(o(26)),r=n(o(32)),u=n(o(29)),s=n(o(30)),h=n(o(31)),c=n(o(0)),d=n(o(1019));function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=(0,h.default)(t);if(e){var a=(0,h.default)(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return(0,s.default)(this,o)}}var m=function(t){(0,u.default)(o,t);var e=i(o);function o(t){var n;return(0,a.default)(this,o),(n=e.call(this,t)).handleTargetAttachment=n.handleTargetAttachment.bind((0,r.default)(n)),n.state={attachment:"top start"},n}return(0,l.default)(o,[{key:"handleTargetAttachment",value:function(t){this.setState({attachment:t.target.value})}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement(d.default,{id:"attachment",hookshotContentProps:{closeOnEsc:!1,closeOnOutsideClick:!1,closeOnResize:!1},contentAttachment:"bottom end",type:"primary",targetAttachment:this.state.attachment,isOpen:!0}),c.default.createElement("p",null," Content attachement: bottom end "),c.default.createElement("p",null," Choose the target attachement: "),c.default.createElement("button",{type:"button",id:"attach-TS",value:"top start",onClick:this.handleTargetAttachment},"TOP START"),c.default.createElement("button",{type:"button",id:"attach-TC",value:"top center",onClick:this.handleTargetAttachment},"TOP CENTER"),c.default.createElement("button",{type:"button",id:"attach-TE",value:"top end",onClick:this.handleTargetAttachment},"TOP END"),c.default.createElement("button",{type:"button",id:"attach-MS",value:"middle start",onClick:this.handleTargetAttachment},"MIDDLE START"),c.default.createElement("button",{type:"button",id:"attach-MC",value:"middle center",onClick:this.handleTargetAttachment},"MIDDLE CENTER"),c.default.createElement("button",{type:"button",id:"attach-ME",value:"middle end",onClick:this.handleTargetAttachment},"MIDDLE END"),c.default.createElement("button",{type:"button",id:"attach-BS",value:"bottom start",onClick:this.handleTargetAttachment},"BOTTOM START"),c.default.createElement("button",{type:"button",id:"attach-BC",value:"bottom center",onClick:this.handleTargetAttachment},"BOTTOM CENTER"),c.default.createElement("button",{type:"button",id:"attach-BE",value:"bottom end",onClick:this.handleTargetAttachment},"BOTTOM END"))}}]),o}(c.default.Component);e.default=m}}]);