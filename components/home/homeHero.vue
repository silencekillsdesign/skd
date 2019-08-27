<template>
  <v-container fluid class="fill-height hero-home">
    <v-container class="fill-height">
      <!-- <transition name="fade" appear mode="out-in"> -->
        <v-row align="center" justify="space-between" class="fill-height">
          <v-col
            cols="12"
            md="6"
            class="text-center text-md-left"
            :class="{'pr-0': $vuetify.breakpoint.smAndDown, 'pr-5': $vuetify.breakpoint.mdAndUp}"
          >
            <v-row align="start" justify="center" class="fill-height hidden-md-and-up">
              <img alt="silencekillsdesgin icon" height="100px" src="@/assets/branding/silencekillsdesign--icon--white.svg" />
            </v-row>

            <v-row row wrap>
              <v-col xs12>
                <skdType class="skdType mb-2" />
                <h3 class="display-1 white--text">Be Loud. Get Heard.</h3>
                <v-divider color="white" class="px-0 my-5 mx-0"></v-divider>
              <p
                class="title white--text"
              >You've built a great business, let us help build your brand.</p>
              <p
                class="title white--text"
              >We are a full-service digital creative agency focused on increasing your brand reach qualified leads.</p>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" shrink>
                <v-btn
                  large
                  dark
                  class="ml-0 mr-3"
                  color="blue accent-3"
                  @click="$vuetify.goTo('#homeServices')"
                >View Services</v-btn>
                <v-btn
                  large
                  dark
                  class="ml-0 mr-3"
                  color="pink accent-2"
                  to="/contact/#main"
                >Quick Quote</v-btn>
              </v-col>
            </v-row>
          </v-col>

          <v-col align="center" justify="center" cols="12" md="6" class="pa-5 hidden-sm-and-down">
            <img alt="silencekillsdesgin icon" height="470" src="@/assets/branding/silencekillsdesign--icon--white.svg" />
          </v-col>
        </v-row>
      <!-- </transition> -->
    </v-container>
  </v-container>
</template>

<script>
// import quickQuoteBtn from "~/components/global/quickQuoteBtn.vue";
import skdType from "~/components/global/skdType.vue";

export default {
  components: {
    // quickQuoteBtn,
    skdType
  },
  data() {
    return {
      dialog: false,
      type: "number",
      number: 9999,
      selector: "#first",
      selected: "Button",
      elements: ["Button", "Radio group"],
      duration: 300,
      offset: 0
    };
  },
  computed: {
    target() {
      "Services";
    },
    options() {
      return {
        duration: 2200
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  line-height: 1.7 !important;
}
.skdType {
  color: white !important;
  font-size: 2.25em !important;
  b {
    font-size: 2.25em !important;
  }
}
.hero-home {
  height: 100vh;
  background-color: transparent;
  background-image: url(~@/assets/img/backgrounds/waver.svg);
  background-size: cover !important;
}
</style>
