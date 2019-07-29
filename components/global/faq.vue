<template>
  <v-expansion-panels focusable dark>
    <v-expansion-panel v-for="(faq, i) in faqs" :key="i" class="blue accent-4 mt-1">
      <v-expansion-panel-header>{{ faq.faqQ}}</v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ faq.faqA }}
        <v-btn
          v-if="faqs.faqButtonLink !== null"
          flat
          dark
          class="blue accent-4"
          :to="faq.faqButtonLink"
        >{{ faq.faqButtonText }}</v-btn>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {};
</script>

<style>
</style>
