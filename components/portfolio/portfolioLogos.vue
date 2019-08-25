<template>
  <v-container fluid grid-list pa-0 ma-0>
    <v-layout row wrap ma-0>
      <v-flex xs6 md3 ma-0 pa-0 v-for="(work,i) in works" :key="i">
        <v-hover v-slot:default="{ hover }">
          <v-card flat tile :href="work.link" target="_blank">
            <v-img
              flat
              :aspect-ratio="9/6"
              :alt="work.title"
              :title="work.title"
              :src=" require('@/assets/img/portfolio/logos/'+work.image)"
            >
              <v-expand-transition>
                <v-row
                  no-gutters
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out indigo accent-3 v-card--reveal headline white--text"
                  style="height: 100%;"
                >
                  <v-col align="center" justify="center">
                    <h2 class="mb-3">{{ work.title }}</h2>
                    <!-- <v-btn
                      v-show="work.link =! null"
                      outlined
                      large
                      color="white"
                      type="a"
                      :href="work.link"
                      target="_blank"
                      :title="work.title"
                      :aria-labelledby="work.title"
                    >{{ work.btnText }}</v-btn> -->
                  </v-col>
                </v-row>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // would be col to propegate this from a simple spreadsheet-ish table with add row on bottom
      works: [
        {
          image: "logo_swampydonks.svg",
          title: "Swampydonks Team Logo",
          link: null
        },
        {
          image: "logo_xtant-medical.svg",
          title: "Xtant Medical Branding",
          link: "/"
        },
        {
          image: "logo_riotgear.svg",
          title: "Riot Gear Branding",
          link: "/"
        },
        {
          image: "logo_runneredq.svg",
          title: "Runner EDQBranding",
          link: "https://runneredq.com"
        },
        {
          image: "logo_bozeman-curling-club.svg",
          title: "Bozeman Cusrling Club Branding",
          link: "https://bozemancurlingclub.com"
        },
        {
          image: "logo_donks.svg",
          title: "Donks Team Logo",
          link: "/"
        },
        {
          image: "logo_bozeman-family-dentistry.svg",
          title: "Bozeman Family Dentistry Branding",
          link: "https://alumni.runneredq.com"
        },
        {
          image: "logo_gallatin-insulation.svg",
          title: "Gallatin Insulation Branding",
          link: "https://alumni.runneredq.com"
        },
        {
          image: "logo_schlubs.svg",
          title: "Schlubs Team Logo",
          link: "https://alumni.runneredq.com"
        },
        {
          image: "logo_surveydig.svg",
          title: "SurveyDIG Branding",
          link: "https://alumni.runneredq.com"
        },
        {
          image: "logo_short-and-curlies.svg",
          title: "Short and Curlies Team Logo",
          link: "https://alumni.runneredq.com"
        },
        {
          image: "logo_biologos.svg",
          title: "Biologos Logo",
          link: "https://alumni.runneredq.com"
        },
      ]
    };
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>