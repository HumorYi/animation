/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 动画组件
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-16 22:40:08
 * @LastEditTime: 2020-03-02 22:30:38
 */
import Vue from 'vue'

import text from './text'
import button from './button'
import menu from './menu'
import nav from './nav'
import pagination from './pagination'
import dialog from './dialog'
import chart from './chart'
import filter from './filter'
import card from './card'
import other from './other'

const globalPrefix = 'g-animation-'
const animations: any[] = [text, button, menu, nav, pagination, dialog, chart, filter, card, other]

animations.forEach((animation: any) => {
  animation.data.forEach((item: any) => {
    Vue.component(globalPrefix + animation.prefix + item.name, item.component)
  })
})
