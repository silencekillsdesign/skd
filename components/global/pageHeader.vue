<template>
  <!-- background generated at https://www.svgbackgrounds.com -->

  <!-- <v-img :aspect-ratio="3/1" :src="require('~/assets/img/backgrounds/lavalamp.svg')" class="page-header"> -->
  <!-- <v-img :aspect-ratio="3/1" :src="require('~/assets/img/backgrounds/waveheader.svg')" class="page-header"> -->
  <!-- <v-img :aspect-ratio="3/1" :src="require('~/assets/img/backgrounds/waveheader.svg')" class="page-header"> -->
  <!-- <v-img :aspect-ratio="3/1" :src="require('~/assets/img/backgrounds/waveheader.svg')" class="page-header"> -->
  <!-- <v-img :aspect-ratio="3/1" :src="require('~/assets/img/backgrounds/waveheader.svg')" class="page-header"> -->
  <v-img
    :aspect-ratio="5/1"
    :src="require('~/assets/img/backgrounds/polyworm.svg')"
    class="page-header"
  >
    <v-container class="fill-height bottom-gradient">
      <!-- <transition appear name="bounce"> -->
        <v-layout pa-4 mt-2 justify-center align-center class="white--text">
          <v-flex shrink>
            <h1
              class="page-title white--text text-uppercase font-weight-bold"
              :class="{
          'mx-1 pt-2 px-1 display-2': $vuetify.breakpoint.smAndDown, 
          'px-4 pt-4 pb-1 display-4': $vuetify.breakpoint.mdAndUp}"
            >{{ pageTitle }}</h1>
            <h4
              class="mt-2 text-xs-right headline text-uppercase hidden-sm-and-down"
            >{{ pageSubtitle }}</h4>
          </v-flex>
        </v-layout>
      <!-- </transition> -->
    </v-container>
  </v-img>
</template>

<script>
export default {
  props: {
    pageTitle: String,
    pageSubtitle: String,
    titleColor: String
  }
};
</script>

<style scoped>
.page-header {
  font-family: "Overpass" !important;
  background-color: #06103A;
  /* background-image: url(~@/assets/img/backgrounds/wavy-bg.svg); */
  /* background-size: 25%;
  background-repeat: repeat; */
  animation: waterfall 30s linear infinite;
}
.page-title {
  font-family: "Overpass" !important;
  border: 0.125em solid;
  line-height: 1;
}

@keyframes waterfall {
  0% {
    background-position: -100% -100%;
  }

  100% {
    background-position: 100% 100%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* .bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
} */
</style>
