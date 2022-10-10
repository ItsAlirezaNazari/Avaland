import $axios from "@/plugins/axios";

const musics = {
  namespaced: true,

  state: {
    playing_music: {},
    top_musics: [],
    new_musics: [],
  },

  getters: {},

  mutations: {
    SET_PLAYING_MUSIC(state, data) {
      state.playing_music = data;
    },
    SET_TOP_MUSICS(state, data) {
      state.top_musics = data;
    },
    SET_NEW_MUSICS(state, data) {
      state.new_musics = data;
    },
  },

  actions: {
    async getTopMusics({ commit }) {
      try {
        const response = await $axios.get("/top-musics");
        commit("SET_TOP_MUSICS", response.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    },

    async getNewMusics({ commit }) {
      try {
        const response = await $axios.get("/new-musics");
        commit("SET_NEW_MUSICS", response.data);
      } catch (error) {
        console.log(error.response.data.message);
      }
    },
  },
};

export default musics;
