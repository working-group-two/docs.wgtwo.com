(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{EVgV:function(t,e,n){"use strict";n.r(e);var r=n("KHd+"),s=n("UQSp"),a=n("Kw5r");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var i={VueRemarkRoot:s.a},p=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===o(i[t])&&"function"==typeof i[t].render||"function"==typeof i[t]&&"function"==typeof i[t].options.render?e[t]=i[t]:n[t]=function(){return i[t]}}))},u=a.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",l={excerpt:null,title:"Manage user tokens",topic:"usertokens",type:"how-to"};var v=function(t){t.options[c]&&(t.options[c]=l),a.a.util.defineReactive(t.options,c,l),t.options.computed=u.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},_=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("h1",{attrs:{id:"manage-user-tokens"}},[n("a",{attrs:{href:"#manage-user-tokens","aria-hidden":"true"}},[t._v("#")]),t._v("Manage user tokens")]),n("h2",{attrs:{id:"overview"}},[n("a",{attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v("Overview")]),n("p",[t._v("This API allows to create user tokens, which can enable accessing our APIs in the context of a user. This can either be\na token that is given directly to the end-user or used by the operator on behalf of their user.\nIn order to access this API, your credentials need to have the "),n("code",{pre:!0},[t._v("id.user.token.create")]),t._v(" right.")]),n("DemoConfigurer"),n("h2",{attrs:{id:"grpcurl"}},[n("a",{attrs:{href:"#grpcurl","aria-hidden":"true"}},[t._v("#")]),t._v("grpcurl")]),n("h3",{attrs:{id:"create-new-user-token"}},[n("a",{attrs:{href:"#create-new-user-token","aria-hidden":"true"}},[t._v("#")]),t._v("Create new user token")]),n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",{pre:!0,attrs:{class:"language-shell"}},[t._v("grpcurl "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Basic '),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${OPERATOR_TOKEN}")]),t._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -import-path "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -proto wgtwo/auth/v0/usertokens.proto "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n  {\n    "humanName": "My hobby project",\n    "correlationId": "my-unique-id",\n    "phoneNumbers": [\n      { "e164": "+47xxxxxxxx" }\n    ],\n    "rights": "voicemail.*",\n    "tags": {\n      "createdBy": "Alice",\n      "location": "My Raspberry PI"\n    }\n  }\n  \'')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  api.wgtwo.com:443 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  wgtwo.auth.v0.UserTokenService.Create")])]),n("h3",{attrs:{id:"list-user-tokens-for-phone-number"}},[n("a",{attrs:{href:"#list-user-tokens-for-phone-number","aria-hidden":"true"}},[t._v("#")]),t._v("List user tokens for phone number")]),n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",{pre:!0,attrs:{class:"language-shell"}},[t._v("grpcurl "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Basic '),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${OPERATOR_TOKEN}")]),t._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -import-path "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -proto wgtwo/auth/v0/usertokens.proto "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{ "phoneNumber": { "e164": "+47xxxxxxxx" } }\'')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  api.wgtwo.com:443 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  wgtwo.auth.v0.UserTokenService.List")])]),n("h3",{attrs:{id:"get-user-token"}},[n("a",{attrs:{href:"#get-user-token","aria-hidden":"true"}},[t._v("#")]),t._v("Get user token")]),n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",{pre:!0,attrs:{class:"language-shell"}},[t._v("grpcurl "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Basic '),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${OPERATOR_TOKEN}")]),t._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -import-path "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -proto wgtwo/auth/v0/usertokens.proto "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{ "correlationId": "my-unique-id" }\'')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  api.wgtwo.com:443 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  wgtwo.auth.v0.UserTokenService.Get")])]),n("h3",{attrs:{id:"revoke-user-token"}},[n("a",{attrs:{href:"#revoke-user-token","aria-hidden":"true"}},[t._v("#")]),t._v("Revoke user token")]),n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",{pre:!0,attrs:{class:"language-shell"}},[t._v("grpcurl "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Basic '),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${OPERATOR_TOKEN}")]),t._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -import-path "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -proto wgtwo/auth/v0/usertokens.proto "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{ "correlationId": "my-unique-id" }\'')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  api.wgtwo.com:443 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  wgtwo.auth.v0.UserTokenService.Revoke")])]),n("h2",{attrs:{id:"java--kotlin"}},[n("a",{attrs:{href:"#java--kotlin","aria-hidden":"true"}},[t._v("#")]),t._v("Java / Kotlin")]),n("h3",{attrs:{id:"install-dependencies"}},[n("a",{attrs:{href:"#install-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v("Install dependencies")]),n("JitpackDependency"),n("p",[t._v("Then you can add "),n("code",{pre:!0},[t._v("auth-grpc")]),t._v(" and "),n("code",{pre:!0},[t._v("utils-grpc")]),t._v(":")]),n("ClientDependencies",{attrs:{clients:["auth-grpc","utils-grpc"]}}),n("h3",{attrs:{id:"create-new-user-token-1"}},[n("a",{attrs:{href:"#create-new-user-token-1","aria-hidden":"true"}},[t._v("#")]),t._v("Create new user token")]),n("p",[t._v("A user token may consist of multiple phone numbers, rights and tags.")]),n("p",[t._v("Rights does accept using "),n("code",{pre:!0},[t._v("*")]),t._v(" as wildcard, which will match any suffix.")]),n("p",[t._v("For a list of applicable rights, see "),n("a",{attrs:{href:"../list-applicable-rights/"}},[t._v("List applicable rights")]),t._v(".")]),n("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/usertokens/src/main/kotlin/CreateUserToken.kt",language:"kotlin"}}),n("h3",{attrs:{id:"list-user-tokens-for-phone-number-1"}},[n("a",{attrs:{href:"#list-user-tokens-for-phone-number-1","aria-hidden":"true"}},[t._v("#")]),t._v("List user tokens for phone number")]),n("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/usertokens/src/main/kotlin/ListUserToken.kt",language:"kotlin"}}),n("h3",{attrs:{id:"get-user-token-1"}},[n("a",{attrs:{href:"#get-user-token-1","aria-hidden":"true"}},[t._v("#")]),t._v("Get user token")]),n("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/usertokens/src/main/kotlin/GetUserToken.kt",language:"kotlin"}}),n("h3",{attrs:{id:"revoke-user-token-1"}},[n("a",{attrs:{href:"#revoke-user-token-1","aria-hidden":"true"}},[t._v("#")]),t._v("Revoke user token")]),n("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/usertokens/src/main/kotlin/RevokeUserToken.kt",language:"kotlin"}}),n("h2",{attrs:{id:"concepts"}},[n("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[t._v("#")]),t._v("Concepts")]),n("ul",[n("li",[n("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Three types of stubs: asynchronous, blocking, and future")])]),n("li",[n("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("gRPC Concepts")])])])],1)}),[],!1,null,null,null);"function"==typeof p&&p(_),"function"==typeof v&&v(_);e.default=_.exports},UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);