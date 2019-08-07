<template>
  <v-container justify-center mb-5>
    <!-- section header -->
    <v-container>
      <v-layout row wrap mb-5 py-5 justify-center>
        <h2
          class="display-3 text-uppercase font-weight-bold indigo--text text--accent-3"
          data-aos-delay="200"
        >Common Questions</h2>
      </v-layout>
    </v-container>

    <v-layout row wrap justify-center>
      <v-flex md8 xs12 md ma-3>
        <v-expansion-panels dark>
          <v-expansion-panel
            active-class="faq-open"
            v-for="(faq, i) in faqs"
            :key="i"
            class="blue accent-4 mt-1"
          >
            <v-expansion-panel-header ripple class="subtitle-1 font-weight-bold">{{ faq.faqQ}}</v-expansion-panel-header>
            <v-expansion-panel-content class="pa-3 pr-5">
              <v-layout row wrap>{{ faq.faqA }}</v-layout>
              <v-layout row wrap>
                <v-btn
                  v-if="faqs.faqButtonLink !== null"
                  outlined
                  dark
                  color="cyan accent-2 "
                  class="mt-3"
                  :to="faq.faqButtonLink"
                >{{ faq.faqButtonText }}</v-btn>
              </v-layout>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      myObject: null,
      faqs: [
        {
          faqQ: "How much does a logo typically cost?",
          faqA:
            "Logo packages start at $400, and go up to $5,000. The more direction you have, the easier the rocess goes. We'll need a little more info on your brand before we can give an exact estimate.",
          faqButtonText: "Get a Logo Quote",
          faqButtonLink: "contact",
          faqCategories: ["branding"],
          faqId: 1,
          faqIcon: "mdi-help"
        },
        {
          faqQ: "Do you outsource any of your clients' work?",
          faqA:
            "Currently, we do everything in house. However, we do have a network of developers to call on if the project scope becomes too large.",
          faqButtonText: "View Portfolio",
          faqButtonLink: "portfolio",
          faqCategories: ["web"],
          faqId: 2,
          faqIcon: "mdi-help"
        },
        {
          faqQ: "How much does a website cost?",
          faqA:
            "There are too many factors in creating a website to give a generic number here. However, a static 4-page website (home, about, services, contact) typically runs about $1200 - $1500. ",
          faqButtonText: "Get a Website Quote",
          faqButtonLink: "contact",
          faqCategories: ["web"],
          faqId: 3,
          faqIcon: "mdi-help"
        },
        {
          faqQ: "Do you work with local businesses?",
          faqA:
            "Our Bozeman roots make us a great fit for working with local Montana businesses. We also work with small- to medium-sized businesses across the US and Canada",
          faqButtonText: "View Portfolio",
          faqButtonLink: "portfolio",
          faqCategories: ["marketing"],
          faqId: 4,
          faqIcon: "mdi-help"
        },
        {
          faqQ: "Do you work with WordPress sites?",
          faqA:
            "Yes, we work with WordPress sites, but that is not all we do. WordPress is very flexible, but often ends up very bloated - affecting load times. We make technology recommendations based on a project's scope and scale.",
          faqButtonText: "View Web Services",
          faqButtonLink: "services/webdevelopment",
          faqCategories: ["web"],
          faqId: 5,
          faqIcon: "mdi-help"
        },
        {
          faqQ: "Can I do my own SEO?",
          faqA:
            "You sure can. We are even happy to help train you on best practices. However, technical SEO can be very tedious and time consuming. We can build custom SEO packages to suit your needs and budget, saving you the hassle.",
          faqCategoriesegories: ["marketing"],
          faqButtonText: "View SEO Services",
          faqButtonLink: "services/seo",
          faqId: 6,
          faqIcon: "mdi-help"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.faq-open {
  .subtitle-1 {
    font-weight: 900;
    color: #18ffff;
  }
}
</style>