<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:
 * @Modifier: 交换动画: animation-delay，目前不能通过 js 动态改变 sass 变量
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-16 22:35:46
 * @LastEditTime: 2020-03-02 14:25:15
-->
<template>
  <ul class="exchage" :class="className">
    <li class="dot" v-for="(item, i) in count" :key="item" :style="{ backgroundColor: colors[i] }">
      <span :style="{ animationDuration: animationDuration + 's', animationDelay: i * animationDelay + 's' }"></span>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
// import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Exchange extends Vue {
  @Prop({ type: Number, default: 5 }) private count!: number

  @Prop({ type: Array, default: () => ['#7ef9ff', '#89cff0', '#4682b4', '#0f52ba', '#000080'] }) private colors!: object

  @Prop({ type: Number, default: 0.2 }) private animationDelay!: number

  @Prop({ type: Number, default: 2 }) private animationDuration!: number

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string
}
</script>

<style scoped lang="sass">
$colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080
$delay: 0.2s
$count: 5

.exchage
  --animation-time: 2s
  display: flex
  justify-content: center
  animation-delay: 1s

  .dot
    position: relative
    width: 40px
    height: 40px
    margin: 40px
    border-radius: 50%

    span
      position: absolute
      left: 0
      width: 100%
      height: 100%
      background-color: inherit
      border-radius: inherit
      animation: wave var(--animation-time) ease-out infinite

    // 只适应静态变量数字，动态变量var(--count) 无法转为数字
    // @for $i from 1 through $count
    //   &:nth-child(#{$i})
    //     background-color: nth($colors, $i)

    //     &:before
    //       animation-delay: $i * $delay

@keyframes wave
  50%,
  75%
    transform: scale(2.5)

  80%,
  100%
    opacity: 0
</style>
