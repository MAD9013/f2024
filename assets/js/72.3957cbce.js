(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{490:function(t,s,a){"use strict";a.r(s);var e=a(44),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ModuleLayoutWLesson",[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Agenda")]),t._v(" "),a("ul",[a("li",[t._v("Zoom Tutorial\n"),a("ul",[a("li",[t._v("Container Queries Basics")])])]),t._v(" "),a("li",[t._v("In-Class\n"),a("ul",[a("li",[t._v("Container Queries continued...")])])]),t._v(" "),a("li",[t._v("Complete "),a("RouterLink",{attrs:{to:"/projects/p-01.html"}},[t._v("Project 1 - Two Page Website")]),t._v(" by Sunday")],1)])])]),t._v(" "),a("h2",{attrs:{id:"introduction-to-container-queries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-container-queries"}},[t._v("#")]),t._v(" Introduction to Container Queries")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("@container")]),t._v(" query is an evolution on "),a("code",[t._v("@media")]),t._v(". As we've learned, "),a("code",[t._v("@media")]),t._v(" allows us to apply new styles based on the size of our viewport. Meaning we can set sizes for small screens, large screens and everything in between. What "),a("code",[t._v("@container")]),t._v(" allows us to do is set different styles based on the size of an element that is an ancestor of the element we want to apply styles to.")]),t._v(" "),a("p",[t._v("For example, consider this html structure:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("posts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("More Posts"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("posts__list grid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("col"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("card"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("card__img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://placedog.net/550/550?random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("A random dog!"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("card__content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("card__title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Card Title"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("card__text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n              Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Learn More"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("section")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br")])]),a("p",[t._v("If I wanted to use a container query to modify the styles applied to "),a("code",[t._v('<a href="#" class="card">')]),t._v(", I could use any of the following elements as a reference for the container:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('<section class="posts">')])]),t._v(" "),a("li",[a("code",[t._v('<div class="container">')])]),t._v(" "),a("li",[a("code",[t._v('<ul class="posts__list grid">')])]),t._v(" "),a("li",[a("code",[t._v('<li class="col">')])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("A heads up!")]),t._v(" "),a("p",[a("code",[t._v("@container")]),t._v(" queries are very new, they have been fully supported for less than a year. Since they are so new, VSCode does not have full support for them with syntax highlighting, autocomplete, and tooltips. So you may see some weird things in your code editor.")])]),t._v(" "),a("h2",{attrs:{id:"writing-an-container-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-an-container-query"}},[t._v("#")]),t._v(" Writing an "),a("code",[t._v("@container")]),t._v(" query")]),t._v(" "),a("p",[t._v("In order to use the "),a("code",[t._v("@container")]),t._v(" and apply new styles, there are a few steps we need to complete. For the following examples, lets assume we are trying to set different styles to "),a("code",[t._v('<a href="#" class="card">')]),t._v(" within the "),a("code",[t._v("html")]),t._v(" structure above.")]),t._v(" "),a("h3",{attrs:{id:"step-1-mark-the-ancestor-element-as-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-mark-the-ancestor-element-as-container"}},[t._v("#")]),t._v(" Step 1: Mark the Ancestor Element as Container")]),t._v(" "),a("p",[t._v("To mark our ancestor element as a container, we need to apply the "),a("code",[t._v("container-type")]),t._v(" property. We can apply these three values:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("normal")]),t._v(" - the default value, makes the element not useable for container queries")]),t._v(" "),a("li",[a("code",[t._v("size")]),t._v(" - marks the element as useable for container size queries based on both inline (width by default) and block (height by default) axis.")]),t._v(" "),a("li",[a("code",[t._v("inline-size")]),t._v(" - marks the element as useable for container size queries based on inline axis (width by default). "),a("strong",[t._v("Note:")]),t._v(" We will primarily be using "),a("code",[t._v("inline-size")]),t._v("!")])]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".posts__list .col")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("container-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("I have chosen to apply my container to "),a("code",[t._v(".posts__list .col")]),t._v(" because it is a column within my grid and will be controlling the width and layout of my "),a("code",[t._v(".card")]),t._v(" within my grid. I have chosen to apply "),a("code",[t._v("container-type: inline-size;")]),t._v(" because the width "),a("code",[t._v(".col")]),t._v(" will also reflect the same width as "),a("code",[t._v(".card")]),t._v(" so it is a good reference point. Also, within my layout the "),a("code",[t._v("width")]),t._v(" or "),a("code",[t._v("inline")]),t._v(" axis is the only axis I am controlling so is the only axis I need to worry about when changing my styles at different sizes.")]),t._v(" "),a("h3",{attrs:{id:"step-2-apply-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-apply-container"}},[t._v("#")]),t._v(" Step 2: Apply "),a("code",[t._v("@container")])]),t._v(" "),a("p",[t._v("Now that I have marked an ancestor as a "),a("code",[t._v("container")]),t._v(", I can use "),a("code",[t._v("@container")]),t._v(" to change my styles:")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("This should feel pretty familiar as they are written very similarly to "),a("code",[t._v("@media")]),t._v(". We write "),a("code",[t._v("@container")]),t._v(" then follow it with a size we want it to be applied to "),a("code",[t._v("(min-width: 30em)")]),t._v(". Then, inside of curly brackets, we write the selectors and rules we want applied when the container matches the size we set.")]),t._v(" "),a("p",[t._v("You may notice that we didn't specify anywhere in the "),a("code",[t._v("@container")]),t._v(" which element to reference as the container. We didn't mention "),a("code",[t._v(".posts__list .col")]),t._v(" anywhere. That's because by default we do not have to! The browser sees that "),a("code",[t._v(".card")]),t._v(" has some styles it needs to apply if a container matches the "),a("code",[t._v("(min-width: 30em)")]),t._v(". It then looks up through the ancestry to find the first element with "),a("code",[t._v("container-type")]),t._v(" applied and if it passes the condition set ("),a("code",[t._v("(min-width: 30em)")]),t._v("), it will apply the styles.")]),t._v(" "),a("h2",{attrs:{id:"container-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-name"}},[t._v("#")]),t._v(" Container Name")]),t._v(" "),a("p",[t._v("As mentioned previously, when writing our "),a("code",[t._v("@container")]),t._v(" queries, we are not required to specify which container to use when applying our styles. However, we can do so if we choose using "),a("code",[t._v("container-name")]),t._v(". Remembering the html structure above, consider the following css:")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".posts")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("container-name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" posts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("container-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".posts__list .col")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("container-type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br")])]),a("p",[t._v("Based on these styles, "),a("code",[t._v(".card")]),t._v(" will apply "),a("code",[t._v("flex-direction: row;")]),t._v(" when the "),a("code",[t._v(".col")]),t._v(" has a width of "),a("code",[t._v("30em")]),t._v(" since "),a("code",[t._v(".col")]),t._v(" is the closest ancestor with a "),a("code",[t._v("container-type")]),t._v(" applied. If we wanted to apply the "),a("code",[t._v("flex-direction: row;")]),t._v(" based on the size of "),a("code",[t._v(".posts")]),t._v(" we could use the following instead:")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@container")]),t._v(" posts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("By referencing the "),a("code",[t._v("container-name")]),t._v(" within the "),a("code",[t._v("@container")]),t._v(" definition, we are telling the browser exactly which element should be used as the container for our "),a("code",[t._v("@container")]),t._v(" query. If there is no container in our ancestry that matches the "),a("code",[t._v("container-name")]),t._v(", the styles will never be applied.")]),t._v(" "),a("h2",{attrs:{id:"container-shorthand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-shorthand"}},[t._v("#")]),t._v(" "),a("code",[t._v("container")]),t._v(" Shorthand")]),t._v(" "),a("p",[t._v("If we are setting both "),a("code",[t._v("container-name")]),t._v(" and "),a("code",[t._v("container-type")]),t._v(" on the same element, we can use the "),a("code",[t._v("container")]),t._v(" shorthand. You write "),a("code",[t._v("container-name")]),t._v(" first, then a "),a("code",[t._v("/")]),t._v(", then the "),a("code",[t._v("container-type")]),t._v(". The order and "),a("code",[t._v("/")]),t._v(" are required.")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".posts")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("container")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" posts / inline-size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("However, unlike other shorthands, if we are not applying both "),a("code",[t._v("container-name")]),t._v(" and "),a("code",[t._v("container-type")]),t._v(", we cannot use the shorthand. Just setting "),a("code",[t._v("inline-size")]),t._v(" on "),a("code",[t._v("container")]),t._v(" will fail and not work. Hopefully that is updated soon!")]),t._v(" "),a("h2",{attrs:{id:"container-query-length-units"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-query-length-units"}},[t._v("#")]),t._v(" Container Query Length Units")]),t._v(" "),a("p",[t._v("From "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries#container_query_length_units",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),a("OutboundLink")],1),t._v(": When applying styles to a container using container queries, you can use container query length units. These units specify a length relative to the dimensions of a query container. Components that use units of length relative to their container are more flexible to use in different containers without having to recalculate concrete length values.")]),t._v(" "),a("p",[t._v("The container query length units are:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("cqw")]),t._v(": 1% of a query container's width")]),t._v(" "),a("li",[a("code",[t._v("cqh")]),t._v(": 1% of a query container's height")]),t._v(" "),a("li",[a("code",[t._v("cqi")]),t._v(": 1% of a query container's inline size")]),t._v(" "),a("li",[a("code",[t._v("cqb")]),t._v(": 1% of a query container's block size")]),t._v(" "),a("li",[a("code",[t._v("cqmin")]),t._v(": The smaller value of either cqi or cqb")]),t._v(" "),a("li",[a("code",[t._v("cqmax")]),t._v(": The larger value of either cqi or cqb")])]),t._v(" "),a("p",[t._v("One of the best practical uses of this is responsive "),a("code",[t._v("font-size")]),t._v(" based on the container:")]),t._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card__title")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1.802rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 7.5cqi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 4.209rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("Above we use a "),a("code",[t._v("cqi")]),t._v(" value that will set the "),a("code",[t._v("font-size")]),t._v(" based on the "),a("code",[t._v("inline")]),t._v(" size of our container. Meaning, in a large container, the "),a("code",[t._v("font-size")]),t._v(" will be larger and in a smaller container the "),a("code",[t._v("font-size")]),t._v(" will be smaller. This better uses the available space automatically. We then use "),a("code",[t._v("clamp")]),t._v(" to set a minimum size and a maximum size (here based on our type scales) to avoid text that is too small or too large.")]),t._v(" "),a("h2",{attrs:{id:"helpful-videos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helpful-videos"}},[t._v("#")]),t._v(" Helpful Videos")]),t._v(" "),a("p",[t._v("If you haven't already watched these videos, please do so. They cover the core features of "),a("code",[t._v("@container")]),t._v(" and related container query rules and features.")]),t._v(" "),a("YouTube",{attrs:{title:"Container Queries are going to change how we make layouts",url:"https://www.youtube.com/embed/3_-Je5XpbqY?si=_06S9L-kPErcfGMA"}}),t._v(" "),a("YouTube",{attrs:{title:"New CSS Units! Container Query Units explained",url:"https://www.youtube.com/embed/ZSaAHb5dRwQ?si=aYmjfqwTag5gBJE5"}}),t._v(" "),a("h2",{attrs:{id:"to-do-before-week-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-do-before-week-10"}},[t._v("#")]),t._v(" To Do Before Week 10")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Self-Directed To Do")]),t._v(" "),a("p",[t._v("Watch the following videos:")]),t._v(" "),a("YouTube",{attrs:{title:"PseudoElements ::before ::after",url:"https://www.youtube.com/embed/9chejj2-x8s"}}),t._v(" "),a("YouTube",{attrs:{title:"PseudoClasses :active :focus",url:"https://www.youtube.com/embed/H1-rmg1Fj3E"}}),t._v(" "),a("YouTube",{attrs:{title:"building and styling tables",url:"https://www.youtube.com/embed/8Tx0rv2nZuA"}}),t._v(" "),a("ul",[a("li",[t._v("intro to HTML forms")])]),t._v(" "),a("YouTube",{attrs:{title:"HTML Forms and JavaScript",url:"https://www.youtube.com/embed/ikR9DsGMUMc"}}),t._v(" "),a("YouTube",{attrs:{title:"dropdown and datalists",url:"https://www.youtube.com/embed/vY4Cn3wvsVc"}}),t._v(" "),a("YouTube",{attrs:{title:"Mobile Keyboards and Forms",url:"https://www.youtube.com/embed/WGk-2_dD6L0"}}),t._v(" "),a("YouTube",{attrs:{title:"Input Mode with Mobile keyboards",url:"https://www.youtube.com/embed/DN0gXtYGR2o"}}),t._v(" "),a("YouTube",{attrs:{title:"Responsive Forms with Flexbox",url:"https://www.youtube.com/embed/k0bQmGu27Hk"}}),t._v(" "),a("YouTube",{attrs:{title:"tabindex",url:"https://www.youtube.com/embed/aXoH3mkI27M"}}),t._v(" "),a("ul",[a("li",[t._v("Complete "),a("RouterLink",{attrs:{to:"/projects/p-01.html"}},[t._v("Project 1 - Two Page Website")]),t._v(" by Sunday")],1)])],1)],1)}),[],!1,null,null,null);s.default=n.exports}}]);