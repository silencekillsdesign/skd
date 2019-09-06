// src/plugins/vuetify.js

// import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  // icons: {
  //   iconfont: "mdi" // default - only for display purposes
  // },
  theme: {
    options: {
      minifyTheme: function(css) {
        return process.env.NODE_ENV === "production"
          ? css.replace(/[\r\n|\r|\n]/g, "")
          : css;
      },
      themeCache
    }
  }
});