webpackJsonp([2],{"+KAL":function(e,t){},"0wMt":function(e,t){},"6JDX":function(e,t,n){e.exports=n.p+"static/img/menu_netmanage.1ac6c20.png"},"7USb":function(e,t,n){e.exports=n.p+"static/img/menu_ipManage.ec4f238.png"},FUFc:function(e,t,n){e.exports=n.p+"static/img/menu_setting.d64d590.png"},GDW6:function(e,t,n){e.exports=n.p+"static/img/menu_menus.f731e90.png"},"X+QH":function(e,t,n){e.exports=n.p+"static/img/menu_compliance.e1962ca.png"},"al3/":function(e,t,n){e.exports=n.p+"static/img/menu_flowAnalysis.225fbc0.png"},cXB3:function(e,t){},h2ge:function(e,t,n){e.exports=n.p+"static/img/menu_netSetting.4c3b62f.png"},nqN6:function(e,t,n){e.exports=n.p+"static/img/defaultAvatar.c848881.jpg"},wUZA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=[{name:"network",title:"网络管理",icon:n("6JDX"),children:[{name:"networkTopo",title:"网络拓扑"},{name:"deviceInfo",title:"设备信息"}]},{name:"ipManage",title:"IP管理",icon:n("7USb"),children:[{name:"ipPlan",title:"IP地址规划"},{name:"ipSearch",title:"IP查询"}]},{name:"flowAnalysis",title:"流量分析",icon:n("al3/"),children:[{name:"portFlow",title:"端口流量分析"},{name:"businessFlow",title:"业务流量分析"},{name:"linkTrafficFlow",title:"链路流量分析"}]},{name:"compliance",title:"合规检测",icon:n("X+QH"),children:[{name:"complianceTest",title:"设备合规检测"}]},{name:"resourceManage",title:"资源管理",icon:n("h2ge"),children:[{name:"deviceList",title:"网元列表"},{name:"ipList",title:"IP地址列表"},{name:"boardList",title:"单板列表"},{name:"subcardList",title:"子卡列表"},{name:"portList",title:"端口列表"},{name:"dataConfig",title:"数据配置列表"}]},{name:"wyCommParams",title:"系统管理",icon:n("FUFc"),children:[{name:"snmpTemplate",title:"网元SNMP参数模板管理"},{name:"snmpSetting",title:"网元SNMP参数设置"},{name:"telnetTemplate",title:"网元Telnet/STelnet模板管理"},{name:"telnetSetting",title:"网元Telnet/STelnet设置"}]}],o=new(n("7+uW").default),s=n("7t+N"),a=n.n(s),r=n("mtWM"),c=n.n(r),u={name:"newMenu",data:function(){return{fullWidth:0,leftIcon:!1,rightIcon:!1,isShowList:!1,positionX:0,targetDown:!1,menuList:i,menuIndex:0,rightSelect:null,contextmenuShow:!1,touchGap:0}},mounted:function(){var e=this;this.fullWidth=document.documentElement.clientWidth,window.onresize=function(){e.fullWidth=document.documentElement.clientWidth},o.$on("showMenu",function(t){e.isShowList=!0}),o.$on("menuIndex",function(t){e.menuIndex=parseInt(t),e.menuIndexChange(t)})},watch:{fullWidth:function(){this.ifCanMove(),document.querySelector(".bottom_menu_list>ul").style.left=this.positionX+"px"},positionX:function(){this.ifCanMove()},isShowList:function(e){var t=this;e?a()(document).keydown(function(e){37!=e.keyCode&&40!=e.keyCode||(t.menuIndex--,t.menuIndex<=0&&(t.menuIndex=0),t.menuIndexChange(t.menuIndex)),39!=e.keyCode&&38!=e.keyCode||(t.menuIndex++,t.menuIndex>=t.menuList.length-1&&(t.menuIndex=t.menuList.length-1),t.menuIndexChange(t.menuIndex)),13==e.keyCode&&t.selectMenu(t.menuList[t.menuIndex])}):(a()(document).unbind("keydown"),this.contextmenuShow=!1)}},methods:{menuIndexChange:function(e){a()(".bottom_menu_list>ul>li").eq(e).addClass("active").siblings("li").removeClass("active")},rightTag:function(e,t){var n=this;this.rightSelect=e,this.contextmenuShow=!0;var i=a()(window).width(),o=t.clientX;i-o<=100?o-=92:o+=2,a()("#contextmenu").css("left",o+"px"),document.onclick=function(){n.contextmenuShow=!1,document.onclick=null}},selectMenu:function(e,t){var n=this;if(this.touchGap>-10&&this.touchGap<10){if("0"===e.flag)return;this.isShowList=!1,setTimeout(function(){2===t?e.children?e.children.length>=1&&window.open("#/"+e.children[0].name):window.open("#/"+e.name):e.children?e.children.length>=1&&n.$router.push(e.children[0].name):"qunee"==e.name?n.$router.push({name:"qunee",query:{qunee:1}}):n.$router.push(e.name)},300)}},ifCanMove:function(){var e=document.querySelector(".bottom_menu_list>ul"),t=e.offsetWidth,n=e.parentNode.offsetWidth;t<=n?(this.leftIcon=!1,this.rightIcon=!1,this.positionX=0):this.positionX>=0?(this.leftIcon=!1,this.rightIcon=!0):this.positionX<=n-t?(this.leftIcon=!0,this.rightIcon=!1,this.positionX=n-t):(this.leftIcon=!0,this.rightIcon=!0)},menuIconMove:function(e){var t=document.querySelector(".bottom_menu_list>ul"),n=t.offsetWidth,i=t.parentNode.offsetWidth;this.positionX-=120*e,this.positionX>=0?this.positionX=0:this.positionX<=i-n&&(this.positionX=i-n),t.style.left=this.positionX+"px"},menuListMove:function(e){var t=this,n=e.target,i=e.clientX;if(this.targetDown=!0,"UL"!==n.tagName){var o=e.path;for(var s in o)"UL"===o[s].tagName&&(n=o[s])}var a=e.clientX-n.offsetLeft;document.onmousemove=function(e){var i=e.clientX-a;t.positionX=i,n.style.left=i+"px"},document.onmouseup=function(e){t.touchGap=i-e.clientX,t.targetDown=!1;var o=n.offsetWidth,s=n.parentNode.offsetWidth;o<=s||t.positionX>0?t.positionX=0:t.positionX<s-o&&(t.positionX=s-o),n.style.left=t.positionX+"px",document.onmousemove=null,document.onmouseup=null}}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"newMenu",attrs:{draggable:!1}},[e.isShowList?n("div",{staticClass:"overAll",on:{click:function(t){e.isShowList=!e.isShowList}}}):e._e(),e._v(" "),n("div",{class:e.isShowList?"show bottomMenu":"bottomMenu",attrs:{draggable:!1},on:{click:function(e){e.stopPropagation()}}},[n("span",{on:{click:function(t){t.stopPropagation(),e.leftIcon&&e.menuIconMove(-1)}}},[n("Icon",{attrs:{type:"ios-arrow-back",size:35,color:e.leftIcon?"#68dadd":"rgba(104, 218, 221, 0.5)"}})],1),e._v(" "),n("span",{on:{click:function(t){t.stopPropagation(),e.rightIcon&&e.menuIconMove(1)}}},[n("Icon",{attrs:{type:"ios-arrow-forward",size:35,color:e.rightIcon?"#68dadd":"rgba(104, 218, 221, 0.5)"}})],1),e._v(" "),n("div",{staticClass:"bottom_menu_list",attrs:{draggable:!1}},[n("ul",{class:e.targetDown?"":"noTarget",style:"width:"+120*e.menuList.length+"px",attrs:{draggable:!1},on:{mousedown:e.menuListMove}},e._l(e.menuList,function(t){return n("li",{class:"0"===t.flag?"gray":"",attrs:{draggable:!1},on:{click:function(n){return n.stopPropagation(),e.selectMenu(t)},contextmenu:function(n){return n.preventDefault(),e.rightTag(t,n)}}},[n("img",{attrs:{src:t.icon,alt:"加载失败",draggable:!1}}),e._v(" "),n("span",{attrs:{draggable:!1}},[e._v(e._s(t.title))])])}),0)])]),e._v(" "),n("span",{on:{mouseover:function(t){e.isShowList=!e.isShowList}}},[n("b")]),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.contextmenuShow,expression:"contextmenuShow"}],attrs:{id:"contextmenu"}},[n("li",{on:{click:function(t){return e.selectMenu(e.rightSelect,1)}}},[e._v("当前页打开")]),e._v(" "),n("li",{on:{click:function(t){return e.selectMenu(e.rightSelect,2)}}},[e._v("新页面打开")])])])},staticRenderFns:[]};var m=n("VU/8")(u,l,!1,function(e){n("0wMt")},"data-v-59e84320",null).exports,h=n("IcnI"),d={name:"newHeader",data:function(){return{isLogin:!0,logoutLink:NaN,userName:"",userImg:"../../../static/images/default.jpg",showUserImg:!1,menuList:i,headerMenu:{name:"index",title:"首页"},selectMenu:"",warningNum:0,warningNumAll:0}},created:function(){},computed:{skinStyle:function(){return h.a.state.skinStyle}},mounted:function(){var e=this;document.addEventListener("error",function(t){"img"==t.target.tagName.toLowerCase()&&(e.showUserImg=!1)},!0),o.$on("userInfoChange",function(){setTimeout(function(){},2e3)}),window.addEventListener("resize",function(){setTimeout(function(){2*a()(".gsm-r>header>.sub_menu").width()+500>a()(".gsm-r>header").width()?a()(".gsm-r>header>h1").css("top","0px"):a()(".gsm-r>header>h1").css("top","10px")},100)})},watch:{$route:{handler:function(e,t){var n=0;for(var s in i)if("/"+i[s].name==e.path)this.headerMenu=i[s],n=s;else if(i[s].hasOwnProperty("children"))for(var a in i[s].children)"/"+i[s].children[a].name==e.path&&(this.headerMenu=i[s],this.selectMenu=i[s].children[a].name,n=s);setTimeout(function(){o.$emit("menuIndex",n)},100),c.a.post(NaN,{}).then(function(e){}).catch(function(e){})},immediate:!0}},updated:function(){2*a()(".gsm-r>header>.sub_menu").width()+620>a()(".gsm-r>header").width()?a()(".gsm-r>header>h1").css("top","0px"):a()(".gsm-r>header>h1").css("top","10px")},methods:{showMenu:function(){o.$emit("showMenu",!0)},routeChange:function(e,t){"0"!==t&&this.$router.push("/"+e)},setLogout:function(){},getUserInfo:function(){var e=this;c.a.post(NaN,{}).then(function(t){h.a.dispatch("set_userInfo",t.data),e.userName=t.data.name,""==t.data.loginName&&(window.location.href=NaN),e.userImg=+t.data.photo.replace("/gsm-r/",""),e.showUserImg=!0}).catch(function(t){e.isLogin=!0,window.location.href=NaN})}}},f={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{class:"header-"+e.skinStyle},[i("div",{staticClass:"sub_menu"},[i("div",[i("span",{on:{click:function(t){return t.stopPropagation(),e.showMenu(t)}}},[e.headerMenu.icon?e._e():i("img",{attrs:{src:n("GDW6")},on:{click:e.showMenu}}),e._v(" "),e.headerMenu.icon?i("img",{attrs:{src:e.headerMenu.icon,alt:""},on:{click:e.showMenu}}):e._e()]),e._v(" "),i("span",{class:e.headerMenu.hasOwnProperty("children")&&e.headerMenu.children.length>0?"":"one"},[e._v(e._s(e.headerMenu.title))])]),e._v(" "),e.headerMenu.hasOwnProperty("children")&&e.headerMenu.children.length>0?i("ul",e._l(e.headerMenu.children,function(t){return i("li",{class:[e.selectMenu===t.name?"active":"","0"===t.flag?"gary":""],on:{click:function(n){return e.routeChange(t.name,t.flag)}}},[e._v(e._s(t.title))])}),0):e._e()]),e._v(" "),i("h1"),e._v(" "),i("div",{staticClass:"user_info"},[i("div",{staticClass:"warning"},[i("span",[i("Icon",{attrs:{type:"md-notifications",size:16}})],1),e._v(" "),i("i",[e._v("( "),i("b",{on:{click:function(t){return e.routeChange("warnManage")}}},[e._v(e._s(e.warningNum))]),e._v(" / "),i("b",[e._v(e._s(e.warningNumAll))]),e._v(" )")])]),e._v(" "),e.isLogin?e._e():i("a",{attrs:{href:e.logoutLink}},[e._v("登录")]),e._v(" "),e.isLogin?i("div",[i("span",{on:{click:function(t){return t.stopPropagation(),e.routeChange("info")}}},[e.showUserImg?e._e():i("img",{attrs:{src:n("nqN6")}}),e._v(" "),e.showUserImg?i("img",{attrs:{src:e.userImg}}):e._e()]),e._v(" "),i("b",{on:{click:function(t){return t.stopPropagation(),e.routeChange("info")}}},[e._v(e._s(e.userName))]),e._v(" "),i("a",{on:{click:e.setLogout}},[i("Icon",{attrs:{size:16,type:"md-exit"}})],1)]):e._e()])])},staticRenderFns:[]};var g={name:"home",components:{bottomMenu:m,topHeader:n("VU/8")(d,f,!1,function(e){n("+KAL")},"data-v-4822def5",null).exports},data:function(){return{}},computed:{skinStyle:function(){return h.a.state.skinStyle}},methods:{}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:"gsm-r gsmr-"+this.skinStyle,on:{contextmenu:function(e){e.preventDefault()}}},[t("top-header"),this._v(" "),t("div",{attrs:{id:"main_page"}},[t("router-view",{staticClass:"Router"})],1),this._v(" "),t("bottom-menu")],1)},staticRenderFns:[]};var v=n("VU/8")(g,p,!1,function(e){n("cXB3")},"data-v-777ec4d4",null);t.default=v.exports}});