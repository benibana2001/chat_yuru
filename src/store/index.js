import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
// import mutations from './mutations';
// import actions from './actions';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'producton';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    loading: false,
    sending: false,
    error: 'test error message',
    // user: [],
    user: {
      username: 'りん',
      name: 'しマリン',
    },
    reconnect: false,
    activeRoom: { id: '124' },
    rooms: [
      {
        id: '123',
        name: 'Ships',
      },
      {
        id: '124',
        name: 'Treasure',
      },
    ],

    users: [
      {
        username: 'りん',
        name: '志摩リン',
        presence: 'online',
      },
      {
        username: 'なでしこ',
        name: '各務原なでしこ',
        presence: 'offline',
      },
    ],

    messages: [
      {
        username: 'りん',
        date: '12/12/1644',
        text: 'ういーす',
      },
      {
        username: 'りん',
        date: '11/12/1644',
        text: 'なでしこ、今なにしてる？',
      },
      {
        username: 'なでしこ',
        date: '12/12/1644',
        text: 'りんちゃん、おはよー！',
      },
    ],
    userTyping: null,
  },
  getters: {
    hasError: state => (state.error ? true : false),
  },
  mutations: {},
  actions: {},
  plugins: [vuexLocal.plugin],
  strict: debug,
});
