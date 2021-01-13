import {request} from "./request"

export function getDetail (iid) {
  return request({
    url: "/detail",
    params: {
      iid: iid
    }
  })
}

export function getRecommend () {
  return request({
    url: "/recommend"
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.realPrice = itemInfo.lowNowPrice
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.sells = shopInfo.cSells
    this.goodsCount = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : ""
    this.infos = info.set
    this.sizes = rule.tables
  }
}

export class Comment {
  constructor(list) {
    this.avatar = list.user.avatar
    this.username = list.user.uname
    this.content = list.content
    this.date = list.created
    this.style = list.style
    this.images = list.images
  }
}
