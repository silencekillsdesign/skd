<template>
  <v-container fluid pa-0>
    <v-container>
      <v-layout row wrap mt-5 pt-5 justify-center>
        <h2
          class="display-3 text-uppercase font-weight-bold indigo--text text--accent-3" data-aos-delay="200">Some of our awesome clients</h2>
      </v-layout>
    </v-container>

    <v-img 
    :aspect-ratio="{'1/3': $vuetify.breakpoint.smAndDown, '5/1': $vuetify.breakpoint.mdAndUp}" 
    :src="require('~/assets/img/backgrounds/pixelfire.svg')"
    >
      <v-container fluid grid-list-xl class="fill-height bottom-gradient">
        <v-layout row wrap pa-0 mt-2 justify-space-around align-center class="white--text">

          <v-flex xs4 md2 px-3 py-2 class="text-center" href="https://bozemancurlingclub.com" target="_blank" >
            <v-tooltip color="deep-purple" top>
              <template v-slot:activator="{ on }">
                <v-img contain v-on="on" :src=" require('@/assets/img/clients/bozeman-curling-club--logo-silencekillsdesign.svg')"></v-img>
              </template>
              <span>Bozeman Curling Club</span>
            </v-tooltip>
          </v-flex>

          <v-flex xs4 md2 px-3 py-2 class="text-center">
            <v-tooltip color="deep-purple" top>
              <template v-slot:activator="{ on }">
                <v-img contain v-on="on" :src=" require('@/assets/img/clients/mudpaint--logo-silencekillsdesign.svg')"></v-img>
              </template>
              <span>MudPaint</span>
            </v-tooltip>
          </v-flex>

          <v-flex xs4 md2 px-3 py-2 class="text-center">
            <v-tooltip color="deep-purple" top>
              <template v-slot:activator="{ on }">
                <v-img contain v-on="on" :src=" require('@/assets/img/clients/xtant-medical--logo-silencekillsdesign.svg')"></v-img>
              </template>
              <span>Xtant Medical</span>
            </v-tooltip>
          </v-flex>

          <v-flex xs4 md2 px-3 py-2 class="text-center">
            <v-tooltip color="deep-purple" top>
              <template v-slot:activator="{ on }">
                <v-img contain v-on="on" :src=" require('@/assets/img/clients/riotgear--logo-silencekillsdesign.svg')"></v-img>
              </template>
              <span>Riot Gear Clothing</span>
            </v-tooltip>
          </v-flex>

          <v-flex xs4 md2 px-3 py-2 class="text-center">
            <v-tooltip color="deep-purple" top>
              <template v-slot:activator="{ on }">
                <v-img contain v-on="on" :src=" require('@/assets/img/clients/gallatin-insulation--logo-silencekillsdesign.svg')"></v-img>
              </template>
              <span>Gallatin Insulation</span>
            </v-tooltip>
          </v-flex>

          <v-flex xs4 md2 px-3 py-2 class="text-center">
            <v-tooltip color="deep-purple" top>
              <template v-slot:activator="{ on }">
                <v-img contain v-on="on" :src=" require('@/assets/img/clients/runneredq--logo-silencekillsdesign.svg')"></v-img>
              </template>
              <span>Runner EDQ</span>
            </v-tooltip>
          </v-flex>

        </v-layout>
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
          client: 'RunnerEDQ',
          logo: "require('~/assets/img/backgrounds/wavebar.svg')",
          url: ''
        }
      ],
      technologies: [
        {
          id: 0,
          technology: 'html5',
          icon: 'mdi-language-html5',
          url: 'link-to-w3-html5'
        },
        {
          id: 1,
          technology: 'css3',
          icon: 'mdi-language-css3',
          url: 'link-to-w3-html5'
        },
        {
          id: 2,
          technology: 'Sass',
          icon: 'mdi-sass',
          url: 'link-to-w3-html5'
        },
        {
          id: 3,
          technology: 'VueJS',
          icon: 'mdi-vuejs',
          url: 'link-to-w3-html5'
        },
        {
          id: 4,
          technology: 'Vuetify',
          icon: 'mdi-vuetify',
          url: 'link-to-w3-html5'
        },
        {
          id: 5,
          technology: 'WordPress',
          icon: 'mdi-wordpress',
          url: 'link-to-w3-html5'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.clients-mobile {
  background-size: 300%;
}
</style>
