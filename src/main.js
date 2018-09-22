import Vue from 'vue';
import BootstrapVue from "bootstrap-vue";
import App from './components/App';
import router from './routes';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
});
