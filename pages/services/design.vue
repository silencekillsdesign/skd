<template>
  <div>
    <pageHeader pageTitle="Design" pageSubtitle="Doodle It. Do It." />

    <pageIntro
      introText="Take your brand global with our affordable design services. We offer everything from logo design to tradeshow booth design."
    ></pageIntro>

    <v-container fluid pa-0>
      <v-layout align-center id="main">
        <v-flex md6 offset-md1 pr-5 data-aos="fade-right">
          <v-list transparent shaped v-model="i">
            <v-subheader>Our Design Services:</v-subheader>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.icon"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title :aria-controls="item.title + 'tab'" v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item v-for="subItem in item.items" :key="subItem.title">
                <v-list-item-content class="pr-5" :aria-labelledbys="item.title + 'tab'">
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

    <v-container class="my-5">
      <v-row align="center" justify="center" class="mt-5 py-5">
        <v-col>
        <h2
          class="text-center display-3 indigo--text"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="800"
          data-aos-delay="100"
        >Our Design Process</h2>
        </v-col>
      </v-row>
    </v-container>
<!-- TODO: make order dynamic -->
    <v-container my-5>
      
      <!-- this should come from an api and services pages should be a layout -->
      <v-row class="py-5 my-5" align="center" v-for="(serviceStep, i) in serviceSteps" :key="i" :id="serviceStep.id">
        <v-col class="pa-5" cols="12" md="4" order="0" :order-md="serviceStep.imageOrder" data-aos="fade-right" data-aos-duration="800">
          <v-img :aspect-ratio="1" contain max-height="250px" :src="require('~/assets/img/services/'+serviceStep.image)"></v-img>
        </v-col>
        <v-col xs12 md8 pa-5 data-aos="fade-left" data-aos-duration="1200">
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
import stack from '~/components/global/stack.vue'

export default {
  components: {
    pageHeader,
    pageIntro,
    stack
  },
  head() {
    return {
      title: "Logo Design & Graphic Design",
      meta: [
        {
          name: "description",
          content:
            "Brand your local bozeman business like a big time brand. We offer affordable logo design, graphic design, presentations, and web design to suit your small to medium business"
        },
        { name: "robots", content: "index, follow" }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }],
    }
  },
  data() {
    return {
      structuredData: {
        "@context": "http://schema.org",
        "@type": "Service",
        serviceType: "Graphic Design & Logo Design",
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
            "Web design",
            "Graphic design",
            "logo design",
            "branding",
            "marketing",
            "business cards"
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
      i: 1,
      items: [
        {
          icon: "mdi-lead-pencil",
          title: "Logo Design",
          items: [
            {
              description:
                "Brand your small business like a big brand. We offer affordable logo design and branding packages for businesses of all sizes."
            }
          ]
        },
        {
          icon: "mdi-file-multiple",
          title: "Marketing Materials",
          items: [
            {
              description:
                "Brochures. Posters. Billboards. You name it, we can do it for you. "
            }
          ]
        },
        {
          icon: "mdi-fountain-pen-tip",
          title: "Copy Writing",
          items: [
            {
              description:
                "We write SEO-friendly copy that is easy to read and to the point. We also offer technical writing services for case studies and white papers."
            }
          ]
        },
        {
          icon: "mdi-account-card-details",
          title: "Stationery",
          items: [
            {
              description:
                "Put your custom letter head inside your custom envelope, and stuff it inside your custom folder to share with your customers."
            }
          ]
        },
        {
          icon: "mdi-movie-roll",
          title: "Audio / Visual",
          items: [
            {
              description:
                "We make branded logo stings, video effects and transitions, explainer videos, jingles and audio logos for your company to go fully multimedia."
            }
          ]
        },
        {
          icon: "mdi-newspaper",
          title: "Brand Guides",
          items: [
            {
              description:
                "We'll compile all of your brand assets into one convenient spot along with instructions for use and zip files of all assets to share with vendors."
            }
          ]
        },
        {
          icon: "mdi-presentation-play",
          title: "Presentaion Templates",
          items: [
            {
              description:
                "Professional presentation templates for your sales team to wow prospects."
            }
          ]
        }
      ],
      serviceSteps: [
        {
          id: "step1",
          title: "Drafting Process",
          text: "Every design, from logo design to tradeshow booth design, starts with a round of drafts to dial in the stylistic approach and make sure we aren't missing anything. Once, we chat a bit more on the design direction, we will move forward to mockups and final draft revisions.",
          image: "design/design1.svg",
          imageOrder: "0",
          buttonText: "Next Steps",
          buttonGoTo: "#step2",
        },
        {
          id: "step2",
          title: "Routing and Finalization",
          text: "We want to ensure everything is right, so we will use your preferred routing process and make any revisions that need to be made before finalizing the design. We will send all applicable final design files, neatly packaged with our standard naming convention, or yours. You, the client, take over ownership of the design once all contract terms have been met and project has been paid for.",
          image: "design/design2.svg",
          imageOrder: "1",
          buttonText: "Next Steps",
          buttonGoTo: "#step3",
        },
        {
          id: "step3",
          title: "File Delivery and Printing",
          text: "When you are ready to print, we will work closely with your preferred printers, or use our network of printing resources. Whether it is a sign company needing a vector format to cut your new signage or a round of brochures, we work seamlessly with any print standards, and cut you out as the middleman.",
          image: "design/design2.svg",
          imageOrder: "0",
          buttonText: "Next Steps",
          buttonGoTo: "#step4",
        },
        {
          id: "step4",
          title: "Packaging and More",
          text: "We can apply desgins to nearly anyhting these days. If you want to wrap your vehicle, or print a million beer cans, we'll get the files ready and wherever they need to go. We also offer printing and screen printing services if you need shirts. Just let us know what you are looking for and we will get a quote ready.",
          image: "design/design2.svg",
          imageOrder: "1",
          buttonText: "View Service Details",
          buttonGoTo: "#main",
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
