<template>
  <v-app dark class="error-page-wrapper">
    <v-container>
      <v-layout row wrap align-center justify-center>
        <v-flex md12>
          <h1 class="text-center" v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
          <h1 v-else>{{ otherError }}</h1>
        </v-flex>
        <v-flex md12>
          <a class="text-center" href="/">Home page</a>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title
    };
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred"
    };
  }
};
</script>

<style scoped>
h1 {
  font-size: 20px;
  color: white;
}
a {
  display: inline-block;
}

.error-page-wrapper {
  background-color: #06103a !important;
  background-image: url(~@/assets/img/backgrounds/static.svg) !important;
  background-repeat: repeat;
}
</style>
