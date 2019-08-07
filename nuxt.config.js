const colors = require("vuetify/es5/util/colors").default;

// spa shit for netlify
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Play:400,700"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Overpass:300,400,400i,900,900i"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#AA00FF" },
  /*
   ** Global CSS
   */
  css: ["aos/dist/aos.css", "vue2-animate/dist/vue2-animate.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~plugins/aos", ssr: false },
    // { src: "~plugins/vuew-animate", ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/vuetify",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    '@neneos/nuxt-animate.css'
  ],
  devModules: [
    // Simple usage
    // '@nuxtjs/vuetify'
  ],

  //to prerender thankyou page, hopefully fix netlify redirect miss.
  generate: {
    routes: function () {
      return [
        '/thankyou',
        '/',
        '/about',
      ]
    }
  },
  
  // for netlify to capture form data
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          [
            '/', '/about', 'services', '/contact', '/thankYou', 'portfolio', 'blog'],
          {
            // options
          }
        ),
      ]
    }
  },
  
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: colors.blue.darken2,
      accent: colors.grey.darken3,
      secondary: colors.amber.darken3,
      info: colors.teal.lighten1,
      warning: colors.amber.base,
      error: colors.deepOrange.accent4,
      success: colors.green.accent3
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  vendor: ["aos"]
};
