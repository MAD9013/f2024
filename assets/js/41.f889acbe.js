(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{453:function(e,t,s){"use strict";s.r(t);var a=s(44),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("DeliverableHeader"),e._v(" "),s("h2",{attrs:{id:"instructions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instructions"}},[e._v("#")]),e._v(" Instructions")]),e._v(" "),s("p",[e._v("In your deliverables repository, create a "),s("code",[e._v("06-card-group")]),e._v(" folder within the "),s("code",[e._v("assignments")]),e._v(" folder.")]),e._v(" "),s("p",[e._v("Recreate the card group section as shown in the video below and in the "),s("a",{attrs:{href:"https://drive.google.com/drive/u/0/folders/11gFC2ILHaHZx1bXZmiynwfGn3MIGcTtL",target:"_blank",rel:"noopener noreferrer"}},[e._v("screenshots found here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("ul",[s("li",[e._v("You must use "),s("code",[e._v("CSS Grid")]),e._v(" to create the responsive card group layout.")]),e._v(" "),s("li",[e._v("For the individual cards, you may use either "),s("code",[e._v("flex")]),e._v(" or "),s("code",[e._v("grid")])]),e._v(" "),s("li",[e._v("Make sure to include the hover effects demonstrated in the video!")])]),e._v(" "),s("YouTube",{attrs:{title:"Card group responsiveness and interactivity",url:"https://www.youtube.com/embed/H56YJh0_QOs"}}),e._v(" "),s("h3",{attrs:{id:"styling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[e._v("#")]),e._v(" Styling")]),e._v(" "),s("p",[e._v("Make sure to include the "),s("RouterLink",{attrs:{to:"/in-class/ic-03.html"}},[e._v("CSS Reset")]),e._v(" and audit previous deliverables for reusable styles!")],1),e._v(" "),s("ul",[s("li",[e._v("Classes:\n"),s("ul",[s("li",[s("code",[e._v(".card-group")]),e._v(", "),s("code",[e._v(".card")])]),e._v(" "),s("li",[e._v("Use the "),s("a",{attrs:{href:"http://getbem.com/naming/",target:"_blank",rel:"noopener noreferrer"}},[e._v("BEM"),s("OutboundLink")],1),e._v(" method for creating class names for the rest of the elements. For example: "),s("code",[e._v(".card__title")])])])]),e._v(" "),s("li",[e._v("Colors\n"),s("ul",[s("li",[e._v("Brand Primary: "),s("code",[e._v("#394A59")])]),e._v(" "),s("li",[e._v("Brand Primary Light: "),s("code",[e._v("#59758d")])]),e._v(" "),s("li",[e._v("Brand Secondary: "),s("code",[e._v("#36BF7F")])]),e._v(" "),s("li",[e._v("Brand Secondary Pale: "),s("code",[e._v("#def4e9")])])])]),e._v(" "),s("li",[e._v("Font: "),s("code",[e._v('"Roboto", sans-serif')])]),e._v(" "),s("li",[e._v("Shadows: "),s("code",[e._v("0 .25rem .5rem #0002")]),e._v(", "),s("code",[e._v("0 .25rem .75rem #0002")])]),e._v(" "),s("li",[e._v("Type scale: re-use scales from "),s("RouterLink",{attrs:{to:"/assignments/as-04.html"}},[e._v("Assignment 04 - Type Hierarchy")])],1)]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Pro Tip - Image Aspect Ratio")]),e._v(" "),s("p",[e._v("When working with images, it is important to handle the image aspect ratio correctly. The aspect ratio of an image is the ratio of its width to its height, and is expressed with two numbers normally separated by a colon, such as 16:9"),s("sup",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Aspect_ratio_(image)"}},[s("span",{staticClass:"material-symbols-outlined",staticStyle:{"font-size":".75rem"}},[e._v("open_in_new")])])]),e._v(", however is separated by a "),s("code",[e._v("/")]),e._v(" in CSS "),s("code",[e._v("16 / 9")]),e._v(". In a case like this card group, having all of the images have the same aspect ratio creates the most consistent, visual appealing layout.")]),e._v(" "),s("p",[e._v("However, in the real world the images you are given might be all different widths and heights and not match. So how to fix this? Ideally you should first use Photoshop or another program to properly crop, resize, and optimize the image. Unfortunately, that may not always be possible because you may build your site/app and hand it off to a client who will then upload the images. Therefore, we should add some CSS to automatically set the aspect ratio and crop our images for us:")]),e._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".card__image img")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" block"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 100%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("aspect-ratio")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 16 / 9"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v("object-fit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" cover"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("ul",[s("li",[s("code",[e._v("aspect-ratio")]),e._v(" in combination with "),s("code",[e._v("display: block;")]),e._v(" and "),s("code",[e._v("width: 100%;")]),e._v(" will make our image full width and set the height according to the aspect ratio.")]),e._v(" "),s("li",[e._v("The "),s("code",[e._v("object-fit")]),e._v(" property sets how the photo sits within the "),s("code",[e._v("<img>")]),e._v(" element. Using "),s("code",[e._v("object-fit: cover;")]),e._v(" will make sure that the entire size of the "),s("code",[e._v("<img>")]),e._v(" element is covered by the photo without stretching or squishing the photo. This is "),s("strong",[e._v("very important")]),e._v(" as you must "),s("strong",[e._v("never")]),e._v(" stretch or squish an image.")]),e._v(" "),s("li",[s("code",[e._v("object-fit: cover;")]),e._v(" is basically a way to crop photos with our CSS. Its imperfect, as manual cropping allows for better photo composition, but it is a good method to insure images are cropped to the right aspect ratio. You can also use "),s("code",[e._v("object-position")]),e._v(" to help align the photo composition.")])]),e._v(" "),s("p",[e._v("Learn more about "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit",target:"_blank",rel:"noopener noreferrer"}},[e._v("object-fit"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio",target:"_blank",rel:"noopener noreferrer"}},[e._v("aspect-ratio"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"submission"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#submission"}},[e._v("#")]),e._v(" Submission")]),e._v(" "),s("p",[e._v("Submit this assignment by pushing your code to your "),s("code",[e._v("mad9013-deliverables")]),e._v(" repository with the commit message "),s("code",[e._v("Complete 06-card-group assignment")]),e._v(".")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Heads up!")]),e._v(" "),s("p",[e._v("This assignment is due Monday night, not Sunday because of Thanksgiving.")])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);