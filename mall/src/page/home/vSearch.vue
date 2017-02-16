<template>
	<div class="flex-middle body">
		<input type="text" 
		 placeholder="请输入您想要搜索的商品" 
		 class="unit body-input" />
		<a class="iconfont icon-i-search unit-0 body-btn text-center" @click="goSearch"></a>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"search",
		methods:{
			goSearch(){
				
			}
		}
	}
</script>
<style lang="less">
	@import '../../assets/less/common.less';
	.body{
		height:1.33rem;
		background-color: #f9f9f9;
		.padding-lr(0.27rem,0);
		&-input{
			height:0.93rem;border-radius: @border-radius;border: none;
			background-color:#eeeeee;padding-left: 0.4rem;
		}
		&-btn{
			width: 0.93rem;
		}
	}
</style>