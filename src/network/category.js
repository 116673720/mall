import {request} from "./request"

export function getMenu() {
  return request({
    url: "/category"
  })
}

export function getSubMenu(maitKey) {
  return request({
    url: "/subcategory",
    params: {
      maitKey
    }
  })
}

export function getGoodsList(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
