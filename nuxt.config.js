require('dotenv').config();
const webpack =require('webpack');

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    bodyAttrs: {
    },
    titleTemplate: '%s｜' + process.env.SITE_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: process.env.VIEWPORT },
      { hid: 'description', name: 'description', content: process.env.DEF_DESCRIPTION },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: process.env.DEF_URL },
      { hid: 'og:title', content: process.env.SITE_NAME },
      { hid: 'og:description', property: 'og:description', content: process.env.DEF_DESCRIPTION },
      { hid: 'og:image', property: 'og:image', content: process.env.DEF_OGIMAGE },
    ],
    link: [
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&display=swap' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap' }
    ],
    script: [
      // { src: 'https://code.jquery.com/jquery-3.5.1.min.js', type: 'text/javascript', integrity: "sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=", crossorigin: "anonymous" },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/style.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/slick.js', ssr: false },
    // { src: '@/plugins/vue-slick.js', ssr: false },
    { src: '@/plugins/swiper', ssr: false },
    '@/plugins/ui',
  ],
  build: {// プラグインがES6などで書かれている場合はビルドの指定も必要になる
    // transpile:['vue-slick-carousel']
    vendor: [
      'vue-awesome-swiper',
      'vue-slick-carousel'
    ],
    plugins: [
      new webpack.ProvidePlugin({
        // グローバルなモジュール
        $: 'jquery',
      })
    ]
  },

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
    tailwindcss: {
      configPath: '~/config/tailwind.config.js',
      cssPath: '~/assets/css/tailwind.css',
      purgeCSSInDev: false
    },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/dotenv',
  ],
  optimizedImages: {
    optimizeImages: true,
    imagesName: ({ isDev }) => isDev ? '[path][name][hash:optimized].[ext]' : 'img/[folder]/[name].[ext]'
  },

  /*
    ** Source Directory
    */
  srcDir: 'src/',

  /*
  ** Build configuration
  */
  build: {
    fallback: false,
    publicPath: '/assets/',
    devtools: process.env.NODE_ENV === 'production',
    extractCSS:	process.env.NODE_ENV === 'production',
    // subFolders: false,
    filenames: {
      app: () => 'js/[name].js',
      chunk: () => 'js/[name].js',
      css: () => 'css/[name].css',
      img: () => 'img/[folder]/[name].[ext]',
      font: () => 'font/[name].[ext]'
    },
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-preset-env': {
          stage: 1,
          features: {
            'nesting-rules': false
          },
          importFrom: {
            customMedia: {
              '--sm': '(min-width: 640px)',
              '--md': '(min-width: 768px)',
              '--lg': '(min-width: 1024px)',
              '--xl': '(min-width: 1280px)',
              '--pc': '(min-width: 769px)',
              '--sp': '(max-width: 768px)'
            }
          }
        },
        'postcss-short': {},
        'postcss-calc': {},
        'postcss-nested': {}
      }
    },

    /*
    ** You can extend webpack config here
    */
    extend (config, { isDev, isClient }) {
      // if (!isDev) {
      //   config.output.publicPath = './assets/'
      // }
      // return config;
    }
  },

  // router: {
  //   base: process.env.NODE_ENV === 'production' ? '' : ''
  // },
  // generate: {
  //   dir: 'dist/'
  // }
}
