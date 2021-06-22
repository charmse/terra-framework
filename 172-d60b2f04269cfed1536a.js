(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1027:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.supportedComponentBreakpoints=t.processedRoutesPropType=t.componentConfigPropType=t.routePropType=t.routeConfigPropType=t.navigationLayoutConfigPropType=void 0;var o=n(a(12)),r=n(a(2)),l=["tiny","small","medium","large","huge"];t.supportedComponentBreakpoints=l;var u=r.default.objectOf((function(e,t,a,n,r){if(!("default"===t||l.indexOf(t)>=0))return new Error("Invalid prop '".concat(r,"' supplied to '").concat(a,"'. Validation failed."));var u=e[t],i=!0;return null!==u&&("object"!==(0,o.default)(u)||!u.componentClass||"object"!==(0,o.default)(u.props)&&null!==u.props&&void 0!==u.props)&&(i=!1),!!i||new Error("Invalid prop '".concat(r,"' supplied to '").concat(a,"'. Validation failed."))}));t.componentConfigPropType=u;var i=r.default.shape({path:function(e,t,a){return!!/\/.*/.test(e[t])||new Error("Invalid prop `".concat(t,"` supplied to")+" `".concat(a,"`. Validation failed. ").concat(t," must start with a forward slash (/)."))},component:u.isRequired});t.routePropType=i;var s=r.default.objectOf(i);t.routeConfigPropType=s;var d=r.default.shape({header:s,menu:s,content:s});t.navigationLayoutConfigPropType=d;var f=r.default.arrayOf(r.default.shape({path:r.default.string,componentClass:r.default.func,componentProps:r.default.object}));t.processedRoutesPropType=f},1046:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=r(a(28));function r(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=l({},e);return n.default.createElement(o.default,t,n.default.createElement("path",{d:"M0 21h48v6H0zM0 4h48v6H0zm0 34h48v6H0z"}))};u.displayName="IconMenu",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var i=u;t.default=i},1053:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=r(a(28));function r(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=l({},e);return n.default.createElement(o.default,t,n.default.createElement("path",{d:"M28.2 24L42.9 9.1 40.8 7l-1.7-1.6-.4-.5L24 19.7 9.4 4.9 7.2 7 5.6 8.6l-.5.5L19.8 24 5.1 38.9 7.2 41l1.7 1.6.5.5L24 28.3l14.7 14.8.4-.5 1.7-1.6 2.1-2.1L28.2 24z"}))};u.displayName="IconClose",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var i=u;t.default=i},1054:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=r(a(28));function r(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=l({},e);return n.default.createElement(o.default,t,n.default.createElement("path",{d:"M48 21H10.6L27.3 3.9 23.5.1 0 24l23.5 23.9 3.8-3.8L10.6 27H48z"}))};u.displayName="IconLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=u;t.default=i},1055:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(0)),o=r(a(28));function r(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=function(e){var t=l({},e);return n.default.createElement(o.default,t,n.default.createElement("path",{d:"M18.4 40.9L0 22.5l4.2-4.2 14.2 14.2L43.8 7.1l4.2 4.2z"}))};u.displayName="IconCheckmark",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var i=u;t.default=i},1175:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(18)),r=n(a(0)),l=n(a(5)),u=n(a(1176)),i=l.default.bind(u.default),s=function(e){return"large"!==(0,o.default)({},e).layoutConfig.size?r.default.createElement("div",{className:i("demo-extensions-small")},"Test Extensions Small"):r.default.createElement("div",{className:i(["demo-extensions"])},"Test Extensions Large")};t.default=s},1176:function(e,t,a){"use strict";a.r(t),t.default={"demo-extensions":"demoStyles-module__demo-extensions___5leqk","demo-extensions-small":"demoStyles-module__demo-extensions-small___3TPG1"}},1829:function(e,t,a){"use strict";var n=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=a(83),l=n(a(1045)),u=n(a(1175)),i=function(){return o.default.createElement(r.MemoryRouter,null,o.default.createElement(l.default,{id:"test-header",layoutConfig:{size:"small",toggleMenu:function(){}},nameConfig:{title:"app-test-title"},utilityConfig:{title:"test-util-title",initialSelectedKey:"test-menu",onChange:function(){},menuItems:[{key:"test-menu",contentLocation:"body",title:"test-menu-title"}]},extensions:o.default.createElement(u.default,{layoutConfig:{size:"large"}}),applicationLinks:{links:[{id:"123",path:"/something1",text:"item 1"},{id:"234",path:"/something2",text:"item 2"},{id:"345",path:"/something3",text:"item 3"}]}}))};t.default=i}}]);