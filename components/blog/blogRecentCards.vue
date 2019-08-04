<template>
  <v-container pa-0 my-5 grid-list-xl>
    <v-layout row wrap justify-space-around>
      <v-flex xs12 md4 v-for="i in 3" :key="`4${i}`">
        <v-card class="mx-auto" max-width="344" color="indigo" dark>
          <v-img :src="require('~/assets/img/backgrounds/fireball.svg')" height="240px">
          <v-container fluid>
            <v-img :src="require('~/assets/img/blog/blog-1.svg')"></v-img>
          </v-container>
          
          </v-img>

          <v-card-title>
            <h2 class="title">Our Upcoming Blog Posts</h2>
            <span class="grey--text text--lighten-3 subtitle-1">August 15, 2019</span>
          </v-card-title>

          <v-card-actions>
            <v-btn text>Read It</v-btn>

            <v-btn text color="yellow accent-2">Share It</v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt modi perferendis saepe natus aspernatur quam, ipsam est ratione consequuntur similique inventore, illum dolores corporis laboriosam quia voluptates beatae repudiandae!</v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import posts from '@/data/posts'
export default {
  data: () => ({
    
    show: false
  })
};
</script>

<style>
</style>
