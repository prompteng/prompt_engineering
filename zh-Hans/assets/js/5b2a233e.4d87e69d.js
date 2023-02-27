"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[9863],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,p=t.originalType,i=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=u(n),g=o,k=c["".concat(i,".").concat(g)]||c[g]||m[g]||p;return n?r.createElement(k,a(a({ref:e},s),{},{components:n})):r.createElement(k,a({ref:e},s))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var p=n.length,a=new Array(p);a[0]=g;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[c]="string"==typeof t?t:o,a[1]=l;for(var u=2;u<p;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},54390:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const p={sidebar_position:1},a="\u6b22\u8fce",l={unversionedId:"intro",id:"intro",title:"\u6b22\u8fce",description:"\u6b22\u8fce\u6765\u5230\u63d0\u793a\u5de5\u7a0b\u8bfe\u7a0b\uff01",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/intro",permalink:"/zh-Hans/docs/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"\ud83d\ude03 Basics",permalink:"/zh-Hans/docs/category/-basics"}},i={},u=[{value:"\u672c\u8bfe\u7a0b\u552f\u4e00\u4e14\u6700\u91cd\u8981\u7684\u90e8\u5206\u662f\u4f60\u7684\u53cd\u9988\uff01",id:"\u672c\u8bfe\u7a0b\u552f\u4e00\u4e14\u6700\u91cd\u8981\u7684\u90e8\u5206\u662f\u4f60\u7684\u53cd\u9988",level:2},{value:"\u8bfe\u7a0b\u54f2\u5b66",id:"\u8bfe\u7a0b\u54f2\u5b66",level:2},{value:"\u5982\u4f55\u9605\u8bfb",id:"\u5982\u4f55\u9605\u8bfb",level:2},{value:"\u7ae0\u8282",id:"\u7ae0\u8282",level:2}],s={toc:u},c="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(c,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6b22\u8fce"},"\u6b22\u8fce"),(0,o.kt)("p",null,"\u6b22\u8fce\u6765\u5230\u63d0\u793a\u5de5\u7a0b\u8bfe\u7a0b\uff01"),(0,o.kt)("p",null,"\u6211\u4f1a\u5c06\u63d0\u793a\u5de5\u7a0b\uff08prompt engineering, PE\uff09\u4ecb\u7ecd\u4e3a\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u5982\u4f55\u540c\u4eba\u5de5\u667a\u80fd\u4ea4\u6d41\uff0c\u5e76\u5f97\u5230\u4f60\u8981\u7684\u7ed3\u679c"),"\u3002"),(0,o.kt)("p",null,"\u968f\u7740\u6700\u8fd1\u4eba\u5de5\u667a\u80fd\u7684\u4e0d\u65ad\u8fdb\u6b65\uff0c\u63d0\u793a\u5de5\u7a0b\u8fd9\u9879\u6280\u80fd\u53d8\u5f97\u8d8a\u6765\u8d8a\u91cd\u8981\u3002\u672c\u8bfe\u7a0b\u4f1a\u805a\u7126\u4e8e\u5982\u4f55\u4f7f\u7528\u63d0\u793a\u5de5\u7a0b\u3002\u4f60\u4e0d\u9700\u8981\u5f88\u591a\u673a\u5668\u5b66\u4e60\u76f8\u5173\u7684\u77e5\u8bc6\u3002\u4f46\u5982\u679c\u4f60\u5b8c\u5168\u4e0d\u77e5\u9053\u4e0a\u9762\u7684\u5185\u5bb9\u662f\u4ec0\u4e48\u610f\u601d\uff0c\u53ef\u4ee5\u5728\u57fa\u7840\u90e8\u5206\u770b\u5230\u4e00\u4e9b\u4ecb\u7ecd\u3002"),(0,o.kt)("h2",{id:"\u672c\u8bfe\u7a0b\u552f\u4e00\u4e14\u6700\u91cd\u8981\u7684\u90e8\u5206\u662f\u4f60\u7684\u53cd\u9988"},"\u672c\u8bfe\u7a0b\u552f\u4e00\u4e14\u6700\u91cd\u8981\u7684\u90e8\u5206\u662f\u4f60\u7684\u53cd\u9988\uff01"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4efb\u4f55\u95ee\u9898\u3001\u8bc4\u8bba\u6216\u8005\u5efa\u8bae\uff0c\u53ef\u4ee5\u63d0\u51fa\u4e00\u4e2a",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"\u95ee\u9898")),"\uff0c\u6216\u8005\u53d1\u90ae\u4ef6\u7ed9\u6211\uff0c\u90ae\u7bb1\u5730\u5740\u662f",(0,o.kt)("a",{parentName:"p",href:"mailto:promptengineering11@gmail.com"},"promptengineering11@gmail.com"),"\uff0c"),(0,o.kt)("p",null,"\u5373\u4f7f\u662f\u6700\u5c0f\u7684\u53cd\u9988\u4e5f\u5f88\u6709\u4ef7\u503c\uff01"),(0,o.kt)("h2",{id:"\u8bfe\u7a0b\u54f2\u5b66"},"\u8bfe\u7a0b\u54f2\u5b66"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5feb\u901f\u8fed\u4ee3"),"\uff1a\u56e0\u4e3a\u63d0\u793a\u5de5\u7a0b\u7684\u5185\u5bb9\u65e5\u65b0\u6708\u5f02\uff0c\u6240\u4ee5\u6211\u4f1a\u7ecf\u5e38\u66f4\u65b0\u672c\u8bfe\u7a0b\uff0c\u7528\u77ed\u6587\u7ae0\u6765\u4ecb\u7ecd\u65b0\u6280\u672f\u3002\u8ba9\u6211\u77e5\u9053\u4f60\u66f4\u60f3\u4e86\u89e3\u4ec0\u4e48\u5185\u5bb9\u3002"),(0,o.kt)("p",null,"\u8fd9\u5176\u4e2d\u5305\u62ec",(0,o.kt)("strong",{parentName:"p"},"\u9519\u8bef\u8fed\u4ee3"),"\u3002\u5982\u679c\u4f60\u770b\u5230\u4e86\u4e00\u4e9b\u4f60\u4e0d\u592a\u7406\u89e3\u7684\u5185\u5bb9\uff0c\u5373\u4f7f\u662f\u5f88\u5c0f\u7684\uff0c\u4e5f\u662f\u6211\u7684\u95ee\u9898\u3002",(0,o.kt)("strong",{parentName:"p"},"\u8bf7\u63d0\u51fa\u4e00\u4e2a",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/trigaten/Learn_Prompting/issues/new/choose"},"\u95ee\u9898"),"\uff01")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5173\u6ce8\u5b9e\u8df5"),"\uff1a\u6211\u4f1a\u805a\u7126\u4e8e\u5e94\u7528\u90e8\u5206\uff0c\u7279\u522b\u662f\u4e00\u4e9b\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7684\u6280\u5de7\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5c3d\u65e9\u6dfb\u52a0\u6848\u4f8b"),"\uff1a\u6211\u4f1a\u5c3d\u65e9\u5728\u6587\u7ae0\u4e2d\u6dfb\u52a0\u4f8b\u5b50\uff0c\u8fd9\u6837\u4f60\u4fbf\u53ef\u4ee5\u66f4\u65e9\u5730\u611f\u53d7\u5230\u76f8\u5173\u6280\u672f\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6709\u65f6\u95f4\u7684\u8bdd\uff0c\u6211\u4f1a\u518d\u601d\u8003\u8fd9\u4e00\u90e8\u5206\u5185\u5bb9 \ud83d\ude0a\u3002"),(0,o.kt)("h2",{id:"\u5982\u4f55\u9605\u8bfb"},"\u5982\u4f55\u9605\u8bfb"),(0,o.kt)("p",null,"\u4e0d\u7528\u6309\u7167\u987a\u5e8f\u9605\u8bfb\u6240\u6709\u7ae0\u8282\uff0c\u4f60\u53ef\u4ee5\u6311\u81ea\u5df1\u611f\u5174\u8da3\u7684\u90e8\u5206\uff01"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u662f\u4e00\u4e2a\u65b0\u624b\uff0c\u53ef\u4ee5\u5148\u8bfb\u4e0b\u9762\u5185\u5bb9\uff0c\u7136\u540e\u4ece\u57fa\u7840\u5f00\u59cb\u3002\u5982\u679c\u4f60\u6709\u4e00\u5b9a\u7684\u57fa\u7840\uff0c\u53ef\u4ee5\u76f4\u63a5\u4ece\u4e2d\u7ea7\u90e8\u5206\u5f00\u59cb\u3002"),(0,o.kt)("p",null,"\u6587\u7ae0\u6709\u4e0d\u540c\u7684\u96be\u5ea6\u7b49\u7ea7\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("p",null,"\ud83d\udfe2 \u8f7b\u677e\uff1a\u65e0\u9700\u7f16\u7a0b\u57fa\u7840"),(0,o.kt)("p",null,"\ud83d\udfe1 \u7b80\u5355\uff1a\u53ea\u9700\u7b80\u5355\u7f16\u7a0b\u57fa\u7840\uff0c\u4f46\u4e0d\u9700\u8981\u4e13\u4e1a\u77e5\u8bc6"),(0,o.kt)("p",null,"\ud83d\udd34 \u4e2d\u7ea7\uff1a\u9700\u8981\u7f16\u7a0b\u77e5\u8bc6\u548c\u4e00\u4e9b\u4e13\u4e1a\u77e5\u8bc6\uff08\u4f8b\u5982\u5982\u4f55\u8ba1\u7b97\u5bf9\u6570\u6982\u7387\uff09"),(0,o.kt)("p",null,"\ud83d\udfe3 \u56f0\u96be\uff1a\u9700\u8981\u7f16\u7a0b\u77e5\u8bc6\u548c\u4e00\u4e9b\u9ad8\u7ea7\u7684\u4e13\u4e1a\u77e5\u8bc6\uff08\u4f8b\u5982\u5f3a\u5316\u5b66\u4e60\u76f8\u5173\u7684\u5185\u5bb9\uff09"),(0,o.kt)("p",null,"\u63d0\u793a\uff1a\u867d\u7136\u5bf9\u4e8e \ud83d\udd34\ud83d\udfe3 \u90e8\u5206\u6765\u8bf4\uff0c\u4e13\u4e1a\u77e5\u8bc6\u662f\u6709\u5e2e\u52a9\u7684\uff0c\u4f46\u5728\u6ca1\u6709\u4e13\u4e1a\u77e5\u8bc6\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u8bfb\u61c2\u6587\u7ae0\u3002"),(0,o.kt)("h2",{id:"\u7ae0\u8282"},"\u7ae0\u8282"),(0,o.kt)("p",null,"\u6bcf\u7ae0\u7684\u5927\u6982\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u57fa\u7840"),"\uff1a\u4ec0\u4e48\u662f\u63d0\u793a\u5de5\u7a0b\u548c\u4e00\u4e9b\u63d0\u793a\u5de5\u7a0b\u7684\u7b80\u5355\u6280\u5de7\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4e2d\u7ea7"),"\uff1a\u7a0d\u5fae\u590d\u6742\u4e00\u4e9b\u7684\u63d0\u793a\u5de5\u7a0b\u6280\u672f\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u63d0\u793a"),"\uff1a\u7531\u793e\u533a\u6210\u5458\u7f16\u5199\u7684\u4e00\u4e9b\u5b8c\u6574\u63d0\u793a\u5de5\u7a0b\u6848\u4f8b\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8fdb\u9636\u5e94\u7528"),"\uff1a\u4e00\u4e9b\u975e\u5e38\u5f3a\u5927\u4f46\u66f4\u8fdb\u9636\u7684\u63d0\u793a\u5de5\u7a0b\u5e94\u7528\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53ef\u9760\u6027"),"\uff1a\u5982\u4f55\u4f7f\u8bed\u8a00\u6a21\u578b\uff08LLMs\uff09\u66f4\u52a0\u53ef\u9760\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u63d0\u793a\u5de5\u7a0b\u5728\u56fe\u50cf\u65b9\u9762\u7684\u5e94\u7528"),": \u7528\u4e8e\u6587\u672c\u5230\u56fe\u50cf\u6a21\u578b\uff08\u5982 DALLE \u548c Stable Diffusion\uff09\u7684\u63d0\u793a\u5de5\u7a0b\uff01"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u63d0\u793a\u6ce8\u5165"),"\uff1a\u7528\u4e8e\u63d0\u793a\u5de5\u7a0b\u7684\u9ed1\u5ba2\u653b\u51fb\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u63d0\u793a\u5de5\u5177"),": \u4e0d\u540c\u7684\u63d0\u793a\u5de5\u7a0b\u7684\u5de5\u5177\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u63d0\u793a\u5fae\u8c03"),"\uff1a\u7528\u68af\u5ea6\u5fae\u8c03\u63d0\u793a\u3002"))}m.isMDXComponent=!0}}]);