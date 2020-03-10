/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 路由入口
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-16 16:07:12
 * @LastEditTime: 2020-03-02 20:38:03
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'button',
    component: () => import(/* webpackChunkName: "button" */ '@/views/Button.vue')
  },
  {
    path: '/text',
    name: 'text',
    component: () => import(/* webpackChunkName: "text" */ '@/views/Text.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import(/* webpackChunkName: "menu" */ '@/views/Menu.vue')
  },
  {
    path: '/nav',
    name: 'nav',
    component: () => import(/* webpackChunkName: "nav" */ '@/views/Nav.vue')
  },
  {
    path: '/pagination',
    name: 'pagination',
    component: () => import(/* webpackChunkName: "pagination" */ '@/views/Pagination.vue')
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import(/* webpackChunkName: "dialog" */ '@/views/Dialog.vue')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import(/* webpackChunkName: "chart" */ '@/views/Chart.vue')
  },
  {
    path: '/filter',
    name: 'filter',
    component: () => import(/* webpackChunkName: "filter" */ '@/views/Filter.vue')
  },
  {
    path: '/card',
    name: 'card',
    component: () => import(/* webpackChunkName: "card" */ '@/views/Card.vue')
  },
  {
    path: '/other',
    name: 'other',
    component: () => import(/* webpackChunkName: "other" */ '@/views/Other.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
