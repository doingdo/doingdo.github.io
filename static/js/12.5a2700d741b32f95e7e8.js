webpackJsonp([12],{"8qY5":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("IcnI"),i={name:"ipPlan",data:function(){return{tabHeight:0,columns1:[{type:"selection",align:"center"},{title:"IP地址",key:"IPAddress",align:"center",minWidth:100},{title:"子网掩码",key:"subnetMask",align:"center",minWidth:100},{title:"地址池",key:"addressPool",align:"center",minWidth:100},{title:"使用数",key:"usedNum",align:"center",minWidth:60},{title:"规划数",key:"planNum",align:"center",minWidth:60},{title:"空闲数",key:"freeNum",align:"center",minWidth:60},{title:"备注",key:"mask",align:"center",minWidth:200}],columns2:[{title:"序号",type:"index",align:"center"},{title:"IP范围",key:"IPRange",align:"center",minWidth:160},{title:"IP数量",key:"IPNum",align:"center",minWidth:60},{title:"地址类型",key:"addressType",align:"center",minWidth:180},{title:"规划时间",key:"planTime",align:"center",minWidth:140},{title:"规划人",key:"planPerson",align:"center",minWidth:100},{title:"备注",key:"remark",align:"center",minWidth:160}],avaliableInfoData:[],planRecordData:[],addressTypeId:"",maskId:"",addressPoolId:"",addressTypeArray:[],maskArray:[],addressPoolArray:[],addPlan:!1,addPlanTitle:"",dateTime:new Date,planPerson:"",remark:""}},methods:{getAddressTypeData:function(){this.addressTypeArray.push({addressTypeId:"1",addressTypeName:"管理地址"},{addressTypeId:"2",addressTypeName:"接口地址"},{addressTypeId:"3",addressTypeName:"业务地址"})},getMaskData:function(){this.maskArray.push({maskId:"1",maskName:"27"},{maskId:"2",maskName:"28"})},getAddressPoolData:function(){this.addressPoolArray.push({addressPoolId:"1",addressPoolName:"10.50.0.1~10.50.1.255"})},getIPInfoTab:function(){for(var e=0;e<10;e++)this.avaliableInfoData.push({IPAddress:"10.50.0.1",subnetMask:"255.255.255.252",addressPool:"10.50.0.1~10.50.1.255",usedNum:"155",planNum:"255",freeNum:"255",mask:"B网元12- LE3业务IP地址"+e})},getPlanRecordTab:function(){for(var e=0;e<2;e++)this.planRecordData.push({IPRange:"10.237.30.176 ~ 10.237.30.179",IPNum:"4",addressType:"管理地址",planTime:"2019-10-30",planPerson:"张三",remark:"B客专线申请设备管理地址"})},addPlanEvent:function(){this.addPlan=!0,this.addPlanTitle="加入规划"},saveData:function(){}},computed:{skinStyle:function(){return s.a.state.skinStyle}},mounted:function(){var e=this,a=document.body.clientHeight;this.tabHeight=(a-190)/2,window.addEventListener("resize",function(){var a=document.body.clientHeight;e.tabHeight=(a-190)/2}),this.getIPInfoTab(),this.getPlanRecordTab(),this.getAddressTypeData(),this.getMaskData(),this.getAddressPoolData()}},n={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{class:"ipPlan ipPlan-"+e.skinStyle},[t("div",{staticClass:"setting"},[t("ul",[t("li",[t("span",[e._v("地址类型：")]),e._v(" "),t("i-select",{staticStyle:{width:"100px"},attrs:{filterable:"",clearable:""},model:{value:e.addressTypeId,callback:function(a){e.addressTypeId=a},expression:"addressTypeId"}},e._l(e.addressTypeArray,function(a){return t("Option",{key:a.addressTypeId,attrs:{value:a.addressTypeId}},[e._v(e._s(a.addressTypeName))])}),1)],1),e._v(" "),t("li",[t("span",[e._v("需求数量：")]),e._v(" "),t("Input",{staticStyle:{width:"60px"},attrs:{type:"text"}})],1),e._v(" "),t("li",[t("span",[e._v("掩码：")]),e._v(" "),t("i-select",{staticStyle:{width:"100px"},attrs:{filterable:"",clearable:""},model:{value:e.maskId,callback:function(a){e.maskId=a},expression:"maskId"}},e._l(e.maskArray,function(a){return t("Option",{key:a.maskId,attrs:{value:a.maskId}},[e._v(e._s(a.maskName))])}),1)],1),e._v(" "),t("li",[t("span",[e._v("地址池：")]),e._v(" "),t("i-select",{staticStyle:{width:"160px"},attrs:{filterable:"",clearable:""},model:{value:e.addressPoolId,callback:function(a){e.addressPoolId=a},expression:"addressPoolId"}},e._l(e.addressPoolArray,function(a){return t("Option",{key:a.addressPoolId,attrs:{value:a.addressPoolId}},[e._v(e._s(a.addressPoolName))])}),1)],1)]),e._v(" "),t("div",{staticClass:"btn"},[t("i-button",{staticClass:"search-btn",attrs:{type:"primary"}},[e._v("查询")]),e._v(" "),t("i-button",{staticClass:"addplan-btn",attrs:{type:"primary"},on:{click:e.addPlanEvent}},[e._v("加入规划")])],1)]),e._v(" "),t("div",{staticClass:"dataTable"},[t("div",{staticClass:"toptable"},[t("span",{staticClass:"title"},[e._v("可用IP信息")]),e._v(" "),t("i-table",{attrs:{"highlight-row":"",border:"",height:e.tabHeight,columns:e.columns1,data:e.avaliableInfoData}})],1),e._v(" "),t("div",{staticClass:"bottable"},[t("span",{staticClass:"title"},[e._v("规划记录")]),e._v(" "),t("i-table",{attrs:{"highlight-row":"",border:"",height:e.tabHeight,columns:e.columns2,data:e.planRecordData}})],1)]),e._v(" "),t("Modal",{attrs:{draggable:"",title:e.addPlanTitle,width:"400"},on:{"on-ok":e.saveData},model:{value:e.addPlan,callback:function(a){e.addPlan=a},expression:"addPlan"}},[t("ul",{staticClass:"addPlanForm"},[t("li",[t("span",[e._v("提交日期：")]),e._v(" "),t("DatePicker",{staticStyle:{width:"160px"},attrs:{type:"date",value:e.dateTime}})],1),e._v(" "),t("li",[t("span",[e._v("规划人：")]),e._v(" "),t("i-input",{staticStyle:{width:"160px"},attrs:{value:e.planPerson}})],1),e._v(" "),t("li",[t("span",[e._v("备注：")]),e._v(" "),t("i-input",{staticStyle:{width:"160px"},attrs:{type:"textarea",value:e.remark}})],1)])])],1)},staticRenderFns:[]};var d=t("VU/8")(i,n,!1,function(e){t("psmQ")},"data-v-aebac3a0",null);a.default=d.exports},psmQ:function(e,a){}});