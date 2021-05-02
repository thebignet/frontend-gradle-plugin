(window.webpackJsonp=window.webpackJsonp||[]).push([[28,8,19,20,25],{204:function(t,e,n){"use strict";n.r(e);n(54);var l=n(0),code=n(68),r=n(53),o=n(207),f=n(90),c=n(205),d=/^javax?\.([a-z]\w+\.)+[A-Z]\w+$/,_="java.lang.String",v=l.a.component("fgp-property",{components:{fgpCode:code.default,fgpLink:r.default,fgpPropertyLinkAnchor:o.default,fgpSiteLink:f.default,fgpTaskLink:c.default},props:{name:{type:String,required:!0},type:{type:String,required:!0},required:{type:Boolean,default:!0},defaultValue:{type:String,default:null},example:{type:String,default:null},tasks:{type:Array,required:!0}},computed:{defaultScriptValue:function(){return null===this.defaultValue?"null":this.type===_?'"'.concat(this.defaultValue,'"'):this.defaultValue},jdkHref:function(){return this.type&&d.test(this.type)?"https://docs.oracle.com/javase/8/docs/api/index.html?".concat(this.type.replace(/\./,"/"),".html"):null},scriptExample:function(){return this.type===_?'"'.concat(this.example,'"'):this.example}}}),m=n(4),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"mb-3 border-bottom"},[n("header",[n("h4",[n("fgp-property-link-anchor",{attrs:{name:t.name}}),t._v("\n            Property\n            "),n("fgp-code",[t._v("\n                "+t._s(t.name)+"\n            ")]),t._v(" "),n("fgp-site-link",{staticClass:"small text-info",attrs:{path:"#app"}},[t._v("↑")])],1),t._v(" "),n("ul",[t.tasks.length>0?n("li",[t._v("\n                Related tasks:\n                "),t._l(t.tasks,(function(e,l){return n("span",{key:e},[n("fgp-task-link",{attrs:{name:e}}),t._v(" "),l<t.tasks.length-1?[t._v(", ")]:t._e()],2)}))],2):t._e(),t._v(" "),n("li",[t._v("\n                Type:\n                "),t.jdkHref?[n("fgp-link",{attrs:{href:t.jdkHref}},[n("fgp-code",[t._v(t._s(t.type))])],1)]:[n("fgp-code",[t._v(t._s(t.type))])]],2),t._v(" "),n("li",[t._v("\n                Required: "),n("fgp-code",[t._v(t._s(t.required))])],1),t._v(" "),n("li",[t._v("\n                Default value: "),n("fgp-code",[t._v(t._s(t.defaultScriptValue))])],1),t._v(" "),t.example?n("li",[t._v("\n                Example: "),n("fgp-code",[t._v(t._s(t.scriptExample))])],1):t._e()])]),t._v(" "),n("section",{staticClass:"px-3"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(69).default})},205:function(t,e,n){"use strict";n.r(e);var l=n(0),code=n(68),r=n(90),o=n(52),f=l.a.component("fgp-task-link",{components:{fgpCode:code.default,fgpSiteLink:r.default},mixins:[o.a],props:{name:{type:String,required:!0}}}),c=n(4),component=Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fgp-site-link",{attrs:{path:t.fgp.paths.tasks+"#"+t.name}},[n("fgp-code",[t._v(t._s(t.name))])],1)}),[],!1,null,null,null);e.default=component.exports},207:function(t,e,n){"use strict";n.r(e);var l=n(0).a.component("fgp-property-link-anchor",{props:{name:{type:String,required:!0}}}),r=n(4),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"text-info",attrs:{id:t.name}},[t._v("#")])}),[],!1,null,null,null);e.default=component.exports},208:function(t,e,n){"use strict";n.r(e);var l=n(0).a.component("fgp-info",{}),r=n(4),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-info px-2"},[n("i",{staticClass:"fas fa-info-circle mr-1"}),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},232:function(t,e,n){"use strict";n.r(e);var l=n(0),code=n(68),r=n(208),o=n(204),f=l.a.component("fgp-clean-script-property",{components:{fgpCode:code.default,fgpInfo:r.default,fgpProperty:o.default}}),c=n(4),component=Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fgp-property",{attrs:{name:"cleanScript",type:"java.lang.String",required:!1,example:"run clean",tasks:["cleanFrontend"]}},[n("p",[t._v("\n        This property may be used to clean frontend's compiled artifacts, when they are generated out of the\n        "),n("fgp-code",[t._v("${project.buildDir}")]),t._v(" directory.\n    ")],1),t._v(" "),n("fgp-info",[t._v("\n        Take a look at this "),n("fgp-site-link",{attrs:{path:"#script-settings"}},[t._v("guide")]),t._v(" about script settings.\n    ")],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);