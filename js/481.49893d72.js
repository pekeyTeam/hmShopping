"use strict";(self["webpackChunkhmshoping"]=self["webpackChunkhmshoping"]||[]).push([[481],{6481:function(t,s,a){a.r(s),a.d(s,{default:function(){return m}});a(4114);var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"user"},[t.isLogin?s("div",{staticClass:"head-page"},[t._m(0),s("div",{staticClass:"info"},[s("div",{staticClass:"mobile"},[t._v(t._s(t.detail.mobile))]),s("div",{staticClass:"vip"},[s("van-icon",{attrs:{name:"diamond-o"}}),t._v(" 普通会员 ")],1)])]):s("div",{staticClass:"head-page",on:{click:function(s){return t.$router.push("/login")}}},[t._m(1),t._m(2)]),s("div",{staticClass:"my-asset"},[s("div",{staticClass:"asset-left"},[s("div",{staticClass:"asset-left-item"},[s("span",[t._v(t._s(t.detail.pay_money||0))]),s("span",[t._v("账户余额")])]),t._m(3),t._m(4)]),s("div",{staticClass:"asset-right"},[s("div",{staticClass:"asset-right-item"},[s("van-icon",{attrs:{name:"balance-pay"}}),s("span",[t._v("我的钱包")])],1)])]),s("div",{staticClass:"order-navbar"},[s("div",{staticClass:"order-navbar-item",on:{click:function(s){return t.$router.push("/myorder?dataType=all")}}},[s("van-icon",{attrs:{name:"balance-list-o"}}),s("span",[t._v("全部订单")])],1),s("div",{staticClass:"order-navbar-item",on:{click:function(s){return t.$router.push("/myorder?dataType=payment")}}},[s("van-icon",{attrs:{name:"clock-o"}}),s("span",[t._v("待支付")])],1),s("div",{staticClass:"order-navbar-item",on:{click:function(s){return t.$router.push("/myorder?dataType=delivery")}}},[s("van-icon",{attrs:{name:"logistics"}}),s("span",[t._v("待发货")])],1),s("div",{staticClass:"order-navbar-item",on:{click:function(s){return t.$router.push("/myorder?dataType=received")}}},[s("van-icon",{attrs:{name:"send-gift-o"}}),s("span",[t._v("待收货")])],1)]),s("div",{staticClass:"service"},[s("div",{staticClass:"title"},[t._v("我的服务")]),s("div",{staticClass:"content"},[s("div",{staticClass:"content-item"},[s("van-icon",{attrs:{name:"records"}}),s("span",[t._v("收货地址")])],1),s("div",{staticClass:"content-item"},[s("van-icon",{attrs:{name:"gift-o"}}),s("span",[t._v("领券中心")])],1),s("div",{staticClass:"content-item"},[s("van-icon",{attrs:{name:"gift-card-o"}}),s("span",[t._v("优惠券")])],1),s("div",{staticClass:"content-item"},[s("van-icon",{attrs:{name:"question-o"}}),s("span",[t._v("我的帮助")])],1),s("div",{staticClass:"content-item"},[s("van-icon",{attrs:{name:"balance-o"}}),s("span",[t._v("我的积分")])],1),s("div",{staticClass:"content-item"},[s("van-icon",{attrs:{name:"refund-o"}}),s("span",[t._v("退换/售后")])],1)])]),s("div",{staticClass:"logout-btn"},[s("button",{on:{click:t.onLogin}},[t._v("退出登录")])])])},n=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"head-img"},[s("img",{attrs:{src:a(7767),alt:""}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"head-img"},[s("img",{attrs:{src:a(7767),alt:""}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"info"},[s("div",{staticClass:"mobile"},[t._v("未登录")]),s("div",{staticClass:"words"},[t._v("点击登录账号")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"asset-left-item"},[s("span",[t._v("0")]),s("span",[t._v("积分")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"asset-left-item"},[s("span",[t._v("0")]),s("span",[t._v("优惠券")])])}],e=(a(2636),a(6579)),r=a(5720);const c=()=>r.A.get("/user/info");var o={name:"UserPage",data(){return{detail:{}}},created(){this.isLogin&&this.getUserInfoDetail()},computed:{isLogin(){return this.$store.getters.token}},methods:{async getUserInfoDetail(){const{data:{userInfo:t}}=await c();this.detail=t,console.log(this.detail)},onLogin(){e.A.confirm({title:"温馨提示",message:"你确认要退出吗"}).then((()=>{this.$store.dispatch("user/logOn")})).catch((()=>{}))}}},v=o,l=a(1656),d=(0,l.A)(v,i,n,!1,null,"1e99bac1",null),m=d.exports}}]);
//# sourceMappingURL=481.49893d72.js.map