// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api


import Buefy from 'buefy'
import '~/assets/style/index.scss'
import 'prismjs/themes/prism-okaidia.css'

import Header from '~/components/Header.vue'
import DefaultLayout from '~/layouts/DefaultLayout.vue'
import DocsLayout from '~/layouts/DocsLayout.vue'

export default function (Vue, { router, head, isClient }) {
  Vue.use(Buefy)
  Vue.component('DefaultLayout', DefaultLayout) // Set DefaultLayout as a global component
  Vue.component('DocsLayout', DocsLayout)
  Vue.component('Header', Header)
}
