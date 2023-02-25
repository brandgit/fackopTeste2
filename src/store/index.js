import { createStore } from "vuex";
import { ref } from "vue";

const store = createStore({
  state: {
    stateManu: ref(true),
    stateNavBar: [
      { id: 0, valueState: ref(true), name: "home" },
      { id: 1, valueState: ref(false), name: "services" },
      { id: 2, valueState: ref(false), name: "about" },
      { id: 3, valueState: ref(false), name: "contact" },
    ],
  },

  getters: {
    getStateMenu(state) {
      return state.stateManu;
    },
    getStateNavBar: (state) => (id) => {
      return state.stateNavBar[id].valueState;
    },
    getNameNavBar: (state) => (id) => {
      return state.stateNavBar[id].name;
    },
  },

  mutations: {
    setStateMenu(state, value) {
      state.stateManu = value;
    },
    setStateHome(state, value) {
      return (state.stateNavBar[0].valueState = value);
    },
    setStateServices(state, value) {
      return (state.stateNavBar[1].valueState = value);
    },
    setStateAbout(state, value) {
        return (state.stateNavBar[2].valueState = value);
      },
      setStateContact(state, value) {
        return (state.stateNavBar[3].valueState = value);
      },
  },
  actions: {},
  modules: {},
});

export default store;
