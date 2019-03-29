import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from '@/plugin/router'
import i18n from '@/plugin/i18n/i18n'
import cookie from '@/plugin/cookie/cookie'
import store from '@/plugin/store/store'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')
