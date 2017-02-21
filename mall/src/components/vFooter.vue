<template>
	<ul class="flex-middle body">
		<li v-for="(item,index) in items" 
			class="unit text-center item" 
			@click="itemClick(index)"
			:class="{'active':index==parseInt(curIndex)}">
			<div class="iconfont item-icon" :class="'icon-i-'+item.icon"></div>
			<div>{{item.label}}</div>
		</li>
	</ul>
</template>
<script type="text/javascript">
	export default{
		name:"footer",
		props:{
			curIndex:{
				type:String,
				default:"0"
			}
		},
		data(){
			return{
				items:[
					{icon:"shop",label:"买买买"},
					{icon:"rmb",label:"赚零花"},
					{icon:"my",label:"我的"},
				]
			}
		},
		methods:{
			itemClick(index){
				switch(index){
					case 0:
					this.$router.push("home");
					break;
					case 1:
					this.$router.push("user");
					break;
					case 2:
					this.$router.push("user");
					break;
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '../assets/less/common.less';
	.body{
		position:absolute;
		left: 0;bottom:0;width: 100%;
		height: 1.33rem;
		background-color: @background-black;
		border-top: 1px solid @border-color;
		.item-icon{
			margin-bottom: -0.13rem;
		}
		.active{
			color: @text-active;
		}
	}
</style>
