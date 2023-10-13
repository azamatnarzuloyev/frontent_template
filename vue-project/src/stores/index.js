import { createStore } from 'vuex'

import auth from '../moduls/auth'
import articles from '../moduls/article'
import control from "../moduls/control"
const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {auth, articles, control},
})
export default store

