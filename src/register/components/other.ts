/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 其它组件
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-03-02 23:07:06
 * @LastEditTime: 2020-03-02 23:23:36
 */

import Vue from 'vue'

import Jump from '@/components/Jump.vue'
/* eslint-disable */
const globalPrefix = 'g-'
const animations: any[] = [
  {
    name: 'jump',
    component: Jump
  }
]

animations.forEach((animation: any) => {
  Vue.component(globalPrefix + animation.name, animation.component)
})
