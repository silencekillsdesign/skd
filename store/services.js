import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    services: [
      {
        serviceId: "1",
        serviceName: "Web Design",
        serviceDesc:
          "Fast, well-designed websites that convert, delivered on time & within budget.",
        serviceIcon: "mdi-code-tags",
        serviceButton: "Learn More",
        serviceURL: "/services/webdesign"
      },
      {
        serviceId: "2",
        serviceName: "Branding",
        serviceDesc:
          "We create consistent visual identification of your brand, service, or product.",
        serviceIcon: "mdi-fingerprint",
        serviceButton: "Learn More",
        serviceURL: "/services/branding"
      },
      {
        serviceId: "3",
        serviceName: "SEO / SEM",
        serviceDesc:
          "Drive quality traffic to your site with expert digital marketing services.",
        serviceIcon: "mdi-chess-knight",
        serviceButton: "Learn More",
        serviceURL: "/services/seo"
      },
      {
        serviceId: "4",
        serviceName: "UI/UX Design",
        serviceDesc:
          "Well-structured information architecture and logical user interfaces.",
        serviceIcon: "mdi-monitor-cellphone-star",
        serviceButton: "Learn More",
        serviceURL: "/services/ux"
      },
      {
        serviceId: "5",
        serviceName: "Graphic Design",
        serviceDesc:
          "Digital & print design services from award-winning designers.",
        serviceIcon: "mdi-palette",
        serviceButton: "Learn More",
        serviceURL: "/services/design"
      },
      {
        serviceId: "6",
        serviceName: "Audio / Visual",
        serviceDesc:
          "Immerse your customers with a brand-centered audio / visual experience.",
        serviceIcon: "mdi-movie-roll",
        serviceButton: "Learn More",
        serviceURL: "/services/av"
      },
      {
        serviceId: "7",
        serviceName: "Screen Printing",
        serviceDesc:
          "Custom logowear and apparel design to show off your brand wherever you go.",
        serviceIcon: "mdi-tshirt-crew",
        serviceButton: "Learn More",
        serviceURL: "/services/screenprinting"
      },
      {
        serviceId: "8",
        serviceName: "Email Marketing",
        serviceDesc: "Engaging campaigns with high open-rates and conversions.",
        serviceIcon: "mdi-email",
        serviceButton: "Learn More",
        serviceURL: "/services/email"
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
