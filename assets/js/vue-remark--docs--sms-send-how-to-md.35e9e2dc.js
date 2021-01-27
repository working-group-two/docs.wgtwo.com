(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"2tUt":function(t,e,o){"use strict";o.r(e);var r=o("KHd+"),n=o("UQSp"),s=o("Kw5r");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var a={VueRemarkRoot:n.a},p=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(a).forEach((function(t){"object"===i(a[t])&&"function"==typeof a[t].render||"function"==typeof a[t]&&"function"==typeof a[t].options.render?e[t]=a[t]:o[t]=function(){return a[t]}}))},c=s.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",u={excerpt:null,title:"Send SMS",topic:"sms",type:"how-to",typeOrder:1,roles:["THIRD_PARTY_DEVELOPER","OPERATOR"]};var l=function(t){t.options[d]&&(t.options[d]=u),s.a.util.defineReactive(t.options,d,u),t.options.computed=c.computed({$frontmatter:function(){return t.options[d]}},t.options.computed)},m=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("h1",{attrs:{id:"how-to-send-sms"}},[o("a",{attrs:{href:"#how-to-send-sms","aria-hidden":"true"}},[t._v("#")]),t._v("How to send SMS")]),o("h2",{attrs:{id:"overview"}},[o("a",{attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v("Overview")]),o("p",[t._v("This example shows how you can send text and binary SMSes. In order to send SMSes your credentials need to have the\n"),o("code",{pre:!0},[t._v("sms.send.to_subscriber")]),t._v(" and "),o("code",{pre:!0},[t._v("sms.send.from_subscriber")]),t._v(" rights.")]),o("h3",{attrs:{id:"limitations-on-smssendto_subscriber"}},[o("a",{attrs:{href:"#limitations-on-smssendto_subscriber","aria-hidden":"true"}},[t._v("#")]),t._v("Limitations on "),o("code",{pre:!0},[t._v("sms.send.to_subscriber")])]),o("table",[o("thead",[o("tr",[o("th",[t._v("Type")]),o("th",[t._v("Description")])])]),o("tbody",[o("tr",[o("td",[t._v("Operator")]),o("td",[t._v("May send SMS to subscriber from any sender ID, limited to 11 alphanumeric characters")])]),o("tr",[o("td",[t._v("Third Party Developer")]),o("td",[t._v("May send SMS to subscriber from configured product name to subscriber, with any non-alphanumeric characters stripped and truncated to max length of 11")])])])]),o("DemoConfigurer"),o("h2",{attrs:{id:"send-text-sms"}},[o("a",{attrs:{href:"#send-text-sms","aria-hidden":"true"}},[t._v("#")]),t._v("Send text SMS")]),o("CodeSnippet",{attrs:{grpcurlOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/sms/send-text-sms.sh",grpcurlThirdpartydev:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/sms/send-text-sms.sh",kotlinDeps:["sms-grpc","utils-grpc"],kotlinOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/sms/src/main/kotlin/SendTextSmsToSubscriber.kt"}}),o("h2",{attrs:{id:"send-binary-sms"}},[o("a",{attrs:{href:"#send-binary-sms","aria-hidden":"true"}},[t._v("#")]),t._v("Send binary SMS")]),o("CodeSnippet",{attrs:{kotlinDeps:["sms-grpc","utils-grpc"],kotlinOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/sms/src/main/kotlin/SendBinarySmsToSubscriber.kt"}}),o("h2",{attrs:{id:"concepts"}},[o("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[t._v("#")]),t._v("Concepts")]),o("ul",[o("li",[o("a",{attrs:{href:"https://en.wikipedia.org/wiki/SMS",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("wikipedia.org/wiki/SMS")])]),o("li",[o("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Three types of stubs: asynchronous, blocking, and future")])]),o("li",[o("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("gRPC Concepts")])])])],1)}),[],!1,null,null,null);"function"==typeof p&&p(m),"function"==typeof l&&l(m);e.default=m.exports},UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);