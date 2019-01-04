<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-sm-4">
        <form>
          <div class="card text-left p-2">
            <div class="form-group">
              <label for="hoten">Họ tên</label>
              <input
                type="text"
                v-model="guest.name"
                class="form-control"
                id="hoten"
                placeholder="Nhập Họ Tên"
              >
            </div>
            <div class="form-group">
              <label for="sdt">Số điện thoại</label>
              <input
                type="text"
                v-model="guest.sdt"
                class="form-control"
                id="sdt"
                placeholder="Số điện thoại"
              >
            </div>

            <div class="form-group">
              <label for="addStart">Địa chỉ đón khách</label>
              <input
                type="text"
                v-model="guest.shortadd"
                class="form-control"
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
            <button
              type="submit"
              class="btn btn-primary"
              @click="senddata"
            >Submit</button>
          </div>
        </form>
      </div>
      <div class="col-sm-8">
        <div class="container-fluid">
          <div class="row justify-content-end mt-2">
            <div class="d-flex justify-content-end">
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                >
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >Search</button>
              </form>
            </div>
          </div>
          <div class="row mt-2 justify-content-left">
            <div class="col">
              <table class="table">
                <thead class="thead-blue">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên khách hàng</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Địa chỉ đón</th>
                    <th scope="col">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(a,index) in list"
                    :key="index"
                  >
                    <th scope="row">#</th>
                    <td>{{a.name}}</td>
                    <td>{{a.sdt}}</td>
                    <td>{{a.shortadd}}</td>
                    <td>{{a.note}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "receivers",
  data () {
    return {
      guest: {
        name: "",
        sdt: "",
        shortadd: "",
        fulladd: "",
        note: "",
        dateRe: ""
      },
      list: []
    };
  },
  mounted () {
    var self = this;
    axios
      .get("http://localhost:3000/receivers/list")
      .then(res => {
        self.list = res.data;
        //console.log(self.list);
      })
      .catch(err => {
        console.log(err);
      });
    //this.getdataSv();
  },
  methods: {
    senddata (evt) {
      var self = this;
      var today = new Date();
      /* var day = today.getDate() < 10 ? ('0'+today.getDate()) : today.getDate();
       var month = today.getMonth()<10?('0'+today.getMonth()):today.getMonth();
       var year = today.getFullYear();
       var hours = today.getHours()<10?('0'+today.getHours()):today.getHours();
       var minutes = today.getMinutes()<10?('0'+today.getMinutes()):today.getMinutes();
       var seconds = today.getSeconds()<10?('0'+today.getSeconds()):today.getSeconds();
       self.guest.date = day + "-" + month + "-" + year + ' ' + hours+":"+minutes+':'+seconds;*/
      self.guest.dateRe = today;
      //console.log(typeof( self.guest.date));
      evt.preventDefault();
      axios
        .post("http://localhost:3000/receivers/add", self.guest)
        .then(res => {
          self.list.push(res.data);
          console.log(res.data);
        })
        .catch(err => {
          console.log("err " + err);
        });
    }
  }
};
</script>

