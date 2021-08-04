(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6g7Y":function(t,e,o){"use strict";o.r(e);var r=o("KHd+"),n=o("UQSp"),a=o("Kw5r");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},p=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===i(s[t])&&"function"==typeof s[t].render||"function"==typeof s[t]&&"function"==typeof s[t].options.render?e[t]=s[t]:o[t]=function(){return s[t]}}))},c=a.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",l={excerpt:null,title:"API structure and libraries",topic:"intro",type:"reference",typeOrder:2,roles:["THIRD_PARTY_DEVELOPER","OPERATOR"]};var v=function(t){t.options[u]&&(t.options[u]=l),a.a.util.defineReactive(t.options,u,l),t.options.computed=c.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},d=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("h1",{attrs:{id:"api-structure-and-libraries"}},[o("a",{attrs:{href:"#api-structure-and-libraries","aria-hidden":"true"}},[t._v("#")]),t._v("API Structure and Libraries")]),o("h2",{attrs:{id:"grpc"}},[o("a",{attrs:{href:"#grpc","aria-hidden":"true"}},[t._v("#")]),t._v("gRPC")]),o("p",[t._v("We use "),o("a",{attrs:{href:"https://www.grpc.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("gRPC")]),t._v(" as our messaging protocol for all our APIs, except the "),o("code",{pre:!0},[t._v("Subscription API")]),t._v(" and\n"),o("code",{pre:!0},[t._v("Provision API")]),t._v(".")]),o("p",[t._v("Our "),o("code",{pre:!0},[t._v(".proto")]),t._v(" files can be found at "),o("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("github.com/working-group-two/wgtwoapis")]),t._v("\nunder the "),o("code",{pre:!0},[t._v("wgtwo")]),t._v(" folder.")]),o("h2",{attrs:{id:"rest-like"}},[o("a",{attrs:{href:"#rest-like","aria-hidden":"true"}},[t._v("#")]),t._v("REST-like")]),o("p",[t._v("The "),o("code",{pre:!0},[t._v("Subscription API")]),t._v(" and "),o("code",{pre:!0},[t._v("Provision API")]),t._v(" has a REST-like API.")]),o("p",[t._v("Our OpenAPI specification can be found at "),o("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("github.com/working-group-two/wgtwoapis")]),t._v("\nunder the "),o("code",{pre:!0},[t._v("openapi")]),t._v(" folder.")]),o("h2",{attrs:{id:"libraries"}},[o("a",{attrs:{href:"#libraries","aria-hidden":"true"}},[t._v("#")]),t._v("Libraries")]),o("p",[t._v("Using our "),o("code",{pre:!0},[t._v(".proto")]),t._v(" files and OpenAPI specification, you may generate code for most languages.")]),o("p",[t._v("In addition, we offer generated code for Go and Java.")]),o("h3",{attrs:{id:"go"}},[o("a",{attrs:{href:"#go","aria-hidden":"true"}},[t._v("#")]),t._v("Go")]),o("p",[t._v("Add import for the API you would like to use. Path is the same as its "),o("code",{pre:!0},[t._v(".proto")]),t._v(" file:")]),o("pre",{pre:!0,attrs:{class:"language-go"}},[o("code",{pre:!0,attrs:{class:"language-go"}},[o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\twgtwoEvents  "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/working-group-two/wgtwoapis/wgtwo/events/v0"')]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),o("h3",{attrs:{id:"java--kotlin-using-maven"}},[o("a",{attrs:{href:"#java--kotlin-using-maven","aria-hidden":"true"}},[t._v("#")]),t._v("Java / Kotlin using Maven")]),o("p",[t._v("To add the dependencies, first you need to add the "),o("a",{attrs:{href:"https://jitpack.io",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("https://jitpack.io")]),t._v(" repository:")]),o("JitpackDependency"),o("p",[t._v("Then you can add the dependencies:\n"),o("ClientDependencies",{attrs:{clients:["event-grpc"]}})],1),o("p",[t._v("The specific package to include is included in the documentation of each API.")]),o("p",[t._v("The version used is the commit SHA from our "),o("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("repository")]),t._v(".")]),o("p",[t._v("Latest version should match the output of:")]),o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",{pre:!0,attrs:{class:"language-shell"}},[o("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" ls-remote https://github.com/working-group-two/wgtwoapis master "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("cut")]),t._v(" -f1")])])],1)}),[],!1,null,null,null);"function"==typeof p&&p(d),"function"==typeof v&&v(d);e.default=d.exports},UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);