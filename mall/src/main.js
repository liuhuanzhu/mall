import Vue from 'vue'
import router from './routers.js'
import store from './store/store.js'
import App from 'App.vue'
import {API} from './config.js'
import './util.js'

/**
 * [API 映射给window作为全局变量]
 * @type {[type]}
 */
window.API=API;
const app=new Vue({
	el:"#app",
	router,
	store,
	...App
})