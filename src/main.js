import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App';
import './registerServiceWorker';
import router from './router';
import store from './store';
import interceptor from './api/interceptors';

interceptor();
Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
