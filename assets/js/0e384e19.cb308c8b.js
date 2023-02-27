"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,h=u["".concat(l,".").concat(g)]||u[g]||m[g]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},59881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1},i="Welcome",s={unversionedId:"intro",id:"intro",title:"Welcome",description:"Welcome to this course on prompt engineering!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\ud83d\ude03 Basics",permalink:"/docs/category/-basics"}},l={},p=[{value:"The single most important part of this course is your feedback!",id:"the-single-most-important-part-of-this-course-is-your-feedback",level:2},{value:"Course philosophy",id:"course-philosophy",level:2},{value:"How to read",id:"how-to-read",level:2},{value:"Chapters",id:"chapters",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome"},"Welcome"),(0,o.kt)("p",null,"Welcome to this course on prompt engineering! "),(0,o.kt)("p",null,"I like to think of prompt engineering (PE) as: ",(0,o.kt)("strong",{parentName:"p"},"How to talk to AI to get it to do what you want"),". "),(0,o.kt)("p",null,"With many recent advances in artificial intelligence (AI),\nprompt engineering has become a sought-after and valuable skill for getting AI to do what you want.\nThis course focuses on applied PE techniques, and we expect readers to have minimal knowledge of machine learning. If you are new to these concepts (AI, machine learning, programming etc.) I recommend starting with the ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/category/-basics"},"Basics")," section and reading ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/basics/intro"},"Instructions")," first. "),(0,o.kt)("h2",{id:"the-single-most-important-part-of-this-course-is-your-feedback"},"The single most important part of this course is your feedback!"),(0,o.kt)("p",null,"If you have any questions, comments, or suggestions, you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make an ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"issue on GitHub"))),(0,o.kt)("li",{parentName:"ul"},"Email us at ",(0,o.kt)("a",{parentName:"li",href:"mailto:learnprompting@gmail.com"},"learnprompting@gmail.com")),(0,o.kt)("li",{parentName:"ul"},"Join ",(0,o.kt)("a",{parentName:"li",href:"https://learnprompting.org/discord"},"Discord")," community"),(0,o.kt)("li",{parentName:"ul"},"Follow us on ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/learnprompting"},"Twitter")),(0,o.kt)("li",{parentName:"ul"},"We also have a ",(0,o.kt)("a",{parentName:"li",href:"https://learnprompting.org/consulting"},"Consulting Interest Form"))),(0,o.kt)("p",null,"Even the smallest amount of feedback is very helpful!"),(0,o.kt)("h2",{id:"course-philosophy"},"Course philosophy"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Quick Iterations")," - Since new PE content is published almost daily,\nI will update this course frequently with short articles about new techniques.\nLet me know what you want to hear more about!"),(0,o.kt)("p",null,"Part of this philosophy is ",(0,o.kt)("strong",{parentName:"p"},"error iteration"),". If you ever see something that you\ndon't quite understand, even something small, that's on me. ",(0,o.kt)("strong",{parentName:"p"},"Please make an ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"issue on GitHub")),"!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Focus on Practicality")," - We will focus on applied, practical techniques that you can use immediately for your applications."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples ASAP")," - We will put examples in the articles as soon as possible so you can get a feel for the techniques as quickly as possible."),(0,o.kt)("p",null,"We'll philosophize more about this when we have time \ud83d\ude0a"),(0,o.kt)("h2",{id:"how-to-read"},"How to read"),(0,o.kt)("p",null,"It is not necessary to read all chapters in order. Read what interests you!"),(0,o.kt)("p",null,"If you are new to artificial intelligence (AI) and prompt engineering (PE), start with the ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/category/-basics"},"Basics")," section. If you are already familiar with these concepts, you will be off to a good start with the ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/category/%EF%B8%8F-intermediate"},"Intermediate")," section.  "),(0,o.kt)("p",null,"Articles have a rating system based on the difficulty of a topic and if programming knowledge is required:"),(0,o.kt)("p",null,"\ud83d\udfe2 Very easy; no programming required"),(0,o.kt)("p",null,"\ud83d\udfe1 Easy; simple programming required, but no domain expertise"),(0,o.kt)("p",null,"\ud83d\udd34 Medium; programming required, and some domain expertise to implement (e.g. calculating logarithmic probabilities)"),(0,o.kt)("p",null,"\ud83d\udfe3 Hard; programming required, and robust domain expertise to implement (e.g. reinforcement learning approaches)"),(0,o.kt)("p",null,"Note: even though for \ud83d\udd34\ud83d\udfe3 domain expertise is helpful, usually you will still be able to understand the article without prior knowledge."),(0,o.kt)("h2",{id:"chapters"},"Chapters"),(0,o.kt)("p",null,"Here is a quick summary of each chapter:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Basics"),": Intro to PE and simple PE techniques"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Intermediate"),": Slightly more complicated research-backed PE techniques"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Applied Prompting"),": Some complete walkthroughs of the PE process written by community members"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Advanced Applications"),": Some very powerful, but more advanced applications of PE"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reliability"),": How to make LLMs more reliable"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Images"),": PE for text to image models like DALLE and Stable Diffusion!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prompt Injection"),": Hacking, but for PE"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prompting IDEs"),": Different PE tools"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Prompt Tuning"),": Fine tune prompts with gradients"))}m.isMDXComponent=!0}}]);