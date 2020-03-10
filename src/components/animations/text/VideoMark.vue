<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:卡片触摸扩大
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-24 10:53:20
 * @LastEditTime: 2020-03-02 20:36:21
-->
<template>
  <div class="video-mark" :class="className">
    <video autoplay muted loop preload :poster="poster">
      <source v-for="(item, i) in source" :key="i" :src="item" />
    </video>
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class VideoMark extends Vue {
  @Prop({
    type: String,
    required: true
  })
  private readonly title!: string

  @Prop({
    type: String,
    required: true
  })
  private readonly poster!: string

  @Prop({
    type: Array,
    required: true
  })
  private readonly source!: string[]

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string
}
</script>

<style lang="sass" scoped>
.video-mark
  position: relative

  h1, video
    width: 100%
    height: 100%

  h1
    font-size: 200px
    text-align: center
    mix-blend-mode: screen
    background-color: #fff

  video
    position: absolute
    top: 0
    left: 0
    object-fit: cover
</style>
