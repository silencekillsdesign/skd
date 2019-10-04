<template>
  <!-- background generated at https://www.svgbackgrounds.com -->

  <v-img
    :aspect-ratio="5/1"
    :src="require('~/assets/img/backgrounds/polyworm.svg')"
    class="page-header"
  >
    <v-container class="fill-height bottom-gradient">
      <!-- <transition appear name="bounce"> -->
      <v-row class="pa-4 mt-2 white--text" justify="center" align="center"
        itemscope
        :itemtype="schemaType"
      >
        <v-flex shrink>
          <h1
            :itemprop="schemaItem"
            class="page-title white--text text-uppercase font-weight-bold"
            :class="{
          'mx-1 pt-2 pa-1 display-2': $vuetify.breakpoint.smAndDown, 
          'px-4 pt-4 pa-1 display-4 animated slideInDown ': $vuetify.breakpoint.mdAndUp}"
          >{{ pageTitle }}</h1>
          <h4
            class="mt-2 text-xs-right headline text-uppercase hidden-sm-and-down animated slideInDown delay-0.5s"
          >{{ pageSubtitle }}</h4>
        </v-flex>
      </v-row>
      <!-- </transition> -->
    </v-container>
  </v-img>
</template>

<script>
export default {
  props: {
    pageTitle: String,
    pageSubtitle: String,
    titleColor: String,
    schemaType: String,
    schemaItem: String
  }
};
</script>

<style scoped>
.page-header {
  background-color: #06103a;
}
.page-title {
  font-family: "Overpass" !important;
  border: 0.125em solid;
  padding: 0.75em 0.25em 0.125em;
  line-height: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
