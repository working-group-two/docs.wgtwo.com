(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"6g7Y":function(e,t,o){"use strict";o.r(t);var r=o("7uw+"),n=o("UQSp"),a=o("Kw5r");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},p=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===i(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:o[e]=function(){return s[e]}}))},u=a.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",l={excerpt:null,title:"API structure and libraries",topic:"intro",type:"reference",typeOrder:2,roles:["THIRD_PARTY_DEVELOPER","OPERATOR"]};var v=function(e){e.options[c]&&(e.options[c]=l),a.a.util.defineReactive(e.options,c,l),e.options.computed=u.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},d=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h1",{attrs:{id:"api-structure-and-libraries"}},[o("a",{attrs:{href:"#api-structure-and-libraries","aria-hidden":"true"}},[e._v("#")]),e._v("API Structure and Libraries")]),o("h2",{attrs:{id:"grpc"}},[o("a",{attrs:{href:"#grpc","aria-hidden":"true"}},[e._v("#")]),e._v("gRPC")]),o("p",[e._v("We use "),o("a",{attrs:{href:"https://www.grpc.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("gRPC")]),e._v(" as our messaging protocol for all our APIs, except the "),o("code",{pre:!0},[e._v("Subscription API")]),e._v(" and\n"),o("code",{pre:!0},[e._v("Provision API")]),e._v(".")]),o("p",[e._v("Our "),o("code",{pre:!0},[e._v(".proto")]),e._v(" files can be found at "),o("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("github.com/working-group-two/wgtwoapis")]),e._v("\nunder the "),o("code",{pre:!0},[e._v("wgtwo")]),e._v(" folder.")]),o("h2",{attrs:{id:"rest-like"}},[o("a",{attrs:{href:"#rest-like","aria-hidden":"true"}},[e._v("#")]),e._v("REST-like")]),o("p",[e._v("The "),o("code",{pre:!0},[e._v("Subscription API")]),e._v(" and "),o("code",{pre:!0},[e._v("Provision API")]),e._v(" has a REST-like API.")]),o("p",[e._v("Our OpenAPI specification can be found at "),o("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis-openapi",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("github.com/working-group-two/wgtwoapis-openapi")]),e._v("\nunder the "),o("code",{pre:!0},[e._v("openapi")]),e._v(" folder.")]),o("h2",{attrs:{id:"libraries"}},[o("a",{attrs:{href:"#libraries","aria-hidden":"true"}},[e._v("#")]),e._v("Libraries")]),o("p",[e._v("Using our "),o("code",{pre:!0},[e._v(".proto")]),e._v(" files and OpenAPI specification, you may generate code for most languages.")]),o("p",[e._v("In addition, we offer generated code for Go and Java.")]),o("h3",{attrs:{id:"go"}},[o("a",{attrs:{href:"#go","aria-hidden":"true"}},[e._v("#")]),e._v("Go")]),o("p",[e._v("Add import for the API you would like to use. Path is the same as its "),o("code",{pre:!0},[e._v(".proto")]),e._v(" file:")]),o("pre",{pre:!0,attrs:{class:"language-go"}},[o("code",{pre:!0,attrs:{class:"language-go"}},[o("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n\twgtwoEvents  "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"github.com/working-group-two/wgtwoapis/wgtwo/events/v0"')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")])])]),o("h3",{attrs:{id:"java--kotlin-using-maven"}},[o("a",{attrs:{href:"#java--kotlin-using-maven","aria-hidden":"true"}},[e._v("#")]),e._v("Java / Kotlin using Maven")]),o("p",[e._v("To add the dependencies, first you need to add the "),o("a",{attrs:{href:"https://jitpack.io",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://jitpack.io")]),e._v(" repository:")]),o("JitpackDependency"),o("p",[e._v("Then you can add the dependencies:\n"),o("ClientDependencies",{attrs:{clients:["event-grpc"]}})],1),o("p",[e._v("The specific package to include is included in the documentation of each API.")]),o("p",[e._v("The version used is the commit SHA from our "),o("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("repository")]),e._v(".")]),o("p",[e._v("Latest version should match the output of:")]),o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",{pre:!0,attrs:{class:"language-shell"}},[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" ls-remote https://github.com/working-group-two/wgtwoapis master "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("cut")]),e._v(" -f1")])])],1)}),[],!1,null,null,null);"function"==typeof p&&p(d),"function"==typeof v&&v(d);t.default=d.exports},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);