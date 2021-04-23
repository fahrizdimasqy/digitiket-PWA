import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import "./plugins/vue-slick-carousel";
import App from "./App.vue";
// import VCalendar from "v-calendar";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// google maps
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDp3Ud3SixagW8bJOwtosy5bBMB5JRNS_k",
  },
});

// Vue.use(VCalendar, {
//   componentPrefix: "vc",
// });
