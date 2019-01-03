<template>
  <div class="container-fluid mt-3">
    <div class="row">
      <div class="col-6">
        <div id="map">
          <GmapMap
            ref="xyz"
            v-bind:center="myLatlng"
            v-bind:zoom="17"
            map-type-id="terrain"
            style="width: 100%; height: 600px;"
            @click="moveMarkers"
          >
            <GmapMarker
              v-bind:key="index"
              v-for="(m, index) in markers"
              v-bind:position="m.position"
              v-bind:clickable="true"
            />
          </GmapMap>
        </div>

        <div class="control-left-wrapper">
          <div :class="online">
            <div @click="statusOnline">Online</div>
          </div>
          <div :class="offline">
            <div @click="statusOffline">Offline</div>
          </div>
          <div class="start">
            <div @click="startGoing">start</div>
          </div>
          <div class="end">
            <div @click="EndGoing">end</div>
          </div>
        </div>
      </div>
      <div class="col-5">
        <form>
          <div class="card text-left p-2">
            <b-form-group
              horizontal
              breakpoint="lg"
              label="Shipping Address"
              label-size="lg"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-form-group
                horizontal
                label="Street:"
                label-class="text-sm-right"
                label-for="nestedStreet"
              >
                <b-form-input id="nestedStreet"></b-form-input>
              </b-form-group>
              <b-form-group
                horizontal
                label="City:"
                label-class="text-sm-right"
                label-for="nestedCity"
              >
                <b-form-input id="nestedCity"></b-form-input>
              </b-form-group>
            </b-form-group>
            <div class="form-group">
              <label for="sdt">Số điện thoại</label>
              <input
                type="text"
                v-model="guest.sdt"
                class="form-control"
                id="sdt"
                required
                placeholder="Số điện thoại"
              >
            </div>
            <div class="form-group">
              <label for="addStart">Địa chỉ đón khách</label>
              <input
                type="text"
                v-model="guest.shortadd"
                class="form-control"
                required
                id="addStart"
                placeholder="Địa chỉ đón khách"
              >
            </div>
            <div class="form-group">
              <label for="note">Ghi chú</label>
              <input
                type="text"
                v-model="guest.note"
                class="form-control"
                id="note"
                placeholder="Ghi chú"
              >
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPgoNwcVbT9ALPvVs1Ze5SAFwyVr1FT_g&libraries=places"
      async
      defer
    ></script>
<script>
export default {
  data() {
    return {
      center: { lat: 10.762681, lng: 106.681175 },
      markers: [
        {
          position: { lat: 10.762681, lng: 106.681175 }
        },
        {
          position: { lat: 10.792382, lng: 106.713905 }
        }
      ],
      myLatlng: { lat: 10.762681, lng: 106.681175 },
      cost: 10000,
      checkStart: false,
      countKm: 0,
      guest: {
        name: "",
        sdt: "",
        shortadd: "",
        fulladd: "",
        note: ""
      },
      online: "online",
      offline: "offlined",
      directionsService: "",
      directionsDisplay: ""
    };
  },
  methods: {
    countDistance(evt) {
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
      return d;
    },
    moveMarkers(evt) {
      this.calculateAndDisplayRoute();
      // console.log(this.myLatlng.lat);
      var d = this.countDistance(evt);
      console.log("Khoảng cách :" + d);
      //console.log("Khoảng cách 1:" + evt.latLng);
      if (d < 100) {
        this.myLatlng.lat = evt.latLng.lat();
        this.myLatlng.lng = evt.latLng.lng();
        this.markers[0].position.lat = evt.latLng.lat();
        this.markers[0].position.lng = evt.latLng.lng();
        //tính tiền
        if (this.checkStart === true) {
          this.countKm += d;
        }
      }
    },
    startGoing() {
      this.checkStart = true;
    },
    EndGoing() {
      this.checkStart = false;
      console.log("cout km +" + this.countKm);
      console.log("tien = " + (this.countKm * this.cost) / 1000);
      this.countKm = 0;
    },
    statusOnline() {
      this.online = "onlined";
      this.offline = "offline";
    },
    statusOffline() {
      this.online = "online";
      this.offline = "offlined";
    },
    calculateAndDisplayRoute() {
      this.directionsService = new google.maps.DirectionsService();
      this.directionsDisplay = new google.maps.DirectionsRenderer();
      this.directionsDisplay.setMap(this.$refs.xyz.$mapObject);
      var vm = this;
      vm.directionsService.route(
        {
          origin: { lat: 10.762681, lng: 106.681175 },
          destination: { lat: 10.792382, lng: 106.713905 },
          travelMode: "DRIVING"
        },
        function(response, status) {
          if (status === "OK") {
            vm.directionsDisplay.setDirections(response);
          } else {
            console.log("Directions request failed due to " + status);
          }
        }
      );
    }
  }
};
</script>

<style>
#map {
  width: 90%;
  padding: 1%;
  float: left;
}
.control-left-wrapper {
  z-index: 0;
  position: absolute;
  right: 12%;
  top: 27%;
  cursor: pointer;
  margin: 25px 10px 0px;
}

.control-left-wrapper .start,
.control-left-wrapper .online,
.control-left-wrapper .offline,
.control-left-wrapper .end {
  background: white;
  text-align: center;
  font-size: 23px;
  font-weight: bold;
  color: grey;
  margin-bottom: 15%;
  padding: 7%;
}
.control-left-wrapper .started,
.control-left-wrapper .onlined,
.control-left-wrapper .offlined,
.control-left-wrapper .ended {
  background: blue;
  text-align: center;
  font-size: 23px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 15%;
  padding: 7%;
}
</style>
