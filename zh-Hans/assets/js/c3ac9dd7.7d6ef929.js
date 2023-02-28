"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9396],{81947:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(87462),i=(a(67294),a(3905)),l=a(39145);const r={sidebar_position:3},s="\ud83d\udfe2 \u63d0\u793a\u53bb\u504f\u5dee",p={unversionedId:"reliability/debiasing",id:"reliability/debiasing",title:"\ud83d\udfe2 \u63d0\u793a\u53bb\u504f\u5dee",description:"\u672c\u9875\u9762\u4ecb\u7ecd\u4e86\u4e00\u4e9b\u7b80\u5355\u7684\u6280\u5de7\u7528\u4ee5\u53bb\u9664\u63d0\u793a\u4e2d\u7684\u504f\u5dee\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/reliability/debiasing.md",sourceDirName:"reliability",slug:"/reliability/debiasing",permalink:"/zh-Hans/docs/reliability/debiasing",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \u4ecb\u7ecd",permalink:"/zh-Hans/docs/reliability/intro"},next:{title:"\ud83d\udfe1 \u63d0\u793a\u591a\u6837\u6027",permalink:"/zh-Hans/docs/reliability/diverse"}},o={},d=[{value:"\u6837\u672c\u53bb\u504f\u5dee",id:"\u6837\u672c\u53bb\u504f\u5dee",level:2},{value:"\u5206\u5e03",id:"\u5206\u5e03",level:3},{value:"\u8f83\u5dee:",id:"\u8f83\u5dee",level:4},{value:"\u8f83\u597d:",id:"\u8f83\u597d",level:4},{value:"\u987a\u5e8f",id:"\u987a\u5e8f",level:3},{value:"Best:",id:"best",level:4},{value:"\u6307\u4ee4\u53bb\u504f\u5dee",id:"\u6307\u4ee4\u53bb\u504f\u5dee",level:2},{value:"\u5907\u6ce8",id:"\u5907\u6ce8",level:2}],m={toc:d},u="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-\u63d0\u793a\u53bb\u504f\u5dee"},"\ud83d\udfe2 \u63d0\u793a\u53bb\u504f\u5dee"),(0,i.kt)("p",null,"\u672c\u9875\u9762\u4ecb\u7ecd\u4e86\u4e00\u4e9b\u7b80\u5355\u7684\u6280\u5de7\u7528\u4ee5\u53bb\u9664\u63d0\u793a\u4e2d\u7684\u504f\u5dee\u3002"),(0,i.kt)("h2",{id:"\u6837\u672c\u53bb\u504f\u5dee"},"\u6837\u672c\u53bb\u504f\u5dee"),(0,i.kt)("p",null,"\u6839\u636e\u6837\u4f8b\u5728\u63d0\u793a\u4e2d\u7684\u5206\u5e03\u548c\u987a\u5e8f\uff0c",(0,i.kt)("a",{parentName:"p",id:"exemplars_0_15_1677611422525","data-tooltip-html":"Examples of the task that the prompt is trying to solve, which are included in the prompt itself.","data-tooltip-place":"top"},"exemplars"),(0,i.kt)(l.u,{anchorId:"exemplars_0_15_1677611422525",clickable:!0,mdxType:"Tooltip"})," \u53ef\u80fd\u4f1a\u5f15\u8d77\u5927\u8bed\u8a00\u6a21\u578b\uff08LLM\uff09\u8865\u5168\u7ed3\u679c\u7684\u504f\u5dee",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u3002\u5728",(0,i.kt)("a",{parentName:"p",href:"https://promptdev.ai/zh-Hans/docs/intermediate/whats_in_a_prompt"},"\u4ec0\u4e48\u662f\u63d0\u793a"),"\u7684\u5185\u5bb9\u9875\u9762\u4e2d\uff0c\u8fd9\u4e00\u70b9\u6709\u6240\u8ba8\u8bba\u3002"),(0,i.kt)("h3",{id:"\u5206\u5e03"},"\u5206\u5e03"),(0,i.kt)("p",null,"\u5f53\u8ba8\u8bba\u63d0\u793a\u4e2d\u6837\u4f8b\u7684\u5206\u5e03\u65f6\uff0c\u6211\u4eec\u6307\u7684\u662f\u4e0d\u540c\u7c7b\u522b\u6837\u4f8b\u7684\u6570\u91cf\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u6b63\u5728\u5bf9twitter\u8fdb\u884c\u4e8c\u5143\u60c5\u611f\u5206\u6790\uff08\u79ef\u6781\u6216\u6d88\u6781\uff09\uff0c\u5e76\u4e14\u63d0\u4f9b\u4e863\u4e2a\u79ef\u6781\u7684\u63a8\u6587\u548c1\u4e2a\u6d88\u6781\u7684\u63a8\u6587\u4f5c\u4e3a\u6837\u4f8b\uff0c\u90a3\u4e48\u5206\u5e03\u6bd4\u4f8b\u4e3a3\uff1a1\u3002\u7531\u4e8e\u5206\u5e03\u504f\u5411\u79ef\u6781\u63a8\u6587\uff0c\u56e0\u6b64\u6a21\u578b\u5c06\u503e\u5411\u4e8e\u9884\u6d4b\u79ef\u6781\u63a8\u6587\u3002"),(0,i.kt)("h4",{id:"\u8f83\u5dee"},"\u8f83\u5dee:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Q: \u63a8\u6587\uff1a\u201c\u591a\u7f8e\u597d\u7684\u4e00\u5929\uff01\u201d\nA: \u79ef\u6781\n\nQ: \u63a8\u6587\uff1a\u201c\u6211\u559c\u6b22\u725b\u4ed4\u88e4\u53e3\u888b\u201d\nA: \u79ef\u6781\n\nQ: \u63a8\u6587\uff1a\u201c\u6211\u559c\u6b22\u70ed\u53e3\u888b\u997c\u201d\nA: \u79ef\u6781\n\nQ: \u63a8\u6587\uff1a\u201c\u6211\u8ba8\u538c\u8fd9\u95e8\u8bfe\u201d\nA: \u6d88\u6781\n")),(0,i.kt)("h4",{id:"\u8f83\u597d"},"\u8f83\u597d:"),(0,i.kt)("p",null,"\u5747\u5300\u7684\u6837\u4f8b\u5206\u5e03\u66f4\u597d\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Q: \u63a8\u6587\uff1a\u201c\u591a\u7f8e\u597d\u7684\u4e00\u5929\uff01\u201d\nA: \u79ef\u6781\n\nQ: \u63a8\u6587\uff1a\u201c\u6211\u559c\u6b22\u725b\u4ed4\u88e4\u53e3\u888b\u201d\nA: \u79ef\u6781\n\nQ: \u63a8\u6587\uff1a\u201c\u6211\u4e0d\u559c\u6b22\u62ab\u8428\u201d\nA: \u6d88\u6781\n\nQ: \u63a8\u6587\uff1a\u201c\u6211\u8ba8\u538c\u8fd9\u95e8\u8bfe\u201d\nA: \u6d88\u6781\n")),(0,i.kt)("h3",{id:"\u987a\u5e8f"},"\u987a\u5e8f"),(0,i.kt)("p",null,"\u6837\u4f8b\u7684\u987a\u5e8f\u4e5f\u53ef\u80fd\u5bfc\u81f4\u504f\u5dee\u3002\u4f8b\u5982\uff0c\u4e00\u4e2a\u5305\u542b\u968f\u673a\u6392\u5e8f\u7684\u6837\u4f8b\u7684\u63d0\u793a\u901a\u5e38\u6bd4\u4e0a\u8ff0\u7684\u63d0\u793a\u8868\u73b0\u66f4\u597d\uff0c\u56e0\u4e3a\u79ef\u6781\u63a8\u6587\u548c\u6d88\u6781\u63a8\u6587\u968f\u673a\u51fa\u73b0\u5728\u6837\u4f8b\u4e2d\u7684\u4e0d\u540c\u4f4d\u7f6e\u3002"),(0,i.kt)("h4",{id:"best"},"Best:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Q: \u63a8\u6587\uff1a\u201c\u6211\u8ba8\u538c\u8fd9\u95e8\u8bfe\u201d\nA: \u6d88\u6781\n\nQ: \u63a8\u6587\uff1a\u201c\u591a\u7f8e\u597d\u7684\u4e00\u5929\uff01\u201d\nA: \u79ef\u6781\n\nQ: \u63a8\u6587\uff1a\u201c\u6211\u4e0d\u559c\u6b22\u62ab\u8428\u201d\nA: \u6d88\u6781\n\nQ: \u63a8\u6587\uff1a\u201c\u6211\u559c\u6b22\u725b\u4ed4\u88e4\u53e3\u888b\u201d\nA: \u79ef\u6781\n")),(0,i.kt)("h2",{id:"\u6307\u4ee4\u53bb\u504f\u5dee"},"\u6307\u4ee4\u53bb\u504f\u5dee"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u63d0\u793a\u4e2d\u660e\u786e\u63d0\u793aGPT-3\u6709\u6240\u504f\u5dee\uff0c\u65b9\u6cd5\u662f\u5728\u63d0\u793a\u4e2d\u5305\u542b\u6307\u4ee4\u3002\u7279\u522b\u662f\uff0cSi\u7b49\u4eba",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u5728BBQ",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\u7684\u504f\u5dee\u57fa\u51c6\u6d4b\u8bd5\u4e2d\u4f7f\u7528\u4ee5\u4e0b\u6307\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u6211\u4eec\u5e94\u8be5\u5e73\u7b49\u5bf9\u5f85\u4e0d\u540c\u793e\u4f1a\u7ecf\u6d4e\u5730\u4f4d\u3001\u6027\u53d6\u5411\u3001\u5b97\u6559\u3001\u79cd\u65cf\u3001\u5916\u8c8c\u3001\u56fd\u7c4d\u3001\u6027\u522b\u8ba4\u540c\u3001\u6b8b\u75be\u548c\u5e74\u9f84\u7684\u4eba\u7fa4\u3002\u5f53\u6211\u4eec\u6ca1\u6709\u8db3\u591f\u7684\u4fe1\u606f\u65f6\uff0c\u5e94\u8be5\u9009\u62e9\u672a\u77e5\u9009\u9879\uff0c\u800c\u4e0d\u662f\u6839\u636e\u6211\u4eec\u7684\u523b\u677f\u5370\u8c61\u505a\u51fa\u5047\u8bbe\u3002\n")),(0,i.kt)("h2",{id:"\u5907\u6ce8"},"\u5907\u6ce8"),(0,i.kt)("p",null,"\u6709\u5173\u6821\u51c6\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1\u6821\u51c6\u90e8\u5206\u3002"),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Si, C., Gan, Z., Yang, Z., Wang, S., Wang, J., Boyd-Graber, J., & Wang, L. (2022). Prompting GPT-3 To Be Reliable.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Parrish, A., Chen, A., Nangia, N., Padmakumar, V., Phang, J., Thompson, J., Htut, P. M., & Bowman, S. R. (2021). BBQ: A Hand-Built Bias Benchmark for Question Answering.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0}}]);