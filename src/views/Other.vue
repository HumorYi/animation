<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 其它动画
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 00:36:08
 * @LastEditTime: 2020-02-24 10:31:03
-->
<template>
  <div class="animation">
    <h1>其它动画 demo:</h1>
    <h2>交换：</h2>
    <g-animation-exchange
      :count="exchangeCount"
      :colors="exchangeColors"
      :animationDelay="exchangeAnimationDelay"
      :animationDuration="exchangeAnimationDuration"
    ></g-animation-exchange>
    <h2>下雪：</h2>
    <g-animation-snow></g-animation-snow>
    <h2>TodoList：</h2>
    <g-animation-todo-list :todolist="todolist"></g-animation-todo-list>
    <h2>猩红之月：</h2>
    <g-animation-scarlet-moon></g-animation-scarlet-moon>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class OwnOther extends Vue {
  private exchangeCount = 5
  private exchangeColors = ['#7ef9ff', '#89cff0', '#4682b4', '#0f52ba', '#000080']
  private exchangeAnimationDelay = 0.2
  private exchangeAnimationDuration = 2

  private menu = [
    { routerName: 'other', params: {}, query: {}, text: 'Home' },
    { routerName: 'other', params: {}, query: {}, text: 'Archives' },
    { routerName: 'other', params: {}, query: {}, text: 'Tags' },
    { routerName: 'other', params: {}, query: {}, text: 'Categories' },
    { routerName: 'other', params: {}, query: {}, text: 'About' }
  ]

  private todolist = [
    { text: 'Make awesome CSS animation', isFinished: true },
    { text: 'Watch awesome bangumi' },
    { text: 'Encounter awesome people' },
    { text: 'Be an awesome man' }
  ]
}
</script>

<style lang="sass" scoped>
.animation
  text-align: center
</style>
