webpackJsonp([8],{628:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,i=b(t(656)),r=b(t(687)),l=b(t(162)),a=b(t(261)),c=b(t(262)),s=b(t(83)),f=b(t(642)),p=b(t(79)),x=b(t(82)),d=b(t(80)),u=b(t(81));t(657),t(701);var A=t(22),g=b(A),E=t(256),w=(t(84),b(t(661)));function b(n){return n&&n.__esModule?n:{default:n}}t(705);var m=(0,E.connect)(function(n,e){return{config:n.config,loginResponse:n.loginResponse}})(o=function(n){function A(n,e){var t;(0,p.default)(this,A);var o=(0,d.default)(this,(A.__proto__||(0,f.default)(A)).call(this,n));return o.state=(t={loading:!1,isCertificates:!1,show:!0,list:new Array(50),lotteries:[],page:1},(0,s.default)(t,"loading",!1),(0,s.default)(t,"timer",null),t),o}var e;return(0,u.default)(A,n),(0,x.default)(A,[{key:"init",value:(e=(0,c.default)(a.default.mark(function n(e){var t;return a.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return this.setState({loading:!0}),n.next=3,w.default.get("/lotteries?expand=nextDraw,currentDraw&per-page="+6*e);case 3:(t=n.sent).success&&this.setState({lotteries:t.data.items,loading:!1});case 5:case"end":return n.stop()}},n,this)})),function(n){return e.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"componentWillMount",value:function(){var n=this;this.init(1),this.state.timer=setInterval(function(){n.init(n.state.page)},5e3)}},{key:"jump",value:function(n,e){e.stopPropagation();var t=(0,l.default)({logo:n.logo,code:n.code,name:n.name,ball:n.currentDraw.opencode,expect:n.nextDraw.expect,drawTime:n.nextDraw.drawTime,countDown:n.nextDraw.countDown,countTime:n.currentDraw.drawTime,color:n.color});window.localStorage.setItem("history",t),this.props.router.push("/viewResult")}},{key:"forbid",value:function(n){n.stopPropagation(),r.default.warning({title:"This is an warning message",content:"The area is not yet available for purchase!"})}},{key:"loadMoreHanlde",value:function(){this.setState({loading:!0}),this.state.page++,this.init(this.state.page)}},{key:"render",value:function(){var e=this;return g.default.createElement("div",{className:"lotteries"},g.default.createElement("header",null,g.default.createElement("h1",null,"Buy Lottery Tickets Online"),g.default.createElement("p",null,"Buy lottery tickets online to the biggest lotteries in the world offering huge jackpot prizes that you can win when you play online lottery. Purchase official lottery tickets to the draws listed below and receive automatic result notifications and commission-free prizes when you win!")),g.default.createElement("main",null,g.default.createElement("ul",null,this.state.lotteries.map(function(n){return g.default.createElement("li",{key:n.id,className:"pointer",onClick:e.jump.bind(e,n)},g.default.createElement("img",{className:"logo",src:n.logo,alt:""}),g.default.createElement("h2",null,"€",n.nextDraw.countMoney),g.default.createElement("div",{className:"country"},g.default.createElement("span",null,n.name)),g.default.createElement("p",null,"Next Draw: ",n.nextDraw.drawTime),g.default.createElement("button",{onClick:e.forbid},"PLAY NOW!"))}))),g.default.createElement("footer",null,g.default.createElement(i.default,{type:"primary",loading:this.state.loading,onClick:this.loadMoreHanlde.bind(this)},"Load More")))}}]),A}(A.Component))||o;e.default=m},705:function(n,e,t){var o=t(706);"string"==typeof o&&(o=[[n.i,o,""]]);var A={hmr:!0,transform:void 0};t(624)(o,A);o.locals&&(n.exports=o.locals)},706:function(n,e,t){(n.exports=t(623)(!0)).push([n.i,".ball {\n  width: 26px;\n  height: 26px;\n  text-align: center;\n  line-height: 26px;\n  font-size: 14px;\n  color: #333745;\n  font-weight: normal;\n  margin: 4px;\n  border-radius: 50%;\n  background-color: white;\n  user-select: none;\n  background-color: #33b5f7;\n  color: white;\n}\n.ball:hover {\n  background-color: #33b5f7;\n  box-shadow: -1px 4px 8px 0px rgba(51, 181, 247, 0.4);\n  color: white;\n  border: none;\n}\n.ballActive {\n  background-color: #33b5f7;\n  box-shadow: -1px 4px 8px 0px rgba(51, 181, 247, 0.4);\n  color: white;\n  border: none;\n}\n.sr {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.fr {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.frcy {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.frcx {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.frcxy {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.fsb {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.frs {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.fsa {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n.fsac {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n.fcx {\n  display: flex;\n  flex-direction: column;\n}\n.fcxy {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.lotteries {\n  padding-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.lotteries > header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.lotteries > header h1 {\n  font-size: 52px;\n  color: #333745;\n  font-weight: bold;\n  padding-bottom: 20px;\n}\n.lotteries > header p {\n  font-size: 16px;\n  color: #333745;\n  font-weight: normal;\n  text-align: center;\n  width: 718px;\n}\n.lotteries > main {\n  width: 100%;\n}\n.lotteries > main ul {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.lotteries > main ul li {\n  width: 350px;\n  height: 338px;\n  background: #f5f5f6;\n  border-bottom: 1px solid #33b5f7;\n  margin-top: 50px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.lotteries > main ul li:hover {\n  background: white;\n  box-shadow: 0px 0px 30px 0px rgba(51, 55, 69, 0.2);\n}\n.lotteries > main ul li button {\n  width: 156px;\n  height: 48px;\n  background-color: #33b5f7;\n  border-radius: 24px;\n  font-size: 16px;\n  color: #ffffff;\n  font-weight: normal;\n  position: absolute;\n  left: 50%;\n  bottom: -24px;\n  transform: translateX(-50%);\n}\n.lotteries > main ul li .logo {\n  width: auto;\n  height: 90px;\n  margin-bottom: 30px;\n}\n.lotteries > main ul li .country {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.lotteries > main ul li .country img {\n  width: 32px;\n  height: 22px;\n  margin-right: 10px;\n}\n.lotteries > main ul li .country span {\n  font-size: 20px;\n  color: #333745;\n  font-weight: bold;\n}\n.lotteries > main ul li h2 {\n  font-size: 28px;\n  color: #ea2e49;\n  font-weight: bold;\n}\n.lotteries > main ul li p {\n  padding-top: 20px;\n  font-size: 15px;\n  color: #333745;\n  font-weight: normal;\n}\n.lotteries > footer {\n  margin-top: 50px;\n}\n.lotteries > footer button {\n  width: 156px;\n  height: 48px;\n  background-color: #33b5f7;\n  border-radius: 24px;\n  font-size: 16px;\n  color: #ffffff;\n  font-weight: normal;\n}\n","",{version:3,sources:["D:/tzjun.top/gogs/app/lotteryweb/app/styles/D:/tzjun.top/gogs/app/lotteryweb/app/styles/mixin.less","D:/tzjun.top/gogs/app/lotteryweb/app/styles/lotteries.less","D:/tzjun.top/gogs/app/lotteryweb/app/styles/D:/tzjun.top/gogs/app/lotteryweb/app/styles/lotteries.less"],names:[],mappings:"AAKA;EAgDE,YAAA;EACA,aAAA;EAIA,mBAAA;EACA,kBAAA;EAIA,gBAAA;EACA,eAAA;EACA,oBAAA;EAxDA,YAAA;EACA,mBAAA;EAuBA,wBAAA;EApBA,kBAAA;EACA,0BAAA;EACA,aAAA;CCDD;ADEC;EACE,0BAAA;EACA,qDAAA;EAEA,aAAA;EACA,aAAA;CCDH;ADID;EACE,0BAAA;EACA,qDAAA;EAEA,aAAA;EACA,aAAA;CCHD;ADqBD;EACE,eAAA;EACA,kCAAA;CCnBD;AD8CD;EACE,cAAA;EACA,oBAAA;EACA,gBAAA;CC5CD;ADgDD;EACE,cAAA;EACA,oBAAA;EACA,oBAAA;CC9CD;ADkDD;EACE,cAAA;EACA,oBAAA;EACA,wBAAA;CChDD;ADoDD;EACE,cAAA;EACA,oBAAA;EACA,wBAAA;EACA,oBAAA;CClDD;ADsDD;EACE,cAAA;EACA,oBAAA;EACA,+BAAA;EACA,oBAAA;CCpDD;ADwDD;EACE,cAAA;EACA,oBAAA;EACA,4BAAA;EACA,oBAAA;EACA,gBAAA;CCtDD;AD0DD;EACE,cAAA;EACA,oBAAA;EACA,8BAAA;CCxDD;AD4DD;EACE,cAAA;EACA,oBAAA;EACA,8BAAA;EACA,oBAAA;CC1DD;AD8DD;EACE,cAAA;EACA,uBAAA;CC5DD;ADgED;EACE,cAAA;EACA,uBAAA;EACA,wBAAA;EACA,oBAAA;CC9DD;ACpFD;EACE,qBAAA;EF8IA,cAAA;EACA,uBAAA;EACA,wBAAA;EACA,oBAAA;CCvDD;AC3FD;EF+IE,cAAA;EACA,uBAAA;EACA,wBAAA;EACA,oBAAA;CCjDD;ACjGD;EF8DE,gBAAA;EACA,eAAA;EACA,kBAAA;EEzDI,qBAAA;CDgGL;ACvGD;EF8DE,gBAAA;EACA,eAAA;EACA,oBAAA;EErDI,mBAAA;EACA,aAAA;CDkGL;AC9GD;EAgBI,YAAA;CDiGH;ACjHD;EFyGE,cAAA;EACA,oBAAA;EACA,+BAAA;EACA,oBAAA;EEzFI,gBAAA;CDqGL;ACxHD;EFoDE,aAAA;EACA,cAAA;EE/BM,oBAAA;EACA,iCAAA;EACA,iBAAA;EACA,mBAAA;EFsHN,cAAA;EACA,uBAAA;EACA,wBAAA;EACA,oBAAA;CCdD;ACzGO;EACE,kBAAA;EACA,mDAAA;CD2GT;ACxID;EFoDE,aAAA;EACA,aAAA;EArBA,0BAAA;EAIA,oBAAA;EA0BA,gBAAA;EACA,eAAA;EACA,oBAAA;EAxBA,mBAAA;EACA,UAAA;EACA,cAAA;EACA,4BAAA;CC0GD;ACrJD;EFoDE,YAAA;EACA,aAAA;EEZQ,oBAAA;CDiHT;AC1JD;EFiGE,cAAA;EACA,oBAAA;EACA,wBAAA;EACA,oBAAA;CC4DD;AChKD;EFoDE,YAAA;EACA,aAAA;EENU,mBAAA;CDsHX;ACrKD;EF8DE,gBAAA;EACA,eAAA;EACA,kBAAA;CC0GD;AC1KD;EF8DE,gBAAA;EACA,eAAA;EACA,kBAAA;CC+GD;AC/KD;EAyDU,kBAAA;EFKR,gBAAA;EACA,eAAA;EACA,oBAAA;CCqHD;ACrLD;EAgEI,iBAAA;CDwHH;ACxLD;EFoDE,aAAA;EACA,aAAA;EArBA,0BAAA;EAIA,oBAAA;EA0BA,gBAAA;EACA,eAAA;EACA,oBAAA;CCiID",file:"lotteries.less",sourcesContent:[".bg (@url) {\n  background: url(@url) no-repeat;\n  background-size: 100% 100%;\n}\n\n.ball {\n  .wh(26px);\n  .tal(26px);\n  .fcb(14px, #333745);\n  margin: 4px;\n  border-radius: 50%;\n  .bgc(white);\n  // border: solid 1px #666666;\n  user-select: none;\n  background-color: #33b5f7;\n  color: white;\n  &:hover {\n    background-color: #33b5f7;\n    box-shadow: -1px 4px 8px 0px \n      rgba(51, 181, 247, 0.4);\n    color: white;\n    border: none;\n  }\n}\n.ballActive {\n  background-color: #33b5f7;\n  box-shadow: -1px 4px 8px 0px \n    rgba(51, 181, 247, 0.4);\n  color: white;\n  border: none;\n}\n\n.bgc (@color) {\n  background-color: @color;\n}\n\n.br (@params) {\n  border-radius: @params;\n}\n\n.bottom(@params: 0) {\n  position: absolute;\n  left: 50%;\n  bottom: @params;\n  transform: translateX(-50%);\n}\n\n.sr {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n\n.wh (@w, @h: @w) {\n  width: @w;\n  height: @h;\n}\n\n.tal (@h) {\n  text-align: center;\n  line-height: @h;\n}\n\n.fcb (@size, @color, @bold: normal) {\n  font-size: @size;\n  color: @color;\n  font-weight: @bold;\n}\n\n.button (@w:314px, @h:55px, @bgc:#33b5f7, @br:24px, @color:#ffffff, @size:16px) {\n  .wh(@w, @h);\n  .bgc(#33b5f7);\n  .br(@br);\n  .fcb(@size, @color);\n}\n\n// 水平排列，从左对齐\n.fr {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n// 水平排列，垂直居中\n.frcy {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n// 水平排列，水平居中\n.frcx {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n// 水平排列，垂直水平居中\n.frcxy {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n// 水平排列，垂直居中，两边边沿对齐\n.fsb {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n// 水平排列，垂直居中，从左到右\n.frs {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n// 水平排列，垂直居中，两边自动对齐\n.fsa {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n// 水平排列，垂直居中，两边自动对齐\n.fsac {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n\n// 垂直排列， 从头开始\n.fcx {\n  display: flex;\n  flex-direction: column;\n}\n\n// 垂直排列， 从头开始\n.fcxy {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}",".ball {\n  width: 26px;\n  height: 26px;\n  text-align: center;\n  line-height: 26px;\n  font-size: 14px;\n  color: #333745;\n  font-weight: normal;\n  margin: 4px;\n  border-radius: 50%;\n  background-color: white;\n  user-select: none;\n  background-color: #33b5f7;\n  color: white;\n}\n.ball:hover {\n  background-color: #33b5f7;\n  box-shadow: -1px 4px 8px 0px rgba(51, 181, 247, 0.4);\n  color: white;\n  border: none;\n}\n.ballActive {\n  background-color: #33b5f7;\n  box-shadow: -1px 4px 8px 0px rgba(51, 181, 247, 0.4);\n  color: white;\n  border: none;\n}\n.sr {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.fr {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.frcy {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.frcx {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.frcxy {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.fsb {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.frs {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.fsa {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n.fsac {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n.fcx {\n  display: flex;\n  flex-direction: column;\n}\n.fcxy {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.lotteries {\n  padding-bottom: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.lotteries > header {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.lotteries > header h1 {\n  font-size: 52px;\n  color: #333745;\n  font-weight: bold;\n  padding-bottom: 20px;\n}\n.lotteries > header p {\n  font-size: 16px;\n  color: #333745;\n  font-weight: normal;\n  text-align: center;\n  width: 718px;\n}\n.lotteries > main {\n  width: 100%;\n}\n.lotteries > main ul {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.lotteries > main ul li {\n  width: 350px;\n  height: 338px;\n  background: #f5f5f6;\n  border-bottom: 1px solid #33b5f7;\n  margin-top: 50px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.lotteries > main ul li:hover {\n  background: white;\n  box-shadow: 0px 0px 30px 0px rgba(51, 55, 69, 0.2);\n}\n.lotteries > main ul li button {\n  width: 156px;\n  height: 48px;\n  background-color: #33b5f7;\n  border-radius: 24px;\n  font-size: 16px;\n  color: #ffffff;\n  font-weight: normal;\n  position: absolute;\n  left: 50%;\n  bottom: -24px;\n  transform: translateX(-50%);\n}\n.lotteries > main ul li .logo {\n  width: auto;\n  height: 90px;\n  margin-bottom: 30px;\n}\n.lotteries > main ul li .country {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.lotteries > main ul li .country img {\n  width: 32px;\n  height: 22px;\n  margin-right: 10px;\n}\n.lotteries > main ul li .country span {\n  font-size: 20px;\n  color: #333745;\n  font-weight: bold;\n}\n.lotteries > main ul li h2 {\n  font-size: 28px;\n  color: #ea2e49;\n  font-weight: bold;\n}\n.lotteries > main ul li p {\n  padding-top: 20px;\n  font-size: 15px;\n  color: #333745;\n  font-weight: normal;\n}\n.lotteries > footer {\n  margin-top: 50px;\n}\n.lotteries > footer button {\n  width: 156px;\n  height: 48px;\n  background-color: #33b5f7;\n  border-radius: 24px;\n  font-size: 16px;\n  color: #ffffff;\n  font-weight: normal;\n}\n","@import './mixin.less';\n.lotteries {\n  padding-bottom: 20px;\n  .fcxy;\n  >header {\n    .fcxy;\n    h1 {\n      .fcb(52px, #333745, bold);\n      padding-bottom: 20px;\n    }\n    p {\n      .fcb(16px, #333745);\n      text-align: center;\n      width: 718px;\n    }\n  }\n  >main {\n    width: 100%;\n    ul {\n      .fsb;\n      flex-wrap: wrap;\n      li {\n        .wh(350px, 338px);\n        background: #f5f5f6;\n        border-bottom: 1px solid #33b5f7;\n        margin-top: 50px;\n        position: relative;\n        .fcxy;\n        &:hover {\n          background: white;\n          box-shadow: 0px 0px 30px 0px \n          rgba(51, 55, 69, 0.2);\n        }\n        button {\n          .wh(156px, 48px);\n          .bgc(#33b5f7);\n          .br(24px);\n          .fcb(16px, #ffffff);\n          .bottom(-24px);\n        }\n        .logo {\n          .wh(auto, 90px);\n          margin-bottom: 30px;\n        }\n        .country {\n          .frcxy;\n          img {\n            .wh(32px, 22px);\n            margin-right: 10px;\n          }\n          span {\n            .fcb(20px, #333745, bold);\n          }\n        }\n        h2 {\n          .fcb(28px, #ea2e49, bold);\n        }\n        p {\n          padding-top: 20px;\n          .fcb(15px, #333745);\n        }\n      }\n    }\n  }\n  >footer {\n    margin-top: 50px;\n    button {\n      .wh(156px, 48px);\n      .bgc(#33b5f7);\n      .br(24px);\n      .fcb(16px, #ffffff);\n    }\n  }\n}"],sourceRoot:""}])}});