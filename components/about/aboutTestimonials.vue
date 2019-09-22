<template>
  <v-container fluid class="ma-0 pa-0">
    <!-- <v-parallax
      class="testimonial-parallax"
      height="550"
      cover
      :src="require('~/assets/img/backgrounds/speech-bubble-background.jpg')"
      dark
    > -->
    <v-img aspect-ratio="16/9" :src="require('~/assets/img/backgrounds/lavalamp.svg')">
      <v-carousel continuous cycle show-arrows-on-hover hide-delimiters class="testimonial-card">
        <v-carousel-item v-for="(review,i) in reviews" :key="i" transition="fade-transition" group itemprop="review" itemscope itemtype="http://schema.org/Review">
          <v-container fluid dark>
            <v-row class="xs-text-center fill-height" justify="center" align="center">
              <v-col cols="12" md="6" class="text-center">
                <v-avatar size="110" color="grey lighten-4" class="mb-4">
                  <v-img :src="require('~/assets/img/testimonials/'+review.avatar)" alt="avatar"></v-img>
                </v-avatar>
                <h4 class="title mb-2 white--text" itemprop="author">{{ review.name }}</h4>
                <h5 itemprop="name"
                  class="subheading amber--text font-weight-medium font-italic mb-4 hidden-sm-and-down"
                >{{ review.title }}</h5>
                <blockquote class=" white--text"
                  itemprop="description"
                  :class="{'title': $vuetify.breakpoint.smAndDown, 'headline': $vuetify.breakpoint.mdAndUp}"
                >{{ review.review }}</blockquote>
                <v-btn
                  class="mt-5"
                  large
                  outlined
                  color="white"
                  href="https://g.page/silencekillsdesign/review"
                  target="_blank"
                  rel="noopener"
                  title="Review on Google"
                >Leave a Review</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-img>
    <!-- </v-parallax> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      parallaxBG: "@/assets/img/backgrounds/speech-bubble-background.svg",
      reviews: [
        {
          avatar:
            "molly.jpg",
          name: "Molly",
          title:
            "Vice President Business Development & Contract Administration at Xtant Medical",
          review:
            "I am always thoroughly impressed with his creativity and the finished product. Even beyond his talent, CJ is professional, engaging, and fun to work with. If you have any branding, graphic design, digital marketing or web development needs, CJ is your guy!",
          rating: 2
        },
        {
          avatar:
            "zeb.jpg",
          name: "Zeb",
          title: "VP of R&D at Blackmore Sensors and Analytics, Inc.",
          review:
            "With CJ's help, the Bozeman Curling Club had an outstanding season growing our membership by 25% and more than doubling our season end financial balance over the year prior.",
          rating: 4.5
        },
        {
          avatar:
            "jenna.jpg",
          name: "Jenna",
          title: "Licensed Clinical Professional Counselor",
          review:
            "CJ is a dream designer for anyone who ever wanted a design layout that stands out from the rest. His work goes beyond the necessary into extremely well-thought, clean, memorable, beyond-creative design tailored to your marketing vision.",
          rating: 4.5
        },
        {
          avatar:
            "brett.jpg",
          name: "Brett",
          title: "Frontend Engineer at Theorem & Technical Expert at Thinkful",
          review:
            "CJ's understanding of the digital medium made the Bacterin.com redesign a great experience. He was also very attentive to the smallest details ensuring consistency in the design and user experience. I would highly recommend CJ.",
          rating: 4.5
        }
      ]
    };
  }
};
</script>



<style lang="scss" scope>
.testimonial-parallax {
  background-position: 0% 0%;
}
#testimonial-slider {
  .fade {
    &-enter-active,
    &-leave-active,
    &-leave-to {
      transition: 0.8s ease-out;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    &-enter,
    &-leave,
    &-leave-to {
      opacity: 0;
    }
  }
}
.testimonial-card {
  box-shadow: none !important;
}

.title {
  line-height: 1.7 !important;
  font-weight: 400;
}
</style>
