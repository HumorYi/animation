<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 填充文字
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-24 14:13:03
 * @LastEditTime: 2020-03-03 01:59:54
-->
<template>
  <ul class="menu" v-if="menu.length > 0" :class="className">
    <li v-for="item in menu" :key="item.text">
      <g-jump :item="item">
        <template>
          <span
            v-for="(letter, letter_i) in item.text.split('')"
            :key="letter_i"
            :class="{ highlight: letter_i < 2 }"
            :style="{ transitionDelay: letter_i / delay + 's' }"
          >
            {{ letter }}
          </span>
        </template>
      </g-jump>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Shinchou extends Vue {
  @Prop({
    type: Array,
    required: true
  })
  private readonly menu!: object

  @Prop({
    type: Number,
    default: 10
  })
  private readonly delay!: number

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string
}
</script>

<style lang="sass" scoped>
.menu
  --highlight-text-color: #00ACF0
  display: flex
  flex-direction: column
  text-align: left

  li
    margin: 6px

    a
      position: relative
      display: inline-flex
      padding: 6px 2px 6px 2px
      color: black
      font-size: 16px
      font-weight: 700
      line-height: 1 // ensure span is a square
      overflow: hidden

      &:before
        position: absolute
        content: ''
        top: 0
        left: 0
        z-index: -2
        width: 100%
        height: 100%
        background-color: #1d222c

      &:hover
        span
          color: white !important
          text-shadow: 0 0 10px var(--highlight-text-color)

      span
        position: relative
        margin: 0 5px 0 4px
        transition: 0.3s

        &.highlight:before
          position: absolute
          content: ''
          top: -3px
          left: -3px
          bottom: -3px
          right: -3px
          z-index: -1
          background: var(--highlight-text-color)

        &:not(.highlight)
          color: var(--highlight-text-color)
</style>
