import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "producton";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  //   state: {
  //     loading: false,
  //     sending: false,
  //     error: "test error message",
  //     user: [],
  //     reconnect: false,
  //     activeRoom: null,
  //     rooms: [],

  //     users: [],

  //     messages: [],
  //     userTyping: null,
  //   },
  state: {
    loading: false,
    sending: false,
    error: "test error message",
    user: {
      username: "リン",
      name: "志摩リン",
    },
    reconnect: false,
    activeRoom: {
      id: "124",
    },
    rooms: [
      {
        id: "123",
        name: "general",
      },
      {
        id: "124",
        name: "random",
      },
    ],
    users: [
      {
        username: "リン",
        name: "志摩リン",
        presence: "online",
      },
      {
        username: "なでしこ",
        name: "各務原なでしこ",
        presence: "offline",
      },
    ],
    messages: [
      {
        username: "リン",
        date: "11/12/2019",
        text: "ういーす",
      },
      {
        username: "リン",
        date: "11/12/2019",
        text: "なでしこ、起きてる？",
      },
      {
        username: "なでしこ",
        date: "11/12/2019",
        text: "リンちゃん！おはよー",
      },
    ],
    userTyping: null,
  },

  getters: {
    hasError: (state) => (state.error ? true : false),
  },
  mutations,
  actions,
  plugins: [vuexLocal.plugin],
  strict: debug,
});
