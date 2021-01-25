const nodeExternals = require('webpack-node-externals')

// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'WGTWO API docs',
  siteUrl: 'https://docs.wgtwo.com',

  chainWebpack(config, { isServer }) {
    config.module.rules.delete('svg')
    config.module.rule('svg')
      .test(/\.svg$/)
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')

    if (isServer) {
      config.externals(nodeExternals({
        allowlist: [
          /\.css$/,
          /\?vue&type=style/,
          /vue-instantsearch/,
          /instantsearch.js/,
          /typeface-league-spartan/
        ]
      }))
    }
  },

  templates: {
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        baseDir: './docs',
        typeName: 'DocPage',
        template: './src/templates/DocPage.vue',
        route: '/:topic/:title', // e.g. /voicemail/list-and-play-voicemails/
        plugins: [
          '@gridsome/remark-prismjs'
        ],
        remark: {
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#'
            }
          }
        }
      }
    },
  ],
}
