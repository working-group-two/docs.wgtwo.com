(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Hh32:function(o,r,t){"use strict";t.r(r);var a=t("KHd+"),e=t("UQSp"),i=t("Kw5r");function n(o){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}i.a.config.optionMergeStrategies;var l={VueRemarkRoot:e.a},s=function(o){var r=o.options.components=o.options.components||{},t=o.options.computed=o.options.computed||{};Object.keys(l).forEach((function(o){"object"===n(l[o])&&"function"==typeof l[o].render||"function"==typeof l[o]&&"function"==typeof l[o].options.render?r[o]=l[o]:t[o]=function(){return l[o]}}))},c=i.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",p={excerpt:null,title:"Set call forwarding",topic:"call forwarding",type:"how-to",typeOrder:1,roles:["THIRD_PARTY_DEVELOPER","OPERATOR"]};var u=function(o){o.options[d]&&(o.options[d]=p),i.a.util.defineReactive(o.options,d,p),o.options.computed=c.computed({$frontmatter:function(){return o.options[d]}},o.options.computed)},w=Object(a.a)({},(function(){var o=this,r=o.$createElement,t=o._self._c||r;return t("VueRemarkRoot",[t("h1",{attrs:{id:"how-to-set-up-call-forwarding"}},[t("a",{attrs:{href:"#how-to-set-up-call-forwarding","aria-hidden":"true"}},[o._v("#")]),o._v("How to set up call forwarding")]),t("h2",{attrs:{id:"overview"}},[t("a",{attrs:{href:"#overview","aria-hidden":"true"}},[o._v("#")]),o._v("Overview")]),t("p",[o._v("This example shows you how to forward calls to other numbers or services. In order to forward calls\nyour credentials need to have one or more of "),t("code",{pre:!0},[o._v("callforwarding.disable")]),o._v(", "),t("code",{pre:!0},[o._v("callforwarding.to_voicemail")]),o._v(",\n"),t("code",{pre:!0},[o._v("callforwarding.to_number")]),o._v(" rights.")]),t("p",[o._v("For call forwarding to a number or a trunk, you can either forward all calls, unconditional\nforwarding, or you can forward if "),t("code",{pre:!0},[o._v("busy")]),o._v(", "),t("code",{pre:!0},[o._v("unanswered")]),o._v(" and/or "),t("code",{pre:!0},[o._v("unavailable")]),o._v(".")]),t("p",[o._v("Forwarding to voicemail can be done to the default voicemail service, or a custom service.")]),t("h2",{attrs:{id:"limitations"}},[t("a",{attrs:{href:"#limitations","aria-hidden":"true"}},[o._v("#")]),o._v("Limitations")]),t("ul",[t("li",[o._v("Call forwarding is not available to special/premium/international numbers.")]),t("li",[o._v("Forwarding to trunk is only available if you have a trunk set up for you. Please get in touch with\n"),t("a",{attrs:{href:"mailto:products@wgtwo.com?subject=%5BAPI%5D%20Trunk%20Forwarding",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("products@wgtwo.com")]),o._v(" if you want\nto discuss this option.")]),t("li",[o._v("Forwarding to non-default voicemail services is only available with prior approval. Please get in\ntouch with "),t("a",{attrs:{href:"mailto:products@wgtwo.com?subject=%5BAPI%5D%20Voicemail",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("products@wgtwo.com")]),o._v("\nif you want to discuss this option.")])]),t("DemoConfigurer"),t("h2",{attrs:{id:"forward-all-calls-unconditional-to-another-number"}},[t("a",{attrs:{href:"#forward-all-calls-unconditional-to-another-number","aria-hidden":"true"}},[o._v("#")]),o._v("Forward all calls (unconditional) to another number")]),t("CodeSnippet",{attrs:{grpcurlOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/forwarding/unconditional_to_number.sh",grpcurlThirdpartydev:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/forwarding/unconditional_to_number.sh",kotlinDeps:["data-grpc","utils-grpc"],kotlinOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/forwarding/src/main/kotlin/com/wgtwo/examples/operator/forwarding/UnconditionalCallForwardingToNumber.kt",kotlinThirdpartydev:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/forwarding/src/main/kotlin/com/wgtwo/examples/thirdpartydev/forwarding/UnconditionalCallForwardingToNumber.kt"}}),t("h2",{attrs:{id:"forward-calls-if-busy-or-unavailable-conditional-to-another-number"}},[t("a",{attrs:{href:"#forward-calls-if-busy-or-unavailable-conditional-to-another-number","aria-hidden":"true"}},[o._v("#")]),o._v("Forward calls if busy or unavailable (conditional) to another number")]),t("CodeSnippet",{attrs:{grpcurlOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/forwarding/conditional_to_number.sh",grpcurlThirdpartydev:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/forwarding/conditional_to_number.sh",kotlinDeps:["data-grpc","utils-grpc"],kotlinOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/forwarding/src/main/kotlin/com/wgtwo/examples/operator/forwarding/ConditionalCallForwardingToNumber.kt",kotlinThirdpartydev:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/forwarding/src/main/kotlin/com/wgtwo/examples/thirdpartydev/forwarding/ConditionalCallForwardingToNumber.kt"}}),t("h2",{attrs:{id:"forward-all-calls-unconditional-to-a-trunk"}},[t("a",{attrs:{href:"#forward-all-calls-unconditional-to-a-trunk","aria-hidden":"true"}},[o._v("#")]),o._v("Forward all calls (unconditional) to a trunk")]),t("CodeSnippet",{attrs:{grpcurlOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/forwarding/unconditional_to_trunk.sh",grpcurlThirdpartydev:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/forwarding/unconditional_to_trunk.sh",kotlinDeps:["data-grpc","utils-grpc"],kotlinOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/forwarding/src/main/kotlin/com/wgtwo/examples/operator/forwarding/UnconditionalCallForwardingToTrunk.kt",kotlinThirdpartydev:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/forwarding/src/main/kotlin/com/wgtwo/examples/thirdpartydev/forwarding/UnconditionalCallForwardingToTrunk.kt"}}),t("h2",{attrs:{id:"forward-calls-if-busy-or-unavailable-or-no-answer-conditional-to-default-voicemail"}},[t("a",{attrs:{href:"#forward-calls-if-busy-or-unavailable-or-no-answer-conditional-to-default-voicemail","aria-hidden":"true"}},[o._v("#")]),o._v("Forward calls if busy or unavailable or no answer (conditional) to default voicemail")]),t("CodeSnippet",{attrs:{grpcurlOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/forwarding/conditional_to_voicemail.sh",grpcurlThirdpartydev:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/forwarding/conditional_to_voicemail.sh",kotlinDeps:["data-grpc","utils-grpc"],kotlinOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/forwarding/src/main/kotlin/com/wgtwo/examples/operator/forwarding/ConditionalCallForwardingToVoicemail.kt",kotlinThirdpartydev:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/forwarding/src/main/kotlin/com/wgtwo/examples/thirdpartydev/forwarding/ConditionalCallForwardingToVoicemail.kt"}}),t("h2",{attrs:{id:"disable-call-forwarding"}},[t("a",{attrs:{href:"#disable-call-forwarding","aria-hidden":"true"}},[o._v("#")]),o._v("Disable call forwarding")]),t("CodeSnippet",{attrs:{grpcurlOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/forwarding/disable.sh",grpcurlThirdpartydev:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/forwarding/disable.sh",kotlinDeps:["data-grpc","utils-grpc"],kotlinOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/forwarding/src/main/kotlin/com/wgtwo/examples/operator/forwarding/DisableCallForwarding.kt",kotlinThirdpartydev:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/forwarding/src/main/kotlin/com/wgtwo/examples/thirdpartydev/forwarding/DisableCallForwarding.kt"}}),t("h2",{attrs:{id:"concepts"}},[t("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[o._v("#")]),o._v("Concepts")]),t("ul",[t("li",[t("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("Three types of stubs: asynchronous, blocking, and future")])]),t("li",[t("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[o._v("gRPC Concepts")])])])],1)}),[],!1,null,null,null);"function"==typeof s&&s(w),"function"==typeof u&&u(w);r.default=w.exports},UQSp:function(o,r,t){"use strict";r.a={name:"VueRemarkRoot",render:function(o){return o("div",null,this.$slots.default)}}}}]);