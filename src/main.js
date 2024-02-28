import Vue from "vue";
import App from "./App.vue";

import "./assets/normalize.css";
import "./assets/style.css";

Vue.config.devtools = true;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
