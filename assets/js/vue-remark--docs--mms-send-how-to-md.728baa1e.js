(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2CJL":function(e,t,r){},Bs7Q:function(e,t,r){},LRqJ:function(e,t,r){"use strict";var n=r("8/MJ"),o=r("L2JU"),i={components:{CustomiseAuthContent:r("cfvU").a},props:{kotlinDeps:Array},methods:Object(n.a)({},Object(o.d)(["setCodeLangIndex"])),computed:Object(n.a)(Object(n.a)({},Object(o.e)({codeLangIndex:function(e){return e.codeLang.codeLangIndex}})),Object(o.c)(["isOperatorTabSelected","isThirdPartyDeveloperTabSelected"]))},a=(r("lJt/"),r("Ra6p"),r("KHd+")),s={components:{LanguageTabs:Object(a.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-tabs"},[r("CustomiseAuthContent",[r("b-tabs",{attrs:{value:e.codeLangIndex,animated:!1},on:{input:function(t){return e.setCodeLangIndex(t)}}},[e.$slots.grpcurl||!e.$slots.curl?r("b-tab-item",{attrs:{label:"grpcurl",icon:"bash"}},[e._t("grpcurl",[e._v("\n          Not available.\n        ")])],2):e._e(),e.$slots.curl?r("b-tab-item",{attrs:{label:"curl",icon:"bash"}},[e._t("curl",[e._v("\n          Not available.\n        ")])],2):e._e(),r("b-tab-item",{staticClass:"content",attrs:{label:"Kotlin",icon:"language-kotlin"}},[e.kotlinDeps?r("b-collapse",{staticClass:"card",attrs:{open:!1},scopedSlots:e._u([{key:"trigger",fn:function(t){return r("div",{staticClass:"card-header",attrs:{role:"button"}},[r("p",{staticClass:"card-header-title"},[e._v("Install dependencies")]),r("a",{staticClass:"card-header-icon"},[r("b-icon",{attrs:{icon:t.open?"menu-down":"menu-up"}})],1)])}}],null,!1,1656293758)},[r("div",{staticClass:"card-content"},[r("JitpackDependency"),r("p",[e._v("Then you can add the dependencies:")]),r("ClientDependencies",{attrs:{clients:e.kotlinDeps}})],1)]):e._e(),e.$slots.kotlin?r("div",{staticClass:"is-size-4 mt-4"},[e._v("Snippet")]):e._e(),e._t("kotlin",[e._v("\n          Not available.\n        ")])],2)],1)],1)],1)}),[],!1,null,"b0a0d780",null).exports},props:{kotlinDeps:Array,kotlinOperator:String,kotlinThirdpartydev:String,grpcurlOperator:String,grpcurlThirdpartydev:String,curlOperator:String,curlThirdpartydev:String},computed:Object(n.a)({},Object(o.c)(["isOperatorTabSelected","isThirdPartyDeveloperTabSelected"]))},c=Object(a.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("language-tabs",{attrs:{kotlinDeps:e.kotlinDeps},scopedSlots:e._u([e.grpcurlOperator&&e.isOperatorTabSelected||e.grpcurlThirdpartydev&&e.isThirdPartyDeveloperTabSelected?{key:"grpcurl",fn:function(){return[e.isOperatorTabSelected?r("GithubCode",{key:"operator",attrs:{fileUrl:e.grpcurlOperator,language:"shell"},on:{"code-fetched":function(t){return e.$forceUpdate()}}}):e._e(),e.isThirdPartyDeveloperTabSelected?r("GithubCode",{key:"thirdpartydev",attrs:{fileUrl:e.grpcurlThirdpartydev,language:"shell"},on:{"code-fetched":function(t){return e.$forceUpdate()}}}):e._e()]},proxy:!0}:null,e.curlOperator&&e.isOperatorTabSelected||e.curlThirdpartydev&&e.isThirdPartyDeveloperTabSelected?{key:"curl",fn:function(){return[e.isOperatorTabSelected?r("GithubCode",{key:"operator",attrs:{fileUrl:e.curlOperator,language:"shell"},on:{"code-fetched":function(t){return e.$forceUpdate()}}}):e._e(),e.isThirdPartyDeveloperTabSelected?r("GithubCode",{key:"thirdpartydev",attrs:{fileUrl:e.curlThirdpartydev,language:"shell"},on:{"code-fetched":function(t){return e.$forceUpdate()}}}):e._e()]},proxy:!0}:null,e.kotlinOperator&&e.isOperatorTabSelected||e.kotlinThirdpartydev&&e.isThirdPartyDeveloperTabSelected?{key:"kotlin",fn:function(){return[e.isOperatorTabSelected?r("GithubCode",{key:"operator",attrs:{fileUrl:e.kotlinOperator,language:"kotlin"},on:{"code-fetched":function(t){return e.$forceUpdate()}}}):e._e(),e.isThirdPartyDeveloperTabSelected?r("GithubCode",{key:"thirdpartydev",attrs:{fileUrl:e.kotlinThirdpartydev,language:"kotlin"},on:{"code-fetched":function(t){return e.$forceUpdate()}}}):e._e()]},proxy:!0}:null],null,!0)})}),[],!1,null,null,null);t.a=c.exports},Ra6p:function(e,t,r){"use strict";var n=r("2CJL");r.n(n).a},SiRV:function(e,t,r){"use strict";r.r(t);var n=r("KHd+"),o=r("LRqJ"),i=r("UQSp"),a=r("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var c={CodeSnippet:o.a,VueRemarkRoot:i.a},l=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(c).forEach((function(e){"object"===s(c[e])&&"function"==typeof c[e].render||"function"==typeof c[e]&&"function"==typeof c[e].options.render?t[e]=c[e]:r[e]=function(){return c[e]}}))},d=a.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",p={excerpt:null,title:"Send MMS",topic:"mms",type:"how-to",typeOrder:1,roles:["THIRD_PARTY_DEVELOPER","OPERATOR"]};var f=function(e){e.options[u]&&(e.options[u]=p),a.a.util.defineReactive(e.options,u,p),e.options.computed=d.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},h=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"how-to-send-mms"}},[r("a",{attrs:{href:"#how-to-send-mms","aria-hidden":"true"}},[e._v("#")]),e._v("How to send MMS")]),r("h2",{attrs:{id:"overview"}},[r("a",{attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v("Overview")]),r("p",[e._v("This example shows how you can send MMS. In order to send MMSes your credentials need to have the\n"),r("code",{pre:!0},[e._v("mms.send.to_subscriber")]),e._v(" and "),r("code",{pre:!0},[e._v("mms.send.from_subscriber")]),e._v(" rights.")]),r("h3",{attrs:{id:"limitations-on-mmssendto_subscriber"}},[r("a",{attrs:{href:"#limitations-on-mmssendto_subscriber","aria-hidden":"true"}},[e._v("#")]),e._v("Limitations on "),r("code",{pre:!0},[e._v("mms.send.to_subscriber")])]),r("table",[r("thead",[r("tr",[r("th",[e._v("Type")]),r("th",[e._v("Description")])])]),r("tbody",[r("tr",[r("td",[e._v("Operator")]),r("td",[e._v("May send MMS to subscriber from any sender ID, limited to 11 alphanumeric characters")])]),r("tr",[r("td",[e._v("Third Party Developer")]),r("td",[e._v("May send MMS to subscriber from configured product name to subscriber, with any non-alphanumeric characters stripped and truncated to max length of 11")])])])]),r("DemoConfigurer"),r("h2",{attrs:{id:"send-audio-mms"}},[r("a",{attrs:{href:"#send-audio-mms","aria-hidden":"true"}},[e._v("#")]),e._v("Send audio MMS")]),r("CodeSnippet",{attrs:{kotlinDeps:["mms-grpc","utils-grpc"],kotlinOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/mms/src/main/kotlin/SendAudioToSubscriber.kt",kotlinThirdpartydev:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/mms/src/main/kotlin/SendAudioToSubscriber.kt"}}),r("h2",{attrs:{id:"concepts"}},[r("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[e._v("#")]),e._v("Concepts")]),r("ul",[r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Multimedia_Messaging_Service",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("wikipedia.org/wiki/MMS")])]),r("li",[r("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Three types of stubs: asynchronous, blocking, and future")])]),r("li",[r("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("gRPC Concepts")])])])],1)}),[],!1,null,null,null);"function"==typeof l&&l(h),"function"==typeof f&&f(h);t.default=h.exports},U7U9:function(e,t,r){},UQSp:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},cfvU:function(e,t,r){"use strict";r("QWBl"),r("FZtP"),r("R5XZ");var n=r("8/MJ"),o=r("L2JU"),i={render:function(e){return e("div",{props:{operatorToken:this.operatorToken,clientId:this.clientId,clientSecret:this.clientSecret,accessToken:this.accessToken,userToken:this.userToken}},this.$slots.default)},updated:function(){var e=this;this.updateTokens(this.roleByActiveTab),setTimeout((function(){e.updateTokens(e.roleByActiveTab)}),300)},methods:{updateTokens:function(e){var t=this;function r(e){return'"'+e+'"'}function n(e,t,r){e.innerText===t&&(e.classList.add("your-token-here"),e.innerText=r)}this.$el.querySelectorAll("pre > code").forEach((function(e){"Loading..."!==e.textContent&&(e.hasAttribute("data-original-code")||e.setAttribute("data-original-code",e.textContent),e.textContent=e.getAttribute("data-original-code"),Prism.highlightElement(e),e.querySelectorAll(".token").forEach((function(e){n(e,"${OPERATOR_TOKEN}",t.operatorToken),n(e,"${CLIENT_ID}",t.clientId),n(e,'"CLIENT_ID"',r(t.clientId)),n(e,"${CLIENT_SECRET}",t.clientSecret),n(e,'"CLIENT_SECRET"',r(t.clientSecret)),n(e,"${ACCESS_TOKEN}",t.accessToken),n(e,'"ACCESS_TOKEN"',r(t.accessToken)),n(e,"${USER_TOKEN}",t.userToken),n(e,'"USER_TOKEN"',r(t.userToken))})))}))}},computed:Object(n.a)(Object(n.a)({},Object(o.c)(["operatorToken","roleByActiveTab"])),Object(o.e)({clientId:function(e){return e.credentials.clientId},clientSecret:function(e){return e.credentials.clientSecret},accessToken:function(e){return e.credentials.accessToken},userToken:function(e){return e.credentials.userToken}}))},a=(r("zGn+"),r("KHd+")),s=Object(a.a)(i,void 0,void 0,!1,null,null,null);t.a=s.exports},"lJt/":function(e,t,r){"use strict";var n=r("Bs7Q");r.n(n).a},"zGn+":function(e,t,r){"use strict";var n=r("U7U9");r.n(n).a}}]);