import Rockstar from "../../../src/components/Rockstar";
import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Rockstar", () => {
  let mutations;
  let store;
  let cmp;
  const chosenArtist = jest.fn();
  const getAllArtists = jest.fn();

  beforeEach(() => {
    mutations = {
      setChosenArtist: jest.fn()
    };
    store = new Vuex.Store({ mutations });
    cmp = shallowMount(Rockstar, {
      store,
      localVue,
      methods: {
        chosenArtist,
        getAllArtists
      }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  it("calls mutation to set the artist name", () => {
    cmp.find
    expect(chosenArtist).toHaveBeenCalled();
    // expect(mutations.setChosenArtist).toHaveBeenCalled();
  });
});
