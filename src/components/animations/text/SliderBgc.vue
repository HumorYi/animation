<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 条子划过文本
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-21 21:58:04
 * @LastEditTime: 2020-02-24 11:38:12
-->
<template>
  <header :class="className">
    <span class="title slide-bar">{{ title }}</span>
    <br />
    <span v-if="subtitle" class="subtitle slide-bar">{{ subtitle }}</span>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SliderBgc extends Vue {
  @Prop({
    type: String,
    required: true
  })
  private readonly title!: string

  @Prop({
    type: String
  })
  private readonly subtitle!: string

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string
}
</script>

<style lang="sass" scoped>
@import url("https://fonts.googleapis.com/css?family=Lato")
@import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700")

.slide-bar
  position: relative
  color: transparent
  animation: fill-text-white 2s 1.6s forwards

  &:before
    position: absolute
    content: ""
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: #35b9f1
    transform: scaleX(0)
    transform-origin: left
    animation: slide-in-out 2s cubic-bezier(0.75, 0, 0, 1) forwards

@keyframes slide-in-out
  50%
    transform: scaleX(1)
    transform-origin: left

  50.1%
    transform-origin: right

  100%
    transform: scaleX(0)
    transform-origin: right

@keyframes fill-text-white
  to
    color: white

header
  .title,
  .subtitle
    letter-spacing: 5px

  .title
    font-size: 32px
    font-family: Lora, serif

    &:before
      background-color: #FF4081

  .subtitle
    display: inline-block
    margin-top: 10px
    font-size: 16px
    font-family: Lato, sans-serif
    animation-delay: 3.2s

    &:before
      background-color: #03A9F4
      animation-delay: 2s
</style>
