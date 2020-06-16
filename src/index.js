import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/css/reset.css";
import "@/assets/css/global.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.config.performance = true;
Vue.config.devtools = true;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("id") !== null) {
      next({ name: "pokedex" });
    } else {
      next(); // go to wherever I'm going
    }
  } else {
    next(); // does not require auth, make sure to always call next()!
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
