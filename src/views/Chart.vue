<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 图表
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 00:36:08
 * @LastEditTime: 2020-03-03 01:13:04
-->
<template>
  <div class="animation">
    <h1>图表动画 demo:</h1>
    <h2>Pie：</h2>
    <g-animation-chart-pie :pie="pie"></g-animation-chart-pie>
    <g-animation-chart-pie :pie="pie" type="circle"></g-animation-chart-pie>
    <h2>PieRotate：</h2>
    <g-animation-chart-pie-rotate></g-animation-chart-pie-rotate>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class OwnChart extends Vue {
  private pie = [
    { routerName: 'chart', params: {}, query: {}, text: 'design', count: 900 },
    { routerName: 'chart', params: {}, query: {}, text: 'creativity', count: 744 },
    { href: 'https://www.baidu.com', text: 'accessbility', count: 666 },
    { text: 'content', count: 800 }
  ]
}
</script>

<style lang="sass" scoped>
.animation
  text-align: center
</style>
