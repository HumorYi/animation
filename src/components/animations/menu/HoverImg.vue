<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 触摸显示图片
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-24 14:13:03
 * @LastEditTime: 2020-03-03 01:01:02
-->
<template>
  <ul class="menu-hover-image">
    <li
      v-for="(item, i) in menu"
      :key="i"
      class="menu-item"
      @mouseenter="handleMouseenter($event, item.img)"
      @mouseleave="handleMouseleave($event)"
      @mousemove="handleMousemove($event, item.img)"
    >
      <g-jump :item="item">
        <template>
          <span>{{ item.text }}</span>
        </template>
      </g-jump>
    </li>
    <div ref="cursor" class="cursor"></div>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from 'vue-property-decorator'

@Component
export default class HoverImg extends Vue {
  @Ref() private readonly cursor!: HTMLDivElement

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

  private setBgi(img: string) {
    this.cursor.style.setProperty('--bgi', `url(${img})`)
  }

  private getXY = (e: Event) => [(e as MouseEvent).clientX, (e as MouseEvent).clientY]

  private handleMouseenter(e: Event, img: string) {
    const [x, y] = this.getXY(e)

    this.setBgi(img)

    this.cursor.animate(
      [
        {
          opacity: 0,
          transform: `translate(${x}px, ${y}px) scale(0)`
        },
        {
          opacity: 1,
          transform: `translate(${x}px, ${y}px) scale(1)`
        }
      ],
      { duration: 300, fill: 'forwards' }
    )
  }

  private handleMouseleave(e: Event) {
    const [x, y] = this.getXY(e)
    this.cursor.animate(
      [
        {
          opacity: 1,
          transform: `translate(${x}px, ${y}px) scale(1)`
        },
        {
          opacity: 0,
          transform: `translate(${x}px, ${y}px) scale(0)`
        }
      ],
      { duration: 300, fill: 'forwards' }
    )
  }

  private handleMousemove(e: Event, img: string) {
    const [x, y] = this.getXY(e)

    this.setBgi(img)

    this.cursor.animate(
      [
        {
          transform: `translate(${x}px, ${y}px)`
        }
      ],
      { duration: 500, delay: 50, fill: 'forwards' }
    )
  }
}
</script>

<style lang="sass" scoped>
.menu-hover-image
  --bgi: ''
  position: relative
  display: inline-block

  .cursor
    position: absolute
    top: -200px
    left: -100px
    z-index: -1
    width: 600px
    height: 400px
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)
    background-position: 50% 50%
    background-size: cover
    opacity: 0

  .menu-item
    &:hover~.cursor
      background-image: var(--bgi)

    a
      display: flex
      justify-content: space-between
      align-items: center
      width: 100%
      padding-top: 10px
      padding-bottom: 10px
      color: white
      border-bottom: 1px solid rgba(255, 255, 255, 0.3)
      mix-blend-mode: difference
      transform: translate3d(0, 0, 0)  // just make "mix-blend-mode" work properly.
</style>
