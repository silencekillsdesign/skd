<template>
  <!-- this all needs to be separated into different components -->
  <v-footer height="auto" color="deep-purple darken-1" class="prefooter">
    <v-row class="ma-4">
      <!-- turn each column into an expansion panel in mobile view -->
      <!-- better to do each widget inside of card? -->

      <!-- About Us -->
      <v-col cols="12" sm="6" md="3" class="px-5">
        <v-row align="start" justify="start" class="white--text mb-4" pr-5>
          <v-flex>
            <h4 class="py-3 title">About Us</h4>
            <!-- <v-divider color="purple"></v-divider> -->
          </v-flex>
        </v-row>
        <v-row class="white--text pr-5">
          <v-col shrink itemscope itemprop="organization" itemtype="http://schema.org/Organization">
            <p
              itemprop="slogan"
              class="white--text subheading"
            >SilenceKillsDesign is a full-service digital agency specializing in multimedia marketing strategies. We offer services in brand management, web development, online marketing, and graphic design, along with many other services to help your local, small, or large business succeed.</p>
          </v-col>
        </v-row>
      </v-col>

      <!-- photo stream -->
      <!-- Link to Instagram -->
      <v-col cols="12" sm="6" lg="3" class="hidden-sm-and-down px-5">
        <v-row align="start" justify="start" class="white--text">
          <v-col>
            <h4 class="py-3 title">Recent Projects</h4>
          </v-col>
        </v-row>
        <v-container fluid grid-list-lg pa-0>
          <v-row>
            <v-col cols="6">
              <silentbox-single :src="require('~/assets/img/portfolio/logos/logo_riotgear.svg')" autoplay="true" description="">
              <v-img
                href="/portfolio"
                flat
                :aspect-ratio="9/6"
                :src="require('~/assets/img/portfolio/logos/logo_riotgear.svg')"
              ></v-img>
              </silentbox-single>
            </v-col>
            <v-col cols="6">
              <v-img
                href="/portfolio"
                flat
                :aspect-ratio="9/6"
                :src="require('~/assets/img/portfolio/logos/logo_schlubs.svg')"
              ></v-img>
            </v-col>
            <v-col cols="6">
              <v-img
                href="/portfolio"
                flat
                :aspect-ratio="9/6"
                :src="require('~/assets/img/portfolio/web/web_clean-student.svg')"
              ></v-img>
            </v-col>
            <v-col cols="6">
              <v-img
                href="/portfolio"
                flat
                :aspect-ratio="9/6"
                :src="require('~/assets/img/portfolio/logos/logo_donks.svg')"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <!-- Recent posts -->
      <v-col cols="12" sm="6" md="3" class="hidden-sm-and-down px-5">
        <v-row align="start" justify="start" class="white--text">
          <h4 class="py-3 title">Recent Posts</h4>
        </v-row>
        <v-row align="start" justify="start" class="white--text">
          <v-col>
            <v-list two-line subheader color="transparent" dark>
              <v-list-item v-for="post in posts" :key="post.title" :to="post.to" itemscope itemtype="http://schema.org/Article">
                <v-list-item-avatar>
                  <v-icon :class="[post.iconClass]" v-text="post.icon"></v-icon>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title itemprop="name" v-text="post.title"></v-list-item-title>
                  <v-list-item-subtitle itemprop="datePublished" v-text="post.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-col>

      <!-- TODO: CHange to list transparent -->
      <!-- contact info -->
      <v-col cols="12" sm="6" md="3" class="prefooter-contact px-5" itemprop="provider" itemscope itemtype="http://schema.org/LocalBusiness">
        <v-row align="start" justify="start" class="white--text mb-4">
          <v-col>
            <h4 class="pt-3 title" itemprop="name">SilenceKillsDesign</h4>
          </v-col>
        </v-row>
        <v-row align="start" justify="start" class="white--text">
          <v-col class="shrink">
            <v-icon dark>mdi-map-marker</v-icon>
          </v-col>
          <v-col>
            <p
              class="subheading font-weight-light"
              itemprop="address"
              itemscope
              itemtype="http://schema.org/PostalAddress"
            >
              <span itemprop="streetAddress">221 Virginia Way</span>
              <span itemprop="addressLocality">Bozeman, MT</span>
              <span itemprop="postalCode">59718</span>
            </p>
          </v-col>
        </v-row>
        <v-row align="start" justify="start" class="white--text">
          <v-col class="shrink">
            <v-icon dark>mdi-email</v-icon>
          </v-col>
          <v-col>
            <p class="subheading font-weight-light" itemprop="email">cj@silencekillsdesign.com</p>
          </v-col>
        </v-row>
        <v-row align="start" justify="start" class="white--text">
          <v-col  class="shrink">
            <v-icon dark>mdi-phone</v-icon>
          </v-col>
          <v-col>
            <p class="subheading font-weight-light" itemprop="telephone">406.579.1985</p>
          </v-col>
        </v-row>

        <v-divider dark class="mb-4" />

        <v-layout row wrap align-content-space-around>
          <v-flex v-for="(social, i) in socials" :key="i">
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  :href="social.url"
                  target="_blank"
                  rel="noopener"
                  :title="social.socials"
                >
                  <v-icon color="white" dark v-on="on">{{ social.icon }}</v-icon>
                </v-btn>
              </template>
              <span>{{ social.social }}</span>
            </v-tooltip>
          </v-flex>
        </v-layout>
      </v-col>
    </v-row>
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
        icon: "mdi-magnify",
        iconClass: "purple accent-2 white--text",
        title: "Blogs Coming Soon",
        subtitle: "August 14, 2019",
        to: "/blog/blogging-soon"
      }
    ],
    socials: [
      {
        social: "@s1lencek1lls on Twitter",
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
