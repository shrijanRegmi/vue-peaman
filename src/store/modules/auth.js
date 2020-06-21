const firebase = require('@/configs/firebase_config');
import router from '@/router';

const state = {
  user: {},
  errMessage: null,
};

const getters = {
  user: (state) => state.user,
  errMessage: (state) => state.errMessage,
};

const actions = {
  async loginUser({ commit }, cred) {
    await firebase.auth
      .signInWithEmailAndPassword(cred.email, cred.password)
      .then((res) => {
        commit('setUser', res.user);
        commit('setError', null);
        if (router.currentRoute !== '/home') {
          router.push('/home');
        }
      })
      .catch((err) => {
        console.log(err);
        commit('setError', err.message);
      });
  },
  async registerUser({ commit }, cred) {
    await firebase.auth
      .createUserWithEmailAndPassword(cred.email, cred.password)
      .then((res) => {
        commit('setUser', res.user);
        commit('setError', null);
        if (router.currentRoute !== '/home') {
          router.push('/home');
        }
      })
      .catch((err) => {
        console.log(err);
        commit('setError', err.message);
      });
  },
  async logOutUser({ commit }) {
    await firebase.auth.signOut().then(() => {
      if (router.currentRoute !== '/') {
        router.push('/');
      }
      commit('setUser', {});
    });
  },
};

const mutations = {
  setUser: (state, user) => {
    state.user = user;
  },
  setError: (state, err) => (state.errMessage = err),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
