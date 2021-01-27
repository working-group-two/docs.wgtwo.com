(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{B3c2:function(t,s,a){"use strict";a.r(s);var n=a("KHd+"),e=a("UQSp"),r=a("Kw5r");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var i={VueRemarkRoot:e.a},p=function(t){var s=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(i).forEach((function(t){"object"===o(i[t])&&"function"==typeof i[t].render||"function"==typeof i[t]&&"function"==typeof i[t].options.render?s[t]=i[t]:a[t]=function(){return i[t]}}))},c=r.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",v={excerpt:null,title:"Manage subscriptions",topic:"subscription profile",type:"how-to",hideWarning:!0};var u=function(t){t.options[l]&&(t.options[l]=v),r.a.util.defineReactive(t.options,l,v),t.options.computed=c.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},_=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("VueRemarkRoot",[a("h1",{attrs:{id:"how-to-manage-subscriptions"}},[a("a",{attrs:{href:"#how-to-manage-subscriptions","aria-hidden":"true"}},[t._v("#")]),t._v("How to manage subscriptions")]),a("DemoConfigurer"),a("h2",{attrs:{id:"get-subscription-info"}},[a("a",{attrs:{href:"#get-subscription-info","aria-hidden":"true"}},[t._v("#")]),t._v("Get subscription info")]),a("CodeSnippet",{attrs:{curlOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/curl/operator/provision/get-subscription-info.sh",kotlinDeps:["rest"],kotlinOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/provision/src/main/kotlin/GetSubscriptionInfo.kt"}}),a("h2",{attrs:{id:"activate-new-user"}},[a("a",{attrs:{href:"#activate-new-user","aria-hidden":"true"}},[t._v("#")]),t._v("Activate new user")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",{pre:!0,attrs:{class:"language-shell"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_ID}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_SECRET}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n    {\n        "bssid": "operator_name",\n        "iccid": "2420198416000015720",\n        "msisdn": "46737678218",\n        "userid": "abcdefghijklm"\n    }\n    \'')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    https://api.wgtwo.com/provision/v1/activate")])]),a("h2",{attrs:{id:"provision-replacement-sim"}},[a("a",{attrs:{href:"#provision-replacement-sim","aria-hidden":"true"}},[t._v("#")]),t._v("Provision replacement SIM")]),a("p",[a("em",[t._v("Depending on the logistics of getting a new SIM just using "),a("code",{pre:!0},[t._v("/provision/changesim")]),t._v(" can also work,\nsince the old SIM already becomes unfunctional after changesim.")])]),a("p",[a("strong",[t._v("Steps")])]),a("ol",[a("li",[a("a",{attrs:{href:"#block-subscription"}},[t._v("Block the subscription")])]),a("li",[a("a",{attrs:{href:"#change-sim"}},[t._v("Change the SIM")])]),a("li",[a("a",{attrs:{href:"#unblock-subscription"}},[t._v("Unblock subscription")])])]),a("h2",{attrs:{id:"block-subscription"}},[a("a",{attrs:{href:"#block-subscription","aria-hidden":"true"}},[t._v("#")]),t._v("Block subscription")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",{pre:!0,attrs:{class:"language-shell"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_ID}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_SECRET}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n    {\n        "bssid": "operator_name",\n        "msisdn": "46737678218",\n        "userid": "abcdefghijklm"\n    }\n    \'')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    https://api.wgtwo.com/provision/v1/block")])]),a("h2",{attrs:{id:"change-sim"}},[a("a",{attrs:{href:"#change-sim","aria-hidden":"true"}},[t._v("#")]),t._v("Change SIM")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",{pre:!0,attrs:{class:"language-shell"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_ID}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_SECRET}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n    {\n        "bssid": "operator_name",\n        "msisdn": "46737678218",\n        "newIccid": "2420198416000015720",\n        "oldIccid": "2420198412148748973",\n        "userid": "abcdefghijklm"\n    }\n    \'')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    https://api.wgtwo.com/provision/v1/changesim")])]),a("h2",{attrs:{id:"unblock-subscription"}},[a("a",{attrs:{href:"#unblock-subscription","aria-hidden":"true"}},[t._v("#")]),t._v("Unblock subscription")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",{pre:!0,attrs:{class:"language-shell"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_ID}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_SECRET}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n    {\n        "bssid": "operator_name",\n        "msisdn": "46737678218",\n        "userid": "abcdefghijklm"\n    }\n    \'')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    https://api.wgtwo.com/provision/v1/unblock")])]),a("h2",{attrs:{id:"freeze-subscription"}},[a("a",{attrs:{href:"#freeze-subscription","aria-hidden":"true"}},[t._v("#")]),t._v("Freeze subscription")]),a("p",[t._v("See "),a("a",{attrs:{href:"#block-subscription"}},[t._v("block subscription")])]),a("h2",{attrs:{id:"unfreeze-subscription"}},[a("a",{attrs:{href:"#unfreeze-subscription","aria-hidden":"true"}},[t._v("#")]),t._v("Unfreeze subscription")]),a("p",[t._v("See "),a("a",{attrs:{href:"#unblock-subscription"}},[t._v("unblock subscription")])]),a("h2",{attrs:{id:"restrict-highspeed-data"}},[a("a",{attrs:{href:"#restrict-highspeed-data","aria-hidden":"true"}},[t._v("#")]),t._v("Restrict highspeed data")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",{pre:!0,attrs:{class:"language-shell"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_ID}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_SECRET}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n    {\n        "bssid": "operator_name",\n        "service": {\n            "action": "REMOVE",\n            "name": "DATA_HIGHSPEED"\n        },\n        "msisdn": "46737678218",\n        "userid": "abcdefghijklm"\n    }\n    \'')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    https://api.wgtwo.com/provision/v1/update")])]),a("h2",{attrs:{id:"disable-roaming"}},[a("a",{attrs:{href:"#disable-roaming","aria-hidden":"true"}},[t._v("#")]),t._v("Disable roaming")]),a("p",[a("strong",[t._v("Steps")])]),a("ol",[a("li",[a("a",{attrs:{href:"#remove-roaming"}},[t._v("Remove roaming")])]),a("li",[a("a",{attrs:{href:"#remove-roaming-data"}},[t._v("Remove roaming data")])])]),a("h2",{attrs:{id:"remove-roaming"}},[a("a",{attrs:{href:"#remove-roaming","aria-hidden":"true"}},[t._v("#")]),t._v("Remove roaming")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",{pre:!0,attrs:{class:"language-shell"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_ID}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_SECRET}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n    {\n        "bssid": "operator_name",\n        "service": {\n            "action": "REMOVE",\n            "name": "ROAMING"\n        },\n        "msisdn": "46737678218",\n        "userid": "abcdefghijklm"\n    }\n    \'')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    https://api.wgtwo.com/provision/v1/update")])]),a("h2",{attrs:{id:"remove-roaming-data"}},[a("a",{attrs:{href:"#remove-roaming-data","aria-hidden":"true"}},[t._v("#")]),t._v("Remove roaming data")]),a("CodeSnippet",{attrs:{curlOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/curl/operator/provision/disable-roaming-data.sh",kotlinDeps:["rest"],kotlinOperator:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/provision/src/main/kotlin/DisableRoamingData.kt"}}),a("h2",{attrs:{id:"enable-roaming"}},[a("a",{attrs:{href:"#enable-roaming","aria-hidden":"true"}},[t._v("#")]),t._v("Enable roaming")]),a("p",[a("strong",[t._v("Steps")])]),a("ol",[a("li",[a("a",{attrs:{href:"#add-roaming"}},[t._v("Add roaming")])]),a("li",[a("a",{attrs:{href:"#add-roaming-data"}},[t._v("Add roaming data")])])]),a("h2",{attrs:{id:"add-roaming"}},[a("a",{attrs:{href:"#add-roaming","aria-hidden":"true"}},[t._v("#")]),t._v("Add roaming")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",{pre:!0,attrs:{class:"language-shell"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_ID}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_SECRET}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n    {\n        "bssid": "operator_name",\n        "service": {\n            "action": "ADD",\n            "name": "ROAMING"\n        },\n        "msisdn": "46737678218",\n        "userid": "abcdefghijklm"\n    }\n    \'')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    https://api.wgtwo.com/provision/v1/update")])]),a("h2",{attrs:{id:"add-roaming-data"}},[a("a",{attrs:{href:"#add-roaming-data","aria-hidden":"true"}},[t._v("#")]),t._v("Add roaming data")]),a("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/kotlin/operator/provision/src/main/kotlin/EnableRoamingData.kt",language:"kotlin"}}),a("h2",{attrs:{id:"terminate-subscription"}},[a("a",{attrs:{href:"#terminate-subscription","aria-hidden":"true"}},[t._v("#")]),t._v("Terminate subscription")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",{pre:!0,attrs:{class:"language-shell"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_ID}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_SECRET}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n    {\n        "bssid": "operator_name",\n        "msisdn": "46737678218",\n        "userid": "abcdefghijklm"\n    }\n    \'')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    https://api.wgtwo.com/provision/v1/terminate")])]),a("h2",{attrs:{id:"change-msisdn-for-a-sim"}},[a("a",{attrs:{href:"#change-msisdn-for-a-sim","aria-hidden":"true"}},[t._v("#")]),t._v("Change MSISDN for a SIM")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",{pre:!0,attrs:{class:"language-shell"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_ID}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_SECRET}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n    {\n        "bssid": "operator_name",\n        "msisdn": "46737678218",\n        "newMsisdn": "46727678209",\n        "userid": "abcdefghijklm"\n    } \'')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    https://api.wgtwo.com/provision/v1/changemsisdn")])]),a("h2",{attrs:{id:"remove-a-sim-from-subscription"}},[a("a",{attrs:{href:"#remove-a-sim-from-subscription","aria-hidden":"true"}},[t._v("#")]),t._v("Remove a SIM from subscription")]),a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",{pre:!0,attrs:{class:"language-shell"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_ID}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLIENT_SECRET}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v("\n    -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'\n    {\n        "bssid": "operator_name",\n        "msisdn": "46737678218",\n        "iccid": "2420198416000015720",\n        "userid": "abcdefghijklm"\n    }\n    \'')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    https://api.wgtwo.com/provision/v1/dissociateSim")])])],1)}),[],!1,null,null,null);"function"==typeof p&&p(_),"function"==typeof u&&u(_);s.default=_.exports},UQSp:function(t,s,a){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);