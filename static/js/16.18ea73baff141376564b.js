webpackJsonp([16],{IzTU:function(e,t){},XuOi:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("IcnI"),a={name:"subcardList",components:{topHeader:i("u4v6").a},data:function(){return{dataPage:1,pageSize:100,tableCount:0,tableData:[],tableHeight:500,railway:"",railwayList:[],site:"",siteList:[],device:"",subcardList:[]}},mounted:function(){var e=this;this.tableHeight=document.querySelectorAll(".subcardList>section")[0].clientHeight,window.addEventListener("resize",function(){setTimeout(function(){e.tableHeight=document.querySelectorAll(".subcardList>section")[0].clientHeight},200)})},computed:{tableHead:function(){return[{type:"selection",width:50,align:"center"},{title:"序号",type:"index",width:50,align:"center"},{title:"网元路线",key:"head3",minWidth:100,align:"center"},{title:"网元站点",key:"head4",minWidth:100,align:"center"},{title:"网元名称",key:"head5",minWidth:100,align:"center"},{title:"网元类型",key:"head6",minWidth:100,align:"center"},{title:"机框号",key:"head7",minWidth:50,align:"center"},{title:"槽位号",key:"head8",minWidth:50,align:"center"},{title:"子卡位号",key:"head8",minWidth:60,align:"center"},{title:"单板条形码",key:"head9",minWidth:100,align:"center"},{title:"端口ID",key:"head9",minWidth:100,align:"center"},{title:"端口名",key:"head9",minWidth:100,align:"center"},{title:"端口速率",key:"head9",minWidth:100,align:"center"},{title:"光模块在位",key:"head9",minWidth:100,align:"center"},{title:"光模块型号",key:"head9",minWidth:100,align:"center"},{title:"光模块描述",key:"head9",minWidth:100,align:"center"},{title:"物理运行状态",key:"head9",minWidth:100,align:"center"},{title:"协议运行状态",key:"head9",minWidth:100,align:"center"},{title:"手动关闭状态",key:"head9",minWidth:100,align:"center"},{title:"收光功率",key:"head9",minWidth:100,align:"center"},{title:"发光功率",key:"head9",minWidth:100,align:"center"}]},skinStyle:function(){return n.a.state.skinStyle}}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:"subcardList subcardList-"+e.skinStyle},[i("topHeader"),e._v(" "),i("section",[i("Table",{attrs:{border:"",height:e.tableHeight,columns:e.tableHead,data:e.tableData}})],1),e._v(" "),i("footer",[i("Page",{attrs:{total:e.tableCount,size:"small",current:e.dataPage,"page-size":e.pageSize,"show-total":"","show-sizer":"","page-size-opts":[100,200,500]}})],1)],1)},staticRenderFns:[]};var d=i("VU/8")(a,l,!1,function(e){i("IzTU")},"data-v-53dde072",null);t.default=d.exports}});