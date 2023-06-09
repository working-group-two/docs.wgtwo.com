(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},uTbJ:function(e,t,a){"use strict";a.r(t);var n=a("7uw+"),r=a("UQSp"),i=a("Kw5r");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:r.a},l=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===o(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:a[e]=function(){return s[e]}}))},p=i.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",c={excerpt:null,title:"Configuration and types",topic:"events",type:"explanation",roles:["THIRD_PARTY_DEVELOPER","OPERATOR"]};var _=function(e){e.options[u]&&(e.options[u]=c),i.a.util.defineReactive(e.options,u,c),e.options.computed=p.computed({$frontmatter:function(){return e.options[u]}},e.options.computed)},d=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("VueRemarkRoot",[a("h1",{attrs:{id:"configuration-and-types"}},[a("a",{attrs:{href:"#configuration-and-types","aria-hidden":"true"}},[e._v("#")]),e._v("Configuration and types")]),a("p",[e._v("Depending on your need, you may choose between some different types of subscriptions for events.")]),a("p",[e._v("For simple testing, you may start with a regular subscription without setting any other parameters than the list of\nevent types you would like to receive.")]),a("p",[a("strong",[e._v("Example:")])]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",{pre:!0,attrs:{class:"language-json"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"HANDSET_UPDATE_EVENT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])]),a("h2",{attrs:{id:"recommended-production-configuration"}},[a("a",{attrs:{href:"#recommended-production-configuration","aria-hidden":"true"}},[e._v("#")]),e._v("Recommended production configuration")]),a("p",[e._v("For production, we recommend the following settings:")]),a("ol",[a("li",[a("code",{pre:!0},[e._v("queue_name")]),a("em",[e._v("Events are shared between all listeners with this name.")])]),a("li",[a("code",{pre:!0},[e._v("durable_name")]),a("em",[e._v("Even if all clients are disconnected, you will still be able to resume from current position.")])]),a("li",[a("code",{pre:!0},[e._v("manual _ack")]),a("em",[e._v("You can ack after you have successfully read the message to ensure nothing is lost in transit. If a message is not acked, it will be resent.")])]),a("li",[a("code",{pre:!0},[e._v("max_in_flight")]),a("em",[e._v("You will not have more than this amount of unacknowledged messages")])])]),a("p",[a("strong",[e._v("Example")])]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",{pre:!0,attrs:{class:"language-json"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"queue_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"my-queue-name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"durable_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"my-durable-name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"max_in_flight"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"manual_ack"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"enable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"timeout"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"30s"')]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])]),a("p",[e._v("Setting queue and durable name will allow you can share load between your instances, and that you can resume streaming\nof the events from your current position if your client goes down.")]),a("p",[e._v("Enabling "),a("code",{pre:!0},[e._v("manual_ack")]),e._v(" and setting "),a("code",{pre:!0},[e._v("max_in_flight")]),e._v(" will allow clients to rate limit traffic, and ensure events are\nnot dropped before they are properly handled.")]),a("p",[e._v("It is recommended to ensure event processing is done such that events may be processed out of order. If processing\n"),a("em",[e._v("must")]),e._v(" be done in order, "),a("code",{pre:!0},[e._v("max_in_flight")]),e._v(" must be set to "),a("code",{pre:!0},[e._v("1")]),e._v(". ")]),a("blockquote",[a("p",[a("strong",[e._v("Note")])]),a("p",[e._v("Streams are expected to timeout or disconnect.\nWhen this happens, the client is expected to simply reconnect.\nAs the client has "),a("code",{pre:!0},[e._v("durable_name")]),e._v(" set, the client will resume where it left.")])]),a("h2",{attrs:{id:"start-position"}},[a("a",{attrs:{href:"#start-position","aria-hidden":"true"}},[e._v("#")]),e._v("Start position")]),a("p",[e._v("Our event server keeps 30 minutes of history.")]),a("p",[e._v("When your client connects, you may decide at which position it should start reading")]),a("h4",{attrs:{id:"options"}},[a("a",{attrs:{href:"#options","aria-hidden":"true"}},[e._v("#")]),e._v("Options")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("start_at_sequence")]),e._v(" Start at a given sequence number ("),a("code",{pre:!0},[e._v("0")]),e._v(" will read from oldest history)")]),a("li",[a("code",{pre:!0},[e._v("start_at_timestamp")]),e._v(" Start at the given timestamp")]),a("li",[a("code",{pre:!0},[e._v("start_at_time_delta")]),e._v(" Start at a given time offset, e.g. 5 minutes ago")]),a("li",[a("code",{pre:!0},[e._v("start_with_last_received")]),e._v(" Start with the last received event")])]),a("p",[e._v("If omitted the client will omit historical data and start reading new events only.")]),a("h2",{attrs:{id:"configuration"}},[a("a",{attrs:{href:"#configuration","aria-hidden":"true"}},[e._v("#")]),e._v("Configuration")]),a("h3",{attrs:{id:"manual-acks"}},[a("a",{attrs:{href:"#manual-acks","aria-hidden":"true"}},[e._v("#")]),e._v("Manual acks")]),a("p",[e._v("If enable, this will require clients to do a gRPC call to manual acknowledge events. If a event is not acknowledged\nwithin its timeout, it will be retransmitted.")]),a("p",[e._v("The event's metadata field "),a("code",{pre:!0},[e._v("is_redelivered")]),e._v(" will be set to true for the retransmitted event.")]),a("p",[e._v("If manual acks is not enabled, a event will be implicitly acked after the server has sent the gRPC message.\nIn case of gRPC issues, you may still get messages redelivered.")]),a("h4",{attrs:{id:"options-1"}},[a("a",{attrs:{href:"#options-1","aria-hidden":"true"}},[e._v("#")]),e._v("Options")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("enable")]),e._v(" Set to true if enabled")]),a("li",[a("code",{pre:!0},[e._v("timeout")]),e._v(" Set to the desired ack timeout")])]),a("h3",{attrs:{id:"max-in-flight"}},[a("a",{attrs:{href:"#max-in-flight","aria-hidden":"true"}},[e._v("#")]),e._v("Max in-flight")]),a("p",[e._v("The server will not send more than "),a("code",{pre:!0},[e._v("max_in_flight")]),e._v(" messages before they are acknowledged.\nIf your client has strict requirements to process all events in-order, this must be set to 1.")]),a("p",[e._v("This setting is most useful if combined with manual acks.")]),a("h2",{attrs:{id:"subscription-types"}},[a("a",{attrs:{href:"#subscription-types","aria-hidden":"true"}},[e._v("#")]),e._v("Subscription types")]),a("h3",{attrs:{id:"regular"}},[a("a",{attrs:{href:"#regular","aria-hidden":"true"}},[e._v("#")]),e._v("Regular")]),a("p",[e._v("The subscriptions remembers theirs position while the client is connected. That is, no information is kept on server\nafter disconnect.")]),a("p",[e._v("Will start reading from the the specified start position if specified.\nIf no start position is set, it will skip previous events.")]),a("h4",{attrs:{id:"mandatory-input"}},[a("a",{attrs:{href:"#mandatory-input","aria-hidden":"true"}},[e._v("#")]),e._v("Mandatory input")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("type")]),e._v(" List of event types")])]),a("h4",{attrs:{id:"optional-input"}},[a("a",{attrs:{href:"#optional-input","aria-hidden":"true"}},[e._v("#")]),e._v("Optional input")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("start_position")]),a("a",{attrs:{href:"#start-position"}},[e._v("Start position, one of")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("start_at_sequence")])]),a("li",[a("code",{pre:!0},[e._v("start_at_timestamp")])]),a("li",[a("code",{pre:!0},[e._v("start_at_time_delta")])]),a("li",[a("code",{pre:!0},[e._v("start_with_last_received")])])])]),a("li",[a("code",{pre:!0},[e._v("manual_ack")]),a("a",{attrs:{href:"#manual-acks"}},[e._v("Manual ack config")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("enable")]),e._v(" Enable manual ack (true/false)")]),a("li",[a("code",{pre:!0},[e._v("timeout")]),e._v(" Timeout before resending unacknowledged message")])])]),a("li",[a("code",{pre:!0},[e._v("max_in_flight")]),a("a",{attrs:{href:"#max-in-flight"}},[e._v("Max number of concurrent unacknowledged events")])])]),a("h3",{attrs:{id:"durable"}},[a("a",{attrs:{href:"#durable","aria-hidden":"true"}},[e._v("#")]),e._v("Durable")]),a("p",[e._v("The subscriptions remember their position even if the client disconnects.")]),a("p",[e._v("It will start from this position when it starts if the subscription is still present in the server (expires after 1h).")]),a("p",[e._v("This subscription identify itself by "),a("code",{pre:!0},[e._v("client_id")]),e._v(" + "),a("code",{pre:!0},[e._v("durable_name")])]),a("h4",{attrs:{id:"mandatory-input-1"}},[a("a",{attrs:{href:"#mandatory-input-1","aria-hidden":"true"}},[e._v("#")]),e._v("Mandatory input")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("type")]),e._v(" List of event types")]),a("li",[a("code",{pre:!0},[e._v("client_id")]),e._v(" Name of the client")]),a("li",[a("code",{pre:!0},[e._v("durable_name")]),e._v(" Name of the durable connection")])]),a("h4",{attrs:{id:"optional-input-1"}},[a("a",{attrs:{href:"#optional-input-1","aria-hidden":"true"}},[e._v("#")]),e._v("Optional input")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("start_position")]),a("a",{attrs:{href:"#start-position"}},[e._v("Start position, one of")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("start_at_sequence")])]),a("li",[a("code",{pre:!0},[e._v("start_at_timestamp")])]),a("li",[a("code",{pre:!0},[e._v("start_at_time_delta")])]),a("li",[a("code",{pre:!0},[e._v("start_with_last_received")])])])]),a("li",[a("code",{pre:!0},[e._v("manual_ack")]),a("a",{attrs:{href:"#manual-acks"}},[e._v("Manual ack config")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("enable")]),e._v(" Enable manual ack (true/false)")]),a("li",[a("code",{pre:!0},[e._v("timeout")]),e._v(" Timeout before resending unacknowledged message")])])]),a("li",[a("code",{pre:!0},[e._v("max_in_flight")]),a("a",{attrs:{href:"#max-in-flight"}},[e._v("Max number of concurrent unacknowledged events")])])]),a("h3",{attrs:{id:"queue"}},[a("a",{attrs:{href:"#queue","aria-hidden":"true"}},[e._v("#")]),e._v("Queue")]),a("p",[e._v("If two subscriptions share a queue name they are member of the same queue group.")]),a("p",[e._v("Any event published will only be sent to one of the connected clients, so this can be used to share load between\ntwo clients.")]),a("p",[e._v("If all connected clients are disconnected, position will be lost.\nIt will then start reading from the the specified start position if specified, or else skip previous events.")]),a("p",[e._v("If there are still some connected clients, it will ignore start position and start reading from their position.")]),a("h4",{attrs:{id:"mandatory-input-2"}},[a("a",{attrs:{href:"#mandatory-input-2","aria-hidden":"true"}},[e._v("#")]),e._v("Mandatory input")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("type")]),e._v(" List of event types")]),a("li",[a("code",{pre:!0},[e._v("client_id")]),e._v(" Name of the client")]),a("li",[a("code",{pre:!0},[e._v("queue_name")]),e._v(" Name of the queue (must be the same for all clients that should share load)")])]),a("h4",{attrs:{id:"optional-input-2"}},[a("a",{attrs:{href:"#optional-input-2","aria-hidden":"true"}},[e._v("#")]),e._v("Optional input")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("start_position")]),a("a",{attrs:{href:"#start-position"}},[e._v("Start position, one of")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("start_at_sequence")])]),a("li",[a("code",{pre:!0},[e._v("start_at_timestamp")])]),a("li",[a("code",{pre:!0},[e._v("start_at_time_delta")])]),a("li",[a("code",{pre:!0},[e._v("start_with_last_received")])])])]),a("li",[a("code",{pre:!0},[e._v("manual_ack")]),a("a",{attrs:{href:"#manual-acks"}},[e._v("Manual ack config")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("enable")]),e._v(" Enable manual ack (true/false)")]),a("li",[a("code",{pre:!0},[e._v("timeout")]),e._v(" Timeout before resending unacknowledged message")])])]),a("li",[a("code",{pre:!0},[e._v("max_in_flight")]),a("a",{attrs:{href:"#max-in-flight"}},[e._v("Max number of concurrent unacknowledged events")])])]),a("h3",{attrs:{id:"queuedurable"}},[a("a",{attrs:{href:"#queuedurable","aria-hidden":"true"}},[e._v("#")]),e._v("Queue/Durable")]),a("p",[e._v("A durable queue will keep state on the server even if all subscriptions member of the gueue group has\ndisconnected.")]),a("p",[e._v("Each connected client will get a share of the traffic as for queue, but you may resume reading from\nthe previous position even if all clients are disconnected.")]),a("h4",{attrs:{id:"mandatory-input-3"}},[a("a",{attrs:{href:"#mandatory-input-3","aria-hidden":"true"}},[e._v("#")]),e._v("Mandatory input")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("type")]),e._v(" List of event types")]),a("li",[a("code",{pre:!0},[e._v("durable_name")]),e._v(" Name of the durable connection")]),a("li",[a("code",{pre:!0},[e._v("queue_name")]),e._v(" Name of the queue (must be the same for all clients that should share load)")])]),a("h4",{attrs:{id:"optional-input-3"}},[a("a",{attrs:{href:"#optional-input-3","aria-hidden":"true"}},[e._v("#")]),e._v("Optional input")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("start_position")]),a("a",{attrs:{href:"#start-position"}},[e._v("Start position, one of")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("start_at_sequence")])]),a("li",[a("code",{pre:!0},[e._v("start_at_timestamp")])]),a("li",[a("code",{pre:!0},[e._v("start_at_time_delta")])]),a("li",[a("code",{pre:!0},[e._v("start_with_last_received")])])])]),a("li",[a("code",{pre:!0},[e._v("manual_ack")]),a("a",{attrs:{href:"#manual-acks"}},[e._v("Manual ack config")]),a("ul",[a("li",[a("code",{pre:!0},[e._v("enable")]),e._v(" Enable manual ack (true/false)")]),a("li",[a("code",{pre:!0},[e._v("timeout")]),e._v(" Timeout before resending unacknowledged message")])])]),a("li",[a("code",{pre:!0},[e._v("max_in_flight")]),a("a",{attrs:{href:"#max-in-flight"}},[e._v("Max number of concurrent unacknowledged events")])])])])}),[],!1,null,null,null);"function"==typeof l&&l(d),"function"==typeof _&&_(d);t.default=d.exports}}]);