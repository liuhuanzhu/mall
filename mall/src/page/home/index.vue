<template>
	<div>
		<v-sort></v-sort>
		<v-search></v-search>
		<ul class="products">
			<li v-for="item in lists" class="products-item">
				<div class="item-header"><img :src="item.pbUrl"/></div>
				<p class="item-title">{{item.pbTitle}}</p>
				<div class="item-price">
					<span class="price-real" >￥{{item.pbRealPrice|price(2)}}</span>
					<span class="price-pb">￥{{item.pbPrice|price(2)}}</span>
				</div>
				<div class="item-yong">
					<i class="iconfont icon-i-yong"></i>
					<span>可获得10%的分佣</span>
				</div>
				<div class="item-share">
					<div class="iconfont icon-i-share"></div>
					<div>分享</div>
				</div>
			</li>
		</ul>
		<v-footer></v-footer>
	</div>
</template>
<script type="text/javascript">
	import {vFooter} from 'components/index';
	import vSearch from './vSearch.vue'
	import vSort from './vSort.vue'
	export default{
		name:"home",
		data(){
			return{
				params:{
					pbTitle:'',
					pageNum:1,
					pageSize:15,
					column:'',
					orderType:'asc'
				},
				lists:[]
			}
		},
		created(){
			this.getData();
		},
		methods:{
			getData(){
				let that=this;
				this.$http.get(API.products,{params:this.params}).then(
					function(response){
						that.lists=response.data.data.list;
					}
				)
			}
		},
		components:{
			vFooter,
			vSearch,
			vSort
		}
	}
</script>
<style lang="less" scoped>
	@import '../../assets/less/common.less';
	.products{
		display: flex;
		display: -webkit-flex;
		flex-flow: row wrap;
		justify-content:space-between;
		padding:0.27rem;
		&-item{
			position:relative;
			width: 4.6rem;
			overflow:hidden;
			border: 1px solid @border-color;
			margin-bottom: 0.27rem;
		}
		.item-header>img{
			display:block;
			border-bottom: 1px solid @border-color;
		}
		.price-real{
			color:#fd6800;font-size: @font-size-big;
		}
		.price-pb{
			color:#999999;font-size: 0.32rem;text-decoration: line-through;
		}
		.item-title{
			overflow:hidden;
			text-overflow:ellipsis;
			display: -webkit-box;
    		-webkit-line-clamp: 2;
    		-webkit-box-orient: vertical;
    		padding-right: 0.05rem;
    		margin: 0.21rem 0;
    		height:1.07rem;
		}
		.icon-i-yong{
			padding-left:0.13rem;
			color:#ea513a;
			vertical-align: middle;
		}
		.item-share{
			position:absolute;right: 0.05rem;bottom:0.1rem;font-size:0.32rem;
			.icon-i-share{
				display:block;text-align:center;font-size:0.27rem;margin-bottom:0rem;
			}
		}
	}
	
</style>