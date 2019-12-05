import Vue from 'vue'
import {
  Table,
  Button,
  Progress,
  Layout,
  Menu,
  Col,
  Row,
  Modal,
  Card,
  Tag
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.min.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './api'

Vue.use(Table)
Vue.use(Layout)
Vue.use(Button)
Vue.use(Progress)
Vue.use(Menu)
Vue.use(Col)
Vue.use(Row)
Vue.use(Modal)
Vue.use(Card)
Vue.use(Tag)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
