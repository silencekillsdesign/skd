<template>
  <div>
    <pageHeader pageTitle="Branding" pageSubtitle="Live It. Become It." />

    <pageIntro
      introText="Great branding establishes your company with a memorable presence in the marketplace, apart from your competition. Our brand development process creates a unique story, strategy, and visual identity for your brand. We offer a full range of branding services for companies of all sizes."
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

    <stack class="my-5" />

    <v-container my-5>
      <v-layout row align-center justify-center mt-5 py-5>
        <h2
          class="text-center display-3 indigo--text"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="800"
          data-aos-delay="100"
        >Our Branding Process</h2>
      </v-layout>
    </v-container>

    <v-container my-5>
      <v-layout align-center row wrap py-5 my-5>
        <v-flex xs12 md4 pa-5 data-aos="fade-right" data-aos-duration="800">
          <v-img :aspect-ratio="1" :src="require('~/assets/img/services/branding/branding1.svg')"></v-img>
        </v-flex>
        <v-flex xs12 md8 pa-5 data-aos="fade-left" data-aos-duration="800">
          <h3 class="mt-4 blue--text text--accent-3">Brand Audit</h3>
          <v-divider class="my-5" color="blue"></v-divider>
          <p>We will take an in depth look at al of your existing brand assets. Next we draft a plan to improve on the weak segments, and capitalize on your strengths. </p>
          <v-btn class="ma-2" to="/services/ux" outlined color="indigo">View UX Services</v-btn>
        </v-flex>
      </v-layout>

      <v-layout align-center row wrap py-5 my-5>
        <v-flex xs12 md8 pa-5  data-aos="fade-right" data-aos-duration="800">
          <h3 class="mt-4">Brand Strategy</h3>
          <v-divider class="my-5"></v-divider>
          <p>After we've determined strengths, weaknesses, and opportunities, we will begin implementing a strategy to best reach new customers and harness existing support. This is often mixed media and is very hands on. We will work directly with our clients to make sure every voice is heard, while providing expert feedback and response.</p>
          <v-btn class="ma-2" to="/services/ux" outlined color="indigo">View Design Services</v-btn>
        </v-flex>
        <v-flex xs12 md4 pa-5  data-aos="fade-left" data-aos-duration="800">
          <v-img :aspect-ratio="1" :src="require('~/assets/img/services/branding/branding2.svg')"></v-img>
        </v-flex>
      </v-layout>

      <v-layout align-center row wrap py-5 my-5>
        <v-flex xs12 md4 pa-5  data-aos="fade-right" data-aos-duration="800">
          <v-img :aspect-ratio="1" :src="require('~/assets/img/services/branding/branding3.svg')"></v-img>
        </v-flex>
        <v-flex xs12 md8 pa-5  data-aos="fade-left" data-aos-duration="800">
          <h3 class="mt-4">Brand Growth</h3>
          <v-divider class="my-5"></v-divider>
          <p>There is always room to grow. Whether it is to another location, a non-profit sector, or just more products, we've still got a lot we can do. We'll work closely with you to determine what the next steps are and how we can get you there.</p>
          <v-btn class="ma-2" to="/services/ux" outlined color="indigo">View SEO Services</v-btn>
        </v-flex>
      </v-layout>

      <v-layout align-center row wrap py-5 my-5>
        <v-flex xs12 md8 pa-5  data-aos="fade-right" data-aos-duration="800">
          <h3 class="mt-4">Brand Asset Management</h3>
          <v-divider class="my-5"></v-divider>
          <p>Managing all of your brand's assets can be a nightmare. Let us help you organize a bit by creating brand guidlines, naming conventions, asset portals and more. Never send the wrong logo version to a vendor again.</p>
          <v-btn class="ma-2" to="/services/ux" outlined color="indigo">View Hosting Services</v-btn>
        </v-flex>
        <v-flex xs12 md4 pa-5  data-aos="fade-left" data-aos-duration="800">
          <v-img :aspect-ratio="1" :src="require('~/assets/img/services/branding/branding4.svg')"></v-img>
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
          title: 'Logo Design',
          items: [
            {
              description:
                "Our itereative design process is a balance between our branding expertise "
            }
          ]
        },
        {
          icon: 'mdi-file-multiple',
          title: 'Marketing Materials',
          items: [
            {
              description:
                'Non-profit websites that offer gateways to your community outreach, donation gateways, and volounteer opportunities. Alongside a strong social media outreach, your non-profit website can save you hundreds of hours of volounteer time.'
            }
          ]
        },
        {
          icon: 'mdi-fountain-pen-tip',
          title: 'Copy Writing',
          items: [
            {
              description:
                "Market your upcoming event, conference, or wedding with a website that offers easy access to itinerary, registration, and directions. With built in SEO, and a location-based SEM campaign, we'll make sure your event is a success."
            }
          ]
        },
        {
          icon: 'mdi-account-card-details',
          title: 'Stationery',
          items: [
            {
              description:
                'A good B2B web design is key to generating organic traffic that converts into qualified leads. The better your website’s user experience, the more positive, lasting impressions your brand will leave with visitors.  B2B companies rarely expect immediate purchases on their websites. B2B sales often consist of multiple interactions across connected devices. We develop B2B websites to inform, captivate, and persuade customers engaging with your brand.'
            }
          ]
        },
        {
          icon: 'mdi-teach',
          title: 'Tradeshows',
          items: [
            {
              description:
                'Your online store is your one chance to prove your brand value to your customers. Your e-commerce website should make it easy for new customers to find you, and keep existing customers returning. We deeply monitor conversions and optimize to increase them.'
            }
          ]
        },
        {
          icon: 'mdi-newspaper',
          title: 'Brand Guides',
          items: [
            {
              description:
                'Websites that accommodate a lot of content can be a tricky balancing act to pull off. Our approach is to present the user with all the information in an organized manner, without overload. Grow your audience member-by-member with engaging content that is easy to share, and easy to find.'
            }
          ]
        },
        {
          icon: 'mdi-presentation-play',
          title: 'Presentaion Templates',
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
