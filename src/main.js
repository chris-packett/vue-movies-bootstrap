import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);
Vue.use(require('vue-moment'));

const router = new VueRouter({
  mode: 'history',
  routes: routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');
