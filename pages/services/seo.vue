<template>
  <div>
    <pageHeader pageTitle="SEO / SEM" pageSubtitle="Seek It. Find It." />

    <pageIntro
      introText="A well-designed website can be your most powerful marketing segment, delivering your brand's message to your customers' fingertips. Our web design process caters to your existing customers, and new audiences alike."
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
          <img class="mr-0 pr-0" src="~/assets/img/seo.svg" alt="avatar" />
        </v-flex>
      </v-layout>
    </v-container>

    <stackSEO class="my-5" />

    <v-container my-5>
      <v-layout row align-center justify-center mt-5 py-5>
        <h2
          class="text-center display-3 indigo--text"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="800"
          data-aos-delay="100"
        >Our SEO / SEM Process</h2>
      </v-layout>
    </v-container>

    <v-container my-5>
      <v-layout align-center row wrap py-5 my-5>
        <v-flex xs12 md4 pa-5 data-aos="fade-right" data-aos-duration="800">
          <v-img :aspect-ratio="1" :src="require('~/assets/img/services/seo/seo1.svg')"></v-img>
        </v-flex>
        <v-flex xs12 md8 pa-5 data-aos="fade-left" data-aos-duration="1200">
          <h3 class="mt-4 blue--text text--accent-3">Auidt and Analyisis</h3>
          <v-divider class="my-5" color="blue"></v-divider>
          <p>Before we get started with anything else, we will run a full SEO audit, and share our results with you. We will address any glaring issues and develop a strategy to make your SEO efforts a success.</p>
          <v-btn class="ma-2" to="/services/ux" outlined color="indigo">View UX Services</v-btn>
        </v-flex>
      </v-layout>

      <v-layout align-center row wrap py-5 my-5>
        <v-flex xs12 md8 pa-5 data-aos="fade-right" data-aos-duration="1200">
          <h3 class="mt-4 blue--text text--accent-3">Technical Setup</h3>
          <v-divider class="my-5"></v-divider>
          <p>In this phase we make sure that the internet knows who you are by setting up Google Search Console, Google My Business, Analytics,AdWords, and address any other marketing tools that need to be configured. If you have an existing site, we see where technical improvements can be made. If we're building your site, no need to worry, the SEO goodies are baked in</p>
          <v-btn class="ma-2" to="/services/ux" outlined color="indigo">View Design Services</v-btn>
        </v-flex>
        <v-flex xs12 md4 pa-5 data-aos="fade-left" data-aos-duration="800">
          <v-img :aspect-ratio="1" :src="require('~/assets/img/services/seo/seo2.svg')"></v-img>
        </v-flex>
      </v-layout>

      <v-layout align-center row wrap py-5 my-5>
        <v-flex xs12 md4 pa-5  data-aos="fade-right" data-aos-duration="800">
          <v-img :aspect-ratio="1" :src="require('~/assets/img/services/seo/seo3.svg')"></v-img>
        </v-flex>
        <v-flex xs12 md8 pa-5 data-aos="fade-left" data-aos-duration="1200">
          <h3 class="mt-4 blue--text text--accent-3">Strategy Implementation</h3>
          <v-divider class="my-5"></v-divider>
          <p>Once we have the pieces in place, we will begin implementing your campaign strategy. Rome wasn't built in a day, but our content and campaign strategies should begin producing results fairly quickly. </p>
          <v-btn class="ma-2" to="/services/ux" outlined color="indigo">View SEO Services</v-btn>
        </v-flex>
      </v-layout>

      <v-layout align-center row wrap py-5 my-5>
        <v-flex xs12 md8 pa-5 data-aos="fade-left" data-aos-duration="1200">
          <h3 class="mt-4 blue--text text--accent-3">Reporting and Optimization</h3>
          <v-divider class="my-5"></v-divider>
          <p>Throughout your campaign strategy, we deliver regular reporting to show exactly where marketing dollars are going and what is converting customers. We determine where to ramp up and where to tone down to optimize your marketing budget. In this step we often make technical improvements to help page rank, as well</p>
          <v-btn class="ma-2" to="/services/ux" outlined color="indigo">View Hosting Services</v-btn>
        </v-flex>
        <v-flex xs12 md4 pa-5  data-aos="fade-right" data-aos-duration="800">
          <v-img :aspect-ratio="1" :src="require('~/assets/img/services/seo/seo4.svg')"></v-img>
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
import stackSEO from '~/components/global/stackSEO.vue'

export default {
  components: {
    pageHeader,
    pageIntro,
    stackSEO
  },
  data() {
    return {
      technologies: [
        {
          id: 0,
          technology: 'html5',
          icon: 'mdi-language-html5',
          url: 'link-to-w3-html5'
        },
        {
          id: 1,
          technology: 'css3',
          icon: 'mdi-language-css3',
          url: 'link-to-w3-html5'
        },
        {
          id: 2,
          technology: 'Sass',
          icon: 'mdi-sass',
          url: 'link-to-w3-html5'
        },
        {
          id: 3,
          technology: 'VueJS',
          icon: 'mdi-vuejs',
          url: 'link-to-w3-html5'
        },
        {
          id: 4,
          technology: 'Vuetify',
          icon: 'mdi-vuetify',
          url: 'link-to-w3-html5'
        },
        {
          id: 5,
          technology: 'WordPress',
          icon: 'mdi-wordpress',
          url: 'link-to-w3-html5'
        }
      ],
      i: 1,
      items: [
        {
          icon: 'mdi-store',
          title: 'Google AdWords',
          items: [
            {
              description:
                "Pay-per-click (PPC) ads are paid online advertisements which appear next to searches on the web. We create powerful AdWords campaigns that expand reach for location-based and keyword-based targeting."
            }
          ]
        },
        {
          icon: 'mdi-account-group',
          title: 'Google Analytics',
          items: [
            {
              description:
                'Google Analytics a free digital analytics tool, used to measure your site traffic and performance. It offers us the valuable insights to any revisions needed on the site tom improve conversions. We offer training and included monthly reports for all our SEO clients. '
            }
          ]
        },
        {
          icon: 'mdi-calendar-month-outline',
          title: 'Google Search Console',
          items: [
            {
              description:
                "Google Search Console is a free tool that helps businesses optimize their sites for search.  It also tells you about any issues with your site, things like crawl errors (i.e. Google can’t access a page on your site) and even if your site is mobile-friendly or not. "
            }
          ]
        },
        {
          icon: 'mdi-domain',
          title: 'Schema.org Markup',
          items: [
            {
              description:
                'Schema is a semantic vocabulary of tags (or microdata) that you can add to your site to improve the way search engines read and represent your page. This is often much more technical to implement, but can add tremendous value to your SERP (search engine ranking position).'
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
