<template>
  <div>
    <pageHeader pageTitle="Screen Printing" pageSubtitle="Print It. Wear It." />

    <pageIntro
      introText="Take your brand or team with you wherever you go. We offer quality screenprinting and heat transfer printing on top brands. Quick turnarounds, low-quantity minimums, and affordable pricing."
    ></pageIntro>

    <!-- TODO: loop from data create reusable services component (service title, icon, short description)-->
    <v-container fluid pa-0>
      <v-layout align-center id="main">
        <v-flex md6 offset-md1 pr-5 data-aos="fade-right">
          <v-list transparent shaped v-model="i">
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.icon"
              no-action
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
        </v-flex>
        <v-flex md5 data-aos="fade-left">
          <!-- <v-img flat :src="require('~/assets/img/webdev.svg')"> </v-img> -->
          <img class="mr-0 pr-0" src="~/assets/img/webdev.svg" alt="avatar" />
        </v-flex>
      </v-layout>
    </v-container>

    <v-container fluid pa-0>
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
      i: 1,
      items: [
        {
          icon: 'mdi-lead-pencil',
          title: 'Logo Wear',
          items: [
            {
              description:
                "We build websites for local business that help customers easily find what they're looking for. A local business website doesn't need to be over the top, it needs to be useful. Our development process focuses on local SEO throughout the development process, so you can be easily found and easy to contact."
            }
          ]
        },
        {
          icon: 'mdi-file-multiple',
          title: 'Team Wear',
          items: [
            {
              description:
                'Non-profit websites that offer gateways to your community outreach, donation gateways, and volounteer opportunities. Alongside a strong social media outreach, your non-profit website can save you hundreds of hours of volounteer time.'
            }
          ]
        },
        {
          icon: 'mdi-fountain-pen-tip',
          title: 'Stickers',
          items: [
            {
              description:
                "Market your upcoming event, conference, or wedding with a website that offers easy access to itinerary, registration, and directions. With built in SEO, and a location-based SEM campaign, we'll make sure your event is a success."
            }
          ]
        },
        {
          icon: 'mdi-account-card-details',
          title: 'Signage',
          items: [
            {
              description:
                'A good B2B web design is key to generating organic traffic that converts into qualified leads. The better your website’s user experience, the more positive, lasting impressions your brand will leave with visitors.  B2B companies rarely expect immediate purchases on their websites. B2B sales often consist of multiple interactions across connected devices. We develop B2B websites to inform, captivate, and persuade customers engaging with your brand.'
            }
          ]
        },
        {
          icon: 'mdi-movie-roll',
          title: 'Embroidery',
          items: [
            {
              description:
                'Your online store is your one chance to prove your brand value to your customers. Your e-commerce website should make it easy for new customers to find you, and keep existing customers returning. We deeply monitor conversions and optimize to increase them.'
            }
          ]
        },
        {
          icon: 'mdi-newspaper',
          title: 'Headwear',
          items: [
            {
              description:
                'Websites that accommodate a lot of content can be a tricky balancing act to pull off. Our approach is to present the user with all the information in an organized manner, without overload. Grow your audience member-by-member with engaging content that is easy to share, and easy to find.'
            }
          ]
        },
        {
          icon: 'mdi-presentation-play',
          title: 'Outerwear',
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
