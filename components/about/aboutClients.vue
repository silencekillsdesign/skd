<template>
  <v-container fluid class="pa-0">
    <v-container class="pa-4">
      <v-row class="my-5 py-5" justify="center">
        <h2
          :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-3': $vuetify.breakpoint.mdAndUp}"
          class="text-uppercase font-weight-bold indigo--text text--accent-3"
          data-aos-delay="200"
        >Some of our awesome clients</h2>
      </v-row>
    </v-container>

    <v-img :src="require('~/assets/img/backgrounds/bubbleup.svg')">
      <v-container fluid class="fill-height bottom-gradient">
        <v-row pa-0 my-2 justify-space-around align-center class="white--text">
          <v-col cols="6" sm="6" md="4" class="text-center px-3 py-2" href="https://bozemancurlingclub.com" target="_blank">
            <v-tooltip color="deep-purple" top>
              <template v-slot:activator="{ on }">
                <v-img
                  v-on="on"
                  :src=" require('@/assets/img/clients/bozeman-curling-club--logo-silencekillsdesign.svg')"
                ></v-img>
              </template>
              <span>Bozeman Curling Club</span>
            </v-tooltip>
          </v-col>

          <v-col cols="6" sm="6" md="4" class="text-center px-3 py-2" href="https://bozemancurlingclub.com" target="_blank">
            <v-tooltip color="deep-purple" top>
              <template v-slot:activator="{ on }">
                <v-img
                  v-on="on"
                  :src=" require('@/assets/img/clients/mudpaint--logo-silencekillsdesign.svg')"
                ></v-img>
              </template>
              <span>MudPaint</span>
            </v-tooltip>
          </v-col>

          <v-col cols="6" sm="6" md="4" class="text-center px-3 py-2" href="https://bozemancurlingclub.com" target="_blank">
            <v-tooltip color="deep-purple" top>
              <template v-slot:activator="{ on }">
                <v-img
                  v-on="on"
                  :src=" require('@/assets/img/clients/xtant-medical--logo-silencekillsdesign.svg')"
                ></v-img>
              </template>
              <span>Xtant Medical</span>
            </v-tooltip>
          </v-col>

          <v-col cols="6" sm="6" md="4" class="text-center px-3 py-2" href="https://bozemancurlingclub.com" target="_blank">
            <v-tooltip color="deep-purple" top>
              <template v-slot:activator="{ on }">
                <v-img
                  v-on="on"
                  :src=" require('@/assets/img/clients/riotgear--logo-silencekillsdesign.svg')"
                ></v-img>
              </template>
              <span>Riot Gear Clothing</span>
            </v-tooltip>
          </v-col>

          <v-col cols="6" sm="6" md="4" class="text-center px-3 py-2" href="https://bozemancurlingclub.com" target="_blank">
            <v-tooltip color="deep-purple" top>
              <template v-slot:activator="{ on }">
                <v-img
                  v-on="on"
                  :src=" require('@/assets/img/clients/gallatin-insulation--logo-silencekillsdesign.svg')"
                ></v-img>
              </template>
              <span>Gallatin Insulation</span>
            </v-tooltip>
          </v-col>

          <v-col cols="6" sm="6" md="4" class="text-center px-3 py-2" href="https://bozemancurlingclub.com" target="_blank">
            <v-tooltip color="deep-purple" top>
              <template v-slot:activator="{ on }">
                <v-img
                  v-on="on"
                  :src=" require('@/assets/img/clients/runneredq--logo-silencekillsdesign.svg')"
                ></v-img>
              </template>
              <span>Runner EDQ</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      clients: [
        {
          client: "RunnerEDQ",
          logo: "require('~/assets/img/backgrounds/wavebar.svg')",
          url: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.client-bg {
  background-size: 70%;
}
</style>
