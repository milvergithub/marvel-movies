// mutations
const mutations = {
  ADD_CHARACTERS(state, payload) {
    const result = state.data.characters;
    result.push(...payload.data.results);
    state.data.characters = result;
  },
  CLEAR_CHARACTERS(state) {
    state.data.characters = [];
  },
};

export default mutations;
