<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:确认弹窗
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-24 16:58:23
 * @LastEditTime: 2020-03-01 23:23:34
-->
<template>
  <dialog ref="dialog" class="modal" :class="className">
    <i class="iconfont icon-iconfontgantanhao"></i>
    <h2 v-if="title" class="title">{{ title }}</h2>
    <p v-if="content" class="content">{{ content }}</p>
    <div class="options">
      <button
        class="btn btn-round btn-fill btn-fill-left option confirm"
        :data-text="btnConfirmText"
        @click="ownConfirm"
      ></button>
      <button
        class="btn btn-round btn-fill btn-fill-right option cancel"
        :data-text="btnCancleText"
        @click="ownCancle"
      ></button>
    </div>
  </dialog>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue, Watch } from 'vue-property-decorator'

@Component
export default class Confirm extends Vue {
  @Ref() private readonly dialog!: HTMLDialogElement

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string

  @Prop({
    type: String
  })
  private readonly title!: string

  @Prop({
    type: String
  })
  private readonly content!: string

  @Prop({
    type: String,
    default: 'Yes'
  })
  private readonly btnConfirmText!: string

  @Prop({
    type: String,
    default: 'No'
  })
  private readonly btnCancleText!: string

  @Prop({
    type: Boolean,
    required: true
  })
  private readonly isShow!: boolean

  /* eslint-disable */
  @Prop({
    type: Function,
    required: true
  })
  private confirm!: any

  @Prop({
    type: Function,
    required: true
  })
  private cancle!: any
  /* eslint-enable */

  @Watch('isShow')
  onIsShowChange() {
    this.isShow ? this.showModal() : this.hideModal()
  }

  private showModal(): void {
    this.dialog.showModal()
  }

  private hideModal(): void {
    this.dialog.close()
  }

  private ownConfirm(): void {
    this.confirm()
  }

  private ownCancle(): void {
    this.cancle()
  }
}
</script>

<style lang="sass" scoped>
@import url(https://fonts.googleapis.com/css?family=Lato)

$primary-color: hsl(171, 100%, 41%)
$success-color: hsl(141, 53%, 53%)
$danger-color: hsl(348, 86%, 61%)

.btn
  position: relative
  padding: 10px
  font-size: 16px
  color: hsl(0, 0%, 13%)
  text-decoration: none
  background-color: white
  border: transparent
  border-radius: 3px
  outline: transparent
  cursor: pointer
  user-select: none
  white-space: nowrap
  transition: 0.25s

  &-danger
    color: white
    background-color: $danger-color

    &:hover
      background-color: hsl(348, 86%, 53%)

  &-round
    border-radius: 30px

  &-fill
    overflow: hidden

    &-left
      &:before
        transform: translateX(100%)

    &-right
      &:before
        transform: translateX(-100%)

    &:before
      position: absolute
      content: ""
      top: 0px
      left: 0px
      width: 100%
      height: 100%
      border-radius: inherit
      transition: 0.4s cubic-bezier(0.75, 0, 0.25, 1)

    &:after
      position: relative
      content: attr(data-text)
      transition: 0.4s ease

    &:hover
      &:before
          transform: translateX(0)

      &:after
        color: white !important

.modal
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  z-index: 999
  padding: 30px
  color: white
  background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%)
  border: transparent
  border-radius: 12px
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035), 0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07)
  animation: show-modal 0.5s ease forwards

  &:backdrop
    background: rgba(0, 0, 0, 0.4)
    backdrop-filter: blur(3px)

  .iconfont
    margin-bottom: 10px
    font-size: 40px
    font-weight: bold
    opacity: 0
    animation: show-modal-icon 0.5s ease 0.2s forwards

  .title
    margin-top: 0
    margin-bottom: 10px
    opacity: 0
    animation: show-modal-text 0.5s ease 0.35s forwards

  .content
    margin: 0
    opacity: 0
    animation: show-modal-text 1s ease 0.5s forwards

  .options
    margin-top: 30px
    display: flex
    justify-content: space-around

    .option
      width: 100px
      text-align: center
      font-size: 20px
      font-weight: 700

      &:not(:last-child)
        margin-right: 20px

    .confirm
      opacity: 0
      animation: show-modal-option 0.5s ease 0.65s forwards

      &:before
        background: $success-color

      &:after
        color: $success-color

    .cancel
      opacity: 0
      animation: show-modal-option 0.5s ease 0.8s forwards

      &:before
        background: $danger-color

      &:after
        color: $danger-color

@keyframes show-modal
  from
    transform: scale(0.8)

  50%
    transform: scale(1.1)
    opacity: 1

  to
    transform: scale(1)
    opacity: 1

@keyframes show-modal-icon
  from
    transform: scale(0.4)

  50%
    transform: scale(1.2)
    opacity: 1

  to
    transform: scale(1)
    opacity: 1

@keyframes show-modal-text
  from
    transform: scale(0.6)

  50%
    transform: scale(1.2)
    opacity: 1

  to
    transform: scale(1)
    opacity: 1

@keyframes show-modal-option
  from
    transform: scale(0.4)

  50%
    transform: scale(1.2)
    opacity: 1

  to
    transform: scale(1)
    opacity: 1
</style>
