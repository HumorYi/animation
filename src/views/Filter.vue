<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 滤镜
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 00:36:08
 * @LastEditTime: 2020-03-02 23:03:46
-->
<template>
  <div class="animation">
    <h1>滤镜动画 demo:</h1>
    <h2>FrostedGlass：</h2>
    <div
      style="
        background: url(https://i.loli.net/2019/11/17/GAYyzeKsiWjP5qO.jpg);
        background-size: cover;
        background-position: center;
        padding: 100px;
      "
    >
      <g-animation-filter-frosted-glass title="sakura"></g-animation-filter-frosted-glass>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class OwnFilter extends Vue {
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
