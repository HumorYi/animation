<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: TodoList
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-22 01:44:57
 * @LastEditTime: 2020-02-22 14:44:03
-->
<template>
  <form class="todo-list-form" :class="className">
    <fieldset class="todo-list">
      <legend class="todo-list__title">{{ title }}</legend>
      <template v-if="todolist.length > 0">
        <label class="todo-list__label" v-for="(item, i) in todolist" :key="i">
          <input type="checkbox" :checked="item.isFinished" />
          <i class="check"></i>
          <span>{{ item.text }}</span>
        </label>
      </template>
    </fieldset>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TodoList extends Vue {
  @Prop({
    type: String,
    default: 'My Special Todo List'
  })
  private readonly title!: string

  @Prop({
    type: Array,
    required: true
  })
  private readonly todolist!: object

  @Prop({
    type: String,
    default: ''
  })
  private readonly className!: string
}
</script>

<style lang="sass" scoped>
.todo-list-form
  display: inline-block

  .todo-list
    display: flex
    flex-direction: column
    padding: 0 75px 10px 30px
    background: #162740
    border: transparent

    .todo-list__title
      padding: 3px 6px
      color: #f1faee
      background-color: #264456

    .todo-list__label
      display: flex
      align-items: center
      margin: 40px 0
      font-size: 24px
      color: #f1faee
      cursor: pointer

      input[type="checkbox"]
        opacity: 0
        appearance: none

        & + .check
          position: absolute
          width: 25px
          height: 25px
          border: 2px solid #f1faee
          transition: 0.2s

        &:checked + .check
          width: 25px
          height: 15px
          border-top: transparent
          border-right: transparent
          transform: rotate(-45deg)

        & ~ span
          position: relative
          left: 40px
          white-space: nowrap
          transition: 0.5s

          &:before
            position: absolute
            content: ""
            top: 50%
            left: 0
            width: 100%
            height: 1px
            background: #f1faee
            transform: scaleX(0)
            transform-origin: right
            transition: transform 0.5s

        &:checked ~ span
          color: #585b57

          &:before
            transform: scaleX(1)
            transform-origin: left
</style>
