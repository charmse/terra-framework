(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1086:function(e,t,n){"use strict";var a=n(6),i=n(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(18)),u=a(n(24)),o=a(n(21)),s=a(n(26)),r=a(n(32)),d=a(n(29)),c=a(n(30)),f=a(n(31)),h=w(n(0)),m=a(n(2)),p=n(9),v=a(n(5)),y=a(n(84)),_=a(n(50)),K=a(n(165)),C=w(n(22)),k=a(n(7)),M=a(n(1484)),g=a(n(1486)),b=["menuItems","onChange","routingStackBack","selectedChildKey","selectedMenuKey","toolbar"];function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(E=function(e){return e?n:t})(e)}function w(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=E(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(a,u,o):a[u]=e[u]}return a.default=e,n&&n.set(e,a),a}function I(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,f.default)(e);if(t){var i=(0,f.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var x=v.default.bind(g.default),R={intl:m.default.shape({formatMessage:m.default.func}).isRequired,menuItems:m.default.arrayOf(m.default.shape({childKeys:m.default.arrayOf(m.default.string),hasSubMenu:m.default.bool,isRootMenu:m.default.bool,id:m.default.string,metaData:m.default.object,key:m.default.string.isRequired,text:m.default.string.isRequired})),onChange:m.default.func.isRequired,routingStackBack:m.default.func,selectedChildKey:m.default.string,selectedMenuKey:m.default.string.isRequired,toolbar:m.default.element},S=function(e){var t={},n={};return e.forEach((function(e){t[e.key]={id:e.id,text:e.text,childKeys:e.childKeys,metaData:e.metaData,hasSubMenu:e.hasSubMenu,isRootMenu:e.isRootMenu},e.childKeys&&e.childKeys.forEach((function(t){n[t]=e.key}))})),{items:t,parents:n}},O=function(e){(0,d.default)(n,e);var t=I(n);function n(e){var a;(0,o.default)(this,n),(a=t.call(this,e)).handleBackClick=a.handleBackClick.bind((0,r.default)(a)),a.handleItemClick=a.handleItemClick.bind((0,r.default)(a)),a.updateAriaLiveContent=a.updateAriaLiveContent.bind((0,r.default)(a)),a.setVisuallyHiddenComponent=a.setVisuallyHiddenComponent.bind((0,r.default)(a));var i=S(e.menuItems),l=i.items,u=i.parents;return a.state={items:l,parents:u,prevPropsMenuItem:e.menuItems},a}return(0,s.default)(n,[{key:"handleBackClick",value:function(e){var t=this.state.parents[this.props.selectedMenuKey];t&&this.props.onChange(e,{selectedMenuKey:t,selectedChildKey:this.props.selectedMenuKey,metaData:this.state.items[t].metaData})}},{key:"handleItemClick",value:function(e,t){var n=this.state.items[t];this.state.items[t]&&this.state.items[t].text&&this.updateAriaLiveContent(this.state.items[t].text),n.childKeys&&n.childKeys.length?this.props.onChange(e,{selectedMenuKey:t,selectedChildKey:void 0,metaData:n.metaData}):this.props.onChange(e,{selectedMenuKey:this.props.selectedMenuKey,selectedChildKey:t,metaData:n.metaData})}},{key:"setVisuallyHiddenComponent",value:function(e){this.visuallyHiddenComponent=e}},{key:"buildListItem",value:function(e){var t=this,n=this.state.items[e];return h.default.createElement(M.default,{id:n.id,hasChevron:n.hasSubMenu||n.childKeys&&n.childKeys.length>0,isSelected:e===this.props.selectedChildKey,text:n.text,key:e,onClick:function(n){t.handleItemClick(n,e)},onKeyDown:function(n){n.nativeEvent.keyCode!==C.KEY_SPACE&&n.nativeEvent.keyCode!==C.KEY_RETURN||(n.preventDefault(),t.handleItemClick(n,e))},"data-menu-item":e})}},{key:"buildListContent",value:function(e){var t=this;return e&&e.childKeys&&e.childKeys.length?h.default.createElement("nav",{role:"navigation"},h.default.createElement("ul",{role:"menu",className:x(["side-menu-list"])},e.childKeys.map((function(e){return t.buildListItem(e)})))):null}},{key:"updateAriaLiveContent",value:function(e){var t=this.props.intl.formatMessage({id:"Terra.navigation.side.menu.selected"});this.visuallyHiddenComponent&&(this.visuallyHiddenComponent.innerText=e?"".concat(e," ").concat(t):"")}},{key:"render",value:function(){var e,t,n=this.props,a=(n.menuItems,n.onChange,n.routingStackBack),i=(n.selectedChildKey,n.selectedMenuKey),o=n.toolbar,s=(0,u.default)(n,b),r=this.state.items[i],d=this.context,c=x(["side-menu-content-container",d.className]);return(e=this.state.parents[i]?this.handleBackClick:a)||!r.isRootMenu?t=h.default.createElement(h.Fragment,null,h.default.createElement(y.default,{className:x("side-menu-action-header"),onBack:e,title:r?r.text:null,"data-navigation-side-menu-action-header":!0}),o):c=x(["side-menu-content-container","is-root"]),h.default.createElement(h.Fragment,null,h.default.createElement(K.default,{"aria-atomic":"true","aria-live":"assertive","aria-relevant":"additions text",refCallback:this.setVisuallyHiddenComponent}),h.default.createElement(_.default,(0,l.default)({},s,{header:t,fill:!0,className:c}),this.buildListContent(r)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.menuItems!==t.prevPropsMenuItem?S(e.menuItems):null}}]),n}(h.Component);O.propTypes=R,O.defaultProps={menuItems:[]},O.contextType=k.default;var D=(0,p.injectIntl)(O);t.default=D},1484:function(e,t,n){"use strict";var a=n(6),i=n(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(18)),u=a(n(24)),o=a(n(21)),s=a(n(26)),r=a(n(32)),d=a(n(29)),c=a(n(30)),f=a(n(31)),h=E(n(0)),m=a(n(2)),p=n(9),v=a(n(10)),y=a(n(5)),_=a(n(7)),K=E(n(22)),C=a(n(339)),k=a(n(165)),M=a(n(1485)),g=["hasChevron","intl","isSelected","text"];function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function E(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(a,u,o):a[u]=e[u]}return a.default=e,n&&n.set(e,a),a}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,f.default)(e);if(t){var i=(0,f.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var I=y.default.bind(M.default),x={hasChevron:m.default.bool,intl:m.default.shape({formatMessage:m.default.func}).isRequired,isSelected:m.default.bool,onKeyDown:m.default.func,onKeyUp:m.default.func,text:m.default.string},R=function(e){(0,d.default)(n,e);var t=w(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).state={active:!1,focused:!1},a.handleKeyDown=a.handleKeyDown.bind((0,r.default)(a)),a.handleKeyUp=a.handleKeyUp.bind((0,r.default)(a)),a.handleOnBlur=a.handleOnBlur.bind((0,r.default)(a)),a.textRender=a.textRender.bind((0,r.default)(a)),a}return(0,s.default)(n,[{key:"handleOnBlur",value:function(){this.setState({focused:!1})}},{key:"handleKeyDown",value:function(e){e.nativeEvent.keyCode===K.KEY_SPACE&&this.setState({active:!0}),e.nativeEvent.keyCode!==K.KEY_SPACE&&e.nativeEvent.keyCode!==K.KEY_RETURN||this.setState({focused:!0}),this.props.onKeyDown&&this.props.onKeyDown(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===K.KEY_SPACE&&this.setState({active:!1}),e.nativeEvent.keyCode===K.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"textRender",value:function(){var e=this.props,t=e.intl,n=e.isSelected,a=e.text,i=t.formatMessage({id:"Terra.navigation.side.menu.selected"});return n?h.default.createElement(h.Fragment,null,a,h.default.createElement(k.default,{text:i})):a}},{key:"render",value:function(){var e=this.props,t=e.hasChevron,n=(e.intl,e.isSelected),a=(e.text,(0,u.default)(e,g)),i=this.context,o=(0,v.default)(I("menu-item",{"is-selected":n},{"is-active":this.state.active},{"is-focused":this.state.focused},i.className),a.className);return h.default.createElement("li",{className:I("list-item"),role:"none"},h.default.createElement("div",(0,l.default)({role:"menuitem"},a,{tabIndex:"0",className:o,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,"aria-haspopup":t}),h.default.createElement("div",{className:I("title")},this.textRender()),t&&h.default.createElement("span",{className:I("chevron")},h.default.createElement(C.default,null))))}}]),n}(h.default.Component);R.propTypes=x,R.contextType=_.default;var S=(0,p.injectIntl)(R);t.default=S},1485:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"MenuItem-module__clinical-lowlight-theme___13fmC","orion-fusion-theme":"MenuItem-module__orion-fusion-theme___1OjfX","list-item":"MenuItem-module__list-item___3gjp-","menu-item":"MenuItem-module__menu-item___2YeKE","is-hovered":"MenuItem-module__is-hovered___23pWz",chevron:"MenuItem-module__chevron___2KJja","is-focused":"MenuItem-module__is-focused___F-78x","is-selected":"MenuItem-module__is-selected___3dZ1M","is-active":"MenuItem-module__is-active___KKyul",title:"MenuItem-module__title___2bRF2"}},1486:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"NavigationSideMenu-module__clinical-lowlight-theme___2loO3","orion-fusion-theme":"NavigationSideMenu-module__orion-fusion-theme___3Mfd5","side-menu-content-container":"NavigationSideMenu-module__side-menu-content-container___1Knjl","is-root":"NavigationSideMenu-module__is-root___1XoWx","side-menu-list":"NavigationSideMenu-module__side-menu-list___2Scwj","side-menu-action-header":"NavigationSideMenu-module__side-menu-action-header___3CxhZ"}}}]);