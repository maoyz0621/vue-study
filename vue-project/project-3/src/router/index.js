import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/components/Home'

Vue.use(Router)
Vue.use(Layout)
Vue.use(Home)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/table',
      name: 'Table',
      component: () =>
        import('@/views/Table')
    },
    {
      path: '/form',
      name: 'Form',
      component: () =>
        import('@/views/Form')
    }
  ]
})
