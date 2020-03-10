/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:卡片
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-17 02:16:04
 * @LastEditTime: 2020-03-02 22:18:28
 */
import HoverExpand from '@/components/animations/card/HoverExpand.vue'
import HoverRotate from '@/components/animations/card/HoverRotate.vue'

export default {
  prefix: 'card-',
  data: [
    {
      name: 'hover-expand',
      component: HoverExpand
    },
    {
      name: 'hover-rotate',
      component: HoverRotate
    }
  ]
}
