import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Hello
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
