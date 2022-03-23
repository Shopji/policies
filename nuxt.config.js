export default {
  // server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: '/policies/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Shopji Policies',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Shopji Policies' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/base.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/antd-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    ],

    styleResources: {
      // your settings here
      scss: '@/assets/common/*.scss',
      sass: [],
      less: [],
      stylus: [],
      hoistUseStatements: true
   },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
	'@nuxt/content',
  '@nuxtjs/i18n',
  ],

  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'shopji_i18n_lang_redi',
      onlyOnRoot: true,
    },

    strategy: 'prefix_except_default',
    defaultLocale: 'kh',
    locales: [
    {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.json'
    },
    {
      code: 'kh',
      iso: 'km-KH',
      file: 'km-KH.json'
    },
    {
      code: 'cn',
      iso: 'zh-CN',
      file: 'zh-CN.json'
    }
    ],
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'kh'
    },

  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
