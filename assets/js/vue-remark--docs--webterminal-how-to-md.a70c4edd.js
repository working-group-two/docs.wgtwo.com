(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},jMs0:function(e,t,a){"use strict";a.r(t);var r=a("7uw+"),i=a("UQSp"),n=a("Kw5r");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var o={VueRemarkRoot:i.a},s=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(o).forEach((function(e){"object"===l(o[e])&&"function"==typeof o[e].render||"function"==typeof o[e]&&"function"==typeof o[e].options.render?t[e]=o[e]:a[e]=function(){return o[e]}}))},d=n.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",v={excerpt:null,title:"Create a Web Terminal to make and receive calls",topic:"web terminal",type:"how-to",roles:["THIRD_PARTY_DEVELOPER","OPERATOR"],sourceExamples:["examples/kotlin/thirdpartydev/webterminal/src/main/kotlin/com/wgtwo/examples/thirdpartydev/webterminal/InitiateCall.kt","examples/grpcurl/thirdpartydev/webterminal/initiatecall.sh"]};var _=function(e){e.options[c]&&(e.options[c]=v),n.a.util.defineReactive(e.options,c,v),e.options.computed=d.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},p=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("h1",{attrs:{id:"make-and-receive-webrtc-calls"}},[a("a",{attrs:{href:"#make-and-receive-webrtc-calls","aria-hidden":"true"}},[e._v("#")]),e._v("Make and receive WebRTC calls")]),a("h2",{attrs:{id:"prerequisites"}},[a("a",{attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v("Prerequisites")]),a("ol",[a("li",[a("a",{attrs:{href:"/oauth-2-0/create-o-auth-2-0-client/"}},[e._v("An OAuth 2.0 client")])]),a("li",[a("a",{attrs:{href:"/oauth-2-0/get-client-access-token"}},[e._v("An access token")])])]),a("h2",{attrs:{id:"overview"}},[a("a",{attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v("Overview")]),a("p",[e._v("This API makes it possible to register a WebRTC terminal (or just Terminal) with our (voice) core, and then use it to make and receive calls just like a mobile phone does.")]),a("p",[e._v("In other words, the API enables development of a software phone fully integrated with our core.")]),a("p",[e._v("To access this API, your credentials must include "),a("code",{pre:!0},[e._v("call.control.answer_and_initiate")]),e._v(" scope.")]),a("h2",{attrs:{id:"the-api"}},[a("a",{attrs:{href:"#the-api","aria-hidden":"true"}},[e._v("#")]),e._v("The API")]),a("p",[e._v("The API is implemented as a gRPC service exchanging a specific set of Protocol Buffer messages with your Terminal.")]),a("p",[e._v("To register your Terminal with our core, you can use one of the two methods:")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("Pipe()")])]),a("li",[a("code",{pre:!0},[e._v("MultiPipe()")])])]),a("p",[e._v("Both methods serve the same purpose, but there is also a difference.")]),a("ul",[a("li",[e._v("If you want to handle multiple ongoing calls simultaneously, use "),a("code",{pre:!0},[e._v("MultiPipe()")])]),a("li",[e._v("For a single call at a time, use "),a("code",{pre:!0},[e._v("Pipe()")])])]),a("p",[e._v("Both methods receive and/or return a stream of "),a("code",{pre:!0},[e._v("WebTerminalMessage")]),e._v("s (two-way streaming).")]),a("p",[e._v("A "),a("code",{pre:!0},[e._v("WebTerminalMessage")]),e._v(" is a structure used to exchange messages between a Terminal and our core (see "),a("a",{attrs:{href:"/web-terminal/web-terminal-api-reference/"}},[e._v("proto")]),e._v(").")]),a("p",[e._v("For example, if you:")]),a("ol",[a("li",[e._v("register your Terminal (by calling either "),a("code",{pre:!0},[e._v("Pipe")]),e._v(" or "),a("code",{pre:!0},[e._v("MultiPipe")]),e._v(")")]),a("li",[e._v("initiate a call by pushing a "),a("code",{pre:!0},[e._v("WebTerminalMessage")]),e._v(" that contains an "),a("code",{pre:!0},[e._v("Offer")]),e._v(" to our core")]),a("li",[e._v("receive a "),a("code",{pre:!0},[e._v("WebTerminalMessage")]),e._v(" from our core containing "),a("code",{pre:!0},[e._v("Ringing")]),e._v(" followed by an "),a("code",{pre:!0},[e._v("Answer")])])]),a("p",[e._v("then")]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("your Terminal will know that the callee's phone¹ was first ringing, and then the callee answered the call.")])]),a("blockquote",[a("p",[e._v("¹ or another Terminal")])]),a("p",[e._v("In this manner, you are able to build quite a sophisticated application with the help of this API.")]),a("h3",{attrs:{id:"example-code"}},[a("a",{attrs:{href:"#example-code","aria-hidden":"true"}},[e._v("#")]),e._v("Example code")]),a("p",[e._v("The examples below merely demonstrate how to consume this API without prying into the logic of your application.")]),a("p",[e._v("In other words, they demonstrate how to")]),a("ul",[a("li",[e._v("create a Terminal")]),a("li",[e._v("push an "),a("code",{pre:!0},[e._v("Offer")]),e._v(" to the core")]),a("li",[e._v("receive messages from the core")])]),a("p",[e._v("For Java example, click "),a("a",{attrs:{href:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/thirdpartydev/webterminal/src/main/kotlin/com/wgtwo/examples/thirdpartydev/webterminal/InitiateCall.java",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(".")]),a("CodeSnippet",{attrs:{grpcurl:e.$sourceExamplesMap["examples/grpcurl/thirdpartydev/webterminal/initiatecall.sh"],kotlin:e.$sourceExamplesMap["examples/kotlin/thirdpartydev/webterminal/src/main/kotlin/com/wgtwo/examples/thirdpartydev/webterminal/InitiateCall.kt"]}}),a("h3",{attrs:{id:"common-scenarios"}},[a("a",{attrs:{href:"#common-scenarios","aria-hidden":"true"}},[e._v("#")]),e._v("Common scenarios")]),a("blockquote",[a("p",[e._v("Depending on the method used to register a WebRTC terminal, "),a("strong",[e._v("call_id")]),e._v(" in the scenarios below is either ignored ("),a("code",{pre:!0},[e._v("Pipe")]),e._v(") or mandatory ("),a("code",{pre:!0},[e._v("MultiPipe")]),e._v(").")]),a("p",[a("strong",[e._v("call_id")]),e._v(" is basically a random UUID either created by Terminal or by the core.")])]),a("h4",{attrs:{id:"initiating-a-call-from-a-webrtc-terminal"}},[a("a",{attrs:{href:"#initiating-a-call-from-a-webrtc-terminal","aria-hidden":"true"}},[e._v("#")]),e._v("Initiating a call from a WebRTC terminal")]),a("table",[a("thead",[a("tr",[a("th",{attrs:{align:"left"}},[e._v("#")]),a("th",{attrs:{align:"left"}},[e._v("↔")]),a("th",{attrs:{align:"left"}},[e._v("Note")])])]),a("tbody",[a("tr",[a("td",{attrs:{align:"left"}},[e._v("1")]),a("td",{attrs:{align:"left"}},[e._v("T → "),a("code",{pre:!0},[e._v("{Offer{sdp, msisdn}, call_id}")])]),a("td",{attrs:{align:"left"}},[e._v("Terminal sends an "),a("code",{pre:!0},[e._v("Offer")]),e._v(" with an SDP, a new UUID as "),a("strong",[e._v("call_id")]),e._v(" and the "),a("strong",[e._v("msisdn")]),e._v(" of the callee")])]),a("tr",[a("td",{attrs:{align:"left"}},[e._v("2")]),a("td",{attrs:{align:"left"}},[e._v("T ← "),a("code",{pre:!0},[e._v("{Answer{sdp}, call_id}")]),a("strong",[e._v("OR")]),a("code",{pre:!0},[e._v("{Bye{}, call_id}")])]),a("td",{attrs:{align:"left"}},[e._v("Terminal receives either an Answer with an SDP enclosed, or a "),a("code",{pre:!0},[e._v("Bye")]),e._v(" rejecting the call")])]),a("tr",[a("td",{attrs:{align:"left"}},[e._v("3")]),a("td",{attrs:{align:"left"}},[e._v("T ↔︎ "),a("code",{pre:!0},[e._v("{Bye{}, call_id}")])]),a("td",{attrs:{align:"left"}},[e._v("If established, the call eventually gets terminated with a "),a("code",{pre:!0},[e._v("Bye")]),e._v(" from either party")])])])]),a("h4",{attrs:{id:"receiving-an-incoming-call-from-the-core"}},[a("a",{attrs:{href:"#receiving-an-incoming-call-from-the-core","aria-hidden":"true"}},[e._v("#")]),e._v("Receiving an incoming call from the core")]),a("table",[a("thead",[a("tr",[a("th",{attrs:{align:"left"}},[e._v("#")]),a("th",{attrs:{align:"left"}},[e._v("↔")]),a("th",{attrs:{align:"left"}},[e._v("Note")])])]),a("tbody",[a("tr",[a("td",{attrs:{align:"left"}},[e._v("1")]),a("td",{attrs:{align:"left"}},[e._v("T ← "),a("code",{pre:!0},[e._v("{Offer{sdp, msisdn}, call_id}")])]),a("td",{attrs:{align:"left"}},[e._v("Terminal receives an "),a("code",{pre:!0},[e._v("Offer")]),e._v(" with an SDP, a new UUID as "),a("strong",[e._v("call_id")]),e._v(" and the "),a("strong",[e._v("msisdn")]),e._v(" of the caller")])]),a("tr",[a("td",{attrs:{align:"left"}},[e._v("2")]),a("td",{attrs:{align:"left"}},[e._v("T → "),a("code",{pre:!0},[e._v("{Ringing{}, call_id}")])]),a("td",{attrs:{align:"left"}},[e._v("(optional) Terminal tells the core that it is alerting the user")])]),a("tr",[a("td",{attrs:{align:"left"}},[e._v("3")]),a("td",{attrs:{align:"left"}},[e._v("T → "),a("code",{pre:!0},[e._v("{Answer{sdp}, call_id}")]),a("strong",[e._v("OR")]),a("code",{pre:!0},[e._v("{Bye{}, call_id}")])]),a("td",{attrs:{align:"left"}},[e._v("Terminal sends either an Answer with an SDP enclosed, or a "),a("code",{pre:!0},[e._v("Bye")]),e._v(" rejecting the call")])]),a("tr",[a("td",{attrs:{align:"left"}},[e._v("4")]),a("td",{attrs:{align:"left"}},[e._v("T ↔︎ "),a("code",{pre:!0},[e._v("{Bye{}, call_id}")])]),a("td",{attrs:{align:"left"}},[e._v("If established, the call eventually gets terminated with a "),a("code",{pre:!0},[e._v("Bye")]),e._v(" from either party")])])])]),a("h4",{attrs:{id:"observing-status"}},[a("a",{attrs:{href:"#observing-status","aria-hidden":"true"}},[e._v("#")]),e._v("Observing status")]),a("table",[a("thead",[a("tr",[a("th",{attrs:{align:"left"}},[e._v("#")]),a("th",{attrs:{align:"left"}},[e._v("↔")]),a("th",{attrs:{align:"left"}},[e._v("Note")])])]),a("tbody",[a("tr",[a("td",{attrs:{align:"left"}},[e._v("1")]),a("td",{attrs:{align:"left"}},[e._v("T ← "),a("code",{pre:!0},[e._v("{InCall{msisdn}, call_id}")])]),a("td",{attrs:{align:"left"}},[e._v("Terminal receives an "),a("code",{pre:!0},[e._v("InCall")]),e._v(" notification whenever its "),a("strong",[e._v("msisdn")]),e._v(" becomes a participant of a call on another terminal")])]),a("tr",[a("td",{attrs:{align:"left"}},[e._v("2")]),a("td",{attrs:{align:"left"}},[e._v("T ← "),a("code",{pre:!0},[e._v("{Idle{msisdn}, call_id}")])]),a("td",{attrs:{align:"left"}},[e._v("Terminal receives "),a("code",{pre:!0},[e._v("Idle")]),e._v(" whenever its "),a("strong",[e._v("msisdn")]),e._v(" becomes a non-participant of any call")])])])]),a("blockquote",[a("p",[a("code",{pre:!0},[e._v("Pipe()")]),e._v(": "),a("strong",[e._v("call_id")]),e._v(" in Idle is empty as these messages are about the associated "),a("strong",[e._v("msisdn")]),e._v(".  ")]),a("p",[a("code",{pre:!0},[e._v("MultiPipe()")]),e._v(": "),a("strong",[e._v("call_id")]),e._v(" indicates the call in question, for your Terminal to know which particular call has started/ended")])]),a("h4",{attrs:{id:"transferring-call-to-terminal"}},[a("a",{attrs:{href:"#transferring-call-to-terminal","aria-hidden":"true"}},[e._v("#")]),e._v("Transferring call to Terminal")]),a("p",[e._v("Upon reception of an "),a("code",{pre:!0},[e._v("InCall")]),e._v(" notification, Terminal can transfer the call to itself by sending a new "),a("code",{pre:!0},[e._v("Offer")]),e._v(" to the core")]),a("table",[a("thead",[a("tr",[a("th",{attrs:{align:"left"}},[e._v("#")]),a("th",{attrs:{align:"left"}},[e._v("↔")]),a("th",{attrs:{align:"left"}},[e._v("Note")])])]),a("tbody",[a("tr",[a("td",{attrs:{align:"left"}},[e._v("1")]),a("td",{attrs:{align:"left"}},[e._v("T → "),a("code",{pre:!0},[e._v("{Offer{sdp, msisdn}, call_id}")])]),a("td",{attrs:{align:"left"}},[a("strong",[e._v("call_id")]),e._v(" must be the one from the "),a("code",{pre:!0},[e._v("InCall")]),e._v(" received")])]),a("tr",[a("td",{attrs:{align:"left"}},[e._v("2")]),a("td",{attrs:{align:"left"}},[e._v("T ← "),a("code",{pre:!0},[e._v("{Answer{sdp}, call_id}")]),a("strong",[e._v("OR")]),a("code",{pre:!0},[e._v("{Bye{}, call_id}")])]),a("td",{attrs:{align:"left"}},[e._v("Terminal receives either an Answer with an SDP enclosed, or a "),a("code",{pre:!0},[e._v("Bye")]),e._v(" rejecting the call")])]),a("tr",[a("td",{attrs:{align:"left"}},[e._v("3")]),a("td",{attrs:{align:"left"}},[e._v("T ↔︎ "),a("code",{pre:!0},[e._v("{Bye{}, call_id}")])]),a("td",{attrs:{align:"left"}},[e._v("If established, the call eventually gets terminated with a "),a("code",{pre:!0},[e._v("Bye")]),e._v(" from either party")])])])]),a("h4",{attrs:{id:"transferring-call-to-the-mobile-terminal"}},[a("a",{attrs:{href:"#transferring-call-to-the-mobile-terminal","aria-hidden":"true"}},[e._v("#")]),e._v("Transferring call to the mobile terminal")]),a("p",[e._v("Whenever in a call, Terminal can transfer it to the associated mobile phone by sending "),a("code",{pre:!0},[e._v("{Action{ToPhone{}}")]),e._v(" message to the core.")]),a("table",[a("thead",[a("tr",[a("th",{attrs:{align:"left"}},[e._v("#")]),a("th",{attrs:{align:"left"}},[e._v("↔")]),a("th",{attrs:{align:"left"}},[e._v("Note")])])]),a("tbody",[a("tr",[a("td",{attrs:{align:"left"}},[e._v("1")]),a("td",{attrs:{align:"left"}},[e._v("T → "),a("code",{pre:!0},[e._v("{Action{ToPhone{}}, call_id}")])]),a("td",{attrs:{align:"left"}},[e._v("Requesting transfer to the phone ("),a("strong",[e._v("call_id")]),e._v(" must be the id of the call ongoing)")])]),a("tr",[a("td",{attrs:{align:"left"}},[e._v("2")]),a("td",{attrs:{align:"left"}},[e._v("T ← "),a("code",{pre:!0},[e._v("{InCall{msisdn}, call_id}")])]),a("td",{attrs:{align:"left"}},[e._v("Indicates that the call has been transfered to the phone")])]),a("tr",[a("td",{attrs:{align:"left"}},[e._v("3")]),a("td",{attrs:{align:"left"}},[e._v("T ↔︎ "),a("code",{pre:!0},[e._v("{Idle{msisdn}, call_id}")])]),a("td",{attrs:{align:"left"}},[e._v("Indicates that the call has ended")])])])]),a("h4",{attrs:{id:"ice"}},[a("a",{attrs:{href:"#ice","aria-hidden":"true"}},[e._v("#")]),e._v("ICE")]),a("p",[e._v("Terminal may send its candidates to the core within an SDP of Offer or Answer. WG2 media servers are on public\nInternet and will report its candidates in SDP.")]),a("h4",{attrs:{id:"renegotiating-sdp"}},[a("a",{attrs:{href:"#renegotiating-sdp","aria-hidden":"true"}},[e._v("#")]),e._v("Renegotiating SDP")]),a("p",[e._v("During an ongoing call, Terminal must be prepared to receive (and handle) "),a("code",{pre:!0},[e._v("Offer")]),e._v(" with a new SDP even though the "),a("code",{pre:!0},[e._v("Offer")]),e._v("/"),a("code",{pre:!0},[e._v("Answer")]),e._v(" exchange has completed.")]),a("table",[a("thead",[a("tr",[a("th",{attrs:{align:"left"}},[e._v("#")]),a("th",{attrs:{align:"left"}},[e._v("↔")]),a("th",{attrs:{align:"left"}},[e._v("Note")])])]),a("tbody",[a("tr",[a("td",{attrs:{align:"left"}},[e._v("1")]),a("td",{attrs:{align:"left"}},[e._v("T ← "),a("code",{pre:!0},[e._v("{Offer{sdp, msisdn}, call_id}")])]),a("td",{attrs:{align:"left"}},[e._v("The core uses "),a("code",{pre:!0},[e._v("Offer")]),e._v(" to update SDP")])])])]),a("h2",{attrs:{id:"concepts"}},[a("a",{attrs:{href:"#concepts","aria-hidden":"true"}},[e._v("#")]),e._v("Concepts")]),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("WebRTC basics")])]),a("li",[a("a",{attrs:{href:"https://grpc.io/docs/guides/concepts/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("gRPC concepts")])]),a("li",[a("a",{attrs:{href:"https://grpc.io/docs/languages/kotlin/basics/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Kotlin gRPC tutorial")])]),a("li",[a("a",{attrs:{href:"https://grpc.io/docs/reference/java/generated-code/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Java gRPC stubs")])])])],1)}),[],!1,null,null,null);"function"==typeof s&&s(p),"function"==typeof _&&_(p);t.default=p.exports}}]);