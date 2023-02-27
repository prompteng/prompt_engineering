"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6233],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),l=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=l(a),c=n,u=d["".concat(i,".").concat(c)]||d[c]||f[c]||o;return a?r.createElement(u,s(s({ref:t},m),{},{components:a})):r.createElement(u,s({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:n,s[1]=p;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},39117:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:3},s='\ud83d\udfe2 A "Standard" Prompt',p={unversionedId:"basics/standard_prompt",id:"basics/standard_prompt",title:'\ud83d\udfe2 A "Standard" Prompt',description:"We have heard of a few different formats of prompts thus far.",source:"@site/docs/basics/standard_prompt.md",sourceDirName:"basics",slug:"/basics/standard_prompt",permalink:"/ja/docs/basics/standard_prompt",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/basics/standard_prompt.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Role Prompting",permalink:"/ja/docs/basics/roles"},next:{title:"\ud83d\udfe2 More on Prompting",permalink:"/ja/docs/basics/more_on_prompting"}},i={},l=[{value:"Why should I care?",id:"why-should-i-care",level:4},{value:"Two examples of standard prompts:",id:"two-examples-of-standard-prompts",level:3},{value:"Few Shot Standard Prompts",id:"few-shot-standard-prompts",level:2},{value:"Two examples of few shot standard prompts:",id:"two-examples-of-few-shot-standard-prompts",level:3}],m={toc:l},d="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-a-standard-prompt"},'\ud83d\udfe2 A "Standard" Prompt'),(0,n.kt)("p",null,"We have heard of a few different formats of prompts thus far.\nFollowing Kojima et al.",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),', we will refer to prompts that consist\nsolely of a question as "standard" prompts. We also consider prompts that consist solely of\na question that are in the QA format to be "standard" prompts.'),(0,n.kt)("h4",{id:"why-should-i-care"},"Why should I care?"),(0,n.kt)("p",null,"Many articles that we reference use this term. We are defining it so we can discuss\nnew types of prompts in contrast to standard prompts. "),(0,n.kt)("h3",{id:"two-examples-of-standard-prompts"},"Two examples of standard prompts:"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Standard Prompt")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"What is the capital of France?\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Standard Prompt in QA format")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Q: What is the capital of France?\n\nA:\n")),(0,n.kt)("h2",{id:"few-shot-standard-prompts"},"Few Shot Standard Prompts"),(0,n.kt)("p",null,"Few shot standard prompts",(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," are just standard prompts that have ",(0,n.kt)("em",{parentName:"p"},"exemplars"),"\nin them. Exemplars are examples of the task that the prompt is trying to solve,\nwhich are included in the prompt itself",(0,n.kt)("sup",{parentName:"p",id:"fnref-3"},(0,n.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". In research, few shot standard prompts\nare sometimes referred to simply as standard prompts (though we attempt not to do so in this guide)."),(0,n.kt)("h3",{id:"two-examples-of-few-shot-standard-prompts"},"Two examples of few shot standard prompts:"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Few Shot Standard Prompt")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"What is the capital of Spain?\nMadrid\nWhat is the capital of Italy?\nRome\nWhat is the capital of France?\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Few Shot Standard Prompt in QA format")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Q: What is the capital of Spain?\nA: Madrid\nQ: What is the capital of Italy?\nA: Rome\nQ: What is the capital of France?\nA:\n")),(0,n.kt)("p",null,'Few shot prompts facilitate "few shot" AKA "in context" learning, which is the\nability to learn without parameter updates',(0,n.kt)("sup",{parentName:"p",id:"fnref-4"},(0,n.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),"."),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large Language Models are Zero-Shot Reasoners.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"Liu, P., Yuan, W., Fu, J., Jiang, Z., Hayashi, H., & Neubig, G. (2022). Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing. ACM Computing Surveys. https://doi.org/10.1145/3560815\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-3"},"Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal, S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D. M., Wu, J., Winter, C., \u2026 Amodei, D. (2020). Language Models are Few-Shot Learners.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-4"},"Zhao, T. Z., Wallace, E., Feng, S., Klein, D., & Singh, S. (2021). Calibrate Before Use: Improving Few-Shot Performance of Language Models.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);