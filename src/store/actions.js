import { ADD_ONE, ADD_NEW } from "./mutation-type"

export default {
  addToCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = null;
      for (let item of context.state.products) {
        if (item.iid == payload.iid) {
          oldProduct = item;
        }
      }
      if (oldProduct) {
        context.commit(ADD_ONE, oldProduct)
        resolve('商品数量 + 1')
      } else {
        payload.count = 1;
        context.commit(ADD_NEW, payload);
        resolve('添加了新的商品')
      }
    })
  }
}
