<template>
  <v-container fluid my-3>
    <v-row wrap align="center" justify="space-between">
      <v-col px-3 py-2 class="text-center" v-for="(technology, i) in technologies" :key="i">
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        {
          id: 0,
          technology: 'html5',
          icon: 'mdi-language-html5',
          url: 'link-to-w3-html5'
        },
        {
          id: 1,
          technology: 'css3',
          icon: 'mdi-language-css3',
          url: 'link-to-w3-html5'
        },
        {
          id: 2,
          technology: 'Sass',
          icon: 'mdi-sass',
          url: 'link-to-w3-html5'
        },
        {
          id: 3,
          technology: 'VueJS',
          icon: 'mdi-vuejs',
          url: 'link-to-w3-html5'
        },
        {
          id: 4,
          technology: 'Vuetify',
          icon: 'mdi-vuetify',
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
