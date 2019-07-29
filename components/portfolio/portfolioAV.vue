<template>
  <v-container fluid pa-0 id="galleryAV">
    <v-container>
      <v-layout row wrap align-space-around fill-height>
        <v-flex xs12 md6 pa-2 mt-5>
          <v-card flat tile>
            <iframe
              width="100%"
              height="800"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/16940982&color=%2306acee&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </v-card>
        </v-flex>
        <v-flex xs12 md6 pa-2 mt-3>
          <v-card flat tile>
            <iframe
              src="https://player.vimeo.com/video/94569203"
              width="600"
              height="400"
              frameborder="0"
            ></iframe>
          </v-card>
          <v-card flat tile>
            <iframe
              width="600"
              height="400"
              src="https://www.youtube.com/embed/GH3BizlMDH0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid pa-0>
      <v-layout>
        <v-flex xs6 md3>
          <v-hover>
            <v-card flat tile slot-scope="{ hover }">
              <v-img :src="require('~/assets/img/vendor/silencekillsdesign-vimeo.jpg')">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out light-blue darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-layout column align-center justify-center>
                      <v-btn
                        fab
                        large
                        dark
                        color="white"
                        href="https://vimeo.com/silencekillsdesign"
                        target="_blank"
                      >
                        <v-icon x-large color="light-blue">mdi-vimeo</v-icon>
                      </v-btn>
                    </v-layout>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>

        <v-flex xs6 md3>
          <v-hover>
            <v-card flat tile slot-scope="{ hover }">
              <v-img :src="require('~/assets/img/vendor/silencekills-soundcloud.jpg')">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-layout column align-center justify-center>
                      <v-btn
                        fab
                        large
                        dark
                        color="white"
                        href="https://soundcloud.com/silencekills/tracks"
                        target="_blank"
                      >
                        <v-icon x-large color="orange">mdi-soundcloud</v-icon>
                      </v-btn>
                    </v-layout>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>

        <v-flex xs6 md3>
          <v-hover>
            <v-card flat tile slot-scope="{ hover }">
              <v-img :src="require('~/assets/img/vendor/silencekills-looperman.jpg')">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out blue-grey darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-layout column align-center justify-center>
                      <v-btn
                        fab
                        large
                        dark
                        color="white"
                        href="https://www.looperman.com/loops?page=1&mid=silencekills&order=downloads&dir=d"
                        target="_blank"
                      >
                        <v-icon x-large color="blue-grey darken-2">mdi-sync</v-icon>
                      </v-btn>
                    </v-layout>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>

        <v-flex xs6 md3 href="https://youtube.com">
          <v-hover>
            <v-card flat tile slot-scope="{ hover }">
              <v-img :src="require('~/assets/img/vendor/silencekillsdesign-youtube.jpg')">
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out red darken-2 v-card--reveal display-3 white--text"
                    style="height: 100%;"
                  >
                    <v-layout column align-center justify-center>
                      <v-btn
                        fab
                        large
                        dark
                        color="white"
                        href="https://youtube.com"
                        target="_blank"
                      >
                        <v-icon x-large color="red">mdi-youtube</v-icon>
                      </v-btn>
                    </v-layout>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
</style>
