(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90de918e"],{2665:function(a,e,s){"use strict";var t=s("2a08"),n=s.n(t);n.a},"2a08":function(a,e,s){},"340a":function(a,e,s){},b890:function(a,e,s){"use strict";var t=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("header",{style:{background:a.bg}},[s("span",{directives:[{name:"show",rawName:"v-show",value:a.show,expression:"show"}],staticClass:"left-arrow wave",on:{click:a.goback}}),a.title?s("p",[a._v(a._s(a.title))]):a._e(),a._t("default"),s("div",{staticClass:"svg-box",on:{click:a.handleIcon}},[s("svg-icon",{directives:[{name:"show",rawName:"v-show",value:a.show,expression:"show"}],staticClass:"wave",attrs:{"icon-class":a.icon}})],1)],2)},n=[],i=s("53ca"),o={name:"home",components:{},props:{title:{type:String,default:"标 题"},icon:{type:String,default:"home"},bg:{type:String,default:"linear-gradient(90deg, #3b95f4 0%, #3f68db 100%)"},iconRouter:{type:[String,Object],default:"homepage"},show:{type:Boolean,default:!0},go:{type:Boolean,default:!0}},data:function(){return{}},created:function(){},methods:{goback:function(){this.go?this.$router.go(-1):this.$emit("goback")},handleIcon:function(){"object"===Object(i["a"])(this.iconRouter)?this.$router.push({name:this.iconRouter.router,params:this.iconRouter.params}):this.$router.push({name:this.iconRouter})}}},r=o,p=(s("e473"),s("2877")),c=Object(p["a"])(r,t,n,!1,null,"03378e1e",null);c.options.__file="index.vue";e["a"]=c.exports},e473:function(a,e,s){"use strict";var t=s("340a"),n=s.n(t);n.a},eb58:function(a,e,s){"use strict";s.r(e);var t=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"queryDetails"},[s("j-header",{attrs:{title:"平仓详情"}}),s("main",[s("h1",[a._v(a._s(a.params.cname))]),s("h2",{class:[1*a.params.winmoney>0?"win":"lose"]},[s("span",[a._v(a._s(1*a.params.winmoney>0?"盈":"亏"))]),s("span",[a._v(a._s(a.params.winmoney))])]),s("ul",[s("li",[s("span",[a._v("订单号")]),s("span",[a._v(a._s(a.params.id))])]),s("li",[s("span",[a._v("购买价格")]),s("span",[a._v(a._s(a.params.startprice))])]),s("li",[s("span",[a._v("结算价格")]),s("span",[a._v(a._s(a.params.endprice))])]),s("li",[s("span",[a._v("方向")]),s("span",{style:1*a.params.state?{color:"#58bc58"}:{color:"red"}},[a._v(a._s(1*a.params.state?"买跌":"买涨"))])]),s("li",[s("span",[a._v("购买规格")]),s("span",[a._v(a._s(a.params.time)+"秒")])]),s("li",[s("span",[a._v("建仓时间")]),s("span",[a._v(a._s(a.params.createtime))])]),s("li",[s("span",[a._v("平仓时间")]),s("span",[a._v(a._s(a.params.updatetime))])]),s("li",[s("span",[a._v("手续费")]),1*a.params.endstatus===1?s("span",[a._v(a._s((1*a.params.spread+1*a.params.poundage).toFixed(2)))]):1*a.params.endstatus===2||1*a.params.endstatus===3?s("span",[a._v(a._s((1*a.params.poundage).toFixed(2)))]):s("span",[a._v("0.00")])]),s("li",[s("span"),s("span",[a._v("(收益扣除"+a._s(a.params.spread)+" 订单扣除"+a._s(a.params.poundage)+")")])])])])],1)},n=[],i=(s("cadf"),s("551c"),s("097d"),s("b890")),o={name:"queryDetails",components:{JHeader:i["a"]},data:function(){return{params:{}}},created:function(){this.params=this.$route.params},methods:{},mounted:function(){}},r=o,p=(s("2665"),s("2877")),c=Object(p["a"])(r,t,n,!1,null,"580087ed",null);c.options.__file="index.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-90de918e.45415fc6.js.map