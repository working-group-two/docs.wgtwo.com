(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{UQSp:function(t,e,s){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},iX9Q:function(t,e,s){"use strict";s.r(e);var a=s("7uw+"),r=s("UQSp"),n=s("Kw5r");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.a.config.optionMergeStrategies;var _={VueRemarkRoot:r.a},p=function(t){var e=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(_).forEach((function(t){"object"===o(_[t])&&"function"==typeof _[t].render||"function"==typeof _[t]&&"function"==typeof _[t].options.render?e[t]=_[t]:s[t]=function(){return _[t]}}))},v=n.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",i={excerpt:null,title:"Subscription services",topic:"subscription profile",type:"api-reference",hideWarning:!0};var l=function(t){t.options[c]&&(t.options[c]=i),n.a.util.defineReactive(t.options,c,i),t.options.computed=v.computed({$frontmatter:function(){return t.options[c]}},t.options.computed)},d=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("VueRemarkRoot",[s("h1",{attrs:{id:"service-list"}},[s("a",{attrs:{href:"#service-list","aria-hidden":"true"}},[t._v("#")]),t._v("Service list")]),s("p",[t._v("This table shows what services are available through the v1 and v2 provisoning API surfaces.\nSome services depend on other services, e.g. to be able to make international calls, you need the "),s("code",{pre:!0},[t._v("VOICE_OUT_INTER")]),t._v(" service but also the general "),s("code",{pre:!0},[t._v("VOICE_OUT")]),t._v(" service, as shown below in the "),s("code",{pre:!0},[t._v("Requires services")]),t._v(" column.\nThis allows an operator to quickly block access to all voice services by removing only the "),s("code",{pre:!0},[t._v("VOICE_OUT")]),t._v(" service.\nSome services are configurable, examples are provided under "),s("a",{attrs:{href:"#configurable_services"}},[t._v("Configurable services")]),t._v(". ")]),s("table",[s("thead",[s("tr",[s("th",[t._v("Service name")]),s("th",[t._v("Description")]),s("th",[t._v("Available in APIv1")]),s("th",[t._v("Available in APIv2")]),s("th",[t._v("Requires services")])])]),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"./#data"}},[t._v("DATA")])]),s("td",[t._v("Data allowed")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td",[t._v("-")])]),s("tr",[s("td",[t._v("DATA_2G_3G")]),s("td",[t._v("Data on 2G and 3G networks allowed")]),s("td",[t._v("No")]),s("td",[t._v("Y")]),s("td",[t._v("DATA")])]),s("tr",[s("td",[t._v("DATA_2G_3G_ROAM")]),s("td",[t._v("Data on 2G and 3G networks allowed while roaming")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td",[t._v("DATA, DATA_2G_3G")])]),s("tr",[s("td",[t._v("DATA_4G")]),s("td",[t._v("Data on 4G networks allowed")]),s("td",[t._v("No")]),s("td",[t._v("Y")]),s("td",[t._v("DATA")])]),s("tr",[s("td",[t._v("DATA_4G_ROAM")]),s("td",[t._v("Data on 4G networks allowed while roaming")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td",[t._v("DATA, DATA_4G")])]),s("tr",[s("td",[t._v("DATA_5G")]),s("td",[t._v("Data on 5G networks allowed")]),s("td",[t._v("No")]),s("td",[t._v("Y")]),s("td",[t._v("DATA")])]),s("tr",[s("td",[t._v("DATA_5G_ROAM")]),s("td",[t._v("Data on 5G networks allowed while roaming")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td",[t._v("DATA, DATA_5G")])]),s("tr",[s("td",[s("a",{attrs:{href:"./#data_content_filtering"}},[t._v("DATA_CONTENT_FILTERING")])]),s("td",[t._v("Content filtering on mobile data")]),s("td",[t._v("No")]),s("td",[t._v("Y")]),s("td",[t._v("DATA")])]),s("tr",[s("td",[t._v("DATA_HIGHSPEED")]),s("td",[t._v("Data allowed at high speed")]),s("td",[t._v("Y")]),s("td",[t._v("No "),s("sup",[t._v("2")])]),s("td",[t._v("-")])]),s("tr",[s("td",[t._v("DATA_TETHERING")]),s("td",[t._v("Share data through tethering")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td",[t._v("DATA")])]),s("tr",[s("td",[t._v("MMS_IN")]),s("td",[t._v("Incoming MMS")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td")]),s("tr",[s("td",[t._v("MMS_IN_ROAM")]),s("td",[t._v("Incoming MMS while roaming")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td",[t._v("MMS_IN")])]),s("tr",[s("td",[t._v("MMS_OUT")]),s("td",[t._v("Outgoing MMS")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td",[t._v("-")])]),s("tr",[s("td",[t._v("MMS_OUT_ROAM")]),s("td",[t._v("Outgoing MMS while roaming")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td",[t._v("MMS_OUT")])]),s("tr",[s("td",[t._v("MMS_OUT_INTER")]),s("td",[t._v("Outgoing international MMS")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td",[t._v("MMS_OUT")])]),s("tr",[s("td",[t._v("MMS_OUT_INTER_ROAM")]),s("td",[t._v("Outgoing international MMS while roaming")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td",[t._v("MMS_OUT, MMS_OUT_ROAM, MMS_OUT_INTER")])]),s("tr",[s("td",[s("a",{attrs:{href:"./#product_bundling"}},[t._v("PRODUCT_BUNDLING")])]),s("td",[t._v("Include products from ecosystem")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td")]),s("tr",[s("td",[t._v("ROAMING")]),s("td",[t._v("All roaming services, incl. network attachment")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td")]),s("tr",[s("td",[t._v("ROAMING_DATA")]),s("td",[t._v("Data access while roaming")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td")]),s("tr",[s("td",[t._v("SMS_IN")]),s("td",[t._v("Incoming SMS")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td")]),s("tr",[s("td",[t._v("SMS_IN_ROAM")]),s("td",[t._v("Incoming SMS while roaming")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td",[t._v("SMS_IN")])]),s("tr",[s("td",[t._v("SMS_OUT")]),s("td",[t._v("Outgoing domestic SMS")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td",[t._v("-")])]),s("tr",[s("td",[t._v("SMS_OUT_ROAM")]),s("td",[t._v("Outgoing domestic SMS while roaming")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td",[t._v("SMS_OUT")])]),s("tr",[s("td",[t._v("SMS_OUT_INTER")]),s("td",[t._v("International SMS")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td",[t._v("SMS_OUT")])]),s("tr",[s("td",[t._v("SMS_OUT_INTER_ROAM")]),s("td",[t._v("International SMS while roaming")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td",[t._v("SMS_OUT, SMS_OUT_ROAM, SMS_OUT_INTER")])]),s("tr",[s("td",[t._v("SMS_PREMIUM")]),s("td",[t._v("Premium content SMS")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td",[s("sup",[t._v("3")])])]),s("tr",[s("td",[s("a",{attrs:{href:"./#user_cs_block-services"}},[t._v("USER_CS_BLOCK_IN")])]),s("td",[t._v("User block of incoming calls")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td")]),s("tr",[s("td",[s("a",{attrs:{href:"./#user_cs_block-services"}},[t._v("USER_CS_BLOCK_OUT")])]),s("td",[t._v("User block of outgoing calls")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td")]),s("tr",[s("td",[s("a",{attrs:{href:"./#user_cs_block-services"}},[t._v("USER_CS_BLOCK_OUT_INTER")])]),s("td",[t._v("User block of outgoing international calls")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td")]),s("tr",[s("td",[s("a",{attrs:{href:"./#user_cs_block-services"}},[t._v("USER_CS_BLOCK_OUT_INTER_EXEC_HOME")])]),s("td",[t._v("User block of outgoing international calls, except to home country")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td")]),s("tr",[s("td",[t._v("VOICE_CALLER_ID_PRESENTATION")]),s("td",[t._v("Enables caller ID presentation on voice calls.")]),s("td",[t._v("No")]),s("td",[t._v("Y")]),s("td")]),s("tr",[s("td",[s("a",{attrs:{href:"./#voice_caller_id_restriction"}},[t._v("VOICE_CALLER_ID_RESTRICTION")])]),s("td",[t._v("Enables caller ID restriction on voice calls.")]),s("td",[t._v("No")]),s("td",[t._v("Y")]),s("td")]),s("tr",[s("td",[s("a",{attrs:{href:"./#voice_callforward"}},[t._v("VOICE_CALLFORWARD")])]),s("td",[t._v("Forward calls")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td",[s("sup",[t._v("3")])])]),s("tr",[s("td",[t._v("VOICE_CALLWAITING")]),s("td",[t._v("If busy, let new callers wait instead of dropping with busy tone")]),s("td",[t._v("No")]),s("td",[t._v("Y")]),s("td",[s("sup",[t._v("3")])])]),s("tr",[s("td",[t._v("VOICE_CONFERENCE")]),s("td",[t._v("Enables setting up conference calls.")]),s("td",[t._v("No")]),s("td",[t._v("Y")]),s("td",[s("sup",[t._v("3")])])]),s("tr",[s("td",[t._v("VOICE_IN")]),s("td",[t._v("Incoming calls")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td")]),s("tr",[s("td",[t._v("VOICE_IN_ROAM")]),s("td",[t._v("Incoming calls while roaming")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td",[t._v("VOICE_IN")])]),s("tr",[s("td",[t._v("VOICE_MISSED_CALL_ALERT")]),s("td",[t._v("Send alert when missing a call")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td",[t._v("-")])]),s("tr",[s("td",[t._v("VOICE_OUT")]),s("td",[t._v("Outgoing domestic calls")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td",[t._v("-")])]),s("tr",[s("td",[t._v("VOICE_OUT_ROAM")]),s("td",[t._v("Outgoing domestic calls while roaming")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td",[t._v("VOICE_OUT")])]),s("tr",[s("td",[t._v("VOICE_OUT_INTER")]),s("td",[t._v("International calls")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td",[t._v("VOICE_OUT")])]),s("tr",[s("td",[t._v("VOICE_OUT_INTER_ROAM")]),s("td",[t._v("International calls while roaming")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td",[t._v("VOICE_OUT, VOICE_OUT_ROAM, VOICE_OUT_INTER")])]),s("tr",[s("td",[t._v("VOICE_PREMIUM")]),s("td",[t._v("Premium content calls (classified by operator)")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td",[s("sup",[t._v("3")])])]),s("tr",[s("td",[t._v("VOICE_PREMIUM_ENTERTAINMENT")]),s("td",[t._v("Calls towards premium entertainment services (classified by network)")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td",[s("sup",[t._v("3")])])]),s("tr",[s("td",[t._v("VOICE_PREMIUM_INFO")]),s("td",[t._v("Calls towards premium informational services (classified by network)")]),s("td",[t._v("No")]),s("td",[t._v("Y "),s("sup",[t._v("1")])]),s("td",[s("sup",[t._v("3")])])]),s("tr",[s("td",[t._v("VOICE_VOICEMAIL")]),s("td",[t._v("Voicemail service")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td")]),s("tr",[s("td",[t._v("VOICE_VOLTE")]),s("td",[t._v("Voice calls over LTE")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td",[s("sup",[t._v("3")])])]),s("tr",[s("td",[t._v("VOICE_VOWIFI")]),s("td",[t._v("Voice calls over WiFi")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td",[s("sup",[t._v("3")])])]),s("tr",[s("td",[t._v("VOICEMAIL_DISABLE_NOTIFICATION")]),s("td",[t._v("Disable voicemail notifications")]),s("td",[t._v("Y")]),s("td",[t._v("Y")]),s("td")])])]),s("p",[s("sup",[t._v("1")]),t._v(" When migrating from APIv1 to APIv2, WG2 need to enable this service for your tenant's network core first, so your configuration takes effect.")]),s("p",[s("sup",[t._v("2")]),t._v(" DATA_HIGHSPEED is being deprecated in favor of setting data speed explicitly through the configuration in the DATA service instead.\nThe DATA_HIGHSPEED service is still effective during the process of migration.")]),s("p",[s("sup",[t._v("3")]),t._v(" Services otherwise applicable to user this service applies, i.e. calling a premium number from abroad also requires the services you would need for a general call from abroad.")]),s("h2",{attrs:{id:"configurable-services"}},[s("a",{attrs:{href:"#configurable-services","aria-hidden":"true"}},[t._v("#")]),t._v("Configurable services")]),s("p",[t._v("Payload examples to the ServiceObject fields described in "),s("a",{attrs:{href:"../subscription-profile-api-reference/"}},[t._v("the API reference page")]),t._v(".\nAll updates to the config object will replace any current config for that subscriber and service.")]),s("h3",{attrs:{id:"data"}},[s("a",{attrs:{href:"#data","aria-hidden":"true"}},[t._v("#")]),t._v("DATA")]),s("p",[t._v("Configuration currently "),s("em",[t._v("optional")]),t._v(" for transitional purposes.")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",{pre:!0,attrs:{class:"language-json"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servicename"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DATA"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"speed_bps"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256000")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("h3",{attrs:{id:"data_content_filtering"}},[s("a",{attrs:{href:"#data_content_filtering","aria-hidden":"true"}},[t._v("#")]),t._v("DATA_CONTENT_FILTERING")]),s("p",[t._v("The full list of content categories is available in the applicable schema on "),s("a",{attrs:{href:"../subscription-profile-api-reference/"}},[t._v("the API reference page")]),t._v(".")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",{pre:!0,attrs:{class:"language-json"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servicename"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DATA_CONTENT_FILTERING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"forbidden_content"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GAMBLING"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SOCIAL_MEDIA"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("h3",{attrs:{id:"product_bundling"}},[s("a",{attrs:{href:"#product_bundling","aria-hidden":"true"}},[t._v("#")]),t._v("PRODUCT_BUNDLING")]),s("p",[t._v("A full description of how to work with product bundling is offered "),s("a",{attrs:{href:"https://v1.docs.wgtwo.com/tutorial/bundling/bundling.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("here")]),t._v(".")]),s("h3",{attrs:{id:"user_cs_block-services"}},[s("a",{attrs:{href:"#user_cs_block-services","aria-hidden":"true"}},[t._v("#")]),t._v("USER_CS_BLOCK services")]),s("p",[t._v("These services allow the subscriber, when provisioned by the operator, to block incoming or outgoing CS calls on their handset.\n"),s("code",{pre:!0},[t._v('"active": true')]),t._v(" activates the block as operator, the subscriber can unblock on their handset.\n"),s("code",{pre:!0},[t._v('"active": false')]),t._v(" sets it to inactive, the subscriber can activate it on their handset.")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",{pre:!0,attrs:{class:"language-json"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servicename"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USER_CS_BLOCK_IN"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",{pre:!0,attrs:{class:"language-json"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servicename"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USER_CS_BLOCK_OUT_INTER"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("h3",{attrs:{id:"voice_caller_id_restriction"}},[s("a",{attrs:{href:"#voice_caller_id_restriction","aria-hidden":"true"}},[t._v("#")]),t._v("VOICE_CALLER_ID_RESTRICTION")]),s("p",[t._v("Active flag determines restriction mode, which is either permanent or temporary.\n"),s("code",{pre:!0},[t._v('"active": true')]),t._v(" represents permanent restriction of caller ID, presenting caller ID is not configurable on handset.\n"),s("code",{pre:!0},[t._v('"active": false')]),t._v(" represents the temporary restriction mode, where the network default is to present the caller ID. This mode enables the subscriber to configure visibility on handset.")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",{pre:!0,attrs:{class:"language-json"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servicename"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VOICE_CALLER_ID_RESTRICTION"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",{pre:!0,attrs:{class:"language-json"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servicename"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VOICE_CALLER_ID_RESTRICTION"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("h3",{attrs:{id:"voice_callforward"}},[s("a",{attrs:{href:"#voice_callforward","aria-hidden":"true"}},[t._v("#")]),t._v("VOICE_CALLFORWARD")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",{pre:!0,attrs:{class:"language-json"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servicename"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VOICE_CALLFORWARD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"unconditional"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"46701234567"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("p",[t._v("The above results in always forwarding incoming calls to the specified number.\n"),s("code",{pre:!0},[t._v('"unconditional_active": true')]),t._v(" is derived from the presence of a valid number for the "),s("code",{pre:!0},[t._v("unconditional")]),t._v(" attribute.")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",{pre:!0,attrs:{class:"language-json"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servicename"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VOICE_CALLFORWARD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"unconditional"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"46701234567"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"unconditional_active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("p",[t._v("The above sets a number for the unconditional forwarding but does not activate any call forwarding.")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",{pre:!0,attrs:{class:"language-json"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servicename"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VOICE_CALLFORWARD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"busy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"46701112233"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"unreachable"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"46702223311"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"no_reply"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"46703331122"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("p",[t._v("The above enables conditional forwarding to the specified numbers.\nThey are all active by default as the numbers are valid.")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",{pre:!0,attrs:{class:"language-json"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servicename"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VOICE_CALLFORWARD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"busy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"46701112233"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"busy_active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"unreachable"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"46702223311"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"unreachable_active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"no_reply"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"46703331122"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"no_reply_active"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("p",[t._v("The above sets numbers for the three conditional forwarding rules, but only enables call forwarding for when the subscriber is not reachable.")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",{pre:!0,attrs:{class:"language-json"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"servicename"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VOICE_CALLFORWARD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"config"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"unconditional"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"46701234567"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"busy"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"46701112233"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"unreachable"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"46702223311"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"no_reply"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"46703331122"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])]),s("p",[t._v("The above sets numbers and activates all varieties of forwarding.\nActive unconditional number overrides all the active conditional numbers, and as such all calls would be forwarded to the number set for unconditional forwarding.\nIf unconditional gets deactivated, the active conditional forwarding rules would be used instead.")])])}),[],!1,null,null,null);"function"==typeof p&&p(d),"function"==typeof l&&l(d);e.default=d.exports}}]);