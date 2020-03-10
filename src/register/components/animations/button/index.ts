/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:按钮
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-17 02:16:04
 * @LastEditTime: 2020-03-02 09:04:55
 */
import BorderSlider from '@/components/animations/button/BorderSlider.vue'
import BgcLight from '@/components/animations/button/BgcLight.vue'
import Hamburger from '@/components/animations/button/Hamburger.vue'
import Explode from '@/components/animations/button/Explode.vue'

export default {
  prefix: 'button-',
  data: [
    {
      name: 'border-slider',
      component: BorderSlider
    },
    {
      name: 'bgc-light',
      component: BgcLight
    },
    {
      name: 'hamburger',
      component: Hamburger
    },
    {
      name: 'explode',
      component: Explode
    }
  ]
}
