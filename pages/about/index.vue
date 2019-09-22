<template>
  <v-container fluid pa-0>
    <!-- <sparklineHeader pageTitle="About Us" pageSubtitle="Better Brands. Less Bullshit." /> -->
    <pageHeader pageTitle="About Us" pageSubtitle="Better Brands. Less Bullshit." />
    <aboutSplit />
    <aboutSplitLeft />
    <aboutTestimonials
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="200"
      data-aos-once="true"
    />
    <aboutClients
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-delay="200"
      data-aos-once="true"
    />
    <faqs data-aos="fade-down" data-aos-duration="1300" data-aos-delay="300" data-aos-once="true" />
    <recentWork />
  </v-container>
</template>

<script>
import pageHeader from "~/components/global/pageHeader.vue";
import faqs from "~/components/global/faqs.vue";
import recentWork from "~/components/global/recentWork.vue";
// import sparklineHeader from '~/components/global/sparklineHeader.vue'
import aboutSplit from "~/components/about/aboutSplit";
import aboutSplitLeft from "~/components/about/aboutSplitLeft";
import aboutTestimonials from "~/components/about/aboutTestimonials.vue";
import aboutClients from "~/components/about/aboutClients.vue";

export default {
  data: () => ({
    structuredData: {
      "@context": "http://schema.org",
      "@type": "Organization",
      "url" : "https://silencekillsdesign.com",
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
        "contactPoint" : [
          { "@type" : "ContactPoint",
            "telephone" : "+1-406-579-1985",
            "contactType" : "customer service",
            "contactOption" : "TollFree",
            "areaServed" : "US"
          }
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
    }
  }),
  head: {
    title: "About Us",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "SilenceKillsDesign is a full-service digital agency specializing in multimedia marketing strategies. We offer services in brand management, web development, online marketing, and graphic design, along with many other services to help your local, small, or large business succeed."
      },
      {
        name: "keywords",
        content:
          "silencekillsdesign, cj williams, local seo bozeman, web designer bozeman"
      }
    ]
  },
  components: {
    pageHeader,
    aboutSplit,
    aboutSplitLeft,
    aboutTestimonials,
    aboutClients,
    faqs,
    recentWork
    // sparklineHeader
  }
};
</script>

<style>
</style>
