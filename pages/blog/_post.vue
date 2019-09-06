
<template>
  <section class="blog-post">
    <h1 class="title">{{ header }}</h1>
    <p class="paragraph">{{ content }}</p>
  </section>
</template>

<script>
import Prismic from "prismic-javascript";
import PrismicDom from "prismic-dom" //importing the Dom
import PrismicConfig from "@/prismic.config.js";
export default {
  async asyncData() {
    const api = await Prismic.getApi(PrismicConfig.apiEndpoint);
    let blog_post = {};
    const results = await api.query(
      Prismic.Predicates.at("document.type", "blog-post"),
      { lang: "en-us" } //This is a Prismic query option
    );
    blog_post = results.results[0]
  }
};
</script>

<style>

</style>