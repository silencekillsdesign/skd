<template>
  <v-app dark>
    <primaryNav />
    <v-content>
      <v-container fluid pa-0>
        <nuxt />
      </v-container>
    </v-content>
    <quickQuoteCTA data-aos="fade-up" data-aos-duration="800" />
    <pagePrefooter />
    <pageFooter />
  </v-app>
</template>

<script>
import primaryNav from '~/components/global/primaryNav.vue'
import pageFooter from '~/components/global/pageFooter.vue'
import pagePrefooter from '~/components/global/pagePrefooter.vue'
import quickQuoteCTA from '~/components/global/quickQuoteCTA.vue'

export default {
  components: {
    primaryNav,
    pageFooter,
    pagePrefooter,
    quickQuoteCTA
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
