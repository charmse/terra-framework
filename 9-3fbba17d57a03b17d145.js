(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1068:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(18)),i=l(n(24)),a=l(n(21)),o=l(n(26)),s=l(n(32)),d=l(n(29)),r=l(n(30)),c=l(n(31)),f=l(n(0)),h=l(n(131)),p=l(n(2)),m=l(n(10)),b=l(n(5)),C=l(n(7)),v=n(9),y=l(n(1538)),O=l(n(1541)),g=l(n(1542)),w=l(n(1551)),k=l(n(1135)),_=["children","boundingRef","menuWidth","intl","alwaysCollapsedMenuItems"];function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var u=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,u)}else n=l.apply(this,arguments);return(0,r.default)(this,n)}}var M=b.default.bind(k.default),I={children:p.default.node.isRequired,menuWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),boundingRef:p.default.func,intl:p.default.shape({formatMessage:p.default.func}),alwaysCollapsedMenuItems:p.default.arrayOf(p.default.element)},x=f.default.createElement(w.default,{key:"prepopulatedBaseDivider"}),B=function(e){(0,d.default)(n,e);var t=R(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).collapsedMenuAlwaysShown=e.alwaysCollapsedMenuItems.length>0,l.setContainer=l.setContainer.bind((0,s.default)(l)),l.setMenuButton=l.setMenuButton.bind((0,s.default)(l)),l.resetCache=l.resetCache.bind((0,s.default)(l)),l.handleResize=l.handleResize.bind((0,s.default)(l)),l.resetCache(),l}return(0,o.default)(n,[{key:"componentDidMount",value:function(){var e=this;this.resizeObserver=new h.default((function(t){e.contentWidth=t[0].contentRect.width,e.isCalculating||(e.animationFrameID=window.requestAnimationFrame((function(){e.resetCache(),e.forceUpdate()})))})),this.handleResize(this.contentWidth),this.resizeObserver.observe(this.container)}},{key:"componentDidUpdate",value:function(){this.isCalculating&&(this.isCalculating=!1,this.handleResize(this.contentWidth))}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null}},{key:"handleResize",value:function(e){for(var t=e-this.menuButton.getBoundingClientRect().width,n=-1,l=0,u=!0,i=0;i<f.default.Children.count(this.props.children);i+=1){if((l+=this.container.children[i].getBoundingClientRect().width)>t){if(!this.collapsedMenuAlwaysShown&&i===this.props.children.length-1&&l<=e)break;n=f.default.Children.count(this.props.children)>1&&this.props.children[i].type===w.default?i-1:i,u=!1;break}}this.menuHidden===u&&this.hiddenStartIndex===n||(this.menuHidden=u,this.hiddenStartIndex=n,this.forceUpdate())}},{key:"setContainer",value:function(e){null!==e&&(this.container=e)}},{key:"setMenuButton",value:function(e){null!==e&&(this.menuButton=e)}},{key:"resetCache",value:function(){this.animationFrameID=null,this.hiddenStartIndex=-1,this.isCalculating=!0,this.menuHidden=!1}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.boundingRef,l=e.menuWidth,a=e.intl,o=e.alwaysCollapsedMenuItems,s=(0,i.default)(e,_),d=this.context,r=(0,m.default)(M("collapsible-menu-view",{"is-calculating":this.isCalculating},d.className),s.className),c=M("menu-button",{hidden:!this.collapsedMenuAlwaysShown&&this.menuHidden}),h=t,p=o;return this.hiddenStartIndex>=0&&(h=f.default.Children.toArray(t),p=this.collapsedMenuAlwaysShown?h.splice(this.hiddenStartIndex).concat(x).concat(p):h.splice(this.hiddenStartIndex).concat(p)),f.default.createElement("div",(0,u.default)({},s,{className:r,ref:this.setContainer}),h,f.default.createElement("div",{className:c,ref:this.setMenuButton},f.default.createElement(y.default,{"data-collapsible-menu-toggle":!0,icon:f.default.createElement("span",{className:M("menu-button-icon")}),subMenuItems:p,boundingRef:n,menuWidth:l,isIconOnly:!0,text:a.formatMessage({id:"Terra.collapsibleMenuView.more"}),variant:"utility"})))}}]),n}(f.default.Component);B.Item=y.default,B.ItemGroup=O.default,B.Toggle=g.default,B.Divider=w.default,B.propTypes=I,B.contextType=C.default,B.defaultProps={alwaysCollapsedMenuItems:[]};var N=(0,v.injectIntl)(B);t.default=N},1135:function(e,t,n){"use strict";n.r(t),t.default={"orion-fusion-theme":"CollapsibleMenuView-module__orion-fusion-theme___2TMij","clinical-lowlight-theme":"CollapsibleMenuView-module__clinical-lowlight-theme___262Bk","collapsible-menu-view":"CollapsibleMenuView-module__collapsible-menu-view___2fgIl","menu-button":"CollapsibleMenuView-module__menu-button___1lt9o",hidden:"CollapsibleMenuView-module__hidden___Os8Gc","menu-button-icon":"CollapsibleMenuView-module__menu-button-icon___3jAVT","face-up-item":"CollapsibleMenuView-module__face-up-item___36k9Q",control:"CollapsibleMenuView-module__control___4cSM5","is-disabled":"CollapsibleMenuView-module__is-disabled___2KSJi",divider:"CollapsibleMenuView-module__divider___30Dvq","is-calculating":"CollapsibleMenuView-module__is-calculating___10TM0"}},1352:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(18)),i=l(n(24)),a=l(n(21)),o=l(n(26)),s=l(n(32)),d=l(n(29)),r=l(n(30)),c=l(n(31)),f=l(n(0)),h=l(n(2)),p=l(n(5)),m=l(n(341)),b=l(n(7)),C=l(n(1135)),v=["children","button","contentWidth"];function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var u=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,u)}else n=l.apply(this,arguments);return(0,r.default)(this,n)}}var O=p.default.bind(C.default),g={children:h.default.node.isRequired,boundingRef:h.default.func,contentWidth:h.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),button:h.default.element.isRequired},w={isCollapsibleMenuItem:h.default.bool},k=function(e){(0,d.default)(n,e);var t=y(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).handleRequestClose=l.handleRequestClose.bind((0,s.default)(l)),l.wrappedOnClick=l.wrappedOnClick.bind((0,s.default)(l)),l.wrapButtonClick=l.wrapButtonClick.bind((0,s.default)(l)),l.wrapChildrenOnClick=l.wrapChildrenOnClick.bind((0,s.default)(l)),l.setButtonNode=l.setButtonNode.bind((0,s.default)(l)),l.getButtonNode=l.getButtonNode.bind((0,s.default)(l)),l.state={isOpen:!1},l}return(0,o.default)(n,[{key:"getChildContext",value:function(){return{isCollapsibleMenuItem:!0}}},{key:"handleRequestClose",value:function(){this.setState({isOpen:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"wrappedOnClick",value:function(e){var t=this;return function(n){t.handleRequestClose(),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapButtonClick",value:function(e){var t=this;return function(n){t.setState({isOpen:!0}),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapChildrenOnClick",value:function(e){var t=this,n=e?[]:void 0;return f.default.Children.forEach(e,(function(e){var l=e;if(e.props.shouldCloseOnClick)l=f.default.cloneElement(e,{onClick:t.wrappedOnClick(e)});else if(e.props.children){var u=t.wrapChildrenOnClick(e.props.children);l=f.default.cloneElement(e,{children:u})}else if(e.props.subMenuItems){var i=t.wrapChildrenOnClick(e.props.subMenuItems);l=f.default.cloneElement(e,{subMenuItems:i})}n.push(l)})),n}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.button,l=e.contentWidth,a=(0,i.default)(e,v),o=f.default.cloneElement(n,{onClick:this.wrapButtonClick(n)}),s=this.context;return f.default.createElement("div",{className:O("face-up-item",s.className),ref:this.setButtonNode},f.default.createElement(m.default,(0,u.default)({},a,{onRequestClose:this.handleRequestClose,isArrowDisplayed:!0,isOpen:this.state.isOpen,targetRef:this.getButtonNode,contentWidth:l}),this.wrapChildrenOnClick(t)),o)}}]),n}(f.default.Component);k.propTypes=g,k.childContextTypes=w,k.Item=m.default.Item,k.ItemGroup=m.default.ItemGroup,k.Opts={widths:m.default.Opts.widths},k.contextType=b.default;var _=k;t.default=_},1538:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(18)),i=l(n(57)),a=l(n(24)),o=l(n(21)),s=l(n(26)),d=l(n(32)),r=l(n(29)),c=l(n(30)),f=l(n(31)),h=l(n(0)),p=l(n(2)),m=l(n(5)),b=l(n(45)),C=l(n(1196)),v=l(n(1352)),y=l(n(1135)),O=["icon","isIconOnly","isReversed","text","isSelected","isDisabled","subMenuItems","shouldCloseOnClick","boundingRef","menuWidth"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,f.default)(e);if(t){var u=(0,f.default)(this).constructor;n=Reflect.construct(l,arguments,u)}else n=l.apply(this,arguments);return(0,c.default)(this,n)}}var k=m.default.bind(y.default),_={text:p.default.string.isRequired,boundingRef:p.default.func,icon:p.default.element,isIconOnly:p.default.bool,isReversed:p.default.bool,isSelected:p.default.bool,isDisabled:p.default.bool,shouldCloseOnClick:p.default.bool,subMenuItems:p.default.arrayOf(p.default.element),onClick:p.default.func,menuWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"])},R={isCollapsibleGroupItem:p.default.bool,isCollapsibleMenuItem:p.default.bool},M=function(e){(0,r.default)(n,e);var t=w(n);function n(e){var l;return(0,o.default)(this,n),(l=t.call(this,e)).setButtonNode=l.setButtonNode.bind((0,d.default)(l)),l.getButtonNode=l.getButtonNode.bind((0,d.default)(l)),l}return(0,s.default)(n,[{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.isIconOnly,l=e.isReversed,o=e.text,s=e.isSelected,d=e.isDisabled,r=e.subMenuItems,c=(e.shouldCloseOnClick,e.boundingRef),f=e.menuWidth,p=(0,a.default)(e,O),m=this.context,y=m.isCollapsibleGroupItem,w=m.isCollapsibleMenuItem,_=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p);return w?h.default.createElement(v.default.Item,(0,u.default)({},_,{text:o,isSelected:s&&y,isDisabled:d,subMenuItems:r})):y?h.default.createElement(C.default.Button,(0,u.default)({},_,{icon:t,text:o,isDisabled:d})):r&&r.length>0?h.default.createElement(v.default,{contentWidth:f,boundingRef:c,button:h.default.createElement(b.default,(0,u.default)({},_,{icon:t,text:o,isReversed:l,isDisabled:d,onClick:this.handleButtonClick,isIconOnly:n}))},r):h.default.createElement("div",{className:k("face-up-item")},h.default.createElement(b.default,(0,u.default)({},_,{icon:t,text:o,isReversed:l,isDisabled:d,isIconOnly:n})))}}]),n}(h.default.Component);M.propTypes=_,M.defaultProps={isSelected:!1,isReversed:!1,shouldCloseOnClick:!0,isIconOnly:!1},M.contextTypes=R,M.Opts={widths:v.default.Opts.widths};var I=M;t.default=I},1541:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(18)),i=l(n(24)),a=l(n(21)),o=l(n(26)),s=l(n(32)),d=l(n(29)),r=l(n(30)),c=l(n(31)),f=l(n(0)),h=l(n(2)),p=l(n(5)),m=l(n(1196)),b=l(n(1352)),C=l(n(1135)),v=["children","onChange","selectedKeys"];function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var u=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,u)}else n=l.apply(this,arguments);return(0,r.default)(this,n)}}var O=p.default.bind(C.default),g={onChange:h.default.func,children:h.default.node.isRequired,selectedKeys:h.default.arrayOf(h.default.string)},w={isCollapsibleGroupItem:h.default.bool},k={isCollapsibleMenuItem:h.default.bool},_=function(e){(0,d.default)(n,e);var t=y(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).handleOnChange=l.handleOnChange.bind((0,s.default)(l)),l}return(0,o.default)(n,[{key:"getChildContext",value:function(){return{isCollapsibleGroupItem:!0}}},{key:"handleOnChange",value:function(e,t){if(this.props.onChange){var n=t;f.default.Children.forEach(this.props.children,(function(e,l){t===l&&(n=e.key)})),this.props.onChange(e,n)}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.onChange,l=e.selectedKeys,a=(0,i.default)(e,v),o=this.context.isCollapsibleMenuItem;if(o&&l.length)return f.default.createElement("li",{role:"none"},f.default.createElement(b.default.ItemGroup,(0,u.default)({},a,{onChange:this.handleOnChange}),t));if(o)return f.default.createElement("div",a,t);var s=O(["face-up-item",a.className]);return f.default.createElement(m.default,(0,u.default)({},a,{onChange:n,className:s,selectedKeys:l}),t)}}]),n}(f.default.Component);_.propTypes=g,_.defaultProps={selectedKeys:[]},_.childContextTypes=w,_.contextTypes=k;var R=_;t.default=R},1542:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(18)),i=l(n(24)),a=l(n(21)),o=l(n(26)),s=l(n(32)),d=l(n(29)),r=l(n(30)),c=l(n(31)),f=l(n(0)),h=l(n(2)),p=l(n(5)),m=l(n(1543)),b=l(n(1352)),C=l(n(1135)),v=["text","isSelected","isSelectable","isDisabled","onChange","shouldCloseOnClick"];function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var u=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,u)}else n=l.apply(this,arguments);return(0,r.default)(this,n)}}var O=p.default.bind(C.default),g={text:h.default.string.isRequired,isSelected:h.default.bool,onChange:h.default.func,isSelectable:h.default.bool,isDisabled:h.default.bool,shouldCloseOnClick:h.default.bool},w={isCollapsibleMenuItem:h.default.bool},k=function(e){(0,d.default)(n,e);var t=y(n);function n(e){var l;return(0,a.default)(this,n),(l=t.call(this,e)).wrappedOnChange=l.wrappedOnChange.bind((0,s.default)(l)),l}return(0,o.default)(n,[{key:"wrappedOnChange",value:function(e){this.props.onChange&&this.props.onChange(e,e.target.checked)}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.isSelected,l=e.isSelectable,a=e.isDisabled,o=e.onChange,s=(e.shouldCloseOnClick,(0,i.default)(e,v)),d=this.context.isCollapsibleMenuItem,r=O(["control",{"is-disabled":a||!l},s.className]);return d?f.default.createElement(b.default.Item,(0,u.default)({},s,{text:t,isSelected:n,isSelectable:l,isDisabled:a,onChange:o})):f.default.createElement("div",{className:O(["face-up-item"])},f.default.createElement(m.default,(0,u.default)({},s,{className:r,labelText:t,defaultChecked:n,onChange:this.wrappedOnChange,disabled:a||!l})))}}]),n}(f.default.Component);k.propTypes=g,k.defaultProps={isSelected:!1,isSelectable:!0,shouldCloseOnClick:!0},k.contextTypes=w;var _=k;t.default=_},1551:function(e,t,n){"use strict";var l=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n(0)),i=l(n(2)),a=l(n(5)),o=l(n(341)),s=l(n(7)),d=l(n(1135)),r=a.default.bind(d.default),c={isCollapsibleMenuItem:i.default.bool},f=function(e,t){var n=t.isCollapsibleMenuItem,l=u.default.useContext(s.default);return n?u.default.createElement(o.default.Divider,null):u.default.createElement("div",{className:r(["divider","face-up-item",l.className])})};f.contextTypes=c;var h=f;t.default=h}}]);