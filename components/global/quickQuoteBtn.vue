<template>
  <v-flex>
    <!-- TODO: make color, and text dynamic w props -->
    <v-btn large dark class="mx-0" :color="btnColor" @click.stop="quickQuote = true">{{ btnText }}</v-btn>

    <!-- TODO: convert form into reusable component -->
    <v-dialog v-model="quickQuote" persistent max-width="600px">
      <form name="quickQuote" netlify action="" method="post" data-netlify-recaptcha="true">
        <v-card>
          <v-card-title>
            <span class="headline">This form doesn't Work Yet. Sorry.</span>
          </v-card-title>
          <v-card-text>
            <p>Please use our main <a href="/contact">contact form</a> to get in touch while we are getting everything else wired up.</p>
            <v-form tag="form">
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
            <v-btn depressed disabled>Send It</v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
  </v-flex>
</template>

<script>
export default {
  props: {
    btnText: String,
    btnColor: String
  },
  data() {
    return {
      quickQuote: false,
    }
  }
}
</script>

<style>
</style>
