(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{211:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},231:function(e,t,r){"use strict";r.r(t);var s=r(5),o=r(211),n=r(0);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var i={VueRemarkRoot:o.a},c=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===a(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:r[e]=function(){return i[e]}}))},p=n.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",v={excerpt:null,title:"Receive SMS",topic:"sms",type:"how-to",typeOrder:2,code:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/sms/src/main/kotlin/ReceiveSms.kt"};var u=function(e){e.options[l]&&(e.options[l]=v),n.a.util.defineReactive(e.options,l,v),e.options.computed=p.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},_=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"how-to-receive-sms"}},[r("a",{attrs:{href:"#how-to-receive-sms","aria-hidden":"true"}},[e._v("#")]),e._v("How to receive SMS")]),r("h2",{attrs:{id:"overview"}},[r("a",{attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v("Overview")]),r("p",[e._v("The SMS API allows you to listen to all sent and received messages.")]),r("p",[e._v("All messages must be acknowledged after they are received, as they otherwise will be resent.")]),r("h2",{attrs:{id:"tokencredentials"}},[r("a",{attrs:{href:"#tokencredentials","aria-hidden":"true"}},[e._v("#")]),e._v("Token/credentials")]),r("p",[r("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Create credentials in Console")])]),r("h5",{attrs:{id:"required-rights"}},[r("a",{attrs:{href:"#required-rights","aria-hidden":"true"}},[e._v("#")]),e._v("Required rights")]),r("ul",[r("li",[r("code",{pre:!0},[e._v("sms.receive.to_subscriber")])]),r("li",[r("code",{pre:!0},[e._v("sms.receive.from_subscriber")])])]),r("h2",{attrs:{id:"grpcurl"}},[r("a",{attrs:{href:"#grpcurl","aria-hidden":"true"}},[e._v("#")]),e._v("grpcurl")]),r("p",[e._v("Listen to SMSes. Note that acknowledgment is not covered by this, so messages will be resent.")]),r("p",[e._v("This will give you fragmented SMSes, so content is not human readable.")]),r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",{pre:!0,attrs:{class:"language-shell"}},[r("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone --depth "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" https://github.com/working-group-two/wgtwoapis.git\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" wgtwoapis\n"),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("OPERATOR_TOKEN")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token variable"}},[r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" -n $"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("CLIENT_ID"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(":$"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("CLIENT_SECRET"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" base64 -w0"),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n\ngrpcurl "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -H "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Authorization: Basic '),r("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${OPERATOR_TOKEN}")]),e._v('"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -import-path "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -proto wgtwo/messaging/messagecore.proto "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api.wgtwo.com:443 "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  messaging.MessageCore.ReceiveMessages")])]),r("h2",{attrs:{id:"java--kotlin"}},[r("a",{attrs:{href:"#java--kotlin","aria-hidden":"true"}},[e._v("#")]),e._v("Java / Kotlin")]),r("h3",{attrs:{id:"install-dependencies"}},[r("a",{attrs:{href:"#install-dependencies","aria-hidden":"true"}},[e._v("#")]),e._v("Install dependencies")]),r("JitpackDependency"),r("p",[e._v("Then you can add "),r("code",{pre:!0},[e._v("messaging-grpc")]),e._v(" and "),r("code",{pre:!0},[e._v("utils-grpc")]),e._v(":")]),r("ClientDependencies",{attrs:{clients:["messaging-grpc","utils-grpc"]}}),r("h2",{attrs:{id:"receive-sms"}},[r("a",{attrs:{href:"#receive-sms","aria-hidden":"true"}},[e._v("#")]),e._v("Receive SMS")]),r("GithubCode",{attrs:{to:e.$frontmatter.code}}),r("h2",{attrs:{id:"resources"}},[r("a",{attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v("Resources")]),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/working-group-two/wgtwo-kotlin-code-snippets/blob/master/src/main/kotlin/com/wgtwo/example/receivesms/ReceiveSmsServiceExample.kt",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("ReceiveSmsServiceExample.kt")])]),r("li",[r("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/messaging/messagecore.proto",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Messagecore API reference")])])]),r("h2",{attrs:{id:"concepts"}},[r("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[e._v("#")]),e._v("Concepts")]),r("ul",[r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/SMS",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("wikipedia.org/wiki/SMS")])]),r("li",[r("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Three types of stubs: asynchronous, blocking, and future")])]),r("li",[r("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("gRPC Concepts")])])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof u&&u(_);t.default=_.exports}}]);