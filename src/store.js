import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Collapse: true,
  },
  mutations: {
    changecollapse(state) {
      state.Collapse = !state.Collapse
    }
  },
  actions: {
    changecollapsefoot(context) {  //同上注释
      context.commit('changecollapse');
    }
  },
  getters: {
    isCollapse() {
      return state.Collapse
    }
  }
});
