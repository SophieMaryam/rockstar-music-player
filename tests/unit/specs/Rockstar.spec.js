import Rockstar from "../../../src/components/Rockstar";
import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Rockstar", () => {
  let mutations;
  let store;
  let cmp;
  let artist = jest.fn()
  let allArtists = jest.fn()
  const $router = {
    push: jest.fn(),
  }

  beforeEach(() => {
    mutations = {
      setChosenArtist: jest.fn()
    };
    store = new Vuex.Store({ mutations });
    cmp = shallowMount(Rockstar, {
      store,
      localVue,
      data() {
        return {
          search: "Bob Dylan",
          allArtists: []
        }
      },
      mocks: {
        $router
      }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("executes chosenArtist method on 'li' click", () => {
    let li = cmp.find("li");
    li.trigger("click");
    expect(mutations.setChosenArtist).toHaveBeenCalledWith({}, "Bob Dylan");
    expect($router.push).toHaveBeenCalled();
    expect(cmp.vm.search).toBe("");
  });
});