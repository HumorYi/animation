<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 菜单动画
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 00:36:08
 * @LastEditTime: 2020-03-03 00:55:29
-->
<template>
  <div class="animation">
    <h1>菜单动画 demo:</h1>
    <h2>交错浮点文字：</h2>
    <g-animation-menu-staggered-float-text :menu="menu_StaggeredFloatText"></g-animation-menu-staggered-float-text>
    <h2>填充文字：</h2>
    <g-animation-menu-fill-text :menu="menu_FillText"></g-animation-menu-fill-text>
    <h2>触摸显示图片：</h2>
    <div style="text-align: left; margin-left: 200px">
      <g-animation-menu-hover-img :menu="menu_HoverImg"></g-animation-menu-hover-img>
    </div>
    <h2>慎重勇者：</h2>
    <g-animation-menu-shinchou :menu="menu_Shinchou"></g-animation-menu-shinchou>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class OwnMenu extends Vue {
  private menu_StaggeredFloatText = [
    { routerName: 'menu', params: {}, query: {}, text: 'Home' },
    { routerName: 'menu', params: {}, query: {}, text: 'Archives' },
    { routerName: 'menu', params: {}, query: {}, text: 'Tags' },
    { href: 'https://www.baidu.com', text: 'Categories' },
    { text: 'About' }
  ]

  private menu_FillText = [
    { routerName: 'menu', params: {}, query: {}, text: 'Home' },
    { routerName: 'menu', params: {}, query: {}, text: 'Archives' },
    { routerName: 'menu', params: {}, query: {}, text: 'Tags' },
    { href: 'https://www.baidu.com', text: 'Categories' },
    { text: 'About' }
  ]

  private menu_HoverImg = [
    {
      routerName: 'menu',
      params: {},
      query: {},
      text: 'Home',
      img: 'https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg'
    },
    {
      routerName: 'menu',
      params: {},
      query: {},
      text: 'Archives',
      img: 'https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg'
    },
    { href: 'https://www.baidu.com', text: 'Tags', img: 'https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg' },
    { text: 'Categories', img: 'https://i.loli.net/2019/11/03/RtVq2wxQYySDb8L.jpg' }
  ]

  private menu_Shinchou = [
    { routerName: 'menu', params: {}, query: {}, text: 'ニュース' },
    { routerName: 'menu', params: {}, query: {}, text: 'ストーリー' },
    { routerName: 'menu', params: {}, query: {}, text: 'スターフ＆キャスト' },
    { href: 'https://www.baidu.com', text: 'キャラクター' },
    { text: '放送·配信情報' }
  ]
}
</script>

<style lang="sass" scoped>
.animation
  text-align: center
</style>
