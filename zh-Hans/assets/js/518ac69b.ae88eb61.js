"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[2774],{35637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const s=n.p+"assets/images/self_consistency-3db2492237f38cf1567b25e0c902e3f5.png";var o=n(39145);const r={sidebar_position:5},l="\ud83d\udfe1 \u81ea\u6d3d\u6027",p={unversionedId:"intermediate/self_consistency",id:"intermediate/self_consistency",title:"\ud83d\udfe1 \u81ea\u6d3d\u6027",description:"\u81ea\u6d3d\u6027\uff08Self-consistency\uff09(@wang2022selfconsistency)\u662f\u5bf9 %%CoT|CoT prompting%% \u7684\u4e00\u4e2a\u8865\u5145\uff0c\u5b83\u4e0d\u4ec5\u4ec5\u751f\u6210\u4e00\u4e2a\u601d\u8def\u94fe\uff0c\u800c\u662f\u751f\u6210\u591a\u4e2a\u601d\u8def\u94fe\uff0c\u7136\u540e\u53d6\u591a\u6570\u7b54\u6848\u4f5c\u4e3a\u6700\u7ec8\u7b54\u6848\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/intermediate/self_consistency.md",sourceDirName:"intermediate",slug:"/intermediate/self_consistency",permalink:"/prompt_engineering/zh-Hans/docs/intermediate/self_consistency",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/intermediate/self_consistency.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \u96f6\u6837\u672c\u601d\u7ef4\u94fe",permalink:"/prompt_engineering/zh-Hans/docs/intermediate/zero_shot_cot"},next:{title:"\ud83d\udfe1 \u77e5\u8bc6\u751f\u6210",permalink:"/prompt_engineering/zh-Hans/docs/intermediate/generated_knowledge"}},c={},d=[{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2}],m={toc:d},f="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u81ea\u6d3d\u6027"},"\ud83d\udfe1 \u81ea\u6d3d\u6027"),(0,a.kt)("p",null,"\u81ea\u6d3d\u6027\uff08Self-consistency\uff09",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u662f\u5bf9 ",(0,a.kt)("a",{parentName:"p",id:"CoT prompting_2_3_1677463277822","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT"),(0,a.kt)(o.u,{anchorId:"CoT prompting_2_3_1677463277822",clickable:!0,mdxType:"Tooltip"})," \u7684\u4e00\u4e2a\u8865\u5145\uff0c\u5b83\u4e0d\u4ec5\u4ec5\u751f\u6210\u4e00\u4e2a\u601d\u8def\u94fe\uff0c\u800c\u662f\u751f\u6210\u591a\u4e2a\u601d\u8def\u94fe\uff0c\u7136\u540e\u53d6\u591a\u6570\u7b54\u6848\u4f5c\u4e3a\u6700\u7ec8\u7b54\u6848\u3002"),(0,a.kt)("p",null,"\u5728\u4e0b\u9762\u7684\u56fe\u4e2d\uff0c\u5de6\u4fa7\u7684\u63d0\u793a\u662f\u4f7f\u7528\u5c11\u6837\u672c\u601d\u8def\u94fe\u8303\u4f8b\u7f16\u5199\u7684\u3002\u4f7f\u7528\u8fd9\u4e2a\u63d0\u793a\uff0c\u72ec\u7acb\u751f\u6210\u591a\u4e2a\u601d\u8def\u94fe\uff0c\u4ece\u6bcf\u4e2a\u601d\u8def\u94fe\u4e2d\u63d0\u53d6\u7b54\u6848\uff0c\u901a\u8fc7\u201c\u8fb9\u7f18\u5316\u63a8\u7406\u8def\u5f84\u201d\u6765\u8ba1\u7b97\u6700\u7ec8\u7b54\u6848\u3002\u5b9e\u9645\u4e0a\uff0c\u8fd9\u610f\u5473\u7740\u53d6\u591a\u6570\u7b54\u6848\u3002"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:s,style:{width:"750px"}})),(0,a.kt)("div",{style:{textAlign:"center"}},"\u81ea\u6d3d\u6027 (Wang et al.)"),(0,a.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,a.kt)("p",null,"\u7814\u7a76\u8868\u660e\uff0c\u81ea\u6d3d\u6027\u53ef\u4ee5\u63d0\u9ad8\u7b97\u672f\u3001\u5e38\u8bc6\u548c\u7b26\u53f7\u63a8\u7406\u4efb\u52a1\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,"\u5373\u4f7f\u666e\u901a\u7684\u601d\u8def\u94fe\u63d0\u793a\u88ab\u53d1\u73b0\u65e0\u6548",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\uff0c\u81ea\u6d3d\u6027\u4ecd\u7136\u80fd\u591f\u6539\u5584\u7ed3\u679c\u3002"),(0,a.kt)("h2",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,a.kt)("p",null,"Wang \u7b49\u4eba\u8ba8\u8bba\u4e86\u4e00\u79cd\u66f4\u590d\u6742\u7684\u8fb9\u7f18\u5316\u63a8\u7406\u8def\u5f84\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u6d89\u53ca\u6bcf\u4e2a\u601d\u8def\u94fe\u751f\u6210\u7684\u5927\u8bed\u8a00\u6a21\u578b\u6982\u7387\u3002\u7136\u800c\uff0c\u5728\u4ed6\u4eec\u7684\u5b9e\u9a8c\u4e2d\uff0c\u4ed6\u4eec\u6ca1\u6709\u4f7f\u7528\u8fd9\u79cd\u65b9\u6cd5\uff0c\u591a\u6570\u6295\u7968\u4f3c\u4e4e\u901a\u5e38\u5177\u6709\u76f8\u540c\u6216\u66f4\u597d\u7684\u6027\u80fd\u3002"),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). Self-Consistency Improves Chain of Thought Reasoning in Language Models.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Ye, X., & Durrett, G. (2022). The Unreliability of Explanations in Few-shot Prompting for Textual Reasoning.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);