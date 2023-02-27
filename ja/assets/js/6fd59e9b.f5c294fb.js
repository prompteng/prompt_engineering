"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,u=m["".concat(l,".").concat(d)]||m[d]||h[d]||a;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a=n.p+"assets/images/diverse-4d3dfbd2465ac181760c1ac7704ac7f5.png",o={sidebar_position:5},s="\ud83d\udfe1 Diverse Prompts",l={unversionedId:"reliability/diverse",id:"reliability/diverse",title:"\ud83d\udfe1 Diverse Prompts",description:'DiVeRSe(@li2022advance) ("Diverse Verifier on Reasoning Steps") is',source:"@site/docs/reliability/diverse.md",sourceDirName:"reliability",slug:"/reliability/diverse",permalink:"/prompt_engineering/ja/docs/reliability/diverse",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/reliability/diverse.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Prompt Debiasing",permalink:"/prompt_engineering/ja/docs/reliability/debiasing"},next:{title:"\ud83d\udfe1 LLM Self Evaluation",permalink:"/prompt_engineering/ja/docs/reliability/lm_self_eval"}},p={},c=[{value:"Diverse Prompts",id:"diverse-prompts",level:2},{value:"Voting Verifier",id:"voting-verifier",level:2},{value:"Example",id:"example",level:3},{value:"Takeaways",id:"takeaways",level:2}],m={toc:c},h="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-diverse-prompts"},"\ud83d\udfe1 Diverse Prompts"),(0,i.kt)("p",null,"DiVeRSe",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),' ("',(0,i.kt)("strong",{parentName:"p"},"Di"),"verse ",(0,i.kt)("strong",{parentName:"p"},"Ve"),"rifier on ",(0,i.kt)("strong",{parentName:"p"},"R"),"easoning ",(0,i.kt)("strong",{parentName:"p"},"S"),"t",(0,i.kt)("strong",{parentName:"p"},"e"),'ps") is\na method that improves the reliability of answers in a threefold manner. It does this by\n1) using multiple prompts to generate diverse completions, 2) using a verifier to distinguish good answers from bad answers, and 3) using a verifier to check the correctness of reasoning steps.'),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a,style:{width:"750px"}})),(0,i.kt)("div",{style:{textAlign:"center"}},"DiVeRSe (Li et al.)"),(0,i.kt)("h2",{id:"diverse-prompts"},"Diverse Prompts"),(0,i.kt)("p",null,"DiVeRSe uses 5 different prompts a given input. To construct each prompt, they randomly\nsample a few exemplars from the training set. Here is an example of one such few-shot\nprompt (k=2), with exemplars taken from the ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/openai/grade-school-math/master/grade_school_math/data/train.jsonl"},"GSM8K benchmark"),(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". In practice, DiVeRSe uses\n5 exemplars in prompts for this benchmark."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Q: Natalia sold clips to 48 of her friends in April, and then she sold half as many clips in May. How many clips did Natalia sell altogether in April and May?\nA: Natalia sold 48/2 = 24 clips in May.\nNatalia sold 48+24 = 72 clips altogether in April and May.\n#### 72\nQ: Weng earns $12 an hour for babysitting. Yesterday, she just did 50 minutes of babysitting. How much did she earn?\nA: Weng earns 12/60 = $0.2 per minute.\nWorking 50 minutes, she earned 0.2 x 50 = $10.\n#### 10\nQ: Betty is saving money for a new wallet which costs $100. Betty has only half of the money she needs. Her parents decided to give her $15 for that purpose, and her grandparents twice as much as her parents. How much more money does Betty need to buy the wallet?\nA:\n")),(0,i.kt)("p",null,"After generating 5 different prompts like above, DiVeRSe samples 20 reasoning paths\nfor each (temperature = 0.5). Here are a few example completions of the above prompt.\nNote that the answers are not always correct."),(0,i.kt)("pre",null,(0,i.kt)("div",{className:"bluegreen-highlight"},(0,i.kt)("div",null,"Betty has 0.5*100 = $50."),(0,i.kt)("div",null,"Then she gets 15 more = $65."),(0,i.kt)("div",null,"Then she gets 2*15 = $90."),(0,i.kt)("div",null,"She needs 100-90 = $10 more."),"#### 10")),(0,i.kt)("pre",null,(0,i.kt)("div",{className:"bluegreen-highlight"},(0,i.kt)("div",null,"A: Betty has 0.5*100 = $500."),(0,i.kt)("div",null,"Then she gets 15 more = $650."),(0,i.kt)("div",null,"Then she gets 2*15 = $900."),(0,i.kt)("div",null,"She needs 100-90 = $1000 more."),"#### 1000")),(0,i.kt)("p",null,"At this point, DiVeRSe has generated 100 different completions."),(0,i.kt)("h2",{id:"voting-verifier"},"Voting Verifier"),(0,i.kt)("p",null,"Now, we could just take the majority answer, like Self-Consistency",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," does."),(0,i.kt)("p",null,"However, DiVeRSe proposes a much more complicated method, which they call a ",(0,i.kt)("em",{parentName:"p"},"voting verifier"),"."),(0,i.kt)("p",null,"At test time, using the voting verifier is a two step process. First, the verifier (a neural network)\nassigns a 0-1 score to each completion based on how likely it is to be correct. Then, the 'voting'\ncomponent sums all of the scores over different answers and yields the final answer."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Here is a small example. Say we have the following completions for the prompt ",(0,i.kt)("inlineCode",{parentName:"p"},"What is two plus two?"),":"),(0,i.kt)("pre",null,(0,i.kt)("div",{className:"bluegreen-highlight"},(0,i.kt)("div",null,"4"))),(0,i.kt)("pre",null,(0,i.kt)("div",{className:"bluegreen-highlight"},(0,i.kt)("div",null,"two + 2 = 5"))),(0,i.kt)("pre",null,(0,i.kt)("div",{className:"bluegreen-highlight"},(0,i.kt)("div",null,"I think 2+2 = 6"))),(0,i.kt)("pre",null,(0,i.kt)("div",{className:"bluegreen-highlight"},(0,i.kt)("div",null,"two plus two = 4"))),(0,i.kt)("pre",null,(0,i.kt)("div",{className:"bluegreen-highlight"},(0,i.kt)("div",null,"It is 5"))),(0,i.kt)("p",null,"The verifier will read each completion and assign a score to it. For example, it might assign\nthe scores: 0.9, 0.1, 0.2, 0.8, 0.3 respectively. Then, the voting component will sum the scores for each\nanswer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"score(4) = 0.9 + 0.8 = 1.7\nscore(5) = 0.1 + 0.3 = 0.4\nscore(6) = 0.2\n")),(0,i.kt)("p",null,"The final answer is 4, since it has the highest score."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"But how is the verifier trained?")),(0,i.kt)("p",null,"The verifier is trained with a slightly complex loss function, which\nI will not cover here. Read section 3.3 of the paper for more details",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,i.kt)("h2",{id:"takeaways"},"Takeaways"),(0,i.kt)("p",null,"The main take away here is to use multiple prompts to generate diverse completions.\nIn practice, majority voting will likely work well compared to the voting verifier."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Li, Y., Lin, Z., Zhang, S., Fu, Q., Chen, B., Lou, J.-G., & Chen, W. (2022). On the Advance of Making Language Models Better Reasoners.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Mitchell, E., Noh, J. J., Li, S., Armstrong, W. S., Agarwal, A., Liu, P., Finn, C., & Manning, C. D. (2022). Enhancing Self-Consistency and Performance of Pre-Trained Language Models through Natural Language Inference.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);