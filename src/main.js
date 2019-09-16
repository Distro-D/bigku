import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import iview from 'iview';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(iview);
Vue.prototype.$bus = new Vue({
    data: {}
});
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
