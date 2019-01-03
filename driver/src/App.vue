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
  }
};
</script>

<style>
</style>