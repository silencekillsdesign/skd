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
              :src=" require('@/assets/img/portfolio/print/'+work.image)"
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
          image: "bozspiel-poster.jpg",
          title: "CLEAN_Student Landing Page",
          link: "https://student.runneredq.com"
        },
        {
          image: "biologos-banners.jpg",
          title: "Runner EDQ Website",
          link: "https:/runneredq.com"
        },
        {
          image: "silencekillsdesign-proposal.jpg",
          title: "MudPaint E-Commerce Site",
          link: "https://mudpaint.com"
        },
        {
          image: "xtant-letterhead.jpg",
          title: "SurveyDig Website",
          link: "https://surveydig.com"
        },
        {
          image: "garden-of-flavor-bottles.jpg",
          title: "Xtant Medical Website",
          link: "https://xtantmedical.com"
        },
        {
          image: "eat-shit-griz-tee.jpg",
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
