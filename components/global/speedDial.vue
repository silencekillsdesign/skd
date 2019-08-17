<template>
  <v-speed-dial
    v-model="fab"
    fixed
    :top="top"
    :bottom="bottom"
    :right="right"
    :left="left"
    :direction="direction"
    :open-on-hover="hover"
    :transition="transition"
  >
    <template v-slot:activator>
      <v-btn v-model="fab" color="blue darken-2" dark fab>
        <v-icon v-if="fab">close</v-icon>
        <v-icon v-else>mdi-chat</v-icon>
      </v-btn>
    </template>
    <v-btn fab dark small color="blue" href="https://facebook.com/silencekillsdesign" target="_blank">
      <v-icon>mdi-chat</v-icon>
    </v-btn>
    <v-btn fab dark small color="green" href="tel:4065791985">
      <v-icon>mdi-phone</v-icon>
    </v-btn>
    <v-btn fab dark small color="red" href="mailto:cj@silencekillsdesign.com">
      <v-icon>mdi-email</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  data: () => ({
    direction: "top",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "slide-y-reverse-transition"
  }),

  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "mdi-phone" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    }
  },

  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    }
  }
};
</script>

<style>
</style>
