<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 从头部分割文本
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-17 02:02:20
 * @LastEditTime: 2020-02-24 11:36:26
-->
<template>
  <p class="split-header landIn" :class="className">
    <span v-for="(item, i) in ownText" :key="i" :style="{ animationDelay: i * step + 's' }">{{ item }}</span>
  </p>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SplitHeader extends Vue {
  @Prop({
    type: String,
    required: true
  })
  private readonly text!: string

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string

  @Prop({
    type: Number,
    default: 0.05
  })
  private readonly step!: number

  get ownText() {
    return this.text.split('')
  }
}
</script>

<style lang="sass" scoped>
@import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700")

$delay: 0.8s

.split-header
  display: flex
  flex-wrap: wrap
  justify-content: center

  line-height: 1.8
  color: #d58f11
  font-size: 24px
  font-family: Lora, serif
  white-space: pre

  span
    animation: landIn $delay ease-out both

  @keyframes landIn
    from
      opacity: 0
      transform: translateY(-20%)

    to
      opacity: 1
      transform: translateY(0)
</style>
