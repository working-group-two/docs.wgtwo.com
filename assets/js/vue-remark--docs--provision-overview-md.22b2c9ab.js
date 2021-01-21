(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},zslK:function(e,t,o){"use strict";o.r(t);var n=o("KHd+"),r=o("UQSp"),i=o("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var a={VueRemarkRoot:r.a},p=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(a).forEach((function(e){"object"===s(a[e])&&"function"==typeof a[e].render||"function"==typeof a[e]&&"function"==typeof a[e].options.render?t[e]=a[e]:o[e]=function(){return a[e]}}))},c=i.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",l={excerpt:null,title:"Overview",topic:"subscription profile",type:"overview",hideWarning:!0};var v=function(e){e.options[u]&&(e.options[u]=l),i.a.util.defineReactive(e.options,u,l),e.options.computed=c.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},d=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h1",{attrs:{id:"subscription-profile-overview"}},[o("a",{attrs:{href:"#subscription-profile-overview","aria-hidden":"true"}},[e._v("#")]),e._v("Subscription profile overview")]),o("p",[e._v("This API allows to enable and disable capabilities for a subscription and get subscription information.\nIn order to access this API\nyour credentials need to have the "),o("code",{pre:!0},[e._v("subscription.read")]),e._v(" and "),o("code",{pre:!0},[e._v("subscription.write")]),e._v(" rights.")]),o("h2",{attrs:{id:"subscription-api"}},[o("a",{attrs:{href:"#subscription-api","aria-hidden":"true"}},[e._v("#")]),e._v("Subscription API")]),o("p",[e._v("This API allows you to retrieve information about the subscriber, including which services are enabled.")]),o("h2",{attrs:{id:"provision-api"}},[o("a",{attrs:{href:"#provision-api","aria-hidden":"true"}},[e._v("#")]),e._v("Provision API")]),o("p",[e._v("The API is based on a concept of actions with each action having a specific use case.\nThe "),o("code",{pre:!0},[e._v("/provision/[ACTIONNAME]")]),e._v(" endpoints manage provisioning requests. The requests instruct the\nnetwork to update user profiles. It is designed as a standard REST API where multiple requests can\nbe handled in parallel.")]),o("p",[e._v("All requests use the POST HTTP method.")]),o("p",[e._v("We verify that the API key supplied is authorised to operate on behalf of that network\nand secondly that the user or MSISDN indicated in the request was created by the same network.")]),o("p",[e._v("The API does not give access to the actual data stored about individual subscribers.")]),o("p",[e._v("Standard replies:")]),o("ul",[o("li",[o("strong",[e._v("201:")]),e._v(" Provision success. Will return the request ID for the created resource.")])]),o("p",[e._v("Example:")]),o("pre",{pre:!0,attrs:{class:"language-json"}},[o("code",{pre:!0,attrs:{class:"language-json"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),o("span",{pre:!0,attrs:{class:"token property"}},[e._v('"requestid"')]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"f2feb5be78cf4b03a28834729c44e3a2"')]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])]),o("ul",[o("li",[o("strong",[e._v("400:")]),e._v(" Invalid action arguments.")]),o("li",[o("strong",[e._v("429:")]),e._v(" Rate limit exceeded.")]),o("li",[o("strong",[e._v("502:")]),e._v(" Provision error.")])]),o("p",[e._v("As a general reporting strategy\nthe API responds with "),o("strong",[e._v("201")]),e._v(" to a duplicate request if the original was successful (idempotency).")])])}),[],!1,null,null,null);"function"==typeof p&&p(d),"function"==typeof v&&v(d);t.default=d.exports}}]);