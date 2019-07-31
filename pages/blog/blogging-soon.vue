<template>
  <div class="blog">
    <blogHeader blogTitle="Planning our Blog Content" blogSubtitle="We have some great content being planned. Stay tuned for posts about design, development, and marketing, as well as free resources and more!" class="animated infinite bounce delay-2s"/>
    <!-- TODO: add social sharing -->
    <!-- TODO: move to headless -->
    <!-- TODO: add schema markup -->

    <v-container>
      <!-- <v-layout v-for="(article,i) in articles" :key="i" row flex align-center my-4> -->
      <!-- this loop will not work with svg images, unless they are loaded as components... might get messy -->
      <v-layout row wrap align-center my-4>
        <!-- image -->
        <v-flex xs12 md5 class="">
          <img src="~/assets/img/blog/blog-1.svg" alt="avatar">
        </v-flex>

        <v-flex xs12 md6 offset-md1 fill-height>
          <!-- title -->
          <v-layout row mb-1>
            <h3 class="display-1 font-weight-bold indigo--text" >Planning our Blog Content</h3>
          </v-layout>
          <!-- date, author, tags -->
          <v-layout row wrap my-4>
            <v-flex shrink mr-3>
              <v-icon small mr-2>mdi-calendar</v-icon> August 15, 2019
            </v-flex>
            <v-flex shrink mr-3>
              <v-icon small mr-2>mdi-account</v-icon>CJ Williams
            </v-flex>
            <v-flex shrink>
              <v-icon small mr-2>mdi-tag</v-icon>Web Dev, Design
            </v-flex>
          </v-layout>
          <!-- description -->
          <v-layout row wrap mb-4>
            <p
              class="body-1"
            >Bacon ipsum dolor amet burgdoggen salami ham fatback drumstick cupim chicken. Andouille kielbasa chuck, beef ribs porchetta turducken tail corned beef sausage swine ribeye. Biltong pig salami picanha ham hock. Corned beef spare ribs venison short ribs tail fatback jowl.</p>
          </v-layout>
          <!-- buttons -->
          <v-layout row flex justify-left align-top mb-4>
            <v-btn depressed large dark class="ml-0 mr-2" color="blue accent-3" nuxt to="/blog/localseo">Read It</v-btn>
            <v-btn large outlined color="blue accent-4">Share It</v-btn>
            <v-spacer></v-spacer>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import blogHeader from '~/components/blog/blogHeader.vue'
export default {
  components: {
    blogHeader
  }
}
</script>

<style>
</style>
