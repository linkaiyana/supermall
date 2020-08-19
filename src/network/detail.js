import { request } from "./request"

// 商品信息
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  });
}

// 推荐信息
export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class GoodsInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.lowPrice = itemInfo.lowNowPrice;
    this.desc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services
  }
}

export class ShopInfo {
  constructor(shopsinfo) {
    this.shopLogo = shopsinfo.shopLogo;
    this.shopName = shopsinfo.name;
    this.cSells = shopsinfo.cSells;
    this.cGoods = shopsinfo.cGoods;
    this.score = shopsinfo.score;
  }
}

export class ParamInfo {
  constructor(info, rule) {
    this.info = info.set;
    this.rule = rule;
  }
}

export class DCommend {
  constructor(rate) {
    this.cRate = rate.cRate;
    this.list = rate.list;
  }
}
