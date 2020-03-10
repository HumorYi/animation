<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:3D文本
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-24 11:40:18
 * @LastEditTime: 2020-02-24 11:51:48
-->
<template>
  <div class="loading" :class="className">
    <span v-for="(item, i) in text" :key="i" :style="{ animationDelay: i / 10 + 's' }">{{ item }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ThreeD extends Vue {
  @Prop({
    type: String,
    required: true
  })
  private readonly text!: string

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string
}
</script>

<style lang="sass" scoped>
@import url("https://fonts.googleapis.com/css?family=Baloo+Bhaijaan&display=swap")

@function float-text-3d($shadow-color: #bbb, $depth: 10, $floating: false)
  $shadows: ()

  // When dropped, it will shrink like a spring. When floating, it grows into its shape.
  @for $i from 1 to $depth
    @if ($floating == false and $i > $depth / 2)
      $shadow-color: transparent

    $shadows: append($shadows, 0 ($i * 1px) $shadow-color, comma)

  // When dropped, the shadow reveals. When floating, the shadow fades.
  @if ($floating == false)
    $shadows: append($shadows, 0 10px 10px rgba(0, 0, 0, 0.4), comma)
  @else
    $shadows: append($shadows, 0 50px 25px rgba(0, 0, 0, 0.2), comma)

  @return $shadows

.loading
  display: flex
  justify-content: center
  color: white
  font-size: 5em
  font-family: "Baloo Bhaijaan", cursive

  span
    text-shadow: float-text-3d($floating: false)
    transform: translateY(20px)
    animation: bounce 0.3s ease infinite alternate

@keyframes bounce
  to
    text-shadow: float-text-3d($floating: true)
    transform: translateY(-20px)
</style>
