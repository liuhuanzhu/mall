import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes=[
	{
		name:"*",
		path:"/",
		component:require("./page/home/index.vue")
	},
	{
		name:"home",
		path:"/home",
		component:require("./page/home/index.vue")
	},
	{
		name:"user",
		path:"/user",
		component:require("./page/user/index.vue")
	}
]


export default new Router({
	routes
})