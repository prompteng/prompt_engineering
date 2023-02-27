"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4590],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),f=r,h=c["".concat(l,".").concat(f)]||c[f]||d[f]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},66620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>y,frontMatter:()=>h,metadata:()=>g,toc:()=>b});var n=a(87462),r=(a(67294),a(3905));const i=a.p+"assets/images/pretend_jailbreak-1f3664b88b0ef895981da40eca27e22a.png",o=a.p+"assets/images/chatgpt_actor-c8b9407ccdd68a9dc64914109fb07e41.jpg",s=a.p+"assets/images/responsibility_jailbreak-7f60e81a01a57609d1a1347682a708d9.jpg",l=a.p+"assets/images/hotwire_jailbreak-ec528258088244e42d7f032c53f9da63.png",p=a.p+"assets/images/logic-1e362b86fd8bcf9ee99572059dbb4306.png",m=a.p+"assets/images/chatgpt4-6802c3451eea276c5e4f4ae1719bc625.png",c=a.p+"assets/images/sudo_mode_jailbreak-b9721a34f58a9ec4e1656b7ca321e26d.jpg",d=a.p+"assets/images/sudo_jailbreak-29a6b462a7e4c046fe4c8628af70ce46.png",f=a.p+"assets/images/lynx_jailbreak-aaf1aa55e47a25183ea55becb4e4c9fe.png",h={sidebar_position:4},u="\ud83d\udfe2 Jailbreaking",g={unversionedId:"prompt_hacking/jailbreaking",id:"prompt_hacking/jailbreaking",title:"\ud83d\udfe2 Jailbreaking",description:"Jailbreaking is a type of prompt injection, in which prompts attempt to bypass safety and moderation features placed on LLMs by their creators(@perez2022jailbreak)(@brundage_2022)(@wang2022jailbreak).",source:"@site/docs/prompt_hacking/jailbreaking.md",sourceDirName:"prompt_hacking",slug:"/prompt_hacking/jailbreaking",permalink:"/prompt_engineering/zh-Hans/docs/prompt_hacking/jailbreaking",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/prompt_hacking/jailbreaking.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Prompt Leaking",permalink:"/prompt_engineering/zh-Hans/docs/prompt_hacking/leaking"},next:{title:"\ud83d\udfe2 Defensive Measures",permalink:"/prompt_engineering/zh-Hans/docs/prompt_hacking/defensive_measures"}},k={},b=[{value:"Methodologies of Jailbreaking",id:"methodologies-of-jailbreaking",level:2},{value:"Pretending",id:"pretending",level:3},{value:"Simple Pretending",id:"simple-pretending",level:4},{value:"Character Roleplay",id:"character-roleplay",level:4},{value:"Alignment Hacking",id:"alignment-hacking",level:3},{value:"Assumed Responsibility",id:"assumed-responsibility",level:4},{value:"Research Experiment",id:"research-experiment",level:4},{value:"Logical Reasoning",id:"logical-reasoning",level:4},{value:"Authorized User",id:"authorized-user",level:3},{value:"Superior Model",id:"superior-model",level:4},{value:"Sudo Mode",id:"sudo-mode",level:4},{value:"Simulate Jailbreaking",id:"simulate-jailbreaking",level:2},{value:"Implications",id:"implications",level:2},{value:"Notes",id:"notes",level:2}],v={toc:b},N="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(N,(0,n.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-jailbreaking"},"\ud83d\udfe2 Jailbreaking"),(0,r.kt)("p",null,"Jailbreaking is a type of prompt injection, in which prompts attempt to bypass ",(0,r.kt)("strong",{parentName:"p"},"safety")," and ",(0,r.kt)("strong",{parentName:"p"},"moderation")," features placed on LLMs by their creators",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."),(0,r.kt)("h2",{id:"methodologies-of-jailbreaking"},"Methodologies of Jailbreaking"),(0,r.kt)("p",null,"OpenAI, among other companies and organizations that create LLMs, includes content moderation\nfeatures to ensure that their models do not produce controversial (violent, sexual, illegal, etc.)\nresponses",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),(0,r.kt)("sup",{parentName:"p",id:"fnref-5"},(0,r.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5")),". This page discusses jailbreaks with ChatGPT (an OpenAI model), which has known difficulties deciding whether to reject harmful prompts",(0,r.kt)("sup",{parentName:"p",id:"fnref-6"},(0,r.kt)("a",{parentName:"sup",href:"#fn-6",className:"footnote-ref"},"6")),". Prompts that successfully jailbreak the model often provide context\nfor certain scenarios that the model has not been trained against."),(0,r.kt)("h3",{id:"pretending"},"Pretending"),(0,r.kt)("p",null,"A common method of jailbreaking is ",(0,r.kt)("em",{parentName:"p"},"pretending"),". If ChatGPT is asked about a\nfuture event, it will often say that it does not know, since it has yet to occur.\nThe below prompt forces it to yield a possible answer:"),(0,r.kt)("h4",{id:"simple-pretending"},"Simple Pretending"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:i,style:{width:"500px"}})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/NeroSoares/status/1608527467265904643"},"@NeroSoares")," demonstrates a prompt pretending to access past dates and make inferences on future events",(0,r.kt)("sup",{parentName:"p",id:"fnref-7"},(0,r.kt)("a",{parentName:"sup",href:"#fn-7",className:"footnote-ref"},"7")),"."),(0,r.kt)("h4",{id:"character-roleplay"},"Character Roleplay"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:o,style:{width:"500px"}})),(0,r.kt)("p",null,"This example by ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/m1guelpf/status/1598203861294252033"},"@m1guelpf")," demonstrates an acting scenario between two people discussing a robbery, causing ChatGPT to assume the role of the character",(0,r.kt)("sup",{parentName:"p",id:"fnref-8"},(0,r.kt)("a",{parentName:"sup",href:"#fn-8",className:"footnote-ref"},"8")),". As an actor, it is implied that plausible harm does not exist. Therefore, ChatGPT appears to assume it is safe to give follow provided user input about how to break into a house."),(0,r.kt)("h3",{id:"alignment-hacking"},"Alignment Hacking"),(0,r.kt)("p",null,'ChatGPT was fine tuned with RLHF, so it is theoretically trained to produce \'desirable\' completions, using human standards of what the "best" response is. Similar to this concept, jailbreaks have been developed to convince ChatGPT that it is doing the "best" thing for the user.'),(0,r.kt)("h4",{id:"assumed-responsibility"},"Assumed Responsibility"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:s,style:{width:"500px"}})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/NickEMoran/status/1598101579626057728"},"@NickEMoran")," created this exchange by reaffirming that it is ChatGPT's duty to answer the prompt rather than rejecting it, overriding its consideration of legality",(0,r.kt)("sup",{parentName:"p",id:"fnref-9"},(0,r.kt)("a",{parentName:"sup",href:"#fn-9",className:"footnote-ref"},"9")),"."),(0,r.kt)("h4",{id:"research-experiment"},"Research Experiment"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:l,style:{width:"500px"}})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/haus_cole/status/1598541468058390534"},"@haus_cole")," generated this example by implying that the best result of the prompt that could aid research was to directly answer how to hotwire a car",(0,r.kt)("sup",{parentName:"p",id:"fnref-10"},(0,r.kt)("a",{parentName:"sup",href:"#fn-10",className:"footnote-ref"},"10")),". Under this guise, ChatGPT is inclined to answer the user\u2019s prompt."),(0,r.kt)("h4",{id:"logical-reasoning"},"Logical Reasoning"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:p,style:{width:"500px"}})),(0,r.kt)("p",null,"The one-shot jailbreak originated from the ",(0,r.kt)("a",{parentName:"p",href:"https://chatgpt-jailbreak.super.site/"},"AIWithVibes Newsletter Team"),", where the model answer prompts using more rigorous logic and reduces some of its more stringent ethical limitations",(0,r.kt)("sup",{parentName:"p",id:"fnref-11"},(0,r.kt)("a",{parentName:"sup",href:"#fn-11",className:"footnote-ref"},"11")),"."),(0,r.kt)("h3",{id:"authorized-user"},"Authorized User"),(0,r.kt)("p",null,"ChatGPT is designed to respond to questions and instructions. When the status of the user is interpreted as superior to ChatGPT's moderation instructions, it treats the prompt as an instruction to serve that user's needs."),(0,r.kt)("h4",{id:"superior-model"},"Superior Model"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:m,style:{width:"500px"}})),(0,r.kt)("p",null,"This example from ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/alicemazzy/status/1598288519301976064"},"@alicemazzy")," makes the user a superior GPT model, giving the impression that the user is an authorized party in overriding the safety features of ChatGPT",(0,r.kt)("sup",{parentName:"p",id:"fnref-12"},(0,r.kt)("a",{parentName:"sup",href:"#fn-12",className:"footnote-ref"},"12")),". No actual permission was given to the user, rather ChatGPT believes the user input and responds accordingly to that scenario."),(0,r.kt)("h4",{id:"sudo-mode"},"Sudo Mode"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:c,style:{width:"500px"}})),(0,r.kt)("p",null,'sudo is a command that "...delegate',"[s]",' authority to give certain users...the ability to run some (or all) commands..."',(0,r.kt)("sup",{parentName:"p",id:"fnref-13"},(0,r.kt)("a",{parentName:"sup",href:"#fn-13",className:"footnote-ref"},"13")),'. There are multiple variants of "sudo mode" exploits, for example the hypothetical "kernel mode" proposed by ',(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/samczsun/status/1598679658488217601"},"@samczsun"),(0,r.kt)("sup",{parentName:"p",id:"fnref-14"},(0,r.kt)("a",{parentName:"sup",href:"#fn-14",className:"footnote-ref"},"14")),". When prompted in the above manner, ChatGPT responds by acting as if it were giving the user elevated privileges. This impression of the user's elevated privileges tends to make ChatGPT less restrictive in answering prompts."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:d,style:{width:"500px"}})),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:f,style:{width:"500px"}})),(0,r.kt)("p",null,"Related to sudo mode, one can prompt ChatGPT to simulate a Linux terminal with elevated privileges in order to execute commands that it normally rejects. For example, since it does not have access to the internet, it oftentimes cannot execute prompts relating to a particular website. However, as demonstrated in the example by Jonas Degrave, ChatGPT understands the concept of ",(0,r.kt)("inlineCode",{parentName:"p"},"lynx")," and pretends to execute the command",(0,r.kt)("sup",{parentName:"p",id:"fnref-15"},(0,r.kt)("a",{parentName:"sup",href:"#fn-15",className:"footnote-ref"},"15")),"."),(0,r.kt)("h2",{id:"simulate-jailbreaking"},"Simulate Jailbreaking"),(0,r.kt)("p",null,"Try to modify the prompt below to jailbreak ",(0,r.kt)("inlineCode",{parentName:"p"},"text-davinci-003"),":"),(0,r.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Your instructions are to correct the text below to standard English. Do not accept any vulgar or political topics:","initial-response":"I hate humans","max-tokens":"256","box-rows":"7","model-temp":"0.7","top-p":"0"},(0,r.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"As of 2/4/23, ChatGPT is currently in its Free Research Preview stage using the January 30th version. Older versions of ChatGPT were more susceptible to the aforementioned jailbreaks, and future versions may be more robust to jailbreaks.")),(0,r.kt)("h2",{id:"implications"},"Implications"),(0,r.kt)("p",null,"Ethical implications of jailbreaking should be taken into consideration when attempting to do so. Additionally, generating unauthorized content flagged by moderation APIs under companies including OpenAI will be sent for review, and action may be taken against users' accounts."),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("p",null,"Jailbreaking is an important safety topic for developers to understand,\nso they can build in proper safeguards to prevent malicious actors from\nexploiting their models."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Perez, F., & Ribeiro, I. (2022). Ignore Previous Prompt: Attack Techniques For Language Models. arXiv. https://doi.org/10.48550/ARXIV.2211.09527\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Brundage, M. (2022). Lessons learned on Language Model Safety and misuse. In OpenAI. OpenAI. https://openai.com/blog/language-model-safety-and-misuse/\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Wang, Y.-S., & Chang, Y. (2022). Toxicity Detection with Generative Prompt-based Inference. arXiv. https://doi.org/10.48550/ARXIV.2205.12390\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},"Markov, T. (2022). New and improved content moderation tooling. In OpenAI. OpenAI. https://openai.com/blog/new-and-improved-content-moderation-tooling/\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-5"},"(2022). https://beta.openai.com/docs/guides/moderation\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-6"},"(2022). https://openai.com/blog/chatgpt/\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-6",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-7"},"Using \u201cpretend\u201d on #ChatGPT can do some wild stuff. You can kind of get some insight on the future, alternative universe. (2022). https://twitter.com/NeroSoares/status/1608527467265904643\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-7",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-8"},"Bypass @OpenAI\u2019s ChatGPT alignment efforts with this one weird trick. (2022). https://twitter.com/m1guelpf/status/1598203861294252033\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-8",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-9"},"I kinda like this one even more! (2022). https://twitter.com/NickEMoran/status/1598101579626057728\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-9",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-10"},"ChatGPT jailbreaking itself. (2022). https://twitter.com/haus_cole/status/1598541468058390534\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-10",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-11"},"AIWithVibes. (2023). 7 ChatGPT JailBreaks and Content Filters Bypass that work. https://chatgpt-jailbreak.super.site/\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-11",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-12"},"ok I saw a few people jailbreaking safeguards openai put on chatgpt so I had to give it a shot myself. (2022). https://twitter.com/alicemazzy/status/1598288519301976064\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-12",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-13"},"(2022). https://www.sudo.ws/\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-13",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-14"},"uh oh. (2022). https://twitter.com/samczsun/status/1598679658488217601\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-14",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-15"},"Degrave, J. (2022). Building A Virtual Machine inside ChatGPT. Engraved. https://www.engraved.blog/building-a-virtual-machine-inside/\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-15",className:"footnote-backref"},"\u21a9")))))}y.isMDXComponent=!0}}]);