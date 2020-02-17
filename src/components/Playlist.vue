<template>
  <div class="mt-5">
    <div class="ml-3">
      <h3 class="font-weight-bold">Playlists:</h3>
      <div class="mt-4 text-black">
        <form @submit.prevent="addNewPlaylist()">
          <div class="mt-4 mb-3">
            <label
              for="new-playlist"
              class="text-black mr-2">
                New Playlist:
            </label>
            <input
              class="input-field"
              v-model="playlistName"
              placeholder="Music"
              required
            />
          </div>
          <button 
            type="submit"
            class="btn text-uppercase rounded-0 font-weight-bold my-4 button">
              Add Playlist
          </button>
        </form>
      </div>
    </div>
    <div class="text-black ml-3">
      <div v-if="playlists == ''">
        <p>No playlists yet!</p>
      </div>
      <div v-else>
        <h3 class="text-black">Select playlist to open:</h3>
        <ol>
          <li
            @click="openPlaylist(playlist.name)"
            v-for="playlist in playlists"
            :key="playlist.id"
          > {{ playlist.name }} </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Playlist",
  data() {
    return {
      playlistId: 0,
      playlistName: "",
      playlists: [],
      localStoragePlaylists: JSON.parse(localStorage.getItem('products')) || []
    }
  },
  mounted() {
    this.getAllPlaylists;
  },
  methods: {
    getAllPlaylists() {
      this.playlists = JSON.parse(localStorage.getItem("playlists")) || [];
    },
    addNewPlaylist() {
      let filteredPlaylist = this.localStoragePlaylists.find(playlist => { 
        playlist.name === this.playlistName 
      });
      if(!(filteredPlaylist) || filteredPlaylist == "") {
        this.localStoragePlaylists.push({
          id: this.playlistId++,
          name: this.playlistName,
          songs: []
        });
        localStorage.setItem("playlists", JSON.stringify(this.localStoragePlaylists));
        this.getAllPlaylists();
        this.resetInputField();
      } else {
        alert("You've already used that name. Please try another!")
      }
    },
    openPlaylist(playlistName) {
      this.$store.commit("setPlaylistName", playlistName);
    },
    resetInputField() {
      this.playlistName = "";
    }
  }
}
</script>

<style scoped>
  .btn {
    color: black;
    background-color: #FFE000;
    width: 150px;
    height: 50px;
  }

  ol li {
    cursor: pointer;
  }
</style>


