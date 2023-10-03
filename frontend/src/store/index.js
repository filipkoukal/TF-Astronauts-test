import { createStore } from "vuex";
import * as appView from "../constants/appView";

export default createStore({
  state: {
    appState: {
      activeView: appView.SHOW_ASTRONAUTS,
      mainServerOnline: false
    }
  },
  mutations: {
    setActiveView(state, payload) {
      state.appState.activeView = payload;
    },
    setMainServerState(state, payload) {
      state.appState.mainServerOnline = payload;
    }
  }, //synchronous
  actions: {}, //asynchronous
  modules: {},
  getters: {
    getAppState(state) {
      return state.appState;
    }
  }
});
