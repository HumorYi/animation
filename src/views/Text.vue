<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 文本动画
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 00:36:01
 * @LastEditTime: 2020-03-02 20:13:53
-->
<template>
  <div class="animation">
    <h1>文本动画 demo:</h1>
    <h2>头部分割着陆：</h2>
    <g-animation-text-split-header
      text="Ano hi watashitachi mada shiranai no Fushigi no monogatari desu."
    ></g-animation-text-split-header>
    <h2>中间分割着陆：</h2>
    <g-animation-text-split-center text="sword art online"></g-animation-text-split-center>
    <h2>划过背景：</h2>
    <g-animation-text-slider-bgc title="I'm alphardex." subtitle="A CSS Wizard"></g-animation-text-slider-bgc>
    <h2>发光：</h2>
    <g-animation-text-light
      title="Hello World"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis pellentesque id nibh tortor. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. A lacus vestibulum sed arcu."
    ></g-animation-text-light>
    <h2>霓虹：</h2>
    <g-animation-text-neon text="FUSHIGI NO MONOGATARI"></g-animation-text-neon>
    <h2>3D：</h2>
    <g-animation-text-three-d text="LOADING"></g-animation-text-three-d>
    <h2>视频蒙版：</h2>
    <g-animation-text-video-mark
      title="OCEAN"
      poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
      :source="videoMarkSource"
    ></g-animation-text-video-mark>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class OwnText extends Vue {
  private readonly videoMarkSource: string[] = [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm',
    'http://thenewcode.com/assets/videos/ocean-small.mp4'
  ]
}
</script>

<style lang="sass" scoped>
.animation
  text-align: center
</style>
