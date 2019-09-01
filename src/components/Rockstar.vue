<template>
  <div class="container">
    <div class="text-center">
      <img alt="Rockstar logo" class="img-fluid rockstar-logo" src="../assets/rockstarlogo.png">
      <h1 class="mt-3 font-weight-bold text-white">Search</h1>
      <div class="offset-3">
  `     <div class="search-engine">
          <input 
            class="col-8 col-md-8"
            v-model="search"
            placeholder="i.e. Bob Dylan" />
        </div>
        <div
          v-if="search != ''"
          class="mt-2"
        >
          <li
            class="text-left" @click="chosenArtist(artist.name)" v-for="artist in filterAllArtists" :key="artist.id">
            {{ artist.name }} 
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RockstarJson from "../common/rockstars.json";

export default {
  name: 'Rockstar',
  data() {
    return {
      data: RockstarJson,
      search: "",
      allArtists: [],
      list: []
    }
  },
  mounted() {
    this.getAllArtists();
  },
  computed: {
    filterAllArtists() {
      return this.allArtists.filter(artist => {
        return artist.name.toLowerCase().includes(this.search.toLowerCase());
      })
    }
  },
  methods: {
    getAllArtists() {
      this.allArtists = this.data.artists;
    },
    chosenArtist(artist) {
      this.$store.commit("setChosenArtist", artist);
      this.$router.push("/artist");
      this.resetInputField();
    },
    resetInputField() {
     this.search = "";
    }
  }
}
</script>

<style scoped>
  .rockstar-logo {
    margin-top: 100px;
    width: 300px;
    height: 300px;
  }

  .search-engine {
    display: flex;
  }
</style>
