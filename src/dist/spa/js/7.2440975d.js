(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"8b24":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"350px"}},[a("q-toolbar",{staticClass:"bg-primary text-white shadow-2"},[a("q-toolbar-title",[t._v("CloudTalk Status")])],1),a("q-list",{attrs:{bordered:""}},[t._l(t.contacts,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,staticClass:"q-my-sm",attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",{attrs:{color:"primary","text-color":"white"}},[t._v("\n            FF\n          ")])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.name))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(e.status))])],1),a("q-item-section",{attrs:{side:""}},["online"==e.status?a("q-icon",{attrs:{name:"stop_circle",color:"green"}}):a("q-icon",{attrs:{name:"error",color:"red"}})],1)],1)})),a("q-inner-loading",{attrs:{showing:t.visible}},[a("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],2)],1)])},s=[],l={name:"PageIndex",data(){return{contacts:[],polling:null,visible:!1,showSimulatedReturnData:!1}},methods:{callCloudAPI(){this.$axios.get("/api/cloud").then((t=>{console.log(t),this.contacts=t.data,this.visible=!1,this.showSimulatedReturnData=!0})).catch((t=>{console.log(t)}))}},created(){this.visible=!0,this.showSimulatedReturnData=!1,this.callCloudAPI(),this.polling=setInterval((()=>{this.callCloudAPI()}),5e3)},beforeDestroy(){clearInterval(this.polling)}},r=l,o=a("2877"),n=a("9989"),c=a("65c6"),d=a("6ac5"),m=a("1c1c"),p=a("66e5"),u=a("4074"),h=a("cb32"),b=a("0170"),v=a("0016"),q=a("74f7"),g=a("cf57"),w=a("714f"),f=a("eebe"),I=a.n(f),Q=Object(o["a"])(r,i,s,!1,null,null,null);e["default"]=Q.exports;I()(Q,"components",{QPage:n["a"],QToolbar:c["a"],QToolbarTitle:d["a"],QList:m["a"],QItem:p["a"],QItemSection:u["a"],QAvatar:h["a"],QItemLabel:b["a"],QIcon:v["a"],QInnerLoading:q["a"],QSpinnerGears:g["a"]}),I()(Q,"directives",{Ripple:w["a"]})}}]);