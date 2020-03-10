<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 对话窗动画
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 00:36:08
 * @LastEditTime: 2020-03-02 23:04:44
-->
<template>
  <div class="animation">
    <h1>对话窗动画 demo:</h1>
    <h2>Confirm：</h2>
    <button @click="showConfirmDialog">显示 Confirm 弹窗</button>
    <g-animation-dialog-confirm
      :isShow="isShowDialogConfirm"
      title="Are you sure?"
      content="You can't undo this action."
      :confirm="confirmByComfirm"
      :cancle="cancleByComfirm"
    ></g-animation-dialog-confirm>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class OwnDialog extends Vue {
  private isShowDialogConfirm = false

  private confirmByComfirm(): void {
    this.isShowDialogConfirm = false
  }

  private cancleByComfirm(): void {
    this.isShowDialogConfirm = false
  }

  private showConfirmDialog(): void {
    this.isShowDialogConfirm = true
  }
}
</script>

<style lang="sass" scoped>
.animation
  text-align: center
</style>
