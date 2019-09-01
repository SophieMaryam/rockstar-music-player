import Vue from "vue";
import Router from "vue-router";
import Rockstar from "../components/Rockstar";
import Artist from "../components/Artist";
import Music from "../views/Music";

Vue.use(Router);

export const routes = [
  {
    path: "/",
    name: "Rockstar",
    component: Rockstar
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
