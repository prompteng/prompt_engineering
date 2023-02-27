"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6163],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89918:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(53409);const i=r.p+"assets/images/special_pyramids-a65a414ff1a63e6fe8270035d9735ed1.png",s={sidebar_position:5},l="\ud83d\udfe2 Quality Boosters",p={unversionedId:"Images/quality_boosters",id:"Images/quality_boosters",title:"\ud83d\udfe2 Quality Boosters",description:"Quality boosters(@oppenlaender2022taxonomy) are terms added to a prompt to improve",source:"@site/docs/Images/quality_boosters.md",sourceDirName:"Images",slug:"/Images/quality_boosters",permalink:"/prompt_engineering/es/docs/Images/quality_boosters",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/Images/quality_boosters.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Style Modifiers",permalink:"/prompt_engineering/es/docs/Images/style_modifiers"},next:{title:"\ud83d\udfe2 Repetition",permalink:"/prompt_engineering/es/docs/Images/repetition"}},m={},c=[{value:"Notes",id:"notes",level:2}],u={toc:c},d="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-quality-boosters"},"\ud83d\udfe2 Quality Boosters"),(0,a.kt)("p",null,"Quality boosters",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),' are terms added to a prompt to improve\ncertain non-style-specific qualities of the generated image. For example "amazing", "beautiful", and "good quality" are all quality boosters that can be used to improve the quality of the generated image.'),(0,a.kt)("h1",{id:"example"},"Example"),(0,a.kt)("p",null,"Recall from the other page the pyramids generated with DALLE, and the prompt ",(0,a.kt)("inlineCode",{parentName:"p"},"pyramid"),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:o.Z,style:{width:"750px"}})),(0,a.kt)("p",null,"Now take at pyramids generated with this prompt:\n",(0,a.kt)("inlineCode",{parentName:"p"},"A beautiful, majestic, incredible pyramid, 4K")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:i,style:{width:"750px"}})),(0,a.kt)("p",null,"These are much more scenic and impressive! "),(0,a.kt)("p",null,"Here is a list of a number of quality boosters: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"High resolution, 2K, 4K, 8K, clear, good lighting, detailed, extremely detailed, sharp focus, intricate, beautiful, realistic+++, complementary colors, high quality, hyper detailed, masterpiece, best quality, artstation, stunning\n")),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"Similar to the note on the previous page, our working definition of quality boosters differs from Oppenlaender et al.",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". This being said, it is\nsometimes difficult to exactly distinguish between quality boosters and style modifiers."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Oppenlaender, J. (2022). A Taxonomy of Prompt Modifiers for Text-To-Image Generation.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0},53409:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pyramids-ed2dde639215400defa3079c90fc34af.png"}}]);