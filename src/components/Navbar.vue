<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark background-color">
    <div>
      <router-link class="navbar-brand text-uppercase font-weight-bold" to="/">Music App</router-link >
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
            <router-link class="text-color-black text-uppercase" to="/playlists">Playlists</router-link>
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

</style>


