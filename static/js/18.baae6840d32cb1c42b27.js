webpackJsonp([18],{XQ5x:function(e,t){},XuOi:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("IcnI"),n=i("u4v6"),l=i("vls+"),d={name:"subcardList",components:{topHeader:n.a},data:function(){return{dataPage:1,pageSize:100,tableCount:30,tableData:l.a,tableHeight:500,railway:"",railwayList:[],site:"",siteList:[],device:"",subcardList:[],tableHead:[],list:[{title:"线路名",key:"head3",minWidth:100,align:"center"},{title:"站点名",key:"head4",minWidth:100,align:"center"},{title:"网元名称",key:"head5",minWidth:100,align:"center"},{title:"设备类型",key:"head6",minWidth:100,align:"center"},{title:"机框号",key:"head7",minWidth:60,align:"center"},{title:"槽位号",key:"head8",minWidth:60,align:"center"},{title:"子卡位号",key:"head9",minWidth:60,align:"center"},{title:"单板条形码",key:"head10",minWidth:100,align:"center"},{title:"端口ID",key:"head11",minWidth:100,align:"center"},{title:"端口名",key:"head12",minWidth:100,align:"center"},{title:"端口速率",key:"head13",minWidth:100,align:"center"},{title:"光模块在位",key:"head14",minWidth:100,align:"center"},{title:"光模块型号",key:"head15",minWidth:100,align:"center"},{title:"光模块描述",key:"head16",minWidth:100,align:"center"},{title:"物理运行状态",key:"head17",minWidth:100,align:"center"},{title:"协议运行状态",key:"head18",minWidth:100,align:"center"},{title:"手动关闭状态",key:"head19",minWidth:100,align:"center"},{title:"收光功率",key:"head20",minWidth:100,align:"center"},{title:"发光功率",key:"head21",minWidth:100,align:"center"}]}},mounted:function(){var e=this;this.tableHeight=document.querySelectorAll(".subcardList>section")[0].clientHeight,window.addEventListener("resize",function(){setTimeout(function(){e.tableHeight=document.querySelectorAll(".subcardList>section")[0].clientHeight},200)})},computed:{skinStyle:function(){return a.a.state.skinStyle}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:"subcardList subcardList-"+e.skinStyle},[i("topHeader",{attrs:{tableHead:e.list},on:{exportHead:function(t){return e.tableHead=t}}}),e._v(" "),i("section",[i("Table",{attrs:{border:"",height:e.tableHeight,columns:e.tableHead,data:e.tableData}})],1),e._v(" "),i("footer",[i("Page",{attrs:{total:e.tableCount,size:"small",current:e.dataPage,"page-size":e.pageSize,"show-total":"","show-sizer":"","page-size-opts":[100,200,500]}})],1)],1)},staticRenderFns:[]};var c=i("VU/8")(d,r,!1,function(e){i("XQ5x")},"data-v-3bd6c6ae",null);t.default=c.exports}});