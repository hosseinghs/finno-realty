export default {
  namespaced: true,

  state: () => ({
    step: 1,
  }),

  mutations: {
    SET_STEP(state, step) {
      state.step = step
    },
  },

  actions: {
    updateStep({ commit }, step) {
      commit('SET_STEP', step)
    },
  },
}
