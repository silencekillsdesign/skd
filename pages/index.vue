<template>
  <v-layout column justify-center align-center>
    <homeHero />
    <homeFeature /> <!-- TODO create custom images for each -->
    <homeServices />
    <!-- TODO add dynamic blogs section -->
    <clients />
    <faqs data-aos="fade-up" data-aos-easing="ease-in-out-back" data-aos-duration="1400" />
    <aboutTestimonials  data-aos="fade-down" data-aos-easing="ease-in-out-back" data-aos-duration="1000"  />
  </v-layout>
</template>

<script>
// page components
import homeHero from '~/components/home/homeHero.vue'
import homeServices from '~/components/home/homeServices.vue'
import homeFeature from '~/components/home/homeFeature.vue'
// other page components -- should probably be global
import aboutTestimonials from '~/components/about/aboutTestimonials.vue'
// global components
import clients from '~/components/global/clients.vue'
import faqs from '~/components/global/faqs.vue'

export default {
  components: {
    homeHero,
    homeFeature,
    homeServices,
    faqs,
    aboutTestimonials
  }
}
</script>
