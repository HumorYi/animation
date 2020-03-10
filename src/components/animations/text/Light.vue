<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:发光文本
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-24 10:53:20
 * @LastEditTime: 2020-02-24 17:20:26
-->
<template>
  <div class="light" :class="className">
    <h1 class="glowIn title">
      <span v-for="(item, i) in title.split('')" :key="i" :style="{ animationDelay: i * delay + 's' }">{{ item }}</span>
    </h1>
    <p class="glowIn text">
      <span v-for="(item, i) in text.split('')" :key="i" :style="{ animationDelay: i * delay + 's' }">{{ item }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Light extends Vue {
  @Prop({
    type: String,
    required: true
  })
  private readonly title!: string

  @Prop({
    type: String,
    required: true
  })
  private readonly text!: string

  @Prop({
    type: Number,
    default: 0.06
  })
  private readonly delay!: number

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string
}
</script>

<style lang="sass" scoped>
.title
  text-align: center

.text
  line-height: 1.8
  text-align: left

.glowIn
  color: white

  span
    animation: glow-in 0.8s both

@keyframes glow-in
  from
    opacity: 0

  65%
    opacity: 1
    text-shadow: 0 0 25px white

  75%
    opacity: 1

  to
    opacity: 0.7
</style>
