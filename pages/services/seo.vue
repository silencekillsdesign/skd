<template>
  <div>
    <pageHeader pageTitle="SEO / SEM" pageSubtitle="Seek It. Find It." />

    <pageIntro
      introText="Grow your web presence with a unique search engine optimiation approach focused on your customers. With thousands of hits delivered to our customers across industries, our technical SEO strategies help you start improving your results immediately."
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
          <img class="mr-0 pr-0" src="~/assets/img/seo.svg" alt="avatar" />
        </v-col>
      </v-row>
    </v-container>

    <stackSEO class="my-5" data-aos="fade-up"/>

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
      <v-row class="py-5 my-5" align="center" justify="center" v-for="(serviceStep, i) in serviceSteps" :key="i" :id="serviceStep.id">
        <v-col class="pa-5" cols="12" md="4" order="0" :order-md="serviceStep.imageOrder" data-aos="fade-right" data-aos-duration="800">
          <v-img :aspect-ratio="1" contain max-height="250px" :src="require('~/assets/img/services/'+serviceStep.image)"></v-img>
        </v-col>
        <v-col cols="10" md="8" class="pa-5" data-aos="fade-left" data-aos-duration="1200">
          <h3 class="mt-4 blue--text text--accent-3">{{ serviceStep.title }}</h3>
          <v-divider class="my-5" color="blue"></v-divider>
          <p>{{ serviceStep.text }}</p>
          <v-btn class="my-2" @click="$vuetify.goTo(serviceStep.buttonGoTo)" outlined color="indigo">{{ serviceStep.buttonText}}</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid pa-0>
      <quoteCTA />
    </v-container>
  </div>
</template>

<script>
import pageHeader from "~/components/global/pageHeader.vue";
import pageIntro from "~/components/global/pageIntro.vue";
import stackSEO from "~/components/global/stackSEO.vue";

export default {
  components: {
    pageHeader,
    pageIntro,
    stackSEO
  },
  head() {
    return {
      title: "SEO for Bozeman Business",
      meta: [
        {
          name: "description",
          content:
            "Grow your web presence with a unique search engine optimiation approach focused on your customers. Offering local SEO unique to Bozeman businesses."
        },
        {
          name: "keywords",
          content:
            "local seo bozeman, ppc bozeman, technical seo, e-commerce SEO, seo expert in bozeman, best seo bozeman"
        }
      ]
    }
  },
  data() {
    return {
      technologies: [
        {
          id: 0,
          technology: "html5",
          icon: "mdi-language-html5",
          url: "link-to-w3-html5"
        },
        {
          id: 1,
          technology: "css3",
          icon: "mdi-language-css3",
          url: "link-to-w3-html5"
        },
        {
          id: 2,
          technology: "Sass",
          icon: "mdi-sass",
          url: "link-to-w3-html5"
        },
        {
          id: 3,
          technology: "VueJS",
          icon: "mdi-vuejs",
          url: "link-to-w3-html5"
        },
        {
          id: 4,
          technology: "Vuetify",
          icon: "mdi-vuetify",
          url: "link-to-w3-html5"
        },
        {
          id: 5,
          technology: "WordPress",
          icon: "mdi-wordpress",
          url: "link-to-w3-html5"
        }
      ],
      i: 1,
      items: [
        {
          icon: "mdi-store",
          title: "Google AdWords",
          items: [
            {
              description:
                "Pay-per-click (PPC) ads are paid online advertisements which appear next to searches on the web. We create powerful AdWords campaigns that expand reach for location-based and keyword-based targeting."
            }
          ]
        },
        {
          icon: "mdi-account-group",
          title: "Google Analytics",
          items: [
            {
              description:
                "Google Analytics a free digital analytics tool, used to measure your site traffic and performance. It offers us the valuable insights to any revisions needed on the site tom improve conversions. We offer training and included monthly reports for all our SEO clients. "
            }
          ]
        },
        {
          icon: "mdi-calendar-month-outline",
          title: "Google Search Console",
          items: [
            {
              description:
                "Google Search Console is a free tool that helps businesses optimize their sites for search.  It also tells you about any issues with your site, things like crawl errors (i.e. Google can’t access a page on your site) and even if your site is mobile-friendly or not. "
            }
          ]
        },
        {
          icon: "mdi-domain",
          title: "Schema.org Markup",
          items: [
            {
              description:
                "Schema is a semantic vocabulary of tags (or microdata) that you can add to your site to improve the way search engines read and represent your page. This is often much more technical to implement, but can add tremendous value to your SERP (search engine ranking position)."
            }
          ]
        },
        {
          icon: "mdi-basket",
          title: "E-Commerce Analytics",
          items: [
            {
              description:
                "As a small-to-medium online retailer, we understand your limited resources. Without knowing which marketing campaigns are converting, you could be wasting both time and money.  Google Analytics is a powerful tool for e-commerce sites because Google allows you to track all your online sales data. Once this integration is set up, all your sales will be tied to actual sessions, allowing you to connect sales to specific marketing channels. "
            }
          ]
        },
        {
          icon: "mdi-monitor",
          title: "Auidt and Analyisis",
          items: [
            {
              description:
                "We monitor and optimize your site's performance and conversions throughout its entire lifecycle. This can mean making improvements to existing technologies on the site, or rewording content for maximum SEO value."
            }
          ]
        }
      ],
      serviceSteps: [
        {
          id: "step1",
          title: "Audit and Analyisis",
          text: "Before we get started with anything else, we will run a full SEO audit, and share our results with you. We will address any glaring issues and develop a strategy to make your SEO efforts a success.",
          image: "seo/seo1.svg",
          imageOrder: "0",
          buttonText: "Next Steps",
          buttonGoTo: "#step2",
        },
        {
          id: "step2",
          title: "Technical SEO Setup",
          text: "In this phase, we make sure that the internet knows who you are by setting up Google Search Console, Google My Business, Analytics, AdWords, and address any other marketing tools that need to be configured. If you have an existing site, we see where technical improvements can be made. If we're building your site, no need to worry, the SEO goodies are baked in",
          image: "seo/seo2.svg",
          imageOrder: "1",
          buttonText: "Next Steps",
          buttonGoTo: "#step3",
        },
        {
          id: "step3",
          title: "Strategy Implementation",
          text: "Once we have the pieces in place, we will begin implementing your campaign strategy. Search ranking position doesn't jump up to number one overnight. With good content planning, and technical SEO, you should begin seeing results fairly quickly.",
          image: "seo/seo3.svg",
          imageOrder: "0",
          buttonText: "Next Steps",
          buttonGoTo: "#step4",
        },
        {
          id: "step4",
          title: "Reporting and Optimization",
          text: "Throughout your campaigns, we deliver regular reporting to show exactly where marketing dollars are going and what is converting customers. We determine where to ramp up and where to tone down to optimize your marketing budget. In this step, we often make technical improvements to help page rank, as well.",
          image: "seo/seo4.svg",
          imageOrder: "1",
          buttonText: "View SEO Details",
          buttonGoTo: "#",
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
