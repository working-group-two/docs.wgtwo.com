(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"2CJL":function(e,t,n){},"2tUt":function(e,t,n){"use strict";n.r(t);var r=n("KHd+"),o=n("8/MJ"),s=n("L2JU"),a={components:{LanguageTabs:n("4Lty").a},computed:Object(o.a)({},Object(s.c)(["isOperatorTabSelected","isThirdPartyDeveloperTabSelected"]))},i=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("language-tabs",{scopedSlots:e._u([{key:"grpcurl",fn:function(){return[n("GithubCode",{directives:[{name:"show",rawName:"v-show",value:e.isOperatorTabSelected,expression:"isOperatorTabSelected"}],key:"operator",attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/operator/sms/send-text-sms.sh",language:"shell"},on:{"code-fetched":function(t){return e.$forceUpdate()}}}),n("GithubCode",{directives:[{name:"show",rawName:"v-show",value:e.isThirdPartyDeveloperTabSelected,expression:"isThirdPartyDeveloperTabSelected"}],key:"thirdpartydev",attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/grpcurl/thirdpartydev/sms/send-text-sms.sh",language:"shell"},on:{"code-fetched":function(t){return e.$forceUpdate()}}})]},proxy:!0}])})}),[],!1,null,null,null).exports,c=n("UQSp"),l=n("Kw5r");function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}l.a.config.optionMergeStrategies;var u={SendSms:i,VueRemarkRoot:c.a},p=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(u).forEach((function(e){"object"===d(u[e])&&"function"==typeof u[e].render||"function"==typeof u[e]&&"function"==typeof u[e].options.render?t[e]=u[e]:n[e]=function(){return u[e]}}))},h=l.a.config.optionMergeStrategies,b="__vueRemarkFrontMatter",f={excerpt:null,title:"Send SMS",topic:"sms",type:"how-to",typeOrder:1,roles:["THIRD_PARTY_DEVELOPER","OPERATOR"]};var v=function(e){e.options[b]&&(e.options[b]=f),l.a.util.defineReactive(e.options,b,f),e.options.computed=h.computed({$frontmatter:function(){return e.options[b]}},e.options.computed)},m=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("h1",{attrs:{id:"how-to-send-sms"}},[n("a",{attrs:{href:"#how-to-send-sms","aria-hidden":"true"}},[e._v("#")]),e._v("How to send SMS")]),n("h2",{attrs:{id:"overview"}},[n("a",{attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v("Overview")]),n("p",[e._v("This example shows how you can send text and binary SMSes. In order to send SMSes your credentials need to have the\n"),n("code",{pre:!0},[e._v("sms.send.to_subscriber")]),e._v(" and "),n("code",{pre:!0},[e._v("sms.send.from_subscriber")]),e._v(" rights.")]),n("h3",{attrs:{id:"limitations-on-smssendto_subscriber"}},[n("a",{attrs:{href:"#limitations-on-smssendto_subscriber","aria-hidden":"true"}},[e._v("#")]),e._v("Limitations on "),n("code",{pre:!0},[e._v("sms.send.to_subscriber")])]),n("table",[n("thead",[n("tr",[n("th",[e._v("Type")]),n("th",[e._v("Description")])])]),n("tbody",[n("tr",[n("td",[e._v("Operator")]),n("td",[e._v("May send SMS to subscriber from any sender ID, limited to 11 alphanumeric characters")])]),n("tr",[n("td",[e._v("Third Party Developer")]),n("td",[e._v("May send SMS to subscriber from configured product name to subscriber, with any non-alphanumeric characters stripped and truncated to max length of 11")])])])]),n("DemoConfigurer"),n("h2",{attrs:{id:"grpcurl"}},[n("a",{attrs:{href:"#grpcurl","aria-hidden":"true"}},[e._v("#")]),e._v("grpcurl")]),n("h3",{attrs:{id:"send-text-sms"}},[n("a",{attrs:{href:"#send-text-sms","aria-hidden":"true"}},[e._v("#")]),e._v("Send text SMS")]),n("p",[e._v("Send SMS from subscriber number to international number.\n"),n("SendSms")],1),n("h3",{attrs:{id:"send-binary-sms"}},[n("a",{attrs:{href:"#send-binary-sms","aria-hidden":"true"}},[e._v("#")]),e._v("Send binary SMS")]),n("p",[e._v("Unfortunately, "),n("code",{pre:!0},[e._v("grpcurl")]),e._v(" only allows to send JSON formatted strings, so it can't be used to send binary SMS.\nPlease have a look at the code example for Java / Kotlin below.")]),n("h2",{attrs:{id:"java--kotlin"}},[n("a",{attrs:{href:"#java--kotlin","aria-hidden":"true"}},[e._v("#")]),e._v("Java / Kotlin")]),n("h3",{attrs:{id:"install-dependencies"}},[n("a",{attrs:{href:"#install-dependencies","aria-hidden":"true"}},[e._v("#")]),e._v("Install dependencies")]),n("JitpackDependency"),n("p",[e._v("Then you can add "),n("code",{pre:!0},[e._v("sms-grpc")]),e._v(" and "),n("code",{pre:!0},[e._v("utils-grpc")]),e._v(":")]),n("ClientDependencies",{attrs:{clients:["sms-grpc","utils-grpc"]}}),n("h3",{attrs:{id:"send-text-sms-1"}},[n("a",{attrs:{href:"#send-text-sms-1","aria-hidden":"true"}},[e._v("#")]),e._v("Send text SMS")]),n("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/sms/src/main/kotlin/SendTextSmsToSubscriber.kt",language:"kotlin"}}),n("h3",{attrs:{id:"send-binary-sms-1"}},[n("a",{attrs:{href:"#send-binary-sms-1","aria-hidden":"true"}},[e._v("#")]),e._v("Send binary SMS")]),n("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/sms/src/main/kotlin/SendBinarySmsToSubscriber.kt",language:"kotlin"}}),n("h2",{attrs:{id:"resources"}},[n("a",{attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v("Resources")]),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/sms/v0/sms.proto",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("SMS API reference")])])]),n("h2",{attrs:{id:"concepts"}},[n("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[e._v("#")]),e._v("Concepts")]),n("ul",[n("li",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/SMS",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("wikipedia.org/wiki/SMS")])]),n("li",[n("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Three types of stubs: asynchronous, blocking, and future")])]),n("li",[n("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("gRPC Concepts")])])])],1)}),[],!1,null,null,null);"function"==typeof p&&p(m),"function"==typeof v&&v(m);t.default=m.exports},"4Lty":function(e,t,n){"use strict";var r=n("8/MJ"),o=n("L2JU"),s={components:{CustomiseAuthContent:n("cfvU").a},props:{kotlinDeps:Array},methods:Object(r.a)({},Object(o.d)(["setCodeLangIndex"])),computed:Object(r.a)(Object(r.a)({},Object(o.e)({codeLangIndex:function(e){return e.codeLang.codeLangIndex}})),Object(o.c)(["isOperatorTabSelected","isThirdPartyDeveloperTabSelected"]))},a=(n("lJt/"),n("Ra6p"),n("KHd+")),i=Object(a.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-tabs"},[n("CustomiseAuthContent",[n("b-tabs",{attrs:{value:e.codeLangIndex,animated:!1},on:{input:function(t){return e.setCodeLangIndex(t)}}},[e.$slots.grpcurl||!e.$slots.curl?n("b-tab-item",{attrs:{label:"grpcurl",icon:"bash"}},[e._t("grpcurl",[e._v("\n          Not available.\n        ")])],2):e._e(),e.$slots.curl?n("b-tab-item",{attrs:{label:"curl",icon:"bash"}},[e._t("curl",[e._v("\n          Not available.\n        ")])],2):e._e(),n("b-tab-item",{staticClass:"content",attrs:{label:"Kotlin",icon:"language-kotlin"}},[e.kotlinDeps?n("b-collapse",{staticClass:"card",attrs:{open:!1},scopedSlots:e._u([{key:"trigger",fn:function(t){return n("div",{staticClass:"card-header",attrs:{role:"button"}},[n("p",{staticClass:"card-header-title"},[e._v("Install dependencies")]),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:t.open?"menu-down":"menu-up"}})],1)])}}],null,!1,1656293758)},[n("div",{staticClass:"card-content"},[n("JitpackDependency"),n("p",[e._v("Then you can add the dependencies:")]),n("ClientDependencies",{attrs:{clients:e.kotlinDeps}})],1)]):e._e(),e.$slots.kotlin?n("div",{staticClass:"is-size-4 mt-4"},[e._v("Snippet")]):e._e(),e._t("kotlin",[e._v("\n          Not available.\n        ")])],2)],1)],1)],1)}),[],!1,null,"b0a0d780",null);t.a=i.exports},Bs7Q:function(e,t,n){},Ra6p:function(e,t,n){"use strict";var r=n("2CJL");n.n(r).a},U7U9:function(e,t,n){},UQSp:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},cfvU:function(e,t,n){"use strict";n("QWBl"),n("FZtP"),n("R5XZ");var r=n("8/MJ"),o=n("L2JU"),s={render:function(e){return e("div",{props:{operatorToken:this.operatorToken,clientId:this.clientId,clientSecret:this.clientSecret,accessToken:this.accessToken,userToken:this.userToken}},this.$slots.default)},updated:function(){var e=this;this.updateTokens(this.roleByActiveTab),setTimeout((function(){e.updateTokens(e.roleByActiveTab)}),300)},methods:{updateTokens:function(e){var t=this;function n(e){return'"'+e+'"'}function r(e,t,n){e.innerText===t&&(e.classList.add("your-token-here"),e.innerText=n)}this.$el.querySelectorAll("pre > code").forEach((function(e){"Loading..."!==e.textContent&&(e.hasAttribute("data-original-code")||e.setAttribute("data-original-code",e.textContent),e.textContent=e.getAttribute("data-original-code"),Prism.highlightElement(e),e.querySelectorAll(".token").forEach((function(e){r(e,"${OPERATOR_TOKEN}",t.operatorToken),r(e,"${CLIENT_ID}",t.clientId),r(e,'"CLIENT_ID"',n(t.clientId)),r(e,"${CLIENT_SECRET}",t.clientSecret),r(e,'"CLIENT_SECRET"',n(t.clientSecret)),r(e,"${ACCESS_TOKEN}",t.accessToken),r(e,'"ACCESS_TOKEN"',n(t.accessToken)),r(e,"${USER_TOKEN}",t.userToken),r(e,'"USER_TOKEN"',n(t.userToken))})))}))}},computed:Object(r.a)(Object(r.a)({},Object(o.c)(["operatorToken","roleByActiveTab"])),Object(o.e)({clientId:function(e){return e.credentials.clientId},clientSecret:function(e){return e.credentials.clientSecret},accessToken:function(e){return e.credentials.accessToken},userToken:function(e){return e.credentials.userToken}}))},a=(n("zGn+"),n("KHd+")),i=Object(a.a)(s,void 0,void 0,!1,null,null,null);t.a=i.exports},"lJt/":function(e,t,n){"use strict";var r=n("Bs7Q");n.n(r).a},"zGn+":function(e,t,n){"use strict";var r=n("U7U9");n.n(r).a}}]);