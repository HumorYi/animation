<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:卡片触摸扩大
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 12:08:55
 * @LastEditTime: 2020-03-02 23:25:01
-->
<template>
  <div class="card">
    <div class="card-header">{{ title }}</div>
    <div class="card-body">
      <dl v-for="(item, i) in cards" :key="i" :style="{ transitionDelay: i * delay + 's' }">
        <dt>
          <g-jump :item="item">
            <template>
              <i class="iconfont" :class="item.iconClassName"></i>
            </template>
          </g-jump>
        </dt>
        <dd>{{ item.text }}</dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HoverExpand extends Vue {
  @Prop({
    type: Array,
    required: true
  })
  private readonly cards!: object[]

  @Prop({
    type: Number,
    default: 0.1
  })
  private readonly delay!: number

  @Prop({
    type: String,
    required: true
  })
  private readonly title!: string

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string
}
</script>

<style lang="sass" scoped>
.card
  display: inline-block
  transform: translateY(30%)
  transition: 0.5s ease
  filter: drop-shadow(-2px 2px 8px rgba(50, 50, 0, 0.5))

  .card-header
    text-align: center
    padding-top: 20px
    padding-bottom: 20px
    font-size: 40px
    color: white
    background-color: #2979ff
    clip-path: inset(0 19% 0 19%)
    transition: 0.5s ease

  .card-body
    opacity: 0
    box-sizing: border-box
    padding: 30px
    background: white
    clip-path: inset(0 19% 0 19%)
    transition: 0.5s ease

    &, .iconfont
      font-size: 24px

    dl
      width: 100%
      opacity: 0
      transform: translateY(100%)
      transition: 0.5s ease-in
      text-align: left

      &:not(:last-child)
        margin-bottom: 30px

      dt,
      dd
        display: inline-block

      dt
        margin-right: 10px

  &:hover
    transform: translateY(0)
    clip-path: inset(0 0 0 0)

    .card-header,
    .card-body
      clip-path: inset(0 0 0 0)

    .card-body
      opacity: 1

    dl
      opacity: 1
      transform: translateY(0)
</style>
