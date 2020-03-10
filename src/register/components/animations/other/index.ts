/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription:
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-17 02:15:57
 * @LastEditTime: 2020-02-24 10:30:33
 */
import Exchange from '@/components/animations/other/Exchange.vue'
import Snow from '@/components/animations/other/Snow.vue'
import TodoList from '@/components/animations/other/TodoList.vue'
import ScarletMoon from '@/components/animations/other/ScarletMoon.vue'

export default {
  prefix: '',
  data: [
    {
      name: 'exchange',
      component: Exchange
    },
    {
      name: 'snow',
      component: Snow
    },
    {
      name: 'todo-list',
      component: TodoList
    },
    {
      name: 'scarlet-moon',
      component: ScarletMoon
    }
  ]
}
