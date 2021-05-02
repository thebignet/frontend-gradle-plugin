(window.webpackJsonp=window.webpackJsonp||[]).push([[35,18,19,20,25],{204:function(t,e,n){"use strict";n.r(e);n(54);var r=n(0),code=n(68),l=n(53),o=n(207),f=n(90),c=n(205),d=/^javax?\.([a-z]\w+\.)+[A-Z]\w+$/,_="java.lang.String",m=r.a.component("fgp-property",{components:{fgpCode:code.default,fgpLink:l.default,fgpPropertyLinkAnchor:o.default,fgpSiteLink:f.default,fgpTaskLink:c.default},props:{name:{type:String,required:!0},type:{type:String,required:!0},required:{type:Boolean,default:!0},defaultValue:{type:String,default:null},example:{type:String,default:null},tasks:{type:Array,required:!0}},computed:{defaultScriptValue:function(){return null===this.defaultValue?"null":this.type===_?'"'.concat(this.defaultValue,'"'):this.defaultValue},jdkHref:function(){return this.type&&d.test(this.type)?"https://docs.oracle.com/javase/8/docs/api/index.html?".concat(this.type.replace(/\./,"/"),".html"):null},scriptExample:function(){return this.type===_?'"'.concat(this.example,'"'):this.example}}}),v=n(4),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"mb-3 border-bottom"},[n("header",[n("h4",[n("fgp-property-link-anchor",{attrs:{name:t.name}}),t._v("\n            Property\n            "),n("fgp-code",[t._v("\n                "+t._s(t.name)+"\n            ")]),t._v(" "),n("fgp-site-link",{staticClass:"small text-info",attrs:{path:"#app"}},[t._v("↑")])],1),t._v(" "),n("ul",[t.tasks.length>0?n("li",[t._v("\n                Related tasks:\n                "),t._l(t.tasks,(function(e,r){return n("span",{key:e},[n("fgp-task-link",{attrs:{name:e}}),t._v(" "),r<t.tasks.length-1?[t._v(", ")]:t._e()],2)}))],2):t._e(),t._v(" "),n("li",[t._v("\n                Type:\n                "),t.jdkHref?[n("fgp-link",{attrs:{href:t.jdkHref}},[n("fgp-code",[t._v(t._s(t.type))])],1)]:[n("fgp-code",[t._v(t._s(t.type))])]],2),t._v(" "),n("li",[t._v("\n                Required: "),n("fgp-code",[t._v(t._s(t.required))])],1),t._v(" "),n("li",[t._v("\n                Default value: "),n("fgp-code",[t._v(t._s(t.defaultScriptValue))])],1),t._v(" "),t.example?n("li",[t._v("\n                Example: "),n("fgp-code",[t._v(t._s(t.scriptExample))])],1):t._e()])]),t._v(" "),n("section",{staticClass:"px-3"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(69).default})},205:function(t,e,n){"use strict";n.r(e);var r=n(0),code=n(68),l=n(90),o=n(52),f=r.a.component("fgp-task-link",{components:{fgpCode:code.default,fgpSiteLink:l.default},mixins:[o.a],props:{name:{type:String,required:!0}}}),c=n(4),component=Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fgp-site-link",{attrs:{path:t.fgp.paths.tasks+"#"+t.name}},[n("fgp-code",[t._v(t._s(t.name))])],1)}),[],!1,null,null,null);e.default=component.exports},206:function(t,e,n){"use strict";n.r(e);var r=n(0),code=n(68),l=n(90),o=n(52),f=r.a.component("fgp-property-link",{components:{fgpCode:code.default,fgpSiteLink:l.default},mixins:[o.a],props:{name:{type:String,required:!0}}}),c=n(4),component=Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fgp-site-link",{attrs:{path:t.fgp.paths.configuration+"#"+t.name}},[n("fgp-code",[t._v(t._s(t.name))])],1)}),[],!1,null,null,null);e.default=component.exports},207:function(t,e,n){"use strict";n.r(e);var r=n(0).a.component("fgp-property-link-anchor",{props:{name:{type:String,required:!0}}}),l=n(4),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"text-info",attrs:{id:t.name}},[t._v("#")])}),[],!1,null,null,null);e.default=component.exports},249:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n(204),o=n(206),f=r.a.component("fgp-https-proxy-port-property",{components:{fgpProperty:l.default,fgpPropertyLink:o.default}}),c=n(4),component=Object(c.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fgp-property",{attrs:{name:"httpsProxyPort",type:"int","default-value":"443",tasks:["installNode","installYarn"]}},[n("p",[t._v("\n        Port of the proxy server used for secure HTTP requests. This property is ignored unless the\n        "),n("fgp-property-link",{attrs:{name:"httpsProxyHost"}}),t._v(" property is defined.\n    ")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);