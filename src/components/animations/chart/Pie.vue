<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:饼图
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 12:08:55
 * @LastEditTime: 2020-03-02 23:25:41
-->
<template>
  <ul :class="[type, className]">
    <li
      v-for="(item, i) in pie"
      :key="item.text"
      :style="{
        '--count': `'${item.count}'`,
        '--percent': `'${((item.count / maxGauge) * 100).toFixed(2)}%'`,
        '--bgc': `conic-gradient(${colors[i]} calc(${item.count / maxGauge} * 100%), #111 0)`
      }"
    >
      <g-jump :item="item"></g-jump>
      <span>{{ item.text }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Pie extends Vue {
  @Prop({
    type: Array,
    required: true
  })
  private readonly pie!: object[]

  @Prop({
    type: Array,
    default: () => ['#e74c3c', '#3498db', '#2ecc71', '#f1c40f']
  })
  private readonly colors!: string[]

  @Prop({
    type: Number,
    default: 1000
  })
  private readonly maxGauge!: number

  @Prop({
    type: String,
    default: 'pie' // pie circle
  })
  private readonly type!: string

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string
}
</script>

<style lang="sass" scoped>
ul
  display: flex
  justify-content: center

  li
    --count: '0'
    --percent: '0%'
    --bgc: ''
    display: flex
    flex-direction: column
    align-items: center

    &:not(:last-child)
      margin-right: 20px

    >a
      position: relative
      width: 100px
      height: 100px
      display: flex
      justify-content: center
      align-items: center
      color: white
      background: var(--bgc)
      border-radius: 50%

      &:before
        content: var(--count) '\A' var(--percent)
        white-space: pre
        position: absolute

    span
      padding-top: 10px
      font-size: 12px
      font-weight: 300
      letter-spacing: 1px
      color: white

  &.pie
    margin-top: 50px

    li a:before
      top: -50px

  &.circle li a:before
    display: flex
    justify-content: center
    align-items: center
    width: 90%
    height: 90%
    background: #222
    border-radius: inherit
</style>
