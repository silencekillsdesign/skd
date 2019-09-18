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
        <v-list-item
          v-for="(nav,i) in MainNavigation"
          :key="i"
          :to="nav.to"
          nuxt
          router
          exact
          link
          active-class="yellow"
          >
          <v-list-item-icon>
            <v-icon>{{ nav.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ nav.title }}</v-list-item-title>
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
      <v-app-bar-nav-icon title="menu" class="hidden-md-and-up" @click.stop="drawer = !drawer">Menu</v-app-bar-nav-icon>
      <v-app-bar-items class="hidden-sm-and-down" v-for="(nav, i) in navs" :key="i">
        <!-- regular nav button -->
        <v-btn v-if="!nav.submenu" depressed text :to="nav.to" router exact>{{ nav.title }}</v-btn>
        
        <!-- dropdown button -->
        <v-menu open-on-hover v-if="nav.submenu" offset-y bottom>
          <template v-slot:activator="{ on }">
            <v-btn :key="index" depressed text :to="nav.to" router exact>{{ nav.title }}</v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(nav, i) in navs" :key="i" :to="nav.to">
              <v-list-item-title :key="`sub-item-${index}`" active-class="is-active" class="navbar-item" link :to="sub.to" exact>{{ sub.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- remove nuxt, exact -->
      </v-app-bar-items>
    </v-app-bar>
  </div>
</template>

<script>
import skdType from "~/components/global/skdType.vue";
import skdIcon from "~/components/global/skdIcon.vue";
// import MainNavigation from "~/data/navigation.json";
export default {
  data() {
    return {
      // MainNavigation,
      // NAV SETTINGS
      drawer: false,
      title: "SilenceKillsDesign",
      navs: [
        {
          icon: "apps",
          title: "Home",
          to: "/",
          submenu: null
        },
        {
          icon: "bubble_chart",
          title: "About",
          to: "/about",
          submenu: null
        },
        {
          icon: "laptop",
          title: "Services",
          to: "/services",
          submenu: [
            { title: "Web Design", to: "/webdevelopment" },
            { title: "SEO", to: "/seo" },
            { title: "Branding", to: "/branding" },
            { title: "Design", to: "/design" },
            { title: "UX / UI", to: "/ux" },
            { title: "Audio Visual", to: "/av" }
          ]
        },
        {
          icon: "image",
          title: "Portfolio",
          to: "/portfolio",
          submenu: null
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
