<template>
  <!-- likely to change this to global component imageAside -->
  <!-- make image go to section bg on small screens -->

  <v-row align="center" justify="center">
    <v-col
      cols="12"
      md="6"
      order-md="1"
      class="yellow pa-4"
      data-aos="fade-down"
      data-aos-easing="ease-in-out-back"
      data-aos-duration="600"
    >
      <!-- <v-img src="https://picsum.photos/510/300?random"></v-img> -->
      <montana />
    </v-col>
    <v-col
      cols="12"
      md="6"
      class="text-center"
      data-aos="fade-right"
      data-aos-easing="ease-in-out-back"
      data-aos-duration="600"
    >
      <v-row
        justify="center"
        align="center"
        class="fill-height pa-4 text-center"
        data-aos="fade-down"
        data-aos-easing="ease-in-out-back"
        data-aos-duration="600"
      >
        <h2 class="pa-4 display-1 deep-purple--text text-uppercase boxed-in">Where We're From</h2>
        <p
          class="text-center pa-4 mt-3 mx-4 subheading"
          :class="{'ma-1 pa-1': $vuetify.breakpoint.smAndDown, 'mx-4 ma-3 px-4 pa-3': $vuetify.breakpoint.mdAndUp}"
        >CJ Williams is a 2nd-generation Bozeman native of 33 years. From the days of the Bungalow downtown, he has seen the valley grow to what it is today. Having worked across many industries in the valley, we understand the market very well. This background, along with a very strong marketing background, gives us a unique advantage in creating unique marketing strategies that help local businesses succeed. We can create a local SEO strategy that will make you highly visible in the Bozeman market.</p>
        <p class="text-center"><bozemanModal v-model="aboutBozeman" /></p>
        <v-btn outlined large color="indigo" @click.stop="aboutBozeman=true">Fun Facts About Bozeman</v-btn>
        
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import montana from "~/components/svg/montana.vue";
import bozemanModal from "~/components/about/bozemanModal.vue";
export default {
  data() {
    return {
      aboutBozeman: false
    };
  },
  components: {
    montana,
    bozemanModal
  },
  props: {
    imgOrder: Number, //0=left 1=right
    imgURL: String,
    imgBG: String,
    heading: String,
    body: String,
    btnText: String,
    btnURL: String
  }
};
</script>

<style lang="scss" scoped>
p {
  line-height: 2em !important;
}
</style>
