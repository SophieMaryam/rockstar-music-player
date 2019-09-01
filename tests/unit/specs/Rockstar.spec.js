import Rockstar from "../../../src/components/Rockstar";
import Vuex from "vuex"
import { shallowMount, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Rockstar", () => {
  let mutations;
  let store;
  let cmp;

  beforeEach(() => {
    mutations = {
      setChosenArtist: jest.fn()
    };
    store = new Vuex.Store({ mutations });
    cmp = shallowMount(Rockstar, {
      store,
      localVue,
      // methods: {
      //   chosenArtist
      // }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


  it("calls mutation to set the artist name", () => {
    const stub = jest.fn();
    cmp.setMethods({ chosenArtist: stub });
    const el = cmp.find(".commit");
    console.log(el);
    expect(stub).toBeCalled();
    // expect(mutations.setChosenArtist).toHaveBeenCalled();
  });
});
