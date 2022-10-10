const user = {
  namespaced: true,

  state: {
    user: null,
    isLogin: true,
  },

  getters: {},

  mutations: {
    SET_USER(state, data) {
      state.user = data;
      console.log("yes");
    },

    SET_ISLOGIN(state, data) {
      state.isLogin = data;
    },
  },

  actions: {},
};

export default user;
