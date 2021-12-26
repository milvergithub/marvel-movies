// mutations
const mutations = {
  ADD_CHARACTERS(state, payload) {
    const result = state.data.characters;
    result.push(...payload.data.results);
    state.data.characters = result.map((value, index) => ({
      ...value,
      uuid: `${value.id}-${index}`,
    }));
  },
  CLEAR_CHARACTERS(state) {
    state.data.characters = [];
  },
  EDIT_CHARACTER(state, payload) {
    const characters = [...state.data.characters];
    const index = characters.findIndex((value) => value.uuid === payload.uuid);
    characters[index] = payload;
    state.data.characters = characters;
  },
};

export default mutations;
