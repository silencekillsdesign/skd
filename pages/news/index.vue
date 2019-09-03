<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6" lg="3" v-for="(article, i) in articles" :key="i">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text" height="200px" :src="article.urlToImage">
            <v-card-title class="align-end fill-height">{{ article.title }}</v-card-title>
          </v-img>

          <v-card-text>
            <span>{{ article.source.name }}</span>
            <br />
            <span class="text--primary">
              <span class="font-weight-bold">{{ article.author }}</span>

            </span>
          </v-card-text>

          <v-card-actions>
            <v-btn target="_blank" :href="article.url" text color="orange">Read Article</v-btn>
            <v-btn text color="orange">Share</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-card-text>{{ article.content }}</v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-pagination
      v-model="page"
      :length="2"
      disabled
    ></v-pagination>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ app }) {
    const { articles } = await app.$axios.$get(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=759012f49a6d4359b201097806d73038"
    );
    return { articles };
  },
  data() {
    return {
      i: 8,
      show: false
    };
  }
};
</script>

<style>
</style>