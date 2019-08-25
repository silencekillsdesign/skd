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
    <recentWork />
  </v-container>
</template>

<script>
import pageHeader from '~/components/global/pageHeader.vue'
import faqs from '~/components/global/faqs.vue'
import recentWork from '~/components/global/recentWork.vue'
// import sparklineHeader from '~/components/global/sparklineHeader.vue'
import aboutSplit from '~/components/about/aboutSplit'
import aboutSplitLeft from '~/components/about/aboutSplitLeft'
import aboutTestimonials from '~/components/about/aboutTestimonials.vue'
import aboutClients from '~/components/about/aboutClients.vue'

export default {
  data: () => ({
  }),
  head: {
    title: 'About SilenceKillsDesign',
    meta: [
      { hid: 'description', name: 'description', content: 'SilenceKillsDesign is a full-service digital agency specializing in multimedia marketing strategies. We offer services in brand management, web development, online marketing, and graphic design, along with many other services to help your local, small, or large business succeed.' }
    ]
  },
  components: {
    pageHeader,
    aboutSplit,
    aboutSplitLeft,
    aboutTestimonials,
    aboutClients,
    faqs,
    recentWork
    // sparklineHeader
  }
}
</script>

<style>
</style>
