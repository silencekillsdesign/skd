<template>
  <v-container fluid class="pa-0">
    <v-container class="pa-4">
      <v-row class="my-5 py-5" justify="center">
        <h2
          :class="{'display-1': $vuetify.breakpoint.smAndDown, 'display-3': $vuetify.breakpoint.mdAndUp}"
          class="text-uppercase font-weight-bold indigo--text text--accent-3"
          data-aos-delay="200"
        >Some of our awesome clients</h2>
      </v-row>
    </v-container>

    <v-img :src="require('~/assets/img/backgrounds/bubbleup.svg')">
      <v-container fluid class="fill-height bottom-gradient">
        <v-container>
          <v-row pa-0 my-2 justify-space-around align-center class="white--text">
            <v-col
              v-for="(client, i) in clients"
              :key="i"
              cols="6"
              md="4"
              class="text-center px-3 py-2 client-logo"
            >
              <v-tooltip color="deep-purple" top>
                <template v-slot:activator="{ on }">
                  <v-img
                    v-on="on"
                    :href="client.url"
                    target="_blank"
                    :src=" require('@/assets/img/clients/'+client.logo)"
                  ></v-img>
                </template>
                <span>{{client.client}}</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-img>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      clients: [
        {
          client: "Bozeman Curling Club",
          logo: "bozeman-curling-club--logo-silencekillsdesign.svg",
          url: "https://bozemancurlingclub.com"
        },
        {
          client: "MudPaint",
          logo: "mudpaint--logo-silencekillsdesign.svg",
          url: "https://mudpaint.com"
        },
        {
          client: "Xtant Medical",
          logo: "xtant-medical--logo-silencekillsdesign.svg",
          url: "https://xtantmedical.com"
        },
        {
          client: "Riot Gear Clothing",
          logo: "riotgear--logo-silencekillsdesign.svg",
          url: "https://runneredq.com"
        },
        {
          client: "Gallatin Insulation",
          logo: "gallatin-insulation--logo-silencekillsdesign.svg",
          url:
            "https://www.truteam.com/branches/mt/gallatin/gallatin-insulation-belgrade/"
        },
        {
          client: "RunnerEDQ",
          logo: "runneredq--logo-silencekillsdesign.svg",
          url: "https://runneredq.com"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.client-bg {
  background-size: 70%;
}
.client-logo {
  cursor: pointer;
}
</style>
