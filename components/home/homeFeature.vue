<template>
  <v-container fluid>
    <v-row align="space-btween" class="fill-height">
      
      <v-col cols="12" md="4">
        <v-card flat tile class="pa-4">
          <v-row align="center" justify="start" class="mb-0">
            <v-col>
              <v-btn outlined fab dark color="purple">
                <v-icon x-large>mdi-currency-usd</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="10">
              <h2 class="headline purple--text">Affordable Rates</h2>
            </v-col>
          </v-row>
          <v-divider class="purple"></v-divider>
          <v-row class="mt-0">
            <v-card-text class="mt-0">
              <p class="subheading">Average Hourly Rate is $40</p>
              <p class="subheading">Branding Packages starting at $400</p>
              <p class="subheading">Website Packages starting at $1200</p>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card flat tile class="pa-4">
          <v-row align="center" justify="start" class="mb-0">
            <v-col>
              <v-btn outlined fab dark color="indigo">
                <v-icon x-large>mdi-timer-sand</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="10">
              <h2 class="headline indigo--text">Punctual Deliverables</h2>
            </v-col>
          </v-row>
          <v-divider class="purple"></v-divider>
          <v-row class="mt-0">
            <v-card-text class="mt-0">
              <p class="subheading">We work in sprints for task-based completion</p>
              <p class="subheading">Your project will be finish ahead of deadline</p>
              <p class="subheading">We accept rush projects with short lead times</p>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card flat tile class="pa-4">
          <v-row align="center" justify="start" class="mb-0">
            <v-col>
              <v-btn outlined fab dark color="blue">
                <v-icon x-large>mdi-forum</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="10">
              <h2 class="headline blue--text">Clear Communication</h2>
            </v-col>
          </v-row>
          <v-divider class="purple"></v-divider>
          <v-row class="mt-0">
            <v-card-text class="mt-0">
              <p class="subheading">Always know what you are paying for</p>
              <p class="subheading">Use your communication tools of choice</p>
              <p class="subheading">Full support throughout the project lifespan</p>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    //
  })
};
</script>

<style lang="scss">
.feature-img img {
  opacity: 0.5;
}
</style>
