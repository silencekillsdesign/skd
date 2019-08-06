<template>
  <!-- background generated at https://www.svgbackgrounds.com -->
  <v-img
    :aspect-ratio="4/1"
    :src="require('~/assets/img/backgrounds/preety.svg')"
    class="blog-header"
  >
    <v-container fluid fill-height>
      <transition appear group name="bounce">
        <v-layout fill-height row wrap pa-4 mt-2 justify-center align-start class="white--text">
          <v-flex md7 pl-5>
            <v-layout row wrap>
              <h1
                class="blog-title white--text text-uppercase font-weight-bold"
                :class="{
          'mx-1 pt-2 px-1 display-1': $vuetify.breakpoint.smAndDown, 
          'px-4 pt-4 pb-1 display-3': $vuetify.breakpoint.mdAndUp}"
              >{{ blogTitle }}</h1>
            </v-layout>

            <v-layout row wrap my-4>
              <v-flex shrink mr-3>
                <v-icon color="white" medium mr-3>mdi-calendar</v-icon>August 15, 2019
              </v-flex>
              <v-flex shrink mr-3>
                <v-icon color="white" medium mr-2>mdi-account</v-icon>CJ Williams
              </v-flex>
              <v-flex shrink>
                <v-icon color="white" medium mr-2>mdi-tag</v-icon>Web Dev, Design
              </v-flex>
            </v-layout>
            <v-layout>
              <h4
              class="mt-2 text-left headline hidden-sm-and-down"
            >{{ blogSubtitle }}</h4>
            </v-layout>
          </v-flex>
          <v-flex md4 offset-md1>
            <v-img contain :src="require('~/assets/img/blog/content-planning.svg')"></v-img>
          </v-flex>
        </v-layout>
      </transition>
    </v-container>
  </v-img>
</template>

<script>
export default {
  props: {
    blogTitle: String,
    blogSubtitle: String,
    blogAuthor: String,
    blogDate: Date
  }
};
</script>

<style>
.blog-header {
  font-family: "Overpass" !important;
  background-color: #06103a;
  animation: waterfall 30s linear infinite;
}
.blog-title {
  font-family: "Overpass" !important;
  font-size: 1em;
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

.bounce-enter-active {
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
}
</style>
