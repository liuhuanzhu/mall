<template>
	<div class="body">
		<div class="header flex-middle">
			<div class="unit-0"><img :src="user.mbHead" class="header-img"></div>
			<div class="unit-0">
				<div>{{user.mbNickname}}</div>
				<div v-if="user.mbMobileNumber">
					<i class="iconfont icon-i-phone vertical-m"></i>
					<span class="vertical-m">{{user.mbMobileNumber}}</span>
				</div>
			</div>
			<div class="unit iconfont icon-i-right text-right"></div>
		</div>
		<div class="order mb">
			<div class="order-top flex-middle">
				<span class="unit top-l">全部订单</span>
				<span class="unit top-r text-right">查看全部订单</span>
			</div>
			<ul class="order-link flex-middle">
				<li v-for="order in orders" class="unit text-center">
					<div class="iconfont" :class="order.cls"></div>
					<div>{{order.label}}</div>
				</li>
			</ul>
		</div>
		<div class="blance flex-middle mb">
			<span class="unit">我的余额</span>
			<span class="unit-0 flex-r">
				<span class="vertical-m" >{{user.mbAmount}}</span>
				<i class="iconfont icon-i-right vertical-m"></i>
			</span>
		</div>
		<div class="address flex-middle">
			<span class="unit">收货地址</span>
			<span class="unit-0 flex-r"><i class="iconfont icon-i-right"></i></span>
		</div>
	</div>
</template>
<script type="text/javascript">
	import {mapGetters} from 'vuex'
	export default{
		name:"user",
		data(){
			return{
				orders:[
					{cls:"icon-i-pay",label:"待付款"},
					{cls:"icon-i-go",label:"待发货"},
					{cls:"icon-i-car",label:"已发货"},
					{cls:"icon-i-kf",label:"售后中"},
				]
			}
		},
		created(){
			let that=this;
			this.$http.get(API.info+this.user.id+".json").then(
				function(response){
					if(response.data.code=="001"){
						that.$store.commit("user_set",response.data.data);
					}
				}
			)
		},
		computed:{
			...mapGetters(['user'])
		}
	}
</script>
<style lang="less" scoped>
	@import '../../assets/less/common.less';
	.p15{
		padding:0 0.4rem ;
	}
	.mb{
		margin-bottom:0.32rem;
	}
	.header{
		height:2.67rem;
		.p15;
		color: #fff;
		background:url('../../assets/img/user_header_bg.png') repeat-x top left;
		background-size:100% 100%;
		&-img{
			width: 1.6rem;height:1.6rem;border-radius:50%;margin-right:0.27rem;
		}
	}
	.order{
		background-color:#fff;
		&-top{
			height:1.07rem;
			.p15;
			border-bottom: 1px solid @border-color;
			.top-l{
				font-size:@font-size-big;
			}
			.top-r{
				font-size:@font-size-min;
				color:#969696;
			}
		}
		&-link{
			height:1.33rem;
		}
		.iconfont{
			margin-bottom:-0.13rem;
		}
	}
	.blance{
		.p15;
		height:1.07rem;
		background-color:#fff;
	}
	.address{
		.p15;
		height:1.07rem;
		background-color:#fff;
	}
	.flex-r{
		width:2rem;
		text-align:right;
	}
</style>