<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">
      <span class="text-muted font-weight-light">Charts /</span> Vue2 Google Maps
    </h4>

    <hr class="border-light container-m--x mt-0 mb-5">
    <gmap-autocomplete
        placeholder="Enter Address"
        selectFirstOnEnter
        :options="{bounds: {north: 45.724982, south: 45.372209, east: -73.349995, west: -74.012399},
        }"
        @place_changed="complete"/>
    <gmap-map
      :center="{lat: -12.043333, lng: -77.028333}"
      :zoom="7"
      style="height: 400px;width: 100%" />
    <p>{{place}}</p>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB8DHacr9qgj9bVn_NKpk-hJb2Zrs9OyrY',
    libraries: 'places'
  }
})

export default {
  name: 'charts-vue2-google-maps',
  metaInfo: {
    title: 'Map-tester'
  },
  data: function () {
      return {
          place: null,
          address_components: null,
          formatted_addresss: null,
          geometry: null
      }
  },

  methods: {
      complete: function (value) {
          this.place = value;
        //   this.address_components = value.address_components;
        //   this.formatted_addresss = value.formatted_addresss;
        //   this.geometry = value.geometry;
        
      },
  }
}
</script>
