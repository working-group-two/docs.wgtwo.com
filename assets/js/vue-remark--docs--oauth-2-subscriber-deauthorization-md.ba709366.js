(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{QRYx:function(e,t,r){"use strict";r.r(t);var s=r("7uw+"),a=r("UQSp"),n=r("Kw5r");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var p={VueRemarkRoot:a.a},i=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(p).forEach((function(e){"object"===o(p[e])&&"function"==typeof p[e].render||"function"==typeof p[e]&&"function"==typeof p[e].options.render?t[e]=p[e]:r[e]=function(){return p[e]}}))},c=n.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",v={excerpt:null,title:"Support revoking consent",topic:"oauth 2.0",type:"how-to",roles:["THIRD_PARTY_DEVELOPER"]};var u=function(e){e.options[l]&&(e.options[l]=v),n.a.util.defineReactive(e.options,l,v),e.options.computed=c.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},b=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("VueRemarkRoot",[s("h1",{attrs:{id:"support-revoking-consent"}},[s("a",{attrs:{href:"#support-revoking-consent","aria-hidden":"true"}},[e._v("#")]),e._v("Support revoking consent")]),s("p",[e._v("For third party apps, we require app developers to implement subscriber initiated "),s("a",{attrs:{href:"/oauth-2-0/why-support-user-revoking-of-consent/"}},[e._v("revoking of consent")]),e._v(",\nso that they can easily deauthorize an application.")]),s("h2",{attrs:{id:"definitions"}},[s("a",{attrs:{href:"#definitions","aria-hidden":"true"}},[e._v("#")]),e._v("Definitions")]),s("blockquote",[s("p",[e._v('The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL\nNOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and\n"OPTIONAL" in this document are to be interpreted as described in\n'),s("a",{attrs:{href:"https://www.ietf.org/rfc/rfc2119.txt",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("RFC 2119")]),e._v(".")])]),s("h2",{attrs:{id:"flow"}},[s("a",{attrs:{href:"#flow","aria-hidden":"true"}},[e._v("#")]),e._v("Flow")]),s("blockquote",[s("p",[e._v("A sequence diagram is included "),s("a",{attrs:{href:"#flow-chart"}},[e._v("here")]),e._v(".")])]),s("ol",[s("li",[e._v("The user MUST be able to prompt the third party application (app) to revoke all consents it has given to the app (i.e. clicking a button).")]),s("li",[e._v("The app SHALL request a "),s("em",[e._v("revoke consent magic link")]),e._v(" from "),s("em",[e._v("Working Group Two ID")]),e._v(" (WGTWO ID), supplying a "),s("a",{attrs:{href:"https://auth0.com/docs/protocols/state-parameters#csrf-attacks",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("random, non-guessable "),s("code",{pre:!0},[e._v("state")])]),e._v(".")]),s("li",[e._v("The app SHALL redirect the user to the given link, which opens a WGTWO ID webpage.")]),s("li",[e._v("The user MAY confirm/cancel revoking consent (the user MAY also just close/leave the webpage).")]),s("li",[e._v("The user is redirected back to the app, and the app MUST validate the state, and if valid MAY delete local user content (i.e. from a database) and wipe user sessions to reflect that the app no longer has access to the users' WGTWO data/APIs.")])]),s("h2",{attrs:{id:"redirect"}},[s("a",{attrs:{href:"#redirect","aria-hidden":"true"}},[e._v("#")]),e._v("Redirect")]),s("p",[e._v("The user will be redirected back to the given redirect URI after logout with the query parameter "),s("code",{pre:!0},[e._v("state")]),e._v(" with the given\nstate value. A query parameter for "),s("code",{pre:!0},[e._v("error")]),e._v(" will be included in case of errors or the user cancelling the flow. ")]),s("h2",{attrs:{id:"generate-a-revoke-consent-magic-link"}},[s("a",{attrs:{href:"#generate-a-revoke-consent-magic-link","aria-hidden":"true"}},[e._v("#")]),e._v("Generate a revoke consent magic link")]),s("p",[e._v("This endpoint requires authentication by an OAuth2 access token issued to your client using the "),s("code",{pre:!0},[e._v("client_credentials")]),e._v(" grant. ")]),s("p",[e._v("You also need to include a valid user access token.")]),s("p",[e._v("This will return a 200 response with the redirect URI if successful.\nOtherwise a 400 response code will be given, with a json structure explaining the error.")]),s("h2",{attrs:{id:"request"}},[s("a",{attrs:{href:"#request","aria-hidden":"true"}},[e._v("#")]),e._v("Request")]),s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",{pre:!0,attrs:{class:"language-shell"}},[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --request POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Accept: application/json"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Authorization: Bearer '),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${CLIENT_ACCESS_TOKEN}")]),e._v('"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --header "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/x-www-form-urlencoded'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --url https://id.wgtwo.com/ext-api/v0/auth/create-revoke-consent-magic-link "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("token")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${USER_ACCESS_TOKEN}")]),e._v('"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("redirectTo")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${REDIRECT_URI}")]),e._v('"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("state")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("${STATE}")]),e._v('"')])])]),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),s("th",[e._v("Description")])])]),s("tbody",[s("tr",[s("td",[e._v("CLIENT_ACCESS_TOKEN")]),s("td",[e._v("Access token from client credentials grant")])]),s("tr",[s("td",[e._v("USER_ACCESS_TOKEN")]),s("td",[e._v("Access token for the user")])]),s("tr",[s("td",[e._v("REDIRECT_URI")]),s("td",[e._v("URI where the user should be redirected to afterwards, must be added in developer portal")])]),s("tr",[s("td",[e._v("STATE")]),s("td",[e._v("Opaque state that will be included in final redirect")])])])]),s("h3",{attrs:{id:"response"}},[s("a",{attrs:{href:"#response","aria-hidden":"true"}},[e._v("#")]),e._v("Response")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",{pre:!0,attrs:{class:"language-json"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"redirectTo"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://id.wgtwo.com/revoke-consent?revoke_token=(...)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"error"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"errorDescription"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"errorHint"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[e._v("null")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")])])]),s("h2",{attrs:{id:"flow-chart"}},[s("a",{attrs:{href:"#flow-chart","aria-hidden":"true"}},[e._v("#")]),e._v("Flow chart")]),s("p",[s("g-image",{attrs:{src:r("SUGz"),alt:"Flowchart"}})],1)])}),[],!1,null,null,null);"function"==typeof i&&i(b),"function"==typeof u&&u(b);t.default=b.exports},SUGz:function(e,t){e.exports={type:"image",mimeType:"image/svg+xml",src:"/assets/static/auth-revoke-session.3d2bee5.99b47db8193a6d07f4c861a0ed9e8d25.svg",size:{width:850,height:667},sizes:"(max-width: 850px) 100vw, 850px",srcset:["/assets/static/auth-revoke-session.82a2fbd.99b47db8193a6d07f4c861a0ed9e8d25.svg 480w","/assets/static/auth-revoke-session.3d2bee5.99b47db8193a6d07f4c861a0ed9e8d25.svg 850w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 850 667' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-7efab0ff4d50639817dcf972d1a3f55d'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-7efab0ff4d50639817dcf972d1a3f55d)' width='850' height='667' xlink:href='data:image/svg%2bxml%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAyCAYAAADsg90UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAQ4klEQVRo3tVbCXRVRZq%2b72WD7BAICEToxmYT3ru37ltCAi8JWViazZGeRsWx6YM404gT0hgQFwSZM2K3jRv2GRXtOUdHxTOHYWlElkbRFghMEAjZSPKSvPW%2bJQtbkneXmvnvq3q5CSHE2APOPec/Vbfu//1V9b%2b/qv6q%2bh/DMAzjtHcxJE1yO8Q8j1PM8zjC5GoO5TnsHWrqcUq0fI7bIeY013UOZcjTXNcZD2XwDfBuwDV2hKkX3u0Qc50NXYkabKy7uRvrbOpScc6mznDa2JlH2%2bV2iPlOe1dyBHu5M8bdLGZ7nNIcta2NnZF6AUcJ6ibY4YBzNYWYyON1SXpIPU4p9%2boVjFtbCLVi3N6O8fXr4RTeW1rCeb9PUVxNISOV4WoW%2bWAA47Y2wtOG8bVrYaL4Fo1Mj1PKjmAbQz8N%2bLux0AbAXb1KZFwN44JBjENdKrYggm0KZfgE5dqVK2H8tavd9QKeEmA7O1XsLwAneOSobgW4iQJcUg5UFAhg2e9X5GAQKw0NbUp5eYPicFxX4B3KA0GM/X4l5GoSIwpwN4u8369I/oACnZDt9nblzJk6pbLSq1y44FBcrg7Ay/6AIrcEb1LARL9PkQIBtaHypUtu5eJFp1JbG1AqKlxKdbWg%2bHyyEghg8cYNjD0uKb%2bnAuT2tnaM7fZ2GfiBAF9T44tQMIglUIrHJS27WQGuiAJs0IhAAIf8fkUMBrHY3HxNPHPmstjYeEVsacEidJwoqENrAUQBXaAEwDkc18Xycrt4/nyzePZsnfoO5SAXrMfjlLK0FuD3dWMrKz3iX/96SayocIvnzjWKFy86RZ9PFgMB3AW/Jpi7RgHjfILc0tKCFbu9PQS8J09Wi/99tl68dMmj1g9lwSDuUi3PJT3YlwVEEQXkSxLGHR3d1NWFsSxjHAr1LIOGuJpCSKMAC5h6ZxfGNzQ4kAcpvFM8yPI4JZtGAT8DLOURxTCGpiADzBd44PG4pLkaBdzr9ykyyAQeWh%2bkotSdUqzXJT2kKsCrUYDHIaoW4HaI0wSv/IVPkD/3CfJBSAWv/LnHHfoCUrXcKx/0%2bxQo39d4%2bfp4KqOh9upEr1s8KHglwB8EfsEjqVivR/yc4CMy3c3iZIp12kPpglfe7xPkQ2Gs9Lk3jD0MKcjxhfF/FrzyX9wOcYYGO1zwyLt9gnxY8MoHgZdiQY5A8VC3Vz7mdogztVYfeQJBzPTz6JnBP1G3%2bhAIYEbwKoPCtl/HjKtJHBS27Uqvvra0hQuCLZjpwFgnYqy7gbEOY8x8tmdv1M6331aXO4yxDlKr1cqbzebf8Dy/DiE0FyG0jOf5JWaz%2bQmLxaqObWegTeU9/tWJ2H//6D%2biQBaVDWlQo3CvS4p8C2Gsa%2bkQ1bp//%2bof4ssrqiGv6yLfOzHWaX8sn1dhbsjdWAVjXXtI0QEWE/4QIZABfaQKZLrNKOwHOBq6YCzDUGBqqgJq2Z8%2b%2bFD31FP/nDh9%2bowY2%2bycWJstJ9psNqeZTKafIIQmIoTGkvRenjdNMZnMo3NsudG5uXkxLMslLF68eAzIWV/yL6BA5lePPa5btHCpPjNzpo7jWB1CSGe1WnUPPPALHXwDnq%2b/PK/WvXXr1qF/%2buBjFeds6lTbBe2j7YWnqbYj0magq62YKT/boGIBZ6%2b7GvkG5GzoovNO/3ZbXFzMkF%2bdWbx48Sij0TgOITQGOsxx3GiO40YQSifpSI7j0uCdKGU0y7I/y8nJMVCZZrP5tuMFIaTWCc8LL7wwdPPmzWqepv09Wt7NmzcPJTIGN3C3bNmiphs2bNC//vrrcYOdAFpbW6OKi4v1mg6ORwhZEUIcWA1CaBwpmwIKBp6ioiKV980330x4//331aG0Z8%2beO6sACtyyZYvu2WefVYUVFhaCyTIDocLCQhW/fv36%2bDVr1ujHjx%2bvIwqYjBB6CCH0a4TQfITQIoTQUvI%2bC3hsNluPSZdaxO3q1CriBytAo00dFTYQM6TPggUL1HTJkiXpZrN5Asuy8EtncBx3Dxkqw8mwSdcMn1E8z2cYDIZ7MjMzp%2bzatWuNx%2bNR6/74448jsnmeZziOYywWy03D50ejgK1bt1ILGvLll1/2%2bAYd4HleR9Ie7/TX3rZt25CGhobjp06d%2bgm879q1i1qfvlen9QihGKqUGTNmMDNnzmSeeeaZePg%2bbdq079Xuv5kCqOZhItu4caNq/rm5ubc1448%2b%2bkjFvfLKK3GNjY17ampqxmknUbLsriZDZg1CaDFC6DmE0MxewyZ69%2b7dPYbQHVUA5SUzuW6g5nj48GE1ffXVV%2bPq6%2bv3v/fee9MZhomz2WwpCKFkhNA9CKH7CNFlGPJjOI5LZFk2CZbpiRMn3gty9u/ff3eGwA9VwGuvvQYKOLBjxw4Y2ElZWVkwV6SxLDvEaDRGA7EsG0s6HcNxHChoZHZ2dlpUVNToAwcO7Kmrq1OVUFZWpvt/p4Dt27fH2e32fXV1deM0c0c8rBQIoVyS3s/z/P0IoQcQQsO0cpxO54HKykqwHubSpUs/DgVs27bttssYVcDLL7%2bsKqC8vHy8ZsIbQuaApYRsoASigJHa%2buvr649XVVWpCqioqPhxKICuDNo1u/cyduzYMTV/5MiRmIqKiqOPP/44nOAMt1qt48gSmsJxXDKhVOKFQn4UzAdWq3Vsamrq6BMnTvz24sWL6SDr22%2b/vbMKgI5s2LCBepLxq1atUpcuWLdp5xFCQ0kaRZYyGM/MSy%2b9pCNDYAhMgp9%2b%2bulk4lfEAQ%2bxAi3FkRTwMQaDISYvLy/2f1dgVU5dXd3dmQSbmproWIzu5QNAZ/8OIVSKEFqFEFpJlrOFWr7PPvsspqmpaX9FRcW9g2n/u%2b%2b%2bmxAKhTc8nZ2dd1YB8Evm54eP7fLz8ydaLJbRBoMBfqUEhFAiWcrGkSUM9gMTSFn8zJkzEzMyMuKXLFky8sKFC3uPHj06AeTAngDk3s6PGD16NHif6tAD3NNPPw0%2bxZ1XAN0LFBYWTsjMzBwxefLkKGqmHMfpWZbVsSyrNxqNOiAo4zguluf5WCrn9OnTI/pydW/V%2bezs8Dnr888/38MV3rdv350fAufOnVPTs2fPRn/funmez4KZnef5WRzH2chsH0vd6IE8b7zxRkJra6uar6qquvMWUFpaquZLS0vjH330UXUSNJlMff5yxLR1hCDPI4Rm5%2bXlZfM8D3PEIzzPg%2bOj8t1qKEB5SkoK89xzz0Vm/fPnz/%2bodoM3EcdxdJdIlzlwaVMMBkPKggULxppMphSWZVNJ%2bRgtfx/yMiwWy9iMjIyJn3zyyb86nc40aMM333xz5y1g06ZNan7Tpk1DS0pKdGQi68vcGc1yOIxMlCMMBkP8/Pnz77VYLAng6vI8D9%2bTKT/s%2bHo/a9eujWx8/k8cIerKDuRgorq6mppg9ADHPazn/4AQ%2bieE0JMIoXlWq3ULz/OryMEJ7PjyBtr%2b%2bvr6fZWVlVP/pgp48cUX1V%2bMdJSOWX3vPPDOmTNHTQsKCmAZHGc0GuPJbi6pN3Ecl0S%2bgQWMgOWRZdk0MgTg4GQEcXlTNbxJfVByfn4%2bXJwOqampOVRbWzt4BdBfGxRA19QVK1YwMBENxBOkfkBBQcFPzWbzeJZlh4O/TjoYIdI5esAKp0JpCKHhRqMRFDDOZDLR8hTCO5IeyPaWBd9sNhvsCVKqq6sPX758efAKgF%2bbjGE9uKW9OjiR7MYeRAgtQAjNgLsB8j6%2b18HEoC9V9u3bFzNYbENDA%2bwGpw1aAXQSe%2bedd3SrV69OnDRpUpzJZBoCjgzx3uaQ0xg41MwmigAXdxrHcVHAO3Xq1CHLly8f9uSTTw50GdTTewLgLykpSSgsLNRPmTJFp10mb7UMzpo1S/fdd9/RPcCfq6qqBq%2bAdevWRY6TYCkzGAxjiLs6hhxkpmp2ZcNImkhMGHjTWZadNHv2bHXajo%2bPZ5YvX37LIdPXU1NTE/19%2bFevXq1dBX6YAui9QGlpqX7nzp2DvhfYsWNH3MqVK/uzAJ1mrw%2b3TRk8z48xGo1Jc%2bfOnWAymcaTyXEUSfX9WUBNTQ21gIM/SAF93Qvk5%2bcP%2bF4AeOnR1gC30OlkZ/goQqgIyGKxFCOEismuEe4hHwE/YYC70b0VFRXTmLtxIAIKgB0ZPMuWLUuzWCz3sCwLK0A6GT49iJSPJMMKhtAIlmXTi4qKJvA8n048RMo7SoPpLWdUTk5OWlxc3H1lZWWnBEGYdFcUACb68MMPq/nHHnssJSsrK9loNNKt8E0EcwfxB%2bINBoMevD56qzR79mw1bzQawfQTKD/B3ETz588HCxl24cKF442NjZPv2pHY3r171fTDDz%2bMHSiGODPLyJn/XKvV%2biue52GFKYQVR7tVvt1jt9v/664OAWoBK1asSC0oKIjVXGz03v3pNBNhAtkJZiKEDFlZWfnk1BcUMA9ugAhfn3NRTk4O09bWRifBu3coCh202Ww6ctHJmc3m%2bwwGw1CEkHqgCS4rmDPHcXEcxw0lpp1MzvijYWM0adKk6CeeeCIpMzMzdvr06dHk7D%2bJ8CUTd/gmslqtyQkJCYmHDh36%2bcmTJ9V4QnrQekeHwFtvvUUPJuLo2lxQUKA91Ukgy95I0vjI3Z/VatWnp6fr1q5dm7hw4ULd1KlT4d5QN2/evAHVrb0KG9B5AI2ahBTCVbxuidn96X7qEkcUsH3779RvKrkkNaKEPpCnWKAdf3idXpIO0TZIc9UN5/slCKF/hPG98OdLbmpXeXl59MqVv1Ytac1vipl16zYyvy3ZxBQVzlMvQWFfkpWVzTy1dj1Tsu4ZZl3xRmbnWx/Qm6WEtrb2sFtc74u0i/YVokUij%2bCRabgcBEvpg61Y7w/IevDj/3L8dPQf//huAsTbOJzX9MEWHKYg1muFQB7K6PeKS07AM2vXFg9fuvTBtEWLlqYsXvxAKqWsrOwkljUmcBybYLFYk2n5okVLU5ct%2b2XSnDn5Y4uK5prUs8Gy6qhAUInUC%2b3UhOdBsJXaZvje2ob1gk/U73z73xKvXsP6CI6Q1x3uq0/oFZylFfp9Hui4xzk47C///hF9QUFRf5ulxFt98PsUxlHfNah6b%2bp8JE6wWbxf8MpHIebO5yUkKEcEr3zMJyi0DOIAj0JMnrMxFNn5QbQniQUEfsAd9vswxO4d9UNeUL7whUmV43XKkThBT7OUDvGHUBfwAH/Ajw8F/PgLUhapW/DKJ9wO0aAJ8EoTPPJ/%2bgS1jSoW%2bCNtphTGfuV2iFlM7zjBPiNFO8ORlxCbC1GWUAbvaqRoKByU7GoSe0SKAi9Ee1IcRJNCCkTxQGI/kaIUSzFQDnla3lekqM%2bnKBKJBqVtpSmVpcE%2bxPQXKxwMxwqrMb0tLViqrvZJhw%2bflurqghK8QzmJFe7sI1YYYoyl1lYs1tYGpCNHyqSTJ6uk48fPSXZ7u0RijYHwLWKFZeA5fbpGOnLkjHT2bL309dcXpdOnayVBkKT%2bYoVb2zCurhYgxlg6frxc%2buqr71T8qVPVUllZLfQl1F%2bsMFVAbls4WlwJBBSIzoaocCwIopqSQGqIvIZ30dUkshoFmGgkeRiPsc8nY0GQsNcbwUO5AiHxfUSLQ3S6ygMYp7NDxVIZBCt1hKPFe4TL%2b31KO0S5%2b/0KRJVjl6tDrRNwYRkSYGWwCq%2bLhMt7%2b7IAp2SD/wmAIEKRjtM8lKsK8EG4fMigaQiiIe8UC/8BIEqLYFV8ABQg9rAAnwZLwubDWH%2bYCFa6cb2XBTSCBShtLeF2y8BLrLib/OEwfzVc3tnTAv4H06dpCp3IxKwAAAAASUVORK5CYII=' /%3e%3c/svg%3e"}},UQSp:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);