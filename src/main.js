// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// 将eslint校验规则跳过，因为js中new一个对象需要对他赋值，而Vue实例化的时候不需要赋值
/* eslint-disable no-new */
new Vue({
  // 挂载点为，将App组建挂载
  el: '#app',
  components: { App },
  template: '<App/>'
})
