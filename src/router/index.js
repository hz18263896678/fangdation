import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 使用vue-Roter
Vue.use(Router)

// 使用vue-swiper
Vue.use(VueAwesomeSwiper);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
