"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[h]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54113:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>h,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const r=n.p+"assets/images/skippy_chatbot-01e93d7bda29d973a0663fc8f9eea57b.png",i=n.p+"assets/images/skippy_chatbot_header-378e21014fb7ee1923ce415b4475290b.png",s=n.p+"assets/images/therapy_chatbot-5c8c653e12e16fc816883ff38f27e9b2.gif",p=n.p+"assets/images/chatgpt_ui_diagram-87b55966a74fe72526d9e2c4b86c6650.png",l={sidebar_position:4},c="\ud83d\udfe2 Build ChatGPT from GPT-3",h={unversionedId:"applied_prompting/build_chatgpt",id:"applied_prompting/build_chatgpt",title:"\ud83d\udfe2 Build ChatGPT from GPT-3",description:"Introduction",source:"@site/docs/applied_prompting/build_chatgpt.md",sourceDirName:"applied_prompting",slug:"/applied_prompting/build_chatgpt",permalink:"/ja/docs/applied_prompting/build_chatgpt",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Solve Discussion Questions",permalink:"/ja/docs/applied_prompting/short_response"},next:{title:"\ud83d\udfe2 Chatbot + Knowledge Base",permalink:"/ja/docs/applied_prompting/build_chatbot_from_kb"}},u={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Motivation",id:"motivation",level:2},{value:"The Prompt",id:"the-prompt",level:2},{value:"Memorization",id:"memorization",level:3},{value:"A Few Examples",id:"a-few-examples",level:3},{value:"Therapy chatbot that asks about your day",id:"therapy-chatbot-that-asks-about-your-day",level:4},{value:"Talk to your younger self using old journal entries",id:"talk-to-your-younger-self-using-old-journal-entries",level:4},{value:"Implementation",id:"implementation",level:2}],m={toc:d},f="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-build-chatgpt-from-gpt-3"},"\ud83d\udfe2 Build ChatGPT from GPT-3"),(0,o.kt)("div",{style:{textAlign:"left"}},(0,o.kt)("img",{src:i,style:{width:"700px"}})),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chat.openai.com/chat"},"ChatGPT")," has blown up in the past month, gaining a million users in just a week. Surprisingly, the underlying model, GPT-3 debuted in 2020 and was released for public access ",(0,o.kt)("a",{href:"https://openai.com/blog/api-no-waitlist/"},"over a year ago!"),"   "),(0,o.kt)("p",null,"For those who don't know, ChatGPT is a new language model from OpenAI that was finetuned from GPT-3 to be optimized for conversation",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". It has a user-friendly chat interface, where you can give input and get a response from an AI assistant. Check it out at ",(0,o.kt)("a",{parentName:"p",href:"https://chat.openai.com/chat"},"chat.openai.com"),". "),(0,o.kt)("p",null,"While the early versions of GPT-3 weren't as advanced as the current GPT-3.5 series, they were still impressive. These models have been available through an API and a ",(0,o.kt)("a",{href:"https://beta.openai.com/playground"},"playground web UI interface")," that lets you tune certain configuration hyperparameters and test prompts. GPT-3 gained significant traction, but it did not approach the virality of ChatGPT. "),(0,o.kt)("p",null,"What makes ChatGPT so successful, compared to GPT-3, is it's accessibility as a straightforward AI assistant for the average person, regardless of their knowledge of data science, language models, or AI.  "),(0,o.kt)("p",null,"In this article, I overview how chatbots like ChatGPT can be implemented using a large language model like GPT-3."),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"This article was written in part because of a tweet by ",(0,o.kt)("a",{href:"https://twitter.com/goodside"},"Riley Goodside"),", noting how ChatGPT could have been implemented."),(0,o.kt)("blockquote",{class:"twitter-tweet"},(0,o.kt)("p",{lang:"en",dir:"ltr"},"How to make your own knock-off ChatGPT using GPT\u20113 (text\u2011davinci\u2011003) \u2014 where you can customize the rules to your needs, and access the resulting chatbot over an API. ",(0,o.kt)("a",{href:"https://t.co/9jHrs91VHW"},"pic.twitter.com/9jHrs91VHW")),"\u2014 Riley Goodside (@goodside) ",(0,o.kt)("a",{href:"https://twitter.com/goodside/status/1607487283782995968?ref_src=twsrc%5Etfw"},"December 26, 2022"))," ",(0,o.kt)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),(0,o.kt)("p",null,"Like other models in the GPT-3.5 series, ChatGPT was trained using ",(0,o.kt)("a",{parentName:"p",href:"https://huggingface.co/blog/rlhf"},"RLHF"),", but much of it's effectiveness comes from using a ",(0,o.kt)("strong",{parentName:"p"},"good prompt"),"."),(0,o.kt)("h2",{id:"the-prompt"},"The Prompt"),(0,o.kt)("div",{style:{textAlign:"left"}},(0,o.kt)("img",{src:r,style:{width:"700px"}}),(0,o.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Full Skippy chatbot prompt from article header")),(0,o.kt)("a",{href:"https://promptdev.ai/docs/basics/prompting"},"Prompting is the process of instructing an AI to do something. ")," As you have probably seen in ChatGPT examples online, you can prompt it to do just about anything. Common use cases are summarizing text, writing content based on a description, or creating things like poems, recipes, and much more.",(0,o.kt)("p",null),(0,o.kt)("p",null,"ChatGPT is both a language model and user interface. The prompt input by a user to the interface is actually inserted into a larger prompt that contains the entire conversation between the user and ChatGPT. This allows the underlying language model to understand the context of the conversation and respond appropriately."),(0,o.kt)("div",{style:{textAlign:"left"}},(0,o.kt)("img",{src:p,style:{width:"600px"}}),(0,o.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Example insertion of user prompt before sending to model")),(0,o.kt)("p",null,"The language model completes the prompt by figuring out what words come next based on probabilities it learned during pre-training",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"."),(0,o.kt)("p",null),(0,o.kt)("p",null,"GPT-3 is able to 'learn' from a simple instruction or a few examples in the prompt. The latter is called few-shot, or in context learning",(0,o.kt)("sup",{parentName:"p",id:"fnref-3"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". In the chatbot prompt above, I create a fictitious chatbot named Skippy, and instruct it to provide responses to users. GPT-3 picks up on the back-and-forth format, ",(0,o.kt)("inlineCode",{parentName:"p"},"USER: {user input}")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SKIPPY: {skippy response}"),'. GPT-3 understands that Skippy is a chatbot and the previous exchanges are a conversation, so that when we provide the next user input, "Skippy" will respond.'),(0,o.kt)("h3",{id:"memorization"},"Memorization"),(0,o.kt)("p",null,"Past exchanges between Skippy and the user get appended to the next prompt. Each time we give more user input and get more chatbot output, the prompt expands to incorporate this new exchange. This is how chatbots like Skippy and ChatGPT can ",(0,o.kt)("strong",{parentName:"p"},"remember previous inputs.")," There is a limit, however, to how much a GPT-3 chatbot can remember."),(0,o.kt)("p",null,"Prompts can get massive after several exchanges, especially if we are using the chatbot to generate long responses like blog posts. Prompts sent to GPT-3 are converted into tokens, which are individual words or parts of them. There is a limit of ",(0,o.kt)("a",{href:"https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them"},"4097 tokens (about 3000 words)")," for the combined prompt and generated response for GPT-3 models, including ChatGPT. "),(0,o.kt)("h3",{id:"a-few-examples"},"A Few Examples"),(0,o.kt)("p",null,"There are many different use cases of chatbot prompts that store previous conversations. ChatGPT is meant to be an all purpose general assistant and in my experience, it rarely asks follow ups."),(0,o.kt)("h4",{id:"therapy-chatbot-that-asks-about-your-day"},"Therapy chatbot that asks about your day"),(0,o.kt)("p",null,"It can be helpful to have a chatbot that actively asks questions and gets feedback from the user. Below is an example therapy chatbot prompt that will ask questions and follow ups to help a user think about their day."),(0,o.kt)("div",{style:{textAlign:"left"}},(0,o.kt)("img",{src:s,style:{width:"700px"}}),(0,o.kt)("p",{style:{color:"gray",fontSize:"12px",fontStyle:"italic"}},"Therapy chatbot prompt")),(0,o.kt)("h4",{id:"talk-to-your-younger-self-using-old-journal-entries"},"Talk to your younger self using old journal entries"),(0,o.kt)("a",{href:"https://twitter.com/michellehuang42"},"Michelle Huang")," used GPT-3 to have a chat with her younger self. The prompt uses some context, in this case old journal entries, paired with a chatbot style back and forth format. GPT-3 is able to mimic a personality based on these entries.",(0,o.kt)("p",null),(0,o.kt)("blockquote",{class:"twitter-tweet"},(0,o.kt)("p",{lang:"en",dir:"ltr"},'i trained an ai chatbot on my childhood journal entries - so that i could engage in real-time dialogue with my "inner child"',(0,o.kt)("br",null),(0,o.kt)("br",null),"some reflections below:"),"\u2014 michelle huang (@michellehuang42) ",(0,o.kt)("a",{href:"https://twitter.com/michellehuang42/status/1597005489413713921?ref_src=twsrc%5Etfw"},"November 27, 2022"))," ",(0,o.kt)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),(0,o.kt)("p",null,"Prompt from the Tweet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"The following is a conversation with Present Michelle (age [redacted]) and Young Michelle (age 14).\n\nYoung Michelle has written the following journal entries:\n[diary entries here]\n\nPresent Michelle: [type your questions here]\n")),(0,o.kt)("p",null,"The author does note that diary entries can reach the token limit. In this case you could pick a select few entries or try to summarize several entries."),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"I will walk through coding a simple GPT-3 powered chatbot in Python. Including GPT-3 in an app you are building is incredibly easy using the OpenAI API. You will need to create an account on OpenAI and get an API key. Check out their docs ",(0,o.kt)("a",{href:"https://beta.openai.com/docs/introduction"},"here.")),(0,o.kt)("p",null,"Overview of what we need to do:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Format user input into a chatbot prompt for GPT-3"),(0,o.kt)("li",{parentName:"ol"},"Get the chatbot response as a completion from GPT-3"),(0,o.kt)("li",{parentName:"ol"},"Update the prompt with both the user's input and the chatbot's response"),(0,o.kt)("li",{parentName:"ol"},"Loop")),(0,o.kt)("p",null,"Here is the prompt I will use. We can use python to replace <conversation history",">"," and <user input",">"," with their actual values."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'chatbot_prompt = """\n    As an advanced chatbot, your primary goal is to assist users to the best of your ability. This may involve answering questions, providing helpful information, or completing tasks based on user input. In order to effectively assist users, it is important to be detailed and thorough in your responses. Use examples and evidence to support your points and justify your recommendations or solutions.\n\n    <conversation history>\n\n    User: <user input>\n    Chatbot:"""\n')),(0,o.kt)("p",null,"I keep track of both the next user input and the previous conversation. New input/output between chatbot and user is appended each loop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import openai\n\nopenai.api_key = "YOUR API KEY HERE"\nmodel_engine = "text-davinci-003"\nchatbot_prompt = """\nAs an advanced chatbot, your primary goal is to assist users to the best of your ability. This may involve answering questions, providing helpful information, or completing tasks based on user input. In order to effectively assist users, it is important to be detailed and thorough in your responses. Use examples and evidence to support your points and justify your recommendations or solutions.\n\n<conversation history>\n\nUser: <user input>\nChatbot:"""\n\n\ndef get_response(conversation_history, user_input):\n    prompt = chatbot_prompt.replace(\n        "<conversation_history>", conversation_history).replace("<user input>", user_input)\n\n    # Get the response from GPT-3\n    response = openai.Completion.create(\n        engine=model_engine, prompt=prompt, max_tokens=2048, n=1, stop=None, temperature=0.5)\n\n    # Extract the response from the response object\n    response_text = response["choices"][0]["text"]\n\n    chatbot_response = response_text.strip()\n\n    return chatbot_response\n\n\ndef main():\n    conversation_history = ""\n\n    while True:\n        user_input = input("> ")\n        if user_input == "exit":\n            break\n        chatbot_response = get_response(conversation_history, user_input)\n        print(f"Chatbot: {chatbot_response}")\n        conversation_history += f"User: {user_input}\\nChatbot: {chatbot_response}\\n"\n\nmain()\n')),(0,o.kt)("a",{href:"https://gist.github.com/jayo78/79d8834e6e31bf942c7b604e1611b68d"},"Here is a link")," to the full code for a simple chatbot.",(0,o.kt)("p",null),(0,o.kt)("p",null,"Now all that's left is to build a nice front-end that users can interact with!"),(0,o.kt)("p",null,"Written by ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/jayo782"},"jayo78"),"."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"OpenAI. (2022). ChatGPT: Optimizing Language Models for Dialogue. https://openai.com/blog/chatgpt/. https://openai.com/blog/chatgpt/\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"Jurafsky, D., & Martin, J. H. (2009). Speech and Language Processing: An Introduction to Natural Language Processing, Computational Linguistics and Speech Recognition. Prentice Hall.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3"},"Brown, T. B., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal, S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D. M., Wu, J., Winter, C., \u2026 Amodei, D. (2020). Language Models are Few-Shot Learners.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}g.isMDXComponent=!0}}]);