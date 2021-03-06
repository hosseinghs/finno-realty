import { Notif } from '~/models/notif'
export default {
  namespaced: true,

  state: () => ({
    isVisible: false,
    notif: new Notif(),
    timer: 5000,
  }),

  mutations: {
    SET_IS_VISIBLE(state, isVisible) {
      state.isVisible = isVisible
    },
    SET_NOTIF(state, notifConfig) {
      Object.assign(state.notif, notifConfig)
    },
    SET_TIMER(state, timer) {
      state.timer = timer
    },
  },

  actions: {
    notify({ commit }, { config, timer }) {
      if (timer === 0) return
      commit('SET_NOTIF', config)
      commit('SET_TIMER', timer)
      commit('SET_IS_VISIBLE', true)
      if (timer === -1) return
      setTimeout(() => {
        commit('SET_IS_VISIBLE', false)
      }, timer)
    },

    setNotifState({ commit }, bool) {
      commit('SET_IS_VISIBLE', bool)
    },

    showSuccess({ dispatch }, { title, timer }) {
      title = title || 'عملیات با موفقیت انجام شد'
      timer = timer === undefined ? 5000 : timer
      dispatch('notify', {
        config: { color: 'notif-success', title },
        timer,
      })
    },

    showError({ dispatch }, { title, timer }) {
      title = title || 'خطایی رخ داده است. مجدد تلاش کنید.'
      timer = timer === undefined ? 5000 : timer
      dispatch('notify', {
        config: { color: 'notif-error', title },
        timer,
      })
    },
  },
}
