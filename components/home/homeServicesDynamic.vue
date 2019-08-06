<template>
  <v-container
    id="homeServices"
    fluid
    dark
    ma-0
    class="indigo accent-3 quantam-bg"
  >
    <v-layout justify-center mb-4>
      <v-flex dark pt-5 xs6 class="text-center">
        <h2
          class="display-3 font-weight-bold text-uppercase yellow--text boxed-in mb-4"
        >{{ service.servicesTitle }}</h2>
        <v-divider color="yellow" class="mt-4 mb-4"></v-divider>
        <p class="headline white--text">{{ servicesIntro }}</p>
      </v-flex>
    </v-layout>
    <v-container>
      <v-layout align-space-between justify-space-between fill-height row wrap grid-list-md>
        <!-- TODO: create component for individual services, populate this with services fields (icon, title, short desc) in cms -->
        <v-flex v-for="serviceId in servicesBasic.services" :key="serviceId"  xs12 md4 pa-3 class="text-center">
          <v-card
            lazy
            align-center
            justify-center
            dark
            color="transparent"
            px-2
            py-5
            class="service-card"
            :to="service.serviceURL"

          >
            <v-icon size="72" class="ma-5 pt-5 service-icon">{{ service.serviceIcon }}</v-icon>
            <v-card-title justify-center class="service-title">
              <v-flex>
                <h4
                  class="headline font-weight-bold text-uppercase text-center"
                >{{ service.serviceTitle }}</h4>
              </v-flex>
            </v-card-title>
            <v-card-text class="mb-0">
              <p class="subheading text-center">{{  }}</p> <!--serviceDesc -->
            </v-card-text>

            <v-card-actions class="justify-center mb-5">
              <v-btn
                class="mb-5"
                dark
                color="pink accent-3"
                :to="service.serviceURL"
              >{{ service.serviceButton }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout my-5 py-5 justify-center align-center>
        <v-flex grow justify-center align-center class="text-center">
          <v-btn
            x-large
            depressed
            outlined
            dark
            color="yellow accent-3"
            to="/services"
          >View All Services</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import sourceData from '~/data/servicesBasic'
export default {
  props: {
      id: {
        required: true,
        type: String
      }
    },
  data() {
    return {
      servicesTitle: "Services",
      servicesIntro:
        "Save time and resources dealing with multiple contacts creating your brand assets. We offer a single point-of-contact to manage all of your digital and tangible assets.",
      services: sourceData.serviceId
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
