<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:卡片触摸旋转
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 12:08:55
 * @LastEditTime: 2020-03-02 23:28:00
-->
<template>
  <div class="cards">
    <div class="item" v-for="(item, i) in cards" :key="i">
      <div v-for="(img, img_i) in item.imgs" :key="img_i" class="face" :class="img_i === 0 ? 'front' : 'back'">
        <g-jump :item="item">
          <template>
            <img :src="img" />
          </template>
        </g-jump>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HoverRotate extends Vue {
  @Prop({
    type: Array,
    required: true
  })
  private readonly cards!: object[]

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string
}
</script>

<style lang="sass" scoped>
.cards
  display: flex
  justify-content: space-around
  perspective: 800px
  margin-bottom: 200px

  .item
    position: relative
    width: 240px
    height: 300px
    color: white
    cursor: pointer
    transition: 1s ease-in-out
    transform-style: preserve-3d

    &:hover
      transform: rotateY(0.5turn)

    .face
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      backface-visibility: hidden
      transition: 1s ease-in-out
      -webkit-box-reflect: below 0 linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4))

      img
        width: 240px
        height: 300px
        object-fit: cover

      &.back
        transform: rotateY(0.5turn)
</style>
