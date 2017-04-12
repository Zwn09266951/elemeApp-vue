// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import "./common/style/iconfont.css"
import "./common/style/index.scss"
import "./common/js/flexible1.js"
import goods from "@/components/goods"
import ratings from "@/components/ratings"
import seller from "@/components/seller"

Vue.use(VueRouter)
Vue.prototype.$http = axios


Vue.config.productionTip = false

const routes = [
  { path: '/', component: goods },
  { path: '/goods', component: goods },
  { path: '/ratings', component: ratings },
  { path: '/seller', component: seller }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  render: h => h(App)
}).$mount('#app')
