<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 分页器动画
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 00:36:08
 * @LastEditTime: 2020-02-23 00:35:31
-->
<template>
  <div class="animation">
    <h1>分页器动画 demo:</h1>
    <h2>BoxShadow：</h2>
    <g-animation-pagination-box-shadow :totalPage="totalPage_box_shadow"></g-animation-pagination-box-shadow>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class OwnNav extends Vue {
  private totalPage_box_shadow = 6
}
</script>

<style lang="sass" scoped>
.animation
  text-align: center
</style>
