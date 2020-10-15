import * as type from "./mutation-type"

export default {
  [type.ADD_ONE](state, product) {
    product.count += 1;
  },
  [type.ADD_NEW](state, product) {
    state.products.push(product);
  },
  [type.REV_CHECK](state, payload) {
    payload.ischeck = !payload.ischeck;
  },
  [type.ALL_CHECKED](state) {
    state.products.filter(item => item.ischeck = true)
  },
  [type.ALL_NOT_CHECKED](state) {
    state.products.filter(item => item.ischeck = false)
  }
}
