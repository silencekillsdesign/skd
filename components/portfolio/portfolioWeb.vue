<template>
  <v-container fluid grid-list pa-0 ma-0>
    <v-layout row wrap ma-0>
      <v-flex xs6 md4 ma-0 pa-0 v-for="(work,i) in works" :key="i">
        <v-hover v-slot:default="{ hover }">
          <v-card flat tile :href="work.link" target="_blank">
            <v-img
              flat
              :aspect-ratio="9/6"
              :alt="work.title"
              :title="work.title"
              :src=" require('@/assets/img/portfolio/web/'+work.image)"
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
                      outlined
                      large
                      color="white"
                      type="a"
                      :href="work.link"
                      target="_blank"
                      :title="work.title"
                      :aria-labelledby="work.title"
                    >View Website</v-btn>
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
      works: [
        {
          image: "web_clean-student.svg",
          title: "CLEAN_Student Landing Page",
          link: "https://student.runneredq.com"
        },
        {
          image: "web_runneredq.svg",
          title: "Runner EDQ Website",
          link: "https:/runneredq.com"
        },
        {
          image: "web_mudpaint.svg",
          title: "MudPaint E-Commerce Site",
          link: "https://mudpaint.com"
        },
        {
          image: "web_surveydig.svg",
          title: "SurveyDig Website",
          link: "https://surveydig.com"
        },
        {
          image: "web_xtant-medical.svg",
          title: "Xtant Medical Website",
          link: "https://xtantmedical.com"
        },
        {
          image: "web_clean-alumni.svg",
          title: "CLEAN_Alumni Landing Page",
          link: "https://alumni.runneredq.com"
        }
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
