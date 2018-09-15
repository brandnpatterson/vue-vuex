import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comments: [
      {
        id: 0,
        value: 'hello'
      }
    ]
  },
  mutations: {},
  actions: {}
});
