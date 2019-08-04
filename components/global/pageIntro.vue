<template>
  <v-container>
    <transition appear class="animated" name="zoomInDown">
      <v-layout my-5 column>
        <v-card flat dark class="page-intro-bg mt-4 blue">
          <v-img
            class="page-intro-bg"
            :aspect-ratio="7/1"
            :src="require('~/assets/img/backgrounds/shutter.svg')"
          >
            <v-container fill-height fluid>
              <v-layout align-center justify-center>
                <v-card-text class="text-center pa-2 pb-0">
                  <p class="text-center headline">{{ introText }}</p>
                </v-card-text>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-actions
            class="indigo accent-3 align-center justify-center"
            link
            @click="$vuetify.goTo('#main', options)"
          >
            <v-icon large>mdi-arrow-down-circle</v-icon>
          </v-card-actions>
        </v-card>
      </v-layout>
    </transition>
  </v-container>
</template>

<script>
export default {
  props: {
    introText: String
  }
};
</script>

<style>
.page-intro-bg {
  background-image: "~/assets/img/backgrounds/digibox.svg";
  background-size: 25%;
  background-repeat: repeat;
}

@keyframes tada {
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

.tada {
  animation-name: tada;
}
</style>
