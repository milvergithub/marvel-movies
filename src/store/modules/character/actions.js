// actions
import characterApi from '@/api/characterApi';

const actions = {
  async GET_CHARACTERS_ACTION({ commit }, payload = {}) {
    try {
      const response = await characterApi.getCharactersApi(payload);
      commit('ADD_CHARACTERS', response.data);
    } catch (e) {
      commit('SET_GLOBAL_ERROR', e);
    }
  },
  CLEAR_CHARACTERS_ACTION({ commit }) {
    commit('CLEAR_CHARACTERS');
  },
  EDIT_CHARACTER_ACTION({ commit }, payload = {}) {
    commit('EDIT_CHARACTER', payload);
  },
};

export default actions;
