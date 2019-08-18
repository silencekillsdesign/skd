<template>
  <!-- this all needs to be separated into different components -->
  <v-footer height="auto" color="deep-purple darken-1" class="prefooter">
    <v-layout row wrap ma-4>
      <!-- turn each column into an expansion panel in mobile view -->
      <!-- better to do each widget inside of card? -->

      <!-- About Us -->
      <v-flex xs12 sm6 md3 px-5>
        <v-layout row align-start justify-start class="white--text mb-4" pr-5>
          <v-flex>
            <h4 class="py-3 title">About Us</h4>
            <!-- <v-divider color="purple"></v-divider> -->
          </v-flex>
        </v-layout>
        <v-layout row wrap class="white--text" pr-5>
          <v-flex shrink>
            <p
              class="white--text subheading"
            >SilenceKillsDesign is a full-service digital agency specializing in multimedia marketing strategies. We offer services in brand management, web development, online marketing, and graphic design, along with many other services to help your local, small, or large business succeed.</p>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- photo stream -->
      <!-- Link to Instagram -->
      <v-flex xs12 sm6 md3 px-5 class="hidden-sm-and-down">
        <v-layout row wrap align-start justify-start class="white--text">
          <v-flex>
            <h4 class="py-3 title">Recent Projects</h4>
          </v-flex>
        </v-layout>
        <v-container fluid grid-list-lg pa-0>
          <v-layout row wrap>
            <v-flex xs6>
              <v-img
                href="/portfolio"
                flat
                :aspect-ratio="9/6"
                :src="require('~/assets/img/portfolio/logos/logo_riotgear.svg')"
              ></v-img>
            </v-flex>
            <v-flex xs6>
              <v-img
                href="/portfolio"
                flat
                :aspect-ratio="9/6"
                :src="require('~/assets/img/portfolio/logos/logo_schlubs.svg')"
              ></v-img>
            </v-flex>
            <v-flex xs6>
              <v-img
                href="/portfolio"
                flat
                :aspect-ratio="9/6"
                :src="require('~/assets/img/portfolio/web/web_clean-student.svg')"
              ></v-img>
            </v-flex>
            <v-flex xs6>
              <v-img
                href="/portfolio"
                flat
                :aspect-ratio="9/6"
                :src="require('~/assets/img/portfolio/logos/logo_donks.svg')"
              ></v-img>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

      <!-- Recent posts -->
      <v-flex xs12 sm6 md3 px-5 class="hidden-sm-and-down">
        <v-layout row wrap align-start justify-start class="white--text">
          <h4 class="py-3 title">Recent Posts</h4>
        </v-layout>
        <v-layout row wrap align-start justify-start class="white--text">
          <v-flex>
          <v-list two-line subheader color="transparent" dark>

            <v-list-item v-for="post in posts" :key="post.title" >
              <v-list-item-avatar>
                <v-icon :class="[post.iconClass]" v-text="post.icon"></v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-text="post.title"></v-list-item-title>
                <v-list-item-subtitle v-text="post.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- TODO: CHange to list transparent -->
      <!-- contact info -->
      <v-flex xs12 sm6 md3 class="prefooter-contact" px-5>
        <v-layout row align-start justify-start mb-4 class="white--text">
          <v-flex>
            <h4 class="py-3 title">Contact Us</h4>
          </v-flex>
        </v-layout>
        <v-layout row align-start justify-start mb-4 class="white--text">
          <v-flex shrink mr-4>
            <v-icon dark>mdi-map-marker</v-icon>
          </v-flex>
          <v-flex>
            <p class="subheading font-weight-light">221 Virginia Way Bozeman, MT 59718</p>
          </v-flex>
        </v-layout>
        <v-layout row align-start justify-start mb-4 class="white--text">
          <v-flex shrink mr-4>
            <v-icon dark>mdi-email</v-icon>
          </v-flex>
          <v-flex>
            <p class="subheading font-weight-light">cj@silencekillsdesign.com</p>
          </v-flex>
        </v-layout>
        <v-layout row align-start justify-start mb-4 class="white--text">
          <v-flex shrink mr-4>
            <v-icon dark>mdi-phone</v-icon>
          </v-flex>
          <v-flex>
            <p class="subheading font-weight-light">406.579.1985</p>
          </v-flex>
        </v-layout>

        <v-divider dark class="mb-4" />

        <v-layout row wrap align-content-space-around>
          <v-flex v-for="(social, i) in socials" :key="i">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn icon large :href="social.url" target="_blank">
                  <v-icon color="white" dark v-on="on">{{ social.icon }}</v-icon>
                </v-btn>
              </template>
              <span>{{ social.social }}</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "mdi-twitter",
      "mdi-facebook",
      "mdi-linkedin",
      "mdi-instagram",
      "mdi-snapchat"
    ],
    posts: [
      // { header: 'Today' },
      {
        icon: 'mdi-magnify',
        iconClass: 'purple accent-2 white--text',
        title: "10 Local SEO Tips to Help You Run Your City in 2019",
        subtitle: "February 14, 2019"
      },
      {
        icon: 'mdi-monitor',
        iconClass: 'pink acceent-3 white--text',
        title: "Should I Use A UI Component Library On My Next Website Project",
        subtitle: "February 29, 2019"
      },
      {
        icon: 'mdi-lead-pencil',
        iconClass: 'blue accent-3 white--text',
        title: "15 Time-Saving Tips For Adobe Illustrator Workflow",
        subtitle: "March 17, 2019"
      }
    ],
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

<style scoped>
.prefooter {
  background-color: #311b92;
  background-image: url(~@/assets/img/backgrounds/polyworm.svg);
  background-size: cover;
}
</style>
