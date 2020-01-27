(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{242:function(t,s,a){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},299:function(t,s,a){"use strict";a.r(s);var n=a(9),e=a(242),r=a(0);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var o={VueRemarkRoot:e.a},c=function(t){var s=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(o).forEach((function(t){"object"===p(o[t])&&"function"==typeof o[t].render?s[t]=o[t]:a[t]=function(){return o[t]}}))},u=r.a.config.optionMergeStrategies,v="__vueRemarkFrontMatter",_={excerpt:null,title:"Manage user tokens",topic:"Usertokens",type:"how-to"};var l=function(t){t.options[v]&&(t.options[v]=_),r.a.util.defineReactive(t.options,v,_),t.options.computed=u.computed({$frontmatter:function(){return t.options[v]}},t.options.computed)},i=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("VueRemarkRoot",[a("h1",{attrs:{id:"manage-user-tokens"}},[a("a",{attrs:{href:"#manage-user-tokens","aria-hidden":"true"}},[t._v("#")]),t._v("Manage user tokens")]),a("h2",{attrs:{id:"overview"}},[a("a",{attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v("Overview")]),a("p",[t._v("To manage user tokens, you will need to:")]),a("ul",[a("li",[a("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Get credentials from Console")])]),a("li",[t._v("Write client code for creating and managing user tokens")])]),a("h2",{attrs:{id:"prerequisites"}},[a("a",{attrs:{href:"#prerequisites","aria-hidden":"true"}},[t._v("#")]),t._v("Prerequisites")]),a("h3",{attrs:{id:"tokencredentials"}},[a("a",{attrs:{href:"#tokencredentials","aria-hidden":"true"}},[t._v("#")]),t._v("Token/credentials")]),a("ul",[a("li",[t._v("You will need "),a("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("credentials from Console")]),t._v(".")])]),a("h3",{attrs:{id:"install-dependencies"}},[a("a",{attrs:{href:"#install-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v("Install dependencies")]),a("p",[t._v("To add the dependencies, first you need to add the "),a("a",{attrs:{href:"https://jitpack.io",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Jitpack")]),t._v(" repository:")]),a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",{pre:!0,attrs:{class:"language-xml"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("repositories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jitpack.io"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("https://jitpack.io"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("repositories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])]),a("p",[t._v("Then you can add "),a("code",{pre:!0},[t._v("event-grpc")]),t._v(" and "),a("code",{pre:!0},[t._v("common")]),t._v(":")]),a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",{pre:!0,attrs:{class:"language-xml"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.working-group-two.wgtwoapis"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("auth-grpc"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("91f3d656e6d890829e28f0ee7788359450325828"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.working-group-two.wgtwoapis"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("common"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("91f3d656e6d890829e28f0ee7788359450325828"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])]),a("h3",{attrs:{id:"initialize-your-dependencies"}},[a("a",{attrs:{href:"#initialize-your-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v("Initialize your dependencies")]),a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",{pre:!0,attrs:{class:"language-kotlin"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RightServiceGrpc\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RightServiceGrpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RightServiceBlockingStub\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Clients\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OperatorToken\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" channel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Clients"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Clients"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Environment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PROD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" credentials "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("OperatorToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_CLIENT_ID"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"YOUR_CLIENT_SECRET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" userTokenStub"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UserTokenServiceBlockingStub "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UserTokenServiceGrpc\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBlockingStub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withCallCredentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("credentials"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("h2",{attrs:{id:"create-new-user-token"}},[a("a",{attrs:{href:"#create-new-user-token","aria-hidden":"true"}},[t._v("#")]),t._v("Create new user token")]),a("p",[t._v("A user token may consist of multiple phone numbers, rights and tags.")]),a("p",[t._v("Rights does accept using "),a("code",{pre:!0},[t._v("*")]),t._v(" as wildcard, which will match any suffix.")]),a("p",[t._v("For a list of applicable rights, see "),a("a",{attrs:{href:"../list-applicable-rights/"}},[t._v("List applicable rights")]),t._v(".")]),a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",{pre:!0,attrs:{class:"language-kotlin"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CreateUserTokenRequest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CreateUserTokenResponse\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumberProto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumber\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" phoneNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PhoneNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        e164 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+4799990000"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CreateUserTokenRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        humanName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Raspberry PI project"')]),t._v("\n        correlationId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-unique-id"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPhoneNumbers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("phoneNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addRights")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"voicemail.*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putTags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"createdBy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CreateUserTokenResponse "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userTokenStub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The generated token is: '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("${")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userToken"),a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),a("h2",{attrs:{id:"list-user-tokens-for-phone-number"}},[a("a",{attrs:{href:"#list-user-tokens-for-phone-number","aria-hidden":"true"}},[t._v("#")]),t._v("List user tokens for phone number")]),a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",{pre:!0,attrs:{class:"language-kotlin"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ListUserTokenRequest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokenMetadata\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumberProto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PhoneNumber\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" phoneNumber "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" PhoneNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        e164 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"+4799990000"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ListUserTokenRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPhoneNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("phoneNumber"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userTokenStub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" userTokens"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserTokenMetadata"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userTokenMetadataList\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),a("h2",{attrs:{id:"get-user-token"}},[a("a",{attrs:{href:"#get-user-token","aria-hidden":"true"}},[t._v("#")]),t._v("Get user token")]),a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",{pre:!0,attrs:{class:"language-kotlin"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GetUserTokenRequest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokenMetadata\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GetUserTokenRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCorrelationId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-unique-id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" userTokenStub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" userToken"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" UserTokenMetadata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userTokenMetadata\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),a("h2",{attrs:{id:"revoke-user-token"}},[a("a",{attrs:{href:"#revoke-user-token","aria-hidden":"true"}},[t._v("#")]),t._v("Revoke user token")]),a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",{pre:!0,attrs:{class:"language-kotlin"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("auth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("v0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UserTokensProto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RevokeUserTokenRequest\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("revoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" RevokeUserTokenRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("newBuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCorrelationId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-unique-id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    userTokenStub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("revoke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),a("h2",{attrs:{id:"concepts"}},[a("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[t._v("#")]),t._v("Concepts")]),a("ul",[a("li",[a("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Three types of stubs: asynchronous, blocking, and future")])]),a("li",[a("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("gRPC Concepts")])])])])}),[],!1,null,null,null);"function"==typeof c&&c(i),"function"==typeof l&&l(i);s.default=i.exports}}]);