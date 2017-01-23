import Vue from 'vue'
// import NProgress from 'nprogress'
import Router from 'vue-router'
Vue.use(Router)

// Vue.http.interceptors.push((request, next) => {
//   NProgress.inc(0.2)

//   next((response) => {
//     NProgress.done()
//     return response
//   })
// })

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component (resolve) {
        require(['../components/Home/index.vue'], resolve)
      }
    },
    {
      path: '/dev_list',
      component (resolve) {
        require(['../components/Device/dev_list.vue'], resolve)
      }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   next()
// })

// router.afterEach((transition) => {
//   NProgress.done()
// })

export default router
