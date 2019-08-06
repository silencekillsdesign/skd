<template>
  <v-dialog v-model="bozeman" max-width="400">
    <v-card class="mx-auto" max-width="400">
      <v-img class="white--text" height="200px" :src="require('~/assets/img/bozeman.jpg')">
        <v-card-title class="align-end fill-height">Welcome to Bozeman</v-card-title>
      </v-img>

      <v-card-text>
        <v-simple-table dense>
          <tbody>
            <tr v-for="fact in facts" :key="fact.title">
              <td>{{ fact.title }}</td>
              <td>{{ fact.winner }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>

      <!-- <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
      </v-card-actions>-->
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  computed: {
    bozeman: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  data() {
    return {
      facts: [
        {
          title: "Elevation",
          winner: "4,793 feet"
        },
        {
          title: "Population",
          winner: "~50,000"
        },
        {
          title: "Best Coffee",
          winner: "Cold Smoke Coffeehouse"
        },
        {
          title: "Best Breakfast",
          winner: "Jam"
        },
        {
          title: "Best Lunch",
          winner: "Brewskers"
        },
        {
          title: "Best Dinner",
          winner: "Copper Whiskey Bar"
        },
        {
          title: "Best Brewery",
          winner: "Outlaw Brewing"
        },
        {
          title: "Best Dive Bar",
          winner: "Scoop Bar"
        },
        {
          title: "Best Skiing",
          winner: "Bridger Bowl"
        },
        {
          title: "Best Fishing",
          winner: "It's a secret"
        },
        {
          title: "Best Gold Panning",
          winner: "Psssh, secret"
        },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.about-bozeman {
  background-image: url(/assets/img/downtown-bozeman.jpg);
}
</style>
