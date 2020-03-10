<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 卡片
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 00:36:08
 * @LastEditTime: 2020-03-02 22:49:02
-->
<template>
  <div class="animation">
    <h1>卡片动画 demo:</h1>
    <h2>HoverExpand：</h2>
    <g-animation-card-hover-expand title="Contact" :cards="cardsHoverExpand"></g-animation-card-hover-expand>
    <h2>HoverRotate</h2>
    <g-animation-card-hover-rotate :cards="cardsHoverRotate"></g-animation-card-hover-rotate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class OwnCard extends Vue {
  private cardsHoverExpand = [
    { routerName: 'card', params: {}, query: {}, iconClassName: 'icon-auto', text: 'alphardex' },
    { href: 'https://www.baidu.com', iconClassName: 'icon-bussiness-man', text: '2582347430@qq.com' },
    { iconClassName: 'icon-component', text: '(+86)13063509980' }
  ]

  private cardsHoverRotate = [
    {
      routerName: 'card',
      params: {},
      query: {},
      imgs: ['https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg', 'https://i.loli.net/2019/11/16/cqyJiYlRwnTeHmj.jpg']
    },
    {
      href: 'https://www.baidu.com',
      imgs: ['https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg', 'https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg']
    },
    {
      imgs: ['https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg', 'https://i.loli.net/2019/11/03/RtVq2wxQYySDb8L.jpg']
    }
  ]
}
</script>

<style lang="sass" scoped>
.animation
  text-align: center
</style>
