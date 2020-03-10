<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 导航动画
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 00:36:08
 * @LastEditTime: 2020-02-22 14:51:54
-->
<template>
  <div class="animation">
    <h1>导航动画 demo:</h1>
    <h2>App Footer：</h2>
    <g-animation-nav-app-footer :navs="navs_app_footer"></g-animation-nav-app-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class OwnNav extends Vue {
  private navs_app_footer = [
    { iconClassName: 'icon-auto', text: 'Home' },
    { iconClassName: 'icon-all', text: 'Explore' },
    { iconClassName: 'icon-bussiness-man', text: 'Collection' },
    { iconClassName: 'icon-component', text: 'Help' }
  ]
}
</script>

<style lang="sass" scoped>
.animation
  text-align: center
</style>
