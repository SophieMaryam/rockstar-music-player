import Songs from "../../../src/components/Songs";
import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Songs", () => {
  let state;
  let getters;
  let store;
  let cmp;

  beforeEach(() => {
    state = {
      playlistName: "Playlist",
      allPlaylists: [
        {
          "id": 0, 
          "name": "Playlist"
        }
      ]
    };
    getters = {
      playlistName: state => state.playlistName,
      allPlaylists: state => state.allPlaylists
    };
    store = new Vuex.Store({ state, getters });
    cmp = shallowMount(Songs, {
      store,
      localVue
    });
  });

  it("returns getters", () => {
    expect(cmp.find(".playlist-name").text()).toBe("Playlist");
    expect(cmp.vm.allPlaylists).toStrictEqual([
      {
        "id": 0, 
        "name": "Playlist"
      }
    ]);
  });
});