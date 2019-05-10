// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import App from './App'
import router from './router'
import Vue from 'vue'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'src/scss/style.scss'

Vue.use(BootstrapVue)

const config = {
       apiKey: "AIzaSyC5oL_0wz0CZRgdr0L3jh_PKQwo8eBI2VA",
        authDomain: "fir-fashapp.firebaseapp.com",
        databaseURL: "https://fir-fashapp.firebaseio.com",
        projectId: "fir-fashapp",
        storageBucket: "fir-fashapp.appspot.com",
        messagingSenderId: "488869887491",
        appId: "1:488869887491:web:862870b324419646"
};

firebase.initializeApp(config);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
