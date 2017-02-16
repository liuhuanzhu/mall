<template>
	<ul class="flex-middle body">
		<li v-for="(item,index) in items" 
			class="unit text-center" 
			@click="sortClick(index)"
			:class="{'active':index==curIndex}">
			<span class="body-label">{{item.name}}</span>
			<a class="iconfont body-icon" 
			:class="item.icon"></a>
		</li>
	</ul>
</template>
<script type="text/javascript">
	export default{
		name:"sort",
		data(){
			return{
				items:[
					{name:"默认",icon:'icon-i-arrow'},
					{name:"销量",icon:'icon-i-arrow'},
					{name:"新品",icon:'icon-i-arrow'},
					{name:"价格",icon:'icon-i-arrow'}
				],
				curIndex:0,
				sort:"asc"
			}
		},
		methods:{
			sortClick(index){
				let item=this.items[index];
				if(this.curIndex!=index){
					item.icon="icon-i-up";
					this.items[this.curIndex].icon="icon-i-arrow";
					this.sort="asc";
					this.curIndex=index;
				}else{
					this.sort="desc";
					item.icon=(item.icon=='icon-i-down'?'icon-i-up':'icon-i-down');
				}
			}
		}
	}
</script>
<style lang="less">
	@import '../../assets/less/common.less';
	.body{
		height:1.2rem;
		border-bottom: 1px solid @border-color;
		&-icon{
			font-size:0.27rem;
		}
	}
	.unit:nth-child(1)>.iconfont{
		display: none;
	}
	.active{
		color:@text-active;
	}
</style>