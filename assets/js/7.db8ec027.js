(window.webpackJsonp=window.webpackJsonp||[]).push([[7,12],{306:function(t,e,r){},307:function(t,e,r){"use strict";r(306)},308:function(t,e,r){"use strict";r.r(e);var a={name:"CardDeliverable",props:{data:{type:Object,required:!0}}},s=(r(307),r(44)),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"card-deliverable",attrs:{href:"/f2024"+t.data.path}},[r("span",{staticClass:"card-deliverable__type"},[t._v(t._s(t.data.frontmatter.type)+" "+t._s(t.data.frontmatter.number))]),t._v(" "),r("h3",{staticClass:"card-deliverable__title"},[t._v(t._s(t.data.title))]),t._v(" "),t.data.frontmatter.desc?r("p",{staticClass:"card-deliverable__desc"},[t._v("\n    "+t._s(t.data.frontmatter.desc)+"\n  ")]):t._e(),t._v(" "),r("p",{staticClass:"card-deliverable__due"},[r("strong",[t._v("Due:")]),t._v(" "+t._s(t.data.frontmatter.due)+"\n  ")])])}),[],!1,null,null,null);e.default=n.exports},350:function(t,e,r){},414:function(t,e,r){"use strict";var a=r(0),s=r(21),n=r(9),i=r(2),l=r(30),c=[],d=c.sort,u=i((function(){c.sort(void 0)})),o=i((function(){c.sort(null)})),f=l("sort");a({target:"Array",proto:!0,forced:u||!o||!f},{sort:function(t){return void 0===t?d.call(n(this)):d.call(n(this),s(t))}})},415:function(t,e,r){"use strict";r(350)},436:function(t,e,r){"use strict";r.r(e);r(414),r(27),r(308);var a={name:"DeliverableListAlt",props:{title:{type:String},type:{type:String,required:!0},id:{type:String,required:!0}},data:function(){return{}},computed:{deliverables:function(){var t=this;return this.$site.pages.filter((function(e){return e.frontmatter.type===t.type&&e.frontmatter.active})).sort((function(t,e){return t.frontmatter.number-e.frontmatter.number}))}}},s=(r(415),r(44)),n=Object(s.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"deliverables-list",attrs:{id:t.id}},[t.title?r("h2",[r("a",{staticClass:"header-anchor",attrs:{href:"#"+t.id}},[t._v("#")]),t._v(" "+t._s(t.title))]):t._e(),t._v(" "),r("div",{staticClass:"deliverables-list__grid"},t._l(t.deliverables,(function(t){return r("CardDeliverable",{attrs:{data:t}})})),1)])}),[],!1,null,null,null);e.default=n.exports}}]);