(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a7ca0d4"],{"1ae6":function(t,e,n){},6898:function(t,e,n){},"7abe":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("main",[o("router-view")],1),o("footer",{directives:[{name:"waves",rawName:"v-waves"}]},t._l(t.tabRouter,function(e,n){return o("router-link",{key:n,attrs:{tag:"p",to:{name:e.router}}},[o("svg-icon",{attrs:{"icon-class":e.icon},on:{click:function(e){t.sound()}}}),o("span",{on:{click:function(e){t.sound()}}},[t._v(t._s(e.name))])],1)}),1),o("j-audio",{attrs:{src:n("ba67")},model:{value:t.audio,callback:function(e){t.audio=e},expression:"audio"}})],1)},a=[],r=(n("cadf"),n("551c"),n("097d"),n("ac79")),u={name:"home",components:{JAudio:r["a"]},data:function(){return{tabRouter:[{router:"homepage",name:"首页",icon:"home"},{router:"recharge",name:"充值",icon:"recharge"},{router:"service",name:"客服",icon:"service"},{router:"mine",name:"我的",icon:"mine"}],audio:{}}},created:function(){},methods:{sound:function(){this.audio.play()}},mounted:function(){}},c=u,i=(n("fdce"),n("2877")),s=Object(i["a"])(c,o,a,!1,null,"2c222586",null);s.options.__file="index.vue";e["default"]=s.exports},"8f20":function(t,e,n){"use strict";var o=n("1ae6"),a=n.n(o);a.a},ac79:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"on"===t.status&&t.show?n("audio",{attrs:{id:"jun-audio",controls:"controls",hidden:"true"}},[n("source",{attrs:{src:t.url,type:"audio/ogg"}}),n("source",{attrs:{src:t.url,type:"audio/mpeg"}})]):t._e()},a=[],r=n("be94"),u=n("2f62"),c={name:"home",components:{},data:function(){return{status:this.$store.getters.audioSwitch}},model:{prop:"params",event:"change"},props:{show:{type:[Boolean],default:!0},url:{default:""},id:{type:String,default:"audio"},params:[Object]},computed:Object(r["a"])({},Object(u["c"])(["audioSwitch"])),watch:{audioSwitch:function(t){this.status=t,this.setParams(t)}},created:function(){},mounted:function(){this.setParams(this.status)},methods:{setParams:function(t){var e=this;this.$nextTick(function(){var n=document.querySelector("#jun-audio"),o={el:n||null,status:t,play:function(){this.el&&n.play(),!this.el&&console.warn("System sound is off")},stop:function(){n&&n.pause()},reload:function(){n&&n.load()}};e.$emit("change",o)})}}},i=c,s=(n("8f20"),n("2877")),d=Object(s["a"])(i,o,a,!1,null,"06ddd123",null);d.options.__file="index.vue";e["a"]=d.exports},ba67:function(t,e,n){t.exports=n.p+"media/switcher.95cd4fd5.mp3"},be94:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){o(t,e,n[e])})}return t}n.d(e,"a",function(){return a})},fdce:function(t,e,n){"use strict";var o=n("6898"),a=n.n(o);a.a}}]);
//# sourceMappingURL=chunk-5a7ca0d4.bd6b28ee.js.map