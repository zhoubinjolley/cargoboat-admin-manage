/*
 * @Author: Bin.Zhou
 * @Date: 2022-07-12 10:08:01
 * @LastEditTime: 2022-07-14 17:07:46
 * @LastEditors: Bin.Zhou
 * @Description: 
 * @Copyright: Copyright (c) Reserved 
 */
import { createApp } from 'vue'
import store from "./store";
import router from "./router";
import App from './App.vue'
import ElementPlus from '@/styles/element-plus'
import '@/styles/index.scss'


const app = createApp(App)
// 注册ElementPlus
ElementPlus(app)
app.use(store).use(router).mount('#app')
