<template>
  <transition name="fade">
    <v-layout column justify-center align-center>
      <homeHero />
      <homeFeature />
      <!-- TODO create custom images for each -->
      <homeServices data-aos="zoom-in-down" data-aos-easing="ease-in-out-back" data-aos-duration="1400"  />
      <!-- <homeServicesDynamic /> -->
      <!-- TODO add dynamic blogs section -->
      <aboutClients/>
      <faqs data-aos="zoom-in-down" data-aos-easing="ease-in-out-back" data-aos-duration="1400" />
      <aboutTestimonials />
    </v-layout>
  </transition>
</template>

<script>
// page components
import homeHero from "~/components/home/homeHero.vue";
// import homeServicesDynamic from '~/components/home/homeServicesDynamic.vue'
import homeServices from "~/components/home/homeServices.vue";
import homeFeature from "~/components/home/homeFeature.vue";
// other page components -- should probably be global
import aboutTestimonials from "~/components/about/aboutTestimonials.vue";
import aboutClients from "~/components/about/aboutClients.vue";
// global components
import faqs from "~/components/global/faqs.vue";

export default {
  components: {
    homeHero,
    homeFeature,
    homeServices,
    // homeServicesDynamic,
    faqs,
    aboutClients,
    aboutTestimonials
  },
  data () {
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
    }
  },
  head() {
    return {
      title: "SilenceKillsDesign - Development, Design, and Marketing",
      __dangerouslyDisableSanitizers: ['script'],
      script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }],
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
  }
};
</script>

<style lang="scss">
</style>