import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import app from './modules/app';
import settings from './modules/settings';
import user from './modules/user';
import menu from './modules/menu';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    menu
  },
  getters,
  actions,
  mutations,
  state: {
    server: 'http://localhost:8080/',
    permisos: [{ show: false }, { show: false }],
    usuario: Object
  }
});

export default store;
