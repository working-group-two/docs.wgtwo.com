(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},jj0k:function(e,t,o){"use strict";o.r(t);var r=o("KHd+"),n=o("UQSp"),a=o("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var i={VueRemarkRoot:n.a},c=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===s(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:o[e]=function(){return i[e]}}))},p=a.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",u={excerpt:null,title:"Accessing Metrics",topic:"metrics",type:"how-to"};var h=function(e){e.options[l]&&(e.options[l]=u),a.a.util.defineReactive(e.options,l,u),e.options.computed=p.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},f=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h1",{attrs:{id:"accessing-metrics"}},[o("a",{attrs:{href:"#accessing-metrics","aria-hidden":"true"}},[e._v("#")]),e._v("Accessing Metrics")]),o("h2",{attrs:{id:"overview"}},[o("a",{attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v("Overview")]),o("p",[e._v("Working Group Two exposes metrics that can help operators getting some operational insight. This data is exposed using the "),o("a",{attrs:{href:"https://openmetrics.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("OpenMetrics text format")]),e._v(".")]),o("p",[e._v("This text format is the same as exposed by Prometheus. In addition to being supported by Prometheus, many other systems\nhas OpenMetrics integrations such as\n"),o("a",{attrs:{href:"https://docs.datadoghq.com/integrations/openmetrics/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Datadog")]),e._v("\nand "),o("a",{attrs:{href:"https://docs.newrelic.com/docs/integrations/prometheus-integrations",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("New Relic")]),e._v(".")]),o("p",[e._v("The HTTP endpoint we provide will give you the current state of all of your metrics. We do not provide a query API.")]),o("p",[e._v("Please reach out to clarify what metrics you would need access to.")]),o("p",[e._v("In order to access this API, your credentials need to have the "),o("code",{pre:!0},[e._v("metrics.read")]),e._v(" right.\nYou can configure your credentials in "),o("a",{attrs:{href:"https://console.wgtwo.com/api-keys-redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Console")]),e._v(".")]),o("p",[o("strong",[e._v("Base path: "),o("code",{pre:!0},[e._v("https://api.wgtwo.com/metrics/v1")])])]),o("DemoConfigurer"),o("h3",{attrs:{id:"curl"}},[o("a",{attrs:{href:"#curl","aria-hidden":"true"}},[e._v("#")]),e._v("Curl")]),o("pre",{pre:!0,attrs:{class:"language-shell"}},[o("code",{pre:!0,attrs:{class:"language-shell"}},[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -s -u CLIENT_ID:CLIENT_SECRET https://api.wgtwo.com/metrics/v1")])]),o("h3",{attrs:{id:"prometheus"}},[o("a",{attrs:{href:"#prometheus","aria-hidden":"true"}},[e._v("#")]),e._v("Prometheus")]),o("p",[e._v("The below Prometheus config will scrape the metric endpoint from Working Group Two every 30 seconds,\nfetching all available time series. Note that the configuration will contain secrets.")]),o("p",[e._v("See: "),o("a",{attrs:{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("prometheus.io › Configuration")])]),o("GithubCode",{attrs:{fileUrl:"https://github.com/working-group-two/docs.wgtwo.com/blob/master/examples/metrics/prometheus.yml"}}),o("h4",{attrs:{id:"example-run-with-docker"}},[o("a",{attrs:{href:"#example-run-with-docker","aria-hidden":"true"}},[e._v("#")]),e._v("Example: Run with Docker")]),o("blockquote",[o("p",[e._v("See: "),o("a",{attrs:{href:"https://prometheus.io/docs/prometheus/latest/installation/#using-docker",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("prometheus.io › Using Docker")])])]),o("p",[e._v("If you run the below commands, you should have Prometheus running successfully.")]),o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",{pre:!0,attrs:{class:"language-bash"}},[o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Store sample configuration to prometheus.yml, including actual credentials")]),e._v("\n\ndocker run -p "),o("span",{pre:!0,attrs:{class:"token number"}},[e._v("9090")]),e._v(":9090 -v prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus")])]),o("h4",{attrs:{id:"grafana"}},[o("a",{attrs:{href:"#grafana","aria-hidden":"true"}},[e._v("#")]),e._v("Grafana")]),o("blockquote",[o("p",[e._v("See: "),o("a",{attrs:{href:"https://grafana.com/docs/grafana/latest/features/datasources/prometheus/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("grafana.com › Using Prometheus in Grafana")])])]),o("p",[e._v("As our metric API does not expose a query API, it cannot be used by Grafana directly.\nHowever, Grafana has built-in support for Prometheus.")]),o("h2",{attrs:{id:"links"}},[o("a",{attrs:{href:"#links","aria-hidden":"true"}},[e._v("#")]),e._v("Links")]),o("ul",[o("li",[o("a",{attrs:{href:"https://openmetrics.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("openmetrics.io")])]),o("li",[o("a",{attrs:{href:"https://prometheus.io/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("prometheus.io")]),e._v(" › "),o("a",{attrs:{href:"https://prometheus.io/docs/instrumenting/exposition_formats/#text-based-format",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Exposition Formats")])])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(f),"function"==typeof h&&h(f);t.default=f.exports}}]);