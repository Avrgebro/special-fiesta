import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import app from './modules/app';
import settings from './modules/settings';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user
  },
  getters,
  actions,
  mutations,
  state: {
    server: 'http://ec2-52-91-98-76.compute-1.amazonaws.com:8080/',
    usuario: Object,
    token: Object,
    formularios: Object,
    newForm: Object,
    censos: Object,
    newCenso: Object,
    familias: Object
  }
});

export default store;
