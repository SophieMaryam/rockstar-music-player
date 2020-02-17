import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import Vuex from "vuex";
import { router } from "./router/routes";
import { store } from "./store/store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(Vuex);
Vue.use(BootstrapVue);

library.add(faSearch);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
