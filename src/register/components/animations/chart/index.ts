/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:图表
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-17 02:16:04
 * @LastEditTime: 2020-03-03 01:12:44
 */
import Pie from '@/components/animations/chart/Pie.vue'
import PieRotate from '@/components/animations/chart/PieRotate.vue'

export default {
  prefix: 'chart-',
  data: [
    {
      name: 'pie',
      component: Pie
    },
    {
      name: 'pie-rotate',
      component: PieRotate
    }
  ]
}
