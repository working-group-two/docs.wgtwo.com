(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"2tUt":function(t,e,n){"use strict";n.r(e);var r=n("KHd+"),o=n("UQSp"),s=n("Kw5r");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var i={VueRemarkRoot:o.a},p=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===a(i[t])&&"function"==typeof i[t].render||"function"==typeof i[t]&&"function"==typeof i[t].options.render?e[t]=i[t]:n[t]=function(){return i[t]}}))},c=s.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",l={excerpt:null,title:"Send SMS",topic:"sms",type:"how-to",typeOrder:1};var u=function(t){t.options[d]&&(t.options[d]=l),s.a.util.defineReactive(t.options,d,l),t.options.computed=c.computed({$frontmatter:function(){return t.options[d]}},t.options.computed)},v=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VueRemarkRoot",[n("h1",{attrs:{id:"how-to-send-sms"}},[n("a",{attrs:{href:"#how-to-send-sms","aria-hidden":"true"}},[t._v("#")]),t._v("How to send SMS")]),n("h2",{attrs:{id:"overview"}},[n("a",{attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v("Overview")]),n("p",[t._v("This example shows how you can send text and binary SMSes. In order to send SMSes your credentials need to have the\n"),n("code",{pre:!0},[t._v("sms.send.to_subscriber")]),t._v(" and "),n("code",{pre:!0},[t._v("sms.send.from_subscriber")]),t._v(" rights.")]),n("DemoConfigurer"),n("h2",{attrs:{id:"grpcurl"}},[n("a",{attrs:{href:"#grpcurl","aria-hidden":"true"}},[t._v("#")]),t._v("grpcurl")]),n("h3",{attrs:{id:"send-text-sms"}},[n("a",{attrs:{href:"#send-text-sms","aria-hidden":"true"}},[t._v("#")]),t._v("Send text SMS")]),n("p",[t._v("Send SMS from international number to international number.")]),n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",{pre:!0,attrs:{class:"language-shell"}},[t._v("grpcurl "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -H "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization: Basic '),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${OPERATOR_TOKEN}")]),t._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -import-path "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -proto wgtwo/sms/v0/sms.proto "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -d "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n  {\n    "content": "My SMS content",\n    "fromTextAddress": {\n      "textAddress": "Test"\n    },\n    "toSubscriber": {\n      "e164": "47xxxxxxxx"\n    }\n  }\n  \'')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  api.wgtwo.com:443 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  wgtwo.sms.v0.SmsService/SendTextToSubscriber")])]),n("h3",{attrs:{id:"send-binary-sms"}},[n("a",{attrs:{href:"#send-binary-sms","aria-hidden":"true"}},[t._v("#")]),t._v("Send binary SMS")]),n("p",[t._v("Unfortunately, "),n("code",{pre:!0},[t._v("grpcurl")]),t._v(" only allows to send JSON formatted strings, so it can't be used to send binary SMS.\nPlease have a look at the code example for Java / Kotlin below.")]),n("h2",{attrs:{id:"java--kotlin"}},[n("a",{attrs:{href:"#java--kotlin","aria-hidden":"true"}},[t._v("#")]),t._v("Java / Kotlin")]),n("h3",{attrs:{id:"install-dependencies"}},[n("a",{attrs:{href:"#install-dependencies","aria-hidden":"true"}},[t._v("#")]),t._v("Install dependencies")]),n("JitpackDependency"),n("p",[t._v("Then you can add "),n("code",{pre:!0},[t._v("sms-grpc")]),t._v(" and "),n("code",{pre:!0},[t._v("utils-grpc")]),t._v(":")]),n("ClientDependencies",{attrs:{clients:["sms-grpc","utils-grpc"]}}),n("h3",{attrs:{id:"send-text-sms-1"}},[n("a",{attrs:{href:"#send-text-sms-1","aria-hidden":"true"}},[t._v("#")]),t._v("Send text SMS")]),n("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/sms/src/main/kotlin/SendTextSmsToSubscriber.kt",language:"kotlin"}}),n("h3",{attrs:{id:"send-binary-sms-1"}},[n("a",{attrs:{href:"#send-binary-sms-1","aria-hidden":"true"}},[t._v("#")]),t._v("Send binary SMS")]),n("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/sms/src/main/kotlin/SendBinarySmsToSubscriber.kt",language:"kotlin"}}),n("h2",{attrs:{id:"resources"}},[n("a",{attrs:{href:"#resources","aria-hidden":"true"}},[t._v("#")]),t._v("Resources")]),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/sms/v0/sms.proto",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("SMS API reference")])])]),n("h2",{attrs:{id:"concepts"}},[n("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[t._v("#")]),t._v("Concepts")]),n("ul",[n("li",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/SMS",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("wikipedia.org/wiki/SMS")])]),n("li",[n("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Three types of stubs: asynchronous, blocking, and future")])]),n("li",[n("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("gRPC Concepts")])])])],1)}),[],!1,null,null,null);"function"==typeof p&&p(v),"function"==typeof u&&u(v);e.default=v.exports},UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);