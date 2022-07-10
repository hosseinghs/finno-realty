export default {
  namespaced: true,

  state: () => ({
    step: 1,
  }),

  mutations: {
    UPDATE_STEP(state, step) {
      state.step = step
    },
  },

  actions: {
    updateStep({ commit }, step) {
      commit('UPDATE_STEP', step)
    },
  },
}
