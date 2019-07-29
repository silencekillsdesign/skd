<template>
  <div>
    <v-navigation-drawer
      dark
      v-model="drawer"
      peramanent
      clipped-left
      fixed
      app
      class="hidden-md-and-up blue accent-3"
    >
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar app color="blue accent-3" flat dark hide-on-scroll>
      <!-- <v-app-bar-title v-text="title"/> -->
      <!-- TODO: Link to hompeage -->
      <v-app-bar-title class="app-bar-brand" >
        <h3>
          <b>CJ</b> Williams
        </h3>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <!-- <v-app-bar-side-icon @click="drawer = !drawer" class="hidden-md-and-up"/> -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-app-bar-items class="hidden-md-and-down" v-for="(item, i) in items" :key="i">
        <v-btn depressed text :to="item.to" router>{{ item.title }}</v-btn> <!-- remove nuxt, exact -->
      </v-app-bar-items>
    </v-app-bar>
  </div>
</template>

<script>
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
          icon: 'image',
          title: 'Portfolio',
          to: '/portfolio'
        },
        {
          icon: 'phone',
          title: 'Contact',
          to: '/contact'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
