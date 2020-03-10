<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:
 * @Modifier: 下雪
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-16 22:35:46
 * @LastEditTime: 2020-02-17 04:21:26
-->
<template>
  <div class="snow-wrap" :class="className">
    <div class="snow" v-for="item in count" :key="item"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
// import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Snow extends Vue {
  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string

  private count = 200
  // @Prop({ type: Number, required: true, default: 5 }) private count!: number
}
</script>

<style scoped lang="sass">
$count: 200

@function random_range($min, $max)
  $rand: random()
  $random_range: $min + floor($rand * (($max - $min) + 1))
  @return $random_range

.snow-wrap
  height: 100vh
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)
  overflow: hidden
  filter: drop-shadow(0 0 10px white)

.snow
  position: absolute
  width: 10px
  height: 10px
  background-color: white
  border-radius: 50%

  @for $i from 1 through $count
    $random_x: random(1000000) * 0.0001vw
    $random_offset: random_range(-100000, 100000) * 0.0001vw
    $random_x_end: $random_x + $random_offset
    $random_x_end_yoyo: $random_x + ($random_offset / 2)
    $random_yoyo_time: random_range(30000, 80000) / 100000
    $random-yoyo-y: $random_yoyo_time * 100vh
    $random_scale: random(10000) * 0.0001
    $random_duration: random_range(10, 30) * 1s
    $random_delay: random(30) * -1s

    &:nth-child(#{$i})
      opacity: random(10000) * 0.0001
      transform: translate($random_x, -10px) scale($random_scale)
      animation: fall-#{$i} $random_duration $random_delay linear infinite

    @keyframes fall-#{$i}
      #{percentage($random_yoyo_time)}
        transform: translate($random_x_end, $random-yoyo-y) scale($random_scale)

      to
        transform: translate($random_x_end_yoyo, 100vh) scale($random_scale)
</style>
