<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 霓虹文本
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-24 11:14:41
 * @LastEditTime: 2020-02-24 11:31:52
-->
<template>
  <div class="neon" :class="className">{{ text }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Neon extends Vue {
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
@import url(https://fonts.googleapis.com/css?family=Pacifico)

.neon
  color: #cce7f8
  font-size: 30px
  font-family: 'Pacifico', cursive
  animation: shining 0.1s alternate infinite

@keyframes shining
  from
    text-shadow: 0 0 6px rgba(182, 211, 207, 0.9), 0 0 30px rgba(182, 211, 207, 0.3), 0 0 12px rgba(15, 115, 223, 0.5), 0 0 21px rgba(15, 115, 223, 0.9), 0 0 34px rgba(15, 115, 223, 0.8), 0 0 54px rgba(15, 115, 223, 0.9)

  to
    text-shadow: 0 0 6px rgba(182, 211, 207, 1), 0 0 30px rgba(182, 211, 207, 0.4), 0 0 12px rgba(15, 115, 223, 0.6), 0 0 22px rgba(15, 115, 223, 0.8), 0 0 38px rgba(15, 115, 223, 0.9), 0 0 60px rgba(15, 115, 223, 1)
</style>
