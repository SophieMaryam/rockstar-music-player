<template>
  <div>
    <h1 class="text-center text-uppercase font-weight-bold mt-5 text-white">
      {{ artistName }}
    </h1>
    <div class="col-6 all-songs">
      <h3 class="font-weight-bold">Songs:</h3>
      <table>
        <tr class="text-black" v-for="song in getAllArtistSongs" :key="song.id">
          {{
            song.name
          }}
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import MusicJSON from "../common/musicList.json";

export default {
  name: "Artist",
  data() {
    return {
      data: MusicJSON,
      artistName: this.$store.getters.artist,
      allSongs: []
    };
  },
  mounted() {
    this.getAllSongs();
  },
  computed: {
    getAllArtistSongs() {
      return this.allSongs.filter(song => song.artist === this.artistName);
    }
  },
  methods: {
    getAllSongs() {
      this.allSongs = this.data.songs;
    }
  }
};
</script>

<style scoped>
.all-songs {
  margin-top: 100px;
}
</style>
