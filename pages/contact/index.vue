<template>
  <div>
    <pageHeader pageTitle="Contact Us" pageSubtitle="Call Us. Write Us."/>
    <v-container>
      <transition appear class="slide-down">
        <pageIntro introText="We are located in Bozeman, MT, and can often be found working from one of Bozeman's local coffee shops. We're happy to meet via web conferance, or in person in the Bozeman area." />
      </transition>
      <v-layout fill-height align-space-between id="main">
        <v-flex xs12 md4 fill-height>
          <contactCard/>
        </v-flex>
        <v-flex xs12 md7 offset-md1>
          <contactForm/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import pageHeader from '~/components/global/pageHeader.vue'
import pageIntro from '~/components/global/pageIntro.vue'
import contactForm from '~/components/contact/contactForm.vue'
import contactCard from '~/components/contact/contactCard.vue'
export default {
  components: {
    pageHeader,
    pageIntro,
    contactForm,
    contactCard
  }
}
</script>

<style>

</style>
