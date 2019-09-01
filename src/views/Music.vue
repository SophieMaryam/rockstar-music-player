<template>
  <div>
    <h1 class="text-center text-white font-weight-bold">Your Music</h1>
    <div class="flex">
      <div class="col-12 col-lg-5 col-xl-3">
        <Playlist />
      </div>
      <div class="col-6">
        <Songs v-if="openSongComponent" />
      </div>
    </div>
  </div>
</template>


<script>
import Playlist from "../components/Playlist.vue";
import Songs from "../components/Songs.vue";

export default {
  name: "Music",
  components: {
    Playlist,
    Songs
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    openSongComponent() {
      if (this.$store.getters.playlistName) {
       return this.show = true;
      };
    }
  }
}
</script>

<style>
  .flex {
    display: flex;
  }

  @media only screen and (max-width: 1199px) {
    .flex {
      display: block;
    }
  }

  .font-color {
    color: #FFE000;
  }

  .input-field {
    border: none;
    background-color: rgb(212, 209, 209);
    height: 50px;
    width: 300px;
  }

  .border-color {
    border: 0.5px solid #FFE000;
  }
</style>


