import Playlist from "../../../src/components/Playlist";
import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Playlist", () => {
  let mutations;
  let store;
  let cmp;
  let playlistName = jest.fn();
  let allPlaylists = jest.fn();
  let addNewPlaylist = jest.fn();
  let filterPlaylists = jest.fn();
  let resetInputField = jest.fn();


  beforeEach(() => {
    mutations = {
      setPlaylistName: jest.fn(),
      setPlaylist: jest.fn()
    };
    store = new Vuex.Store({ mutations });
    cmp = shallowMount(Playlist, {
      store,
      localVue,
      data() {
        return {
          playlistName: "Playlist",
          allPlaylists: [
            {
              "id": 0, 
              "name": "Playlist"
            }
          ],
          allPlaylistNames: ["a", "b"]
        }
      },
      methods: {
        addNewPlaylist
      },
      mocks: {
        filterPlaylists,
        resetInputField
      }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("executes addNewPlaylist method on 'form submission" , () => {
    let form = cmp.find("form");
    form.trigger("submit.prevent");
    expect(addNewPlaylist).toHaveBeenCalled();
    // expect(filterPlaylists).toHaveBeenCalled();
    // expect(resetInputField).toHaveBeenCalled();
    // expect(cmp.vm.search).toBe("");
  });

  it("executes openPlaylistSongs method on 'li' click", () => {
    let li = cmp.find("li");
    li.trigger("click");
    expect(mutations.setPlaylistName).toHaveBeenCalledWith({}, "Playlist");
    expect(mutations.setPlaylist).toHaveBeenCalledWith({}, [
        {
          "id": 0, 
          "name": "Playlist"
        }
      ]
    );
  });

});