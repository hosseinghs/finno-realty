export default {
  namespaced: true,

  state: () => ({
    isModalVisible: false,
    isMobileSidebarVisible: false,
    isDropdownVisible: false,
  }),

  mutations: {
    SET_MODAL_STATE(state, bool) {
      state.isModalVisible = bool
    },
    SET_MOBILE_SIDEBAR_STATE(state, bool) {
      state.isMobileSidebarVisible = bool
    },
    SET_DROPDOWN_STATE(state, bool) {
      state.isDropdownVisible = bool
    },
  },

  actions: {
    setModalState({ commit }, bool) {
      commit('SET_MODAL_STATE', bool)
    },
    setMobileSidebarState({ commit }, bool) {
      commit('SET_MOBILE_SIDEBAR_STATE', bool)
    },
    setDropdownState({ commit }, bool) {
      commit('SET_DROPDOWN_STATE', bool)
    },
  },
}
