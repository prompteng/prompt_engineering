"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:10,locale:"en-us",style:"chicago"},i="\ud83d\udfe2 More on Prompting",s={unversionedId:"basics/more_on_prompting",id:"basics/more_on_prompting",title:"\ud83d\udfe2 More on Prompting",description:"As we have seen in the previous pages, prompts can have varying formats and complexity. They can include context, instructions, multiple questions-answer examples, and even other prompts (what!?).",source:"@site/docs/basics/more_on_prompting.md",sourceDirName:"basics",slug:"/basics/more_on_prompting",permalink:"/prompt_engineering/pt/docs/basics/more_on_prompting",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/basics/more_on_prompting.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,locale:"en-us",style:"chicago"},sidebar:"tutorialSidebar",previous:{title:'\ud83d\udfe2 A "Standard" Prompt',permalink:"/prompt_engineering/pt/docs/basics/standard_prompt"},next:{title:"\ud83d\udfe2 Chatbot Basics",permalink:"/prompt_engineering/pt/docs/basics/chatbot_basics"}},p={},c=[{value:"Notes",id:"notes",level:2}],l={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-more-on-prompting"},"\ud83d\udfe2 More on Prompting"),(0,o.kt)("p",null,"As we have seen in the previous pages, prompts can have varying formats and complexity. They can include context, instructions, multiple questions-answer examples, and even other prompts (what!?)."),(0,o.kt)("p",null,"Here is an example of a prompt that includes context, instructions, and multiple examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'Twitter is a social media platform where users can post short messages called "tweets".\nTweets can be positive or negative, and we would like to be able to classify tweets as\npositive or negative. Here are some examples of positive and negative tweets. Make sure \nto classify the last tweet correctly.\n\nQ: Tweet: "What a beautiful day!"\nIs this tweet positive or negative?\n\nA: positive\n\nQ: Tweet: "I hate this class"\nIs this tweet positive or negative?\n\nA: negative\n\nQ: Tweet: "I love pockets on jeans"\n\nA:\n')),(0,o.kt)("p",null,"By adding additional context/examples, we can often improve the performance of AIs\non different tasks. The next chapter covers slightly more advanced prompting techniques."),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"In the next chapters, you may see the words ",(0,o.kt)("strong",{parentName:"p"},"AI, model, and LLM\nused interchangeably"),". See the vocabulary reference for more information."),(0,o.kt)("p",null,"Prompts inside of prompts, or self-augmented prompts",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", will be\ncovered in the next few sections."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large Language Models are Zero-Shot Reasoners.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);