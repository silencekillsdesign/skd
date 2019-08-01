<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text"
      height="200px"
      src="http://www.montana.edu/marketing/_ldp/.private_ldp/a3955/production/master/7e3d3cf0-eae8-4ca6-b415-c84648a5c8dd.jpg"
    >
      <v-card-title class="align-end fill-height">Welcome to Bozeman</v-card-title>
    </v-img>

    <v-card-text>
      <v-simple-table>
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Calories</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-simple-table>
    </v-card-text>

    <!-- <v-card-actions>
      <v-btn
        text
        color="orange"
      >
        Share
      </v-btn>
      <v-btn
        text
        color="orange"
      >
        Explore
      </v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
