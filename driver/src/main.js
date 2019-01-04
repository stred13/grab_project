import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Bootstrapvue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(Bootstrapvue);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAPgoNwcVbT9ALPvVs1Ze5SAFwyVr1FT_g",
    libraries: "places"
  },
  
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
