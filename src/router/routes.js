import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import Artist from "../components/Artist";
import Music from "../views/Music";

Vue.use(Router);

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/artist",
    name: "Artist",
    component: Artist
  },
  {
    path: "/playlists",
    name: "Music",
    component: Music
  }

]

export const router = new Router({
  mode: "history",
  routes
});
