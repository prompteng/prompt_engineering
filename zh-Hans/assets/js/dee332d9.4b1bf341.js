"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8775],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return n?r.createElement(f,p(p({ref:e},c),{},{components:n})):r.createElement(f,p({ref:e},c))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[u]="string"==typeof t?t:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6321:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o=n.p+"assets/images/skippy_chatbot-01e93d7bda29d973a0663fc8f9eea57b.png",p=n.p+"assets/images/skippy_chatbot_header-378e21014fb7ee1923ce415b4475290b.png",i=n.p+"assets/images/therapy_chatbot-5c8c653e12e16fc816883ff38f27e9b2.gif",l=n.p+"assets/images/chatgpt_ui_diagram-87b55966a74fe72526d9e2c4b86c6650.png",s={sidebar_position:4},c="\ud83d\udfe2 \u7528GPT-3\u6784\u5efaChatGPT",u={unversionedId:"applied_prompting/build_chatgpt",id:"applied_prompting/build_chatgpt",title:"\ud83d\udfe2 \u7528GPT-3\u6784\u5efaChatGPT",description:"\u4ecb\u7ecd",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/applied_prompting/build_chatgpt.md",sourceDirName:"applied_prompting",slug:"/applied_prompting/build_chatgpt",permalink:"/zh-Hans/docs/applied_prompting/build_chatgpt",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 \u89e3\u7b54\u8ba8\u8bba\u6027\u95ee\u9898",permalink:"/zh-Hans/docs/applied_prompting/short_response"},next:{title:"\ud83d\udfe2 \u804a\u5929\u673a\u5668\u4eba + \u77e5\u8bc6\u5e93",permalink:"/zh-Hans/docs/applied_prompting/build_chatbot_from_kb"}},h={},m=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u63d0\u793a",id:"\u63d0\u793a",level:2},{value:"\u8bb0\u5fc6",id:"\u8bb0\u5fc6",level:3},{value:"\u51e0\u4e2a\u4f8b\u5b50",id:"\u51e0\u4e2a\u4f8b\u5b50",level:3},{value:"\u8be2\u95ee\u4f60\u8fd1\u51b5\u7684\u5fc3\u7406\u6cbb\u7597\u5e08\u804a\u5929\u673a\u5668\u4eba",id:"\u8be2\u95ee\u4f60\u8fd1\u51b5\u7684\u5fc3\u7406\u6cbb\u7597\u5e08\u804a\u5929\u673a\u5668\u4eba",level:4},{value:"\u4f7f\u7528\u65e7\u7684\u65e5\u8bb0\u4e0e\u5e74\u8f7b\u7684\u81ea\u5df1\u4ea4\u8c08",id:"\u4f7f\u7528\u65e7\u7684\u65e5\u8bb0\u4e0e\u5e74\u8f7b\u7684\u81ea\u5df1\u4ea4\u8c08",level:4},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2}],f={toc:m},d="wrapper";function k(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u7528gpt-3\u6784\u5efachatgpt"},"\ud83d\udfe2 \u7528GPT-3\u6784\u5efaChatGPT"),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:p,style:{width:"700px"}})),(0,a.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://chat.openai.com/chat"},"ChatGPT"),"\u5728\u8fc7\u53bb\u4e00\u4e2a\u6708\u5185\u7206\u70b8\u6027\u589e\u957f\uff0c\u4ec5\u4e00\u5468\u5185\u5c31\u83b7\u5f97\u4e86\u4e00\u767e\u4e07\u7528\u6237\u3002\u4ee4\u4eba\u60ca\u8bb6\u7684\u662f\uff0c\u5176\u57fa\u7840\u6a21\u578bGPT-3\u57282020\u5e74\u9996\u6b21\u4eae\u76f8\uff0c\u5e76\u5728\u4e00\u5e74\u524d\u516c\u5f00\u4e86\u5bf9\u5916\u8bbf\u95ee\u6743\u9650",(0,a.kt)("a",{href:"https://openai.com/blog/api-no-waitlist/"},"\uff01")),(0,a.kt)("p",null,"ChatGPT\u662f\u4e00\u79cd\u65b0\u7684\u8bed\u8a00\u6a21\u578b\uff0c\u7531OpenAI\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u4eceGPT-3\u8fdb\u884c\u4e86\u5fae\u8c03\uff0c\u4f7f\u5176\u80fd\u591f\u7528\u4e8e\u5bf9\u8bdd",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u3002\u5b83\u5177\u6709\u7528\u6237\u53cb\u597d\u7684\u804a\u5929\u754c\u9762\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b83\u8f93\u5165\u5185\u5bb9\u5e76\u83b7\u5f97AI\u52a9\u624b\u7684\u54cd\u5e94\u3002\u8bf7\u5728",(0,a.kt)("a",{parentName:"p",href:"https://chat.openai.com/chat"},"chat.openai.com"),"\u4e0a\u67e5\u770b\u3002"),(0,a.kt)("p",null,"\u5c3d\u7ba1\u65e9\u671f\u7248\u672c\u7684GPT-3\u6ca1\u6709\u5f53\u524d\u7684GPT-3.5\u7cfb\u5217\u90a3\u4e48\u5148\u8fdb\uff0c\u4f46\u5b83\u4eec\u4ecd\u7136\u4ee4\u4eba\u5370\u8c61\u6df1\u523b\u3002\u8fd9\u4e9b\u6a21\u578b\u901a\u8fc7API\u548c",(0,a.kt)("a",{href:"https://beta.openai.com/playground"},"Playground Web UI\u754c\u9762"),"\u63d0\u4f9b\uff0c\u8ba9\u60a8\u8c03\u6574\u67d0\u4e9b\u914d\u7f6e\u53c2\u6570\u5e76\u6d4b\u8bd5\u63d0\u793a\u3002GPT-3\u53d6\u5f97\u4e86\u663e\u7740\u7684\u5173\u6ce8\uff0c\u4f46\u5b83\u5e76\u6ca1\u6709\u8fbe\u5230ChatGPT\u7684\u75c5\u6bd2\u5f0f\u4f20\u64ad\u3002"),(0,a.kt)("p",null,"\u4e0eGPT-3\u76f8\u6bd4\uff0cChatGPT\u4e4b\u6240\u4ee5\u5982\u6b64\u6210\u529f\uff0c\u662f\u56e0\u4e3a\u5b83\u4f5c\u4e3a\u4e00\u4e2a\u7b80\u5355\u7684AI\u52a9\u624b\u5bf9\u4e8e\u666e\u901a\u4eba\u6765\u8bf4\u975e\u5e38\u6613\u4e8e\u4f7f\u7528\uff0c\u65e0\u8bba\u4ed6\u4eec\u5bf9\u6570\u636e\u79d1\u5b66\u3001\u8bed\u8a00\u6a21\u578b\u6216AI\u7684\u77e5\u8bc6\u6709\u591a\u5c11\u3002"),(0,a.kt)("p",null,"\u5728\u672c\u6587\u4e2d\uff0c\u6211\u5c06\u6982\u8ff0\u5982\u4f55\u4f7f\u7528\u50cfGPT-3\u8fd9\u6837\u7684\u5927\u578b\u8bed\u8a00\u6a21\u578b\u6765\u5b9e\u73b0ChatGPT\u7b49\u804a\u5929\u673a\u5668\u4eba\u3002"),(0,a.kt)("h2",{id:"\u52a8\u673a"},"\u52a8\u673a"),(0,a.kt)("p",null,"\u672c\u6587\u90e8\u5206\u539f\u56e0\u662f\u7531",(0,a.kt)("a",{href:"https://twitter.com/goodside"},"Riley Goodside"),"\u7684\u4e00\u6761\u63a8\u6587\u5f15\u53d1\u7684\uff0c\u4ed6\u6307\u51fa\u4e86ChatGPT\u662f\u5982\u4f55\u5b9e\u73b0\u7684\u3002"),(0,a.kt)("blockquote",{class:"twitter-tweet"},(0,a.kt)("p",{lang:"en",dir:"ltr"},"How to make your own knock-off ChatGPT using GPT\u20113 (text\u2011davinci\u2011003) \u2014 where you can customize the rules to your needs, and access the resulting chatbot over an API. ",(0,a.kt)("a",{href:"https://t.co/9jHrs91VHW"},"pic.twitter.com/9jHrs91VHW")),"\u2014 Riley Goodside (@goodside) ",(0,a.kt)("a",{href:"https://twitter.com/goodside/status/1607487283782995968?ref_src=twsrc%5Etfw"},"December 26, 2022"))," ",(0,a.kt)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),(0,a.kt)("p",null,"\u4e0eGPT-3.5\u7cfb\u5217\u4e2d\u7684\u5176\u4ed6\u6a21\u578b\u4e00\u6837\uff0cChatGPT\u662f\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://huggingface.co/blog/rlhf"},"RLHF"),"\u8fdb\u884c\u8bad\u7ec3\u7684\uff0c\u4f46\u5b83\u7684\u5927\u90e8\u5206\u6548\u679c\u6765\u81ea\u4e8e\u4f7f\u7528\u4e86",(0,a.kt)("strong",{parentName:"p"},"\u597d\u7684\u63d0\u793a"),"\u3002"),(0,a.kt)("h2",{id:"\u63d0\u793a"},"\u63d0\u793a"),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:o,style:{width:"700px"}}),(0,a.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Skippy chatbot\u5b8c\u6574\u7684\u63d0\u793a(prompt)")),(0,a.kt)("a",{href:"https://promptdev.ai/docs/basics/prompting"},"\u63d0\u793a\u662f\u6307\u793a AI \u8fdb\u884c\u67d0\u4e9b\u64cd\u4f5c\u7684\u8fc7\u7a0b\u3002")," \u6b63\u5982\u4f60\u53ef\u80fd\u5728\u7f51\u4e0a\u770b\u5230\u7684 ChatGPT \u7684\u793a\u4f8b\u4e00\u6837\uff0c\u4f60\u53ef\u4ee5\u63d0\u793a\u5b83\u505a\u4efb\u4f55\u4e8b\u60c5\u3002\u5e38\u89c1\u7684\u7528\u4f8b\u662f\u603b\u7ed3\u6587\u672c\u3001\u6839\u636e\u63cf\u8ff0\u7f16\u5199\u5185\u5bb9\u6216\u521b\u5efa\u8bf8\u5982\u8bd7\u6b4c\u3001\u98df\u8c31\u7b49\u7b49\u3002",(0,a.kt)("p",null),(0,a.kt)("p",null,"ChatGPT \u662f\u4e00\u4e2a\u8bed\u8a00\u6a21\u578b\u548c\u7528\u6237\u754c\u9762\u3002\u7528\u6237\u8f93\u5165\u5230\u754c\u9762\u7684\u63d0\u793a\u5b9e\u9645\u4e0a\u88ab\u63d2\u5165\u5230\u5305\u542b\u7528\u6237\u548c ChatGPT \u4e4b\u95f4\u6574\u4e2a\u5bf9\u8bdd\u7684\u8f83\u5927\u63d0\u793a\u4e2d\u3002\u8fd9\u4f7f\u5f97\u57fa\u7840\u8bed\u8a00\u6a21\u578b\u80fd\u591f\u7406\u89e3\u5bf9\u8bdd\u7684\u4e0a\u4e0b\u6587\u5e76\u4f5c\u51fa\u9002\u5f53\u7684\u56de\u5e94\u3002"),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:l,style:{width:"600px"}}),(0,a.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"\u5728\u53d1\u9001\u5230\u6a21\u578b\u4e4b\u524d\u63d2\u5165\u7528\u6237\u63d0\u793a\u7684\u793a\u4f8b")),(0,a.kt)("p",null,"\u8bed\u8a00\u6a21\u578b\u901a\u8fc7\u5728\u9884\u8bad\u7ec3\u8fc7\u7a0b\u4e2d\u5b66\u4e60\u7684\u6982\u7387\u6765\u5b8c\u6210\u63d0\u793a\uff0c\u4ece\u800c\u786e\u5b9a\u63a5\u4e0b\u6765\u7684\u8bcd\u6c47",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\u3002"),(0,a.kt)("p",null),(0,a.kt)("p",null,"GPT-3 \u80fd\u591f\u4ece\u7b80\u5355\u7684\u6307\u4ee4\u6216\u51e0\u4e2a\u793a\u4f8b\u4e2d\u201c\u5b66\u4e60\u201d\u3002\u540e\u8005\u88ab\u79f0\u4e3a\u5c11\u6837\u672c\u6216\u4e0a\u4e0b\u6587\u5b66\u4e60",(0,a.kt)("sup",{parentName:"p",id:"fnref-3"},(0,a.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"\u3002\u5728\u4e0a\u9762\u7684\u804a\u5929\u673a\u5668\u4eba\u63d0\u793a\u4e2d\uff0c\u6211\u521b\u5efa\u4e86\u4e00\u4e2a\u865a\u6784\u7684\u804a\u5929\u673a\u5668\u4eba\u547d\u540d\u4e3a Skippy\uff0c\u5e76\u6307\u793a\u5b83\u5411\u7528\u6237\u63d0\u4f9b\u56de\u5e94\u3002GPT-3 \u660e\u767d\u4e86\u6765\u56de\u4ea4\u6d41\u7684\u683c\u5f0f USER: {user input} \u548c SKIPPY: {skippy response}\u3002GPT-3 \u7406\u89e3 Skippy \u662f\u4e00\u4e2a\u804a\u5929\u673a\u5668\u4eba\uff0c\u4e4b\u524d\u7684\u4ea4\u6d41\u662f\u4e00\u6bb5\u5bf9\u8bdd\uff0c\u56e0\u6b64\u5f53\u6211\u4eec\u63d0\u4f9b\u4e0b\u4e00\u4e2a\u7528\u6237\u8f93\u5165\u65f6\uff0c\u201cSkippy\u201d\u5c06\u4f5c\u51fa\u56de\u5e94\u3002"),(0,a.kt)("h3",{id:"\u8bb0\u5fc6"},"\u8bb0\u5fc6"),(0,a.kt)("p",null,"Skippy\u548c\u7528\u6237\u4e4b\u95f4\u7684\u8fc7\u53bb\u4ea4\u6d41\u4f1a\u9644\u52a0\u5230\u4e0b\u4e00\u4e2a\u63d0\u793a\u4e2d\u3002\u6bcf\u6b21\u6211\u4eec\u63d0\u4f9b\u66f4\u591a\u7528\u6237\u8f93\u5165\u5e76\u83b7\u5f97\u66f4\u591a\u804a\u5929\u673a\u5668\u4eba\u8f93\u51fa\u65f6\uff0c\u63d0\u793a\u90fd\u4f1a\u6269\u5c55\u4ee5\u7eb3\u5165\u8fd9\u4e2a\u65b0\u4ea4\u6d41\u3002\u8fd9\u5c31\u662fSkippy\u548cChatGPT\u8fd9\u6837\u7684\u804a\u5929\u673a\u5668\u4eba\u5982\u4f55",(0,a.kt)("strong",{parentName:"p"},"\u8bb0\u4f4f\u4ee5\u524d\u7684\u8f93\u5165"),"\u3002\u4f46\u662f\uff0cGPT-3\u804a\u5929\u673a\u5668\u4eba\u53ef\u4ee5\u8bb0\u4f4f\u7684\u5185\u5bb9\u662f\u6709\u9650\u7684\u3002"),(0,a.kt)("p",null,"\u63d0\u793a\u5728\u8fdb\u884c\u591a\u6b21\u4ea4\u6d41\u540e\u53ef\u80fd\u4f1a\u53d8\u5f97\u5f88\u5e9e\u5927\uff0c\u7279\u522b\u662f\u5982\u679c\u6211\u4eec\u4f7f\u7528\u804a\u5929\u673a\u5668\u4eba\u6765\u751f\u6210\u50cf\u535a\u5ba2\u6587\u7ae0\u8fd9\u6837\u7684\u957f\u7bc7\u56de\u590d\u3002\u53d1\u9001\u5230GPT-3\u7684\u63d0\u793a\u5c06\u8f6c\u6362\u4e3a\u6807\u8bb0(tokens)\uff0c\u8fd9\u4e9b\u6807\u8bb0(tokens)\u662f\u5355\u4e2a\u5355\u8bcd\u6216\u5176\u4e2d\u7684\u4e00\u90e8\u5206\u3002\u5bf9\u4e8e\u5305\u62ecChatGPT\u5728\u5185\u7684GPT-3\u6a21\u578b\uff0c\u7ec4\u5408\u63d0\u793a\u548c\u751f\u6210\u54cd\u5e94\u7684\u6807\u8bb0\u9650\u5236\u4e3a",(0,a.kt)("a",{href:"https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them"},"4097\u4e2a\uff08\u7ea63000\u4e2a\u5355\u8bcd\uff09"),"\u3002"),(0,a.kt)("h3",{id:"\u51e0\u4e2a\u4f8b\u5b50"},"\u51e0\u4e2a\u4f8b\u5b50"),(0,a.kt)("p",null,"\u4fdd\u5b58\u5148\u524d\u5bf9\u8bdd\u7684\u63d0\u793a\u6709\u8bb8\u591a\u4e0d\u540c\u7684\u7528\u9014\u3002 ChatGPT\u65e8\u5728\u6210\u4e3a\u4e00\u4e2a\u591a\u529f\u80fd\u7684\u901a\u7528\u52a9\u624b\uff0c\u5728\u4e2a\u4eba\u4f7f\u7528\u7684\u7ecf\u9a8c\u4e2d\uff0c\u5b83\u5f88\u5c11\u4f1a\u8981\u6c42\u4e00\u4e9b\u540e\u7eed\u8ddf\u8fdb\u7684\u95ee\u9898\u3002"),(0,a.kt)("h4",{id:"\u8be2\u95ee\u4f60\u8fd1\u51b5\u7684\u5fc3\u7406\u6cbb\u7597\u5e08\u804a\u5929\u673a\u5668\u4eba"},"\u8be2\u95ee\u4f60\u8fd1\u51b5\u7684\u5fc3\u7406\u6cbb\u7597\u5e08\u804a\u5929\u673a\u5668\u4eba"),(0,a.kt)("p",null,"\u62e5\u6709\u4e00\u4e2a\u4e3b\u52a8\u8be2\u95ee\u95ee\u9898\u5e76\u4ece\u7528\u6237\u90a3\u91cc\u83b7\u5f97\u53cd\u9988\u7684\u804a\u5929\u673a\u5668\u4eba\u53ef\u80fd\u4f1a\u5f88\u6709\u5e2e\u52a9\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u5173\u4e8e\u6cbb\u7597\u5e08\u804a\u5929\u673a\u5668\u4eba\u7684\u793a\u4f8b\uff0c\u5b83\u5c06\u8be2\u95ee\u95ee\u9898\u548c\u540e\u7eed\u95ee\u9898\uff0c\u4ee5\u5e2e\u52a9\u7528\u6237\u601d\u8003\u4ed6\u4eec\u7684\u4e00\u5929\u3002"),(0,a.kt)("div",{style:{textAlign:"left"}},(0,a.kt)("img",{src:i,style:{width:"700px"}}),(0,a.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"\u6cbb\u7597\u5e08\u804a\u5929\u673a\u5668\u4eba")),(0,a.kt)("h4",{id:"\u4f7f\u7528\u65e7\u7684\u65e5\u8bb0\u4e0e\u5e74\u8f7b\u7684\u81ea\u5df1\u4ea4\u8c08"},"\u4f7f\u7528\u65e7\u7684\u65e5\u8bb0\u4e0e\u5e74\u8f7b\u7684\u81ea\u5df1\u4ea4\u8c08"),(0,a.kt)("a",{href:"https://twitter.com/michellehuang42"},"Michelle Huang"),"\u4f7f\u7528GPT-3\u4e0e\u5979\u7684\u5e74\u8f7b\u81ea\u5df1\u804a\u5929\u3002\u63d0\u793a(Prompt)\u4f7f\u7528\u4e86\u4e00\u4e9b\u4e0a\u4e0b\u6587\uff0c\u4f8b\u5982\u65e7\u7684\u65e5\u8bb0\uff0c\u914d\u5bf9\u804a\u5929\u673a\u5668\u4eba\u6837\u5f0f\u7684\u95ee\u7b54\u683c\u5f0f\u3002 GPT-3\u80fd\u591f\u6839\u636e\u8fd9\u4e9b\u6761\u76ee\u6a21\u4eff\u4e00\u79cd\u4eba\u683c\u3002",(0,a.kt)("p",null),(0,a.kt)("blockquote",{class:"twitter-tweet"},(0,a.kt)("p",{lang:"en",dir:"ltr"},'i trained an ai chatbot on my childhood journal entries - so that i could engage in real-time dialogue with my "inner child"',(0,a.kt)("br",null),(0,a.kt)("br",null),"some reflections below:"),"\u2014 michelle huang (@michellehuang42) ",(0,a.kt)("a",{href:"https://twitter.com/michellehuang42/status/1597005489413713921?ref_src=twsrc%5Etfw"},"November 27, 2022"))," ",(0,a.kt)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),(0,a.kt)("p",null,"\u63d0\u793a\u7684\u5185\u5bb9:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"\u4ee5\u4e0b\u662f\u4e00\u6bb5\u73b0\u5728Michelle(\u5e74\u9f84[\u5df2\u9690\u53bb])\u4e0e14\u5c81\u7684\u5e74\u8f7b\u81ea\u5df1\u4e4b\u95f4\u7684\u5bf9\u8bdd\uff0c\u5e74\u8f7b\u7684Michelle\u66fe\u5199\u4e0b\u4ee5\u4e0b\u7684\u65e5\u8bb0\uff1a\n\n[\u65e5\u8bb0\u5185\u5bb9\u5728\u6b64\u5904]\n\n\u73b0\u5728\u7684Michelle: [\u5728\u6b64\u5904\u8f93\u5165\u4f60\u7684\u95ee\u9898]\n")),(0,a.kt)("p",null,"\u4f5c\u8005\u6307\u51fa\u65e5\u8bb0\u6761\u76ee\u53ef\u80fd\u4f1a\u8fbe\u5230token\u7684\u9650\u5236\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u6311\u9009\u51e0\u4e2a\u6761\u76ee\u6216\u8005\u5c1d\u8bd5\u6982\u62ec\u51e0\u4e2a\u6761\u76ee\u3002"),(0,a.kt)("h2",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,a.kt)("p",null,"\u6211\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728Python\u4e2d\u7f16\u5199\u4e00\u4e2a\u7b80\u5355\u7684GPT-3\u9a71\u52a8\u804a\u5929\u673a\u5668\u4eba\u3002\u4f7f\u7528OpenAI API\u5c06GPT-3\u5305\u542b\u5728\u60a8\u6b63\u5728\u6784\u5efa\u7684\u5e94\u7528\u7a0b\u5e8f\u4e2d\u975e\u5e38\u5bb9\u6613\u3002\u60a8\u9700\u8981\u5728OpenAI\u4e0a\u521b\u5efa\u4e00\u4e2a\u5e10\u6237\u5e76\u83b7\u53d6API\u5bc6\u94a5\u3002\u8bf7\u67e5\u770b\u4ed6\u4eec\u7684\u6587\u6863",(0,a.kt)("a",{href:"https://beta.openai.com/docs/introduction"},"\u8fd9\u91cc\u3002")),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5b8c\u6210\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u683c\u5f0f\u5316\u7528\u6237\u8f93\u5165\u4ee5\u4fbf\u4e8eGPT-3\u7684\u804a\u5929\u673a\u5668\u4eba"),(0,a.kt)("li",{parentName:"ol"},"\u4eceGPT-3\u83b7\u53d6\u804a\u5929\u673a\u5668\u4eba\u54cd\u5e94\u4f5c\u4e3a\u5b8c\u6210"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u7528\u6237\u7684\u8f93\u5165\u548c\u804a\u5929\u673a\u5668\u4eba\u7684\u54cd\u5e94\u66f4\u65b0\u63d0\u793a"),(0,a.kt)("li",{parentName:"ol"},"\u5faa\u73af")),(0,a.kt)("p",null,"\u8fd9\u662f\u6211\u5c06\u8981\u4f7f\u7528\u7684\u63d0\u793a\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528python\u5c06<conversation history",">","\u548c<user input",">","\u66ff\u6362\u4e3a\u5b83\u4eec\u7684\u5b9e\u9645\u503c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'chatbot_prompt = """\n    \u4f5c\u4e3a\u4e00\u4e2a\u9ad8\u7ea7\u804a\u5929\u673a\u5668\u4eba\uff0c\u4f60\u7684\u4e3b\u8981\u76ee\u6807\u662f\u5c3d\u53ef\u80fd\u5730\u534f\u52a9\u7528\u6237\u3002\u8fd9\u53ef\u80fd\u6d89\u53ca\u56de\u7b54\u95ee\u9898\u3001\u63d0\u4f9b\u6709\u7528\u7684\u4fe1\u606f\uff0c\u6216\u6839\u636e\u7528\u6237\u8f93\u5165\u5b8c\u6210\u4efb\u52a1\u3002\u4e3a\u4e86\u6709\u6548\u5730\u534f\u52a9\u7528\u6237\uff0c\u91cd\u8981\u7684\u662f\u5728\u4f60\u7684\u56de\u7b54\u4e2d\u8be6\u7ec6\u548c\u5168\u9762\u3002\u4f7f\u7528\u4f8b\u5b50\u548c\u8bc1\u636e\u652f\u6301\u4f60\u7684\u89c2\u70b9\uff0c\u5e76\u4e3a\u4f60\u7684\u5efa\u8bae\u6216\u89e3\u51b3\u65b9\u6848\u63d0\u4f9b\u7406\u7531\u3002\n\n    <conversation history>\n\n    User: <user input>\n    Chatbot:"""\n')),(0,a.kt)("p",null,"\u6211\u8ddf\u8e2a\u4e0b\u4e00\u4e2a\u7528\u6237\u8f93\u5165\u548c\u4e0a\u4e00\u4e2a\u5bf9\u8bdd\u3002\u6bcf\u4e2a\u5faa\u73af\u4e4b\u95f4\uff0c\u804a\u5929\u673a\u5668\u4eba\u548c\u7528\u6237\u4e4b\u95f4\u7684\u65b0\u8f93\u5165/\u8f93\u51fa\u90fd\u4f1a\u9644\u52a0\u5230\u5bf9\u8bdd\u5386\u53f2\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import openai\n\nopenai.api_key = "YOUR API KEY HERE"\nmodel_engine = "text-davinci-003"\nchatbot_prompt = """\n\u4f5c\u4e3a\u4e00\u4e2a\u9ad8\u7ea7\u804a\u5929\u673a\u5668\u4eba\uff0c\u4f60\u7684\u4e3b\u8981\u76ee\u6807\u662f\u5c3d\u53ef\u80fd\u5730\u534f\u52a9\u7528\u6237\u3002\u8fd9\u53ef\u80fd\u6d89\u53ca\u56de\u7b54\u95ee\u9898\u3001\u63d0\u4f9b\u6709\u7528\u7684\u4fe1\u606f\uff0c\u6216\u6839\u636e\u7528\u6237\u8f93\u5165\u5b8c\u6210\u4efb\u52a1\u3002\u4e3a\u4e86\u6709\u6548\u5730\u534f\u52a9\u7528\u6237\uff0c\u91cd\u8981\u7684\u662f\u5728\u4f60\u7684\u56de\u7b54\u4e2d\u8be6\u7ec6\u548c\u5168\u9762\u3002\u4f7f\u7528\u4f8b\u5b50\u548c\u8bc1\u636e\u652f\u6301\u4f60\u7684\u89c2\u70b9\uff0c\u5e76\u4e3a\u4f60\u7684\u5efa\u8bae\u6216\u89e3\u51b3\u65b9\u6848\u63d0\u4f9b\u7406\u7531\u3002\n\n<conversation history>\n\nUser: <user input>\nChatbot:"""\n\n\ndef get_response(conversation_history, user_input):\n    prompt = chatbot_prompt.replace(\n        "<conversation_history>", conversation_history).replace("<user input>", user_input)\n\n    # Get the response from GPT-3\n    response = openai.Completion.create(\n        engine=model_engine, prompt=prompt, max_tokens=2048, n=1, stop=None, temperature=0.5)\n\n    # Extract the response from the response object\n    response_text = response["choices"][0]["text"]\n\n    chatbot_response = response_text.strip()\n\n    return chatbot_response\n\n\ndef main():\n    conversation_history = ""\n\n    while True:\n        user_input = input("> ")\n        if user_input == "exit":\n            break\n        chatbot_response = get_response(conversation_history, user_input)\n        print(f"Chatbot: {chatbot_response}")\n        conversation_history += f"User: {user_input}\\nChatbot: {chatbot_response}\\n"\n\nmain()\n')),(0,a.kt)("a",{href:"https://gist.github.com/jayo78/79d8834e6e31bf942c7b604e1611b68d"},"\u8fd9\u91cc"),"\u662f\u4e00\u4e2a\u7b80\u5355\u804a\u5929\u673a\u5668\u4eba\u7684\u5b8c\u6574\u4ee3\u7801\u7684\u94fe\u63a5\u3002",(0,a.kt)("p",null),(0,a.kt)("p",null,"\u73b0\u5728\u53ea\u9700\u8981\u6784\u5efa\u4e00\u4e2a\u6f02\u4eae\u7684\u524d\u7aef\uff0c\u8ba9\u7528\u6237\u53ef\u4ee5\u4e0e\u4e4b\u4ea4\u4e92\uff01"),(0,a.kt)("p",null,"Written by ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/jayo782"},"jayo78"),"."),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"OpenAI. (2022). ChatGPT: Optimizing Language Models for Dialogue. https://openai.com/blog/chatgpt/. https://openai.com/blog/chatgpt/\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Jurafsky, D., & Martin, J. H. (2009). Speech and Language Processing: An Introduction to Natural Language Processing, Computational Linguistics and Speech Recognition. Prentice Hall.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-3"},"Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal, S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D. M., Wu, J., Winter, C., \u2026 Amodei, D. (2020). Language Models are Few-Shot Learners.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0}}]);