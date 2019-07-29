<template>
  <v-container fluid pa-0 mb-5>
    <pageHeader pageTitle="Portfolio" pageSubtitle="We Did It. We Did It!" />

    <v-tabs fixed-tabs background-color="blue accent-3" dark slider-color="yellow">
      <v-tab href="#logos">Logos</v-tab>
      <v-tab href="#print">Print</v-tab>
      <v-tab href="#web">Web</v-tab>
      <v-tab href="#av">A/V</v-tab>
      <v-tabs-slider style="border-width: 5px;" color="yellow"></v-tabs-slider>

      <v-tab-item :value="'logos'">
        <v-card flat>
          <portfolioLogos />
        </v-card>
      </v-tab-item>

      <v-tab-item :value="'print'">
        <v-card flat>
          <portfolioPrint />
        </v-card>
      </v-tab-item>

      <v-tab-item :value="'web'">
        <v-card flat>
          <portfolioWeb />
        </v-card>
      </v-tab-item>

      <v-tab-item :value="'av'">
        <v-card flat>
            <portfolioAV />
        </v-card>
      </v-tab-item>
    </v-tabs>

  </v-container>
</template>

<script>
import pageHeader from '~/components/global/pageHeader.vue'
import portfolioLogos from '~/components/portfolio/portfolioLogos.vue'
import portfolioPrint from '~/components/portfolio/portfolioPrint.vue'
import portfolioWeb from '~/components/portfolio/portfolioWeb.vue'
import portfolioAV from '~/components/portfolio/portfolioAV.vue'

export default {
  components: {
    pageHeader,
    portfolioLogos,
    portfolioPrint,
    portfolioWeb,
    portfolioAV
  }
}
</script>

<style>
</style>
