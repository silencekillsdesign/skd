<template>
  <div class="blog">
    <blogHeader
      blogTitle="Planning our Blog Content"
      blogSubtitle="We have some great content being planned. Stay tuned for posts about design, development, and marketing, as well as free resources and more! As you can tell, this is going to be a good blog."
      class="animated infinite bounce delay-2s"
    />
    <!-- TODO: add social sharing -->
    <!-- TODO: move to headless -->
    <!-- TODO: add schema markup -->

    <v-container>
      <!-- <v-layout v-for="(article,i) in articles" :key="i" row flex align-center my-4> -->
      <!-- this loop will not work with svg images, unless they are loaded as components... might get messy -->
      <v-layout row wrap justify-center align-center my-4>
        <v-flex md8>
          <h1 class="blog-title display-3">Writing modals for Vue.js callable from anywhere</h1>
          <h4 class="blog-subtitle title">Modals and Dialogs in Vue.js made easy.</h4>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import blogHeader from "~/components/blog/blogHeader.vue";
export default {
  components: {
    blogHeader
  }
};
</script>

<style lang="scss" scoped>
.blog-title {
  font-size: 2em;
  padding: .75em;
}
</style>
