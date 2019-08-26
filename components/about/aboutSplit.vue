<template>
  <!-- likely to change this to global component imageAside -->
  <!-- make image go to section bg on small screens or hide-->
  <v-row>
    <v-col
      cols="12"
      md="6"
      class="blue accent-4"
      data-aos="fade-up"
      data-aos-easing="ease-in-out-back"
      data-aos-duration="600"
    >
      <v-row justify="center" align="center" class="fill-height">
        <v-img :src="require('~/assets/img/wolves.svg')" contain height="300px" alt="avatar"></v-img>
      </v-row>
    </v-col>
    <v-col
      cols="12"
      md="6"
      data-aos="fade-right"
      data-aos-easing="ease-in-out-back"
      data-aos-duration="600"
    >
      <v-row  class="pa-4 fill-height" justify="center" align="center">
        <h2
          class="text-center display-1 pa-4 mt-4 deep-purple--text text-uppercase boxed-in"
        >Who We Are</h2>
        <p
          class="text-center pa-4 mt-3 mx-5 subheading"
          :class="{'ma-1 pa-1': $vuetify.breakpoint.smAndDown, 'mx-4 ma-3 px-4 pa-3': $vuetify.breakpoint.mdAndUp}"
        >SilenceKillsDesign is a full-service digital agency specializing in brand managment, web development, and integrated online marketing strategies. We work with growing B2B clients across the US and Canada, as well as local Montana businesses. We help to create strategies to meet your business goals and your customers expectations. By this, we find ways to reach new leads, turn leads into customers, and customers into loyal brand advocates. We’re passionate about creating unique solutions to the problems today’s small business owners face.</p>
        <v-btn outlined dark large color="indigo accent-3" to="contact">Connect with Us</v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  // choose image col span?
  // show image on mobile?
  // image order mobile always 1?
  // image order desktop
  // move Title to image on mobile?

  props: {
    imgOrder: Number,
    imgURL: String,
    heading: String,
    body: String,
    btnText: String,
    btnURL: String
  }
};
</script>


<style lang="scss" scoped>
p {
  line-height: 1.6;
}
</style>
