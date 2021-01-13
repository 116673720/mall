import {
  Add_Counter,
  Add_New
} from "./mutations-type";

export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 1.查找之前数组中是否有该商品
      var oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      // 2.判断oldProduct
      if (oldProduct) {
        context.commit(Add_Counter, oldProduct)
        resolve("商品数量加1")
      } else {
        payload.count = 1
        payload.isChecked = true
        context.commit(Add_New, payload)
        resolve("添加商品成功")
      }
    })
  }
}
