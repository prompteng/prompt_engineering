/*! For license information please see c4f5d8e4.7f175e66.js.LICENSE.txt */
(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[4195],{49432:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var n=r(67294),a=(r(73935),r(86010)),c=r(39960),l=r(52263),i=r(92863),o=r(87462),s=r(10933);const m=[{title:"Get Started Quickly",Svg:r(90974).Z,description:n.createElement(n.Fragment,null,"Start coding in minutes")},{title:"Focus on your use case",Svg:r(29960).Z,description:n.createElement(n.Fragment,null,"Spend less time on technical part of LLM")},{title:"Learn from Pro",Svg:r(33917).Z,description:n.createElement(n.Fragment,null,"Learn advanced prompt engineering")}];function u(e){let{Svg:t,title:r,description:c}=e;return n.createElement("div",{className:(0,a.Z)("col col--4")},n.createElement("center",null,n.createElement("div",{className:"text--center"},n.createElement("a",{href:"docs/intro"},n.createElement("img",{src:t,alt:"img",width:"251px",style:{alignSelf:"center",borderRadius:"1rem"}}))),n.createElement("div",{className:"text--center padding-horiz--md"},n.createElement("h3",{className:"margin-vert--sm"},r),n.createElement("p",null,c))))}function d(){return n.createElement("section",{className:s.Z.features},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},m.map(((e,t)=>n.createElement(u,(0,o.Z)({key:t},e)))))))}r(29512);const p={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",mytitle:"mytitle_UWOK",discord:"discord_OKv4"};function f(){const{siteConfig:e}=(0,l.Z)();return n.createElement("header",{className:(0,a.Z)(" hero--primary",p.heroBanner)},n.createElement("div",{className:"container"},n.createElement("h1",{className:p.mytitle},e.title),n.createElement("p",{className:"hero__subtitle",style:{paddingBottom:"20px"}},e.tagline),n.createElement("div",{className:p.buttons},n.createElement("div",null,n.createElement(c.Z,{className:"button button--primary button--lg",to:"/docs/intro"},"Start Prompt Engineering"))),n.createElement("br",null),n.createElement("div",{className:p.buttons},n.createElement("div",null,n.createElement(c.Z,{className:"button button--primary button--lg",to:"/consulting"},"Get Consulting Help")))))}function g(){const{siteConfig:e}=(0,l.Z)();return n.createElement(i.Z,{title:`${e.title}`,description:"Learn Prompt Engineering"},n.createElement(f,null),n.createElement("main",null,n.createElement("div",{class:"text--center padding-horiz--md"}),n.createElement(d,null),n.createElement("div",{class:"text--center padding-horiz--md"},n.createElement("hr",{class:"bg--secondary"}),n.createElement("h1",{class:"margin-vert--xl"},"Learning videos on Prompt Engineering"),n.createElement("div",{className:"container",style:{marginBottom:"20px"}},n.createElement("div",{className:"row"},n.createElement("div",{className:(0,a.Z)("col col--6")},n.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/HGDxu3kPErs",title:"Advanced ChatGPT Prompt Tutorial",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),n.createElement("div",{className:(0,a.Z)("col col--6")},n.createElement("iframe",{width:"560",height:"315",style:{maxWidth:"calc(100vw - 4rem)"},src:"https://www.youtube.com/embed/_v_fgW2SkkQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),n.createElement("div",{className:(0,a.Z)("col col--6")},n.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/nE2skSRWTTs",title:"Getting Started with GPT-3 vs. Open Source LLMs - LangChain #1",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})),n.createElement("div",{className:(0,a.Z)("col col--6")},n.createElement("iframe",{width:"560",height:"315",style:{maxWidth:"calc(100vw - 4rem)"},src:"https://www.youtube.com/embed/zaYTXQFR0_s",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))),n.createElement("div",{className:"row"}))))}},10933:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n={features:"features_t9lD",featureSvg:"featureSvg_GfXr"}},29512:(e,t,r)=>{"use strict";r(67294)},5277:(e,t,r)=>{var n,a,c;c=function(){var e,t,r=document,n=r.getElementsByTagName("head")[0],a=!1,c="push",l="readyState",i="onreadystatechange",o={},s={},m={},u={};function d(e,t){for(var r=0,n=e.length;r<n;++r)if(!t(e[r]))return a;return 1}function p(e,t){d(e,(function(e){return t(e),1}))}function f(t,r,n){t=t[c]?t:[t];var a=r&&r.call,l=a?r:n,i=a?t.join(""):r,h=t.length;function E(e){return e.call?e():o[e]}function v(){if(!--h)for(var e in o[i]=1,l&&l(),m)d(e.split("|"),E)&&!p(m[e],E)&&(m[e]=[])}return setTimeout((function(){p(t,(function t(r,n){return null===r?v():(n||/^https?:\/\//.test(r)||!e||(r=-1===r.indexOf(".js")?e+r+".js":e+r),u[r]?(i&&(s[i]=1),2==u[r]?v():setTimeout((function(){t(r,!0)}),0)):(u[r]=1,i&&(s[i]=1),void g(r,v)))}))}),0),f}function g(e,a){var c,o=r.createElement("script");o.onload=o.onerror=o[i]=function(){o[l]&&!/^c|loade/.test(o[l])||c||(o.onload=o[i]=null,c=1,u[e]=2,a())},o.async=1,o.src=t?e+(-1===e.indexOf("?")?"?":"&")+t:e,n.insertBefore(o,n.lastChild)}return f.get=g,f.order=function(e,t,r){!function n(a){a=e.shift(),e.length?f(a,n):f(a,t,r)}()},f.path=function(t){e=t},f.urlArgs=function(e){t=e},f.ready=function(e,t,r){e=e[c]?e:[e];var n,a=[];return!p(e,(function(e){o[e]||a[c](e)}))&&d(e,(function(e){return o[e]}))?t():(n=e.join("|"),m[n]=m[n]||[],m[n][c](t),r&&r(a)),f},f.done=function(e){f([null],e)},f},e.exports?e.exports=c():void 0===(a="function"==typeof(n=c)?n.call(t,r,t,e):n)||(e.exports=a)},90974:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/ai-69ae8f54e3bb9b9211a4f432f3523635.jpg"},29960:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/brain-525203b3b7b4f5dfe0c07d2e16ab0255.png"},33917:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/pro-1406fd2b0d855f56a23ec79a83220415.png"}}]);