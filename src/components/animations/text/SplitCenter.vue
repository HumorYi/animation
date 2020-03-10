<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 从中间分割文本
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-17 02:02:20
 * @LastEditTime: 2020-02-24 11:34:22
-->
<template>
  <span class="split-center" :class="className">
    <span v-for="(item, i) in ownText" :key="i" :style="{ animationDelay: delay + Math.abs(i - middle) * step + 's' }">
      {{ item }}
    </span>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SplitCenter extends Vue {
  middle = 0

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
    default: 0.1
  })
  private readonly step!: number

  @Prop({
    type: Number,
    default: 0.3
  })
  private readonly delay!: number

  get ownText() {
    const letters = this.text.split('')

    this.middle = letters.filter(item => item !== ' ').length / 2

    return letters
  }
}
</script>

<style lang="sass" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700")

$delay: 0.8s

.split-center
  position: relative

  text-align: center
  color: #6ee1f5
  font-size: 24px
  font-family: Raleway, sans-serif
  letter-spacing: 3px
  white-space: pre

  span
    opacity: 0
    transform: scale(0)
    animation: fadeIn 2.4s forwards

  &:before,
  &:after
    position: absolute
    content: ""
    top: 0
    bottom: 0
    width: 2px
    height: 100%
    background-color: #fcc500
    opacity: 0
    transform: scale(0)

  &:before
    left: 50%
    animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards

  &:after
    right: 50%
    animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards

@keyframes fadeIn
  to
    opacity: 1
    transform: scale(1)

@keyframes slideLeft
  to
    left: -6%
    opacity: 1
    transform: scale(0.9)

@keyframes slideRight
  to
    right: -6%
    opacity: 1
    transform: scale(0.9)
</style>
