import Vuex from 'vuex'
import Vue  from 'vue'
import user from './module/user.js'
Vue.use(Vuex)


const store=new Vuex.Store({
	modules:{
		user:user
	}
})

export default store;