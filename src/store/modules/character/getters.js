// getters
const getters = {
  GET_CHARACTERS: (state) => state.data.characters.map((value, index) => ({
    ...value,
    cover: `${value.thumbnail.path}.${value.thumbnail.extension}`,
    uuid: `${value.id}-${index}`,
  })),
  GET_PARAMS: (state) => state.data.params,
};

export default getters;
