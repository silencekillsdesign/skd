<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="6" lg="3">
        <v-hover v-slot:default="{ hover }">
          <v-card tile flat color="grey lighten-4">
            <v-img
              flat
              :aspect-ratio="9/6"
              :src="require('~/assets/img/portfolio/logos/logo_donks.svg')"
            >
              <v-expand-transition>
                <v-container
                  fluid
                  v-if="hover"
                  class="d-flex transition-fade-in-fade-out blue accent-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <v-layout column>
                    <h4 class="title text-center">Donk's Team Logo</h4>      
                    <v-btn class="ma-2" tile outlined color="white" link to="/portfolio">
                      <v-icon left>mdi-eye-outline</v-icon>View Portfolio
                    </v-btn>
                  </v-layout>
                </v-container>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="6" lg="3">
        <v-hover v-slot:default="{ hover }">
          <v-card tile flat class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              flat
              :aspect-ratio="9/6"
              :src=" require('@/assets/img/portfolio/web/web_clean-student.svg')"
            >
              <v-expand-transition>
                <v-container
                  fluid
                  v-if="hover"
                  class="d-flex transition-fade-in-fade-out blue accent-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <v-layout column>
                    <h4 class="title text-center">CLEAN_Student Landing Page</h4>      
                    <v-btn class="ma-2" tile outlined color="white" href="https://student.runneredq.com" target="_blank">
                      <v-icon left>mdi-eye-outline</v-icon>Visit Website
                    </v-btn>
                  </v-layout>
                </v-container>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="6" lg="3">
        <v-hover v-slot:default="{ hover }">
          <v-card tile flat class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              flat
              :aspect-ratio="9/6"
              :src=" require('@/assets/img/portfolio/print/biologos-banners.jpg')"
            >
              <v-expand-transition>
                <v-container
                  fluid
                  v-if="hover"
                  class="d-flex transition-fade-in-fade-out blue accent-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <v-layout column>
                    <h4 class="title text-center">Biologos Booth Banners</h4>      
                    <v-btn class="ma-2" tile outlined color="white" link to="/services/design">
                      <v-icon left>mdi-eye-outline</v-icon>View Design Services
                    </v-btn>
                  </v-layout>
                </v-container>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>

      <v-col cols="6" lg="3">
        <v-hover v-slot:default="{ hover }">
          <v-card tile flat class="mx-auto" color="grey lighten-4" max-width="600">
            <v-img
              flat
              :aspect-ratio="9/6"
              :src=" require('@/assets/img/portfolio/web/web_surveydig.svg')"
            >
              <v-expand-transition>
                <v-container
                  fluid
                  v-if="hover"
                  class="d-flex transition-fade-in-fade-out blue accent-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >
                  <v-layout column>
                    <h4 class="title text-center">SurveyDIG Website</h4>      
                    <v-btn class="ma-2" tile outlined color="white" href="https://surveydig.com" target="_blank">
                      <v-icon left>mdi-eye-outline</v-icon>Visit Website
                    </v-btn>
                  </v-layout>
                </v-container>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.v-card--reveal {
  font-size: 1em;
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>