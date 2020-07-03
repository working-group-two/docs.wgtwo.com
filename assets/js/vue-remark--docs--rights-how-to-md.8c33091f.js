(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Fzjb:function(t,e,a){"use strict";a.r(e);var r=a("KHd+"),n=a("UQSp"),s=a("Kw5r");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},p=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===o(i[t])&&"function"==typeof i[t].render?e[t]=i[t]:a[t]=function(){return i[t]}}))},l=s.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",u={excerpt:null,title:"List applicable rights",topic:"usertokens",type:"how-to"};var h=function(t){t.options[c]&&(t.options[c]=u),s.a.util.defineReactive(t.options,c,u),t.options.computed=l.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},v=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("h1",{attrs:{id:"list-applicable-rights"}},[a("a",{attrs:{href:"#list-applicable-rights","aria-hidden":"true"}},[t._v("#")]),t._v("List applicable rights")]),a("h2",{attrs:{id:"overview"}},[a("a",{attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v("Overview")]),a("p",[t._v("This API allows you to list which rights a user token can be assigned, which can be used when making a system for\ngeneration user tokens. In order to access this API, your credentials need to have the "),a("code",{pre:!0},[t._v("id.user.token.create")]),t._v(" right.\nYou can configure your credentials in "),a("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Console")]),t._v(".")]),a("DemoConfigurer"),a("h2",{attrs:{id:"grpcurl"}},[a("a",{attrs:{href:"#grpcurl","aria-hidden":"true"}},[t._v("#")]),t._v("grpcurl")]),a("h3",{attrs:{id:"list-all-applicable-rights"}},[a("a",{attrs:{href:"#list-all-applicable-rights","aria-hidden":"true"}},[t._v("#")]),t._v("List all applicable rights")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",{pre:!0,attrs:{class:"language-shell"}},[t._v("grpcurl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Basic '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${OPERATOR_TOKEN}")]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -import-path "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -proto wgtwo/auth/v0/rights.proto "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  api.wgtwo.com:443 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  wgtwo.auth.v0.RightService.List")])]),a("h3",{attrs:{id:"check-what-a-right-will-be-expanded-to"}},[a("a",{attrs:{href:"#check-what-a-right-will-be-expanded-to","aria-hidden":"true"}},[t._v("#")]),t._v("Check what a right will be expanded to")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",{pre:!0,attrs:{class:"language-shell"}},[t._v("grpcurl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Basic '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${OPERATOR_TOKEN}")]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -import-path "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -proto wgtwo/auth/v0/rights.proto "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n  {\n    "rights": [\n      "sms.*"\n    ]\n  }\n  \'')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  api.wgtwo.com:443 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  wgtwo.auth.v0.RightService.CheckExpansion")])]),a("h2",{attrs:{id:"java--kotlin"}},[a("a",{attrs:{href:"#java--kotlin","aria-hidden":"true"}},[t._v("#")]),t._v("Java / Kotlin")]),a("h3",{attrs:{id:"install-dependencies"}},[a("a",{attrs:{href:"#install-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v("Install dependencies")]),a("JitpackDependency"),a("p",[t._v("Then you can add "),a("code",{pre:!0},[t._v("auth-grpc")]),t._v(" and "),a("code",{pre:!0},[t._v("utils-grpc")]),t._v(":")]),a("ClientDependencies",{attrs:{clients:["auth-grpc","utils-grpc"]}}),a("h3",{attrs:{id:"list-all-applicable-rights-1"}},[a("a",{attrs:{href:"#list-all-applicable-rights-1","aria-hidden":"true"}},[t._v("#")]),t._v("List all applicable rights")]),a("p",[t._v("Returns a list of all applicable rights")]),a("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/rights/src/main/kotlin/ListRights.kt"}}),a("h3",{attrs:{id:"check-what-a-right-will-be-expanded-to-1"}},[a("a",{attrs:{href:"#check-what-a-right-will-be-expanded-to-1","aria-hidden":"true"}},[t._v("#")]),t._v("Check what a right will be expanded to")]),a("p",[t._v("Returns a list of all the rights the given rights will be expanded to.")]),a("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/rights/src/main/kotlin/CheckExpansion.kt"}}),a("h2",{attrs:{id:"concepts"}},[a("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[t._v("#")]),t._v("Concepts")]),a("ul",[a("li",[a("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Three types of stubs: asynchronous, blocking, and future")])]),a("li",[a("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("gRPC Concepts")])])])],1)}),[],!1,null,null,null);"function"==typeof p&&p(v),"function"==typeof h&&h(v);e.default=v.exports},UQSp:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);