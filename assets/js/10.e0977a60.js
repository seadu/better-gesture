(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{320:function(e,t,n){},366:function(e,t,n){"use strict";var a=n(320);n.n(a).a},384:function(e,t,n){"use strict";n.r(t);var a=1,r={name:"pinch",data:function(){return{scale:1}},methods:{moreFingerStart:function(){a=this.scale},pinch:function(e){this.scale=a*e.zoom}}},s=(n(366),n(45)),i=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pinchwrap"},[n("p",[e._v("zoom:"+e._s(e.scale))]),e._v(" "),n("div",{directives:[{name:"gesture",rawName:"v-gesture:moreFingerStart",value:e.moreFingerStart,expression:"moreFingerStart",arg:"moreFingerStart"},{name:"gesture",rawName:"v-gesture:pinch",value:e.pinch,expression:"pinch",arg:"pinch"}],staticClass:"pinch",style:{transform:"scale3d("+e.scale+","+e.scale+",1)"}},[e._v("双指缩放")])])}),[],!1,null,"6ba2bb23",null);t.default=i.exports}}]);