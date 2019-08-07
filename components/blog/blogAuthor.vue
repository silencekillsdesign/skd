<template>
  <v-card>
    <v-layout row wrap justify-center align-center pa-4>
      <v-flex xs12 md2 pa-3>
        <v-img :src="require('~/assets/branding/cj-williams--avatar.svg')"></v-img>
      </v-flex>
      <v-flex xs12 md10>
        <v-card-title class="author-name font-weight-bold blue--text text--accent-3">CJ Williams</v-card-title>
        <v-card-text class="author-role font-italic deep-purple--text">Developer, Designer, Marketer</v-card-text>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout row wrap justify-start align-start px-4 py-0>
      <v-flex>
        <v-card-text class="author-bio">
          <p>Hey, I'm CJ! I am an experienced marketing specialist, designer, and front-end developer from Bozeman, MT. I have managed marketing, web development, and branding for several medium and large companies.. I'm fluent in Adobe Creative Suite/Creative Cloud, Google Analytics, AdWords, and Search Console, as well as front-end programming languages. CJ is the only person working at SilenceKillsDesign, but likes to say 'we' and 'us' to sound fancy.</p>
          <p>I am passionate about my goals. Most of all, I enjoy making people laugh and feel that 'youthful spirit, old soul' would summarize me well. I enjoy staying active, cartoons, old video games, and performing stand-up comedy.</p>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="indigo" href="mailto:cj@silencekillsdesign.com">Shoot Me an Email</v-btn>
        </v-card-actions>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
