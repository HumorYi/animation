<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:饼图
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 12:08:55
 * @LastEditTime: 2020-03-02 14:57:30
-->
<template>
  <div class="frosted-glass" :class="className">
    <h1 v-if="title" class="title">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class FrostedGlass extends Vue {
  @Prop({
    type: String,
    default: ''
  })
  private readonly title!: string

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string
}
</script>

<style lang="sass" scoped>
.frosted-glass
  display: flex
  justify-content: center
  align-items: center
  padding-top: 30px
  padding-bottom: 30px

  box-shadow: 0 0.3px 0.7px rgba(0, 0, 0, 0.126), 0 0.9px 1.7px rgba(0, 0, 0, 0.179), 0 1.8px 3.5px rgba(0, 0, 0, 0.224), 0 3.7px 7.3px rgba(0, 0, 0, 0.277), 0 10px 20px rgba(0, 0, 0, 0.4)
  backdrop-filter: blur(20px)
  transition: 0.5s ease

  &:hover
    box-shadow: 0 0.7px 1px rgba(0, 0, 0, 0.157), 0 1.7px 2.6px rgba(0, 0, 0, 0.224), 0 3.5px 5.3px rgba(0, 0, 0, 0.28), 0 7.3px 11px rgba(0, 0, 0, 0.346), 0 20px 30px rgba(0, 0, 0, 0.5)

  .title
    text-align: center
    font-size: 40px
    letter-spacing: 20px
    color: white
</style>
