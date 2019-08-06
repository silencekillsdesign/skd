<template>
  <div class="text-center">
    <v-dialog v-model="devDialog" width="500">
      <v-card dark class="text-center">
        <v-card-title class="headline indigo accent-3 text-center" >Hey! Heads Up!</v-card-title>

        <v-card-text class="subtitle-1 blue accent-3 pa-3" >
          This site is currently under development. There are some some features still being tested that may not work. If you need to get a hold of us, please email <a class="cyan--text text--accent-2" href="mailto:cj@silencekillsdesign.com">cj@silencekillsdesign.com</a>.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="blue accent-3 pa-3">
          <v-btn color="cyan accent-2" text to="/contact/">Contact Us</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="white" text @click="devDialog = false">Continue to Site</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      devDialog: true
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
