(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{1003:function(e,t,a){"use strict";a.r(t),t.default={"date-time-picker":"DateTimePicker-module__date-time-picker___t85_Q","date-facade":"DateTimePicker-module__date-facade___ACRUe","time-facade":"DateTimePicker-module__time-facade___gAYyr"}},1004:function(e,t,a){"use strict";var i=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(21)),l=i(a(26)),u=i(a(32)),s=i(a(29)),o=i(a(30)),r=i(a(31)),d=i(a(0)),f=i(a(2)),c=i(a(5)),h=i(a(219)),m=i(a(45)),p=a(9),T=i(a(992)),v=i(a(1005));function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=(0,r.default)(e);if(t){var n=(0,r.default)(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return(0,o.default)(this,a)}}var D=c.default.bind(v.default),C={ambiguousDateTime:f.default.string,intl:f.default.shape({formatMessage:f.default.func}).isRequired,isOpen:f.default.bool.isRequired,isOffsetButtonHidden:f.default.bool.isRequired,onBlur:f.default.func,onDaylightSavingButtonClick:f.default.func.isRequired,onFocus:f.default.func,onStandardTimeButtonClick:f.default.func.isRequired,onOffsetButtonClick:f.default.func.isRequired,onRequestClose:f.default.func.isRequired,disabled:f.default.bool,initialTimeZone:f.default.string},y=function(e){(0,s.default)(a,e);var t=g(a);function a(e){var i;return(0,n.default)(this,a),(i=t.call(this,e)).state={offsetDisplay:"",offsetLongDisplay:""},i.handleDaylightSavingButtonClick=i.handleDaylightSavingButtonClick.bind((0,u.default)(i)),i.handleStandardTimeButtonClick=i.handleStandardTimeButtonClick.bind((0,u.default)(i)),i}return(0,l.default)(a,[{key:"handleDaylightSavingButtonClick",value:function(e){this.setState({offsetDisplay:T.default.getDaylightSavingTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone),offsetLongDisplay:T.default.getDaylightSavingExpandedTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone)}),this.props.onDaylightSavingButtonClick&&this.props.onDaylightSavingButtonClick(e)}},{key:"handleStandardTimeButtonClick",value:function(e){this.setState({offsetDisplay:T.default.getStandardTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone),offsetLongDisplay:T.default.getStandardExpandedTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone)}),this.props.onStandardTimeButtonClick&&this.props.onStandardTimeButtonClick(e)}},{key:"render",value:function(){this.props.isOffsetButtonHidden&&(this.state.offsetDisplay="");var e=D(["button-offset",{"button-offset-hidden":this.props.isOffsetButtonHidden||!this.state.offsetDisplay}]),t=this.props.intl,a=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.title"}),i=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.message"}),n=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.button.daylightSaving"}),l=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.button.standardTime"});return d.default.createElement(d.default.Fragment,null,d.default.createElement(h.default,{classNameModal:D("time-clarification"),ariaLabel:"Time Clarification",isOpen:this.props.isOpen,onRequestClose:this.props.onRequestClose,closeOnEsc:!1,closeOnOutsideClick:!1,zIndex:"9000"},d.default.createElement("div",null,d.default.createElement("header",{className:D("header")},d.default.createElement("h1",{className:D("title")},a)),d.default.createElement("div",{className:D("body")},d.default.createElement("p",null,i)),d.default.createElement("div",{className:D("buttons")},d.default.createElement(m.default,{text:n,onClick:this.handleDaylightSavingButtonClick,variant:m.default.Opts.Variants.EMPHASIS,className:D("button-daylight")}),d.default.createElement(m.default,{text:l,onClick:this.handleStandardTimeButtonClick,variant:m.default.Opts.Variants.EMPHASIS,className:D("button-standard")})))),d.default.createElement("div",{className:D("offset-button-container")},d.default.createElement(m.default,{title:this.state.offsetLongDisplay,"aria-label":this.state.offsetLongDisplay,className:e,onBlur:this.props.onBlur,onFocus:this.props.onFocus,onClick:this.props.onOffsetButtonClick,text:this.state.offsetDisplay,isCompact:!0,isDisabled:this.props.disabled})))}}]),a}(d.default.Component);y.propTypes=C,y.defaultProps={disabled:!1};var b=(0,p.injectIntl)(y);t.default=b},1005:function(e,t,a){"use strict";a.r(t),t.default={"clinical-lowlight-theme":"_TimeClarification-module__clinical-lowlight-theme___1kLps","orion-fusion-theme":"_TimeClarification-module__orion-fusion-theme___3EW1o","time-clarification":"_TimeClarification-module__time-clarification___VPr_D",header:"_TimeClarification-module__header___254NA",title:"_TimeClarification-module__title___2v1ZU",body:"_TimeClarification-module__body___ld9Co",buttons:"_TimeClarification-module__buttons___2fcXU","button-daylight":"_TimeClarification-module__button-daylight___F7yXG","button-standard":"_TimeClarification-module__button-standard___3pAK6","button-offset":"_TimeClarification-module__button-offset___26q6n","button-offset-hidden":"_TimeClarification-module__button-offset-hidden___3SU7e","offset-button-container":"_TimeClarification-module__offset-button-container___2vrsS"}},1012:function(e,t,a){"use strict";var i=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(18)),l=i(a(21)),u=i(a(26)),s=i(a(32)),o=i(a(29)),r=i(a(30)),d=i(a(31)),f=i(a(0)),c=i(a(2)),h=i(a(999)),m=i(a(992));function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=(0,d.default)(e);if(t){var n=(0,d.default)(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return(0,r.default)(this,a)}}var T={value:c.default.string,initialTimeZone:c.default.string},v=function(e){(0,o.default)(a,e);var t=p(a);function a(e){var i;(0,l.default)(this,a),i=t.call(this,e);var n=e.value,u=m.default.createSafeDate(n,e.initialTimeZone);return u&&u.isValid()&&(n=u.format()),i.state={dateTime:n},i.handleDateTimeChange=i.handleDateTimeChange.bind((0,s.default)(i)),i}return(0,u.default)(a,[{key:"handleDateTimeChange",value:function(e,t){this.setState({dateTime:t})}},{key:"render",value:function(){return f.default.createElement("div",null,f.default.createElement("p",null,"Selected ISO Date Time:",f.default.createElement("span",{"data-date-time-value":!0},this.state.dateTime)),f.default.createElement(h.default,(0,n.default)({name:"date-time-picker-example",onChange:this.handleDateTimeChange,initialTimeZone:this.props.initialTimeZone},this.props)))}}]),a}(f.default.Component);v.propTypes=T,v.defaultProps={value:""};var g=v;t.default=g},1955:function(e,t,a){"use strict";var i=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(0)),l=i(a(1006)),u=i(a(1012)),s=function(e){var t=(0,l.default)(e);if(t.isSame((0,l.default)(),"day"))return!0;if(t&&t.isValid()){var a=t.day();return 0!==a&&6!==a}return!0},o=function(){return n.default.createElement(u.default,{filterDate:s,value:"2017-08-15"})};t.default=o},992:function(e,t,a){"use strict";var i=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(21)),l=i(a(26)),u=i(a(1006)),s=i(a(1001)),o=i(a(1014)),r=function(){function e(){(0,n.default)(this,e)}return(0,l.default)(e,null,[{key:"hasTime",value:function(t,a){if(!e.createSafeDate(t,a))return!1;var i="";return t.indexOf(" ")>0&&(i=t.split(" ")[1]),t.indexOf("T")>0&&(i=t.split("T")[1]),i.length>0}},{key:"syncDateTime",value:function(t,a,i,n){var l=(0,u.default)(a);if(t&&t.isValid()){var s=t.clone();return l.isValid()&&s.year(l.get("year")).month(l.get("month")).date(l.get("date")),i&&(!n&&5===i.length||n&&8===i.length)&&(s=e.updateTime(s,i,n)),s}if(l.isValid()){var o=l.clone();return i&&(!n&&5===i.length||n&&8===i.length)&&(o=e.updateTime(o,i,n)),o}return t}},{key:"updateTime",value:function(t,a,i){if(!t||!t.isValid())return null;var n=t.clone(),l=i?"HH:mm:ss":"HH:mm",s=(0,u.default)(a,l,!0),o=t.tz()||e.getLocalTimeZone();if(s.isValid()){var r=n.format("YYYY-MM-DD").concat(" ").concat(s.format(l));return u.default.tz(r,o)}return t}},{key:"getTime",value:function(t,a,i){var n=a?"HH:mm:ss":"HH:mm",l=e.createSafeDate(t,i);return s.default.formatMomentDate(l,n)}},{key:"isValidDateTime",value:function(t,a,i,n){return s.default.isValidDate(t,i)&&e.isValidTime(a,n)}},{key:"isValidTime",value:function(e,t){var a=t?"HH:mm:ss":"HH:mm";return(0,u.default)(e,a,!0).isValid()}},{key:"checkAmbiguousTime",value:function(e){if(!e||!e.isValid())return!1;var t=u.default.tz(e.format(),e.tz()),a=t.clone(),i=t.clone();a.add(1,"hour"),i.subtract(1,"hour");var n=t.isDST()&&!a.isDST(),l=!t.isDST()&&i.isDST();return n||l}},{key:"getDaylightSavingTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);return i.isValid()?(i.subtract(1,"days"),i.tz(i.tz()).format("z")):""}},{key:"getDaylightSavingExpandedTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);if(!i.isValid())return"";i.subtract(1,"days");var n=i.tz(),l=i.tz(n);return u.default.tz.zone(n).name+l.format(" z Z")}},{key:"getStandardTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);return i.isValid()?(i.add(1,"days"),i.tz(i.tz()).format("z")):""}},{key:"getStandardExpandedTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);if(!i.isValid())return"";i.add(1,"days");var n=i.tz(),l=i.tz(n);return u.default.tz.zone(n).name+l.format(" z Z")}},{key:"convertDateTimeStringToMomentObject",value:function(t,a,i,n,l){var u=e.createSafeDate(s.default.convertToISO8601(t,i),l);return e.updateTime(u,a,n)}},{key:"createSafeDate",value:function(t,a){if(t){var i=a&&u.default.tz.zone(a)?u.default.tz(t,a):u.default.tz(t,e.getLocalTimeZone());return i.isValid()?i:void 0}}},{key:"isMomentObject",value:function(e){return u.default.isMoment(e)}},{key:"getLocalTimeZone",value:function(){return u.default.tz.guess()}},{key:"checkIfTimeZoneIsValid",value:function(t){return u.default.tz.zone(t)?t:e.getLocalTimeZone()}}]),e}();r.FORMAT_12_HOUR=o.default.FORMAT_12_HOUR,r.FORMAT_24_HOUR=o.default.FORMAT_24_HOUR;var d=r;t.default=d},995:function(e,t){var a,i,n=e.exports={};function l(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function s(e){if(a===setTimeout)return setTimeout(e,0);if((a===l||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:l}catch(e){a=l}try{i="function"==typeof clearTimeout?clearTimeout:u}catch(e){i=u}}();var o,r=[],d=!1,f=-1;function c(){d&&o&&(d=!1,o.length?r=o.concat(r):f=-1,r.length&&h())}function h(){if(!d){var e=s(c);d=!0;for(var t=r.length;t;){for(o=r,r=[];++f<t;)o&&o[f].run();f=-1,t=r.length}o=null,d=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===u||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function p(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];r.push(new m(e,t)),1!==r.length||d||s(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},999:function(e,t,a){"use strict";var i=a(6),n=a(12);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(a(18)),u=i(a(24)),s=i(a(21)),o=i(a(26)),r=i(a(32)),d=i(a(29)),f=i(a(30)),c=i(a(31)),h=i(a(0)),m=a(9),p=i(a(2)),T=i(a(5)),v=i(a(7)),g=i(a(998)),D=i(a(1007)),C=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=_(t);if(a&&a.has(e))return a.get(e);var i={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var s=l?Object.getOwnPropertyDescriptor(e,u):null;s&&(s.get||s.set)?Object.defineProperty(i,u,s):i[u]=e[u]}i.default=e,a&&a.set(e,i);return i}(a(22)),y=i(a(1001)),b=i(a(1003)),k=i(a(992)),O=i(a(1004)),S=["dateInputAttributes","disabled","excludeDates","filterDate","includeDates","initialTimeZone","isIncomplete","isInvalid","isInvalidMeridiem","onBlur","onChange","onChangeRaw","onClickOutside","onRequestClose","onFocus","onSelect","maxDate","minDate","name","required","showSeconds","timeInputAttributes","value","timeVariant"];function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(_=function(e){return e?a:t})(e)}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return(0,f.default)(this,a)}}var B=T.default.bind(b.default),w={dateInputAttributes:p.default.object,disabled:p.default.bool,excludeDates:p.default.arrayOf(p.default.string),filterDate:p.default.func,includeDates:p.default.arrayOf(p.default.string),initialTimeZone:p.default.string,intl:p.default.shape({locale:p.default.string}).isRequired,isIncomplete:p.default.bool,isInvalid:p.default.bool,isInvalidMeridiem:p.default.bool,maxDate:p.default.string,minDate:p.default.string,name:p.default.string.isRequired,onBlur:p.default.func,onChange:p.default.func,onChangeRaw:p.default.func,onClickOutside:p.default.func,onRequestClose:p.default.func,onFocus:p.default.func,onSelect:p.default.func,required:p.default.bool,showSeconds:p.default.bool,timeInputAttributes:p.default.object,value:p.default.string,timeVariant:p.default.oneOf([k.default.FORMAT_12_HOUR,k.default.FORMAT_24_HOUR])},R={dateInputAttributes:void 0,disabled:!1,excludeDates:void 0,filterDate:void 0,includeDates:void 0,isIncomplete:!1,isInvalid:!1,isInvalidMeridiem:!1,maxDate:"2100-12-31",minDate:"1900-01-01",onBlur:void 0,onChange:void 0,onChangeRaw:void 0,onClickOutside:void 0,onFocus:void 0,onSelect:void 0,required:!1,showSeconds:!1,timeInputAttributes:void 0,value:void 0,timeVariant:k.default.FORMAT_24_HOUR,initialTimeZone:k.default.getLocalTimeZone()},M=function(e){(0,d.default)(a,e);var t=V(a);function a(e){var i;return(0,s.default)(this,a),(i=t.call(this,e)).initialTimeZone=k.default.checkIfTimeZoneIsValid(e.initialTimeZone),i.state={dateTime:k.default.createSafeDate(e.value,i.initialTimeZone),isAmbiguousTime:!1,isTimeClarificationOpen:!1,dateFormat:y.default.getFormatByLocale(e.intl.locale)},i.dateValue=y.default.formatMomentDate(i.state.dateTime,i.state.dateFormat)||"",i.timeValue=k.default.hasTime(i.props.value,i.initialTimeZone)?k.default.getTime(i.props.value,i.props.showSeconds,i.initialTimeZone):"",i.isDefaultDateTimeAcceptable=!0,i.wasOffsetButtonClicked=!1,i.handleDateChange=i.handleDateChange.bind((0,r.default)(i)),i.handleDateChangeRaw=i.handleDateChangeRaw.bind((0,r.default)(i)),i.handleTimeChange=i.handleTimeChange.bind((0,r.default)(i)),i.handleOnSelect=i.handleOnSelect.bind((0,r.default)(i)),i.handleOnDateBlur=i.handleOnDateBlur.bind((0,r.default)(i)),i.handleOnTimeBlur=i.handleOnTimeBlur.bind((0,r.default)(i)),i.handleBlur=i.handleBlur.bind((0,r.default)(i)),i.handleDaylightSavingButtonClick=i.handleDaylightSavingButtonClick.bind((0,r.default)(i)),i.handleStandardTimeButtonClick=i.handleStandardTimeButtonClick.bind((0,r.default)(i)),i.handleOnDateInputFocus=i.handleOnDateInputFocus.bind((0,r.default)(i)),i.handleOnTimeInputFocus=i.handleOnTimeInputFocus.bind((0,r.default)(i)),i.handleFocus=i.handleFocus.bind((0,r.default)(i)),i.handleOnCalendarButtonClick=i.handleOnCalendarButtonClick.bind((0,r.default)(i)),i.handleOffsetButtonClick=i.handleOffsetButtonClick.bind((0,r.default)(i)),i.handleOnRequestClose=i.handleOnRequestClose.bind((0,r.default)(i)),i.dateTimePickerContainer=h.default.createRef(),i.containerHasFocus=!1,i}return(0,o.default)(a,[{key:"componentDidMount",value:function(){this.isDefaultDateAcceptable=this.validateDefaultDate()}},{key:"componentDidUpdate",value:function(){if(this.state.dateTime&&k.default.isValidTime(this.timeValue,this.props.showSeconds)){var e=k.default.getTime(this.state.dateTime.format(),this.props.showSeconds,this.initialTimeZone);this.timeValue!==e&&(this.timeValue=e,this.forceUpdate())}}},{key:"handleOnSelect",value:function(e,t){this.dateValue=y.default.formatISODate(t,this.state.dateFormat);var a=this.state.dateTime?this.state.dateTime.clone():null,i=k.default.syncDateTime(a,t,this.timeValue,this.props.showSeconds);a&&a.format()===i.format()||this.checkAmbiguousTime(i),this.props.onSelect&&this.props.onSelect(e,i.format())}},{key:"handleOnDateBlur",value:function(e){var t=this,a=e.relatedTarget?e.relatedTarget:document.activeElement;if(!this.dateTimePickerContainer.current.contains(a)){var i=k.default.isValidDateTime(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds)?this.state.dateTime:null;this.checkAmbiguousTime(i,(function(){t.state.isAmbiguousTime&&t.state.isTimeClarificationOpen||t.handleBlur(e,t.state.dateTime)}))}}},{key:"handleOnTimeBlur",value:function(e){var t,a=this,i=e.relatedTarget?e.relatedTarget:document.activeElement;this.dateTimePickerContainer.current.contains(i)||(k.default.isValidDateTime(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds)&&(t=k.default.updateTime(this.state.dateTime,this.timeValue,this.props.showSeconds)),this.checkAmbiguousTime(t,(function(){a.state.isAmbiguousTime&&a.state.isTimeClarificationOpen||a.handleBlur(e,a.state.dateTime)})))}},{key:"handleBlur",value:function(e,t){if(this.props.onBlur){var a=this.getMetadata(t);this.props.onBlur(e,a)}this.containerHasFocus=!1}},{key:"handleDateChange",value:function(e,t){var a,i=this;"change"===e.type&&(this.dateValue=e.target.value);var n=y.default.formatISODate(t,"YYYY-MM-DD"),l=y.default.isValidDate(n,"YYYY-MM-DD"),u=k.default.isValidTime(this.timeValue,this.props.showSeconds);if(l){var s=this.state.dateTime?this.state.dateTime.clone():k.default.createSafeDate(n,this.initialTimeZone);a=k.default.syncDateTime(s,t,this.timeValue,this.props.showSeconds),u&&(this.timeValue=k.default.getTime(a.format(),this.props.showSeconds,this.initialTimeZone))}l&&u||""===this.dateValue&&""===this.timeValue?this.handleChange(e,a):this.setState({dateTime:a}),l&&setTimeout((function(){i.hourInput&&i.hourInput.focus()}),100)}},{key:"handleDateChangeRaw",value:function(e,t){this.dateValue=e.target.value,this.handleChangeRaw(e,t)}},{key:"handleTimeChange",value:function(e,t){this.timeValue=t;var a=y.default.isValidDate(this.dateValue,this.state.dateFormat)&&this.isDateTimeAcceptable(k.default.convertDateTimeStringToMomentObject(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds,this.initialTimeZone)),i=k.default.isValidTime(this.timeValue,this.props.showSeconds),n=this.state.dateTime?this.state.dateTime.clone():null;if(a&&i){var l=k.default.updateTime(n,t,this.props.showSeconds);e.keyCode===C.KEY_DOWN&&n&&l&&n.format()===l.format()&&l.subtract(1,"hours");var u=this.timeValue;l&&(u=k.default.getTime(l.format(),this.props.showSeconds,this.initialTimeZone)),this.handleChangeRaw(e,u),this.handleChange(e,l)}else if(""===this.dateValue&&""===this.timeValue)this.handleChangeRaw(e,this.timeValue),this.handleChange(e,null);else{if(!a&&i){var s=k.default.updateTime(n,t,this.props.showSeconds);this.setState({dateTime:s})}this.handleChangeRaw(e,t)}}},{key:"handleChange",value:function(e,t){if(this.setState({dateTime:t}),this.props.onChange&&(this.state.isAmbiguousTime||!k.default.checkAmbiguousTime(t))){var a=this.getMetadata(t);this.props.onChange(e,t&&t.isValid()?t.format():"",a)}}},{key:"handleChangeRaw",value:function(e,t){if(this.props.onChangeRaw){var a=this.getMetadata(t);this.props.onChangeRaw(e,t,a)}}},{key:"handleOnDateInputFocus",value:function(e){this.handleOnInputFocus(e)}},{key:"handleOnTimeInputFocus",value:function(e){this.handleOnInputFocus(e)}},{key:"handleOnInputFocus",value:function(e){this.handleFocus(e),this.isDefaultDateAcceptable||(this.dateValue="",this.timeValue="",this.handleChange(e,null),this.isDefaultDateAcceptable=!0)}},{key:"handleFocus",value:function(e){!this.props.onFocus||this.containerHasFocus||this.dateTimePickerContainer.current.contains(e.relatedTarget)||(this.props.onFocus(e),this.containerHasFocus=!0)}},{key:"handleOnCalendarButtonClick",value:function(e){this.isDefaultDateAcceptable||this.validateDefaultDate()?this.isDefaultDateAcceptable=!0:(this.dateValue="",this.timeValue="",this.handleChange(e,null))}},{key:"handleDaylightSavingButtonClick",value:function(e){this.setState({isTimeClarificationOpen:!1});var t=this.state.dateTime.clone();if(t.isDST()){if(this.props.onChange&&!this.wasOffsetButtonClicked){var a=this.getMetadata(t);this.props.onChange(e,t&&t.isValid()?t.format():"",a)}}else if(t.subtract(1,"hour"),this.setState({dateTime:t}),this.props.onChange){var i=this.getMetadata(t);this.props.onChange(e,t&&t.isValid()?t.format():"",i)}this.wasOffsetButtonClicked||this.handleBlur(e,t),this.wasOffsetButtonClicked=!1}},{key:"handleStandardTimeButtonClick",value:function(e){this.setState({isTimeClarificationOpen:!1});var t=this.state.dateTime.clone();if(t.isDST()){if(t.add(1,"hour"),this.setState({dateTime:t}),this.props.onChange){var a=this.getMetadata(t);this.props.onChange(e,t&&t.isValid()?t.format():"",a)}}else if(this.props.onChange&&!this.wasOffsetButtonClicked){var i=this.getMetadata(t);this.props.onChange(e,t&&t.isValid()?t.format():"",i)}this.wasOffsetButtonClicked||this.handleBlur(e,t),this.wasOffsetButtonClicked=!1}},{key:"handleOffsetButtonClick",value:function(){this.wasOffsetButtonClicked=!0,this.setState((function(e){return{isTimeClarificationOpen:!e.isTimeClarificationOpen}}))}},{key:"handleOnRequestClose",value:function(){this.setState({isTimeClarificationOpen:!1})}},{key:"getMetadata",value:function(e){var t=e&&k.default.isMomentObject(e)?e.clone():null;if(y.default.isValidDate(this.dateValue,this.state.dateFormat)){var a=k.default.convertDateTimeStringToMomentObject(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds,this.initialTimeZone);a&&!a.isSame(t,"day")&&(t=a)}var i="",n=k.default.isValidDateTime(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds);n&&t&&(i=t.format());var l=this.timeValue||"";i&&(l=k.default.getTime(i,this.props.showSeconds,this.initialTimeZone));var u=!1,s="".concat(this.dateValue?this.dateValue:""," ").concat(l).trim();(""===s||n&&t&&this.isDateTimeAcceptable(t))&&(u=!0);var o=!1;return n&&t&&(o=k.default.checkAmbiguousTime(t)),{iSO:i,inputValue:s,dateValue:this.dateValue||"",timeValue:l,isAmbiguousHour:o,isCompleteValue:n,isValidValue:u}}},{key:"checkAmbiguousTime",value:function(e,t){if(!this.state.isTimeClarificationOpen){var a=!1,i=this.state.isAmbiguousTime;if(e&&e.isValid()){var n=e.clone();a=k.default.checkAmbiguousTime(n)}this.setState({isAmbiguousTime:a,isTimeClarificationOpen:a&&!i},t)}}},{key:"isDateTimeAcceptable",value:function(e){var t=!0;return y.default.isDateOutOfRange(e,k.default.createSafeDate(y.default.getMinDate(this.props.minDate),this.initialTimeZone),k.default.createSafeDate(y.default.getMaxDate(this.props.maxDate),this.initialTimeZone))&&(t=!1),y.default.isDateExcluded(e,this.props.excludeDates)&&(t=!1),t}},{key:"validateDefaultDate",value:function(){return this.isDateTimeAcceptable(this.state.dateTime)}},{key:"renderTimeClarification",value:function(){return h.default.createElement(O.default,{ambiguousDateTime:this.state.dateTime.format(),disabled:this.props.disabled,isOpen:this.state.isTimeClarificationOpen,isOffsetButtonHidden:!this.state.isAmbiguousTime,onDaylightSavingButtonClick:this.handleDaylightSavingButtonClick,onStandardTimeButtonClick:this.handleStandardTimeButtonClick,onOffsetButtonClick:this.handleOffsetButtonClick,onRequestClose:this.handleOnRequestClose,onBlur:this.handleOnTimeBlur,onFocus:this.handleFocus,initialTimeZone:this.initialTimeZone})}},{key:"render",value:function(){var e=this,t=this.props,a=t.dateInputAttributes,i=t.disabled,n=t.excludeDates,s=t.filterDate,o=t.includeDates,r=(t.initialTimeZone,t.isIncomplete),d=t.isInvalid,f=t.isInvalidMeridiem,c=(t.onBlur,t.onChange,t.onChangeRaw,t.onClickOutside),m=t.onRequestClose,p=(t.onFocus,t.onSelect,t.maxDate),T=t.minDate,v=t.name,C=t.required,b=t.showSeconds,k=t.timeInputAttributes,O=(t.value,t.timeVariant),_=(0,u.default)(t,S),V=this.state.dateTime?this.state.dateTime.clone():null,w=y.default.formatMomentDate(V,"YYYY-MM-DD"),R=this.context;return h.default.createElement("div",(0,l.default)({},_,{className:B("date-time-picker",R.className),ref:this.dateTimePickerContainer}),h.default.createElement("input",{"data-terra-date-time-input-hidden":!0,type:"hidden",name:v,value:V&&V.isValid()?V.format():""}),h.default.createElement("div",{className:B("date-facade")},h.default.createElement(g.default,{onCalendarButtonClick:this.handleOnCalendarButtonClick,onChange:this.handleDateChange,onChangeRaw:this.handleDateChangeRaw,onSelect:this.handleOnSelect,onClickOutside:c,onRequestClose:m,onBlur:this.handleOnDateBlur,onFocus:this.handleOnDateInputFocus,excludeDates:n,filterDate:s,includeDates:o,inputAttributes:a,maxDate:y.default.getMaxDate(p),minDate:y.default.getMinDate(T),selectedDate:w,name:"input",disabled:i,disableButtonFocusOnClose:!0,isIncomplete:r,isInvalid:d,required:C,initialTimeZone:this.initialTimeZone})),h.default.createElement("div",{className:B("time-facade")},h.default.createElement(D.default,{onBlur:this.handleOnTimeBlur,onChange:this.handleTimeChange,onFocus:this.handleOnTimeInputFocus,inputAttributes:k,name:"input",value:this.timeValue,disabled:i,variant:O,refCallback:function(t){e.hourInput=t},showSeconds:b,isIncomplete:r,isInvalid:d,isInvalidMeridiem:f,required:C}),this.state.isAmbiguousTime?this.renderTimeClarification():null))}}]),a}(h.default.Component);M.propTypes=w,M.defaultProps=R,M.contextType=v.default;var F=(0,m.injectIntl)(M);t.default=F}}]);