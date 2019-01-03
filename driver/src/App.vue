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
