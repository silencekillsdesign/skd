<template>
  <div>
    <pageHeader pageTitle="Web Dev" pageSubtitle="Design It. Build It." />

    <pageIntro
      introText="A well-designed website can be your most powerful marketing segment, delivering your brand's message to your customers' fingertips. Our start-to-finish web development process caters to your existing customers, and new audiences alike."
    ></pageIntro>

    <!-- TODO: loop from data create reusable services component (service title, icon, short description)-->
    <v-container fluid pa-0>
      <v-layout align-center id="main">
        <v-flex md6 offset-md1 pr-5 data-aos="fade-right" >
          <v-list transparent shaped v-model="i">
            <v-subheader>The Things We Do:</v-subheader>
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
        >Our Web Development Process</h2>
      </v-layout>
    </v-container>
<!-- TODO: make order dynamic -->
    <v-container my-5>
      
      <v-layout align-center row wrap py-5 my-5>
        <v-flex xs12 md4 order-0 pa-5 data-aos="fade-right" data-aos-duration="800">
          <v-img :aspect-ratio="1" contain max-height="250px" :src="require('~/assets/img/services/web/web1.svg')"></v-img>
        </v-flex>
        <v-flex xs12 md8 pa-5 data-aos="fade-left" data-aos-duration="1200">
          <h3 class="mt-4 blue--text text--accent-3">UX Planning and Wireframing</h3>
          <v-divider class="my-5" color="blue"></v-divider>
          <p>We wireframe early in each project to clarify layout of key pages and to map the user experience process. This workflow assures confidence moving forward. Wireframes will also save considerable time and money in the testing and amends phase later in the project. This segment typically takes about a week or two.</p>
          <v-btn class="ma-2" to="/services/ux" outlined color="indigo">View UX Services</v-btn>
        </v-flex>
      </v-layout>

      <v-layout align-center row wrap py-5 my-5>
        <v-flex xs12 md4 order-xs0 order-md1  pa-5 data-aos="fade-right" data-aos-duration="800">
          <v-img :aspect-ratio="1" contain max-height="250px" :src="require('~/assets/img/services/web/web2.svg')"></v-img>
        </v-flex>
        <v-flex xs12 md8 pa-5 data-aos="fade-left" data-aos-duration="1200">
          <h3 class="mt-4 blue--text text--accent-3">Development and Design</h3>
          <v-divider class="my-5" color="blue"></v-divider>
          <p>We are proficient in design and development, making it easy for your mockups and ideas to come to life. With component based development, new features are easy to add on the fly.</p>
          <v-btn class="ma-2" to="/services/design" outlined color="indigo">View Design Services</v-btn>
        </v-flex>
      </v-layout>
      
      <v-layout align-center row wrap py-5 my-5>
        <v-flex xs12 md4 order-0 pa-5 data-aos="fade-right" data-aos-duration="800">
          <v-img :aspect-ratio="1" contain max-height="250px" :src="require('~/assets/img/services/web/web3.svg')"></v-img>
        </v-flex>
        <v-flex xs12 md8 pa-5 data-aos="fade-left" data-aos-duration="1200">
          <h3 class="mt-4 blue--text text--accent-3">Deployment and Server Setup</h3>
          <v-divider class="my-5" color="blue"></v-divider>
          <p>Once your website development is complete, it's time to go live! We  will handle the server setup, hosting, and deployment of your new site, wherever you want it hosted.</p>
          <v-btn class="ma-2" to="/services/webdevelopment" outlined color="indigo">View Web Services</v-btn>
        </v-flex>
      </v-layout>

      <v-layout align-center row wrap py-5 my-5>
        <v-flex xs12 md4 order-xs0 order-md1  pa-5 data-aos="fade-right" data-aos-duration="800">
          <v-img :aspect-ratio="1" contain max-height="250px" :src="require('~/assets/img/services/web/web4.svg')"></v-img>
        </v-flex>
        <v-flex xs12 md8 pa-5 data-aos="fade-left" data-aos-duration="1200">
          <h3 class="mt-4 blue--text text--accent-3">SEO and Performance Optimization</h3>
          <v-divider class="my-5" color="blue"></v-divider>
          <p>SEO is one of our main focuses throughout the development of your site. Once we are live, we'll tackle any remaining SEO setup, and begin implementing your unique SEO strategy.</p>
          <v-btn class="ma-2" to="/services/seo" outlined color="indigo">View SEO Services</v-btn>
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
  head() {
    return {
      title: "Web Development & Web Design",
      meta: [        
        {
          name: "description",
          content:
            "Well-designed websites are very powerful marketing, delivering your brand's message to your customers' fingertips. Our start-to-finish web development process caters to your existing customers, and new audiences alike."
        },
        { name: "robots", content: "index, follow" },
      ]
    };
  },
  data() {
    return {
      i: 1,
      items: [
        {
          icon: 'mdi-store',
          title: 'Local Business Websites',
          items: [
            {
              description:
                "We build websites for local business that help customers easily find what they're looking for. A local business website doesn't need to be over the top, it needs to be useful. Our development process focuses on local SEO throughout the development process, so you can be easily found and easy to contact."
            }
          ]
        },
        {
          icon: 'mdi-account-group',
          title: 'Non-Profit Groups',
          items: [
            {
              description:
                'Non-profit websites that offer gateways to your community outreach, donation gateways, and volounteer opportunities. Alongside a strong social media outreach, your non-profit website can save you hundreds of hours of volounteer time.'
            }
          ]
        },
        {
          icon: 'mdi-calendar-month-outline',
          title: 'Events & Weddings',
          items: [
            {
              description:
                "Market your upcoming event, conference, or wedding with a website that offers easy access to itinerary, registration, and directions. With built in SEO, and a location-based SEM campaign, we'll make sure your event is a success."
            }
          ]
        },
        {
          icon: 'mdi-domain',
          title: 'B2B and Sales Websites',
          items: [
            {
              description:
                'A good B2B web design is key to generating organic traffic that converts into qualified leads. The better your website’s user experience, the more positive, lasting impressions your brand will leave with visitors.  B2B companies rarely expect immediate purchases on their websites. B2B sales often consist of multiple interactions across connected devices. We develop B2B websites to inform, captivate, and persuade customers engaging with your brand.'
            }
          ]
        },
        {
          icon: 'mdi-basket',
          title: 'E-Commerce Websites',
          items: [
            {
              description:
                'Your online store is your one chance to prove your brand value to your customers. Your e-commerce website should make it easy for new customers to find you, and keep existing customers returning. We deeply monitor conversions and optimize to increase them.'
            }
          ]
        },
        {
          icon: 'mdi-newspaper',
          title: 'Blogs, News Sites, and Forums',
          items: [
            {
              description:
                'Websites that accommodate a lot of content can be a tricky balancing act to pull off. Our approach is to present the user with all the information in an organized manner, without overload. Grow your audience member-by-member with engaging content that is easy to share, and easy to find.'
            }
          ]
        },
        {
          icon: 'mdi-monitor',
          title: 'Landing Pages & SPAs',
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
