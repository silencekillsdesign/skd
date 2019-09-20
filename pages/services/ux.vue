<template>
  <div>
    <pageHeader id="header" pageTitle="UX / UI Design" pageSubtitle="Experience It. Feel It." />

    <pageIntro
      introText="A well-designed website can be your most powerful marketing segment, delivering your brand's message to your customers' fingertips. Our web design process caters to your existing customers, and new audiences alike."
    ></pageIntro>

    <!-- TODO: loop from data create reusable services component (service title, icon, short description)-->
    <v-container fluid pa-0>
      <v-row align="center" id="main">
        <!-- start list -->
        <v-col md="6" offset-md="1" data-aos="fade-right">
          <v-list color="transparent" rounded v-model="i" class="pr-5" itemprop="itemListElement" itemscope itemtype="http://schema.org/OfferCatalog">
            <v-subheader>The Things We Do:</v-subheader>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.icon"
              no-action
              eager
              itemprop="itemListElement" itemscope itemtype="http://schema.org/Offer"
            >
              <template v-slot:activator>
                <v-list-item-content itemprop="itemOffered" itemscope itemtype="http://schema.org/Service">
                  <v-list-item-title v-text="item.title" itemprop="name"></v-list-item-title>
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
        <!-- end list -->
        <v-col md5 data-aos="fade-left">
          <!-- <v-img flat :src="require('~/assets/img/webdev.svg')"> </v-img> -->
          <img class="mr-0 pr-0" src="~/assets/img/ux.svg" alt="avatar" />
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
        >Our UX / UI Design Process</h2>
      </v-layout>
    </v-container>

    <!-- 1. image -->
    <!-- 2. Title and content -->
    <!-- 3. if is even, order-md1 order-sm0  -->
    <!-- 4. if is odd order-md-0 order-sm0 -->
    <!-- 5. iterate id# for clck for next (i++)-->
    <!-- final step link to suplimental service -->

    <v-container class="my-5">
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
import pageHeader from '~/components/global/pageHeader.vue'
import pageIntro from '~/components/global/pageIntro.vue'

export default {
  components: {
    pageHeader,
    pageIntro
  },
  data() {
    return {
      structuredData: {
        "@context": "http://schema.org",
        "@type": "Service",
        serviceType: "UX and UI Design",
        provider: {
          "@type": "LocalBusiness",
          name: "SilenceKillsDesign"
        },
        location: {
          "@type": "Place",
          geo: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: "45.6770",
              longitude: "111.0429"
            },
            geoRadius: "100"
          },
          brand: "SilenceKillsDesign",
          knowsAbout: [
            "Web Development",
            "Web Design",
            "Logo design",
            "Graphic design",
            "Marketing",
            "SEO",
            "audio video"
          ],
          sameAs: [
            "https://www.facebook.com/silencekillsdesign/",
            "https://twitter.com/s1lencek1lls",
            "https://www.linkedin.com/in/cjwilliamsworks/",
            "https://instagram.com/silencekillsdesign"
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "221 Virginia Way",
            addressLocality: "Bozeman",
            addressRegion: "MT",
            postalCode: "59718"
          },
          telephone: "406-579-1985",
          email: "cj@silencekillsdesign.com"
        }
      },
      items: [
        {
          icon: "mdi-store",
          title: "Persona Research",
          items: [
            {
              description:
                "We build websites for local business that help customers easily find what they're looking for. A local business website doesn't need to be over the top, it needs to be useful. Our development process focuses on local SEO throughout the development process, so you can be easily found and easy to contact."
            }
          ]
        },
        {
          icon: "mdi-account-group",
          title: "User Flow Mapping",
          items: [
            {
              description:
                "Non-profit websites that offer gateways to your community outreach, donation gateways, and volounteer opportunities. Alongside a strong social media outreach, your non-profit website can save you hundreds of hours of volounteer time."
            }
          ]
        },
        {
          icon: "mdi-calendar-month-outline",
          title: "Intenaction Desgin",
          items: [
            {
              description:
                "Market your upcoming event, conference, or wedding with a website that offers easy access to itinerary, registration, and directions. With built in SEO, and a location-based SEM campaign, we'll make sure your event is a success."
            }
          ]
        },
        {
          icon: "mdi-domain",
          title: "A/B Testing",
          items: [
            {
              description:
                "A good B2B web design is key to generating organic traffic that converts into qualified leads. The better your website’s user experience, the more positive, lasting impressions your brand will leave with visitors.  B2B companies rarely expect immediate purchases on their websites. B2B sales often consist of multiple interactions across connected devices. We develop B2B websites to inform, captivate, and persuade customers engaging with your brand."
            }
          ]
        },
        {
          icon: "mdi-basket",
          title: "Focus Group Research",
          items: [
            {
              description:
                "Your online store is your one chance to prove your brand value to your customers. Your e-commerce website should make it easy for new customers to find you, and keep existing customers returning. We deeply monitor conversions and optimize to increase them."
            }
          ]
        },
        {
          icon: "mdi-newspaper",
          title: "Progressive Development",
          items: [
            {
              description:
                "Websites that accommodate a lot of content can be a tricky balancing act to pull off. Our approach is to present the user with all the information in an organized manner, without overload. Grow your audience member-by-member with engaging content that is easy to share, and easy to find."
            }
          ]
        },
        {
          icon: "mdi-monitor",
          title: "Reporting",
          items: [
            {
              description:
                "A good landing page should offer value to each user that visits it. They often offer exclusive resources, such as an e-book or webinar signup, in exchange for their basic contact information. The goal of these pages is to generate leads while you pull prospects further into the buyers' journey."
            }
          ]
        }
      ],
      serviceSteps: [
        {
          id: "step1",
          title: "Research and Planning",
          text: "Before we design or build anything, we need to understand why users  use your site or app. Once we know the why, we dive into the how they will interact with the final product. Here we create deep user personas. We look at possible frustrations and rendundancies and strategize an approach to resolve those issues.",
          image: "ux/ux1.svg",
          imageOrder: "0",
          buttonText: "Next Steps",
          buttonGoTo: "#step2",
        },
        {
          id: "step2",
          title: "Sketching and Wireframing",
          text: "There is no reason that great UI and UX can't simply come from a napkin sketch. Avoiding overthinking in the early stages ofter leads to a much more conscise design and overall better user experience.",
          image: "ux/ux2.svg",
          imageOrder: "1",
          buttonText: "Next Steps",
          buttonGoTo: "#step3",
        },
        {
          id: "step3",
          title: "Intereaction Prototyping",
          text: "At this stage, key usibilty features are ready for user testing, and internal decision making. We test the key demographics laid out in the persona definition process.",
          image: "ux/ux3.svg",
          imageOrder: "0",
          buttonText: "Next Steps",
          buttonGoTo: "#step4",
        },
        {
          id: "step4",
          title: "Testing and Decision",
          text: "We wireframe early in each project to clarify layout of key pages and to map the user experience process. This workflow assures confidence moving forward. Wireframes will also save considerable time and money in the testing and amends phase later in the project. This segment typically takes about a week or two.",
          image: "ux/ux4.svg",
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
