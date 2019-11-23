import { Vue } from 'vue-property-decorator';
import App from './App.vue';
import router from './routing/script';
import { i18n } from './initialize-config';
import { store } from 'Store/store';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
  i18n,
});
