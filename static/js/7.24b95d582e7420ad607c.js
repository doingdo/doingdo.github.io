webpackJsonp([7,21],{"1qQj":function(t,e){},"4N6Y":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("IcnI"),a={data:function(){return{tableHeight:0,isShow:1,importModal:!1,columns:[{title:"序号",type:"index",align:"center",minWidth:30},{title:"设备名称",key:"wyName",align:"center",minWidth:100},{title:"协议名称",key:"wyUrl",align:"center",minWidth:100},{title:"端口",key:"agreementVersion",align:"center",minWidth:100},{title:"登录用户",key:"loginUser",align:"center",minWidth:100},{title:"登录口令",key:"loginCommand",align:"center",minWidth:100},{title:"登录超时(秒)",key:"loginTimeout",align:"center",minWidth:100},{title:"响应超时(秒)",key:"resTimeout",align:"center",minWidth:100}],dataList:[]}},methods:{importEvent:function(){this.importModal=!0}},computed:{skinStyle:function(){return n.a.state.skinStyle}},mounted:function(){var t=this,e=document.body.clientHeight;this.tableHeight=e-140,window.addEventListener("resize",function(){var e=document.body.clientHeight;t.tableHeight=e-140})},components:{telnetTemplate:i("vYCd").default}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:"snmpSetting snmpSetting-"+t.skinStyle},[i("div",{staticClass:"top-setting"},[i("ul",[i("li",[i("span",[t._v("线路：")]),t._v(" "),i("i-select")],1),t._v(" "),i("li",[i("span",[t._v("站点：")]),t._v(" "),i("i-select")],1)]),t._v(" "),i("div",{staticClass:"btn"},[i("i-button",{attrs:{type:"primary"}},[t._v("查询")]),t._v(" "),i("i-button",{staticClass:"btn-right",attrs:{type:"primary"}},[t._v("测试")]),t._v(" "),i("i-button",{staticClass:"btn-right",attrs:{type:"primary"},on:{click:t.importEvent}},[t._v("导入模板")])],1)]),t._v(" "),i("div",{staticClass:"bot-table"},[i("i-table",{attrs:{"highlight-row":"",border:"",columns:t.columns,data:t.dataList,height:t.tableHeight}})],1),t._v(" "),i("Modal",{attrs:{draggable:"",title:"导入模板",width:"800px"},model:{value:t.importModal,callback:function(e){t.importModal=e},expression:"importModal"}},[i("telnet-template",{attrs:{isShow:t.isShow}})],1)],1)},staticRenderFns:[]};var s=i("VU/8")(a,l,!1,function(t){i("Irfl")},"data-v-901fed1e",null);e.default=s.exports},Irfl:function(t,e){},vYCd:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("IcnI"),a={props:{isShow:Number},data:function(){return{tableHeight:0,editModal:!1,columns:[{title:"序号",type:"index",align:"center",minWidth:30},{title:"模板名称",key:"templateName",align:"center",minWidth:100},{title:"协议名称",key:"agreementName",align:"center",minWidth:100},{title:"端口",key:"port",align:"center",minWidth:100},{title:"登录用户",key:"loginUser",align:"center",minWidth:100},{title:"登录口令",key:"loginCommand",align:"center",minWidth:100},{title:"登录超时(秒)",key:"loginTimeout",align:"center",minWidth:100},{title:"响应超时(秒)",key:"resTimeout",align:"center",minWidth:100}],tableList:[]}},methods:{addEvent:function(){this.editModal=!0}},computed:{skinStyle:function(){return n.a.state.skinStyle}},mounted:function(){var t=this;if(this.isShow)this.tableHeight=400;else{var e=document.body.clientHeight;this.tableHeight=e-140,window.addEventListener("resize",function(){var e=document.body.clientHeight;t.tableHeight=e-140})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:"telnetTemplate telnetTemplate-"+t.skinStyle},[i("div",{staticClass:"setting"},[1!==t.isShow?i("span",{staticClass:"btn"},[i("i-button",{attrs:{type:"primary"},on:{click:t.addEvent}},[t._v("创建")]),t._v(" "),i("i-button",{attrs:{type:"primary"}},[t._v("删除")])],1):t._e()]),t._v(" "),i("div",{staticClass:"tab"},[i("div",{staticClass:"tab-table"},[i("i-table",{attrs:{"highlight-row":"",border:"",columns:t.columns,data:t.tableList,height:t.tableHeight}})],1)]),t._v(" "),i("Modal",{attrs:{draggable:"",title:"创建"},model:{value:t.editModal,callback:function(e){t.editModal=e},expression:"editModal"}},[i("ul",{staticClass:"modal1"},[i("li",[i("span",[t._v("协议名称：")]),t._v(" "),i("i-select")],1),t._v(" "),i("li",[i("span",[t._v("模板名称：")]),t._v(" "),i("i-input",{staticStyle:{flex:"1.5"}})],1),t._v(" "),i("li",[i("span",[t._v("端口：")]),t._v(" "),i("i-input",{staticStyle:{flex:"1.5"}})],1),t._v(" "),i("li",[i("span",[t._v("登录超时(秒)：")]),t._v(" "),i("i-input",{staticStyle:{flex:"1.5"}})],1),t._v(" "),i("li",[i("span",[t._v("响应超时(秒)：")]),t._v(" "),i("i-input",{staticStyle:{flex:"1.5"}})],1),t._v(" "),i("li",[i("span",[t._v("登录用户：")]),t._v(" "),i("i-input",{staticStyle:{flex:"1.5"}})],1),t._v(" "),i("li",[i("span",[t._v("登录口令：")]),t._v(" "),i("i-input",{staticStyle:{flex:"1.5"}})],1)])])],1)},staticRenderFns:[]};var s=i("VU/8")(a,l,!1,function(t){i("1qQj")},"data-v-065bb3ad",null);e.default=s.exports}});