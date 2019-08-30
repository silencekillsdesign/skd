<template>
  <div>
    <pageHeader pageTitle="Services" pageSubtitle="You Dream It. We Do It." />
    <pageIntro
      introText="We offer a wide range of multimedia services for businesses of all sizes, in many industries. Expand your brand's reach and create lifetime relationships with loyal customers."
    ></pageIntro>
    <v-container grid-list-xl fill-height>
      <v-layout row wrap fill-height ma-4 id="main">
        <!-- <v-flex v-for="service in services" :key="service.title"> -->
        <v-flex xs12 md3 v-for="(service, i) in services" :key="i" justify-center>
          <v-card
            class="service-tile tile mx-auto text-center"
            dark
            color="blue accent-3"
            min-height="240"
            flat
            hover
            :to="service.serviceURL"
          >
            <v-icon size="72" class="ma-4 service-icon">{{ service.serviceIcon }}</v-icon>
            <v-card-text>
              <h2 class="mb-3">{{ service.serviceName }}</h2>
              <p class="mb-0">{{ service.serviceDesc }}</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <recentWork />
  </div>
</template>

<script>
//import components
import pageHeader from '~/components/global/pageHeader.vue'
import pageIntro from '~/components/global/pageIntro.vue'
import recentWork from '~/components/global/recentWork.vue'
//data import
// import sourceData from '@/data/data'

export default {
  components: {
    pageHeader,
    pageIntro,
    recentWork
  },
  head() {
    return {
      title: "Services",
      meta: [
        {
          name: "description",
          content:
            "Design. Branding. SEO. Web Development / Web Design. UX/UI Design. Email. Marketing. Audio/Visual. Screenprinting. All at affordable rates."
        },
        { name: "robots", content: "index, follow" },
      ]
    };
  },
  data: () => ({
    isHovering: false,
    services: [
      {
        serviceId: '1',
        serviceName: 'Web Development',
        serviceDesc:
          'Fast, well-designed websites that convert, delivered on time & within budget.',
        serviceIcon: 'mdi-code-tags',
        serviceButton: 'Learn More',
        serviceURL: '/services/webdevelopment'
      },
      {
        serviceId: '2',
        serviceName: 'Branding',
        serviceDesc:
          'We create consistent visual identification of your brand, service, or product.',
        serviceIcon: 'mdi-fingerprint',
        serviceButton: 'Learn More',
        serviceURL: '/services/branding'
      },
      {
        serviceId: '3',
        serviceName: 'SEO / SEM',
        serviceDesc:
          'Drive quality traffic to your site with expert digital marketing services.',
        serviceIcon: 'mdi-chess-knight',
        serviceButton: 'Learn More',
        serviceURL: '/services/seo'
      },
      {
        serviceId: '4',
        serviceName: 'UI/UX Design',
        serviceDesc:
          'Well-structured information architecture and logical user interfaces.',
        serviceIcon: 'mdi-monitor-cellphone-star',
        serviceButton: 'Learn More',
        serviceURL: '/services/ux'
      },
      {
        serviceId: '5',
        serviceName: 'Graphic Design',
        serviceDesc:
          'Digital & print design services from award-winning designers.',
        serviceIcon: 'mdi-palette',
        serviceButton: 'Learn More',
        serviceURL: '/services/design'
      },
      {
        serviceId: '6',
        serviceName: 'Audio / Visual',
        serviceDesc:
          'Immerse your customers with a brand-centered audio / visual experience.',
        serviceIcon: 'mdi-movie-roll',
        serviceButton: 'Learn More',
        serviceURL: '/services/av'
      },
      {
        serviceId: '7',
        serviceName: 'Screen Printing',
        serviceDesc:
          'Custom logowear and apparel design to show off your brand wherever you go.',
        serviceIcon: 'mdi-tshirt-crew',
        serviceButton: 'Learn More',
        serviceURL: '/services/screenprinting'
      },
      {
        serviceId: '8',
        serviceName: 'Email Marketing',
        serviceDesc:
          'Engaging campaigns with high open-rates and conversions.',
        serviceIcon: 'mdi-email',
        serviceButton: 'Learn More',
        serviceURL: '/services/email'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.service-tile {

  p {
    font-size: 1.125em;
    color: #eeeeee;
  }
  &:hover {
    background: #311b92;
    background-image: url(~@/assets/img/backgrounds/skdmatrix.svg);
    background-size: cover;
    transition: all 2s ease;
    .service-icon,
    h2 {
      color: #82b1ff;
    }
    p {
      color: #fff;
    }
  }
  .hovering {
    color: red;
  }
}
</style>
