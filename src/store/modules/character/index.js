import actions from '@/store/modules/character/actions';
import getters from '@/store/modules/character/getters';
import mutations from '@/store/modules/character/mutations';

const state = {
  data: {
    params: {
      limit: 20,
      offset: 0,
    },
    characters: [],
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
