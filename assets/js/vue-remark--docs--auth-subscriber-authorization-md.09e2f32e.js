(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3EOw":function(e,t,a){"use strict";a.r(t);var s=a("KHd+"),r=a("UQSp"),o=a("Kw5r");function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.a.config.optionMergeStrategies;var p={VueRemarkRoot:r.a},c=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(p).forEach((function(e){"object"===n(p[e])&&"function"==typeof p[e].render||"function"==typeof p[e]&&"function"==typeof p[e].options.render?t[e]=p[e]:a[e]=function(){return p[e]}}))},l=o.a.config.optionMergeStrategies,i="__vueRemarkFrontMatter",v={excerpt:null,title:"OAuth 2.0 authorization",topic:"auth",type:"how-to",roles:["THIRD_PARTY_DEVELOPER"]};var u=function(e){e.options[i]&&(e.options[i]=v),o.a.util.defineReactive(e.options,i,v),e.options.computed=l.computed({$frontmatter:function(){return e.options[i]}},e.options.computed)},h=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("VueRemarkRoot",[s("h1",{attrs:{id:"oauth-20-flow-walkthrough"}},[s("a",{attrs:{href:"#oauth-20-flow-walkthrough","aria-hidden":"true"}},[e._v("#")]),e._v("OAuth 2.0 flow walkthrough")]),s("h2",{attrs:{id:"set-up-an-oauth-client"}},[s("a",{attrs:{href:"#set-up-an-oauth-client","aria-hidden":"true"}},[e._v("#")]),e._v("Set up an OAuth Client")]),s("p",[e._v("In order to use our OAuth flow, you will need to create an OAuth client.\nThis client is tied to a product in the "),s("em",[e._v("Developer Portal")]),e._v(".")]),s("h3",{attrs:{id:"create-client"}},[s("a",{attrs:{href:"#create-client","aria-hidden":"true"}},[e._v("#")]),e._v("Create client")]),s("ol",[s("li",[e._v("Sign in at "),s("a",{attrs:{href:"https://developer.wgtwo.com",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://developer.wgtwo.com")])]),s("li",[e._v("Create an organization")]),s("li",[e._v("Create a product")]),s("li",[e._v("Go to the clients tab, and click "),s("code",{pre:!0},[e._v("CREATE NEW CLIENT")])])]),s("g-image",{attrs:{src:a("hGhL"),alt:"Set scopes"}}),s("table",[s("thead",[s("tr",[s("th",[e._v("Field")]),s("th",[e._v("Value")])])]),s("tbody",[s("tr",[s("td",[e._v("Client description")]),s("td",[e._v("this is a test")])]),s("tr",[s("td",[e._v("Login redirect URIs")]),s("td",[s("a",{attrs:{href:"https://example.com/callback",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://example.com/callback")])])]),s("tr",[s("td",[e._v("Post revoke consent redirect URIs")]),s("td",[s("a",{attrs:{href:"https://example.com/revoke",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("https://example.com/revoke")])])])])]),s("p",[e._v("The returned credentials will be displayed only once, so make sure to save them.")]),s("h3",{attrs:{id:"set-scopes"}},[s("a",{attrs:{href:"#set-scopes","aria-hidden":"true"}},[e._v("#")]),e._v("Set scopes")]),s("ol",[s("li",[e._v("Go to the "),s("code",{pre:!0},[e._v("SCOPES")]),e._v(" tab")]),s("li",[e._v("Enable the three standard OAuth 2.0 scopes")])]),s("g-image",{attrs:{src:a("V+SC"),alt:"Set scopes"}}),s("h3",{attrs:{id:"enable-product-for-operator"}},[s("a",{attrs:{href:"#enable-product-for-operator","aria-hidden":"true"}},[e._v("#")]),e._v("Enable product for operator")]),s("ol",[s("li",[e._v("Go to the "),s("code",{pre:!0},[e._v("LISTING")]),e._v(" tab")]),s("li",[e._v("Enable the product for the operator of your targetted phone number")])]),s("h2",{attrs:{id:"manually-run-the-oauth-flow"}},[s("a",{attrs:{href:"#manually-run-the-oauth-flow","aria-hidden":"true"}},[e._v("#")]),e._v("Manually run the OAuth flow")]),s("b-notification",{attrs:{type:"is-warning is-light","aria-close-label":"Close notification",role:"alert",closable:!1}},[s("div",[s("p",[s("b",[e._v("We do not recommend implementing this flow manually")])]),s("p",[e._v("There are good OAuth libraries for all common language, so these examples are only useful for testing the flow.")])])]),s("h3",{attrs:{id:"open-link-in-browser"}},[s("a",{attrs:{href:"#open-link-in-browser","aria-hidden":"true"}},[e._v("#")]),e._v("Open link in browser")]),s("p",[e._v("To start the flow open the following link in your browser")]),s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",{pre:!0,attrs:{class:"language-shell"}},[e._v("https://id.wgtwo.com/oauth2/auth?response_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("code"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("scope")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("phone offline_access"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("client_id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${CLIENT_ID}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("redirect_uri")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://example.com/callback"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("state")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("this-is-a-key-set-by-the-caller")])]),s("p",[e._v("This should take you to our login page, where you will be sent a SMS with a PIN code.\nAfter completing the login flow, you will be asked to grant the requested access to the product.")]),s("p",[e._v("The scopes here will allow you to get the real phone number of the user and to obtain a refresh token.")]),s("p",[e._v("The browser will then redirect back to the set redirect URI.\nIn our case, this will be similar to this:")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",{pre:!0,attrs:{class:"language-text"}},[e._v("https://example.com/callback?code=some-random-code-generated-by-the-oauth-flow&scope=phone%20offline_access&state=this-is-a-key-set-by-the-caller")])]),s("h3",{attrs:{id:"exchange-authorization-code-for-access-and-refresh-token"}},[s("a",{attrs:{href:"#exchange-authorization-code-for-access-and-refresh-token","aria-hidden":"true"}},[e._v("#")]),e._v("Exchange authorization code for access and refresh token")]),s("p",[e._v("As we are using the authorization code grant, there will be a server side call to exchange this code with the access\nand refresh tokens. ")]),s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",{pre:!0,attrs:{class:"language-shell"}},[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -u "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${CLIENT_ID}")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${CLIENT_SECRET}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --url "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://id.wgtwo.com/oauth2/token'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'content-type: application/x-www-form-urlencoded'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("grant_type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("authorization_code "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("code")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{CODE FROM THE CALLBACK URI}"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'redirect_uri=https://example.com/callback'")])])]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",{pre:!0,attrs:{class:"language-json"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<<redacted>>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"expires_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"refresh_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<<redacted>>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"scope"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"phone offline_access"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"token_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"bearer"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])]),s("h3",{attrs:{id:"use-access-token-to-get-user-info"}},[s("a",{attrs:{href:"#use-access-token-to-get-user-info","aria-hidden":"true"}},[e._v("#")]),e._v("Use access token to get user info")]),s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",{pre:!0,attrs:{class:"language-shell"}},[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ACCESS_TOKEN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<<redacted>>"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Authorization: Bearer '),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$ACCESS_TOKEN")]),e._v('"')]),e._v(" https://id.wgtwo.com/userinfo")])]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",{pre:!0,attrs:{class:"language-json"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"phone_number"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"+46123456789"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"phone_number_verified"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"sid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"42e(...)sff"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"sub"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"73e(...)dfc"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(h),"function"==typeof u&&u(h);t.default=h.exports},UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},"V+SC":function(e,t){e.exports={type:"image",mimeType:"image/png",src:"/assets/static/auth-set-scopes.3fa2e4a.e32a5d3c5e42a08e941dfce28ee6d1d5.png",size:{width:1140,height:318},sizes:"(max-width: 1140px) 100vw, 1140px",srcset:["/assets/static/auth-set-scopes.82a2fbd.e32a5d3c5e42a08e941dfce28ee6d1d5.png 480w","/assets/static/auth-set-scopes.3fa2e4a.e32a5d3c5e42a08e941dfce28ee6d1d5.png 1140w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 1140 318' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-96d258cd4a74de66c876853ae4c38b75'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-96d258cd4a74de66c876853ae4c38b75)' width='1140' height='318' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAASCAIAAABkTU91AAAACXBIWXMAAAsSAAALEgHS3X78AAADc0lEQVRIx71XWU8TURTmT/sjePBBYiTG6ANYgUQTpRJCogYTkVgWI1C7MW1nusx0Yba2s7Sz%2bM295TJMYTpTIifk9i5nvec7Zy5LkiR1u92rqyvXdT3PU1UV816vNxqNfN9XhsOurrcVRSVLwzBkWWb8juNgAg39fn88HoMBp5hTJRj9/09LnU4H7sIqC0DTNJinAXQ1TVTVpiz3dN3zfcuyFEUBM3jgPUTgMTRgE0vwQxCnuq5rhB4jADbzCIXPRratGoZmGAPDQAawfKCxWRPJpahgeD4NYHZrrqXwaUQ8Mn/UDAAJ1WpVkkQAg5kHNgRB4AWh0WjQ/YVpMpm0Wi1RFFMFBimYvry8pBUFfNZqNeihRRjOgGuaJgAN%2bDquwy4SoAeUITwYDCjo48m7n3CqE6Js8cxhKZhWVNW0LNpFqDOgWwH43vTKg98bXCyO1zspFfOs1CzOSQB%2b8JPjv2%2bfv9252Pr4Z22/suO4E8o0HA4BLSQOyUG7pB0WbRRpwT6WgAT2sQQP8BYTMy6s3W5DCkmANoaBuVTr9TYPD1uyjLlD%2bl64v00D%2bFbObh6vvv/9OnP0Inv%2bbuxMGw4yxfN8s9mE0ygG%2bAr8YYkwMMJ7jNiBW0AqljE%2bAYFNQmBDJJBKGEBZFJ/v7tYkKWiMoxEEcVM3ATD4WmPDGpv4ozXAMJ0KQvEVkoo5IkVdonXIZFkN%2bC6KOAjAwBjgx7u3k7LYkpfvbKtNLnJfDbCjKYS%2blj6t51Y2T16u/Xq2fbbOIIRk1et1wAPNK%2binPA/wLNbjKYSggSI4uYYzQVjOZjkCoYnjAIGot2gRnwoHO/mtvcKHzxcbP7g9oIgK08cPrTkUH0aU9WLfAVw5xKHKIg0xOUmqunty0iFFjBrADcKr6Jc45ut9J4ScGUoCiVTdM0bqFoSA/qDbmJogcw2l2pCr8qh/5xvhIV%2bAhwSAqzFt27m%2boPBNTTOAn%2b3zzJvDp2u5lVcHyxvHq9bEpMaQ9FKpVKlUOI4DfAuFApbFYpHOsY/yKJfL%2bXzenvfUA0OZUFoIHXHck0ym0GgELwPbhmmJ1MOtGqj2iz%2brX3L1fYx58ZRuUuBahMaE4ATmNiE8PTCyzbkpoqrAnLYB4BX8l%2bd1%2bg%2bJaQaPHceJfgciSiPNMYy5mEQnfym5aci/tsv8ZBow/we2zCAbG/mq6QAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}},hGhL:function(e,t){e.exports={type:"image",mimeType:"image/png",src:"/assets/static/auth-create-client.3235abb.0e124e9cdfe6a31f9b25cd86ae424e5e.png",size:{width:517,height:473},sizes:"(max-width: 517px) 100vw, 517px",srcset:["/assets/static/auth-create-client.3235abb.0e124e9cdfe6a31f9b25cd86ae424e5e.png 517w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 517 473' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-b517a36653cc9adb012397b43f4ab5b7'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-b517a36653cc9adb012397b43f4ab5b7)' width='517' height='473' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAA7CAIAAABE7huLAAAACXBIWXMAAAsSAAALEgHS3X78AAAHkElEQVRo3u2a%2bU8bVxDH%2bfMiVb3URmlVqVKl/tQkrWiklvSX/pKmPyQEgjlKSCSUYBNDQgIh3JfNDeH2RTlsY0NscDiMMYex0w87yWLBQkiywRB1tHrMm/fsnXk7M9%2bZNWkGg%2bEfhQoKCvJPAxUoJAqjfFpZWdn6%2bvrGqSIU3tzcXFlZKS4uTistLX2ZRIlE4uU%2b0hSqS4esfiCSO8ZisVu3bqXdv39flS4tLW1vbx/lK9h2/HrvMWBra%2bv27du7Brjd7pqamp6enubm5oGBgdbW1qqqqo6OjhcvXjQ2NnZ3d1utVoSTk5NTU1NmsxlhW1tbe3t7RUWFy%2bXiG%2bLxeAoMMBqNIvX7/S0tLahYVFSEb%2bXk5KAl49zcHAwPy2QyMbXZbFhSXl7%2b9OnTrKwsmJKSEofDkRIDCgsL07i9Ko1EIuLT8SRSPwavOh%2bkaiz7U%2bJC5KK0e/fu7YnUg5w7hU5/kAFk0l0D9ieWxAF0cg1g4YhZ6MQZgAiAII1OTEyQUux2eygUIjSdTqfX651SiCkje6LR6OrqaiRFxK1Rda8BBCULwNv8/Dxpx%2bfzMZ2dnYWfVcjj8ZCmYNCekN1OBSXkvvF4OBzWMADjTlSk7iEyICcfU9Idh6thAAUG7tHb24v/cNKBQADnAcXgxZEYnz9/fvxGyu08oVD/9PS/gYC2AUwwAL8Hy0AooAozALWhoSHBYEC6vr6eGEiVASNeL9r3TU/jQhHNJ5DsQoJZAmR7Umqqck4oHB7weOaWluC1Y0Cey4mNgWTSMAC9U5gZj5g9hYTXALJUJcd3ICm9DiwlTiUSJ9ebEr7CAG2EBwy7MR0IPAm1hoYBaAzELiwsAL2Dg4OgASmfTApPJqWIoMQgh1osFoSLi4vJTnkI6R4GwqytrWlkIUKbkTX0W15exsp1hXgI2CbHz2eYqm1AcsrSTF86xpXcVDI77fyBOIABWCJKo70YjepM5XUAG%2bQMZBWSj7BBGOAcIUdw9A77KEQRMR8Oc4Q7afQQIAsGg/TBNIqPHz8GfWl5AeDq6mrGR48eIaysrOzs7Kyrq6MVpnsGraWrrFaoqamJsk88DQYj9fJ45%2bzsyMzM8MzMgbWQagB%2bj2YoSk1BHUHzLnVEbW3tgwcPYLCQDWIexE72MLKEbW63u6uri8JJXwPsfv%2bozzfo8ZBeDislxBNYE48Xz2FVvB%2bSJclO8kZMVmUUv2KUmNOlV5bYWt/aohYKKyeiXUoglVhRSZ0my/fsUSWqPDkLx/SjuBJOfDO8RhBzMzl7fRPfmq6kfqF45seIxKfbAClI6Ykl2aseBa4RsgICqjCqEP0akSOPlawPiksgxT4waRRziFALhSYnJ8fGxigcxsfHxxTq6%2buTfpLUPjIyMjw8DMMGJP39/UhGR0fJmOy32WzsV0FNd1Jj4O0amrdtcY6hJTrsrQQO4/f7fT4fI%2b5ER09VBwPA0eYz4idMAwo9V0idQnwKCXtgeJ46evxKNDrk9YaUUz7MAApSCgGTyVRaWvrw4UN6fEqGsrIyigiElAyMCKuqqvggYIwceDabzcXFxSyBxPhSQ0MDrojxOhoADE8FgwNu9xuaeo5TvJ9yoKenB7emnCYMBhSyWq1MCQOZSpBIyf3s2TO2ERuUEgQJY0B5BaKXAZPBYPfUFAXFG2ohcoj0LoKmaikrWCsomyxJBmCBXvm4jPq%2b2KKOiCnfqWEAN9M3A%2bqeTFE3/vo7NWIAItPrDv4fKJmCSx8dEr/xrdue7vHocLH/h5/3/63kwFLiFD8BvAoIk14WhlpgWSHCRWohgIlqR1p%2boAqkY4m%2bhuaFxieyvg7E0NrQ5kQ3N9eonWKxtY0N8gYNNRJgaCEchmdpdWNjeW2NtOgNhXQzgAgmu9MZ0vjSHLpcLtCKxpc2kq6XasdoNNYo1NzSQuJnm7WtzeX311MsTU83OxyV4ILbzdVst1tdrjans8XhaLLZyNwWlwsGeaPNhpw9oFLd6Gj7%2bPi7PXZtF5I0f/i/GuzZQJu3SB3KY6EQjERUBqFMRaIyywqzpKzuTKPRuI4G7I/UE/urq24NTeK9r4%2bqI0u8Df3fE7/HG579vNCYz9dkt1uUDMbV6nCoozAWRqeTVOaen5fUf9wGULRuvS5RyT/wWzS4ynFS014ymc5cv/5ZVtanN24wfmUwfJ6d/eXNm/BcXxsMn2RmnsvNPXPtWk5Dw07qP04D5KH7Fxcds7MDHg/HDFZMBAJghfxuhwG/mkx/lJdn1tb%2bVVmZ29j495MnPxQV3WxoOH/37p8VFQXNzddralD9%2b8LClBkAAoC%2b2DARDNr8flR3zs0JHosBP965g66XSkt/N5vTjcbvCgoyzOafS0rgse03s/mXkhKehqGxcdcA9f%2bFUhOO6g%2b7iQSqf5GdfdZgOJubi8N8k5//bX6%2bMOfy8rh2%2bLw8/OqOxSIG7P6/UOJYKK5FalqcX1mZpkBaWPAoF5HK9YpRRpHTGS8rv9BQ/uw8ATrxU5pGX/3XosFgoBnv7e3tSjV1dHYe8WIzOvMnMzMz7cqVKxkZGenp6RcvXjyv0E8nmFDvwoULqIrCly9fvnr16n8d6jqUyVBtaQAAAABJRU5ErkJggg==' /%3e%3c/svg%3e"}}}]);