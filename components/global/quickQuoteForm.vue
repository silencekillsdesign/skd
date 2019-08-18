<template>
  <v-card v-model="quickQuote">
    <v-card-title>
      <span class="headline">Need Some Numbers?</span>
    </v-card-title>
    <v-card-text>
      <v-form tag="form" netlify action method="post" data-netlify-recaptcha="true">
        <v-container fluid grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6>
              <v-text-field name="qq_name" label="Name*" required />
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field name="qq_company" label="Company" />
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field name="qq_email" label="Email*" type="email" required />
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field name="qq_phone" label="Phone" type="phone" />
            </v-flex>
            <v-flex xs12>
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
                name="qq_project"
                :menu-props="{ maxHeight: 900, overflowY: true }"
              />
            </v-flex>
            <v-flex xs12>
              <v-textarea
                auto-grow
                name="qq_message"
                label="Project Details"
                value
                required
                rows="3"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn dark color="red darken-1" flat @click="quickQuote = false">Close</v-btn>
      <v-spacer />
      <v-btn dark color="blue darken-1" flat @click="submit" type="submit">Send It</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      quickQuote: false
    };
  }
};
</script>

<style>
</style>
