<template>
  <v-layout ma-4 fill-height>
    <v-flex>
      <form netlify action="" method="post" name="contact-form">
        <h2 class="contact-form-header text-uppercase mb-4 blue--text accent-3">Drop us a Line</h2>
        <v-text-field
          v-model="name"
          v-validate="'required'"
          type="text"
          name="cf_name"
          :error-messages="errors.collect('name')"
          label="Name"
          data-vv-name="name"
          required
          class="md6"
        ></v-text-field>
        <v-text-field
          v-model="email"
          v-validate="'required|email'"
          type="email"
          name="cf_email"
          :error-messages="errors.collect('email')"
          label="E-mail"
          data-vv-name="email"
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
        <v-select
          :projects="[
            'Website',
            'App',
            'SEO',
            'Branding',
            'Marketing',
            'Design',
            'Other'
          ]"
          label="Project Type"
          name="cf_project"
          v-model="projects"
          :menu-props="{ maxHeight: 900, overflowY: true }"
        />
        <v-textarea
          v-model="message"
          name="cf_message"
          label="Message"
          value
          required
          hint="Please let us know what we can do to help build your brand."
        ></v-textarea>

        <!-- <v-btn class="mx-0 my-4" type="submit" @click="submit">Send It</v-btn> -->
        <v-btn type="submit" class="my-4" outlined large color="green accent-4">
          <v-icon class="mr-2">mdi-near-me</v-icon> Send It
        </v-btn>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)

export default {
  $_veeValidate: {
    validator: 'new'
  },

  data: () => ({
    name: '',
    email: '',
    phone: '',
    projects: '',
    message: '',
    dictionary: {
      attributes: {
        email: 'E-mail Address'
        // custom attributes
      },
      custom: {
        name: {
          required: () => 'Name can not be empty'
          // custom messages
        }
      }
    }
  }),

  mounted() {
    this.$validator.localize('en', this.dictionary)
  },

  methods: {
    submit() {
      this.$validator.validateAll()
    },
    clear() {
      this.name = ''
      this.email = ''
      this.$validator.reset()
    }
  }
}
</script>

<style lang="scss" scope>
.contact-form-header {
  font-size: 2.5em;
}
</style>
