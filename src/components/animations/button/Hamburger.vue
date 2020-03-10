<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:汉堡包按钮
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-24 09:32:52
 * @LastEditTime: 2020-02-24 09:45:53
-->
<template>
  <div class="hamburger" :class="className">
    <input type="checkbox" id="burger-toggle" />
    <label for="burger-toggle" class="burger-menu">
      <div class="line" v-for="item in lineCount" :key="item"></div>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Hamburger extends Vue {
  private lineCount = 3

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string
}
</script>

<style lang="sass" scoped>
.hamburger
  display: inline-block
  position: relative

#burger-toggle
  position: absolute
  z-index: -1

  &:checked

    &~.burger-menu
      .line
        &:nth-child(1)
          transform: translateY(calc(var(--burger-menu-radius) / 5)) rotate(45deg)

        &:nth-child(2)
          transform: scaleX(0)

        &:nth-child(3)
          transform: translateY(calc(var(--burger-menu-radius) / -5)) rotate(-45deg)

.burger-menu
  --burger-menu-radius: 4em
  position: relative
  z-index: 100
  display: block
  width: var(--burger-menu-radius)
  height: var(--burger-menu-radius)
  background: white
  border: solid 2px hsla(184, 9%, 62%, 0.4)
  border-radius: 50%
  outline: none
  cursor: pointer
  transition: 0.5s ease-in-out

  .line
    position: absolute
    left: 25%
    width: 50%
    height: 3px
    background: hsla(210, 29%, 24%, 0.3)
    border-radius: 10px
    overflow: hidden
    transition: all 0.5s ease

    &:nth-child(1)
      top: 30%

    &:nth-child(2)
      top: 50%

    &:nth-child(3)
      top: 70%

    &:after
      position: absolute
      content: ""
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: #2980b9
      transform: translateX(-100%)
      transition: all 0.25s ease

    @for $i from 2 through 3
      &:nth-child(#{$i}):after
        transition-delay: 0.1s * ($i - 1)

  &:hover
    box-shadow: 0.4px 0.4px 0.8px rgba(0, 0, 0, 0.042), 1px 1px 2px rgba(0, 0, 0, 0.061), 1.9px 1.9px 3.8px rgba(0, 0, 0, 0.075), 3.4px 3.4px 6.7px rgba(0, 0, 0, 0.089), 6.3px 6.3px 12.5px rgba(0, 0, 0, 0.108), 15px 15px 30px rgba(0, 0, 0, 0.15)

    .line:after
      transform: translateX(0)
</style>
