import Vue from 'vue'
import App from './App.vue'
import "reset.css" // 重置默认样式
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
