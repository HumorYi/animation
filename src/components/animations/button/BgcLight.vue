<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 背景闪光按钮
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 00:07:28
 * @LastEditTime: 2020-02-22 12:36:36
-->
<template>
  <button class="btn btn-primary btn-ghost btn-shine" :class="className">{{ text }}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BgcLight extends Vue {
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
}
</script>

<style lang="sass" scoped>
.btn
  $hue: 190
  position: relative
  padding: 1rem 3rem
  font-size: 1rem
  line-height: 1.5
  color: white
  background-color: hsl($hue, 100%, 41%)
  border: 1px solid hsl($hue, 100%, 41%)
  outline: transparent
  overflow: hidden
  cursor: pointer
  user-select: none
  white-space: nowrap
  transition: 0.25s

  &:hover
    background: hsl($hue, 100%, 31%)

  &-primary
    $hue: 187

  &-ghost
    color: hsl($hue, 100%, 41%)
    background-color: transparent
    border-color: hsl($hue, 100%, 41%)

    &:hover
      color: white

  &-shine
    color: white

    &:before
      position: absolute
      content: ""
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: linear-gradient( 120deg, transparent, hsla($hue, 100%, 41%, 0.5), transparent)
      transform: translateX(-100%)
      transition: 0.6s

    &:hover
      background: transparent
      box-shadow: 0 0 20px 10px hsla($hue, 100%, 41%, 0.5)

      &:before
        transform: translateX(100%)
</style>
