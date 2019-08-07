<template>
  <v-container fluid pa-0>
    <pageHeader pageTitle="Contact Us" pageSubtitle="Call Us. Write Us." />
    <pageIntro
      introText="We are located in Bozeman, MT, and can often be found working from one of Bozeman's local coffee shops. We're happy to meet via web conferance, or in person in the Bozeman area."
    />
    <v-container>
      <v-layout row wrap fill-height align-space-between id="main">
        <v-flex
          xs12
          md4
          fill-height
          data-aos="fade-left"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="600"
        >
          <contactCard />
        </v-flex>
        <v-flex
          xs12
          md7
          offset-md1
          data-aos="fade-right"
          data-aos-easing="ease-in-out-back"
          data-aos-duration="600"
        >
          <!-- <contactBasic/> -->
          <form
            method="POST"
            action="/thankYou"
            data-netlify="true"
            name="contact-form-noval"
          >
            <input type="hidden" name="form-name" value="contact-form-noval" />
            <!-- this hidden field is for netifly -->
            <h2 class="contact-form-header text-uppercase mb-4 blue--text accent-3">Drop us a Line</h2>
            <v-text-field v-model="name" type="text" name="cf_name" label="Name" required class="md6"></v-text-field>
            <v-text-field v-model="email"  type="email" name="cf_email" label="E-mail" required class="md6"></v-text-field>
            <v-text-field v-model="phone" type="tel" name="cf_phone" label="Phone" class="md6"></v-text-field>
            <!-- must use 'items' or v-model in script-->
            <v-select
              :items="[
            'Website',
            'App',
            'SEO',
            'Branding',
            'Marketing',
            'Design',
            'Other'
          ]"
              label="Project Type"
              name="[]"
              v-model="project"
              :menu-props="{ maxHeight: 900, overflowY: true }"
            />
            <v-textarea
              name="cf_message"
              v-model="message" 
              label="Message"
              required
              hint="Please let us know what we can do to help build your brand."
            ></v-textarea>

            <!-- <v-btn class="mx-0 my-4" type="submit" @click="submit">Send It</v-btn> -->
            <v-btn type="submit" class="my-4" outlined large color="green accent-4">
              <v-icon class="mr-2">mdi-near-me</v-icon>Send It
            </v-btn>
          </form>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import pageHeader from "~/components/global/pageHeader.vue";
import pageIntro from "~/components/global/pageIntro.vue";
import contactCard from "~/components/contact/contactCard.vue";
// import contactForm from "~/components/contact/contactForm.vue";
// import contactBasic from "~/components/contact/contactBasic.vue";
export default {
  components: {
    pageHeader,
    pageIntro,
    contactCard,
    // contactForm,
    // contactBasic
  },
  data: () => ({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  })
}
</script>

<style>
</style>
