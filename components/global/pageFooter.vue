<template>
  <v-footer dark padless align-center>
    <v-card flat tile shrink class="flex indigo lighten-1 white--text text-center">
      <v-card-title class="indigo darken-4 footer-text">
        <p>&copy; Copyright {{ new Date().getFullYear() }} — SilenceKillsDesign</p>
        <v-spacer></v-spacer>
        <v-btn
          class="hidden-sm-and-down mx-1"
          v-for="footerLink in footerLinks"
          :key="footerLink.title"
          :to="footerLink.to"
          router
          exact
          nuxt
          text
          rounded
          small
        >{{ footerLink.title }}</v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    footerLinks: [
      {
        title: 'Home',
        to: '/'
      },
      {
        title: 'About',
        to: '/about'
      },
      {
        title: 'Services',
        to: '/services'
      },
      {
        title: 'Portfolio',
        to: '/portfolio'
      },
      {
        title: 'Blog',
        to: '/blog'
      },
      {
        title: 'Contact',
        to: '/contact'
      }
    ]
  })
}
</script>

<style>
.footer-text {
  font-size: .875em;
}
</style>
