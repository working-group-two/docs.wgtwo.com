(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{241:function(t,e,n){},244:function(t,e,n){"use strict";var o=n(241);n.n(o).a},245:function(t,e,n){"use strict";n(74);var o=n(102),r=n(246),i=(n(247),n(248),n(249),n(250)),a=n.n(i),c={components:{Github:o.a,Prism:a.a},created:function(){this.fetchData()},props:{to:String,title:String,language:{type:String,default:"protobuf"}},data:function(){return{content:"Loading...",failed:!1}},methods:{fetchData:function(){var t=this;return Object(r.get)(this.rawLink,{responseType:"text"}).then((function(e){return t.content=e.data})).catch((function(e){t.content="Failed to load code, please use the link",t.failed=!0}))}},computed:{rawLink:function(){return this.to.replace("//github.com/","//raw.githubusercontent.com/").replace("/blob/","/")}}},u=(n(244),n(9)),s=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.title))]),n("Prism",{class:{"fill-screen":!t.failed},attrs:{language:t.language,code:t.content}}),n("figcaption",[n("a",{attrs:{href:t.to,target:"_blank"}},[t._v(t._s(t.to))])])],1)}),[],!1,null,null,null);e.a=s.exports},297:function(t,e,n){"use strict";n.r(e);var o=n(9),r=n(245),i=n(242),a=n(0);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var u={GithubCode:r.a,VueRemarkRoot:i.a},s=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(u).forEach((function(t){"object"===c(u[t])&&"function"==typeof u[t].render?e[t]=u[t]:n[t]=function(){return u[t]}}))},p=a.a.config.optionMergeStrategies,f="__vueRemarkFrontMatter",l={excerpt:null,externalLink:"https://github.com/working-group-two/wgtwoapis/blob/master/wgtwo/auth/v0/usertokens.proto",topic:"Usertokens",type:"api-reference",title:"Usertoken API reference"};var m=function(t){t.options[f]&&(t.options[f]=l),a.a.util.defineReactive(t.options,f,l),t.options.computed=p.computed({$frontmatter:function(){return t.options[f]}},t.options.computed)},d=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("VueRemarkRoot",[e("GithubCode",{attrs:{to:this.$frontmatter.externalLink,title:this.$frontmatter.title}})],1)}),[],!1,null,null,null);"function"==typeof s&&s(d),"function"==typeof m&&m(d);e.default=d.exports}}]);