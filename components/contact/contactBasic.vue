<template>
  <!-- <v-layout row wrap>
    <v-flex> -->
      <v-form method="POST" action="/thankyou" data-netlify="true" name="contact-form-noval" data-netlify-recaptcha="true">
       <input type="hidden" name="contact-form-noval" value="contact-form-noval" /> <!-- this hidden field is for netifly -->
        <h2 class="contact-form-header text-uppercase mb-4 blue--text accent-3">Drop us a Line</h2>
        <v-text-field
          type="text"
          name="cf_name"
          label="Name"
          required
          class="md6"
        ></v-text-field>
        <v-text-field
          type="email"
          name="cf_email"
          label="E-mail"
          required
          class="md6"
        ></v-text-field>
        <v-text-field
        v-model="phone"
          type="tel"
          name="cf_phone"
          label="Phone"
          class="md6"
        ></v-text-field>
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
          name="project[]"
          v-model="projects"
          :menu-props="{ maxHeight: 900, overflowY: true }"
        />
        <v-textarea
          name="cf_message"
          label="Message"
          required
          hint="Please let us know what we can do to help build your brand."
        ></v-textarea>
        <div data-netlify-recaptcha="true"></div>

        <!-- <v-btn class="mx-0 my-4" type="submit" @click="submit">Send It</v-btn> -->
        <v-btn type="submit" class="my-4" outlined large color="green accent-4">
          <v-icon class="mr-2">mdi-near-me</v-icon> Send It
        </v-btn>
      </v-form>
    <!-- </v-flex>
  </v-layout> -->
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
.contact-form-header {
  font-size: 2.5em;
}
</style>
