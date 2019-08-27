<template>
  <v-container grid-list justify-space-between mx-2 mt-3 mb-2>
    <v-layout row>
      <v-flex v-for="(social, i) in socials" :key="i">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn rel="noopener" icon large :href="social.url" target="_blank">
              <v-icon color="blue accent-3" dark v-on="on">{{ social.icon }}</v-icon>
            </v-btn>
          </template>
          <span>{{ social.social }}</span>
        </v-tooltip>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    socials: [
      {
        social: "Twitter",
        icon: "mdi-twitter",
        url: "https://twitter.com/s1lencek1lls"
      },
      {
        social: "Facebook",
        icon: "mdi-facebook",
        url: "https://facebook.com/silencekillsdesign"
      },
      {
        social: "LinkedIn",
        icon: "mdi-linkedin",
        url: "https://www.linkedin.com/in/cjwilliamsworks/"
      },
      {
        social: "Instagram",
        icon: "mdi-instagram",
        url: "https://instagram.com/silencekillsdesign"
      },
      {
        social: "Snapchat",
        icon: "mdi-snapchat",
        url: "https://snapchat.com/s1lencek1lls"
      }
    ]
  })
};
</script>