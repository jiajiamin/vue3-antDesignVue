/*
 * @Author: your name
 * @Date: 2021-01-29 10:11:42
 * @LastEditTime: 2021-01-29 10:24:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3\vue3\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd  from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App)
app.config.productionTip = false;
app.use(router)
app.use(store)
app.use(Antd);

app.mount('#app');
