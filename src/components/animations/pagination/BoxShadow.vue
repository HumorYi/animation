<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 阴影分页器
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-23 00:15:04
 * @LastEditTime: 2020-02-23 01:07:13
-->
<template>
  <ul class="pagination" :class="className">
    <li class="page-prev">
      <i class="iconfont icon-Bowarrowleft" :class="{ disabled: page === startPage }" @click="toPrev"></i>
    </li>
    <li v-for="item in totalPage" :key="item" class="page-number" :class="{ active: page === item }">
      <span @click="changePage(item)">{{ item }}</span>
    </li>
    <li class="page-next">
      <i class="iconfont icon-Bowarrowright" :class="{ disabled: page === totalPage }" @click="toNext"></i>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BoxShadow extends Vue {
  private page = 1
  private startPage = 1

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string

  @Prop({
    type: Number,
    required: true
  })
  private readonly totalPage!: number

  changePage(page: number) {
    if (page !== this.page) {
      this.page = page
    }
  }

  toPrev() {
    if (this.page !== this.startPage) {
      this.page--
    }
  }

  toNext() {
    if (this.page !== this.totalPage) {
      this.page++
    }
  }
}
</script>

<style lang="sass" scoped>
.pagination
  display: flex
  align-items: center
  padding: 10px 20px

  user-select: none
  background: white
  border-radius: 50px
  box-shadow: 0 0.3px 0.6px rgba(0, 0, 0, 0.056), 0 0.7px 1.3px rgba(0, 0, 0, 0.081), 0 1.3px 2.5px rgba(0, 0, 0, 0.1), 0 2.2px 4.5px rgba(0, 0, 0, 0.119), 0 4.2px 8.4px rgba(0, 0, 0, 0.144), 0 10px 20px rgba(0, 0, 0, 0.2)

  li
    &.page-number
      margin: 0 5px

      &:hover span
        color: white
        background-color: #777

      &.active span
        color: white
        background-color: #333

    &.page-prev,
    &.page-next
      font-weight: 700

    &.page-prev
      margin-right: 20px

    &.page-next
      margin-left: 20px

    span, .iconfont
      font-weight: 600
      color: #777
      cursor: pointer

    span
      display: inline-block
      padding: 6px 12px
      font-size: 20px
      border-radius: 50%
      transition: 0.3s

    .iconfont
      font-size: 30px

      &.disabled:hover
        cursor: not-allowed

      &:not(.disabled):hover
        color: #333
</style>
