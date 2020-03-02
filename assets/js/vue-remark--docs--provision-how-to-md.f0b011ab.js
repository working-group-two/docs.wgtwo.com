(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{178:function(t,s,a){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},238:function(t,s,a){"use strict";a.r(s);var n=a(13),e=a(178),r=a(0);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var o={VueRemarkRoot:e.a},c=function(t){var s=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(o).forEach((function(t){"object"===p(o[t])&&"function"==typeof o[t].render?s[t]=o[t]:a[t]=function(){return o[t]}}))},i=r.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",v={excerpt:null,title:"Manage subscriptions",topic:"subscription profile",type:"how-to"};var _=function(t){t.options[u]&&(t.options[u]=v),r.a.util.defineReactive(t.options,u,v),t.options.computed=i.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},l=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("VueRemarkRoot",[a("h1",{attrs:{id:"how-to-provision-services-for-subscribers"}},[a("a",{attrs:{href:"#how-to-provision-services-for-subscribers","aria-hidden":"true"}},[t._v("#")]),t._v("How to provision services for subscribers")]),a("h2",{attrs:{id:"overview"}},[a("a",{attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v("Overview")]),a("p",[t._v("To update services for your subscribers, you will need to:")]),a("ul",[a("li",[a("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Get credentials from Console")])])]),a("h2",{attrs:{id:"prerequisites"}},[a("a",{attrs:{href:"#prerequisites","aria-hidden":"true"}},[t._v("#")]),t._v("Prerequisites")]),a("h3",{attrs:{id:"tokencredentials"}},[a("a",{attrs:{href:"#tokencredentials","aria-hidden":"true"}},[t._v("#")]),t._v("Token/credentials")]),a("ul",[a("li",[t._v("You will need "),a("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("credentials from Console")]),t._v(" for "),a("code",{pre:!0},[t._v("subscription.read")]),t._v(" and/or "),a("code",{pre:!0},[t._v("subscription.write")]),t._v(".")])]),a("h3",{attrs:{id:"install-dependencies"}},[a("a",{attrs:{href:"#install-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v("Install dependencies")]),a("p",[t._v("To add the dependencies, first you need to add the "),a("a",{attrs:{href:"https://jitpack.io",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Jitpack")]),t._v(" repository:")]),a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",{pre:!0,attrs:{class:"language-xml"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("repositories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jitpack.io"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("https://jitpack.io"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("repository")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("repositories")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])]),a("p",[t._v("Then you can add the required dependency:")]),a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",{pre:!0,attrs:{class:"language-xml"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.working-group-two.wgtwoapis"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("acbf554461c3b22dbf2184de983b74b1d331ee48"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])]),a("h3",{attrs:{id:"initialize-your-dependencies"}},[a("a",{attrs:{href:"#initialize-your-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v("Initialize your dependencies")]),a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",{pre:!0,attrs:{class:"language-kotlin"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ApiClient\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProvisionApi\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SubscriptionApi\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" apiClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ApiClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUsername")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CLIENT_ID"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setPassword")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CLIENT_SECRET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// basePath can be specified for test purposes, defaults to https://api.wgtwo.com")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// basePath = https://apigateway.dub.dev.wgtwo.com")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" subscriptionProfileApi "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SubscriptionProfileApi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("apiClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("h2",{attrs:{id:"update-service-eg-enable-data-roaming"}},[a("a",{attrs:{href:"#update-service-eg-enable-data-roaming","aria-hidden":"true"}},[t._v("#")]),t._v("Update service, e.g. enable data roaming")]),a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",{pre:!0,attrs:{class:"language-kotlin"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateSubscriptionRequest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateSubscriptionRequestService\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateSubscriptionRequestService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActionEnum\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateSubscriptionRequestService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NameEnum\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UpdateSubscriptionRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    bssid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IDENTIFIER PROVIDED BY WORKING GROUP TWO"')]),t._v("\n    msisdn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"47xxxxxxxx"')]),t._v("\n    userid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my user ID"')]),t._v("\n    service "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UpdateSubscriptionRequestService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        action "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ActionEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ADD\n        name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NameEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ROAMING_DATA\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nsubscriptionProfileApi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("h2",{attrs:{id:"update-service-eg-disable-data-roaming"}},[a("a",{attrs:{href:"#update-service-eg-disable-data-roaming","aria-hidden":"true"}},[t._v("#")]),t._v("Update service, e.g. disable data roaming")]),a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",{pre:!0,attrs:{class:"language-kotlin"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateSubscriptionRequest\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateSubscriptionRequestService\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateSubscriptionRequestService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ActionEnum\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("UpdateSubscriptionRequestService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NameEnum\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UpdateSubscriptionRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    bssid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IDENTIFIER PROVIDED BY WORKING GROUP TWO"')]),t._v("\n    msisdn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"47xxxxxxxx"')]),t._v("\n    userid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my user ID"')]),t._v("\n    service "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("UpdateSubscriptionRequestService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n        action "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ActionEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("REMOVE\n        name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" NameEnum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ROAMING_DATA\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nsubscriptionProfileApi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateService")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("h2",{attrs:{id:"get-information-about-subscriber-eg-enabled-services"}},[a("a",{attrs:{href:"#get-information-about-subscriber-eg-enabled-services","aria-hidden":"true"}},[t._v("#")]),t._v("Get information about subscriber, e.g. enabled services")]),a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",{pre:!0,attrs:{class:"language-kotlin"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wgtwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Subscription\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" subscription "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" subscriptionProfileApi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSubscription")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"47xxxxxxxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My enabled services: '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("${")]),t._v("subscription"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("services"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keys"),a("span",{pre:!0,attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])])])}),[],!1,null,null,null);"function"==typeof c&&c(l),"function"==typeof _&&_(l);s.default=l.exports}}]);