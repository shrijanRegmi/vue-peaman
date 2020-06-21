import Vue from 'vue';
import Vuex from 'vuex';
import home_navigation from './modules/home_navigation';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home_navigation,
    auth,
  },
});
