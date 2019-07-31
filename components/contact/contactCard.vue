<template>
  <v-layout row pa-4 fill-height>
    <v-flex>
      <v-card class="mx-auto indigo accent-4">
        <v-img
          class="pa-5"
          :aspect-ratio="3/1"
          :src="require('~/assets/branding/silencekillsdesign--logo--horizontal--color.svg')"
        ></v-img>

        <v-list three-line>
          <v-list-item target="_blank" href="tel:4065791985">
            <v-list-item-icon>
              <v-icon color="indigo">phone</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Call Us</v-list-item-title>
              <v-list-item-subtitle>406-579-1985</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item target="_blank" href="mailto:cj@silencekillsdesign.com">
            <v-list-item-icon>
              <v-icon color="indigo">mail</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Email Us</v-list-item-title>
              <v-list-item-subtitle>cj@silencekillsdesign.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item
            target="_blank"
            href="https://www.google.com/maps/place/SilenceKillsDesign/@45.6764586,-111.0787572,17z/data=!3m1!4b1!4m5!3m4!1s0x5345450957003145:0x95a2ff2061d44438!8m2!3d45.6764586!4d-111.0765685"
          >
            <v-list-item-icon>
              <v-icon color="indigo">location_on</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Find Us</v-list-item-title>
              <v-list-item-subtitle>SilenceKillsDesign</v-list-item-subtitle>
              <v-list-item-subtitle>221 Virginia Way</v-list-item-subtitle>
              <v-list-item-subtitle>Bozeman, MT 59718</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-container grid-list justify-space-between mx-2 mt-3 mb-2>
            <v-layout row>
              <v-flex v-for="(social, i) in socials" :key="i">
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon large :href="social.url" target="_blank">
                      <v-icon color="blue accent-3" dark v-on="on">{{ social.icon }}</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ social.social }}</span>
                </v-tooltip>
              </v-flex>
            </v-layout>
          </v-container>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    socials: [
      {
        social: 'Twitter',
        icon: 'mdi-twitter',
        url: 'https://twitter.com/s1lencek1lls'
      },
      {
        social: 'Facebook',
        icon: 'mdi-facebook',
        url: 'https://facebook.com/silencekillsdesign'
      },
      {
        social: 'LinkedIn',
        icon: 'mdi-linkedin',
        url: 'https://www.linkedin.com/in/cjwilliamsworks/'
      },
      {
        social: 'Instagram',
        icon: 'mdi-instagram',
        url: 'https://instagram.com/silencekillsdesign'
      },
      {
        social: 'Snapchat',
        icon: 'mdi-snapchat',
        url: 'https://snapchat.com/s1lencek1lls'
      }
    ]
  })
}
</script>

<style>
</style>
