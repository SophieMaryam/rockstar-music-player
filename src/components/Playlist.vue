<template>
  <div class="mt-5">
    <div class="ml-3">
      <h3 class="font-weight-bold">Playlists:</h3>
      <div class="mt-4 text-white">
        <form @submit.prevent="addNewPlaylist()">
          <div class="mt-4 mb-3">
            <label
              for="new-playlist"
              class="text-white mr-2">
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
    <div class="text-white ml-3">
      <div v-if="this.allPlaylists == ''">
        <p>No playlists yet!</p>
      </div>
      <div v-else>
        <h3 class="text-white">Select playlist to open:</h3>
        <ol>
          <li
            @click="openPlaylistSongs(playlist.name)"
            v-for="playlist in allPlaylists"
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
      allPlaylists: [],
      playlistId: 0,
      playlistName: "",
      allPlaylistNames: []
    }
  },
  methods: {
    addNewPlaylist() {
      if(!(this.allPlaylistNames.includes(this.playlistName)) || this.allPlaylistNames == "") {
        this.allPlaylists.push({
          id: this.playlistId++,
          name: this.playlistName,
          songs: []
        });
        this.filterPlaylists();
        this.resetInputField();
      } else {
        alert("You've already used that name. Please try another!")
      }
    },
    openPlaylistSongs(playlistName) {
      this.$store.commit("setPlaylistName", playlistName);
      this.$store.commit("setPlaylist", this.allPlaylists);
    },
    resetInputField() {
      this.playlistName = "";
    },
    filterPlaylists() {
      this.allPlaylists.filter(playlist => this.allPlaylistNames.push(playlist.name));
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


