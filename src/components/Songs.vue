<template>
  <div class="flex mt-5 fullcontainer">
    <div>
      <h3 class="font-weight-bold"> {{ getPlaylistName }}</h3>
      <h5 class="text-white font-weight-bold">Select a song to add it to your playlist!</h5>
      <div class="mt-4 mb-3 text-white">
            <label
              for="new-song"
              class="text-white mr-2">
                Add a Song:
            </label>
            <input
              class="input-field"
              v-model="search"
              placeholder="i.e. Mr. Brightside"
              required
            >
      </div>
      <div 
        v-if="search != ''"
        class="mt-2 text-white"
      >
        <div>
          <ul>
            <li
              class=""
              @click="addSelectedSongsToPlaylist(song.name, song.id)"
              v-for="song in filterAllSongs"
              :key="song.id"
            >
              {{ song.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="margins">
      <h3 class="font-weight-bold">Your Songs:</h3>
      <ul>
        <li
          class="text-white mt-2"
          v-for="(addedSong, index) in getSelectedPlaylistSongs"
          :key="addedSong.id"
        >
          {{ addedSong.name }}
          <button 
            class="btn remove-button ml-3 text-uppercase rounded-0 font-weight-bold right" @click="listOfSongs.splice(index, 1)">
              Remove
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RockstarJson from "../common/rockstars.json";

export default {
  name: "Songs",
  data() {
    return {
      data: RockstarJson,
      allSongs: [],
      search: "",
      playlistName: "",
      allPlaylists: this.$store.getters.allPlaylists,
      listOfSongs: [],
      nameOfPlaylist: ""
    };
  },
  mounted() {
    this.getAllSongs();
  },
  computed: {
    filterAllSongs() {
      return this.allSongs.filter(song => {
        return song.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    getPlaylistName() {
      this.playlistName = this.$store.getters.playlistName;
      return this.playlistName;
    },
    getAllPlaylists() {
      return this.$store.getters.allPlaylists;
    },
    getSelectedPlaylistSongs() {
     return this.listOfSongs.filter(findSong => {
        if (this.selectedPlaylist === this.playlistName) {
          return findSong;
        }
      });
    }
  },
  methods: {
    getAllSongs() {
      this.allSongs = this.data.songs;
    },
    addSelectedSongsToPlaylist(songName, songId) {
      return this.allPlaylists.filter(value => {
        if (value.name === this.playlistName) {
          value.song.push({
            songId: songId,
            name: songName
          });
          this.updateDataValues(value);
          this.resetInputField();
        }
      });
    },
    tryThis() {
      if (value.name.length === 1) {
        
      }
    },
    updateDataValues(value) {
      this.selectedPlaylist = value.name;
      this.listOfSongs = value.song;
    },
    resetInputField() {
      this.search = "";
    }
  }
}
</script>

<style scoped>
  .remove-button {
    color: black;
    background-color: #FFE000;
    width: 100px;
    font-size: 10px;
  }

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


