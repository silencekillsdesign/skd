<template>
  <v-app dark>
    <primaryNav />
    <v-content>
      <v-container fluid pa-0>
            <transition name="fade">
        <nuxt />
            </transition>
        <speedDial />
        <developmentDialog /> 
      </v-container>
    </v-content>
    <quickQuoteContact  />
    <pagePrefooter />
    <pageFooter />
  </v-app>
</template>

<script>
import primaryNav from '~/components/global/primaryNav.vue'
import pageFooter from '~/components/global/pageFooter.vue'
import pagePrefooter from '~/components/global/pagePrefooter.vue'
import quickQuoteContact from '~/components/global/quickQuoteContact.vue'
import speedDial from '~/components/global/speedDial.vue'
import developmentDialog from '~/components/global/developmentDialog.vue'

export default {
  components: {
    primaryNav,
    pageFooter,
    pagePrefooter,
    quickQuoteContact,
    speedDial,
    developmentDialog

  },
  head() {
    return {
      title: "SilenceKillsDesign - Development, Design, and Marketing",
      meta: [
        {
          name: "description",
          content:
            "SilenceKillsDesign - Web Development, Marketing, and Graphic Design in Bozeman, MT."
        },
        { name: "robots", content: "index, follow" },
        {
          name: "twitter:title",
          content:
            "SilenceKillsDesign - Web Development, Marketing, and Design."
        },
        {
          name: "twitter:description",
          content: "Better Brands. Less Bullshit."
        },
        {
          name: "twitter:image",
          content:
            "assets/branding/silencekillsdesign--logo--horizontal--color.svg"
        },
        { name: "twitter:card", content: "SilenceKillsDesign Logo" }
      ]
    };
  },
  data() {
    return {
      structuredData: {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "SilenceKillsDesign",
        "brand": "SilenceKillsDesign",
        "knowsAbout": [
          "Web Development",
          "Graphic design",
          "marketing",
          "SEO",
          "audio video"
        ],
			"sameAs": [
				"https://www.facebook.com/silencekillsdesign/",
				"https://twitter.com/s1lencek1lls",
        "https://www.linkedin.com/in/cjwilliamsworks/",
        "https://instagram.com/silencekillsdesign"
			],
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "221 Virginia Way",
				"addressLocality": "Bozeman",
				"addressRegion": "MT",
				"postalCode": "59718"
			},
			"telephone": "406-579-1985",
			"email": "cj@silencekillsdesign.com", 
      },
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/style/custom.scss';
@import '~/assets/sass/main.scss';
.primary-nav {
  max-width: 100vw !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
