// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api


import Buefy from 'buefy'
import '~/assets/style/index.scss'
import 'prismjs/themes/prism-okaidia.css'

import Header from '~/components/Header.vue'
import DefaultLayout from '~/layouts/DefaultLayout.vue'
import DocsLayout from '~/layouts/DocsLayout.vue'
import GithubCode from '~/components/GithubCode.vue'
import JitpackDependency from '~/components/deps/JitpackDependency.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.use(Buefy)
  Vue.component('DefaultLayout', DefaultLayout) // Set DefaultLayout as a global component
  Vue.component('DocsLayout', DocsLayout)
  Vue.component('Header', Header)
  Vue.component('GithubCode', GithubCode)
  Vue.component('JitpackDependency', JitpackDependency)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Quicksand&display=swap'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@3.25.0/swagger-ui.css'
  })
  head.script.push({
    src: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@3.25.0/swagger-ui-bundle.js'
  })
  head.script.push({
    src: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@3.25.0/swagger-ui-standalone-preset.js'
  })
}
