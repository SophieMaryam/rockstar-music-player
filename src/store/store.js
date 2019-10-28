import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    artist: "",
    playlistName: "",
    allPlaylists: [],
    input: ""
  },
  mutations: {
    setChosenArtist(state, artist) {
      state.artist = artist;
    },
    setPlaylistName(state, playlistName) {
      state.playlistName = playlistName;
    },
    setPlaylist(state, allPlaylists) {
      state.allPlaylists = allPlaylists;
    },
    setInputValue(state) {
      state.input = "";
    }
  },
  getters: {
    artist: state => {
      return state.artist;
    },
    playlistName: state => {
      return state.playlistName;
    },
    allPlaylists: state => {
      return state.allPlaylists;
    },
    input: state => {
      return state.input;
    }
  }
})