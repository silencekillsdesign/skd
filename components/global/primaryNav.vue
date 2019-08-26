<template>
  <div>
    <v-navigation-drawer
      dark
      v-model="drawer"
      peramanent
      clipped
      fixed
      app
      disable-resize-watcher
      class="hidden-md-and-up indigo accent-3"
      color="indigo"
    >
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" router exact link active-class="yellow">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="blue accent-3 primary-nav" flat dark hide-on-scroll>
      <!-- <v-app-bar-title v-text="title"/> -->
      <!-- TODO: Link to hompeage -->
      <v-toolbar-title class="app-bar-brand">
        <v-row no-gutters justify="center" align="center">
          <v-col shrink class="ma-0">
            <v-img
              class="ma-0 pa-0 hidden-md-and-up"
              contain
              height="40px"
              :src="require('~/assets/branding/silencekillsdesign--icon--white.svg')"
            ></v-img>
          </v-col>
          <v-col align="center" class="hidden-sm-and-down">
            <h1 class="pl-0 pr-6 ml-0">
              <skdType />
            </h1>
          </v-col>
        </v-row>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-app-bar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"/> -->
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-items class="hidden-sm-and-down" v-for="(item, i) in items" :key="i">
        <v-btn depressed text :to="item.to" router exact>{{ item.title }}</v-btn>
        <!-- remove nuxt, exact -->
      </v-app-bar-items>
    </v-app-bar>
  </div>
</template>

<script>
import skdType from "~/components/global/skdType.vue";
import skdIcon from "~/components/global/skdIcon.vue";

export default {
  
  data() {
    return {
      // NAV SETTINGS
      drawer: false,
      title: "SilenceKillsDesign",
      items: [
        {
          icon: "apps",
          title: "Home",
          to: "/"
        },
        {
          icon: "bubble_chart",
          title: "About",
          to: "/about"
        },
        {
          icon: "laptop",
          title: "Services",
          to: "/services"
        },
        {
          icon: "image",
          title: "Portfolio",
          to: "/portfolio"
        },
        {
          icon: "mdi-format-align-left",
          title: "Blog",
          to: "/blog"
        },
        {
          icon: "phone",
          title: "Contact",
          to: "/contact"
        }
      ],
      // bottom nav MOVE
      bottomNav: 2
    };
  },
  components: {
    skdType,
    skdIcon
  }
};
</script>

<style scoped>
.skd-type {
  color: white !important;
}
.primary-nav {
  max-width: 100vw;
}
</style>
