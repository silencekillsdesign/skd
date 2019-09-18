<template>
  <div>
    <pageHeader pageTitle="Audio / Visual" pageSubtitle="Hear It. Seee It." />

    <pageIntro
      introText="A well-designed website can be your most powerful marketing segment, delivering your brand's message to your customers' fingertips. Our web design process caters to your existing customers, and new audiences alike."
    ></pageIntro>

    <!-- TODO: loop from data create reusable services component (service title, icon, short description)-->
    <v-container fluid pa-0>
      <v-row align="center" id="main">
        <!-- start list -->
        <v-col md="6" offset-md="1" data-aos="fade-right">
          <v-list color="transparent" rounded v-model="i" class="pr-5">
            <v-subheader>The Things We Do:</v-subheader>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.icon"
              no-action
              eager
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="subItem in item.items" :key="subItem.title">
                <v-list-item-content class="pr-5">
                  <!-- <v-list-item-subtitle v-text="subItem.description"></v-list-item-subtitle> -->
                  <p class="feature-description">{{ subItem.description }}</p>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-col>
        <v-col md5 data-aos="fade-left">
          <!-- <v-img flat :src="require('~/assets/img/webdev.svg')"> </v-img> -->
          <img class="mr-0 pr-0" src="~/assets/img/av.svg" alt="avatar" />
        </v-col>
      </v-row>
    </v-container>

    <v-container my-5>
      <v-layout row align-center justify-center mt-5 py-5>
        <h2
          class="text-center display-3 indigo--text"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="800"
          data-aos-delay="100"
        >Our AV Services</h2>
      </v-layout>
    </v-container>

    <v-container my-5>
      <v-row align="center" class="py-5 my-5" cols="12">
        <v-col xs="12" md="4" order="0" class="pa-5" data-aos="fade-right" data-aos-duration="800">
          <v-img :aspect-ratio="1" contain max-height="250px" :src="require('~/assets/img/services/av/av1.svg')"></v-img>
        </v-col>
        <v-col xs="12" sm="12" lg="8" class="pa-5" data-aos="fade-left" data-aos-duration="1200">
          <h3 class="mt-4 blue--text text--accent-3">Audio Production Services</h3>
          <v-divider class="my-5" color="blue"></v-divider>
          <p>We create top quality audio productions used by several major record labels. We can do it all from audio logos, jingles, full track productions, and music on hold. Let us know what kind of audio we can make for you.</p>
          <v-btn class="my-2" to="/services/ux" outlined color="indigo">SilenceKills on Soundcloud</v-btn>
        </v-col>
      </v-row>
      <v-row align="center" class="py-5 my-5" cols="12">
        <v-col xs="12" md="4" order="0" order-lg="1" class="pa-5" data-aos="fade-right" data-aos-duration="800">
          <v-img :aspect-ratio="1" contain max-height="250px" :src="require('~/assets/img/services/av/av2.svg')"></v-img>
        </v-col>
        <v-col xs="12" sm="12" lg="8" class="pa-5" data-aos="fade-left" data-aos-duration="1200">
          <h3 class="mt-4 blue--text text--accent-3">Video Production Services</h3>
          <v-divider class="my-5" color="blue"></v-divider>
          <p>We offer everything from animated logo stings, post-production, editing, motion graphics, explainer videos and more. 
          </p>
          <v-btn class="my-2" to="/services/ux" outlined color="indigo">SilenceKills on Soundcloud</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid pa-0 v-for="(process, i) in processes" :key="i">
      <quoteCTA />
    </v-container>
  </div>
</template>

<script>
import pageHeader from '~/components/global/pageHeader.vue'
import pageIntro from '~/components/global/pageIntro.vue'
import stack from '~/components/global/stack.vue'

export default {
  components: {
    pageHeader,
    pageIntro,
    stack
  },
  data() {
    return {
      items: [
        {
          icon: "mdi-video-vintage",
          title: "Commercial Production",
          items: [
            {
              description:
                "Video production from filming to post production. We make professional quality commercials for a fraction of the cost."
            }
          ]
        },
        {
          icon: "mdi-account-group",
          title: "Expaliner Videos",
          items: [
            {
              description:
                "People want to know how to use your product. What better way than explainer or demo video? We screen capture and animate as needed to make sure your product resonates with your customers."
            }
          ]
        },
        {
          icon: "mdi-brightness-auto",
          title: "Logo Stingers",
          items: [
            {
              description:
                "What is cooler than your logo? Your logo, animated! We'll create a reusable logo reveal for you to use across all of your social media channels, tradeshow videos, and more. "
            }
          ]
        },
        {
          icon: "mdi-movie-roll",
          title: "Trailers & Promotional Videos",
          items: [
            {
              description:
                "Promote your upcoming film or product with a detailed trailer or product teaser."
            }
          ]
        },
        {
          icon: "mdi-phone-in-talk",
          title: "Call Waiting & On-Hold",
          items: [
            {
              description:
                "We work closely with D-Tel Technologies to program custom call-waiting music and messaging for your customers. No need to worry about copyright infringment or royalty fees."
            }
          ]
        },
        {
          icon: "mdi-music",
          title: "Music Production & Jingles",
          items: [
            {
              description:
                "Looking for a perfect track to use in the background of a video? Trying to make a unique jingle for an upcoming promotion? We do that too. Let's kick some ideas around and We'll get to writing"
            }
          ]
        },
        {
          icon: "mdi-filmstrip-off",
          title: "Photography & Video Shoots",
          items: [
            {
              description:
                "A good landing page should offer value to each user that visits it. They often offer exclusive resources, such as an e-book or webinar signup, in exchange for their basic contact information. The goal of these pages is to generate leads while you pull prospects further into the buyers' journey."
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
.feature-description {
  line-height: 1.7em !important;
}
</style>
