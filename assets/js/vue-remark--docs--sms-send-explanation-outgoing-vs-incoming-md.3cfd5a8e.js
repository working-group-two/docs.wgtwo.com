(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{178:function(o,e,t){"use strict";e.a={name:"VueRemarkRoot",render:function(o){return o("div",null,this.$slots.default)}}},241:function(o,e,t){"use strict";t.r(e);var n=t(13),i=t(178),r=t(0);function s(o){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}r.a.config.optionMergeStrategies;var u={VueRemarkRoot:i.a},a=function(o){var e=o.options.components=o.options.components||{},t=o.options.computed=o.options.computed||{};Object.keys(u).forEach((function(o){"object"===s(u[o])&&"function"==typeof u[o].render?e[o]=u[o]:t[o]=function(){return u[o]}}))},c=r.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",f={excerpt:null,title:"OUTGOING vs INCOMING",topic:"sms",type:"explanation"};var d=function(o){o.options[p]&&(o.options[p]=f),r.a.util.defineReactive(o.options,p,f),o.options.computed=c.computed({$frontmatter:function(){return o.options[p]}},o.options.computed)},m=Object(n.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("VueRemarkRoot",[t("h1",{attrs:{id:"sms-direction-outgoing-vs-incoming"}},[t("a",{attrs:{href:"#sms-direction-outgoing-vs-incoming","aria-hidden":"true"}},[o._v("#")]),o._v("SMS direction OUTGOING vs INCOMING")]),t("p",[o._v("You can send an SMS with a "),t("code",{pre:!0},[o._v("Direction")]),o._v(" either as "),t("code",{pre:!0},[o._v("OUTGOING")]),o._v(" or "),t("code",{pre:!0},[o._v("INCOMING")]),o._v(".")]),t("p",[o._v("A traditional SMS sent from one of your subscribers to another of your subscriber passes through the system two times; one time as "),t("code",{pre:!0},[o._v("OUTGOING")]),o._v(" and once as "),t("code",{pre:!0},[o._v("INCOMING")]),o._v(". With the correct permissions it is possible to omit the outgoing SMS if you are sending to one of your subscribers. What to use depends on what kind of scenario you're facing.")]),t("p",[o._v("Outgoing means the message is going from one of your subscribers.\nIncoming means the message is going to one of your subscribers.")]),t("p",[o._v("You probably want "),t("code",{pre:!0},[o._v("OUTGOING")]),o._v(" if:")]),t("ul",[t("li",[o._v("The SMS should be as if it was sent from a subscriber's phone.")]),t("li",[o._v("You want it to work like having a phone and using it to send SMS.")])]),t("p",[o._v("You probably want "),t("code",{pre:!0},[o._v("INCOMING")]),o._v(" if:")]),t("ul",[t("li",[o._v("You want to send SMS to one of your subscribers, from a text number like "),t("code",{pre:!0},[o._v("Wotel")]),o._v(".")]),t("li",[o._v("You're interested in sending towards a phone without having one to send from.")])])])}),[],!1,null,null,null);"function"==typeof a&&a(m),"function"==typeof d&&d(m);e.default=m.exports}}]);