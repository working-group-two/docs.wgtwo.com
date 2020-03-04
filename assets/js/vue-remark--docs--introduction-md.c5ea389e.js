(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{211:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},244:function(t,e,n){"use strict";n.r(e);var o=n(5),r=n(211),s=n(0);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var p={VueRemarkRoot:r.a},u=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===a(p[t])&&"function"==typeof p[t].render?e[t]=p[t]:n[t]=function(){return p[t]}}))},i=s.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",l={excerpt:null,title:"Introduction",topic:"introduction",type:"explanation"};var v=function(t){t.options[c]&&(t.options[c]=l),s.a.util.defineReactive(t.options,c,l),t.options.computed=i.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},_=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("h1",{attrs:{id:"working-group-two-apis"}},[n("a",{attrs:{href:"#working-group-two-apis","aria-hidden":"true"}},[t._v("#")]),t._v("Working Group Two APIs")]),n("p",[t._v("Our APIs are hosted at "),n("a",{attrs:{href:"https://api.wgtwo.com",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("https://api.wgtwo.com")])]),n("h2",{attrs:{id:"resources"}},[n("a",{attrs:{href:"#resources","aria-hidden":"true"}},[t._v("#")]),t._v("Resources")]),n("table",[n("thead",[n("tr",[n("th"),n("th")])]),n("tbody",[n("tr",[n("td",[t._v("protobufs")]),n("td",[n("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis/tree/master/wgtwo",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("github.com/working-group-two/wgtwoapis › wgtwo")])])]),n("tr",[n("td",[t._v("OpenAPI")]),n("td",[n("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis/tree/master/openapi",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("github.com/working-group-two/wgtwoapis › openapi")])])])])]),n("p",[t._v("Sample CLI  app written in Kotlin: "),n("a",{attrs:{href:"https://github.com/working-group-two/wgtwo-kotlin-code-snippets",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("wgtwo-kotlin-code-snippets")])]),n("h2",{attrs:{id:"credentials"}},[n("a",{attrs:{href:"#credentials","aria-hidden":"true"}},[t._v("#")]),t._v("Credentials")]),n("p",[t._v("API keys are managed via "),n("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("https://console.wgtwo.com")])]),n("h2",{attrs:{id:"dependency"}},[n("a",{attrs:{href:"#dependency","aria-hidden":"true"}},[t._v("#")]),t._v("Dependency")]),n("p",[t._v("Working Group Two's public API can be found at "),n("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("https://github.com/working-group-two/wgtwoapis")])]),n("JitpackDependency"),n("h2",{attrs:{id:"grpc"}},[n("a",{attrs:{href:"#grpc","aria-hidden":"true"}},[t._v("#")]),t._v("gRPC")]),n("h3",{attrs:{id:"well-known-types"}},[n("a",{attrs:{href:"#well-known-types","aria-hidden":"true"}},[t._v("#")]),t._v("Well-Known Types")]),n("p",[t._v("We do use "),n("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/reference/google.protobuf",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Google's Well-Known Types")]),t._v(" in our gRPC APIs.")]),n("p",[t._v("They may be managed using the following dependency:\n"),n("ClientDependencies",{attrs:{clients:["protobuf-java-util"]}})],1),n("h3",{attrs:{id:"phone-numbers"}},[n("a",{attrs:{href:"#phone-numbers","aria-hidden":"true"}},[t._v("#")]),t._v("Phone Numbers")]),n("p",[t._v("All APIs using "),n("code",{pre:!0},[t._v("wgtwo.common.v0.PhoneNumber")]),t._v(" expects a phone number formatted as E.164 with a leading plus sign.")]),n("p",[t._v("You may include the following dependency to manage this:\n"),n("ClientDependencies",{attrs:{clients:["phonenumber-utils"]}})],1),n("h4",{attrs:{id:"example"}},[n("a",{attrs:{href:"#example","aria-hidden":"true"}},[t._v("#")]),t._v("Example")]),n("pre",{pre:!0,attrs:{class:"language-kotlin"}},[n("code",{pre:!0,attrs:{class:"language-kotlin"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("google"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("i18n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("phonenumbers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Phonenumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumber\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("phonenumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumbers\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" PhoneNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toPhoneNumberProto")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PhoneNumbers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toPhoneNumberProto")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" phoneNumber"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PhoneNumber "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PhoneNumbers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+47 xxx xx xxx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" request"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UserTokensProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ListUserTokenRequest "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UserTokensProto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ListUserTokenRequest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPhoneNumber")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("phoneNumber"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("toPhoneNumberProto")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])])],1)}),[],!1,null,null,null);"function"==typeof u&&u(_),"function"==typeof v&&v(_);e.default=_.exports}}]);