<template>
  <div class="background">
    <div class="text-center center-screen">
      <h1 class="mt-3 font-weight-bold text-white text-uppercase">Find your favourite artist!</h1>
      <div class="col-6">
        <div class="search-bar d-flex">
          <font-awesome-icon icon="search" class="color" />
          <b-form-input
            v-model="search"
            type="text"
            class="search-input-field col-12"
            placeholder="Bob Dylan? "
          ></b-form-input>
        </div>
        <div v-if="search" class="mt-2">
          <ul>
            <li
              @click="chosenArtist(artist.name)"
              class="commit text-left text-white"
              v-for="artist in filterAllArtists"
              :key="artist.id"
            >
              {{ artist.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicJSON from "../common/musicList.json";

export default {
  name: "Home",
  data() {
    return {
      allArtists: MusicJSON.artists,
      search: ""
    };
  },
  computed: {
    filterAllArtists() {
      return this.allArtists.filter(artist =>
        artist.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    chosenArtist(artist) {
      this.$store.commit("setChosenArtist", artist);
      this.$router.push("/artist");
      this.resetInputField();
    },
    resetInputField() {
      this.search = "";
    }
  }
};
</script>

<style scoped>
.background {
  background-color: black;
  height: 100vh;
}
.search-input-field,
.search-input-field:focus {
  background: transparent;
  border: none;
  border-bottom:1px solid white;
  outline: none;
  border-radius: 0%;
}
.center-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.color {
  color: white;
}
</style>
