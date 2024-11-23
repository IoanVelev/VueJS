import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import ButtonCounter from './components/ButtonCounter.vue';

const app = createApp(App);
//app.component('ButtonControl', ButtonCounter); -> Global component registration

app.mount('#app');
