export default {
  namespaced: true,

  state: () => ({
    isModalVisible: false,
    isMobileSidebarVisible: false,
  }),

  mutations: {
    SET_MODAL_STATE(state, bool) {
      state.isModalVisible = bool
    },
    SET_MOBILE_SIDEBAR_STATE(state, bool) {
      state.isMobileSidebarVisible = bool
    },
  },

  actions: {
    setModalState({ commit }, bool) {
      commit('SET_MODAL_STATE', bool)
    },
    setMobileSidebarState({ commit }, bool) {
      commit('SET_MOBILE_SIDEBAR_STATE', bool)
    },
  },
}
