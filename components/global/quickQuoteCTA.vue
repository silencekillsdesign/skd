<template>
  <v-container fluid pa-0 >
    <v-container fluid ma-0 pa-4 class="pink accent-3">
      <v-container grid-list-xl>
        <v-layout row wrap align-center justify-space-between v-bind="binding">
          <v-flex xs12 md8 dark>
            <h2
              class="white--text cta-text text-center text-md-left"
            >Ready to get started on your new project?</h2>
          </v-flex>
          <v-flex xs12 md4 justify-center>
            <quickQuoteBtn btnText="Request a Quote" btnColor="blue accent-3" />
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </v-container>
</template>



<script>
import quickQuoteBtn from "~/components/global/quickQuoteBtn.vue";
// import sparklineSection from '~/components/global/sparklineSection.vue'

export default {
  computed: {
    binding() {
      const binding = {};

      if (this.$vuetify.breakpoint.mdAndDown) binding.column = true;

      return binding;
    }
  },
  components: {
    quickQuoteBtn
    // sparklineSection
  },
  data() {
    return {
      quickQuote: false
    };
  }
};
</script>

<style scoped>
.cta-text {
  font-size: 2em;
}
</style>
