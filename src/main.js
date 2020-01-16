// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import Prism from 'vue-prism-component'
import 'prismjs/components/prism-protobuf'

import DefaultLayout from '~/layouts/DefaultLayout.vue'
import DocsLayout from '~/layouts/DocsLayout.vue'
import Header from '~/components/Header.vue'
import Buefy from 'buefy'
import '~/assets/style/index.scss'
import GithubCode from '~/components/GithubCode.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.use(Buefy)
  Vue.component('DefaultLayout', DefaultLayout) // Set DefaultLayout as a global component
  Vue.component('DocsLayout', DocsLayout)
  Vue.component('Header', Header)
  Vue.component('Prism', Prism)
  Vue.component('GithubCode', GithubCode)
}
