import Vue from 'vue'
import Router from 'vue-router'
import withoutStore from './view/withoutStore.vue'
import withStore from './view/withStore.vue'

Vue.use(Router)

const routes = [
  {
    name: 'withoutStore',
    path: '/withoutStore',
    component: withoutStore,
  },
  {
    name: 'withStore',
    path: '/withStore',
    component: withStore,
  },
]

const router = new Router({
  mode: 'history',
  routes,
})

export default router
