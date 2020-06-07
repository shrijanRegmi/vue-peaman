const state = {
  navigationItem: 'HOME',
};

const getters = {
  navigationItem: (state) => state.navigationItem,
};

const actions = {
  changeNavigationItem({ commit }, newVal) {
    commit('changeNavigationItem', newVal);
  },
};

const mutations = {
  changeNavigationItem: (state, newVal) => (state.navigationItem = newVal),
};

export default { state, getters, actions, mutations };
