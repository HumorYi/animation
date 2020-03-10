/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:菜单
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-17 02:16:04
 * @LastEditTime: 2020-03-02 22:41:28
 */
import StaggeredFloatText from '@/components/animations/menu/StaggeredFloatText.vue'
import FillText from '@/components/animations/menu/FillText.vue'
import HoverImg from '@/components/animations/menu/HoverImg.vue'
import Shinchou from '@/components/animations/menu/Shinchou.vue'

export default {
  prefix: 'menu-',
  data: [
    {
      name: 'staggered-float-text',
      component: StaggeredFloatText
    },
    {
      name: 'fill-text',
      component: FillText
    },
    {
      name: 'hover-img',
      component: HoverImg
    },
    {
      name: 'shinchou',
      component: Shinchou
    }
  ]
}
