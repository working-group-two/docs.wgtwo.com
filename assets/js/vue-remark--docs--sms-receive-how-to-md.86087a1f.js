(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{212:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},232:function(e,t,r){"use strict";r.r(t);var o=r(5),s=r(212),n=r(0);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var i={VueRemarkRoot:s.a},c=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===a(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:r[e]=function(){return i[e]}}))},p=n.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",u={excerpt:null,title:"Receive SMS",topic:"sms",type:"how-to",typeOrder:2};var v=function(e){e.options[l]&&(e.options[l]=u),n.a.util.defineReactive(e.options,l,u),e.options.computed=p.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},d=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"how-to-receive-sms"}},[r("a",{attrs:{href:"#how-to-receive-sms","aria-hidden":"true"}},[e._v("#")]),e._v("How to receive SMS")]),r("h2",{attrs:{id:"overview"}},[r("a",{attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v("Overview")]),r("p",[e._v("The SMS API allows you to listen to all sent and received messages.\nIn order to access this API, your credentials need to have the "),r("code",{pre:!0},[e._v("sms.receive.to_subscriber")]),e._v(" and "),r("code",{pre:!0},[e._v("sms.receive.from_subscriber")]),e._v(" rights.\nYou can configure your credentials in "),r("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Console")]),e._v(".")]),r("p",[e._v("All messages must be acknowledged after they are received, as they otherwise will be resent.")]),r("DemoConfigurer"),r("h2",{attrs:{id:"grpcurl"}},[r("a",{attrs:{href:"#grpcurl","aria-hidden":"true"}},[e._v("#")]),e._v("grpcurl")]),r("h2",{attrs:{id:"receive-text-sms"}},[r("a",{attrs:{href:"#receive-text-sms","aria-hidden":"true"}},[e._v("#")]),e._v("Receive text SMS")]),r("p",[e._v("Listen to text SMSes.")]),r("p",[e._v("Note: this command does not acknowledge SMS, so messages will be resent after some time.")]),r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",{pre:!0,attrs:{class:"language-shell"}},[e._v("grpcurl "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -H "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Authorization: Basic '),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${OPERATOR_TOKEN}")]),e._v('"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -import-path "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -proto wgtwo/messaging/messagecore.proto "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api.wgtwo.com:443 "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  messaging.MessageCore.ReceiveTextMessages")])]),r("h2",{attrs:{id:"java--kotlin"}},[r("a",{attrs:{href:"#java--kotlin","aria-hidden":"true"}},[e._v("#")]),e._v("Java / Kotlin")]),r("h3",{attrs:{id:"install-dependencies"}},[r("a",{attrs:{href:"#install-dependencies","aria-hidden":"true"}},[e._v("#")]),e._v("Install dependencies")]),r("JitpackDependency"),r("p",[e._v("Then you can add "),r("code",{pre:!0},[e._v("messaging-grpc")]),e._v(" and "),r("code",{pre:!0},[e._v("utils-grpc")]),e._v(":")]),r("ClientDependencies",{attrs:{clients:["messaging-grpc","utils-grpc"]}}),r("h2",{attrs:{id:"receive-text-sms-example"}},[r("a",{attrs:{href:"#receive-text-sms-example","aria-hidden":"true"}},[e._v("#")]),e._v("Receive text SMS example")]),r("GithubCode",{attrs:{to:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/sms/src/main/kotlin/ReceiveTextSms.kt"}}),r("h2",{attrs:{id:"resources"}},[r("a",{attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v("Resources")]),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/messaging/messagecore.proto",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Messagecore API reference")])])]),r("h2",{attrs:{id:"concepts"}},[r("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[e._v("#")]),e._v("Concepts")]),r("ul",[r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/SMS",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("wikipedia.org/wiki/SMS")])]),r("li",[r("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Three types of stubs: asynchronous, blocking, and future")])]),r("li",[r("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("gRPC Concepts")])])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(d),"function"==typeof v&&v(d);t.default=d.exports}}]);