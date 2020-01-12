const colors = require("vuetify/es5/util/colors").default;

// Vuetify Stuff

// spa shit for netlify
const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  // testing local json
  env: {
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://silencekillsdesign.com"
        : "http://localhost:3000/data/"
  },

  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: process.env.npm_package_name + " | %s",
    title:
      process.env.npm_package_name ||
      "SilenceKillsDesign - Bozeman SEO, Web Design, Branding, & Digital Marketing",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          process.env.npm_package_description ||
          "We are a digital agency in Bozmeman, MT specializing in branding, web design and development, SEO, and graphic design for local, small, or large businesses."
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "web design bozeman, web designer bozeman, bozeman seo, seo bozeman, logo design bozeman, marketing bozeman, digital marketing bozeman, bozeman, montana"
      },
      // open graph
      {
        hid: `og:locale`,
        property: "og:title",
        content: `en_US`
      },
      {
        hid: `og:type`,
        property: "og:image",
        content: "website"
      },
      {
        hid: `og:title`,
        property: "og:title",
        content: `SilenceKillsDesign - Bozeman Web Design, SEO, Marketing, and Design`
      },
      {
        hid: `og:url`,
        property: "og:url",
        content: "https://silencekillsdesign.com"
      },
      {
        hid: `og:image`,
        property: "og:image",
        content: "~/silencekillsdesign--opengraph-img.png/"
      },
      // twitter
      {
        hid: `twitter:card`,
        name: "twitter:card",
        content: "summary"
      },
      {
        hid: `twitter:creator`,
        name: "twitter:creator",
        content: "@s1lencek1lls"
      },
      {
        hid: `twitter:title`,
        name: "twitter:title",
        content:
          "SilenceKillsDesign - Bozeman Web Design, SEO, Marketing, and Design"
      },
      {
        hid: `twitter:description`,
        name: "twitter:description",
        content:
          "SilenceKillsDesign offers loacal web design and marketing in Bozeman, MT. Check Bozeman's best web design, SEO, design, branding, and more company."
      },
      {
        hid: `twitter:image`,
        name: "twitter:image",
        content: "~/staticsilencekillsdesign--twitter-card.jpg"
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
  css: [
    "aos/dist/aos.css"
    // "vue2-animate/dist/vue2-animate.css"
    // "vue-image-lightbox/dist/vue-image-lightbox.min.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: "~/plugins/vuetify"},
    { src: "~/plugins/aos", ssr: false },
    { src: "~plugins/ga.js", ssr: false },
    { src: "~plugins/silentbox.js", ssr: false }
    // { src: "~/plugins/VueOwlSlider", ssr: false },
    // { src: '~/plugins/vue-lightbox-pluign.js', ssr: false }
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
    // "@neneos/nuxt-animate.css",
    "@nuxtjs/google-analytics",
    "@nuxtjs/google-gtag",
    ["@nuxtjs/google-tag-manager", { id: "GTM-4701120624" }],
    "@nuxtjs/robots",
    // "@bazzite/nuxt-optimized-images"
    "@nuxtjs/sitemap",
    "@nuxtjs/redirect-module"
  ],
  redirect: [
    {
      from:
        "^/silenceKillsDesign-Work/treehouse-ping-pong-scoring-app-concept/",
      to: "/portfolio",
      statusCode: 301
    },
    {
      from: "/services/email",
      to: "/contact",
      statusCode: 301
    },
    {
      from: "/services/webdevelopment",
      to: "/webdesign",
      statusCode: 301
    },
    {
      from: "https://www.silencekillsdesign.com",
      to: "/",
      statusCode: 301
    }
  ],
  // "@nuxtjs/google-analytics",
  googleAnalytics: {
    id: "UA-24456454-1"
  },
  // "@nuxtjs/robots",
  robots: {
    UserAgent: "*",
    Disallow: "",
    Sitemap: "/sitemap"
  },
  // "@nuxtjs/sitemap",
  sitemap: {
    hostname: "https://silencekillsdesign.com",
    gzip: true,
    exclude: [
      "/contact/spec",
      "/services/email",
      "/services/screenprinting",
      "/services/webdevelopment",
      "/news",
      "/indexBU"
    ]
  },
  //  "@bazzite/nuxt-optimized-images"
  // optimizedImages: {
  //   optimizeImages: true
  // },

  //to prerender thankyou page, hopefully fix netlify redirect miss.

  // generate: {
  //   routes: function() {
  //     return ["/thankYou"];
  //   }
  // },

  // for netlify to capture form data
  configureWebpack: () => {
    if (process.env.NODE_ENV !== "dev") return {};
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, "dist"),
          // List of routes to prerender
          [
            "/",
            "/contact",
            "/thankYou",
            "/about",
            "/services",
            "/services/*",
            "/portfolio",
            "/blog"
          ],
          {
            // options
          }
        )
      ]
    };
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "https://silencekillsdesign.com"
  },
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
  // TODO: add purgecss
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {
    extend(config, ctx) {}
  }
};
