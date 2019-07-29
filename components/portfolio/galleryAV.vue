<template>
  <v-container id="galleryAV">
    <v-layout row wrap align-space-around fill-height>
      <v-flex xs12 md6 pa-2 mt-5>
        <v-card flat tile >
          <iframe width="100%" height="800" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/16940982&color=%2306acee&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        </v-card>
      </v-flex>
      <v-flex xs12 md6 pa-2 mt-3>
        <v-card flat tile>
          <iframe src="https://player.vimeo.com/video/94569203" width="100%$" height="428" frameborder="0"></iframe>
        </v-card>
        <v-card flat tile class="xs6">
          <v-layout row>
            <v-flex xs6 pa-1>
              <v-img :src=" require('@/assets/img/vendor/silencekills-looperman.jpg')"></v-img>
            </v-flex>
            <v-flex xs6 pa-1>
              <v-img :src=" require('@/assets/img/vendor/silencekills-soundcloud.jpg')"></v-img>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
</style>
