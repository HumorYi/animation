<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: attr 属性 实现 交错浮点文字菜单
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 00:51:35
 * @LastEditTime: 2020-03-02 23:26:44
-->
<template>
  <ul class="menu" v-if="menu.length > 0" :class="className">
    <li v-for="item in menu" :key="item.text">
      <g-jump :item="item">
        <template>
          <span
            v-for="(letter, i) in item.text.split('')"
            :key="i"
            :data-text="letter"
            :style="{ transitionDelay: i / 20 + 's' }"
          >
            {{ letter }}
          </span>
        </template>
      </g-jump>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class StaggeredFloatTextMenu extends Vue {
  @Prop({
    type: Array,
    required: true
  })
  private readonly menu!: object

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string
}
</script>

<style lang="sass" scoped>
.menu
  display: inline-block

  li
    >a
      display: flex
      padding: 6px
      color: white
      overflow: hidden

      span
        position: relative
        transition: 0.3s

        &:before
          position: absolute
          content: attr(data-text)
          transform: translateY(130%)

      &:hover span
        transform: translateY(-130%)
</style>
