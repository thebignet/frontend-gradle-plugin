(window.webpackJsonp=window.webpackJsonp||[]).push([[72,3,4,5,8,15,18,22,23],{206:function(e,t,n){"use strict";n.r(t);var r=n(0),code=n(68),o=n(90),l=n(52),f=r.a.component("fgp-property-link",{components:{fgpCode:code.default,fgpSiteLink:o.default},mixins:[l.a],props:{name:{type:String,required:!0}}}),c=n(4),component=Object(c.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fgp-site-link",{attrs:{path:e.fgp.paths.configuration+"#"+e.name}},[n("fgp-code",[e._v(e._s(e.name))])],1)}),[],!1,null,null,null);t.default=component.exports},208:function(e,t,n){"use strict";n.r(t);var r=n(0).a.component("fgp-info",{}),o=n(4),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"text-info px-2"},[n("i",{staticClass:"fas fa-info-circle mr-1"}),e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},212:function(e,t,n){"use strict";var r=n(6),o=n(25),l=n(26),f=n(131),c=n(70),d=n(10),v=n(55).f,_=n(56).f,h=n(12).f,m=n(213).trim,y="Number",k=r.Number,x=k,E=k.prototype,N=l(n(91)(E))==y,O="trim"in String.prototype,w=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,o,l=(t=O?t.trim():m(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+t}for(var code,f=t.slice(2),i=0,d=f.length;i<d;i++)if((code=f.charCodeAt(i))<48||code>o)return NaN;return parseInt(f,r)}}return+t};if(!k(" 0o1")||!k("0b1")||k("+0x1")){k=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof k&&(N?d((function(){E.valueOf.call(n)})):l(n)!=y)?f(new x(w(t)),n,k):w(t)};for(var I,A=n(9)?v(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;A.length>S;S++)o(x,I=A[S])&&!o(k,I)&&h(k,I,_(x,I));k.prototype=E,E.constructor=k,n(15)(r,y,k)}},213:function(e,t,n){var r=n(5),o=n(31),l=n(10),f=n(214),c="["+f+"]",d=RegExp("^"+c+c+"*"),v=RegExp(c+c+"*$"),_=function(e,t,n){var o={},c=l((function(){return!!f[e]()||"​"!="​"[e]()})),d=o[e]=c?t(h):f[e];n&&(o[n]=d),r(r.P+r.F*c,"String",o)},h=_.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(d,"")),2&t&&(e=e.replace(v,"")),e};e.exports=_},214:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},215:function(e,t,n){"use strict";n.r(t);n(212);var r=n(0),o=n(53),l=r.a.component("fgp-yarn-link",{components:{fgpLink:o.default},props:{version:{type:Number,default:1}},data:function(){return{yarnUrls:["https://classic.yarnpkg.com/","https://yarnpkg.com/"]}}}),f=n(4),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("fgp-link",{attrs:{href:e.yarnUrls[e.version-1],title:e.$t("navigation.yarn"+e.version+".title")}},[e._v(e._s(e.$t("navigation.yarn"+e.version+".label")))])}),[],!1,null,null,null);t.default=component.exports},216:function(e,t,n){"use strict";n.r(t);var r=n(0).a.component("fgp-nodejs-link",{}),o=n(4),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("fgp-link",{attrs:{href:"https://nodejs.org/"}},[e._v(e._s(e.$t("navigation.nodejs.label")))])}),[],!1,null,null,null);t.default=component.exports},220:function(e,t,n){"use strict";n.r(t);var r=n(0).a.component("fgp-main-title",{}),o=n(4),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(69).default})},221:function(e,t,n){"use strict";n(222),n(17);t.a={head:function(){var e={meta:[],link:[]};return e.title=this.htmlTitle?this.htmlTitle:"Frontend Gradle plugin",this.metaDescription&&e.meta.push({hid:"description",name:"description",content:this.metaDescription}),e.meta.push({name:"og:title",content:e.title}),e.meta.push({name:"og:description",content:e.meta.find((function(meta){return"description"===meta.name})).content}),this.linkCanonicalHref&&e.link.push({rel:"canonical",href:this.linkCanonicalHref}),e}}},222:function(e,t,n){"use strict";var r=n(5),o=n(93)(5),l="find",f=!0;l in[]&&Array(1).find((function(){f=!1})),r(r.P+r.F*f,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(92)(l)},224:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(90),l=r.a.component("fgp-faq",{components:{fgpSiteLink:o.default}}),f=n(4),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"mb-3 border-bottom"},[n("header",[n("h4",[e._t("question"),e._v(" "),n("fgp-site-link",{staticClass:"small text-info",attrs:{path:"#app"}},[e._v("↑")])],2)]),e._v(" "),n("section",{staticClass:"px-3"},[e._t("answer")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(69).default})},261:function(e,t,n){"use strict";n.r(t);var r=n(0),code=n(68),o=n(224),l=n(208),f=n(216),c=n(206),d=r.a.component("fgp-node-npm-npx-direct-use-faq",{components:{fgpCode:code.default,fgpFaq:o.default,fgpInfo:l.default,fgpNodejsLink:f.default,fgpPropertyLink:c.default}}),v=n(4),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fgp-faq",{scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n        How to use "),n("fgp-code",[e._v("node")]),e._v("/"),n("fgp-code",[e._v("npm")]),e._v("/"),n("fgp-code",[e._v("npx")]),e._v(" executables apart\n        from Gradle when the "),n("fgp-nodejs-link"),e._v(" distribution is downloaded by the plugin?\n    ")]},proxy:!0},{key:"answer",fn:function(){return[n("ul",[n("li",[e._v("\n                Create a "),n("fgp-code",[e._v("NODEJS_HOME")]),e._v(" environment variable containing the real path set in the\n                "),n("fgp-property-link",{attrs:{name:"nodeInstallDirectory"}}),e._v(" property.\n            ")],1),e._v(" "),n("li",[e._v("\n                Add the directory containing executables to the "),n("fgp-code",[e._v("PATH")]),e._v(" environment variable:\n                "),n("ul",[n("li",[e._v("On Unix-like O/S, add the "),n("fgp-code",[e._v("$NODEJS_HOME/bin")]),e._v(" path.")],1),e._v(" "),n("li",[e._v("On Windows O/S, add "),n("fgp-code",[e._v("%NODEJS_HOME%")]),e._v(" path.")],1)])],1)]),e._v(" "),n("fgp-info",[e._v("\n            Applies only when the "),n("fgp-property-link",{attrs:{name:"nodeDistributionProvided"}}),e._v(" property is\n            "),n("fgp-code",[e._v("false")]),e._v(".\n        ")],1)]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports},262:function(e,t,n){"use strict";n.r(t);var r=n(0),code=n(68),o=n(224),l=n(208),f=n(206),c=n(215),d=r.a.component("fgp-yarn-direct-use-faq",{components:{fgpCode:code.default,fgpFaq:o.default,fgpInfo:l.default,fgpPropertyLink:f.default,fgpYarnLink:c.default}}),v=n(4),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fgp-faq",{scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n        How to use "),n("fgp-code",[e._v("yarn")]),e._v(" executable apart from Gradle when the "),n("fgp-yarn-link"),e._v("\n        distribution is downloaded by the plugin?\n    ")]},proxy:!0},{key:"answer",fn:function(){return[n("ul",[n("li",[e._v("\n                Create a "),n("fgp-code",[e._v("YARN_HOME")]),e._v(" environment variable containing the real path set in the\n                "),n("fgp-property-link",{attrs:{name:"yarnInstallDirectory"}}),e._v(" property.\n            ")],1),e._v(" "),n("li",[e._v("\n                Add the directory containing executables to the "),n("fgp-code",[e._v("PATH")]),e._v(" environment variable:\n                "),n("ul",[n("li",[e._v("On Unix-like O/S, add the "),n("fgp-code",[e._v("$YARN_HOME/bin")]),e._v(" path.")],1),e._v(" "),n("li",[e._v("On Windows O/S, add "),n("fgp-code",[e._v("%YARN_HOME%\\bin")]),e._v(" path.")],1)])],1)]),e._v(" "),n("fgp-info",[e._v("\n            Applies only when the "),n("fgp-property-link",{attrs:{name:"yarnDistributionProvided"}}),e._v(" property is\n            "),n("fgp-code",[e._v("false")]),e._v(".\n        ")],1)]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports},278:function(e,t,n){"use strict";n.r(t);var r=n(0),code=n(68),o=n(220),l=n(261),f=n(221),c=n(90),d=n(262),v=r.a.component("fgp-faqs",{components:{fgpCode:code.default,fgpMainTitle:o.default,fgpNodeNpmNpxDirectUseFaq:l.default,fgpSiteLink:c.default,fgpYarnDirectUseFaq:d.default},mixins:[f.a],data:function(){return{htmlTitle:"Frequently asked questions",metaDescription:"Using node, npm, npx, yarn executables provided in downloaded distributions.",linkCanonicalHref:"https://siouan.github.io/frontend-gradle-plugin/faqs/"}}}),_=n(4),component=Object(_.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("fgp-main-title",[e._v("Frequently asked questions")]),e._v(" "),n("nav",[n("ul",[n("li",[n("fgp-site-link",{attrs:{path:"#node-npm-npx-direct-use"}},[e._v("\n                    How to use "),n("fgp-code",[e._v("node")]),e._v("/"),n("fgp-code",[e._v("npm")]),e._v("/"),n("fgp-code",[e._v("npx")]),e._v("\n                    executables apart from Gradle when the Node.js distribution is downloaded by the plugin?\n                ")],1)],1),e._v(" "),n("li",[n("fgp-site-link",{attrs:{path:"#yarn-direct-use"}},[e._v("\n                    How to use "),n("fgp-code",[e._v("yarn")]),e._v(" executable apart from Gradle when the Yarn distribution is\n                    downloaded by the plugin?\n                ")],1)],1)])]),e._v(" "),n("fgp-node-npm-npx-direct-use-faq",{attrs:{id:"node-npm-npx-direct-use"}}),e._v(" "),n("fgp-yarn-direct-use-faq",{attrs:{id:"yarn-direct-use"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);