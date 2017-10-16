// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'

Vue.config.productionTip = false



import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)


import axios from "axios"
import vueAxios from "vue-axios"

Vue.use(vueAxios,axios)


new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
