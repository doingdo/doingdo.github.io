webpackJsonp([8],{FZW5:function(s,a){},x3ev:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=t("IcnI"),v={name:"complianceTest",data:function(){return{value:"昌九城际",value1:!1,model1:"昌九城际",cityList:[{value:"昌九城际",label:"昌九城际"},{value:"京津城际",label:"京津城际"}],columns:[{title:"序号",type:"index",align:"center",width:50},{title:"线路名",key:"lineName",align:"center"},{title:"站点名",key:"stopName",align:"center"},{title:"设备",key:"stopName",align:"center"},{title:"网元名称",key:"nodeName",align:"center"},{title:"管理IP地址",key:"IPAddress",align:"center"},{title:"版本",key:"version",align:"center"},{title:"创建时间",key:"createTime",align:"center"}],data:[{lineName:"昌九线",stopName:"九江站",nodeName:"NC-JJ-AR01-NE20E-S8",IPAddress:"10.50.0.32",version:"V2R15C00SPC23SPC300",createTime:"2019 - 12 - 2"},{lineName:"昌九线",stopName:"九江站",nodeName:"NC-JJ-AR01-NE20E-S8",IPAddress:"10.50.0.32",version:"V2R15C00SPC23SPC300",createTime:"2019 - 12 - 2"},{lineName:"昌九线",stopName:"九江站",nodeName:"NC-JJ-AR01-NE20E-S8",IPAddress:"10.50.0.32",version:"V2R15C00SPC23SPC300",createTime:"2019 - 12 - 2"},{lineName:"昌九线",stopName:"九江站",nodeName:"NC-JJ-AR01-NE20E-S8",IPAddress:"10.50.0.32",version:"V2R15C00SPC23SPC300",createTime:"2019 - 12 - 2"}],tableHeight:"",deviceName:"NC-NC-CR01-NE40E-X16",managementAddress:"10.50.0.32",equipmentType:"S5730-DCI3-234",LineAssignment:"华丰线",versionNumber:"V1R02C05SPC23SH001",patchNumber:"SH001",sameNetworkDeviceVersion:"V1R02C05SPC23SH001",resultBGP:"网元A-AR001",resultBFD:"网元A-BR002",result:"正常",versionState:"正常"}},computed:{skinStyle:function(){return e.a.state.skinStyle}},mounted:function(){var s=this;this.$nextTick(function(){s.tableHeight=s.$refs.table.clientHeight}),window.addEventListener("resize",function(){setTimeout(function(){s.tableHeight=s.$refs.table.clientHeight},200)})},methods:{addClassName:function(s,a){return"addClassName"},currentRow:function(){},dbcurrentRow:function(){this.value1=!0}}},n={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{class:"complianceTest complianceTest-"+s.skinStyle},[t("header",[t("ol",[t("li",[t("span",[s._v("管理IP地址:")]),s._v(" "),t("Select",{staticStyle:{width:"120px"},model:{value:s.value,callback:function(a){s.value=a},expression:"value"}},s._l(s.cityList,function(a){return t("Option",{key:a.value,attrs:{value:a.value}},[s._v(s._s(a.label))])}),1)],1)]),s._v(" "),t("ul",[t("li",[t("span",[s._v("线路名:")]),s._v(" "),t("Select",{staticStyle:{width:"120px"},model:{value:s.value,callback:function(a){s.value=a},expression:"value"}},s._l(s.cityList,function(a){return t("Option",{key:a.value,attrs:{value:a.value}},[s._v(s._s(a.label))])}),1)],1),s._v(" "),t("li",[t("span",[s._v("站点名:")]),s._v(" "),t("Select",{staticStyle:{width:"120px"},model:{value:s.value,callback:function(a){s.value=a},expression:"value"}},s._l(s.cityList,function(a){return t("Option",{key:a.value,attrs:{value:a.value}},[s._v(s._s(a.label))])}),1)],1),s._v(" "),t("li",[t("span",[s._v("网元名称:")]),s._v(" "),t("Select",{staticStyle:{width:"120px"},model:{value:s.value,callback:function(a){s.value=a},expression:"value"}},s._l(s.cityList,function(a){return t("Option",{key:a.value,attrs:{value:a.value}},[s._v(s._s(a.label))])}),1)],1),s._v(" "),t("li",[t("Button",{attrs:{type:"primary"}},[s._v("查询")])],1),s._v(" "),t("li",{staticStyle:{float:"right"}},[t("Button",{attrs:{type:"primary"}},[s._v("导出")])],1)])]),s._v(" "),t("section",[t("div",{ref:"table",staticClass:"right"},[t("Table",{attrs:{columns:s.columns,data:s.data,"row-class-name":s.addClassName,"highlight-row":"",height:s.tableHeight},on:{"on-row-click":s.currentRow,"on-row-dblclick":s.dbcurrentRow}})],1),s._v(" "),t("Drawer",{attrs:{title:"检测结果",closable:!1,width:80},model:{value:s.value1,callback:function(a){s.value1=a},expression:"value1"}},[t("section",[t("ol",{staticClass:"z_tit"},[t("li",[t("span",[s._v("设备名称:")]),s._v(" "),t("span",[s._v(s._s(this.deviceName))])]),s._v(" "),t("li",[t("span",[s._v("管理地址:")]),s._v(" "),t("span",[s._v(s._s(this.managementAddress))])]),s._v(" "),t("li",[t("span",[s._v("设备类型:")]),s._v(" "),t("span",[s._v("NE20E-S8")])]),s._v(" "),t("li",[t("span",[s._v("线路归属:")]),s._v(" "),t("span",[s._v("昌九线")])]),s._v(" "),t("Button",{staticStyle:{float:"right"},attrs:{type:"primary"}},[s._v("导出")])],1),s._v(" "),t("ul",{staticClass:"z_content"},[t("li",[t("span",[s._v("版本检测")]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("版本号:")]),s._v(" "),t("span",[s._v(s._s(this.versionNumber))])]),s._v(" "),t("p",[t("span",[s._v("补丁号:")]),s._v(" "),t("span",[s._v(s._s(this.patchNumber))])]),s._v(" "),t("p",[t("span",[s._v("备案版本及补丁:")]),s._v(" "),t("span",[s._v("匹配")])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateCorrectClass"},[s._v(s._s(s.versionState))])])])]),s._v(" "),t("li",[t("span",[s._v("IP检测")]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("管理IP地址:")]),s._v(" "),t("span",[s._v("10.50.0.32/32")])]),s._v(" "),t("div",{staticClass:"listDetail"},[t("p",[s._v("互联IP地址:")]),s._v(" "),t("div",[t("p",[s._v("10.50.0.1/30")]),s._v(" "),t("p",[s._v("10.50.0.1/31")])])]),s._v(" "),t("div",{staticClass:"listDetail"},[t("p",[s._v("接口业务IP地址:")]),s._v(" "),t("div",[t("p",[s._v("GPRS101：10.51.1.0/24")]),s._v(" "),t("p",[s._v("IVMS102：10.52.1.0/25")]),s._v(" "),t("p",[s._v("VCS103：10.53.1.0/30")])])]),s._v(" "),t("p",[t("span",[s._v("IP地址规范:")]),s._v(" "),t("span",[s._v("无地址冲突")])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateCorrectClass"},[s._v("正常")])])])]),s._v(" "),t("li",[t("span",[s._v("常规检测")]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("设备名检测")])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateCorrectClass"},[s._v("正常")])])]),s._v(" "),t("div",{staticClass:"portClass"},[t("p",[s._v("端口号检测")]),s._v(" "),t("div",[t("div",[t("p",[t("span",[s._v("端口号:")]),s._v(" "),t("span",[s._v("GE0/0/1")])]),s._v(" "),t("p",[t("span",[s._v("端口描述：")]),s._v(" "),t("span")]),s._v(" "),t("p",[t("span",[s._v("描述规范:")]),s._v(" "),t("span",[s._v("TO-TN-SHDDS-AR01-NE40EX16-10GE")])]),s._v(" "),t("p",[t("span",{staticClass:"stateErrorClass"},[s._v("正常")]),s._v(" "),t("span",[s._v("状态:")])])]),s._v(" "),t("div",[t("p",[t("span",[s._v("端口号:")]),s._v(" "),t("span",[s._v("GE0/0/5")])]),s._v(" "),t("p",[t("span",[s._v("端口描述：")]),s._v(" "),t("span",[s._v("down")])]),s._v(" "),t("p",[t("span",[s._v("端口关闭标准化:")]),s._v(" "),t("span",[s._v("*down")])]),s._v(" "),t("p",[t("span",{staticClass:"stateErrorClass"},[s._v("正常")]),s._v(" "),t("span",[s._v("状态:")])])])])]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("QOS配置检测:")]),s._v(" "),t("span",[s._v(s._s(this.sameNetworkDeviceVersion))])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateErrorClass"},[s._v("异常")])])]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("链路cost配置检测:")]),s._v(" "),t("span",[s._v(s._s(this.sameNetworkDeviceVersion))])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateErrorClass"},[s._v("异常")])])]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("流量监控配置:")]),s._v(" "),t("span",[s._v(s._s(this.sameNetworkDeviceVersion))])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateErrorClass"},[s._v("异常")])])]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("SNMP配置检测:")]),s._v(" "),t("span",[s._v(s._s(this.sameNetworkDeviceVersion))])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateErrorClass"},[s._v("异常")])])]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("NTP配置检测:")]),s._v(" "),t("span",[s._v(s._s(this.sameNetworkDeviceVersion))])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateErrorClass"},[s._v("异常")])])])]),s._v(" "),t("li",[t("span",[s._v("协议检测")]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("Isis协议检测")])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateCorrectClass"},[s._v("正常")])])]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("OSPF协议检测")])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateCorrectClass"},[s._v("正常")])])]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("BGP协议检测")])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateCorrectClass"},[s._v("正常")])])]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("MPLS LDP协议检测")])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateCorrectClass"},[s._v("正常")])])]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("BGP MPLS VPNV4协议检测")])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateCorrectClass"},[s._v("正常")])])]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("BFD协议检测")])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateCorrectClass"},[s._v("正常")])])]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("router id 检测:")]),s._v(" "),t("span",[s._v("10.50.0.32")])]),s._v(" "),t("p",[t("span",[s._v("route ID 标准化:")]),s._v(" "),t("span",[s._v("10.50.0.32")])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateErrorClass"},[s._v("异常")])])])]),s._v(" "),t("li",[t("span",[s._v("安全加固检测")]),s._v(" "),t("div",[t("p",[s._v("ACL配置检测")]),s._v(" "),t("div",{staticClass:"ACLclass"},[t("div",[t("p",[t("span",[s._v("未端口关闭:")]),s._v(" "),t("span",[s._v("445、139")])]),s._v(" "),t("p",[s._v("ACL关闭端口号规范标准")]),s._v(" "),t("p",[t("span",{staticClass:"stateErrorClass"},[s._v("异常")]),s._v(" "),t("span",[s._v("状态:")])])]),s._v(" "),t("div",[t("p",[t("span",[s._v("SNMP 策略开发:")]),s._v(" "),t("span",[s._v("未配置")])]),s._v(" "),t("p",[s._v("ACL SNMP策略规范标准")]),s._v(" "),t("p",[t("span",{staticClass:"stateErrorClass"},[s._v("异常")]),s._v(" "),t("span",[s._v("状态:")])])]),s._v(" "),t("div",[t("p",[t("span",[s._v("SHH/Telnet 策略开发:")]),s._v(" "),t("span",[s._v("未配置")])]),s._v(" "),t("p",[s._v("ACL SHH/Telnet策略规范标准")]),s._v(" "),t("p",[t("span",{staticClass:"stateErrorClass"},[s._v("异常")]),s._v(" "),t("span",[s._v("状态:")])])])])]),s._v(" "),t("div",{staticClass:"versionClass"},[t("p",[t("span",[s._v("SSH配置检测")])]),s._v(" "),t("p",[t("span",[s._v("状态:")]),s._v(" "),t("span",{staticClass:"stateErrorClass"},[s._v("异常")])])])])])])])],1)])},staticRenderFns:[]};var _=t("VU/8")(v,n,!1,function(s){t("xJ8w"),t("FZW5")},"data-v-94796272",null);a.default=_.exports},xJ8w:function(s,a){}});