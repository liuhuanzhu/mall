import Vue from 'vue'
import router from './routers.js'
import App from 'App.vue'
const app=new Vue({
	el:"#app",
	router,
	...App
})