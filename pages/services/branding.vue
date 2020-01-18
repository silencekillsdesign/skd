<template>
  <div>
    <pageHeader pageTitle="Branding" pageSubtitle="Live It. Become It." />

    <pageIntro
      introText="Great branding establishes your company with a memorable presence in the marketplace, apart from your competition. Our brand development process creates a unique story, strategy, and visual identity for your brand. We offer a full range of branding services - from logo design to full brand packages - for companies of all sizes."
    ></pageIntro>

    <!-- TODO: loop from data create reusable services component (service title, icon, short description)-->
    <v-container fluid pa-0>
      <v-row align-center id="main">
        <v-col md="6" offset-md="1" class="pr-5">
          <v-list transparent shaped v-model="i">
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.icon"
              eager
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
        </v-col>
        <v-col md="5" class="hidden-sm-and-down">
          <!-- <v-img flat :src="require('~/assets/img/webdev.svg')"> </v-img> -->
          <v-img
            class="mr-0 pr-0"
            :src="require('~/assets/img/webdev.svg')"
            alt="web designers and developers in bozeman, montana"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>

    <stack class="my-5" />

    <v-container my-5>
      <v-layout row align-center justify-center mt-5 py-5>
        <h2 class="text-center display-3 indigo--text">Our Branding Process</h2>
      </v-layout>
    </v-container>

    <v-container class="my-5">
      <v-row align="center" class="py-5 my-5">
        <v-col cols="12" md="4" order="0" class="pa-5">
          <v-img
            :aspect-ratio="1"
            contain
            max-height="250px"
            :src="require('~/assets/img/services/branding/branding1.svg')"
          ></v-img>
        </v-col>
        <v-col cols="12" md="8" class="pa-5">
          <h3 class="mt-4 blue--text text--accent-3">Brand Audit</h3>
          <v-divider class="my-5" color="blue"></v-divider>
          <p>We will take an in depth look at al of your existing brand assets. Next we draft a plan to improve on the weak segments, and capitalize on your strengths.</p>
          <v-btn class="ma-2" @click="$vuetify.goTo('#step2')" outlined color="indigo">Next Steps</v-btn>
        </v-col>
      </v-row>

      <!-- <v-container my-5>
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
      </v-layout>-->

      <v-layout align-center row wrap py-5 my-5 id="step2">
        <v-flex xs12 md8 pa-5>
          <h3 class="mt-4">Brand Strategy</h3>
          <v-divider class="my-5"></v-divider>
          <p>After we've determined strengths, weaknesses, and opportunities, we will begin implementing a strategy to best reach new customers and harness existing support. This is often mixed media and is very hands on. We will work directly with our clients to make sure every voice is heard, while providing expert feedback and response.</p>
          <v-btn class="ma-2" to="/services/ux" outlined color="indigo">View Design Services</v-btn>
        </v-flex>
        <v-flex xs12 md4 pa-5>
          <v-img :aspect-ratio="1" :src="require('~/assets/img/services/branding/branding2.svg')"></v-img>
        </v-flex>
      </v-layout>

      <v-layout align-center row wrap py-5 my-5>
        <v-flex xs12 md4 pa-5>
          <v-img :aspect-ratio="1" :src="require('~/assets/img/services/branding/branding3.svg')"></v-img>
        </v-flex>
        <v-flex xs12 md8 pa-5>
          <h3 class="mt-4">Brand Growth</h3>
          <v-divider class="my-5"></v-divider>
          <p>There is always room to grow. Whether it is to another location, a non-profit sector, or just more products, we've still got a lot we can do. We'll work closely with you to determine what the next steps are and how we can get you there.</p>
          <v-btn class="ma-2" to="/services/ux" outlined color="indigo">View SEO Services</v-btn>
        </v-flex>
      </v-layout>

      <v-layout align-center row wrap py-5 my-5>
        <v-flex xs12 md8 pa-5>
          <h3 class="mt-4">Brand Asset Management</h3>
          <v-divider class="my-5"></v-divider>
          <p>Managing all of your brand's assets can be a nightmare. Let us help you organize a bit by creating brand guidlines, naming conventions, asset portals and more. Never send the wrong logo version to a vendor again.</p>
          <v-btn class="ma-2" to="/services/ux" outlined color="indigo">View Hosting Services</v-btn>
        </v-flex>
        <v-flex xs12 md4 pa-5>
          <v-img :aspect-ratio="1" :src="require('~/assets/img/services/branding/branding4.svg')"></v-img>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container class="my-5" data-aos="fade-up" data-aos-duration="1300">
      <v-row class="mx-auto" align="center" justify="center">
        <v-col cols="12" md="8" align="center" justify="center">
          <h3 class="text8-center display-3 indigo--text my-5">What sets Us Apart?</h3>
          <p  class="subtitle-1">
            We realize your logo design is a key part of your brand identity. We're much more than logo designers. We offer a full brand management experience, including logo design, marketing materials, digital asset management, and more. From campaign planning to execution and reporting, our expert advice makes managing your brand easy.
          </p>
          <v-btn class="mt-3" large to="/contact">Contact Us</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import pageHeader from "~/components/global/pageHeader.vue";
import pageIntro from "~/components/global/pageIntro.vue";
import stack from "~/components/global/stack.vue";

export default {
  components: {
    pageHeader,
    pageIntro,
    stack
  },
  head() {
    return {
      title: "Branding & Logo Design",
      meta: [
        {
          name: "description",
          content:
            "Brand your local bozeman business like a big time brand. We offer affordable logo design, graphic design, presentations, and web design to suit your small to medium business"
        },
        {
          name: "keywords",
          content:
            "bozeman logo designers, bozeman business cards, bozeman logo design, logo design bozeman, bozeman branding, marketing agency in bozeman, digital marketing bozeman, design agency bozeman, branding and web design"
        }
      ],
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: JSON.stringify(this.structuredData),
          type: "application/ld+json"
        }
      ]
    };
  },
  data() {
    return {
      structuredData: {
        "@context": "http://schema.org",
        "@type": "Service",
        serviceType: "Branding & Logo Design",
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
                "Our itereative design process is a balance between our branding expertise "
            }
          ]
        },
        {
          icon: "mdi-file-multiple",
          title: "Marketing Materials",
          items: [
            {
              description:
                "Brochures, whitepapers, case studies, direct mailers, etc."
            }
          ]
        },
        {
          icon: "mdi-fountain-pen-tip",
          title: "Copy Writing",
          items: [
            {
              description: "We write copy specifically for SEO. "
            }
          ]
        },
        {
          icon: "mdi-account-card-details",
          title: "Stationery",
          items: [
            {
              description:
                "Make your brand official with leatterheads, business cards, envelopes, packaging and more."
            }
          ]
        },
        {
          icon: "mdi-teach",
          title: "Tradeshows",
          items: [
            {
              description:
                "Everything from banner stands and table cloths, to full tradeshow both design."
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
      ]
    };
  }
};
</script>

<style>
.feature-description {
  line-height: 1.7em !important;
}
</style>
