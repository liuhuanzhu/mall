
/**
 * [USER_SET 更改用户信息]
 * @type {String}
 */
const USER_SET="user_set";


const store={
	state:{
		user:{
			id:'d345b4117e484e0bbed292018d94f604',
			mbOpenId:'oWINev7aEuI-By-XhkhPrhhHNk3Q'
		}
	},
	mutations:{
		[USER_SET](state,user){
			state.user=user;
		}
	},
	getters:{
		user(state){
			return state.user;
		},
		id(state){
			return state.user.id
		}
	}
}


export default store;