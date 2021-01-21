(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2CJL":function(e,t,n){},"4Lty":function(e,t,n){"use strict";var o=n("8/MJ"),r=n("L2JU"),i={components:{CustomiseAuthContent:n("cfvU").a},props:{kotlinDeps:Array},methods:Object(o.a)({},Object(r.d)(["setCodeLangIndex"])),computed:Object(o.a)(Object(o.a)({},Object(r.e)({codeLangIndex:function(e){return e.codeLang.codeLangIndex}})),Object(r.c)(["isOperatorTabSelected","isThirdPartyDeveloperTabSelected"]))},s=(n("JJsi"),n("Ra6p"),n("KHd+")),a=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-tabs"},[n("CustomiseAuthContent",[n("b-tabs",{attrs:{value:e.codeLangIndex,animated:!1},on:{input:function(t){return e.setCodeLangIndex(t)}}},[e.$slots.grpcurl?n("b-tab-item",{attrs:{label:"grpcurl",icon:"bash"}},[e._t("grpcurl",[e._v("\n          Not available.\n        ")])],2):e._e(),e.$slots.curl?n("b-tab-item",{attrs:{label:"curl",icon:"bash"}},[e._t("curl",[e._v("\n          Not available.\n        ")])],2):e._e(),e.$slots.kotlin?n("b-tab-item",{staticClass:"content",attrs:{label:"Kotlin",icon:"language-kotlin"}},[e.kotlinDeps?n("b-collapse",{staticClass:"card",attrs:{open:!1},scopedSlots:e._u([{key:"trigger",fn:function(t){return n("div",{staticClass:"card-header",attrs:{role:"button"}},[n("p",{staticClass:"card-header-title"},[e._v("Install dependencies")]),n("a",{staticClass:"card-header-icon"},[n("b-icon",{attrs:{icon:t.open?"menu-down":"menu-up"}})],1)])}}],null,!1,1656293758)},[n("div",{staticClass:"card-content"},[n("JitpackDependency"),n("p",[e._v("Then you can add the dependencies:")]),n("ClientDependencies",{attrs:{clients:e.kotlinDeps}})],1)]):e._e(),n("div",{staticClass:"is-size-4 mt-4"},[e._v("Snippet")]),e._t("kotlin",[e._v("\n          Not available\n        ")])],2):e._e()],1)],1)],1)}),[],!1,null,"4ee6abcc",null);t.a=a.exports},JJsi:function(e,t,n){"use strict";var o=n("YA32");n.n(o).a},Ra6p:function(e,t,n){"use strict";var o=n("2CJL");n.n(o).a},SiRV:function(e,t,n){"use strict";n.r(t);var o=n("KHd+"),r=n("8/MJ"),i=n("L2JU"),s={components:{LanguageTabs:n("4Lty").a},computed:Object(r.a)({},Object(i.c)(["isOperatorTabSelected","isThirdPartyDeveloperTabSelected"]))},a=Object(o.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("language-tabs",{attrs:{kotlinDeps:["mms-grpc","utils-grpc"]},scopedSlots:e._u([{key:"kotlin",fn:function(){return[n("GithubCode",{directives:[{name:"show",rawName:"v-show",value:e.isOperatorTabSelected,expression:"isOperatorTabSelected"}],key:"operator",attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/mms/src/main/kotlin/SendAudioToSubscriber.kt",language:"kotlin"},on:{"code-fetched":function(t){return e.$forceUpdate()}}}),n("GithubCode",{directives:[{name:"show",rawName:"v-show",value:e.isThirdPartyDeveloperTabSelected,expression:"isThirdPartyDeveloperTabSelected"}],key:"thirdpartydev",attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/mms/src/main/kotlin/SendAudioToSubscriber.kt",language:"kotlin"},on:{"code-fetched":function(t){return e.$forceUpdate()}}})]},proxy:!0}])})}),[],!1,null,null,null).exports,c=n("UQSp"),l=n("Kw5r");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}l.a.config.optionMergeStrategies;var d={SendAudioMms:a,VueRemarkRoot:c.a},p=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(d).forEach((function(e){"object"===u(d[e])&&"function"==typeof d[e].render||"function"==typeof d[e]&&"function"==typeof d[e].options.render?t[e]=d[e]:n[e]=function(){return d[e]}}))},f=l.a.config.optionMergeStrategies,m="__vueRemarkFrontMatter",b={excerpt:null,title:"Send MMS",topic:"mms",type:"how-to",typeOrder:1,roles:["THIRD_PARTY_DEVELOPER","OPERATOR"]};var h=function(e){e.options[m]&&(e.options[m]=b),l.a.util.defineReactive(e.options,m,b),e.options.computed=f.computed({$frontmatter:function(){return e.options[m]}},e.options.computed)},v=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("h1",{attrs:{id:"how-to-send-mms"}},[n("a",{attrs:{href:"#how-to-send-mms","aria-hidden":"true"}},[e._v("#")]),e._v("How to send MMS")]),n("h2",{attrs:{id:"overview"}},[n("a",{attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v("Overview")]),n("p",[e._v("This example shows how you can send MMS. In order to send MMSes your credentials need to have the\n"),n("code",{pre:!0},[e._v("mms.send.to_subscriber")]),e._v(" and "),n("code",{pre:!0},[e._v("mms.send.from_subscriber")]),e._v(" rights.")]),n("h3",{attrs:{id:"limitations-on-mmssendto_subscriber"}},[n("a",{attrs:{href:"#limitations-on-mmssendto_subscriber","aria-hidden":"true"}},[e._v("#")]),e._v("Limitations on "),n("code",{pre:!0},[e._v("mms.send.to_subscriber")])]),n("table",[n("thead",[n("tr",[n("th",[e._v("Type")]),n("th",[e._v("Description")])])]),n("tbody",[n("tr",[n("td",[e._v("Operator")]),n("td",[e._v("May send MMS to subscriber from any sender ID, limited to 11 alphanumeric characters")])]),n("tr",[n("td",[e._v("Third Party Developer")]),n("td",[e._v("May send MMS to subscriber from configured product name to subscriber, with any non-alphanumeric characters stripped and truncated to max length of 11")])])])]),n("DemoConfigurer"),n("h2",{attrs:{id:"send-audio-mms"}},[n("a",{attrs:{href:"#send-audio-mms","aria-hidden":"true"}},[e._v("#")]),e._v("Send Audio MMS")]),n("SendAudioMms"),n("h2",{attrs:{id:"resources"}},[n("a",{attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v("Resources")]),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/mms/v0/mms.proto",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("MMS API reference")])])]),n("h2",{attrs:{id:"concepts"}},[n("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[e._v("#")]),e._v("Concepts")]),n("ul",[n("li",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Multimedia_Messaging_Service",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("wikipedia.org/wiki/MMS")])]),n("li",[n("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Three types of stubs: asynchronous, blocking, and future")])]),n("li",[n("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("gRPC Concepts")])])])],1)}),[],!1,null,null,null);"function"==typeof p&&p(v),"function"==typeof h&&h(v);t.default=v.exports},U7U9:function(e,t,n){},UQSp:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},YA32:function(e,t,n){},cfvU:function(e,t,n){"use strict";n("QWBl"),n("FZtP");var o=n("8/MJ"),r=n("L2JU"),i={render:function(e){return e("div",{props:{operatorToken:this.operatorToken,clientId:this.clientId,clientSecret:this.clientSecret,accessToken:this.accessToken,userToken:this.userToken}},this.$slots.default)},updated:function(){this.updateTokens(this.roleByActiveTab)},methods:{updateTokens:function(e){var t=this;function n(e){return'"'+e+'"'}function o(e,t,n){e.innerText===t&&(e.classList.add("your-token-here"),e.innerText=n)}this.$el.querySelectorAll("pre > code").forEach((function(e){"Loading..."!==e.textContent&&(e.hasAttribute("data-original-code")||e.setAttribute("data-original-code",e.textContent),e.textContent=e.getAttribute("data-original-code"),Prism.highlightElement(e),e.querySelectorAll(".token").forEach((function(e){o(e,"${OPERATOR_TOKEN}",t.operatorToken),o(e,"${CLIENT_ID}",t.clientId),o(e,'"CLIENT_ID"',n(t.clientId)),o(e,"${CLIENT_SECRET}",t.clientSecret),o(e,'"CLIENT_SECRET"',n(t.clientSecret)),o(e,"${ACCESS_TOKEN}",t.accessToken),o(e,'"ACCESS_TOKEN"',n(t.accessToken)),o(e,"${USER_TOKEN}",t.userToken),o(e,'"USER_TOKEN"',n(t.userToken))})))}))}},computed:Object(o.a)(Object(o.a)({},Object(r.c)(["operatorToken","roleByActiveTab"])),Object(r.e)({clientId:function(e){return e.credentials.clientId},clientSecret:function(e){return e.credentials.clientSecret},accessToken:function(e){return e.credentials.accessToken},userToken:function(e){return e.credentials.userToken}}))},s=(n("zGn+"),n("KHd+")),a=Object(s.a)(i,void 0,void 0,!1,null,null,null);t.a=a.exports},"zGn+":function(e,t,n){"use strict";var o=n("U7U9");n.n(o).a}}]);