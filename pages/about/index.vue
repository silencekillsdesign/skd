<template>
  <v-container fluid pa-0>
    <!-- <sparklineHeader pageTitle="About Us" pageSubtitle="Better Brands. Less Bullshit." /> -->
    <pageHeader pageTitle="About Us" pageSubtitle="Better Brands. Less Bullshit." />
    <aboutSplit />
    <aboutSplitLeft />
    <aboutTestimonials
      data-aos="fade-left"
      data-aos-duration="1200"
      data-aos-delay="200"
      data-aos-once="true"
    />
    <aboutClients 
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-delay="200"
      data-aos-once="true"
    />
    <faqs 
      data-aos="fade-down"
      data-aos-duration="1300"
      data-aos-delay="300"
      data-aos-once="true"
    />
  </v-container>
</template>

<script>
import pageHeader from '~/components/global/pageHeader.vue'
import faqs from '~/components/global/faqs.vue'
// import sparklineHeader from '~/components/global/sparklineHeader.vue'
import aboutSplit from '~/components/about/aboutSplit'
import aboutSplitLeft from '~/components/about/aboutSplitLeft'
import aboutTestimonials from '~/components/about/aboutTestimonials.vue'
import aboutClients from '~/components/about/aboutClients.vue'

export default {
  components: {
    pageHeader,
    aboutSplit,
    aboutSplitLeft,
    aboutTestimonials,
    aboutClients,
    faqs
    // sparklineHeader
  }
}
</script>

<style>
</style>
