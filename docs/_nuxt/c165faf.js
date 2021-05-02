(window.webpackJsonp=window.webpackJsonp||[]).push([[40,18,19,20,25,70],{204:function(e,t,n){"use strict";n.r(t);n(54);var r=n(0),code=n(68),l=n(53),o=n(207),f=n(90),c=n(205),d=/^javax?\.([a-z]\w+\.)+[A-Z]\w+$/,_="java.lang.String",m=r.a.component("fgp-property",{components:{fgpCode:code.default,fgpLink:l.default,fgpPropertyLinkAnchor:o.default,fgpSiteLink:f.default,fgpTaskLink:c.default},props:{name:{type:String,required:!0},type:{type:String,required:!0},required:{type:Boolean,default:!0},defaultValue:{type:String,default:null},example:{type:String,default:null},tasks:{type:Array,required:!0}},computed:{defaultScriptValue:function(){return null===this.defaultValue?"null":this.type===_?'"'.concat(this.defaultValue,'"'):this.defaultValue},jdkHref:function(){return this.type&&d.test(this.type)?"https://docs.oracle.com/javase/8/docs/api/index.html?".concat(this.type.replace(/\./,"/"),".html"):null},scriptExample:function(){return this.type===_?'"'.concat(this.example,'"'):this.example}}}),v=n(4),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"mb-3 border-bottom"},[n("header",[n("h4",[n("fgp-property-link-anchor",{attrs:{name:e.name}}),e._v("\n            Property\n            "),n("fgp-code",[e._v("\n                "+e._s(e.name)+"\n            ")]),e._v(" "),n("fgp-site-link",{staticClass:"small text-info",attrs:{path:"#app"}},[e._v("↑")])],1),e._v(" "),n("ul",[e.tasks.length>0?n("li",[e._v("\n                Related tasks:\n                "),e._l(e.tasks,(function(t,r){return n("span",{key:t},[n("fgp-task-link",{attrs:{name:t}}),e._v(" "),r<e.tasks.length-1?[e._v(", ")]:e._e()],2)}))],2):e._e(),e._v(" "),n("li",[e._v("\n                Type:\n                "),e.jdkHref?[n("fgp-link",{attrs:{href:e.jdkHref}},[n("fgp-code",[e._v(e._s(e.type))])],1)]:[n("fgp-code",[e._v(e._s(e.type))])]],2),e._v(" "),n("li",[e._v("\n                Required: "),n("fgp-code",[e._v(e._s(e.required))])],1),e._v(" "),n("li",[e._v("\n                Default value: "),n("fgp-code",[e._v(e._s(e.defaultScriptValue))])],1),e._v(" "),e.example?n("li",[e._v("\n                Example: "),n("fgp-code",[e._v(e._s(e.scriptExample))])],1):e._e()])]),e._v(" "),n("section",{staticClass:"px-3"},[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(69).default})},205:function(e,t,n){"use strict";n.r(t);var r=n(0),code=n(68),l=n(90),o=n(52),f=r.a.component("fgp-task-link",{components:{fgpCode:code.default,fgpSiteLink:l.default},mixins:[o.a],props:{name:{type:String,required:!0}}}),c=n(4),component=Object(c.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fgp-site-link",{attrs:{path:e.fgp.paths.tasks+"#"+e.name}},[n("fgp-code",[e._v(e._s(e.name))])],1)}),[],!1,null,null,null);t.default=component.exports},206:function(e,t,n){"use strict";n.r(t);var r=n(0),code=n(68),l=n(90),o=n(52),f=r.a.component("fgp-property-link",{components:{fgpCode:code.default,fgpSiteLink:l.default},mixins:[o.a],props:{name:{type:String,required:!0}}}),c=n(4),component=Object(c.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fgp-site-link",{attrs:{path:e.fgp.paths.configuration+"#"+e.name}},[n("fgp-code",[e._v(e._s(e.name))])],1)}),[],!1,null,null,null);t.default=component.exports},207:function(e,t,n){"use strict";n.r(t);var r=n(0).a.component("fgp-property-link-anchor",{props:{name:{type:String,required:!0}}}),l=n(4),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("span",{staticClass:"text-info",attrs:{id:e.name}},[e._v("#")])}),[],!1,null,null,null);t.default=component.exports},210:function(e,t,n){"use strict";n.r(t);var r=n(0).a.component("fgp-warning",{}),l=n(4),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"text-danger px-2"},[n("i",{staticClass:"fas fa-exclamation-triangle mr-1"}),e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},239:function(e,t,n){"use strict";n.r(t);var r=n(0),code=n(68),l=n(204),o=n(206),f=n(210),c=r.a.component("fgp-node-distribution-server-username-property",{components:{fgpCode:code.default,fgpProperty:l.default,fgpPropertyLink:o.default,fgpWarning:f.default}}),d=n(4),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fgp-property",{attrs:{name:"nodeDistributionServerUsername",type:"java.lang.String",required:!1,tasks:["installNode"]}},[n("p",[e._v("\n        This property may be used to download the distribution with a given identity (BASIC scheme server-side).\n        When not "),n("fgp-code",[e._v("null")]),e._v(", the "),n("fgp-property-link",{attrs:{name:"nodeDistributionServerPassword"}}),e._v("\n        property is also required.\n    ")],1),e._v(" "),n("fgp-warning",[e._v("\n        SECURITY: do not to store a plain text username in the build script. Store it in an environment variable or\n        an external user property, and use one or the other as the value of this property.\n    ")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);