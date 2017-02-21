import Vue from 'vue'

Vue.filter('price',function(value,para){
	if(typeof value=='number' && Number.isInteger(para)){
		return Number(value).toFixed(para);
	}
	return value;
})