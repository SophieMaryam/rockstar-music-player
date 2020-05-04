<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div>
      <router-link class="navbar-brand text-uppercase font-weight-bold" to="/"
        >Music App</router-link
      >
    </div>
    <button
      class="navbar-toggler"
      type="button"
      @click.stop="toggleNavbar"
      data-toggle="collapse"
      data-target="#navbarToggle"
      aria-controls="navbarToggle"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse"
      id="navbarToggle"
      :class="{ show: show }"
    >
      <ul class="navbar-nav ml-auto smooth-scroll">
        <li class="ml-3 nav-link">
          <router-link class="text-color-black text-uppercase" to="/playlists"
            >Playlists</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggleNavbar() {
      this.show = !this.show;
    }
  }
}
</script>

<style scoped></style>
