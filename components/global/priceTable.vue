<template>
  <v-row>
    <v-flex
      xs12
      sm4
      md4
      lg4
      class="custom-box"
      v-for="(price, index) in prices"
      :key="index"
      v-bind:class="(index==2)?'third-box':''"
    >
      <v-card v-bind:class="[checkIfCenter(index)?'center-box':'']" :dark="checkIfCenter(index)">
        <v-card-title primary-title class="justify-center">
          <h2 class="text-xs-center">{{price.title}}</h2>
        </v-card-title>
        <v-card-text>
          <v-flex xs12>
            <h2 class="price text-xs-center">$100</h2>
            <div class="small-title text-xs-center">When Paid Quarterly</div>
          </v-flex>
          <v-layout row wrap v-for="(item, ind) in price.items" :key="ind">
            <v-flex xs9 sm9 mg9 lg9>
              <span class="feature-label">{{item.label}}</span>
            </v-flex>
            <v-flex xs4 sm3 mg3 lg3>
              <b :class="item.class">{{item.value}}</b>
            </v-flex>
          </v-layout>
        </v-card-text>
        <div style="text-align:center">
          <v-btn round v-bind:class="[checkIfCenter(index)?'custom-btn':'']">Buy Now</v-btn>
        </div>
      </v-card>
    </v-flex>
  </v-row>
</template>

<script>
export default {
data() {
  return {
      prices: [
      { title: 'Pricing Plan 1', price: 100,
       items: [
          {label: 'Feature Label 1', value:"YES", class: 'yes'},
          {label: 'Feature Label 2', value:"Monthly", class: 'monthly'},
          {label: 'Feature Label 3', value:"No", class: 'no'},
          {label: 'Feature Label 4', value:"YES", class: 'yes'},
          {label: 'Feature Label 5', value:"Monthly", class: 'monthly'},
          {label: 'Feature Label 6', value:"No", class: 'no'},
          {label: 'Feature Label 7', value:"Monthly", class: 'monthly'},
          {label: 'Feature Label 8', value:"No", class: 'no'},
        ] 
      },
      { title: 'Pricing Plan 2', price: 150,
       items: [
          {label: 'Feature Label 1', value:"YES", class: 'yes'},
          {label: 'Feature Label 2', value:"Monthly", class: 'monthly'},
          {label: 'Feature Label 3', value:"No", class: 'no'},
          {label: 'Feature Label 4', value:"YES", class: 'yes'},
          {label: 'Feature Label 5', value:"Monthly", class: 'monthly'},
          {label: 'Feature Label 6', value:"No", class: 'no'},
          {label: 'Feature Label 7', value:"Monthly", class: 'monthly'},
          {label: 'Feature Label 8', value:"No", class: 'no'},
        ] 
      },
      { title: 'Pricing Plan 3', price: 120,
       items: [
          {label: 'Feature Label 1', value:"YES", class: 'yes'},
          {label: 'Feature Label 2', value:"Monthly", class: 'monthly'},
          {label: 'Feature Label 3', value:"No", class: 'no'},
          {label: 'Feature Label 4', value:"YES", class: 'yes'},
          {label: 'Feature Label 5', value:"Monthly", class: 'monthly'},
          {label: 'Feature Label 6', value:"No", class: 'no'},
          {label: 'Feature Label 7', value:"Monthly", class: 'monthly'},
          {label: 'Feature Label 8', value:"No", class: 'no'},
        ] 
      },
      ],
    }
  }
}
</script>

<style>
</style>