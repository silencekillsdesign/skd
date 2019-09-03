<template>
  <v-container fluid grid-list pa-0 ma-0>
    <v-row class="ma-0">
      <v-col cols="6" md="3" class="ma-0 pa-0" v-for="(work,i) in works" :key="i">
        <v-hover v-slot:default="{ hover }">
          <v-card flat tile :href="work.link" target="_blank">
            <v-img
              flat
              :aspect-ratio="9/6"
              :alt="work.title"
              :title="work.title"
              :src=" require('@/assets/img/portfolio/logos/'+work.image)"
              :lazy-src="require('@/assets/img/silencekillsdesign-lazyload.jpg')"
            >
              <v-expand-transition>
                <v-row
                  no-gutters
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out indigo accent-3 v-card--reveal subtitle white--text"
                  style="height: 100%;"
                >
                  <v-col align="center" justify="center">
                    <h2 class="mb-3">{{ work.title }}</h2>
                    <v-btn
                      v-show="work.link !== ''"
                      outlined
                      large
                      color="white"
                      type="a"
                      :href="work.link"
                      target="_blank"
                      :title="work.title"
                      :aria-labelledby="work.title"
                    >{{ work.btnText }}</v-btn>
                  </v-col>
                </v-row>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
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
          link: "",
          btnText: ""
        },
        {
          image: "logo_xtant-medical.svg",
          title: "Xtant Medical Branding",
          link: "https://xtantmedical.com",
          btnText: "View Website"
        },
        {
          image: "logo_riotgear.svg",
          title: "Riot Gear Branding",
          link: "",
          btnText: ""
        },
        {
          image: "logo_runneredq.svg",
          title: "Runner EDQBranding",
          link: "https://runneredq.com",
          btnText: "View Website"
        },
        {
          image: "logo_bozeman-curling-club.svg",
          title: "Bozeman Curling Club Branding",
          link: "https://bozemancurlingclub.com",
          btnText: "View Website"
        },
        {
          image: "logo_donks.svg",
          title: "Donks Team Logo",
          link: "",
          btnText: ""
        },
        {
          image: "logo_bozeman-family-dentistry.svg",
          title: "Bozeman Family Dentistry Branding",
          link: "https://www.bozemanfamilydentistry.com/",
          btnText: "View Website"
        },
        {
          image: "logo_gallatin-insulation.svg",
          title: "Gallatin Insulation Branding",
          link: "https://www.truteam.com/branches/mt/gallatin/gallatin-insulation-belgrade/",
          btnText: "View Website"
        },
        {
          image: "logo_schlubs.svg",
          title: "Schlubs Team Logo",
          link: "",
          btnText: ""
        },
        {
          image: "logo_surveydig.svg",
          title: "SurveyDIG Branding",
          link: "https://surveydig.com",
          btnText: "View Website"
        },
        {
          image: "logo_short-and-curlies.svg",
          title: "Short and Curlies Team Logo",
          link: "",
          btnText: ""
        },
        {
          image: "logo_biologos.svg",
          title: "Biologos Logo",
          link: "https://biologos.com",
          btnText: "View Website"
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