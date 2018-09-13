import Vue from 'vue'

import Vuex from 'vuex'
Vue.use(Vuex)


/* 实例化Vuex.store */
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state, n) {
      state.count += n
    },
    reduce(state) {
      state.count--
    }
  },
  getters: {
    count: state => {
      return state.count += 100
    }
  },
  actions: {
    addAction(context) {
      context.commit('add', 10);
      setTimeout(()=>{
        context.commit('reduce')
      },3000)
      console.log('我比reduce先执行')
    },
    reduceAction({
      commit
    }) {
      commit('reduce');
    }
  }
})
export default store;