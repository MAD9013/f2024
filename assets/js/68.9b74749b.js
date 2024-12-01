(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{486:function(e,t,s){"use strict";s.r(t);var a=s(44),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("ModuleLayoutWLesson",[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Agenda")]),e._v(" "),s("ul",[s("li",[e._v("Zoom Tutorial\n"),s("ul",[s("li",[e._v("Introduction to Flex Box")]),e._v(" "),s("li",[e._v("Basic Mechanics")])])]),e._v(" "),s("li",[e._v("In-Class\n"),s("ul",[s("li",[e._v("Practical applications of Flexbox")]),e._v(" "),s("li",[e._v("In-Class activity time")])])])])])]),e._v(" "),s("h2",{attrs:{id:"css-flexbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-flexbox"}},[e._v("#")]),e._v(" CSS Flexbox")]),e._v(" "),s("p",[e._v("In recent years another method for creating layout was added to CSS: Flexbox. It starts with using "),s("code",[e._v("display: flex")]),e._v(" and then you define two parts the container and the items inside the container.")]),e._v(" "),s("ul",[s("li",[e._v("Used for aligning multiple elements along ONE axis")]),e._v(" "),s("li",[e._v("There are two main parts: "),s("strong",[e._v("flexbox containers")]),e._v(" and "),s("strong",[e._v("flexbox items")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.youtube.com/watch?v=qk6MeIXsUeU",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting Started with Flexbox video"),s("OutboundLink")],1)])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Whenever you are adding "),s("code",[e._v("display:flex")]),e._v(" to an element you are really just talking about how to position the children elements of that element.")])]),e._v(" "),s("h3",{attrs:{id:"flexbox-container-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flexbox-container-properties"}},[e._v("#")]),e._v(" Flexbox Container Properties")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("display: flex")])]),e._v(" "),s("li",[s("code",[e._v("flex-direction")]),e._v(" property can be "),s("code",[e._v("row")]),e._v(", "),s("code",[e._v("row-reverse")]),e._v(", "),s("code",[e._v("column")]),e._v(", "),s("code",[e._v("column-reverse")])]),e._v(" "),s("li",[s("code",[e._v("justify-content")]),e._v(" property (along main axis) can be "),s("code",[e._v("flex-start")]),e._v(", "),s("code",[e._v("flex-end")]),e._v(", "),s("code",[e._v("center")]),e._v(", "),s("code",[e._v("space-around")]),e._v(", "),s("code",[e._v("space-between")]),e._v(" and "),s("code",[e._v("space-evenly")])]),e._v(" "),s("li",[s("code",[e._v("align-items")]),e._v(" (on cross-axis) can be "),s("code",[e._v("flex-start")]),e._v(", "),s("code",[e._v("flex-end")]),e._v(", "),s("code",[e._v("center")]),e._v(", "),s("code",[e._v("stretch")]),e._v(", "),s("code",[e._v("baseline")])]),e._v(" "),s("li",[s("code",[e._v("flex-wrap")]),e._v(" can be "),s("code",[e._v("wrap")]),e._v(", "),s("code",[e._v("no-wrap")]),e._v(", "),s("code",[e._v("wrap-reverse")])])]),e._v(" "),s("h3",{attrs:{id:"flexbox-item-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flexbox-item-properties"}},[e._v("#")]),e._v(" Flexbox Item Properties")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("flex-basis")]),e._v(" initial size for an item")]),e._v(" "),s("li",[s("code",[e._v("flex-grow")]),e._v(" controls the ratio for how items grow relative to each other")]),e._v(" "),s("li",[s("code",[e._v("flex-shrink")]),e._v(" controls the ratio of how items shrink relative to each other")]),e._v(" "),s("li",[s("code",[e._v("flex")]),e._v(" is a shorthand for flex-basis, flex-grow and flex-shrink")]),e._v(" "),s("li",[s("code",[e._v("align-self")]),e._v(" to override container's "),s("code",[e._v("align-items")]),e._v(" value for one item")]),e._v(" "),s("li",[s("code",[e._v("order")]),e._v(" assign exact position of each item.")])]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".container")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* this is the flexbox container */")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("flex-direction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("justify-content")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" space-between"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("align-items")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" flex-start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".container .item")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* these are the flexbox items */")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("flex-basis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("flex-grow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* these two will keep original content sizes */")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("flex-basis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("flex-grow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* these two will start the items at width 0 and then expand them equally */")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("flex-shrink")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* shrink them equally as the width of the container is reduced */")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br")])]),s("ul",[s("li",[e._v("Here is an excellent free online course for "),s("a",{attrs:{href:"http://flexbox.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flexbox.io"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://cssreference.io/flexbox/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Guide to Flexbox Properties"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"more-resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#more-resources"}},[e._v("#")]),e._v(" More Resources")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.smashingmagazine.com/2018/08/flexbox-display-flex-container/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flexbox containers"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.smashingmagazine.com/2018/09/flexbox-sizing-flexible-box/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flexbox Sizing"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.smashingmagazine.com/2018/08/flexbox-alignment/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flexbox Alignment"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.learnflexbox.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interactive Flexbox Tutorial"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://flexboxfroggy.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interactive Flexbox Game"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CSS-Tricks Flexbox Guide"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN Flexbox"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"to-do-before-week-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-do-before-week-6"}},[e._v("#")]),e._v(" To Do Before Week 6")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Self-Directed To Do")]),e._v(" "),s("p",[e._v("Watch the following videos before week 6:")]),e._v(" "),s("YouTube",{attrs:{title:"Intro to CSS Grid",url:"https://www.youtube.com/embed/yHLGbnOOtfQ"}}),e._v(" "),s("YouTube",{attrs:{title:"Named Grid Areas",url:"https://www.youtube.com/embed/Cuc6AMQ3TwM"}}),e._v(" "),s("YouTube",{attrs:{title:"positioning grid elements",url:"https://www.youtube.com/embed/77E3xqDE_c8"}}),e._v(" "),s("YouTube",{attrs:{title:"grid auto flow",url:"https://www.youtube.com/embed/IzebOBaR3I0"}}),e._v(" "),s("YouTube",{attrs:{title:"overlapping grid elements",url:"https://www.youtube.com/embed/7U7EebDUPXc"}}),e._v(" "),s("YouTube",{attrs:{title:"unequal grid columns",url:"https://www.youtube.com/embed/GhMf4piClEw"}}),e._v(" "),s("YouTube",{attrs:{title:"Float, Flex, and Grid",url:"https://www.youtube.com/embed/hYJvxsgnGMA"}})],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);