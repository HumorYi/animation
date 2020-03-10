<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:饼图旋转
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 12:08:55
 * @LastEditTime: 2020-03-03 01:35:11
-->
<template>
  <div class="mawaru" :class="className">
    <div v-for="item in count" :key="item" class="circle"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class PieRotate extends Vue {
  @Prop({
    type: Number,
    default: 8
  })
  private readonly count!: number

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string

  beforeCreate() {
    /* eslint-disable */
    CSS.registerProperty({
      name: '--color1',
      syntax: '<color>',
      initialValue: 'transparent',
      inherits: true
    })

    CSS.registerProperty({
      name: '--color2',
      syntax: '<color>',
      initialValue: 'transparent',
      inherits: true
    })

    CSS.registerProperty({
      name: '--pos',
      syntax: '<length-percentage>',
      initialValue: '0',
      inherits: true
    })
    /* eslint-enable */
  }
}
</script>

<style lang="sass" scoped>
.mawaru
  position: relative
  display: flex
  justify-content: center
  align-items: center

  .circle
    // https://coolors.co
    $circle-colors: #50514F, #F25F5C, #FFE066, #247BA0, #70C1B3, #1D3557, #88ABC0, #FFCDB2

    position: absolute
    background: conic-gradient(var(--color1) var(--pos), var(--color2) 0)
    border-radius: 50%

    @for $i from 1 through 8
      &:nth-child(#{$i})
        $color1: nth($circle-colors, $i)
        --color1: #{$color1}

        z-index: 8 - $i
        width: 4em * $i
        height: 4em * $i
        // Use step-end to switch color1 and color2 every time the first pos animation finished.
        animation: pos 0.6s linear, color1 1.2s step-end, color2-#{$i} 1.2s step-end
        animation-iteration-count: 2
        animation-delay: 0.4s * $i

      @keyframes color2-#{$i}
        50%
          --color2: #{nth($circle-colors, $i)}

@keyframes pos
  to
    --pos: 100%

@keyframes color1
  50%
    --color1: transparent
</style>
