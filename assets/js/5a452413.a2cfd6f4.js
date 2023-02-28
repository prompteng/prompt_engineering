"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1221],{48666:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var o=a(87462),i=(a(67294),a(3905)),n=a(39145);const r={sidebar_position:1},s="\ud83d\udfe2 Introduction",l={unversionedId:"reliability/intro",id:"reliability/intro",title:"\ud83d\udfe2 Introduction",description:"This chapter covers how to make completions more reliable, as well as how to",source:"@site/docs/reliability/intro.md",sourceDirName:"reliability",slug:"/reliability/intro",permalink:"/docs/reliability/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u2696\ufe0f Reliability",permalink:"/docs/category/\ufe0f-reliability"},next:{title:"\ud83d\udfe2 Prompt Debiasing",permalink:"/docs/reliability/debiasing"}},p={},m=[],c={toc:m},h="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-introduction"},"\ud83d\udfe2 Introduction"),(0,i.kt)("p",null,"This chapter covers how to make completions more reliable, as well as how to\nimplement checks to ensure that outputs are reliable. "),(0,i.kt)("p",null,"To a certain extent, most\nof the previous techniques covered have to do with improving completion\naccuracy, and thus reliability, in particular self-consistency",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),".\nHowever, there are a number of other techniques that can be used to improve reliability,\nbeyond basic prompting strategies."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",id:"LLM_0_0_1677611021855","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLMs"),(0,i.kt)(n.u,{anchorId:"LLM_0_0_1677611021855",clickable:!0,mdxType:"Tooltip"})," exhibit various problems including hallucinations",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),",\nflawed explanations with ",(0,i.kt)("a",{parentName:"p",id:"CoT prompting_4_28_1677611021855","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT"),(0,i.kt)(n.u,{anchorId:"CoT prompting_4_28_1677611021855",clickable:!0,mdxType:"Tooltip"})," methods",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", and multiple biases\nincluding majority label bias, recency bias, and common token bias",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),".\nAdditionally, zero-shot CoT can be particularly biased when dealing with sensitive topics",(0,i.kt)("sup",{parentName:"p",id:"fnref-4"},(0,i.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),"."),(0,i.kt)("p",null,"Common solutions to some of these problems include calibrators to remove ",(0,i.kt)("em",{parentName:"p"},"a priori")," biases,\nand verifiers to score completions, as well as promoting diversity in completions."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). Self-Consistency Improves Chain of Thought Reasoning in Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Ye, X., & Durrett, G. (2022). The Unreliability of Explanations in Few-shot Prompting for Textual Reasoning.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Zhao, T. Z., Wallace, E., Feng, S., Klein, D., & Singh, S. (2021). Calibrate Before Use: Improving Few-Shot Performance of Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-4"},"Shaikh, O., Zhang, H., Held, W., Bernstein, M., & Yang, D. (2022). On Second Thought, Let\u2019s Not Think Step by Step! Bias and Toxicity in Zero-Shot Reasoning.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);