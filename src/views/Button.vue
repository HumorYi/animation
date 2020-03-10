<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 按钮动画
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 00:35:54
 * @LastEditTime: 2020-03-02 09:12:05
-->
<template>
  <div class="animation">
    <h1>按钮动画 demo:</h1>
    <h2>边框滑动：</h2>
    <ul class="btn-slider">
      <li>
        <g-animation-button-border-slider text="Start" className="btn-primary"></g-animation-button-border-slider>
      </li>
      <li>
        <g-animation-button-border-slider text="Start" className="btn-ghost"></g-animation-button-border-slider>
      </li>
      <li>
        <g-animation-button-border-slider text="Start" className="btn-border-stroke"></g-animation-button-border-slider>
      </li>
      <li>
        <g-animation-button-border-slider text="Start" className="btn-text-float-up"></g-animation-button-border-slider>
      </li>
      <li>
        <g-animation-button-border-slider
          text="Start"
          className="btn-primary btn-ghost btn-border-stroke btn-text-float-up"
        ></g-animation-button-border-slider>
      </li>
      <li>
        <g-animation-button-border-slider
          :multiple="borderSliderMultiple"
          text="Start"
          className="btn-border-stroke"
        ></g-animation-button-border-slider>
      </li>
      <li>
        <g-animation-button-border-slider
          :multiple="borderSliderMultiple"
          text="Start"
          className="btn-primary btn-ghost btn-border-stroke btn-text-float-up"
        ></g-animation-button-border-slider>
      </li>
    </ul>
    <h2>背景闪光：</h2>
    <g-animation-button-bgc-light text="HOVER ME"></g-animation-button-bgc-light>
    <h2>汉堡包：</h2>
    <g-animation-button-hamburger></g-animation-button-hamburger>
    <h2>爆炸：</h2>
    <g-animation-button-explode text="CLICK ME"></g-animation-button-explode>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class OwnButton extends Vue {
  private borderSliderMultiple = true
}
</script>

<style lang="sass" scoped>
.animation
  text-align: center

  .btn-slider
    display: flex
    justify-content: center

    li
      margin-right: 30px
</style>
