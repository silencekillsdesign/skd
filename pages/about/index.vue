<template>
  <v-container fluid pa-0>
    <!-- <sparklineHeader pageTitle="About Us" pageSubtitle="Better Brands. Less Bullshit." /> -->
    <pageHeader pageTitle="About Us" pageSubtitle="Better Brands. Less Bullshit." />
    <aboutSplit 
      img="~/assets/img/wolves.svg" 
      imgOrder="0" 
      heading="Who We Are" 
      body="SilenceKillsDesign is a full-service digital agency specializing in brand managment, web development, and integrated online marketing strategies. We work with growing B2B clients across the US and Canada, as well as local Montana businesses. We help to create strategies to meet your business goals and your customers expectations. By this, we find ways to reach new leads, turn leads into customers, and customers into loyal brand advocates. We’re passionate about creating unique solutions to the problems today’s small business owners face." 
      btnText="Connect with Us" 
      btnURL="contact"
    />
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
