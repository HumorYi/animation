/*
 * @Author: Bamboo
 * @AuthorEmail: bamboo8493@126.com
 * @AuthorDescription: 程序入口
 * @Modifier:
 * @ModifierEmail:
 * @ModifierDescription:
 * @Date: 2020-02-16 16:07:12
 * @LastEditTime: 2020-02-16 22:42:15
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './register'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
