<template>
  <v-app dark>
    <primaryNav />
    <!-- <dropdownNav /> -->
    <v-content>
      <transition name="fade" class="fade">
      <v-container fluid pa-0>
          <nuxt />
        <speedDial />
        <!-- <developmentDialog /> -->
      </v-container>
      </transition>
    </v-content>
    <quickQuoteContact />
    <pagePrefooter />
    <pageFooter />
  </v-app>
</template>

<script>
import primaryNav from "~/components/global/primaryNav.vue";
import dropdownNav from "~/components/global/dropdownNav.vue"; //porting from the source theme
import pageFooter from "~/components/global/pageFooter.vue";
import pagePrefooter from "~/components/global/pagePrefooter.vue";
import quickQuoteContact from "~/components/global/quickQuoteContact.vue";
import speedDial from "~/components/global/speedDial.vue";
// import developmentDialog from "~/components/global/developmentDialog.vue";

export default {
  components: {
    primaryNav,
    dropdownNav,
    pageFooter,
    pagePrefooter,
    quickQuoteContact,
    speedDial,
    // developmentDialog
  },
  head() {
    return {
      title: "SilenceKillsDesign - Development, Design, and Marketing",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow" },
        {
          name: "description",
          content:
            "SilenceKillsDesign - Web Design &Development, Marketing, and Graphic Design in Bozeman, MT."
        },
        {
          name: "keywords",
          content:
            "bozeman web design, bozeman seo, branding, logo design"
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
          content: `SilenceKillsDesign - Web Design, SEO, and Branding Experts`
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
            "SilenceKillsDesign - Web Design, SEO, and Branding Experts"
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
      ]
    };
  },
  data() {
    return {
      structuredData: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "SilenceKillsDesign",
        brand: "SilenceKillsDesign",
        knowsAbout: [
          "Web Development",
          "Graphic design",
          "marketing",
          "SEO",
          "audio video"
        ],
        sameAs: [
          "https://www.facebook.com/silencekillsdesign/",
          "https://twitter.com/s1lencek1lls",
          "https://www.linkedin.com/in/cjwilliamsworks/",
          "https://instagram.com/silencekillsdesign"
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "221 Virginia Way",
          addressLocality: "Bozeman",
          addressRegion: "MT",
          postalCode: "59718"
        },
        telephone: "406-579-1985",
        email: "cj@silencekillsdesign.com"
      },
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "bubble_chart",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>

<style lang="scss">
// @import "~/assets/style/custom.scss";
// @import "~/assets/sass/main.scss";
.primary-nav {
  max-width: 100vw !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
