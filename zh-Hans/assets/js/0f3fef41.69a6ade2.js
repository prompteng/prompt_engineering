"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,u=m["".concat(d,".").concat(f)]||m[f]||c[f]||i;return n?r.createElement(u,a(a({ref:t},p),{},{components:n})):r.createElement(u,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},33300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var r=n(87462),o=(n(67294),n(3905));const i=n.p+"assets/images/good_pitt-95ed5cb5246fab730e02429982d1b256.png",a=n.p+"assets/images/bad_pitt-02395368d9e8f97c8f0674d9b0f13d38.png",s={sidebar_position:90},d="\ud83d\udfe2 Fix Deformed Generations",l={unversionedId:"Images/fix_deformed_generations",id:"Images/fix_deformed_generations",title:"\ud83d\udfe2 Fix Deformed Generations",description:"Deformed generations, particularly on human body parts (e.g. hands, feet), are a common issue with many models. This can be dealt with to some extent with good negative prompts(@blake2022with). The following example is adapted from this Reddit post.",source:"@site/docs/Images/fix_deformed_generations.md",sourceDirName:"Images",slug:"/Images/fix_deformed_generations",permalink:"/zh-Hans/docs/Images/fix_deformed_generations",draft:!1,tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Weighted Terms",permalink:"/zh-Hans/docs/Images/weighted_terms"},next:{title:"\ud83d\udfe2 Midjourney",permalink:"/zh-Hans/docs/Images/midjourney"}},p={},m=[{value:"Example",id:"example",level:2}],c={toc:m},f="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-fix-deformed-generations"},"\ud83d\udfe2 Fix Deformed Generations"),(0,o.kt)("p",null,"Deformed generations, particularly on human body parts (e.g. hands, feet), are a common issue with many models. This can be dealt with to some extent with good negative prompts",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". The following example is adapted from ",(0,o.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/"},"this Reddit post"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Using Stable Diffusion v1.5 and the following prompt, we generate a nice image of Brad Pitt, except for his hands of course!"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:a,style:{width:"250px"}})),(0,o.kt)("p",null,"Using a robust negative prompt, we can generate much more convincing hands."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"studio medium portrait of Brad Pitt waving his hands, detailed, film, studio lighting, 90mm lens, by Martin Schoeller:6 | disfigured, deformed hands, blurry, grainy, broken, cross-eyed, undead, photoshopped, overexposed, underexposed, lowres, bad anatomy, bad hands, extra digits, fewer digits, bad digit, bad ears, bad eyes, bad face, cropped: -5")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:i,style:{width:"250px"}})),(0,o.kt)("p",null,"Using a similar negative prompt can help with other body parts as well. Unfortunately, this technique is not consistent, so you may need to attempt multiple generations\nbefore getting a good result.\nIn the future, this type of prompting should be unnecessary since models will improve.\nHowevever, currently it is a very useful technique."),(0,o.kt)("h1",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Improved models such as ",(0,o.kt)("a",{parentName:"p",href:"https://civitai.com/models/3666/protogen-x34-official-release"},"Protogen")," are often better with hands, feet, etc."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Blake. (2022). With the right prompt, Stable Diffusion 2.0 can do hands. https://www.reddit.com/r/StableDiffusion/comments/z7salo/with_the_right_prompt_stable_diffusion_20_can_do/\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);