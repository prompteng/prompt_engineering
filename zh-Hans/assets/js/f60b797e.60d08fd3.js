"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7919],{8405:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>f});var n=a(87462),i=(a(67294),a(3905)),o=a(39145);const r={sidebar_position:1},s="\ud83d\udfe2 \u4ecb\u7ecd",l={unversionedId:"reliability/intro",id:"reliability/intro",title:"\ud83d\udfe2 \u4ecb\u7ecd",description:"\u672c\u7ae0\u4ecb\u7ecd\u5982\u4f55\u4f7f\u8865\u5168\u7ed3\u679c\u66f4\u52a0\u53ef\u9760\uff0c\u4ee5\u53ca\u5982\u4f55\u901a\u8fc7\u68c0\u67e5\u6765\u786e\u4fdd\u8865\u5168\u7ed3\u679c\u7684\u53ef\u9760\u6027\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reliability/intro.md",sourceDirName:"reliability",slug:"/reliability/intro",permalink:"/zh-Hans/docs/reliability/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u2696\ufe0f Reliability",permalink:"/zh-Hans/docs/category/\ufe0f-reliability"},next:{title:"\ud83d\udfe2 \u63d0\u793a\u53bb\u504f\u5dee",permalink:"/zh-Hans/docs/reliability/debiasing"}},p={},f=[],m={toc:f},h="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-\u4ecb\u7ecd"},"\ud83d\udfe2 \u4ecb\u7ecd"),(0,i.kt)("p",null,"\u672c\u7ae0\u4ecb\u7ecd\u5982\u4f55\u4f7f\u8865\u5168\u7ed3\u679c\u66f4\u52a0\u53ef\u9760\uff0c\u4ee5\u53ca\u5982\u4f55\u901a\u8fc7\u68c0\u67e5\u6765\u786e\u4fdd\u8865\u5168\u7ed3\u679c\u7684\u53ef\u9760\u6027\u3002"),(0,i.kt)("p",null,"\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\uff0c\u524d\u9762\u4ecb\u7ecd\u7684\u5927\u90e8\u5206\u6280\u672f\u90fd\u4e0e\u63d0\u9ad8\u8865\u5168\u51c6\u786e\u5ea6\u53ca\u53ef\u9760\u6027\u6709\u5173\uff0c\u7279\u522b\u662f\u81ea\u6d3d\u6027",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u3002\u7136\u800c\uff0c\u9664\u4e86\u57fa\u672c\u63d0\u793a\u7b56\u7565\u4e4b\u5916\uff0c\u8fd8\u6709\u8bb8\u591a\u5176\u4ed6\u6280\u672f\u53ef\u4ee5\u7528\u4e8e\u63d0\u9ad8\u53ef\u9760\u6027\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",id:"LLM_0_0_1677611426414","data-tooltip-html":"Large Language Model. A model that is trained to predict the next word in a sentence.","data-tooltip-place":"top"},"LLMs"),(0,i.kt)(o.u,{anchorId:"LLM_0_0_1677611426414",clickable:!0,mdxType:"Tooltip"})," \u5b58\u5728\u5404\u79cd\u95ee\u9898\uff0c\u5305\u62ec\u5e7b\u8c61",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\u3001\u91c7\u7528 ",(0,i.kt)("a",{parentName:"p",id:"CoT prompting_4_4_1677611426414","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT"),(0,i.kt)(o.u,{anchorId:"CoT prompting_4_4_1677611426414",clickable:!0,mdxType:"Tooltip"})," \u65b9\u6cd5\u7684\u9519\u8bef\u89e3\u91ca",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\uff0c\u4ee5\u53ca\u591a\u79cd\u504f\u5dee\uff0c\u5305\u62ec\u591a\u6570\u6807\u7b7e\u504f\u5dee\u3001\u8fd1\u671f\u504f\u5dee\u548c\u5e38\u89c1\u4ee4\u724c\u504f\u5dee",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"\u3002\u6b64\u5916\uff0c\u5728\u5904\u7406\u654f\u611f\u8bdd\u9898\u65f6\uff0czero-shot \u601d\u7ef4\u94fe\u53ef\u80fd\u4f1a\u4ea7\u751f\u7279\u522b\u7684\u504f\u5dee",(0,i.kt)("sup",{parentName:"p",id:"fnref-4"},(0,i.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),"\u3002"),(0,i.kt)("p",null,"\u4e00\u4e9b\u5e38\u89c1\u7684\u89e3\u51b3\u65b9\u6848\u5305\u62ec\u4f7f\u7528\u6821\u51c6\u5668\u6d88\u9664",(0,i.kt)("em",{parentName:"p"},"\u5148\u9a8c"),"\u504f\u5dee\uff0c\u4f7f\u7528\u9a8c\u8bc1\u5668\u5bf9\u8865\u5168\u7ed3\u679c\u8fdb\u884c\u8bc4\u5206\uff0c\u4ee5\u53ca\u5728\u8865\u5168\u7ed3\u679c\u4e2d\u589e\u8fdb\u591a\u6837\u6027\u3002"),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Wang, X., Wei, J., Schuurmans, D., Le, Q., Chi, E., Narang, S., Chowdhery, A., & Zhou, D. (2022). Self-Consistency Improves Chain of Thought Reasoning in Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Ye, X., & Durrett, G. (2022). The Unreliability of Explanations in Few-shot Prompting for Textual Reasoning.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Zhao, T. Z., Wallace, E., Feng, S., Klein, D., & Singh, S. (2021). Calibrate Before Use: Improving Few-Shot Performance of Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-4"},"Shaikh, O., Zhang, H., Held, W., Bernstein, M., & Yang, D. (2022). On Second Thought, Let\u2019s Not Think Step by Step! Bias and Toxicity in Zero-Shot Reasoning.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);