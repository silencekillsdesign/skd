<template>
  <v-dialog v-model="show" max-width="400">
    <v-card class="about-bozeman">
      <v-card-title class="headline blue--text">Welcome to Bozeman, Montana!</v-card-title>
      <v-card-text>
        <v-layout row mb-1>
          <v-flex>
            <b>Elevation:</b> 4,793 feet
          </v-flex>
        </v-layout>
        <v-layout row mb-1>
          <v-flex>
            <b>Population:</b> ~50,000
          </v-flex>
        </v-layout>
        <v-layout row mb-1>
          <v-flex>
            <b>Best Coffee:</b> Cold Smoke Coffeehouse
          </v-flex>
        </v-layout>
        <v-layout row mb-1>
          <v-flex>
            <b>Best Breakfast:</b> Jam!
          </v-flex>
        </v-layout>
        <v-layout row mb-1>
          <v-flex>
            <b>Best Lunch:</b> Brewskers / Hide-A-Way Lounge
          </v-flex>
        </v-layout>
        <v-layout row mb-1>
          <v-flex>
            <b>Best Dinner:</b> Copper Whiskey Bar
          </v-flex>
        </v-layout>
        <v-layout row mb-1>
          <v-flex>
            <b>Best Brewery:</b>Outlaw Brewing
          </v-flex>
        </v-layout>
        <v-layout row mb-1>
          <v-flex>
            <b>Best Dive Bar:</b> Scoop Bar
          </v-flex>
        </v-layout>
        <v-layout row mb-1>
          <v-flex>
            <b>Best Skiing:</b> Bridger Bowl
          </v-flex>
        </v-layout>
        <v-layout row mb-1>
          <v-flex>
            <b>Best Fishing:</b> Not Telling
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  computed: {
    show: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.about-bozeman {
  background-image: url(/assets/img/downtown-bozeman.jpg);
}
</style>
