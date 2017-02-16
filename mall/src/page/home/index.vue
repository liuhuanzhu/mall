<template>
	<div>
		<v-sort></v-sort>
		<v-search></v-search>
		<v-footer></v-footer>
	</div>
</template>
<script type="text/javascript">
	import {vFooter} from 'components/index';
	import vSearch from './vSearch.vue'
	import vSort from './vSort.vue'
	export default{
		name:"home",
		components:{
			vFooter,
			vSearch,
			vSort
		}
	}
</script>