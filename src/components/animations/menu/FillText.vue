<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 填充文字
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-24 14:13:03
 * @LastEditTime: 2020-03-02 23:25:59
-->
<template>
  <ul class="menu" v-if="menu.length > 0" :class="className">
    <li v-for="item in menu" :key="item.text">
      <g-jump :item="item">
        <template>
          {{ item.text }}
        </template>
      </g-jump>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FillText extends Vue {
  @Prop({
    type: Array,
    required: true
  })
  private readonly menu!: object

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string
}
</script>

<style lang="sass" scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700")

.menu
  display: inline-block

  li
    padding: 6px 0
    text-align: left

    a
      position: relative
      font-family: Raleway, sans-serif
      font-size: 3em
      font-weight: 700
      -webkit-text-stroke: 2px #198CE6
      background: linear-gradient(90deg, #198CE6 0%, #198CE6 100%)
      background-size: 0
      background-position: left
      background-repeat: no-repeat
      color: transparent
      background-clip: text
      transition: 0.5s linear

      &:hover
        background-size: 100%
</style>
