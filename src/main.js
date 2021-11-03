import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import '@/assets/scss/norm.css'
import '@/assets/scss/main.scss'

import * as moment from 'moment';
import 'moment/locale/ru';
Vue.prototype.$moment = moment;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
