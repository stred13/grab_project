<template>
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
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
            <tr v-for="(a,index) in list" :key="index">
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
</template>