<!--
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-03-02 22:59:42
 * @LastEditTime: 2020-03-02 23:14:46
-->
<template>
  <router-link
    v-if="item.routerName"
    :to="{ name: item.routerName, params: item.params || {}, query: item.query || {} }"
  >
    <slot></slot>
  </router-link>
  <a v-else-if="item.href" :href="item.href" :target="item.target || '_self'">
    <slot></slot>
  </a>
  <a v-else>
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Jump extends Vue {
  @Prop({
    type: Object,
    required: true
  })
  private readonly item!: object
}
</script>

<style lang="sass" scoped></style>
