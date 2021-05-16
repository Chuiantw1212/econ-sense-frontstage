
const webpack = require('webpack')
export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: '常識經濟學',
    htmlAttrs: {
      lang: 'zh-Hant-TW',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { property: 'og:site_name', content: '常識經濟學' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: '常識經濟學' },
      { property: 'og:description', content: '只教你需要的' },
      { property: 'og:image', content: 'https://storage.googleapis.com/my-blog-287510.appspot.com/%E5%B8%B8_200.png' },
    ],
    script: [
      { 'data-ad-client': 'ca-pub-6322593540825146', async: true, src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' },
      {
        src: 'https://cdn.jsdelivr.net/npm/sweetalert2@10'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/econ-sense.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300&display=swap",
        media: 'screen',
        defer: true
      },
    ]
  },
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/main.js',
    '@/plugins/bootstrap.js',
    '@/plugins/filters.js',
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '@/assets/global.css',
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'G-DY0VR8Q0RD'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
}
