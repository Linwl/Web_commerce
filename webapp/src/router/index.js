import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import about from '@/pages/about'
import show from '@/pages/show'

Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(Router)

// 超时时间
axios.defaults.timeout = 5000
// http请求拦截器
var loadinginstace
axios.interceptors.request.use(config => {
  // element ui Loading方法
  loadinginstace = ElementUI.Loading.service({ fullscreen: true })
  return config
}, error => {
  loadinginstace.close()
  ElementUI.Message.error({
    message: '加载超时'
  })
  return Promise.reject(error)
})
// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
  loadinginstace.close()
  return data
}, error => {
  loadinginstace.close()
  ElementUI.Message.error({
    message: '加载失败'
  })
  return Promise.reject(error)
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/show',
      name: 'show',
      component: show
    }
  ]
})
