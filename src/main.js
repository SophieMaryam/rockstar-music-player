import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import Vuex from 'vuex'
import { router } from "./router/routes";
import { store } from "./store/store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/App.css";


Vue.use(Vuex)
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
