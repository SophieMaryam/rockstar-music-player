import Artist from "../../../src/components/Artist";
import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Artist", () => {
  let state;
  let getters;
  let store;
  let cmp;

  beforeEach(() => {
    state = {
      artist: "AC/DC"
    };
    getters = {
      artist: state => state.artist
    };
    store = new Vuex.Store({ state, getters });
    cmp = shallowMount(Artist, {
      store,
      localVue
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns correct artist from store", () => {
    expect(cmp.vm.artistName).toBe("AC/DC");
  });
});
