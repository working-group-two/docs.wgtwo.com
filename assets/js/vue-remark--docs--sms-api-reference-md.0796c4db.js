(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{179:function(t,e,n){},181:function(t,e,n){"use strict";var o=n(179);n.n(o).a},182:function(t,e,n){"use strict";n(24),n(55);var o=n(79),i=n(183),r=(n(184),n(185),n(186),n(187)),a=n.n(r),c={components:{Github:o.a,Prism:a.a},created:function(){this.fetchData()},props:{to:String,title:String,language:{type:String,default:"protobuf"}},data:function(){return{content:"Loading...",failed:!1}},methods:{fetchData:function(){var t=this;return Object(i.get)(this.rawLink,{responseType:"text"}).then((function(e){return t.content=e.data})).catch((function(e){t.content="Failed to load code, please use the link",t.failed=!0}))}},computed:{rawLink:function(){return this.to.replace("//github.com/","//raw.githubusercontent.com/").replace("/blob/","/")},fillScreen:function(){return!this.failed&&"Loading..."===this.content}}},u=(n(181),n(13)),s=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.title))]),n("Prism",{class:{"fill-screen":t.fillScreen},attrs:{language:t.language,code:t.content}}),n("figcaption",[n("a",{staticClass:"github-link",attrs:{href:t.to,target:"_blank"}},[t._v(t._s(t.to))])])],1)}),[],!1,null,null,null);e.a=s.exports},240:function(t,e,n){"use strict";n.r(e);var o=n(13),i=n(182),r=n(178),a=n(0);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var u={GithubCode:i.a,VueRemarkRoot:r.a},s=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(u).forEach((function(t){"object"===c(u[t])&&"function"==typeof u[t].render?e[t]=u[t]:n[t]=function(){return u[t]}}))},l=a.a.config.optionMergeStrategies,f="__vueRemarkFrontMatter",p={excerpt:null,externalLink:"https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/messaging/messagecore.proto",topic:"sms",type:"api-reference",title:"SMS API reference"};var m=function(t){t.options[f]&&(t.options[f]=p),a.a.util.defineReactive(t.options,f,p),t.options.computed=l.computed({$frontmatter:function(){return t.options[f]}},t.options.computed)},g=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("VueRemarkRoot",[e("GithubCode",{attrs:{to:this.$frontmatter.externalLink,title:this.$frontmatter.title}})],1)}),[],!1,null,null,null);"function"==typeof s&&s(g),"function"==typeof m&&m(g);e.default=g.exports}}]);