<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 边框滑动
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-17 02:02:20
 * @LastEditTime: 2020-02-22 12:36:47
-->
<template>
  <!--
    多套皮肤
    btn-primary btn-ghost
    btn-border-stroke btn-text-float-up
  -->
  <button :data-text="text" class="btn" :class="[multiple ? 'multiple' : 'single', className]">
    <div class="btn-borders" v-for="item in borderCount" :key="item">
      <div class="border-top"></div>
      <div class="border-right"></div>
      <div class="border-bottom"></div>
      <div class="border-left"></div>
    </div>
    <span class="btn-text">{{ text }}</span>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class BorderSlider extends Vue {
  private borderCount = 1

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
    type: Boolean,
    default: false
  })
  private readonly multiple!: boolean

  @Watch('multiple', { immediate: true, deep: true })
  private onMultipleChanged(val: boolean) {
    this.borderCount = val ? 3 : 1
  }
}
</script>

<style lang="sass" scoped>
$hue: 190
$ease_in_duration: 0.25s
$ease_in_exponential: cubic-bezier(0.95, 0.05, 0.795, 0.5)
$ease_out_duration: 0.65s
$ease_out_delay: $ease_in_duration
$ease_out_exponential: cubic-bezier(0.19, 1, 0.22, 1)

.btn
  position: relative
  padding: 10px 30px
  font-size: 16px
  line-height: 1.5
  color: white
  background-color: hsl($hue, 100%, 41%)
  border: 1px solid hsl($hue, 100%, 41%)
  outline: transparent
  cursor: pointer
  user-select: none
  white-space: nowrap
  transition: $ease_in_duration

  &:hover
    background-color: hsl($hue, 100%, 31%)

  &-primary
    $hue: 171

  &-ghost
    color: hsl($hue, 100%, 41%)
    background-color: transparent
    border-color: hsl($hue, 100%, 41%)

    &:hover
      color: white

  &-border-stroke

    .btn-borders
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%

      .border-top
        position: absolute
        top: 0
        width: 100%
        height: 1px
        background: hsl($hue, 100%, 41%)
        transform: scaleX(0)
        transform-origin: left

      .border-right
        position: absolute
        right: 0
        width: 1px
        height: 100%
        background-color: hsl($hue, 100%, 41%)
        transform: scaleY(0)
        transform-origin: bottom

      .border-bottom
        position: absolute
        bottom: 0
        width: 100%
        height: 1px
        background-color: hsl($hue, 100%, 41%)
        transform: scaleX(0)
        transform-origin: left

      .border-left
        position: absolute
        left: 0
        width: 1px
        height: 100%
        background-color: hsl($hue, 100%, 41%)
        transform: scaleY(0)
        transform-origin: bottom

      // when unhover, ease-out left, bottom ease-in right, top

      .border-left
        transition: $ease_out_duration $ease_out_delay $ease_out_exponential

      .border-bottom
        transition: $ease_out_duration $ease_out_delay $ease_out_exponential

      .border-right
        transition: $ease_in_duration $ease_in_exponential

      .border-top
        transition: $ease_in_duration $ease_in_exponential

    &.single
      border-color: hsla($hue, 100%, 41%, 0.35)

    &.multiple
      border-color: transparent

      .btn-borders
        border: 1px solid hsla($hue, 100%, 41%, 0.35)

        display: flex
        justify-content: center
        align-items: center

        &:nth-child(1)
          left: -8px
          padding: 0 8px

        &:nth-child(2)
          top: -8px
          padding: 8px 0

        &:nth-child(3)
          top: -4px
          left: -4px
          padding: 4px

    &:hover
      color: hsl($hue, 100%, 41%)
      background-color: transparent

      .border-top,
      .border-bottom
        transform: scaleX(1)

      .border-left,
      .border-right
        transform: scaleY(1)

      // when hover, ease-in left, bottom ease-out right, top

      .border-left
        transition: $ease_in_duration $ease_in_exponential

      .border-bottom
        transition: $ease_in_duration $ease_in_exponential

      .border-right
        transition: $ease_out_duration $ease_out_delay $ease_out_exponential

      .border-top
        transition: $ease_out_duration $ease_out_delay $ease_out_exponential

  &-text-float-up
    &:after
      position: absolute
      content: attr(data-text)
      top: 0
      left: 0
      width: 100%
      height: 100%
      display: flex
      justify-content: center
      align-items: center
      opacity: 0
      transform: translateY(35%)
      transition: 0.25s ease-out

    // when hover, ease-in top-text ease-out bottom-text
    .btn-text
      display: block
      transition: 0.75s 0.1s $ease_out_exponential

    &:hover
      // when hover, ease-in bottom-text ease-out top-text

      .btn-text
        opacity: 0
        transform: translateY(-25%)
        transition: 0.25s ease-out

      &:after
        opacity: 1
        transform: translateY(0)
        transition: 0.75s 0.1s $ease_out_exponential
</style>
