<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 视图入口
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-17 00:52:14
 * @LastEditTime: 2020-03-02 20:39:48
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: item }" v-for="item in navs" :key="item">{{ item }}</router-link>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  private navs = ['button', 'text', 'menu', 'nav', 'pagination', 'dialog', 'chart', 'filter', 'card', 'other']
}
</script>

<style lang="sass">
html, body, div, h1, h2, h3, h4, h5, h6, p, ul, li, dl, dt, dd
  margin: 0
  padding: 0

li
  list-style: none

a
  text-decoration: none

body
  // background-color: #7b7b7b
  background-color: black

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

  #nav
    padding: 30px

    a
      font-weight: bold
      color: #2c3e50

      &:not(:last-child)
        margin-right: 20px
        padding-right: 20px
        border-right: 1px solid #2c3e50

      &.router-link-exact-active
        color: #42b983

  .animation h2
    margin-top: 30px
    margin-bottom: 30px
</style>
