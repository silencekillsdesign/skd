<template>
  <v-app dark class="error-page-wrapper">
    <v-container fill-height>
      <v-card max-width="400" class="mx-auto">
        <v-card-title>
          <h1 class="text-center blue--text" v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
          <h1 v-else>{{ otherError }}</h1>
        </v-card-title>
        <v-card-text>Sorry, buddy, either I broke something or the page you are loking for doesn't exist. Please feel free to contact us or continue browsing the site.</v-card-text>
        <v-card-actions>
          <v-btn color="pink accent-2" text to="/">Return to Home</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="blue accent-3" text to="/contact">Contact Us</v-btn>
        </v-card-actions>
      </v-card>
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

.error-page-wrapper {
  background-color: #06103a !important;
  background-image: url(~@/assets/img/backgrounds/static.svg) !important;
  background-repeat: repeat;
}
</style>
