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
          <h2 class="blog-title display-2 mb-3">We are planning some great posts.</h2>
          <h4
            class="blog-subtitle title mb-3"
          >Stay tuned for posts about development, SEO, branding, design and, more! Also feel free to reach out to us if there is anything in particular you are hoping to learn about. We're really looking forward to this new blogging experience with a headless CMS, too. Like really.</h4>
          <h4 class="blog-subtitle title mb-3">Check out our planned posts below.</h4>
          <v-container grid-list-lg>
          <v-layout row wrap align-start justify-start >
            <v-flex xs12 md6>
              <h3 class="headline section-header mb-4">Upcoming Design Posts</h3>
              <ul class="mb-4">
                <li>Improved iterative logo design workflow in Adobe Illustrator</li>
                <li>Customizing svg artwork with Vuetify color palletes.</li>
                <li>Best free design resources online for 2019</li>
                <li>Graphic design for begginers; where do I start?</li>
              </ul>
            </v-flex>
            <v-flex xs12 md6>
              <h3 class="headline section-header mb-4">Upcoming Development Posts</h3>
              <ul class="mb-4">
                <li>The most important things I've learned about NUxt.js so far</li>
                <li>Should I use a component library and UI kit for my next project</li>
                <li>Is WordPress on it's way Out?</li>
              </ul>
            </v-flex>
          </v-layout>
          <v-layout row wrap align-start justify-start >
            <v-flex xs12 md6>
              <h3 class="headline section-header mb-4">Upcoming SEO Posts</h3>
              <ul class="mb-4">
                <li>5 must-have tools for improving local SEO</li>
                <li>When and when not to pay for SEO services</li>
                <li>How to tell when your "SEO Expert" is bullshitting you</li>
                <li>Little known </li>
              </ul>
            </v-flex>
            <v-flex xs12 md6>
              <h3 class="headline section-header mb-4">Upcoming Branding Posts</h3>
              <ul class="mb-4">
                <li>12 Brands that are kicking the most ass right now</li>
                <li>I have a logo, now what?</li>
                <li>When and when not to act on customer feedback</li>
              </ul>
            </v-flex>
          </v-layout>
          </v-container>

          <v-flex md12>
            <blogAuthor />
          </v-flex>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import blogHeader from '~/components/blog/blogHeader.vue'
import blogAuthor from '~/components/blog/blogAuthor.vue'
export default {
  components: {
    blogHeader,
    blogAuthor
  }
};
</script>

<style lang='scss' scoped>
.blog-title {
  font-size: 2em;
  padding: 0.75em;
}
.section-header {
  border: 2px solid currentColor;
  padding: 0.75em;
  // display: inline-block;
}
</style>
