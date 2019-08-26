<template>
  <v-app dark>
    <primaryNav />
    <v-content>
      <v-container fluid pa-0>
        <v-img
          :aspect-ratio="5/1"
          :src="require('~/assets/img/backgrounds/polyworm.svg')"
          class="page-header"
        >
          <v-container class="fill-height bottom-gradient">
            <!-- <transition appear name="bounce"> -->
            <v-layout pa-4 mt-2 justify-center align-center class="white--text">
              <v-flex shrink>
                <h1
                  class="page-title white--text text-uppercase font-weight-bold"
                  :class="{
                    'mx-1 pt-2 px-1 display-2': $vuetify.breakpoint.smAndDown, 
                    'px-4 pt-4 pb-1 display-4': $vuetify.breakpoint.mdAndUp}"
                >{{ pageTitle }}</h1>
                <h4
                  class="mt-2 text-xs-right headline text-uppercase hidden-sm-and-down"
                >{{ pageSubtitle }}</h4>
              </v-flex>
            </v-layout>
            <!-- </transition> -->
          </v-container>
        </v-img>
        <nuxt />
        <speedDial />
        <!-- <developmentDialog />  -->
      </v-container>
    </v-content>
    <quickQuoteContact />
    <pagePrefooter />
    <pageFooter />
  </v-app>
</template>

<script>
import primaryNav from "~/components/global/primaryNav.vue";
import pageFooter from "~/components/global/pageFooter.vue";
import pagePrefooter from "~/components/global/pagePrefooter.vue";
import quickQuoteContact from "~/components/global/quickQuoteContact.vue";
import speedDial from "~/components/global/speedDial.vue";
// import developmentDialog from '~/components/global/developmentDialog.vue'

export default {
  components: {
    primaryNav,
    pageFooter,
    pagePrefooter,
    quickQuoteContact,
    speedDial
    // developmentDialog
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "bubble_chart",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>

<style lang="scss">
@import "~/assets/style/custom.scss";
@import "~/assets/sass/main.scss";
.primary-nav {
  max-width: 100vw !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
