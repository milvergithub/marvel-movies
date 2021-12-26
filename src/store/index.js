import Vue from 'vue';
import Vuex from 'vuex';
import character from './modules/character';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
  },
  mutations: {
    SET_GLOBAL_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
  },
  getters: {
    getGlobalError: (state) => state.error,
  },
  modules: {
    character,
  },
});
