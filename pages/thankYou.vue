<template>
  <v-container fluid pa-0>
    <pageHeader pageTitle="Thank You!" pageSubtitle="We'll get back to you ASAP!" />
     <pageIntro
      introText="Thanks for taking the time to reach out. We'll be in touch very soon. In the meantime, take a sec to check out our blog articles or follow us on social."
    ></pageIntro>
    <v-container id="main">
      <v-layout row wrap align-center justify-center>
        <v-flex>
          <h1 class="display-1 text-center">Our Recent Posts</h1>
        </v-flex>
      </v-layout>
    </v-container>
    <blogRecentCards />
  </v-container>
</template>

<script>
import pageHeader from '~/components/global/pageHeader.vue'
import pageIntro from '~/components/global/pageIntro.vue'
import blogRecentCards from '~/components/blog/blogRecentCards.vue'

export default {
  components: {
    pageHeader,
    pageIntro,
    blogRecentCards
  }
}
</script>

<style>

</style>
