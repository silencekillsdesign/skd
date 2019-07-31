<template>
  <v-container fluid fill-height class="hero-home">
    <v-container fill-height>
      <transition name="fade" appear mode="out-in">
      <v-layout align-center justify-space-between row wrap fill-height>
        <v-flex
          transition="slide-x-reverse-transition"
          text-center
          text-md-left
          xs12
          md6
          :class="{'pr-0': $vuetify.breakpoint.smAndDown, 'pr-5': $vuetify.breakpoint.mdAndUp}"
        >
          <v-layout align-start justify-center row fill-height hidden-md-and-up>
            <img
              height="100px"
              src="@/assets/branding/silencekillsdesign--icon--white.svg"
            />
          </v-layout>
          <v-layout row wrap>
            <skdType class="skdType mb-2" />
          </v-layout>
          <v-layout row wrap>
            <h3 class="display-1 white--text">Be Loud. Get Heard.</h3>
          </v-layout>
          <v-divider color="white" class="px-0 my-5 mx-0"></v-divider>
          <v-layout row wrap>
            <p
              class="title white--text"
            >You've built a great business, let us help build your brand.</p>
            <p
              class="title white--text"
            >We are a full-service digital creative agency focused on increasing your brand reach qualified leads.</p>
          </v-layout>
          <v-layout row wrap>
            <v-flex shrink>
              <v-btn
                large
                dark
                class="ml-0 mr-3"
                color="deep-purple accent-2"
                @click="$vuetify.goTo('#homeServices', options)"
              >View Services</v-btn>
            </v-flex>
            <quickQuoteBtn btnText="Quick Quote" btnColor="pink accent-3" />
          </v-layout>
        </v-flex>

        <v-flex
          xs12
          md6
          class="pa-5 hidden-sm-and-down"
        >
          <v-layout align-right justify-center row fill-height>
            <img height="470" src="@/assets/branding/silencekillsdesign--icon--white.svg" />
          </v-layout>
        </v-flex>
      </v-layout>
      </transition>
    </v-container>
  </v-container>
</template>

<script>
import quickQuoteBtn from "~/components/global/quickQuoteBtn.vue";
import skdType from "~/components/global/skdType.vue";

export default {
  components: {
    quickQuoteBtn,
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
        duration: 2000
      };
    },
    element() {
      if (this.selected === "Button") return this.$refs.button;
      else if (this.selected === "Radio group") return this.$refs.radio;
    }
  }
};
</script>

<style scoped>

.title {
  line-height: 1.7 !important;
}
.skdType {
  color: white !important;
  font-size: 2.25em !important;
}
.hero-home {
  height: 100vh;
  background-color: transparent;
  background-image: url(~@/assets/img/backgrounds/waver.svg);
}

</style>
