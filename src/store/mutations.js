import {
  Add_Counter,
  Add_New
} from "./mutations-type";

export default {
  [Add_Counter](state, payload) {
    payload.count++
  },
  [Add_New](state, payload) {
    state.cartList.push(payload)
  }
}
