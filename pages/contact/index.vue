<template>
  <v-container fluid pa-0>
    <pageHeader pageTitle="Contact Us" pageSubtitle="Call Us. Write Us."/>
    <pageIntro introText="We are located in Bozeman, MT, and can often be found working from one of Bozeman's local coffee shops. We're happy to meet via web conferance, or in person in the Bozeman area." />
    <v-container>
      
      <v-layout row wrap fill-height align-space-between id="main">
        <v-flex xs12 md4 fill-height data-aos="fade-left" data-aos-easing="ease-in-out-back" data-aos-duration="600">
          <contactCard/>
        </v-flex>
        <v-flex xs12 md7 offset-md1 data-aos="fade-right" data-aos-easing="ease-in-out-back" data-aos-duration="600">
          <contactBasic/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import pageHeader from '~/components/global/pageHeader.vue'
import pageIntro from '~/components/global/pageIntro.vue'
import contactForm from '~/components/contact/contactForm.vue'
import contactCard from '~/components/contact/contactCard.vue'
import contactBasic from '~/components/contact/contactBasic.vue'
export default {
  components: {
    pageHeader,
    pageIntro,
    contactForm,
    contactCard,
    contactBasic
  }
}
</script>

<style>
</style>
