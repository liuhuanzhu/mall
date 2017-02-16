import axios from 'axios'
import Vue from 'vue'

const vueAxios=axios.create({
	baseURL:"http://wx.ez4s.com/easyshare-client/"
})
Vue.prototype.$http=vueAxios;
const API={
	/*微信配置信息**/
	wxConfig:"http://wx.ez4s.com/easyshare-client/weixin/jsApi.json",
	/*获取全部商品*/
	products:"product/manager.json",
	/**获取商品详情*/
	detail:"product/manager/",
	/**确认订单**/
	confirm:"order.json",
	/**微信支付**/
	wxPay:"http://wx.ez4s.com/easyshare-client/pay/tenpay/pay.json",
	/**支付宝支付**/
	zfbPay:"http://wx.ez4s.com/easyshare-client/pay/alipay/pay.json",
	/**添加收货地址*/
	address:"orderAddress.json",
	/**修改收货地址*/
	addressEdit:"orderAddress/",
 	/*设置收货地址为默认*/
  	defaultSet:"orderAddress/setDefault.json",
	/**取消订单*/
	cancelOrder:"order/cancelOrder.json",
	/*查看物流**/
	express:"express.json",
	/*申请售后**/
	save:"aftersale/save.json",
	/**售后详情*/
	customer:"aftersale/customer/",
	/**获取订单*/
	order:"order.json",
	/**获取订单详情**/
	orderDetail:"order/",
  	/**售后时 查询所需信息*/
  	detailSimple:"order/detail/",
	/*申请售后信息*/
	afterMarket:"api/afterMarket",
	/**获取售后详情*/
	afterDetail:"api/afterDetail",
  	/**取消售后*/
  	cancelAfter:"aftersale/cancle.json",
	/**上传图片*/
	upload:"image/uploadAfterSale.json",
	/**删除上传图片*/
	uploadDel:"image/delete.json",
  	/**获取分享code*/
  	shareCode:"link.json",
	/**获取分润订单**/
	profit:"order/profit.json",
  	/**获取累计收益*/
  	income:"/member/balance/",
 	/**提现*/
  	redPack:"/pay/sendRedpack.json",
  	/*体现记录*/
  	drawCash:"/withdrawCash.json",
	/**获取个人信息*/
	info:"/member/",
	/**获取地址列表*/
	adds:"orderAddress.json",
	/*获取省市区**/
	area:"product/area.json",
}

export {API}