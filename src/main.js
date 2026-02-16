import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import i18n from './i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/fonts.css'

createApp(App)
    .use(store)
    .use(router)
    .use(VueAxios, axios)
    .use(i18n)
    .use(ElementPlus)
    .mount('#app')
