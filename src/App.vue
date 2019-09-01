<template>
  <div id="app">
    <Navbar />
    <keep-alive include="Rockstar">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"

export default {
  name: "app",
  components: {
    Navbar
  }
}
</script>
