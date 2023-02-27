"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9695],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,f=d["".concat(l,".").concat(h)]||d[h]||m[h]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},62936:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:1},o="\ud83d\udfe2 Detecting AI Generated Text",s={unversionedId:"miscl/detect",id:"miscl/detect",title:"\ud83d\udfe2 Detecting AI Generated Text",description:"Detecting AI generated text is a big problem for safety researchers and educators,",source:"@site/docs/miscl/detect.md",sourceDirName:"miscl",slug:"/miscl/detect",permalink:"/prompt_engineering/es/docs/miscl/detect",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/miscl/detect.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfb2 Miscellaneous",permalink:"/prompt_engineering/es/docs/category/-miscellaneous"},next:{title:"\ud83d\udfe2 Detection Trickery",permalink:"/prompt_engineering/es/docs/miscl/trickery"}},l={},c=[{value:"OpenAI Text Classifier",id:"openai-text-classifier",level:2},{value:"The Watermark Method",id:"the-watermark-method",level:2},{value:"DetectGPT",id:"detectgpt",level:2},{value:"Note",id:"note",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-detecting-ai-generated-text"},"\ud83d\udfe2 Detecting AI Generated Text"),(0,n.kt)("p",null,"Detecting AI generated text is a big problem for safety researchers and educators,\namong others. Tools like ",(0,n.kt)("a",{parentName:"p",href:"https://gptzero.me"},"GPTZero"),", ",(0,n.kt)("a",{parentName:"p",href:"https://openai-openai-detector.hf.space"},"GPT2 detector"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Hello-SimpleAI/chatgpt-comparison-detection"},"bilingual detectors")," have seen significant success,\nHowever, they can be ",(0,n.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/miscl/trickery"},"tricked"),". "),(0,n.kt)("p",null,"OpenAI and other researchers",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," are working to introduce statistical watermarking into their generated text, but this too may be fooled by modifying large portions of the text. "),(0,n.kt)("p",null,"The problem of AI text detection will likely be an arms race as new models and new detection methods are introduced. Many companies have already started to build solutions which they claim are very effective, but it is difficult to prove this, especially as models change over time. "),(0,n.kt)("p",null,"This article will cover some of the current methods for detecting AI-generated text, and the next will discuss a few ways people have found to fool them. "),(0,n.kt)("h2",{id:"openai-text-classifier"},"OpenAI Text Classifier"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://platform.openai.com/ai-text-classifier"},"OpenAI Text Classifier")," is a fairly good attempt at a general-purpose AI text detector.\nBy training the model on a large quantity of AI-generated data and human-written text of a similar quality, the detector is able to compute the likelihood that any given text was created by an LLM. "),(0,n.kt)("p",null,"It has a number of limitations\u2014it doesn\u2019t accept any submission of under 1000 words, text can easily be edited to mess with the probability calculations, and because of its professionally-focused training set, it has more trouble with text created by children or non-english speakers. "),(0,n.kt)("p",null,"It currently flags human text as AI-generated only about 9% of the time, and correctly identifies AI-generated text ~26% of the time. As the model increases in power and scope, those numbers will improve, but it may be the case that more specific detectors are required to adequately assess whether text is generated or not. "),(0,n.kt)("h2",{id:"the-watermark-method"},"The Watermark Method"),(0,n.kt)("p",null,'One method to detect AI generated text requires introducing a statistical watermark when generating the text. These techniques may use a LLM \u201cwhitelist\u201d, which is a method of determining if text was generated by a specific AI model. The watermark works by selecting a randomized set of "green" tokens before a word is generated, and then softly promoting use of the selected tokens during sampling. These weighted values have a minimal effect on the quality of generations, but can be algorithmically detected by another LLM',(0,n.kt)("sup",{parentName:"p",id:"fnref-3"},(0,n.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."),(0,n.kt)("p",null,"This is an intriguing idea, but it requires a model\u2019s creators to implement this framework into their LLM. If a model doesn\u2019t have the watermark built in, this method will not work. "),(0,n.kt)("h2",{id:"detectgpt"},"DetectGPT"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://detectgpt.ericmitchell.ai/"},"DetectGPT"),(0,n.kt)("sup",{parentName:"p",id:"fnref-4"},(0,n.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),' method is able to detect AI-generated text with less setup than the previous concepts. Researchers have found that LLM text generations tend "occupy negative curvature regions of the model\u2019s log probability function". Because of this, it is possible to create a curvature-based system for determining if a block of text was procedurally generated. '),(0,n.kt)("p",null,"It works by computing log probabilities from the model that was thought to have generated the text and comparing them to random alterations of the text from another, pre-trained generic language model. In this way, DetectGPT is able to identify the likelihood of the passage being generated using probability curves alone!"),(0,n.kt)("h2",{id:"note"},"Note"),(0,n.kt)("p",null,"For an additional discussion on the topic of detectors and how people are tricking them, see ",(0,n.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/miscl/trickery"},"this article"),"."),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"Bansal, A., yeh Ping-Chiang, Curry, M., Jain, R., Wigington, C., Manjunatha, V., Dickerson, J. P., & Goldstein, T. (2022). Certified Neural Network Watermarks with Randomized Smoothing.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"Gu, C., Huang, C., Zheng, X., Chang, K.-W., & Hsieh, C.-J. (2022). Watermarking Pre-trained Language Models with Backdooring.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-3"},"Kirchenbauer, J., Geiping, J., Wen, Y., Katz, J., Miers, I., & Goldstein, T. (2023). A Watermark for Large Language Models. https://arxiv.org/abs/2301.10226\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-4"},"Mitchell, E., Lee, Y., Khazatsky, A., Manning, C., & Finn, C. (2023). DetectGPT: Zero-Shot Machine-Generated Text Detection using Probability Curvature. https://doi.org/10.48550/arXiv.2301.11305\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);