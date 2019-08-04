<template>
  <div class="text-center">
    <v-bottom-sheet dark color="indigo" v-model="sheet">
      <!-- <template v-slot:activator="{ on }">
        <v-btn color="purple" dark v-on="on">Open Usage</v-btn>
      </template> -->
      <v-sheet class="text-center dev-notice" height="200px">
        <v-img
          :aspect-ratio="7/1"
          :src="require('~/assets/img/backgrounds/bubbleup.svg')"
          class="pa-1"
        >
          <p
            class="pt-5 mt-5"
          >This site is currently under development, but feel free to look around.</p>
          <p>
            Please contact us at
            <a href="mailto:cj@silencekillsdesign.com">cj@silencekillsdesign.com</a> if you any questions while we finish up here.
          </p>
          <v-btn
            class="mt-6"
            depressed
            dark
            color="indigo accent-3"
            @click="sheet = !sheet"
          >close this</v-btn>
        </v-img>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  data: () => ({
    sheet: true
  })
};
</script>

<style lang="scss" scoped>
.dev-notice {
  a {
    color: #18ffff;
  }
}
</style>
