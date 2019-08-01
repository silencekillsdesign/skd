<template>
  <v-container
    fluid
    my-3
    data-aos="fade-up"
    data-aos-easing="ease-in-out-back"
    data-aos-duration="600"
    grid-list-lg
  >
    <v-layout row wrap align-center justify-center>
      <v-flex px-3 py-2 class="text-center" v-for="technology in technologies" :key="technology.id">
        <v-tooltip color="deep-purple" top>
          <template v-slot:activator="{ on }">
            <v-icon
              :href="technology.url"
              target="_blank"
              size="72px"
              color="blue accent-3"
              dark
              v-on="on"
            >{{ technology.icon }}</v-icon>
          </template>
          <span>{{ technology.technology }}</span>
        </v-tooltip>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        {
          id: 0,
          technology: 'Google Analytics',
          icon: 'mdi-google-analytics',
          url: 'link-to-w3-html5'
        },
        {
          id: 1,
          technology: 'Google AdWords',
          icon: 'mdi-google-adwords',
          url: 'link-to-w3-html5'
        },
        {
          id: 2,
          technology: 'Googles Search Console',
          icon: 'mdi-search-web',
          url: 'link-to-w3-html5'
        },
        {
          id: 3,
          technology: 'VueJS',
          icon: 'mdi-vuejs',
          url: 'link-to-w3-html5'
        },
        {
          id: 0,
          technology: 'html5',
          icon: 'mdi-language-html5',
          url: 'link-to-w3-html5'
        },
        {
          id: 5,
          technology: 'WordPress',
          icon: 'mdi-wordpress',
          url: 'link-to-w3-html5'
        }
      ]
    }
  }
};
</script>

<style>
</style>
