import { Vue } from 'vue-property-decorator'
import App from './App.vue'
import router from './routing/script'
import './initialize-config';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
