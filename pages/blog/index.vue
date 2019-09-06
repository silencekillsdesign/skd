<template>
  <div class="blog">
    <pageHeader pageTitle="Blog" pageSubtitle="Read It. Share It." />
    <!-- TODO: add social sharing -->
    <!-- TODO: move to headless -->
    <!-- TODO: add schema markup -->

    <v-container>
      <!-- <v-layout v-for="(article,i) in articles" :key="i" row flex align-center my-4> -->
      <!-- this loop will not work with svg images, unless they are loaded as components... might get messy -->
      <v-row align="center my-4" tag="article">
        <!-- image -->
        <v-col cols="12" md="5">
          <v-img
            :src="require('@/assets/img/blog/content-planning.svg')"
            max-height="300px"
            contain
            alt="avatar"
          ></v-img>
        </v-col>

        <v-col cols="12" md="6" offset-md="1" class="fill-height pa-4">
          <!-- title -->
          <v-row class="mb-1">
            <h3 class="display-1 font-weight-bold indigo--text">Planning our Blog Content</h3>
          </v-row>
          <!-- date, author, tags -->
          <v-row class="mb-4" align="start" justify="start">
            <v-col class="mr-1">
              <v-icon class="mr-2 pb-1">mdi-calendar</v-icon>August 15, 2019
            </v-col>
            <v-col class="mr-3">
              <v-icon small mr-2>mdi-account</v-icon>CJ Williams
            </v-col>
            <v-col class="mr-3">
              <v-icon small mr-2>mdi-tag</v-icon>Web Dev, Design
            </v-col>
          </v-row>
          <!-- description -->
          <v-row class="mb-4">
            <p class="body-1">We've got some great content in the works, but first we need to finish a few to-dos on the website. Stay tuned for updates. In the meantime, please follow us on <a href="https://twitter.com/s1lencek1lls" target="_blank">Twitter</a> and like us on <a href="https://facebook.com/silencekillsdesign" target="_blank">Facebook.</a></p>
          </v-row>
          <!-- buttons -->
          <v-row row flex justify-left align-top mb-4>
            <v-btn
              depressed
              large
              dark
              class="ml-0 mr-2"
              color="blue accent-3"
              nuxt
              to="/blog/blogging-soon"
            >Read It</v-btn>
            <v-btn large outlined color="blue accent-4">Share It</v-btn>
          </v-row>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-layout class="text-xs-center justify-center mt-4" mt-4 pt-4>
        <v-pagination :length="3"></v-pagination>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import pageHeader from "~/components/global/pageHeader.vue";
export default {
  components: {
    pageHeader
  },
  head() {
    return {
      title: "Blog",
      meta: [
        {
          name: "description",
          content:
            "Blogging about web design, web development, graphic design, branding, SEO, and marketing for small to medium-sized businesses."
        },
        { name: "robots", content: "index, follow" }
      ]
    };
  },
  data() {
    return {
      articles: [
        {
          blogId: 1,
          blogTitle: "10 Local SEO Tips to Help You Run Your City",
          blogDesc:
            "Easy-to-implement Local SEO that you can use today to outrank competitors in any industry.",
          blogAuthor: "CJ Williams",
          blogImg: "~/assets/img/blog/blog-1.svg",
          blogCategory: "Design",
          blogTags: ["Vue", "Design", "SEO"], //these could populate seo kywords
          blogLikes: 3
        },
        {
          blogId: 2,
          blogTitle: "10 Local SEO Tips to Help You Run Your City",
          blogDesc:
            "Easy-to-implement Local SEO that you can use today to outrank competitors in any industry.",
          blogAuthor: "CJ Williams",
          blogImg: "~/assets/img/blog/blog-2.svg",
          blogCategory: "Marketing",
          blogTags: ["Vue", "Design", "SEO"], //these could populate seo kywords
          blogLikes: 3
        },
        {
          blogId: 3,
          blogTitle: "10 Local SEO Tips to Help You Run Your City",
          blogDesc:
            "Easy-to-implement Local SEO that you can use today to outrank competitors in any industry.",
          blogAuthor: "CJ Williams",
          blogImg: "~/assets/img/blog/blog-3.svg",
          blogCategory: "Web Dev",
          blogTags: ["Vue", "Design", "SEO"], //these could populate seo kywords
          blogLikes: 3
        }
      ]
    };
  }
};
</script>

<style>
</style>
