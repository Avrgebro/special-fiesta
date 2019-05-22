import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    authenticated: localStorage.getItem("Auth"),
    user: JSON.parse(localStorage.getItem("User"))
  },
  getters: {
    isAuth: state => {
      return state.authenticated;
    }
  }
});
export default store;
