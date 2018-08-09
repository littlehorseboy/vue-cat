// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { loadScript } from 'esri-loader';
import Vuefire from 'vuefire';
import firebase from './service/firebase';
import App from './App';
import router from './router';

// preload the ArcGIS API
const options = {
  url: 'https://js.arcgis.com/3.23',
};
loadScript(options);

Vue.use(Vuefire);

Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  firebase: {
    cat: firebase.database.ref('cat').orderByChild('created_at'),
  },
  router,
  components: { App },
  template: '<App/>',
});
