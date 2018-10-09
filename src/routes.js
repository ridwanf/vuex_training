import Vue from 'vue'
import Router from 'vue-router'
import withoutStore from './view/withoutStore.vue'

Vue.use(Router)

const routes = [
  {
    name: 'withoutStore',
    path: '/withoutStore',
    component: withoutStore,
  },
]

const router = new Router({
  mode: 'history',
  routes,
})

export default router
