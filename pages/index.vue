<template>
  <transition name="fade">
    <v-layout column justify-center align-center>
      <homeHero />
      <homeFeature
        data-aos="fade-in-down"
        data-aos-easing="ease-in-out-back"
        data-aos-duration="1400"
      />
      <!-- TODO create custom images for each -->
      <homeServices
        data-aos="fade-in-down"
        data-aos-easing="ease-in-out-back"
        data-aos-duration="1400"
      />
      <!-- <homeServicesDynamic /> -->
      <!-- TODO add dynamic blogs section -->
      <aboutClients />
      <faqs data-aos="fade-in-down" data-aos-easing="ease-in-out-back" data-aos-duration="1400" />
      <aboutTestimonials />
      <v-container>
      <v-row class="ma-4">
        <v-col cols="12" md="4" class="hidden-sm-and-down">
          <v-img alt="silencekillsdesgin icon" contain height="410" :src="require('@/assets/branding/silencekillsdesign--icon--color.svg')"></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <blogAuthor />
        </v-col>
      </v-row>
      </v-container>
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
import blogAuthor from "~/components/blog/blogAuthor.vue";
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
    aboutTestimonials,
    blogAuthor
  },
  data() {
    return {
      structuredData: {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        name: "SilenceKillsDesign",
        brand: "SilenceKillsDesign",
        about: "We are a digital agency in Bozmeman, MT offering services in branding, web design and development, SEO, and graphic design for local, small, or large businesses.",
        legalName: "SilenceKillsDesign",
        url: "https://silencekillsdesign.com",
        logo:
          "https://silencekillsdesign.com/silencekillsdesign--opengraph-img.png",
          image: "https://silencekillsdesign.com/silencekillsdesign--opengraph-img.png",
        foundingDate: "2009",
        priceRange: "$",
        knowsAbout: [
          "Web Development",
          "Web Design",
          "copywriting",
          "logo design",
          "Graphic design",
          "marketing",
          "SEO",
          "audio",
          "video"
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
        telephone: "+1-406-579-1985",
        email: "cj@silencekillsdesign.com"
      }
    };
  },
  head() {
    return {
      title: "Bozeman's Web Design, SEO, Branding Expert",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            process.env.npm_package_description ||
            "We are a digital agency in Bozmeman, MT offering services in branding, web design and development, SEO, and graphic design for local, small, or large businesses."
        },
        {
          name: "keywords",
          content: "branding, bozeman web design, seo, bozeman creative"
        }
      ],
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: JSON.stringify(this.structuredData),
          type: "application/ld+json"
        }
      ]
    };
  }
  // vm nuxt course
  // asyncDta(\{ $$axios }) {
  //   return context.$axios.get('http://localhost:4000/events').then(response => {
  //     return {
  //       events: response.data
  //     }
  //   })
  // }
};
</script>

<style lang="scss">
</style>