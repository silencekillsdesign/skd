<template>
  <div class="blog">
    <pageHeader pageTitle="Blog" pageSubtitle="Read It. Share It." class="animated infinite bounce delay-2s"/>
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
            <h3
              class="display-1 font-weight-bold indigo--text"
            >Planning our Blog Content</h3>
          </v-layout>
          <!-- date, author, tags -->
          <v-layout row wrap mb-4>
            <v-flex shrink mr-3>
              <v-icon small mr-2>mdi-calendar</v-icon>March 17, 2019
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
            <v-btn large dark class="ml-0" color="blue accent-3" nuxt to="/blog/localseo">Read It</v-btn>
            <v-btn flat large color="blue accent-3">Share It</v-btn>
            <v-spacer></v-spacer>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-divider></v-divider>

      <v-layout row flex align-center my-4>
        <v-flex xs12 md5 offset-md1 fill-height>
          <img src="~/assets/img/blog/blog-2.svg">
        </v-flex>
        <v-flex xs12 md6 offset-md1 fill-height>
          <!-- title -->
          <v-layout row wrap mb-1>
            <h3
              class="display-1 font-weight-bold indigo--text"
            >Improving Logo Design Workflow in Adobe Illustrator</h3>
          </v-layout>
          <!-- date, author, tags -->
          <v-layout row wrap mb-4>
            <v-flex shrink mr-3>
              <v-icon small mr-2>mdi-calendar</v-icon>February 29, 2019
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
            <v-btn large dark class="ma-0" color="blue accent-3">Read It</v-btn>
            <v-btn flat large color="blue accent-3">Share It</v-btn>
            <v-spacer></v-spacer>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-divider></v-divider>

      <v-layout row flex align-center my-4>
        <v-flex xs12 md5 offset-md1 fill-height>
          <img src="~/assets/img/blog/blog-3.svg">
        </v-flex>
        <v-flex xs12 md6 offset-md1 fill-height>
          <!-- title -->
          <v-layout row wrap mb-1>
            <h3
              class="display-1 font-weight-bold text-capitalize indigo--text"
            >Should I use a UI Component library on my next website project</h3>
          </v-layout>
          <!-- date, author, tags -->
          <v-layout row wrap mb-4>
            <v-flex shrink mr-3>
              <v-icon small mr-2>mdi-calendar</v-icon>February 14, 2019
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
            <v-btn large dark class="ma-0" color="blue accent-3">Read It</v-btn>
            <v-btn flat large color="blue accent-3">Share It</v-btn>
            <v-spacer></v-spacer>
          </v-layout>
        </v-flex>
      </v-layout>

      <v-divider></v-divider>

      <v-layout row flex align-center my-4>
        <v-flex xs12 md5 offset-md1 fill-height>
          <img src="~/assets/img/blog/blog-4.svg">
        </v-flex>
        <v-flex xs12 md6 offset-md1 fill-height>
          <!-- title -->
          <v-layout row wrap mb-1>
            <h3
              class="display-1 font-weight-bold text-capitalize indigo--text"
            >15 Time-Saving Tips for Adobe Illustrator Workflow</h3>
          </v-layout>
          <!-- date, author, tags -->
          <v-layout row wrap mb-4>
            <v-flex shrink mr-3>
              <v-icon small mr-2>mdi-calendar</v-icon>February 14, 2019
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
            <v-btn large dark class="ma-0" color="blue accent-3">Read It</v-btn>
            <v-btn flat large color="blue accent-3">Share It</v-btn>
            <v-spacer></v-spacer>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-layout class="text-xs-center justify-center mt-4" mt-4 pt-4>
        <v-pagination v-model="page" :length="3"></v-pagination>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import pageHeader from '~/components/global/pageHeader.vue'
export default {
  components: {
    pageHeader
  },
  data() {
    return {
      articles: [
        {
          blogId: 1,
          blogTitle: '10 Local SEO Tips to Help You Run Your City',
          blogDesc:
            'Easy-to-implement Local SEO that you can use today to outrank competitors in any industry.',
          blogAuthor: 'CJ Williams',
          blogImg: '~/assets/img/blog/blog-1.svg',
          blogCategory: 'Design',
          blogTags: ['Vue', 'Design', 'SEO'], //these could populate seo kywords
          blogLikes: 3
        },
        {
          blogId: 2,
          blogTitle: '10 Local SEO Tips to Help You Run Your City',
          blogDesc:
            'Easy-to-implement Local SEO that you can use today to outrank competitors in any industry.',
          blogAuthor: 'CJ Williams',
          blogImg: '~/assets/img/blog/blog-2.svg',
          blogCategory: 'Marketing',
          blogTags: ['Vue', 'Design', 'SEO'], //these could populate seo kywords
          blogLikes: 3
        },
        {
          blogId: 3,
          blogTitle: '10 Local SEO Tips to Help You Run Your City',
          blogDesc:
            'Easy-to-implement Local SEO that you can use today to outrank competitors in any industry.',
          blogAuthor: 'CJ Williams',
          blogImg: '~/assets/img/blog/blog-3.svg',
          blogCategory: 'Web Dev',
          blogTags: ['Vue', 'Design', 'SEO'], //these could populate seo kywords
          blogLikes: 3
        }
      ]
    }
  }
}
</script>

<style>
</style>
