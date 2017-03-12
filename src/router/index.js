import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import About from '@/components/About'
import Details from '@/components/Details'
import Commonweal from '@/components/Commonweal'
import Information from '@/components/Information'
import Notice from '@/components/Notice'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 使用vue-Roter
Vue.use(Router)

// 使用vue-swiper
Vue.use(VueAwesomeSwiper);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        { path: '', component: Home},
        { path: 'details', component: Details}
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/commonweal',
      name: 'Commonweal',
      component: Commonweal
    },
    {
      path: '/info',
      name: 'Information',
      component: Information
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    }
  ]
})
