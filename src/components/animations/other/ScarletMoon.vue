<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 猩红之月
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-24 10:27:00
 * @LastEditTime: 2020-02-24 17:19:32
-->
<template>
  <div class="loading"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ScarletMoon extends Vue {}
</script>

<style lang="sass" scoped>
.loading
  position: relative
  width: 100px
  height: 100px
  margin: 0 auto
  background-color: black
  border-radius: 50%
  box-shadow: inset 0.5em -0.5em crimson
  animation: spin 2s linear infinite

  &:before,
  &:after
    position: absolute
    left: 0
    content: ""
    width: 100%
    height: 100%
    background-color: inherit
    border-radius: inherit
    box-shadow: inherit

  &:before
    filter: blur(5px)

  &:after
    filter: blur(10px)

@keyframes spin
  to
    transform: rotate(1turn)
</style>
