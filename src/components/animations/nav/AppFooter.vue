<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:底部导航
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 12:08:55
 * @LastEditTime: 2020-03-03 00:07:41
-->
<template>
  <nav class="nav" :class="className" ref="nav">
    <ul>
      <li
        v-for="(item, i) in navs"
        :key="i"
        class="nav-item"
        :class="{ active: i === activeIndex }"
        @click="changeTab(i)"
      >
        <i class="iconfont" :class="item.iconClassName"></i>
        <span>{{ item.text }}</span>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Watch, Ref, Vue } from 'vue-property-decorator'

@Component
export default class AppFooter extends Vue {
  private activeIndex = 0

  @Ref() private readonly nav!: HTMLElement

  @Prop({
    type: Array,
    required: true
  })
  private readonly navs!: object

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string

  @Prop({
    type: Number,
    default: 0
  })
  private readonly index!: number

  @Watch('index', { immediate: true, deep: true })
  private onMultipleChanged(val: number) {
    this.changeTab(val)
  }

  changeTab(index: number) {
    if (index !== this.activeIndex) {
      this.activeIndex = index
      this.nav.style.setProperty('--active-index', index + '')
    }
  }
}
</script>

<style lang="sass" scoped>
@mixin center
  display: flex
  justify-content: center
  align-items: center

.nav
  --nav-width: 600px
  --nav-item-width: calc(var(--nav-width) / 4 - 20px)
  --nav-overlay-width: calc(var(--nav-item-width) + 80px)
  --active-index: 0

  position: relative
  width: var(--nav-width)
  height: 150px
  margin: 0 auto
  background: white
  border: 1em solid white
  // https://9elements.github.io/fancy-border-radius/full-control.html#15.5.15.15-50.95.50.85-150.600
  border-radius: 5% 5% 15% 15% / 15% 15% 50% 50%
  overflow: hidden

  ul
    @include center
    width: 100%
    height: 100%
    padding: 0
    margin: 0
    list-style-type: none

    .nav-item
      @include center
      z-index: 2
      flex-direction: column
      width: var(--nav-item-width)
      height: 100%
      color: #0288d1
      cursor: pointer
      transition: 0.5s ease

      .iconfont
        font-size: 40px
        transition: 0.5s ease

      span
        font-size: 20px
        user-select: none
        opacity: 0
        transition: 0.5s ease

      &.active
        width: var(--nav-overlay-width)

        .iconfont
          transform: translateY(-10px)

        span
          opacity: 1

  &:after
    position: absolute
    content: ""
    top: 0
    left: 0
    height: 100%
    width: var(--nav-overlay-width)
    background: #b3e5fc
    border-radius: 20px
    transform: translateX(calc(var(--nav-item-width) * var(--active-index)))
    transition: 0.5s ease
</style>
