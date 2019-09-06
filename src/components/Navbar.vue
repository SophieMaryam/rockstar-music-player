<template>
  <nav class="navbar navbar-expand-lg black-background text-white">
    <div>
      <router-link class="navbar-brand navbar-text text-uppercase" to="/">Rockstar Music</router-link >
    </div>
    <button class="navbar-toggler custom-toggler"
      type="button" 
      data-toggle="collapse"
      data-target="#navbarToggle" aria-controls="navbarToggle"
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarToggle">
      <ul class="navbar-nav ml-auto smooth-scroll">
        <li class="ml-3 nav-link">
            <router-link class="navbar-text" to="/playlists">Playlists</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>
  .navbar-text {
    color: #FFE000;
  }

  .color {
    color: #FFE000;
  }

  .custom-toggler.navbar-toggler {
    border-color: #FFFFFF;
}
</style>


