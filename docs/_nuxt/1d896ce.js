(window.webpackJsonp=window.webpackJsonp||[]).push([[83,8,11,13,15,18,19,20,25,26,27,28,63],{216:function(t,n,e){"use strict";e.r(n);var l=e(0),r=e(54),o=l.a.component("fgp-yarn-link",{components:{fgpLink:r.default},props:{labelKey:{type:String,default:"navigation.yarnBerry.label"}},computed:{label:function(){return this.$t(this.labelKey)}}}),c=e(4),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("fgp-link",{attrs:{href:"https://yarnpkg.com/",title:t.$t("navigation.yarnBerry.title")}},[t._v(t._s(t.label))])}),[],!1,null,null,null);n.default=component.exports},217:function(t,n,e){"use strict";e.r(n);var l=e(0).a.component("fgp-nodejs-link",{}),r=e(4),component=Object(r.a)(l,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("fgp-link",{attrs:{href:"https://nodejs.org/"}},[t._v(t._s(t.$t("navigation.nodejs.label")))])}),[],!1,null,null,null);n.default=component.exports},219:function(t,n,e){"use strict";e.r(n);var l=e(0),r=e(54),o=l.a.component("fgp-gradle-docs-link",{components:{fgpLink:r.default},props:{path:{type:String,default:null}}}),c=e(4),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("fgp-link",{attrs:{href:"https://docs.gradle.org"+t.path}},[t._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},221:function(t,n,e){"use strict";e.r(n);var l=e(0).a.component("fgp-main-title",{}),r=e(4),component=Object(r.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[e("h1",[t._t("default")],2)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(72).default})},223:function(t,n,e){"use strict";e(224),e(17);n.a={head:function(){var t={meta:[],link:[]};return t.title=this.htmlTitle?this.htmlTitle:"Frontend Gradle plugin",this.metaDescription&&t.meta.push({hid:"description",name:"description",content:this.metaDescription}),t.meta.push({name:"og:title",content:t.title}),t.meta.push({name:"og:description",content:t.meta.find((function(meta){return"description"===meta.name})).content}),this.linkCanonicalHref&&t.link.push({rel:"canonical",href:this.linkCanonicalHref}),t}}},224:function(t,n,e){"use strict";var l=e(5),r=e(96)(5),o="find",c=!0;o in[]&&Array(1).find((function(){c=!1})),l(l.P+l.F*c,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),e(95)(o)},226:function(t,n,e){"use strict";e.r(n);var l=e(0).a.component("fgp-sub-title",{}),r=e(4),component=Object(r.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",[e("h2",[t._t("default")],2)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(72).default})},229:function(t,n,e){"use strict";e.r(n);var l=e(0),r=e(54),o=l.a.component("fgp-npm-link",{components:{fgpLink:r.default}}),c=e(4),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("fgp-link",{attrs:{href:"https://www.npmjs.com"}},[t._v(t._s(t.$t("navigation.npm.label")))])}),[],!1,null,null,null);n.default=component.exports},235:function(t,n,e){"use strict";e.r(n);var l=e(0),r=e(54),o="https://gradle.org",c=l.a.component("fgp-gradle-link",{components:{fgpLink:r.default},props:{path:{type:String,default:null}},computed:{gradleUrl:function(){return this.path?"".concat(o).concat(this.path):o}}}),f=e(4),component=Object(f.a)(c,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("fgp-link",{attrs:{href:t.gradleUrl}},[t._v(t._s(t.$t("navigation.gradle.label")))])}),[],!1,null,null,null);n.default=component.exports},285:function(t,n,e){"use strict";e.r(n);var l=e(0).a.component("fgp-feature-card",{props:{title:{type:String,required:!0},iconClass:{type:String,required:!0}}}),r=e(4),component=Object(r.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("article",{staticClass:"container-fluid border rounded my-4"},[e("div",{staticClass:"row align-items-center bg-light"},[e("div",{staticClass:"d-none d-md-inline-block col-sm-2 text-center"},[e("i",{staticClass:"fa-4x mx-auto",class:t.iconClass})]),t._v(" "),e("div",{staticClass:"col px-4 bg-white"},[e("h5",{staticClass:"mt-3"},[t._v(t._s(t.title))]),t._v(" "),e("p",[t._t("default")],2)])])])}),[],!1,null,null,null);n.default=component.exports},286:function(t,n,e){"use strict";e.r(n);var l=e(0).a.component("fgp-image-link",{props:{href:{type:String,required:!0},title:{type:String,default:null},src:{type:String,required:!0},alt:{type:String,default:null}}}),r=e(4),component=Object(r.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("fgp-link",{attrs:{href:t.href,title:t.title}},[e("img",{attrs:{src:t.src,alt:t.alt}})])}),[],!1,null,null,null);n.default=component.exports},287:function(t,n,e){"use strict";e.r(n);var l=e(0),r=e(54),o=l.a.component("fgp-npx-link",{components:{fgpLink:r.default}}),c=e(4),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("fgp-link",{attrs:{href:"https://github.com/npm/npx"}},[t._v(t._s(t.$t("navigation.npx.label")))])}),[],!1,null,null,null);n.default=component.exports},288:function(t,n,e){"use strict";e.r(n);var l=e(0),r=e(54),o=l.a.component("fgp-yarn1-link",{components:{fgpLink:r.default}}),c=e(4),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("fgp-link",{attrs:{href:"https://classic.yarnpkg.com/",title:t.$t("navigation.yarn1.title")}},[t._v(t._s(t.$t("navigation.yarn1.label")))])}),[],!1,null,null,null);n.default=component.exports},289:function(t,n,e){"use strict";e.r(n);var l=e(0),r=e(54),o=l.a.component("fgp-yarn2-link",{components:{fgpLink:r.default}}),c=e(4),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("fgp-link",{attrs:{href:"https://yarnpkg.com/",title:t.$t("navigation.yarn2.title")}},[t._v(t._s(t.$t("navigation.yarn2.label")))])}),[],!1,null,null,null);n.default=component.exports},295:function(t,n,e){"use strict";e.r(n);var l=e(0),r=e(53),code=e(71),o=e(285),c=e(219),f=e(235),d=e(286),h=e(54),v=e(221),m=e(217),_=e(229),k=e(287),y=e(223),x=e(97),j=e(94),C=e(226),w=e(216),$=e(288),L=e(289),O=l.a.component("fgp-index",{components:{fgpCode:code.default,fgpFeatureCard:o.default,fgpGradleDocsLink:c.default,fgpGradleLink:f.default,fgpImageLink:d.default,fgpLink:h.default,fgpMainTitle:v.default,fgpNodejsLink:m.default,fgpNpmLink:_.default,fgpNpxLink:k.default,fgpRepoLink:x.default,fgpSiteLink:j.default,fgpSubTitle:C.default,fgpYarnLink:w.default,fgpYarn1Link:$.default,fgpYarn2Link:L.default},mixins:[r.a,y.a],data:function(){return{htmlTitle:"Gradle Node/NPM/Yarn plugin to build Javascript applications",linkCanonicalHref:"https://siouan.github.io/frontend-gradle-plugin/",metaDescription:"All-in-one Gradle Node plugin, Gradle NPM plugin, Gradle Yarn plugin to build Javascript applications with Gradle: distribution management, built-in tasks, NPX support"}}}),S=e(4),component=Object(S.a)(O,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("fgp-main-title",{staticClass:"text-center"},[t._v("\n        Frontend Gradle plugin\n        "),e("small",{staticClass:"text-muted"},[t._v("\n            - Integrated "),e("fgp-nodejs-link"),t._v(", "),e("fgp-npm-link"),t._v(", "),e("fgp-yarn-link"),t._v("\n            builds\n        ")],1),t._v(" "),e("fgp-image-link",{staticClass:"ml-1",attrs:{href:"https://github.com/siouan/frontend-gradle-plugin/releases/tag/v6.0.0",src:"https://img.shields.io/badge/Latest%20release-6.0.0-blue.svg",alt:"Latest release 6.0.0"}})],1),t._v(" "),e("p",[t._v("\n        This plugin allows to integrate into "),e("fgp-gradle-link"),t._v(" a build based on\n        "),e("fgp-nodejs-link"),t._v("/"),e("fgp-npm-link"),t._v("/"),e("fgp-yarn-link"),t._v(". It is inspired by the philosophy of the\n        "),e("fgp-link",{attrs:{href:"https://github.com/eirslett/frontend-maven-plugin"}},[t._v("Frontend Maven plugin")]),t._v(", an\n        equivalent plugin for\n        "),e("fgp-link",{attrs:{href:"https://maven.apache.org",title:"Apache Maven Project"}},[t._v("Maven")]),t._v(". Follow the\n        "),e("fgp-site-link",{attrs:{path:t.fgp.paths.gettingStarted}},[t._v("quick start guide")]),t._v(", and build your frontend\n        application. Take a look at the\n        "),e("fgp-repo-link",{staticClass:"text-lowercase",attrs:{path:"/releases"}},[t._v(t._s(t.$t("navigation.repository.releases.label")))]),t._v("\n        if you are migrating from a previous version.\n    ")],1),t._v(" "),e("fgp-sub-title",[t._v("Features")]),t._v(" "),e("fgp-feature-card",{attrs:{title:"Distribution management","icon-class":"fas fa-dice-d6 text-primary"}},[t._v("\n        The plugin downloads and installs a "),e("fgp-nodejs-link"),t._v(" distribution. When required, the plugin may also\n        trigger the install of a Yarn distribution relying on the\n        "),e("fgp-yarn-link",{attrs:{"label-key":"navigation.yarnBerry.originalName"}}),t._v(" baseline. This means that both\n        "),e("fgp-yarn1-link"),t._v(" and "),e("fgp-yarn2-link"),t._v(" distributions are supported. Optionally, a\n        shared/global "),e("fgp-nodejs-link"),t._v(" distribution may be used instead to avoid network overhead and\n        duplication. The plugin may also use a HTTP proxy server when downloading the "),e("fgp-nodejs-link"),t._v("\n        distribution, to take advantage of any caching facility, and submit to the organization's security rules.\n        Basic authentication scheme is supported for both distribution and proxy servers.\n    ")],1),t._v(" "),e("fgp-feature-card",{attrs:{title:"Configurable dependencies installation","icon-class":"fa fa-cogs text-secondary"}},[t._v("\n        Depending on the environment, installing frontend dependencies using the\n        "),e("fgp-code",[t._v("package.json")]),t._v(" file may require a different command (e.g. "),e("fgp-code",[t._v("npm ci")]),t._v(").\n    ")],1),t._v(" "),e("fgp-feature-card",{attrs:{title:"Built-in tasks","icon-class":"fa fa-plug text-danger"}},[t._v("\n        No need to define tasks to build, clean, check, or publish the frontend application through Gradle\n        lifecycle. The plugin provides ready-to-use "),e("fgp-site-link",{attrs:{path:t.fgp.paths.tasks}},[t._v("tasks")]),t._v(" out\n        of the box, and ensures their implementation matches Gradle's\n        "),e("fgp-gradle-docs-link",{attrs:{path:"/current/userguide/task_configuration_avoidance.html"}},[t._v("recommandations")]),t._v(". Plug scripts from a "),e("fgp-code",[t._v("package.json")]),t._v(" file with the\n        "),e("fgp-site-link",{attrs:{path:t.fgp.paths.configuration+"#dsl-reference"}},[t._v("DSL")]),t._v(", and run\n        "),e("fgp-code",[t._v("gradlew build")]),t._v(".\n    ")],1),t._v(" "),e("fgp-feature-card",{attrs:{title:"Customization","icon-class":"fa fa-code-branch text-warning"}},[t._v("\n        For more complex use cases, the plugin provides types to create tasks and run custom commands with\n        "),e("fgp-nodejs-link"),t._v(", "),e("fgp-npm-link"),t._v(", "),e("fgp-npx-link"),t._v(", "),e("fgp-yarn-link"),t._v(".\n    ")],1),t._v(" "),e("div",{staticClass:"card my-3"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("Under the hood")]),t._v(" "),e("ul",{staticClass:"card-text"},[e("li",[e("strong",[t._v("Lazy configuration")]),t._v(": tasks configuration is delayed until necessary thanks to\n                    the use of Gradle\n                    "),e("fgp-gradle-docs-link",{attrs:{path:"/current/userguide/lazy_configuration.html"}},[t._v("lazy configuration API")]),t._v(", to optimize performance of builds and ease chaining tasks I/O.\n                ")],1),t._v(" "),e("li",[e("strong",[t._v("Self-contained domain design")]),t._v(": the plugin design is influenced by\n                    "),e("fgp-link",{attrs:{href:"http://cleancoder.com/",title:"Clean coder"}},[t._v("clean coding")]),t._v(" principles.\n                    The domain layer is isolated from any framework and infrastructure. Writing cross-platform unit\n                    tests and maintaining the plugin is easier. Code coverage and predictability increase.\n                ")],1)])])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);