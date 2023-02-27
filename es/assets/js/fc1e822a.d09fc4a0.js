"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1068],{10602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>p,toc:()=>h});var s=n(87462),o=(n(67294),n(3905));const i=n.p+"assets/images/self_consistency-3db2492237f38cf1567b25e0c902e3f5.png";var a=n(39145);const r={sidebar_position:5},l="\ud83d\udfe1 Self-Consistency",p={unversionedId:"intermediate/self_consistency",id:"intermediate/self_consistency",title:"\ud83d\udfe1 Self-Consistency",description:"Self-consistency(@wang2022selfconsistency) is a follow up to %%CoT|CoT prompting%% that generates",source:"@site/docs/intermediate/self_consistency.md",sourceDirName:"intermediate",slug:"/intermediate/self_consistency",permalink:"/es/docs/intermediate/self_consistency",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/intermediate/self_consistency.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Zero Shot Chain of Thought",permalink:"/es/docs/intermediate/zero_shot_cot"},next:{title:"\ud83d\udfe1 Generated Knowledge",permalink:"/es/docs/intermediate/generated_knowledge"}},c={},h=[{value:"Results",id:"results",level:2},{value:"Notes",id:"notes",level:2}],m={toc:h},d="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-self-consistency"},"\ud83d\udfe1 Self-Consistency"),(0,o.kt)("p",null,"Self-consistency",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," is a follow up to ",(0,o.kt)("a",{parentName:"p",id:"CoT prompting_2_19_1677461028463","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT"),(0,o.kt)(a.u,{anchorId:"CoT prompting_2_19_1677461028463",clickable:!0,mdxType:"Tooltip"})," that generates\nmultiple chains of thought instead of just one, then takes the majority answer\nas the final answer."),(0,o.kt)("p",null,'In the below figure, the prompt on the left is written using the Few-Shot-CoT paradigm.\nUsing this one prompt, multiple chains of thought are generated independently.\nAnswers are extracted from each and the final answer is computed by "marginalizing\nout reasoning paths". In practice, this just means taking the majority answer.'),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:i,style:{width:"750px"}})),(0,o.kt)("div",{style:{textAlign:"center"}},"Self Consistency (Wang et al.)"),(0,o.kt)("h2",{id:"results"},"Results"),(0,o.kt)("p",null,"Self-consistency has been shown to improve results on arithmetic, commonsense and symbolic reasoning tasks."),(0,o.kt)("p",null,"Even when regular CoT was found to be ineffective",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", self-consistency\nwas still able to improve results."),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Wang et al. discuss a more complex method for marginalizing out reasoning paths,\nwhich deals with the LLM generated probabilities for each chain of thought. However, they\ndo not use this method in their experiments, and majority voting seems to usually\nhave the same or better performance regardless."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). Self-Consistency Improves Chain of Thought Reasoning in Language Models.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"Ye, X., & Durrett, G. (2022). The Unreliability of Explanations in Few-shot Prompting for Textual Reasoning.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);