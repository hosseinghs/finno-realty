export default {
  namespaced: true,

  state: () => ({
    isModalVisible: false,
    isMobileSidebarVisible: false,
    isDropdownVisible: false,
    userRoles: [
      {
        id: 1,
        title: 'مدیر مجتمع',
      },
      {
        id: 2,
        title: 'مالک',
      },
      {
        id: 3,
        title: 'مستاجر',
      },
      {
        id: 4,
        title: 'لاگین کرده',
      },
      {
        id: 5,
        title: 'کاربر عادی',
      },
    ],
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
