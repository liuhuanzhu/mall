
/**
 * [USER_SET 更改用户信息]
 * @type {String}
 */
const USER_SET="user_set";


const store={
	state:{
		user:{

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
		}
	}
}


export default store;