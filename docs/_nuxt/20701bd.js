(window.webpackJsonp=window.webpackJsonp||[]).push([[74,6,9,11,13,15,16,17,22,23,57],{212:function(t,e,n){"use strict";var r=n(6),l=n(25),o=n(26),c=n(131),f=n(70),d=n(10),h=n(55).f,v=n(56).f,m=n(12).f,_=n(213).trim,k="Number",y=r.Number,x=y,C=y.prototype,w=o(n(91)(C))==k,N="trim"in String.prototype,E=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,l,o=(e=N?e.trim():_(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(w?d((function(){C.valueOf.call(n)})):o(n)!=k)?c(new x(E(e)),n,y):E(e)};for(var I,j=n(9)?h(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;j.length>L;L++)l(x,I=j[L])&&!l(y,I)&&m(y,I,v(x,I));y.prototype=C,C.constructor=y,n(15)(r,k,y)}},213:function(t,e,n){var r=n(5),l=n(31),o=n(10),c=n(214),f="["+c+"]",d=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(t,e,n){var l={},f=o((function(){return!!c[t]()||"​"!="​"[t]()})),d=l[t]=f?e(m):c[t];n&&(l[n]=d),r(r.P+r.F*f,"String",l)},m=v.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(h,"")),t};t.exports=v},214:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},215:function(t,e,n){"use strict";n.r(e);n(212);var r=n(0),l=n(53),o=r.a.component("fgp-yarn-link",{components:{fgpLink:l.default},props:{version:{type:Number,default:1}},data:function(){return{yarnUrls:["https://classic.yarnpkg.com/","https://yarnpkg.com/"]}}}),c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("fgp-link",{attrs:{href:t.yarnUrls[t.version-1],title:t.$t("navigation.yarn"+t.version+".title")}},[t._v(t._s(t.$t("navigation.yarn"+t.version+".label")))])}),[],!1,null,null,null);e.default=component.exports},216:function(t,e,n){"use strict";n.r(e);var r=n(0).a.component("fgp-nodejs-link",{}),l=n(4),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("fgp-link",{attrs:{href:"https://nodejs.org/"}},[t._v(t._s(t.$t("navigation.nodejs.label")))])}),[],!1,null,null,null);e.default=component.exports},217:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n(53),o=r.a.component("fgp-gradle-docs-link",{components:{fgpLink:l.default},props:{path:{type:String,default:null}}}),c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("fgp-link",{attrs:{href:"https://docs.gradle.org"+t.path}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},220:function(t,e,n){"use strict";n.r(e);var r=n(0).a.component("fgp-main-title",{}),l=n(4),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(69).default})},221:function(t,e,n){"use strict";n(222),n(17);e.a={head:function(){var t={meta:[],link:[]};return t.title=this.htmlTitle?this.htmlTitle:"Frontend Gradle plugin",this.metaDescription&&t.meta.push({hid:"description",name:"description",content:this.metaDescription}),t.meta.push({name:"og:title",content:t.title}),t.meta.push({name:"og:description",content:t.meta.find((function(meta){return"description"===meta.name})).content}),this.linkCanonicalHref&&t.link.push({rel:"canonical",href:this.linkCanonicalHref}),t}}},222:function(t,e,n){"use strict";var r=n(5),l=n(93)(5),o="find",c=!0;o in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),n(92)(o)},223:function(t,e,n){"use strict";n.r(e);var r=n(0).a.component("fgp-sub-title",{}),l=n(4),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h2",[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(69).default})},227:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n(53),o=r.a.component("fgp-npm-link",{components:{fgpLink:l.default}}),c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("fgp-link",{attrs:{href:"https://www.npmjs.com"}},[t._v(t._s(t.$t("navigation.npm.label")))])}),[],!1,null,null,null);e.default=component.exports},229:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n(53),o="https://gradle.org",c=r.a.component("fgp-gradle-link",{components:{fgpLink:l.default},props:{path:{type:String,default:null}},computed:{gradleUrl:function(){return this.path?"".concat(o).concat(this.path):o}}}),f=n(4),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("fgp-link",{attrs:{href:t.gradleUrl}},[t._v(t._s(t.$t("navigation.gradle.label")))])}),[],!1,null,null,null);e.default=component.exports},274:function(t,e,n){"use strict";n.r(e);var r=n(0).a.component("fgp-feature-card",{props:{title:{type:String,required:!0},iconClass:{type:String,required:!0}}}),l=n(4),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"container-fluid border rounded my-4"},[n("div",{staticClass:"row align-items-center bg-light"},[n("div",{staticClass:"d-none d-md-inline-block col-sm-2 text-center"},[n("i",{staticClass:"fa-4x mx-auto",class:t.iconClass})]),t._v(" "),n("div",{staticClass:"col px-4 bg-white"},[n("h5",{staticClass:"mt-3"},[t._v(t._s(t.title))]),t._v(" "),n("p",[t._t("default")],2)])])])}),[],!1,null,null,null);e.default=component.exports},275:function(t,e,n){"use strict";n.r(e);var r=n(0).a.component("fgp-image-link",{props:{href:{type:String,required:!0},title:{type:String,default:null},src:{type:String,required:!0},alt:{type:String,default:null}}}),l=n(4),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fgp-link",{attrs:{href:t.href,title:t.title}},[n("img",{attrs:{src:t.src,alt:t.alt}})])}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n(53),o=r.a.component("fgp-npx-link",{components:{fgpLink:l.default}}),c=n(4),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("fgp-link",{attrs:{href:"https://github.com/npm/npx"}},[t._v(t._s(t.$t("navigation.npx.label")))])}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,n){"use strict";n.r(e);var r=n(0),l=n(52),code=n(68),o=n(274),c=n(217),f=n(229),d=n(275),h=n(53),v=n(220),m=n(216),_=n(227),k=n(276),y=n(221),x=n(94),C=n(90),w=n(223),N=n(215),E=r.a.component("fgp-index",{components:{fgpCode:code.default,fgpFeatureCard:o.default,fgpGradleDocsLink:c.default,fgpGradleLink:f.default,fgpImageLink:d.default,fgpLink:h.default,fgpMainTitle:v.default,fgpNodejsLink:m.default,fgpNpmLink:_.default,fgpNpxLink:k.default,fgpRepoLink:x.default,fgpSiteLink:C.default,fgpSubTitle:w.default,fgpYarnLink:N.default},mixins:[l.a,y.a],data:function(){return{htmlTitle:"Gradle plugin to build frontend applications with node, npm, yarn",linkCanonicalHref:"https://siouan.github.io/frontend-gradle-plugin/",metaDescription:"Gradle plugin to build frontend applications with node/npm/yarn: distribution management, configurable tasks (build, test, publish), NPX support"}}}),I=n(4),component=Object(I.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("fgp-main-title",{staticClass:"text-center"},[t._v("\n        Frontend Gradle plugin\n        "),n("small",{staticClass:"text-muted"},[t._v("\n            - Integrated "),n("fgp-nodejs-link"),t._v(", "),n("fgp-npm-link"),t._v(", "),n("fgp-yarn-link"),t._v(" builds\n        ")],1),t._v(" "),n("fgp-image-link",{staticClass:"ml-1",attrs:{href:"https://github.com/siouan/frontend-gradle-plugin/releases/tag/v5.1.0",src:"https://img.shields.io/badge/Latest%20release-5.1.0-blue.svg",alt:"Latest release 5.1.0"}})],1),t._v(" "),n("p",[t._v("\n        This plugin allows to integrate into "),n("fgp-gradle-link"),t._v(" a build based on\n        "),n("fgp-nodejs-link"),t._v("/"),n("fgp-npm-link"),t._v("/"),n("fgp-yarn-link"),t._v(". It is inspired by the philosophy of the\n        "),n("fgp-link",{attrs:{href:"https://github.com/eirslett/frontend-maven-plugin"}},[t._v("Frontend Maven plugin")]),t._v(", an\n        equivalent plugin for\n        "),n("fgp-link",{attrs:{href:"https://maven.apache.org",title:"Apache Maven Project"}},[t._v("Maven")]),t._v(". Follow the\n        "),n("fgp-site-link",{attrs:{path:t.fgp.paths.gettingStarted}},[t._v("quick start guide")]),t._v(", and build your frontend\n        application. Take a look at the\n        "),n("fgp-repo-link",{staticClass:"text-lowercase",attrs:{path:"/releases"}},[t._v(t._s(t.$t("navigation.repository.releases.label")))]),t._v("\n        if you are migrating from a previous version.\n    ")],1),t._v(" "),n("fgp-sub-title",[t._v("Features")]),t._v(" "),n("fgp-feature-card",{attrs:{title:"Distribution management","icon-class":"fas fa-dice-d6 text-primary"}},[t._v("\n        The plugin downloads and installs a "),n("fgp-nodejs-link"),t._v(" distribution and/or a "),n("fgp-yarn-link"),t._v(" distribution\n        when required. Optionally, a shared/global distribution may be used instead to avoid network overhead and\n        duplication. The plugin may also use a HTTP proxy server for downloads, to take advantage of any caching\n        facility, and submit to the organization's security rules. Basic authentication scheme is supported for both\n        distribution and proxy servers.\n    ")],1),t._v(" "),n("fgp-feature-card",{attrs:{title:"Configurable dependencies installation","icon-class":"fa fa-cogs text-secondary"}},[t._v("\n        Depending on the environment, installing frontend dependencies using the\n        "),n("fgp-code",[t._v("package.json")]),t._v(" file may require a different command (e.g. "),n("fgp-code",[t._v("npm ci")]),t._v(").\n    ")],1),t._v(" "),n("fgp-feature-card",{attrs:{title:"Built-in tasks","icon-class":"fa fa-plug text-danger"}},[t._v("\n        No need to define tasks to build, clean, check, or publish the frontend application through Gradle\n        lifecycle. The plugin provides ready-to-use "),n("fgp-site-link",{attrs:{path:t.fgp.paths.tasks}},[t._v("tasks")]),t._v(" out\n        of the box, and ensures their implementation matches Gradle's\n        "),n("fgp-gradle-docs-link",{attrs:{path:"/current/userguide/task_configuration_avoidance.html"}},[t._v("recommandations")]),t._v(". Plug scripts from a "),n("fgp-code",[t._v("package.json")]),t._v(" file with the\n        "),n("fgp-site-link",{attrs:{path:t.fgp.paths.configuration+"#dsl-reference"}},[t._v("DSL")]),t._v(", and run\n        "),n("fgp-code",[t._v("gradlew build")]),t._v(".\n    ")],1),t._v(" "),n("fgp-feature-card",{attrs:{title:"Customization","icon-class":"fa fa-code-branch text-warning"}},[t._v("\n        For more complex use cases, the plugin provides types to create tasks and run custom commands with\n        "),n("fgp-nodejs-link"),t._v(", "),n("fgp-npm-link"),t._v(", "),n("fgp-npx-link"),t._v(", "),n("fgp-yarn-link"),t._v(".\n    ")],1),t._v(" "),n("div",{staticClass:"card my-3"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v("Under the hood")]),t._v(" "),n("ul",{staticClass:"card-text"},[n("li",[n("strong",[t._v("Lazy configuration")]),t._v(": tasks configuration is delayed until necessary thanks to\n                    the use of Gradle\n                    "),n("fgp-gradle-docs-link",{attrs:{path:"/current/userguide/lazy_configuration.html"}},[t._v("lazy configuration API")]),t._v(", to optimize performance of builds and ease chaining tasks I/O.\n                ")],1),t._v(" "),n("li",[n("strong",[t._v("Self-contained domain design")]),t._v(": the plugin design is influenced by\n                    "),n("fgp-link",{attrs:{href:"http://cleancoder.com/",title:"Clean coder"}},[t._v("clean coding")]),t._v(" principles.\n                    The domain layer is isolated from any framework and infrastructure. Writing cross-platform unit\n                    tests and maintaining the plugin is easier. Code coverage and predictability increase.\n                ")],1)])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);