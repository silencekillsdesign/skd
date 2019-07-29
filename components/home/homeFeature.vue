<template>
  <v-container
    fluid
    grid-list-lg
    data-aos="fade-up"
    data-aos-easing="ease-in-out-back"
    data-aos-duration="800"
  >
    <v-layout align-space-around fill-height row wrap>
      <v-flex xs12 md4>
        <v-card
          flat
          tile
          class="pa-4"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <v-layout row align-start>
            <v-flex shrink class="hidden-sm-and-down">
              <v-btn outlined large fab dark color="purple" class="mt-1">
                <v-icon x-large>mdi-currency-usd</v-icon>
              </v-btn>
            </v-flex>
            <v-flex grow>
              <v-card-text class="mt-0">
                <h2 class="headline purple--text">Affordable Rates</h2>
                <v-divider class="purple my-3"></v-divider>
                <p class="subheading">Average Hourly Rate is $40</p>
                <p class="subheading">Branding Packages starting at $400</p>
                <p class="subheading">Website Packages starting at $1200</p>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>

      <v-flex xs12 md4>
        <v-card
          flat
          tile
          class="pa-4"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <v-layout row align-start>
            <v-flex shrink class="hidden-sm-and-down">
              <v-btn outlined large fab dark color="indigo" class="mt-1">
                <v-icon x-large>mdi-timer-sand</v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              <v-card-text class="mt-0">
                <h2 class="headline indigo--text">Punctual Deliverables</h2>
                <v-divider class="indigo my-3"></v-divider>
                <p class="subheading">We work in sprints for task-based completion</p>
                <p class="subheading">Your project will be finsish ahead of deadline</p>
                <p class="subheading">We accept rush projects with short lead times</p>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>

      <v-flex xs12 md4>
        <v-card
          flat
          tile
          class="pa-4"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <v-layout row align-start>
            <v-flex shrink class="hidden-sm-and-down">
              <v-btn outlined large fab dark color="blue" class="mt-1">
                <v-icon x-large>mdi-forum</v-icon>
              </v-btn>
            </v-flex>
            <v-flex>
              <v-card-text class="mt-0">
                <h2 class="headline blue--text">Clear Communication</h2>
                <v-divider class="indigo my-3"></v-divider>
                <p class="subheading">Always know what you are paying for</p>
                <p class="subheading">Use your communication tools of choice</p>
                <p class="subheading">Full support throughout the project lifespan</p>
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    //
  })
}
</script>

<style lang="scss">
.feature-img img {
  opacity: 0.5;
}
</style>
