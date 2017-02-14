import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes=[
	{
		name:"*",
		path:"/",
		component:(resolve)=>require(['./page/home/index.vue'],resolve)
	},
	{
		name:"home",
		path:"/home",
		component:(resolve)=>require(['./page/home/index.vue'],resolve)
	},
	{
		name:"user",
		path:"/user",
		component:(resolve)=>require(['./page/user/index.vue'],resolve)
	}
]


export default new Router({
	routes
})