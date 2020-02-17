<template>
  <div class="flex mt-5">
    <div>
      <h3 class="playlist-name font-weight-bold">{{ getPlaylistName }}</h3>
      <h5 class="text-white font-weight-bold">
        Select a song to add it to your playlist!
      </h5>
      <div class="mt-4 mb-3 text-black">
        <label for="new-song" class="text-black mr-2">
          Add a Song:
        </label>
        <input
          v-model="input"
          class="input-field"
          placeholder="i.e. Mr. Brightside"
          required
        />
      </div>
      <div v-if="input" class="mt-2 text-white">
        <div>
          <ul>
            <li
              v-for="song in filterAllSongs"
              :key="song.id"
              @click="addSongToPlaylist(song)"
            >
              {{ song.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="margins">
      <h3 class="font-weight-bold">Your Songs:</h3>
      <div class="d-flex">
        <ul>
          <li
            class="mt-5"
            v-for="(addedSong, index) in selectedPlaylistSongs"
            :key="addedSong.id"
          >
            {{ addedSong.name }}
            <button
              class="btn remove-button ml-3 text-uppercase rounded-0 font-weight-bold right"
              @click="selectedPlaylistSongs.splice(index, 1)"
            >
              Remove
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MusicJSON from "../common/musicList.json";

export default {
  name: "Songs",
  data() {
    return {
      allSongs: MusicJSON.songs,
      input: this.$store.getters.input,
      playlistName: "",
      selectedPlaylistSongs: []
    };
  },
  mounted() {
    this.input = this.$store.getters.input;
  },
  computed: {
    filterAllSongs() {
      return this.allSongs.filter(song => {
        return song.name.toLowerCase().includes(this.input.toLowerCase());
      });
    },
    setInput: {
      get() {
        return this.$store.state.input;
      },
      set() {
        this.$store.commit("setInputValue");
      }
    },
    getPlaylistName() {
      this.playlistName = this.$store.getters.playlistName;
      return this.playlistName;
    }
  },
  methods: {
    addSongToPlaylist(selectedSong) {
      let playlists = JSON.parse(localStorage.getItem("playlists")) || [];
      let filteredPlaylist = playlists.find(playlist => {
        return playlist.name === this.$store.getters.playlistName;
      });
      if (filteredPlaylist) {
        filteredPlaylist.songs.push({ name: selectedSong });
        localStorage.setItem("playlists", JSON.stringify(playlists));
      }
      this.resetInputField();
      this.getSelectedPlaylistSongs(filteredPlaylist);
    },
    getSelectedPlaylistSongs(filteredPlaylist) {
      if (filteredPlaylist.name === this.$store.getters.playlistName) {
        this.selectedPlaylistSongs = filteredPlaylist.songs.map(
          song => song.name
        );
        return this.selectedPlaylistSongs;
      }
    },
    removeSong(index) {
      this.selectedPlaylistSongs.splice(index, 1);
      localStorage.setItem("playlists", JSON.stringify(playlists));
    },
    filteredPlaylist() {
      let playlists = JSON.parse(localStorage.getItem("playlist")) || [];
      let filteredPlaylist = playlists.find(playlist => {
        return playlist.name === this.playlistName;
      });
    },
    resetInputField() {
      this.input = "";
    }
  }
};
</script>

<style scoped>
/* .remove-button {
  color: white;
  background-color: black;
  width: 100px;
  font-size: 10px;
} */

.margins {
  margin-left: 50px;
}

@media only screen and (max-width: 1199px) {
  .margins {
    margin-left: 0px;
    margin-top: 100px;
  }
}

.right {
  float: right;
}
</style>
