<template>
<transition name="fade">
  <v-layout column justify-center align-center>
    <homeHero />
    <homeFeature />
    <!-- TODO create custom images for each -->
    <homeServices />
    <!-- TODO add dynamic blogs section -->
    <aboutClients transition="scroll-y-transition" appear />
    <faqs data-aos="zoom-in-down" data-aos-easing="ease-in-out-back" data-aos-duration="1400" />
    <aboutTestimonials
      data-aos="fade-down"
      data-aos-easing="ease-in-out-back"
      data-aos-duration="1000"
    />
  </v-layout>
</transition>
</template>

<script>
// page components
import homeHero from '~/components/home/homeHero.vue'
import homeServices from '~/components/home/homeServices.vue'
import homeFeature from '~/components/home/homeFeature.vue'
// other page components -- should probably be global
import aboutTestimonials from '~/components/about/aboutTestimonials.vue'
import aboutClients from '~/components/about/aboutClients.vue'
// global components
import faqs from '~/components/global/faqs.vue'

export default {
  components: {
    homeHero,
    homeFeature,
    homeServices,
    faqs,
    aboutClients,
    aboutTestimonials
  },
  head() {
    return {
      title: "home page",
        meta: [
          { name: "description", content: "SilenceKillsDesign - Web Development, Marketing, and Design in Bozeman, MT."},
          { name: "robots", content: "index, follow"},
          { name: 'twitter:title', content: 'SilenceKillsDesign - Web Development, Marketing, and Design.'},
          { name: 'twitter:description', content: 'Better Brands. Less Bullshit.'},
          { name: 'twitter:image', content: 'assets/branding/silencekillsdesign--logo--horizontal--color.svg'},
          { name: 'twitter:card', content: 'SilenceKillsDesign Logo'}
      ]
  }
  }
}
</script>

<style lang="scss">
</style>