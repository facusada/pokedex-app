import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify.js';
import store from './store/pokeStore.js';

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .mount('#app');