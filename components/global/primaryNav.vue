<template>
  <div>
    <v-navigation-drawer
      dark
      v-model="drawer"
      peramanent
      clipped
      fixed
      app
      class="hidden-md-and-up blue accent-3"
    >      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          router
          exact
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="blue accent-3" flat dark hide-on-scroll>
      <!-- <v-app-bar-title v-text="title"/> -->
      <!-- TODO: Link to hompeage -->
      <v-app-bar-title class="app-bar-brand" >
        <h3>
          <skdType/>
        </h3>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <!-- <v-app-bar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"/> -->
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-items class="hidden-md-and-down" v-for="(item, i) in items" :key="i">
        <v-btn depressed text :to="item.to" router>{{ item.title }}</v-btn> <!-- remove nuxt, exact -->
      </v-app-bar-items>
    </v-app-bar>
  </div>
</template>

<script>
import skdType from '~/components/global/skdType.vue'

export default {
  data() {
    return {
      // NAV SETTINGS
      drawer: false,
      title: 'SilenceKillsDesign',
      items: [
        {
          icon: 'apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'laptop',
          title: 'Services',
          to: '/services'
        },
        {
          icon: 'image',
          title: 'Portfolio',
          to: '/portfolio'
        },
        {
          icon: 'mdi-format-align-left',
          title: 'Blog',
          to: '/blog'
        },
        {
          icon: 'phone',
          title: 'Contact',
          to: '/contact'
        }
      ],
      // bottom nav MOVE
      bottomNav: 2
    }
  },
  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return 'indigo'
        case 1:
          return 'teal'
        case 2:
          return 'blue'
      }
    }
  },
  components: {
    skdType
  }
}
</script>

<style scoped>
.skd-type {
  color: white !important;
}
</style>
