<template>
  <!-- likely to change this to global component imageAside -->
  <!-- make image go to section bg on small screens -->
  <div>
    <v-layout row wrap align-space-around>
      <v-flex
        xs12
        md6
        order-md2
        pa-4
        class="yellow"
        data-aos="fade-left"
        data-aos-easing="ease-in-out-back"
        data-aos-duration="600"
      >
        <!-- <v-img src="https://picsum.photos/510/300?random"></v-img> -->
        <montana />
      </v-flex>
      <v-flex xs12 md6 class="text-center">
        <v-layout
          justify-center
          align-center
          fill-height
          column
          pa-4
          data-aos="fade-down"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="600"
        >
          <h2
            class="text-xs-center pa-4 display-1 deep-purple--text text-uppercase boxed-in"
          >Where We're From</h2>
          <p
            class="text-xs-center pa-4 mt-3 mx-4 subheading"
          >CJ Williams is a 2nd-generation Bozeman native of 33 years. From the days of the Bungalow downtown, he has seen the valley grow to what it is today. This, along with a very strong marketing background, gives us a unique advantage in creating unique marketing strategies that help local businesses succeed.</p>
          <v-btn
            outlined
            large
            color="indigo"
            @click.stop="aboutBozeman=true"
          >Fun Facts About Bozeman</v-btn>
          <bozemanModal v-model="aboutBozeman" />
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import montana from '~/components/svg/montana.vue'
import bozemanModal from '~/components/about/bozemanModal.vue'
export default {
  data() {
    return {
      aboutBozeman: false
    }
  },
  components: {
    montana,
    bozemanModal
  },
  props: {
    imgOrder: String,
    imgURL: String,
    heading: String,
    body: String,
    btnText: String,
    btnURL: String
  }
}
</script>

<style lang="scss" scoped>
p {
  line-height: 2em !important;
}
</style>
