<template>
  <v-app dark>
    <primaryNav />
    <v-content>
      <v-container fluid pa-0>
        <nuxt />
        <speedDial />
        <!-- <developmentDialog />  -->
        <!-- <developmentSnackbar />  -->
      </v-container>
    </v-content>
    <quickQuoteContact  />
    <pagePrefooter />
    <pageFooter />
  </v-app>
</template>

<script>
import primaryNav from '~/components/global/primaryNav.vue'
import pageFooter from '~/components/global/pageFooter.vue'
import pagePrefooter from '~/components/global/pagePrefooter.vue'
import quickQuoteContact from '~/components/global/quickQuoteContact.vue'
import speedDial from '~/components/global/speedDial.vue'
// import developmentDialog from '~/components/global/developmentDialog.vue'
// import developmentSnackbar from '~/components/global/developmentSnackbar.vue' //this breaks the homeServices component for some reason

export default {
  components: {
    primaryNav,
    pageFooter,
    pagePrefooter,
    quickQuoteContact,
    speedDial,
    // developmentDialog
    // developmentSnackbar
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/style/custom.scss';
@import '~/assets/sass/main.scss';
.primary-nav {
  max-width: 100vw !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
