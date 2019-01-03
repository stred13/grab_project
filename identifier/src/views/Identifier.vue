<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-4">
        <GmapMap
          v-bind:center="{lat:10.801988, lng:106.618493}"
          v-bind:zoom="16"
          map-type-id="terrain"
          style="width: 500px; height: 300px"
        >
          <GmapMarker
            v-bind:key="index"
            v-for="(m, index) in markers"
            v-bind:position="m.position"
            v-bind:clickable="true"
          />
        </GmapMap>
      </div>
      <div class="col-8">
        <listtable />
      </div>
    </div>
  </div>
</template>


