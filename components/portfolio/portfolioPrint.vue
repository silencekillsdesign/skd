<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row class="ma-0">
      <v-col cols="6" md="3" class="ma-0 pa-0" v-for="(work,i) in works" :key="i">
        <v-hover v-slot:default="{ hover }">
          <v-card flat tile :href="work.link" target="_blank">
            <v-img
              flat
              :aspect-ratio="9/6"
              :alt="work.title"
              :title="work.title"
              :src="require('@/assets/img/portfolio/print/'+work.image)"
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
                    <!-- <v-btn
                      outlined
                      large
                      color="white"
                      type="a"
                      :href="work.link"
                      target="_blank"
                      :title="work.title"
                      :aria-labelledby="work.title"
                    >View Website</v-btn> -->
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
      works: [
        {
          image: "bozspiel-poster.jpg",
          title: "Bozespiel 2019 Poster",
          link: ""
        },
        {
          image: "biologos-banners.jpg",
          title: "Biologos Tradeshow Banners",
          link: ""
        },
        {
          image: "bacterin-postcard.jpg",
          title: "Bacterin Postcard",
          link: ""
        },
        {
          image: "silencekillsdesign-proposal.jpg",
          title: "SEO Case Study",
          link: ""
        },
        {
          image: "osteoselect-whitepaper.jpg",
          title: "OsteoSelect Whitepaper",
          link: ""
        },
        {
          image: "xtant-letterhead.jpg",
          title: "Xtant Medical Letterhead",
          link: ""
        },
        {
          image: "garden-of-flavor-bottles.jpg",
          title: "Garden of Flavor Packaging",
          link: ""
        },
        {
          image: "eat-shit-griz-tee.jpg",
          title: "CLEAN_Alumni Landing Page",
          link: ""
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
