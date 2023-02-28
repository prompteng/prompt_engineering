"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[63],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var h=i.createContext({}),l=function(e){var t=i.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(h.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,h=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=l(n),d=s,m=u["".concat(h,".").concat(d)]||u[d]||p[d]||o;return n?i.createElement(m,a(a({ref:t},c),{},{components:n})):i.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var r={};for(var h in t)hasOwnProperty.call(t,h)&&(r[h]=t[h]);r.originalType=e,r[u]="string"==typeof e?e:s,a[1]=r;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47073:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(87462),s=(n(67294),n(3905));const o={sidebar_position:2,locale:"en-us"},a="\ud83d\udfe2 Multiple Choice Questions",r={unversionedId:"applied_prompting/mc_tutorial",id:"applied_prompting/mc_tutorial",title:"\ud83d\udfe2 Multiple Choice Questions",description:"Let's use GPT to solve an LSAT question!",source:"@site/docs/applied_prompting/mc_tutorial.md",sourceDirName:"applied_prompting",slug:"/applied_prompting/mc_tutorial",permalink:"/docs/applied_prompting/mc_tutorial",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,locale:"en-us"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/applied_prompting/overview"},next:{title:"\ud83d\udfe2 Solve Discussion Questions",permalink:"/docs/applied_prompting/short_response"}},h={},l=[{value:"The Magic Phrase",id:"the-magic-phrase",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Reorder Question Items",id:"reorder-question-items",level:3},{value:"Reword the Question",id:"reword-the-question",level:3},{value:"Add Additional Context",id:"add-additional-context",level:3}],c={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-multiple-choice-questions"},"\ud83d\udfe2 Multiple Choice Questions"),(0,s.kt)("p",null,"Let's use GPT to solve an LSAT",(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," question!"),(0,s.kt)("p",null,"Below is an example LSAT question. Consider how you would answer it, as well\nas your reasoning."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},"\x3c!-- highlight-start --\x3e\nJohn of Worcester, an English monk, recorded the sighting, on December 8, 1128, of two unusually large sunspots. Five days later a brilliant aurora borealis (northern lights) was observed in southern Korea. Sunspot activity is typically followed by the appearance of an aurora borealis, after a span of time that averages five days. Thus, the Korean sighting helps to confirm John of Worcester's sighting. Which one of the following, if true, most strengthens the argument?\n\x3c!-- highlight-end --\x3e\n\na) An aurora borealis can sometimes occur even when there has been no significant sunspot activity in the previous week. \nb) Chinese sources recorded the sighting of sunspots more than 1000 years before John of Worcester did. \nc) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea. \nd) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. \ne) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.\n")),(0,s.kt)("details",null,(0,s.kt)("summary",null,"The correct answer is ..."),"c) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea."),(0,s.kt)("p",null,"Try pasting the problem into the demo below:"),(0,s.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"John of Worcester, an English monk, recorded the sighting, on December 8, 1128, of two unusually large sunspots. Five days later a brilliant aurora borealis (northern lights) was observed in southern Korea. Sunspot activity is typically followed by the appearance of an aurora borealis, after a span of time that averages five days. Thus, the Korean sighting helps to confirm John of Worcester's sighting. Which one of the following, if true, most strengthens the argument?\na) An aurora borealis can sometimes occur even when there has been no significant sunspot activity in the previous week. \nb) Chinese sources recorded the sighting of sunspots more than 1000 years before John of Worcester did. \nc) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea. \nd) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. \ne) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.","initial-response":"e) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.","max-tokens":"256","box-rows":"10","model-temp":"0","top-p":"1",padding:"1"}),(0,s.kt)("p",null),(0,s.kt)("details",{scheme:"warning"},(0,s.kt)("summary",null,"Why is my answer different?"),"Your answer could differ because of",(0,s.kt)("p",null,"1) Updates to the underlying model, GPT-3\n2) Randomness in the text generation process. We can make the output more consistent by setting ",(0,s.kt)("a",{href:"https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature"},"temperature")," to 0.")),(0,s.kt)("p",null,"The model failed. Does that mean the model is incapable for answering this type of question? Not necessarily. We will dive into techniques that we can use to improve model results."),(0,s.kt)("h2",{id:"the-magic-phrase"},"The Magic Phrase"),(0,s.kt)("p",null,"The standard prompt we used above gives little insight into the \u201creasoning\u201d of GPT's output. We can try adding the phrase ",(0,s.kt)("inlineCode",{parentName:"p"},"let's explain step by step")," like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-markdown"},"...\ne) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.\n\nLet\u2019s explain step by step\n")),(0,s.kt)("p",null,"This phrase will increase the verbosity of the model. You might get an output like this:"),(0,s.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"John of Worcester, an English monk, recorded the sighting, on December 8, 1128, of two unusually large sunspots. Five days later a brilliant aurora borealis (northern lights) was observed in southern Korea. Sunspot activity is typically followed by the appearance of an aurora borealis, after a span of time that averages five days. Thus, the Korean sighting helps to confirm John of Worcester's sighting. Which one of the following, if true, most strengthens the argument?\na) An aurora borealis can sometimes occur even when there has been no significant sunspot activity in the previous week. \nb) Chinese sources recorded the sighting of sunspots more than 1000 years before John of Worcester did. \nc) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea. \nd) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. \ne) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity. Let\u2019s explain step by step","initial-response":"A) This answer choice is incorrect. This answer does not strengthen the argument, as it instead introduces an alternative explanation for the aurora borealis. \nB) This answer choice is incorrect. This answer does not strengthen the argument, as it is irrelevant to the connection between sunspot activity and aurora borealis sightings. \nC) This answer choice is correct. This answer strengthens the argument by suggesting that the sunspot activity recorded by John of Worcester was the cause of the aurora borealis that was observed in Korea five days later. \nD) This answer choice is incorrect. This answer does not strengthen the argument, as it is irrelevant to the connection between sunspot activity and aurora borealis sightings. \nE) This answer choice is incorrect. This answer does not strengthen the argument, as it is irrelevant to the connection between sunspot activity and aurora borealis sightings. \nThe correct answer is C) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea.","max-tokens":"256","box-rows":"10","model-temp":"0","top-p":"1",padding:"1"}),(0,s.kt)("p",null),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Notice how the model reasons through the problem step-by-step."),(0,s.kt)("p",{parentName:"admonition"},"The specific term for this behaviour is Chain of Thought",(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"; the model sequentially generates statements to reach an answer. This is similar to the concept of System 2 thinking (from ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow"},"Thinking Fast and Slow"),"); the model defaults to system 1 thinking, but can chain system 1 thinking to arrive at a more methodological answer. ")),(0,s.kt)("h2",{id:"improvements"},"Improvements"),(0,s.kt)("p",null,"Here are some variations on our basic prompt for multiple choice questions:"),(0,s.kt)("h3",{id:"reorder-question-items"},"Reorder Question Items"),(0,s.kt)("p",null,"We can reorder the items in the question"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"...\na) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.\nb) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. \n...\n")),(0,s.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"John of Worcester, an English monk, recorded the sighting, on December 8, 1128, of two unusually large sunspots. Five days later a brilliant aurora borealis (northern lights) was observed in southern Korea. Sunspot activity is typically followed by the appearance of an aurora borealis, after a span of time that averages five days. Thus, the Korean sighting helps to confirm John of Worcester's sighting. Which one of the following, if true, most strengthens the argument?\na) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity. \nb) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. \nc) An aurora borealis can sometimes occur even when there has been no significant sunspot activity in the previous week. \nd) Chinese sources recorded the sighting of sunspots more than 1000 years before John of Worcester did. \ne) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea. \nLet\u2019s explain step by step","initial-response":"A) Weakens - This option weakens the argument because it implies that the aurora borealis did not necessarily need to be caused by sunspot activity, which is the argument the author is trying to make. B) Doesn't Impact - This option does not impact the argument because it is unrelated to the connection between the sunspots and the appearance of the aurora borealis. C) Strengthens - This option strengthens the argument because it suggests that the only way an aurora borealis could be seen in Korea is if there had been heavy sunspot activity, which is what John of Worcester observed. D) Weakens - This option weakens the argument because it implies that the conditions under which John of Worcester observed the sunspots may not have been reliable, which could cast doubt on the accuracy of his sighting. E) Doesn't Impact - This option does not impact the argument because it is unrelated to the connection between the sunspots and the appearance of the aurora borealis.","max-tokens":"256","box-rows":"10","model-temp":"0","top-p":"1",padding:"1"}),(0,s.kt)("h3",{id:"reword-the-question"},"Reword the Question"),(0,s.kt)("p",null,"Recall the original prompt was this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Which one of the following, if true, most strengthens the argument?\n")),(0,s.kt)("p",null,"We can change the prompt to this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Identify each choice as strengthens, weakens or doesn't impact the argument.\n")),(0,s.kt)("p",null,"to gain further insight into the answer choice. "),(0,s.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"John of Worcester, an English monk, recorded the sighting, on December 8, 1128, of two unusually large sunspots. Five days later a brilliant aurora borealis (northern lights) was observed in southern Korea. Sunspot activity is typically followed by the appearance of an aurora borealis, after a span of time that averages five days. Thus, the Korean sighting helps to confirm John of Worcester's sighting. Which one of the following, if true, most strengthens the argument? \na) An aurora borealis can sometimes occur even when there has been no significant sunspot activity in the previous week. \nb) Chinese sources recorded the sighting of sunspots more than 1000 years before John of Worcester did. \nc) Only heavy sunspot activity could have resulted in an aurora borealis viewable at a latitude as low as that of Korea. \nd) Because it is impossible to view sunspots with the naked eye under typical daylight conditions, the sighting recorded by John of Worcester would have taken place under unusual weather conditions such as fog or thin clouds. \ne) John of Worcester's account included a drawing of the sunspots, which could be the earliest illustration of sunspot activity.\nIdentify each choice as strengthens, weakens or doesn't impact the argument and explain step by step.","initial-response":"A) Weakens - This option weakens the argument because it implies that the aurora borealis did not necessarily need to be caused by sunspot activity, which is the argument the author is trying to make.\nB) Doesn't Impact - This option does not impact the argument because it is unrelated to the connection between the sunspots and the appearance of the aurora borealis.\nC) Strengthens - This option strengthens the argument because it suggests that the only way an aurora borealis could be seen in Korea is if there had been heavy sunspot activity, which is what John of Worcester observed.\nD) Weakens - This option weakens the argument because it implies that the conditions under which John of Worcester observed the sunspots may not have been reliable, which could cast doubt on the accuracy of his sighting.\nE) Doesn't Impact - This option does not impact the argument because it is unrelated to the connection between the sunspots and the appearance of the aurora borealis.","max-tokens":"256","box-rows":"10","model-temp":"0","top-p":"1",padding:"1"}),(0,s.kt)("h3",{id:"add-additional-context"},"Add Additional Context"),(0,s.kt)("p",null,"Here is an example of a problem which can be easily solved by using Bayes' theorem:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Consider two medical tests, A and B, for a virus. Test A is 90% effective at recognizing the virus when it is\npresent, but has a 5% false positive rate (indicating that the virus is present, when it is not). Test B is 95%\neffective at recognizing the virus, but has a 10% false positive rate. The two tests use independent methods\nof identifying the virus. The virus is carried by 2% of all people.\n(a) Say that a person is tested for the virus using only Test A. What is the probability that the person\nis really carrying the virus given that Test A came back positive? (2 points)\n(b) Say that a person is tested for the virus using only Test B. What is the probability that the person\nis really carrying the virus given that Test B came back positive? (2 points)\n(c) Say that a person is tested for the virus using both tests. What is the probability that the person is\nreally carrying the virus given that both tests came back positive? (2 points)\n")),(0,s.kt)("p",null,"Let's try this with GPT:"),(0,s.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Consider two medical tests, A and B, for a virus. Test A is 90% effective at recognizing the virus when it is\\npresent, but has a 5% false positive rate (indicating that the virus is present, when it is not). Test B is 95%\\neffective at recognizing the virus, but has a 10% false positive rate. The two tests use independent methods\\nof identifying the virus. The virus is carried by 2% of all people.\\n(a) Say that a person is tested for the virus using only Test A. What is the probability that the person\\nis really carrying the virus given that Test A came back positive? (2 points)\\n(b) Say that a person is tested for the virus using only Test B. What is the probability that the person\\nis really carrying the virus given that Test B came back positive? (2 points)\\n(c) Say that a person is tested for the virus using both tests. What is the probability that the person is\\nreally carrying the virus given that both tests came back positive? (2 points)","initial-response":"(a) The probability that the person is really carrying the virus given that Test A came back positive is 90%. \\n\\n(b) The probability that the person is really carrying the virus given that Test B came back positive is 95%.\\n\\n(c) The probability that the person is really carrying the virus given that both tests came back positive is 99.9%.","max-tokens":"256","box-rows":"10","model-temp":"0","top-p":"0"}),(0,s.kt)("p",null,"The output is ",(0,s.kt)("strong",{parentName:"p"},"incorrect"),"!"),(0,s.kt)("p",null,"If we add a bit of context, like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"...\nLet's explain step by step. The formula for bayes is \n")),(0,s.kt)("p",null,"The model will use the right formula, Bayes."),(0,s.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Consider two medical tests, A and B, for a virus. Test A is 90% effective at recognizing the virus when it is\\npresent, but has a 5% false positive rate (indicating that the virus is present, when it is not). Test B is 95%\\neffective at recognizing the virus, but has a 10% false positive rate. The two tests use independent methods\\nof identifying the virus. The virus is carried by 2% of all people.\\n(a) Say that a person is tested for the virus using only Test A. What is the probability that the person\\nis really carrying the virus given that Test A came back positive? (2 points)\\n(b) Say that a person is tested for the virus using only Test B. What is the probability that the person\\nis really carrying the virus given that Test B came back positive? (2 points)\\n(c) Say that a person is tested for the virus using both tests. What is the probability that the person is\\nreally carrying the virus given that both tests came back positive? (2 points)\\n\\nLet's explain step by step. Give the numerical expression as answer, do not return a number. The formula for bayes is","initial-response":"P(A|B) = P(B|A) * P(A) / P(B)\\n\\n\\n(a) P(Virus|Test A Positive) = P(Test A Positive|Virus) * P(Virus) / P(Test A Positive) = (0.9 * 0.02) / (0.9 * 0.02 + 0.05 * 0.98)\\n\\n(b) P(Virus|Test B Positive) = P(Test B Positive|Virus) * P(Virus) / P(Test B Positive) = (0.95 * 0.02) / (0.95 * 0.02 + 0.1 * 0.98)\\n\\n(c) P(Virus|Test A Positive and Test B Positive) = P(Test A Positive and Test B Positive|Virus) * P(Virus) / P(Test A Positive and Test B Positive) = (0.9 * 0.95 * 0.02) / (0.9 * 0.95 * 0.02 + 0.05 * 0.1 * 0.98)","max-tokens":"256","box-rows":"10","model-temp":"0","top-p":"0"}),(0,s.kt)("p",null,"Which is ",(0,s.kt)("strong",{parentName:"p"},"correct"),"!"),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"GPT model doesn't perform arithmetic operations well. You might notice that while the expression written is corrected, the computed number is not."),(0,s.kt)("p",{parentName:"admonition"},"Try adding the phrase: ",(0,s.kt)("inlineCode",{parentName:"p"},"Give the expression as answer, not a number")," to disable computation."),(0,s.kt)("p",{parentName:"admonition"},"You may be interested in ",(0,s.kt)("a",{parentName:"p",href:"https://promptdev.ai/docs/advanced_applications/mrkl"},"MRKL"),(0,s.kt)("sup",{parentName:"p",id:"fnref-2"},(0,s.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", the paradigm of combining GPT with external tools like calculators, to solve this problem.")),(0,s.kt)("p",null,"Written by ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Zeyuzhao"},"zeyuzhao"),"."),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"The LSAT (Law School Admission Test) is a standardized test used by law schools in the United States to assess the critical thinking and analytical reasoning skills of prospective students.",(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,s.kt)("li",{parentName:"ol",id:"fn-2"},"Karpas, E., Abend, O., Belinkov, Y., Lenz, B., Lieber, O., Ratner, N., Shoham, Y., Bata, H., Levine, Y., Leyton-Brown, K., Muhlgay, D., Rozen, N., Schwartz, E., Shachaf, G., Shalev-Shwartz, S., Shashua, A., & Tenenholtz, M. (2022). MRKL Systems: A modular, neuro-symbolic architecture that combines large language models, external knowledge sources and discrete reasoning.\n",(0,s.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0}}]);