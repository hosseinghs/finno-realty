import { Signup, Verification } from '~/models/auth/sign-up'

export default {
  namespaced: true,

  state: () => ({
    step: 1,
    signup: new Signup(),
    verification: new Verification(),
  }),

  mutations: {
    SET_STEP(state, step) {
      state.step = step
    },
    UPDATE_SIGN_UP_STATE(state, { k, v }) {
      state.signup[k] = v
    },
  },

  actions: {
    updateStep({ commit }, step) {
      commit('SET_STEP', step)
    },

    updateSignupState({ commit }, { k, v }) {
      commit('UPDATE_SIGN_UP_STATE', { k, v })
    },
  },
}
