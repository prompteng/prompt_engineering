"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[2620],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73153:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var n=r(87462),a=(r(67294),r(3905));const i=r.p+"assets/images/midjourney_astronaut-037f1e9cd462676188eec35fcc8865e6.png",o=r.p+"assets/images/midjourney_astronaut_params-32df2f1785bef5769bdea8b3f022b625.png",s=r.p+"assets/images/midjourney_astronaut_multi1-fac0079c8a564c830f1fa3e71b63c94a.png",p=r.p+"assets/images/midjourney_astronaut_multi2-21330c8b9d988ba151143d399cacfe54.png",m=r.p+"assets/images/midjourney_astronaut_ip2-bfe0e14f0fcd1168d45288f3e949fb49.png",l={sidebar_position:99},u="\ud83d\udfe2 Midjourney",c={unversionedId:"Images/midjourney",id:"Images/midjourney",title:"\ud83d\udfe2 Midjourney",description:"Midjourney is another AI image generator Unlike Stable Diffusion, Midjourney uses a Discord bot as an interface for AI image generation (join the Discord here). However, using the Midjourney Bot follows the same basic principles for image prompting.",source:"@site/docs/Images/midjourney.md",sourceDirName:"Images",slug:"/Images/midjourney",permalink:"/pt/docs/Images/midjourney",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/Images/midjourney.md",tags:[],version:"current",sidebarPosition:99,frontMatter:{sidebar_position:99},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Fix Deformed Generations",permalink:"/pt/docs/Images/fix_deformed_generations"},next:{title:"\ud83d\udfe2 Resources",permalink:"/pt/docs/Images/resources"}},d={},g=[{value:"Multi Prompts",id:"multi-prompts",level:2},{value:"Image Prompts",id:"image-prompts",level:2},{value:"Notes",id:"notes",level:2}],f={toc:g},y="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-midjourney"},"\ud83d\udfe2 Midjourney"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.midjourney.com"},"Midjourney")," is another AI image generator Unlike Stable Diffusion, Midjourney uses a Discord bot as an interface for AI image generation (join the Discord ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/midjourney"},"here"),"). However, using the Midjourney Bot follows the same basic principles for image prompting."),(0,a.kt)("h1",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"The basic prompt anatomy with Midjourney is ",(0,a.kt)("inlineCode",{parentName:"p"},"/imagine prompt: [IMAGE PROMPT] [--OPTIONAL PARAMETERS]"),". For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"/imagine prompt: astronaut on a horse\n")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:i,style:{width:"750px"}})),(0,a.kt)("p",null,"More information about image prompt parameters can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.midjourney.com/docs/parameter-list"},"Midjourney Documentation - Parameter List")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"/imagine prompt: astronaut on a horse --ar 3:2 --c 70 --q 2 --seed 1000 \n")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:o,style:{width:"750px"}})),(0,a.kt)("h1",{id:"advanced-prompts"},"Advanced Prompts"),(0,a.kt)("h2",{id:"multi-prompts"},"Multi Prompts"),(0,a.kt)("p",null,"Midjourney interprets your prompt holistically by default. Using a double colon ",(0,a.kt)("inlineCode",{parentName:"p"},"::")," tells Midjourney to interpret each part of a prompt separately.\nExample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"/imagine prompt: astronaut and horse\n")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:s,style:{width:"750px"}})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"/imagine prompt: astronaut:: and horse\n")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:p,style:{width:"750px"}})),(0,a.kt)("h2",{id:"image-prompts"},"Image Prompts"),(0,a.kt)("p",null,"By uploading an image to Discord and using its URL in a prompt, you can instruct Midjourney to use that image to influence the content, style and composition of your results.\nExample:\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Astronaut#/media/File:STS41B-35-1613_-_Bruce_McCandless_II_during_EVA_(Retouched).jpg"},"Astronaut (Source: Wikipedia)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"/imagine prompt: [image URL], impressionist painting\n")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:m,style:{width:"750px"}})),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"Needs more content!"))}h.isMDXComponent=!0}}]);