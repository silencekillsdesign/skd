<template>
  <v-container fluid pa-0>
    <pageHeader pageTitle="Thank You!" pageSubtitle="We'll get back to you ASAP!" />
     <pageIntro
      introText="Thanks for taking the time to reach out. We'll be in touch very soon. In the meantime, take a sec to check out our blog articles or follow us on social."
    ></pageIntro>
    <v-container id="main">
      <v-layout row wrap align-center justify-center>
        <v-flex>
          <h1 class="display-1 text-center">Check Out our Other Services</h1>
        </v-flex>
      </v-layout>
    </v-container>
    <homeServices />
    <!-- <blogRecentCards /> -->
  </v-container>
</template>

<script>
import pageHeader from '~/components/global/pageHeader.vue'
import pageIntro from '~/components/global/pageIntro.vue'
import homeServices from '~/components/home/homeServices.vue'
// import blogRecentCards from '~/components/blog/blogRecentCards.vue'

export default {
  components: {
    pageHeader,
    pageIntro,
    homeServices
    // blogRecentCards
  },
  head() {
    return {
      title: "Thanks for Contacting Us",
      meta: [        
        {
          name: "description",
          content:
            "Thanks for contacting us. We'll be in touch soon."
        },
        { name: "robots", content: "index, follow" },
      ]
    };
  }
}
</script>

<style>

</style>
