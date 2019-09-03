<template>
  <v-container id="homeServices" fluid dark ma-0 class="indigo accent-3 quantam-bg">
    <v-row class="mb-4" justify="center">
      <v-col cols="12" md="6" dark class="text-center pt-5 ">
        <h2
          class="font-weight-bold text-uppercase yellow--text mb-4 display-3"
          :class="{'pr-0': $vuetify.breakpoint.smAndDown, 'pr-5 boxed-in': $vuetify.breakpoint.mdAndUp}"
        >{{ servicesTitle }}</h2>
        <p class="headline white--text">{{ servicesIntro }}</p>
      </v-col>
    </v-row>
    <v-container grid-list-xs>
      <v-row align-space-between justify-space-between fill-height row wrap grid-list-md>
        <!-- TODO: create component for individual services, populate this with services fields (icon, title, short desc) in cms -->
        <v-col cols="12" md="4" class="text-center pa-3" v-for="(service, i) in services" :key="i">
          <v-card dark color="transparent" class="service-card px-2 py-5">
            <v-icon size="72" class="ma-5 pt-5 service-icon">{{ service.serviceIcon }}</v-icon>
            <v-card-title justify-center class="service-title">
              <v-col>
                <h4
                  class="headline font-weight-bold text-uppercase text-center"
                >{{ service.serviceName }}</h4>
              </v-col>
            </v-card-title>
            <v-card-text class="mb-0">
              <p class="subheading text-center">{{ service.serviceDesc }}</p>
            </v-card-text>

            <v-card-actions class="justify-center mb-5">
              <v-btn class="mb-5" dark color="pink accent-3" nuxt link exact :to="service.serviceURL">{{ service.serviceButton }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row my-5 py-5 justify-center align-center>
        <v-col grow justify-center align-center class="text-center">
          <v-btn
            x-large
            depressed
            outlined
            dark
            color="yellow accent-3"
            to="/services"
          >View All Services</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      servicesTitle: "Services",
      servicesIntro:
        "Save time and resources dealing with multiple contacts creating your brand assets. We offer a single point-of-contact to manage all of your digital and tangible assets.",
      services: [
        {
          serviceId: "1",
          serviceName: "Web Development",
          serviceDesc:
            "Fast, well-designed websites that convert, delivered on time & within budget.",
          serviceIcon: "mdi-code-tags",
          serviceButton: "Web Dev Services",
          serviceURL: "/services/webdevelopment"
        },
        {
          serviceId: "2",
          serviceName: "Branding",
          serviceDesc:
            "We create consistent visual identification of your brand, service, or product.",
          serviceIcon: "mdi-fingerprint",
          serviceButton: "Branding Services",
          serviceURL: "/services/branding"
        },
        {
          serviceId: "3",
          serviceName: "SEO / SEM",
          serviceDesc:
            "Drive quality traffic to your site with expert digital marketing services.",
          serviceIcon: "mdi-chess-knight",
          serviceButton: "SEO Services",
          serviceURL: "/services/seo/"
        },
        {
          serviceId: "45",
          serviceName: "UI/UX Design",
          serviceDesc:
            "Well-structured information architecture and logical user interfaces.",
          serviceIcon: "mdi-monitor-cellphone-star",
          serviceButton: "UX/UI Services",
          serviceURL: "/services/ux"
        },
        {
          serviceId: "5",
          serviceName: "Graphic Design",
          serviceDesc:
            "Digital & print design services from award-winning designers.",
          serviceIcon: "mdi-palette",
          serviceButton: "Design Services",
          serviceURL: "/services/design"
        },
        {
          serviceId: "6",
          serviceName: "Audio / Visual",
          serviceDesc:
            "Immerse your customers with a brand-centered audio / visual experience.",
          serviceIcon: "mdi-movie-roll",
          serviceButton: "A/V Services",
          serviceURL: "/services/av"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.service-card:hover {
  .service-title,
  .service-icon {
    color: #ffff00; //yellow accent-2
  }
  background: rgba(0, 0, 0, 0.2) !important;
}
.quantam-bg {
  background-color: #651fff;
  background-position: 50% 50%;
  animation: slinky 10s linear infinite;
  background-image: url(~@/assets/img/backgrounds/shutter.svg);
  background-size: cover;
}
</style>
