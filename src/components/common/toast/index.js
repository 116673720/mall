import Toast from "./Toast"

var obj = {}

obj.install = function (Vue) {
  var toastConstructor = Vue.extend(Toast)
  var toast = new toastConstructor()
  toast.$mount()
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}

export default obj

