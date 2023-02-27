"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[930],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},29621:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:1},i="\ud83d\udfe2 Prompting",s={unversionedId:"basics/prompting",id:"basics/prompting",title:"\ud83d\udfe2 Prompting",description:"In the previous chapter, we discussed AI and how humans can instruct AIs to perform tasks.",source:"@site/docs/basics/prompting.md",sourceDirName:"basics",slug:"/basics/prompting",permalink:"/prompt_engineering/ja/docs/basics/prompting",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/basics/prompting.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \u306f\u3058\u3081\u306b",permalink:"/prompt_engineering/ja/docs/basics/intro"},next:{title:"\ud83d\udfe2 Giving Instructions",permalink:"/prompt_engineering/ja/docs/basics/instructions"}},l={},p=[{value:"1) Summarizing an Article",id:"1-summarizing-an-article",level:4},{value:"2) Math Word Problem Solving",id:"2-math-word-problem-solving",level:4}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-prompting"},"\ud83d\udfe2 Prompting"),(0,a.kt)("p",null,"In the previous chapter, we discussed AI and how humans can instruct AIs to perform tasks.\nThe process of instructing an AI to do a task is called prompting",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". We tell the AI\na set of instructions (the prompt) and it performs the task. Prompts can be as simple as a question, or\nas complex as multiple paragraphs. "),(0,a.kt)("p",null,"Here are two examples of prompts:"),(0,a.kt)("h4",{id:"1-summarizing-an-article"},"1) Summarizing an Article"),(0,a.kt)("p",null,"Say you are reading an article about snowfall in Florida. You want to quickly get the main ideas of the article, so you show the AI what you are reading, and ask for a summary",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"It is very rare for snow to fall in the U.S. state of Florida, especially in the central and southern portions of the state. With the exception of the far northern areas of the state, most of the major cities in Florida have never recorded measurable snowfall, though trace amounts have been recorded, or flurries in the air observed few times each century. According to the National Weather Service, in the Florida Keys and Key West there is no known occurrence of snow flurries since the European colonization of the region more than 300 years ago. In Miami, Fort Lauderdale, and Palm Beach there has been only one known report of snow flurries observed in the air in more than 200 years; this occurred in January 1977. In any event, Miami, Fort Lauderdale, and Palm Beach have not seen snow flurries before or since this 1977 event.\n\nSummarize this paragraph in a single sentence:\n")),(0,a.kt)("p",null,"Here is the AI's response. It is a much shorter read!"),(0,a.kt)("pre",null,(0,a.kt)("div",{className:"bluegreen-highlight"},"Snowfall is extremely rare in Florida, with the exception of the far northern areas, ",(0,a.kt)("br",null),"and only one instance of snow flurries in the air has been recorded in the major cities ",(0,a.kt)("br",null),"of Miami, Fort Lauderdale, and Palm Beach in the last 200 years.")),(0,a.kt)("h4",{id:"2-math-word-problem-solving"},"2) Math Word Problem Solving"),(0,a.kt)("p",null,'If you have a dataset of mathematical equations that you would like a language model to solve,\nyou can create a prompt by posing the question "What is EQUATION".'),(0,a.kt)("p",null,"For a given question, your full prompt could look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"What is 965*590?\n")),(0,a.kt)("p",null,"For this prompt, GPT-3 (text-davinci-003) (an AI) sometimes answers 569,050 (incorrect). This is where prompt engineering comes in."),(0,a.kt)("h1",{id:"prompt-engineering"},"Prompt Engineering"),(0,a.kt)("p",null,"If, instead of asking ",(0,a.kt)("inlineCode",{parentName:"p"},"What is 965*590?"),", we ask\n",(0,a.kt)("inlineCode",{parentName:"p"},"Make sure your answer is exactly correct. What is 965*590? Make sure your answer is exactly correct:"),", GPT-3 will\nanswer ",(0,a.kt)("inlineCode",{parentName:"p"},"569350")," (correct). Why is this the case? Why is telling the AI twice to give a correct answer helpful? How can we create\nprompts that yield optimal results on our task? This last question, in particular,\nis the focus of the field of Prompt Engineering, as well as this course."),(0,a.kt)("p",null,"Read on to learn how to engineer good prompts!"),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Shin, T., Razeghi, Y., Logan IV, R. L., Wallace, E., & Singh, S. (2020). AutoPrompt: Eliciting Knowledge from Language Models with Automatically Generated Prompts. Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP). https://doi.org/10.18653/v1/2020.emnlp-main.346\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"This paragraph is from ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Snow_in_Florida"},"https://en.wikipedia.org/wiki/Snow_in_Florida"),(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);