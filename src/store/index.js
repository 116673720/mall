import Vue from "vue"
import Vuex from "vuex"

import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

Vue.use(Vuex)

var state = {
  cartList: [],
  message: "message"
}
export var store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

