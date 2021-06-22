(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{1099:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(0),r=n.n(a),i=n(989),o=n.n(i),d=function(e){var t=e.url;return r.a.createElement(o.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-disclosure-manager",name:"terra-disclosure-manager",version:"4.41.0",url:t})}},1799:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(18),r=n.n(a),i=n(24),o=n.n(i),d=(n(0),n(338)),l=n(1099),s=["components"],c={};function m(e){var t=e.components,n=o()(e,s);return Object(d.mdx)("wrapper",r()({},c,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)(l.a,{mdxType:"Badge"}),Object(d.mdx)("h1",{id:"disclosing-content-with-a-header"},"Disclosing Content With a Header"),Object(d.mdx)("p",null,"Implementations of the DisclosureManager must render a header containing controls for the various disclosure management actions (close, back, maximize/minimize, etc.). "),Object(d.mdx)("p",null,"The ",Object(d.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," can be used to register header information to the disclosing manager. This can be usd to register a title and a collapsibleMenuView."),Object(d.mdx)("h2",{id:"disclosuremanagerheaderadapter"},"DisclosureManagerHeaderAdapter"),Object(d.mdx)("p",null,"The DisclosureManagerHeaderAdapter can be rendered by the disclosed content to inject their own component-specific contents into that header."),Object(d.mdx)("p",null,Object(d.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," Props:"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",{parentName:"tr",align:null},"Prop"),Object(d.mdx)("th",{parentName:"tr",align:null},"Is Required"),Object(d.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"title")),Object(d.mdx)("td",{parentName:"tr",align:null},"optional"),Object(d.mdx)("td",{parentName:"tr",align:null},"A string to render as the header's title. Used if the title was not provided as a parameter in the disclosure.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"collapsibleMenuView")),Object(d.mdx)("td",{parentName:"tr",align:null},"optional"),Object(d.mdx)("td",{parentName:"tr",align:null},"A CollapsibleMenuView component to render within the header.")))),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { DisclosureManagerContext, DisclosureManagerHeaderAdapter } from 'terra-disclosure-manager';\nimport Button from 'terra-button';\nimport CollapsibleMenuView from 'terra-collapsible-menu-view';\n\nconst DisclosedComponent = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  return (\n    <React.Fragment>\n     <DisclosureManagerHeaderAdapter\n       title=\"My Disclosure Component\"\n       collapsibleMenuView={<CollapsibleMenuView />}\n     />\n      <Button\n        text=\"Close Modal\"\n        onClick={() => {\n          disclosureManager.closeDisclosure();\n        }}\n      />\n    </React.Fragment>\n  );\n};\n")),Object(d.mdx)("p",null,"This will register the header information on mount."),Object(d.mdx)("h2",{id:"providing-a-title-on-disclose"},"Providing a Title on Disclose"),Object(d.mdx)("p",null,"It has been observed that there can be a 'pop-in' affect with the header render in slow domains and using the ",Object(d.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),". It is recommended to provide a ",Object(d.mdx)("inlineCode",{parentName:"p"},"title")," parameter to the disclose function that will render the disclosed content to ensure the header is rendered immediately. This will render the header with the title, and then the ",Object(d.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," can be used to add additional button content into the header. While disclosing with a title parameter, the disclose title will have priority, even if a title value is provided through the ",Object(d.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter"),"."),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { DisclosureManagerContext } from 'terra-disclosure-manager';\nimport Button from 'terra-button';\nconst DisclosingComponent = () => {\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n  return (\n    <Button\n      text=\"Launch Modal\"\n      onClick={() => {\n        disclosureManager.disclose({\n          preferredType: 'modal',\n          content: {\n            key: 'MY-MODAL-DISCLOSURE',\n            title: 'MY-MODAL-DISCLOSURE',\n            component: <MyDisclosureComponent />,\n          }\n        });\n      }}\n    />\n  );\n};\n")))}m.isMDXComponent=!0},989:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),r=d(n(2)),i=d(n(5)),o=d(n(990));function d(e){return e&&e.__esModule?e:{default:e}}var l=i.default.bind(o.default),s={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,i=e.version,o=a.default.createElement("a",{className:l("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},a.default.createElement("span",{className:l("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(i))),d=t?a.default.createElement("a",{className:l("badge"),href:t},a.default.createElement("span",{className:l("badge-name")},"github"),a.default.createElement("span",{className:l("badge-version")},"source")):void 0;return a.default.createElement("div",{className:l("badge-container")},o,d)};c.propTypes=s;var m=c;t.default=m},990:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}}}]);