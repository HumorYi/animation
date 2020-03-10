/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:文本
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-17 02:16:04
 * @LastEditTime: 2020-03-02 20:09:32
 */
import SplitHeader from '@/components/animations/text/SplitHeader.vue'
import SplitCenter from '@/components/animations/text/SplitCenter.vue'
import SliderBgc from '@/components/animations/text/SliderBgc.vue'
import Light from '@/components/animations/text/Light.vue'
import Neon from '@/components/animations/text/Neon.vue'
import ThreeD from '@/components/animations/text/ThreeD.vue'
import VideoMark from '@/components/animations/text/VideoMark.vue'

export default {
  prefix: 'text-',
  data: [
    {
      name: 'split-header',
      component: SplitHeader
    },
    {
      name: 'split-center',
      component: SplitCenter
    },
    {
      name: 'slider-bgc',
      component: SliderBgc
    },
    {
      name: 'light',
      component: Light
    },
    {
      name: 'neon',
      component: Neon
    },
    {
      name: 'three-d',
      component: ThreeD
    },
    {
      name: 'video-mark',
      component: VideoMark
    }
  ]
}
