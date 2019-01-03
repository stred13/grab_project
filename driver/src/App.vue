<template>
  <div id="app">
    <GmapMap
      v-bind:center="myLatlng"
      v-bind:zoom="17"
      map-type-id="terrain"
      style="width: 600px; height: 700px;"
      @click="herbesin"
    >
      <GmapMarker
        v-bind:key="index"
        v-for="(m, index) in markers"
        v-bind:position="m.position"
        v-bind:clickable="true"
      />
    </GmapMap>
  </div>
</template>
<script>
export default {
  data() {
    return {
      center: { lat: 10.762681, lng: 106.681175 },
      markers: [
        {
          position: { lat: 10.762681, lng: 106.681175 }
        }
      ],
      myLatlng: { lat: 10.762681, lng: 106.681175 }
    };
  },
  methods: {
    herbesin(evt) {
      // console.log(this.myLatlng.lat);
      var R = 6371e3; // metres
      var φ1 = (this.myLatlng.lat * Math.PI) / 180;
      var φ2 = (evt.latLng.lat() * Math.PI) / 180;
      var Δφ = ((evt.latLng.lat() - this.myLatlng.lat) * Math.PI) / 180;
      var Δλ = ((evt.latLng.lng() - this.myLatlng.lng) * Math.PI) / 180;

      var a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      var d = R * c;
      console.log("Khoảng cách :" + d);
      //console.log("Khoảng cách 1:" + evt.latLng);
      if (d < 100) {
        this.myLatlng.lat = evt.latLng.lat();
        this.myLatlng.lng = evt.latLng.lng();
        this.markers[0].position.lat = evt.latLng.lat();
        this.markers[0].position.lng = evt.latLng.lng();
        //console.log(this.markers[0].position.lat
      }
      //console.log("Khoảng cách 2:" + this.markers[0].lat);
    }
  }
};
</script>

<style>
</style>