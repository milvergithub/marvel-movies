// getters
const getters = {
  GET_CHARACTERS: (state) => state.data.characters.map((value) => ({
    ...value,
    cover: `${value.thumbnail.path}.${value.thumbnail.extension}`,
  })),
  GET_PARAMS: (state) => state.data.params,
};

export default getters;
