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

<script>
//import axios from 'axios';
import listtable from "../components/ListTable.vue";
//import forminput from '../components/formInput.vue'
export default {
  name: "identifier",
  components: {
    listtable
  },
  data () {
    return {
      center: { lat: 10.0, lng: 10.0 },
      markers: [
        { position: { lat: 10.0, lng: 10.0 } },
        { position: { lat: 10.0, lng: 11.0 } },
      ]
    }
  },
  /*data(){
        return{
            rtdata:''
        };
    },
    created() {
    this.getdataSv();
  },
  methods: {
    getdt() {
      console.log("con");
      //this.list.push(this.laddres);
    },
    getdataSv() {
      var es = new EventSource("http://localhost:3000/receivers/shortadded");
      if (typeof EventSource === "undefined") {
        console.log("NOT SUPPORT");
        return;
      }
      
      es.addEventListener("SHORT_ADDED", event => {
        console.log(event.data);
        this.rtdata=event.data;
      });
    }
  },*/
};
</script>
