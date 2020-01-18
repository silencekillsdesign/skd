<template>
  <div>
    <pageHeader schemaType="Service" schemaItem="web design" pageTitle="Web Design" pageSubtitle="Design It. Build It." />

    <pageIntro
      introText="Good website design can be your most powerful marketing segment, delivering your brand's message to your customers' fingertips. Our web development process prioitizes UX and SEO, to help small businesses stand out in Bozeman."
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
                  <p class="feature-description" itemprop="description">{{ subItem.description }}</p>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-col>
        <!-- end list -->
        <v-col md="5" data-aos="fade-left" class="hidden-sm-and-down">
          <v-img class="mr-0 pr-0" :src="require('~/assets/img/webdev.svg')" alt="web designers and developers in bozeman, montana"></v-img>
        </v-col>
      </v-row>
    </v-container>
    

    <stack class="my-5" data-aos="fade-up" />

    <v-container class="my-5">
      <v-row align="center" justify="center" class="mt-5 py-5">
        <h2
          class="text-center display-3 indigo--text"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="800"
          data-aos-delay="100"
        >Our Web Design Process</h2>
      </v-row>
    </v-container>
    <!-- TODO: make order dynamic -->

    <!-- this should come from an api and services pages should be a layout 'withHeader' -->
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

    <v-container class="my-5" data-aos="fade-up" data-aos-duration="1300">
      <v-row class="mx-auto" align="center" justify="center">
        <v-col cols="12" md="8" align="center" justify="center">
          <h3 class="text8-center display-3 indigo--text my-5">What sets Us Apart?</h3>
          <p class="subtitle-1">SilenceKillsDesign offers more than just copy-and-paste WordPress sites. We build fast JAMStack websites using an array of headless CMS, custom HTML sites, and WordPress sites that focus heavily on SEO ranking factors, such as site performance, best practices and accessibility. Our all-in-one desgin, development and SEO offers you a single point of contact, making communication and integration seamless. Request a quote for your new web design project. With basic website pricing starting at $1200, we are a great fit for small businesses.</p>
          <v-btn class="mt-3" large to="/contact">Contact Us</v-btn>
          </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script async>
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
      title: "Web Design & Development",
      meta: [
        {
          name: "description",
          content:
            "We design websites that are fast and relevant - delivering your brand's message to your customers' fingertips. Our start-to-finish web development process bakes in SEO and helps grow your customer base"
        },
        {
          name: "keywords",
          content:
            "local business websites in bozeman, bozeman web design, website designers bozeman, web design, web designer in bozeman, b2b website design, web developer bozeman, wordpress bozeman, web site development, seo design, web site development, bozeman website design, bozeman web development, seo bozeman, web design bozeman mt, website design bozeman, website design bozeman mt, bozeman web design, bozeman web designer, bozeman web designers, bozeman website development, seo design, bozeman custom web design, web design bozeman, best web design montana"
        },
        { name: "robots", content: "index, follow" }
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [{ innerHTML: JSON.stringify(this.structuredData), type: 'application/ld+json' }]
    }
  },
  data() {
    return {
      structuredData: {
        "@context": "http://schema.org",
        "@type": "Service",
        serviceType: "Web Design & Development",
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
      i: 1,
      items: [
        {
          icon: "mdi-store",
          title: "Local Business Websites",
          items: [
            {
              description:
                "We build websites for local Bozeman businesses (and other cities) that help customers easily find what they're looking for. A local business website doesn't need to be over the top, it needs to be useful. Our development process focuses on local SEO throughout the development process, so you can be easily found and easy to contact."
            }
          ]
        },
        {
          icon: "mdi-account-group",
          title: "Non-Profit Groups",
          items: [
            {
              description:
                "Non-profit website designs that offer gateways to your community outreach, donation gateways, and volounteer opportunities. Alongside a strong social media outreach, your non-profit website can save you hundreds of hours of volounteer time."
            }
          ]
        },
        {
          icon: "mdi-calendar-month-outline",
          title: "Events & Weddings",
          items: [
            {
              description:
                "Market your upcoming event, conference, or wedding with a website that offers easy access to itinerary, registration, and directions. With built in SEO, and a location-based SEM campaign, we'll make sure your event is a success."
            }
          ]
        },
        {
          icon: "mdi-domain",
          title: "B2B and Sales Websites",
          items: [
            {
              description:
                "A good B2B web design is key to generating organic traffic that converts into qualified leads. The better your website’s user experience, the more positive, lasting impressions your brand will leave with visitors.  B2B companies rarely expect immediate purchases on their websites. B2B sales often consist of multiple interactions across connected devices. We develop B2B websites to inform, captivate, and persuade customers engaging with your brand."
            }
          ]
        },
        {
          icon: "mdi-basket",
          title: "E-Commerce Websites",
          items: [
            {
              description:
                "Your online store is your one chance to prove your brand value to your customers. Your e-commerce website should make it easy for new customers to find you, and keep existing customers returning. We deeply monitor conversions and optimize to increase them."
            }
          ]
        },
        {
          icon: "mdi-newspaper",
          title: "Blogs, News Sites, and Forums",
          items: [
            {
              description:
                "Websites that accommodate a lot of content can be a tricky balancing act to pull off. Our approach is to present the user with all the information in an organized manner, without overload. Grow your audience member-by-member with engaging content that is easy to share, and easy to find."
            }
          ]
        },
        {
          icon: "mdi-monitor",
          title: "Landing Pages & SPAs",
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
          title: "UX Planning and Wireframing",
          text: "We wireframe early in each project to clarify layout of key pages and to map the user experience process. This workflow assures confidence moving forward. Wireframes will also save considerable time and money in the testing and amends phase later in the project. This segment typically takes about a week or two.",
          image: "web/web1.svg",
          imageOrder: "0",
          buttonText: "Next Steps",
          buttonGoTo: "#step2",
        },
        {
          id: "step2",
          title: "Development and Design",
          text: "We are proficient in design and development, making it easy for your mockups and ideas to come to life. With component based development, new features are easy to add on the fly.",
          image: "web/web2.svg",
          imageOrder: "1",
          buttonText: "Next Steps",
          buttonGoTo: "#step3",
        },
        {
          id: "step3",
          title: "Deployment and Server Setup",
          text: "Once your website development is complete, it's time to go live! We will handle the server setup, hosting, and deployment of your new site, wherever you want it hosted.",
          image: "web/web3.svg",
          imageOrder: "0",
          buttonText: "Next Steps",
          buttonGoTo: "#step4",
        },
        {
          id: "step4",
          title: "SEO and Performance Optimization",
          text: "SEO is one of our main focuses throughout the development of your site. Once we are live, we'll tackle any remaining SEO setup, and begin implementing your unique SEO strategy. We also optimize your website, focusing on performance and making your website fast.",
          image: "web/web4.svg",
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
.service-list {
  border-radius: 2em !important; 
}
.feature-description {
  line-height: 1.7em !important;
}
</style>
