"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[145],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i=n.p+"assets/images/bad_water-044cd25e3aaca95491acd045b20e85c2.jpg",o=n.p+"assets/images/good_water-6ee623c93733416f07135ad5432e5852.jpg",s=n.p+"assets/images/planet-0b85f367e155e9ed1107ab2a87a16939.png",l=n.p+"assets/images/planet_aliens-109c9be85e21193dfac22e5dc6c4b9e9.png",p={sidebar_position:50},c="\ud83d\udfe2 Repetition",m={unversionedId:"Images/repetition",id:"Images/repetition",title:"\ud83d\udfe2 Repetition",description:"Repeating the same word within a prompt, or similar phrases can cause the model",source:"@site/docs/Images/repetition.md",sourceDirName:"Images",slug:"/Images/repetition",permalink:"/zh-Hans/docs/Images/repetition",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/Images/repetition.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Quality Boosters",permalink:"/zh-Hans/docs/Images/quality_boosters"},next:{title:"\ud83d\udfe2 Weighted Terms",permalink:"/zh-Hans/docs/Images/weighted_terms"}},u={},d=[{value:"Notes",id:"notes",level:2}],f={toc:d},g="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-repetition"},"\ud83d\udfe2 Repetition"),(0,a.kt)("p",null,"Repeating the same word within a prompt, or similar phrases can cause the model\nto emphasize that word in the generated image",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". For example, ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/phillip_isola/status/1532189632217112577"},"@Phillip Isola")," generated these waterfalls with DALLE:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"A beautiful painting of a mountain next to a waterfall."),"."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:i,style:{width:"750px"}})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"A very very very very very very very very very very very very very very very very very very very very very very beautiful painting of a mountain next to a waterfall.")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:o,style:{width:"750px"}})),(0,a.kt)("p",null,"The emphasis on the word ",(0,a.kt)("inlineCode",{parentName:"p"},"very")," seems to improve generation quality! Repetition can\nalso be used to emphasize subject terms. For example, if you want to generate an image\nof a planet with aliens, using the prompt ",(0,a.kt)("inlineCode",{parentName:"p"},"A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens"),"\nwill make it more likely that aliens are in the resultant image. The following images are made with Stable Diffusion."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"A planet with aliens")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:s,style:{width:"250px"}})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"A planet with aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens aliens")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:l,style:{width:"250px"}})),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"This method is not perfect, and using weights (next article) is often a better option."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Oppenlaender, J. (2022). A Taxonomy of Prompt Modifiers for Text-To-Image Generation.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}y.isMDXComponent=!0}}]);