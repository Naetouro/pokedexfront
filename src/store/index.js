import Vue from "vue";
import Vuex from "vuex";
import { VuexPersistence } from "vuex-persist";

Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    isLogged: false
  },
  mutations: {
    changeLogged: (state, data) => (state.isLogged = data)
  },
  getters: {
    selectLogged: state => state.isLogged
  },
  actions: {},
  modules: {},
  plugins: [vuexLocal.plugin]
});
