(window.webpackJsonp=window.webpackJsonp||[]).push([[76,9,23,24,64],{208:function(t,e,n){"use strict";n.r(e);var r=n(0),code=n(71),o=n(94),l=n(53),c=r.a.component("fgp-task-link",{components:{fgpCode:code.default,fgpSiteLink:o.default},mixins:[l.a],props:{name:{type:String,required:!0}}}),f=n(4),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fgp-site-link",{attrs:{path:t.fgp.paths.tasks+"#"+t.name}},[n("fgp-code",[t._v(t._s(t.name))])],1)}),[],!1,null,null,null);e.default=component.exports},212:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(214),l=r.a.component("fgp-task",{components:{fgpTaskLinkAnchor:o.default},props:{name:{type:String,required:!0},type:{type:Boolean,default:!1}}}),c=n(4),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"mb-3 border-bottom"},[n("header",[n("h4",[n("fgp-task-link-anchor",{attrs:{name:t.name}}),t._v(" "),t.type?[t._v("Type")]:[t._v("Task")],t._v(" "),n("fgp-code",[t._v("\n                "+t._s(t.name)+"\n            ")]),t._v("\n            -\n            "),t._t("title"),t._v(" "),n("fgp-site-link",{staticClass:"small text-info",attrs:{path:"#app"}},[t._v("↑")])],2)]),t._v(" "),n("section",{staticClass:"px-3"},[t._t("description")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(72).default})},214:function(t,e,n){"use strict";n.r(e);var r=n(0).a.component("fgp-task-link-anchor",{props:{name:{type:String,required:!0}}}),o=n(4),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"text-info",attrs:{id:t.name}},[t._v("#")])}),[],!1,null,null,null);e.default=component.exports},218:function(t,e,n){"use strict";n.r(e);n(32),n(20),n(31),n(55),n(56);var r=n(21),o=n(0),l=n(44);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=o.a.component("fgp-gradle-scripts",{computed:f({groovyTabClass:function(){return{active:this.groovyTabVisible}},kotlinTabClass:function(){return{active:this.kotlinTabVisible}}},Object(l.b)("gradle-scripts",["groovyTabVisible","kotlinTabVisible"])),methods:f({},Object(l.c)("gradle-scripts",["setGroovyTabVisible","setKotlinTabVisible"]))}),v=n(4),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-2"},[n("ul",{staticClass:"nav nav-tabs"},[n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",class:t.groovyTabClass,attrs:{to:"#",append:"",event:""},nativeOn:{click:function(e){return e.preventDefault(),t.setGroovyTabVisible.apply(null,arguments)}}},[t._v("Groovy")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",class:t.kotlinTabClass,attrs:{to:"#",append:"",event:""},nativeOn:{click:function(e){return e.preventDefault(),t.setKotlinTabVisible.apply(null,arguments)}}},[t._v("Kotlin")])],1)]),t._v(" "),n("div",{staticClass:"pt-3 pb-1 pl-3 bg-light"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.groovyTabVisible,expression:"groovyTabVisible"}]},[t._t("groovy")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.kotlinTabVisible,expression:"kotlinTabVisible"}]},[t._t("kotlin")],2)])])}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,n){"use strict";n.r(e);var r=n(0),code=n(71),o=n(218),l=n(212),c=n(208),f=r.a.component("fgp-run-npm-task-type",{components:{fgpCode:code.default,fgpGradleScripts:o.default,fgpTask:l.default,fgpTaskLink:c.default}}),d=n(4),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fgp-task",{attrs:{name:"RunNpm",type:!0},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Run a custom command with "),n("fgp-code",[t._v("npm")])]},proxy:!0},{key:"description",fn:function(){return[n("p",[t._v("\n                The plugin provides the task type\n                "),n("fgp-code",[t._v("org.siouan.frontendgradleplugin.infrastructure.gradle.RunNpm")]),t._v(" that allows\n                creating a custom task to run a frontend script. The "),n("fgp-code",[t._v("script")]),t._v(" property must be set\n                with the corresponding command. Then, choose the appropriate task dependency: make the task either\n                depends on "),n("fgp-task-link",{attrs:{name:"installNode"}}),t._v(" task or on "),n("fgp-task-link",{attrs:{name:"installFrontend"}}),t._v("\n                task. The code hereafter shows the configuration required to run a linter:\n            ")],1),t._v(" "),n("fgp-gradle-scripts",{staticClass:"my-3",attrs:{id:"run-npm-example"},scopedSlots:t._u([{key:"groovy",fn:function(){return[n("pre",[n("fgp-code",[t._v("import org.siouan.frontendgradleplugin.infrastructure.gradle.RunNpm\ntasks.register('e2e', RunNpm) {\n    "),n("fgp-code-comment",[t._v("// dependsOn tasks.named('installNode')\n    // dependsOn tasks.named('installFrontend')")]),t._v("\n    script = 'run lint'\n}")],1)],1)]},proxy:!0},{key:"kotlin",fn:function(){return[n("pre",[n("fgp-code",[t._v('import org.siouan.frontendgradleplugin.infrastructure.gradle.RunNpm\ntasks.register<RunNpm>("e2e") {\n    '),n("fgp-code-comment",[t._v('// dependsOn(tasks.named("installNode"))\n    // dependsOn(tasks.named("installFrontend"))')]),t._v('\n    script.set("run lint")\n}')],1)],1)]},proxy:!0}])})]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports}}]);