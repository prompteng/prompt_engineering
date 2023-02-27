"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5498],{66611:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>h});var n=o(87462),i=(o(67294),o(3905));const a=o.p+"assets/images/least_to_most_formal-23db97bcd5ecbabe7d5db9b0d0645741.png";var r=o(39145);const s={sidebar_position:7,locale:"en-us",style:"chicago"},l="\ud83d\udfe1 Least to Most Prompting",u={unversionedId:"intermediate/least_to_most",id:"intermediate/least_to_most",title:"\ud83d\udfe1 Least to Most Prompting",description:"Least to Most prompting (LtM)(@zhou2022leasttomost) takes %%CoT prompting|CoT prompting%% a step further by first breaking a problem into sub problems then solving each one. It is a technique inspired by real-world educational strategies for children.",source:"@site/docs/intermediate/least_to_most.md",sourceDirName:"intermediate",slug:"/intermediate/least_to_most",permalink:"/pt/docs/intermediate/least_to_most",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/intermediate/least_to_most.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,locale:"en-us",style:"chicago"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Generated Knowledge",permalink:"/pt/docs/intermediate/generated_knowledge"},next:{title:"\ud83d\udfe2 What's in a Prompt?",permalink:"/pt/docs/intermediate/whats_in_a_prompt"}},p={},h=[{value:"Example: Customer Inquiry Response",id:"example-customer-inquiry-response",level:2},{value:"Example: letter concatenation",id:"example-letter-concatenation",level:2},{value:"First attempt: Standard",id:"first-attempt-standard",level:3},{value:"Second attempt: Chain of Thought",id:"second-attempt-chain-of-thought",level:3},{value:"Third attempt: Least to Most (single prompt)",id:"third-attempt-least-to-most-single-prompt",level:3},{value:"Results",id:"results",level:3},{value:"Example: compositional generalization (SCAN)",id:"example-compositional-generalization-scan",level:2},{value:"First attempt: Standard prompting",id:"first-attempt-standard-prompting",level:3},{value:"Second attempt: Least to Most, first step - Reduction",id:"second-attempt-least-to-most-first-step---reduction",level:3},{value:"Second attempt: Least to Most, second step - Mapping",id:"second-attempt-least-to-most-second-step---mapping",level:3},{value:"Results",id:"results-1",level:3}],d={toc:h},c="wrapper";function m(t){let{components:e,...o}=t;return(0,i.kt)(c,(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-least-to-most-prompting"},"\ud83d\udfe1 Least to Most Prompting"),(0,i.kt)("p",null,"Least to Most prompting (LtM)",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," takes ",(0,i.kt)("a",{parentName:"p",id:"CoT prompting_2_7_1677461237585","data-tooltip-html":"The main idea of CoT is that by showing the LLM some few shot exemplars where the reasoning process is explained in the exemplars, the LLM will also show the reasoning process when answering the prompt.","data-tooltip-place":"top"},"CoT prompting"),(0,i.kt)(r.u,{anchorId:"CoT prompting_2_7_1677461237585",clickable:!0,mdxType:"Tooltip"})," a step further by first breaking a problem into sub problems then solving each one. It is a technique inspired by real-world educational strategies for children.  "),(0,i.kt)("p",null,"As in CoT prompting, the problem to be solved is decomposed in a set of subproblems that build upon each other. In a second step, these subproblems are solved one by one. Contrary to chain of thought, the solution of previous subproblems is fed into the prompt trying to solve the next problem."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:a,style:{width:"600px"},alt:"A diagram of a least to most prompting"})),(0,i.kt)("div",{style:{textAlign:"center"}},"Diagram of a Least to Most prompting"),(0,i.kt)("h2",{id:"example-customer-inquiry-response"},"Example: Customer Inquiry Response"),(0,i.kt)("p",null,"Let's ask a slightly complicated customer service question:"),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"CUSTOMER INQUIRY:\\nI just bought a T-shirt from your Arnold collection on March 1st. I saw that it was on discount, so bought a shirt that was originall $30, and got 40% off. I saw that you have a new discount for shirts at 50%. I'm wondering if I can return the shirt and have enough store credit to buy two of your shirts?\\n\\nINSTRUCTIONS:\\nYou are a customer service agent tasked with kindly responding to customer inquiries. Returns are allowed within 30 days. Today's date is March 29th. There is currently a 50% discount on all shirts. Shirt prices range from $18-$100 at your store. Do not make up any information about discount policies.","initial-response":"Thank you for your inquiry. Unfortunately, since you purchased the shirt on March 1st, it is outside of our 30-day return policy. However, we do have a 50% discount on all shirts currently, so you could purchase two shirts with the same amount of store credit. Prices for our shirts range from $18-$100. Please let us know if you have any other questions.","max-tokens":"256","box-rows":"16","model-temp":"0","top-p":"0"},(0,i.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,i.kt)("br",null),"That failed (we are within the return time), so lets try to break it down into subproblems:",(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"CUSTOMER INQUIRY:\\nI just bought a T-shirt from your Arnold collection on March 1st. I saw that it was on discount, so bought a shirt that was originall $30, and got 40% off. I saw that you have a new discount for shirts at 50%. I'm wondering if I can return the shirt and have enough store credit to buy two of your shirts?\\n\\nINSTRUCTIONS:\\nYou are a customer service agent tasked with kindly responding to customer inquiries. Returns are allowed within 30 days. Today's date is March 29th. There is currently a 50% discount on all shirts. Shirt prices range from $18-$100 at your store. Do not make up any information about discount policies.\\nWhat subproblems must be solved before answering the inquiry?","initial-response":"1. Determine if the customer is within the 30-day return window.\\n2. Calculate the amount of store credit the customer would receive if they returned the shirt.\\n3. Calculate the cost of two shirts at the current 50% discount.\\n4. Determine if the customer has enough store credit to purchase two shirts.","max-tokens":"256","box-rows":"12","model-temp":"0","top-p":"0"},(0,i.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,i.kt)("br",null),"Let's try to solve the first subproblem:",(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"CUSTOMER INQUIRY:\\nI just bought a T-shirt from your Arnold collection on March 1st. I saw that it was on discount, so bought a shirt that was originally $30, and got 40% off. I saw that you have a new discount for shirts at 50%. I'm wondering if I can return the shirt and have enough store credit to buy two of your shirts?\\n\\nINSTRUCTIONS:\\nYou are a customer service agent tasked with kindly responding to customer inquiries. Returns are allowed within 30 days. Today's date is March 29th. There is currently a 50% discount on all shirts. Shirt prices range from $18-$100 at your store. Do not make up any information about discount policies.\\nDetermine if the customer is within the 30-day return window. Let's go step by step.","initial-response":"Yes, the customer is within the 30-day return window. The customer purchased the shirt on March 1st, and today's date is March 29th, which is within the 30-day return window. \\n\\nTherefore, the customer is eligible to return the shirt and receive store credit for the purchase. The customer can use the store credit to purchase two shirts at the current 50% discount.","max-tokens":"256","box-rows":"19","model-temp":"0","top-p":"0"},(0,i.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,i.kt)("p",null,"By just solving the first subproblem, we were able to solve the entire problem. If GPT-3 did not return an answer immediatly, we could have solved the next subproblem and so on until it did return an answer. Note that we use ",(0,i.kt)("inlineCode",{parentName:"p"},"Let's go step by step."),". The addition of this phrase is not always necessary, but it helps for this example."),(0,i.kt)("h2",{id:"example-letter-concatenation"},"Example: letter concatenation"),(0,i.kt)("p",null,"LtM was originally introduced using few-shot prompting, rather than an explicit instruction to break down a probem into multiple steps (as seen above). Additionally, it can sometimes be implemented with a single prompt rather than chained prompts. Let's examine the problem of concatenating the last letter of individual words",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," (for example, given ",(0,i.kt)("inlineCode",{parentName:"p"},"cake, etymology")," as input words, the output should be ",(0,i.kt)("inlineCode",{parentName:"p"},"ey"),")."),(0,i.kt)("h3",{id:"first-attempt-standard"},"First attempt: Standard"),(0,i.kt)("p",null,"The standard prompt with few-shot examples performs very poorly, even with a more advanced model such as text-davinci-003."),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Q: think, machine\\nA: ke\\n\\nQ: learning, reasoning, generalization\\nA: ggn\\n\\nQ: artificial, intelligence\\nA: le\\n\\nQ: transformer, language, vision\\nA: ren\\n\\nQ: foo,bar,baz,blip\\nA:","initial-response":"lip","max-tokens":"256","box-rows":"18","model-temp":"0.2"}),(0,i.kt)("h3",{id:"second-attempt-chain-of-thought"},"Second attempt: Chain of Thought"),(0,i.kt)("p",null,"Chain of Thought performs significantly better than standard prompting. This is because it now allows the model to consider extracting the last letter of each word on its own, reducing the complexity down to the operation of grouping letters it has previously collected. However, this starts to break down at larger sizes."),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":'Q: think, machine\\nA: The last letter of "think" is "k". The last letter of "machine" is "e". So "think, machine" is "ke".\\n\\nQ: learning, reasoning, generalization\\nA: The last letter of "learning" is "g". The last letter of "reasoning" is "n". The last letter of "generalization" is "n". So "learning, reasoning, generalization" is "ggn".\\n\\nQ: artificial, intelligence\\nA: The last letter of "artificial" is "l". The last letter of "intelligence" is "e". So "artificial, intelligence" is "le".\\n\\nQ: transformer, language, vision\\nA: The last letter of "transformer" is "r". The last letter of "language" is "e". The last letter of "vision" is "n". So "transformer, language, vision" is "ren".\\n\\nQ: foo,bar,baz,blip\\nA:',"initial-response":'The last letter of "foo" is "o". The last letter of "bar" is "r". The last letter of "baz" is "z". The last letter of "blip" is "p". So "foo,bar,baz,blip" is "orzp".',"max-tokens":"256","box-rows":"18","model-temp":"0.2"}),(0,i.kt)("h3",{id:"third-attempt-least-to-most-single-prompt"},"Third attempt: Least to Most (single prompt)"),(0,i.kt)("p",null,"With Least to Most prompting, we augment the Chain of Thought concept by reformulating the individual steps to restate the previously concatenated result. This simplifies each step to concatenating only a single new letter. This leads to good performance all the way to 12 or more words."),(0,i.kt)("p",null,'This approach may look very similar to Chain of Thought, but it is conceptually very different. Here, at every step, we introduce the previous concatenation. In the case of "think, machine, learning", instead of concatenating the letters "k", "e", "g" individually, it will concatenate "k" and "e", then "ke" and "g". As a result of this reintroduction of the previous work, the model can now generalize to much longer chains because it carries the result incrementally along and only needs to do a small amount of work at each step.'),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":'Q: think, machine\\nA: The last letter of "think" is "k". The last letter of "machine" is "e". Concatenating "k" and "e" gives "ke". So "think, machine" output "ke".\\n\\nQ: think, machine, learning\\nA: "think, machine" outputs "ke". The last letter of "learning" is "g". Concatenating "ke" and "g" gives "keg". So "think, machine, learning" is "keg".\\n\\nQ: transformer, language\\nA: The last letter of "transformer" is "r". The last letter of "language" is "e". Concatenating "r" and "e" gives "re". So "transformer, language" is "re".\\n\\nQ: transformer, language, vision\\nA: "transformer, language" outputs "re". The last letter of "vision" is "n". Concatenating "re" and "n" gives "ren". So "transformer, language, vision" is "ren".\\n\\nQ: foo,bar,baz,blip,learn,prompting,world,shaking,event,dancefloor,prisma,giraffe\\nA:',"initial-response":'The last letter of "foo" is "o". The last letter of "bar" is "r". Concatenating "o" and "r" gives "or". The last letter of "baz" is "z". Concatenating "or" and "z" gives "orz". The last letter of "blip" is "p". Concatenating "orz" and "p" gives "orzp". The last letter of "learn" is "n". Concatenating "orzp" and "n" gives "orzpn". The last letter of "prompting" is "g". Concatenating "orzpn" and "g" gives "orzpng". The last letter of "world" is "d". Concatenating "orzpng" and "d" gives "orzpngd". The last letter of "shaking" is "g". Concatenating "orzpngd" and "g" gives "orzpngdg". The last letter of "event" is "t". Concatenating "orzpngdg" and "t" gives "orzpngdgt".',"max-tokens":"256","box-rows":"18","model-temp":"0.2"}),(0,i.kt)("h3",{id:"results"},"Results"),(0,i.kt)("p",null,"On the last letter concatenation problem wiith 12 words, Chain of Thought is 34% accurate, while Least to Most is 74% accurate (the paper uses text-davinci-002 as a model)."),(0,i.kt)("h2",{id:"example-compositional-generalization-scan"},"Example: compositional generalization (SCAN)"),(0,i.kt)("p",null,"The SCAN benchmark",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),' requires the model to convert natural language to sequences of actions. For example, the sentence "run left and walk twice" would be translated to "TURN_LEFT + RUN + WALK * 2". Language models perform especially poorly when confronted with sequences that are longer than those in the training set.'),(0,i.kt)("h3",{id:"first-attempt-standard-prompting"},"First attempt: Standard prompting"),(0,i.kt)("p",null,"Using simple standard prompts, text-davinci-003 gets impressively far, but still fails."),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":'Q: turn left\\nA: TURN LEFT\\n\\nQ: turn right\\nA: TURN RIGHT\\n\\nQ: jump left\\nA: TURN LEFT + JUMP\\n\\nQ: run right\\nA: TURN RIGHT + RUN\\n\\nQ: look twice\\nA: LOOK * 2\\n\\nQ: run and look twice\\nA: RUN + LOOK * 2\\n\\nQ: jump right thrice\\nA: (TURN RIGHT + JUMP) * 3\\n\\nQ: walk after run\\nA: RUN + WALK\\n\\nQ: turn opposite left\\nA: TURN LEFT * 2\\n\\nQ: turn around left\\nA: TURN LEFT * 4\\n\\nQ: turn opposite right\\nA: TURN RIGHT * 2\\n\\nQ: turn around right\\nA: TURN RIGHT * 4\\n\\nQ: walk opposite left\\nA: TURN LEFT * 2 + WALK\\n\\nQ: walk around left\\nA: (TURN LEFT + WALK) * 4\\n\\nQ: "jump around left twice after walk opposite left thrice" \\nA:',"initial-response":"(TURN LEFT * 2 + WALK) * 3 + (TURN LEFT + JUMP) * 2","max-tokens":"512","box-rows":"18","model-temp":"0.2"}),(0,i.kt)("h3",{id:"second-attempt-least-to-most-first-step---reduction"},"Second attempt: Least to Most, first step - Reduction"),(0,i.kt)("p",null,"Here, we work with 2 different prompts. The first prompt is used to reduce the input problem into a simpler sequence of steps. The second prompt is used to map this simplified sequence of steps into actual actions."),(0,i.kt)("p",null,"Both prompts are pretty long, and use compressed python notation for the action to save on tokens."),(0,i.kt)("p",null,'The first step breaks the natural language description down in a more explicit, yet still human-like language. This will help the mapping step figure things out in sequence.\nFor example, "jump around left twice" is reduced to "jump left" -> ',(0,i.kt)("inlineCode",{parentName:"p"},"TURN_LEFT + JUMP"),' and "jump around left" -> ',(0,i.kt)("inlineCode",{parentName:"p"},"(TURN_LEFT + JUMP) * 4"),". Similarly, the reduction step is what is used to explain the concept of repetition (twice, thrice, etc...)."),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":'Q: look right after look twice\\nA: "look right after look twice" can be solved by: "look right", "look twice".\\n\\nQ: jump opposite right thrice and walk\\nA: "jump opposite right thrice" can be solved by: "jump opposite right", "jump opposite right thrice". "walk" can be solved by: "walk". So, "jump opposite right thrice and walk" can be solved by: "jump opposite right", "jump opposite right thrice", "walk".\\n\\nQ: run left twice and run right\\nA: "run left twice" can be solved by: "run left", "run left twice". "run right" can be solved by "run right". So, "run left twice and run right" can.be solved by: "run left", "run left twice", "run right".\\n\\nQ: run opposite right\\nA: "run opposite right" can be solved by "run opposite right".\\n\\nQ: look opposite right thrice after walk\\nA: "look opposite right thrice" can be solved by: "look opposite right", "look opposite right thrice". "walk" can be solved by "walk". So, "look opposite right thrice after walk" can be solved by: "look opposite right", "look opposite right thrice", "walk".\\n\\nQ: jump around right\\nA: "jump around right" can be solved by: "jump right", "jump around right". So, "jump around right" can be solved by: "jump right", "jump around right".\\n\\nQ: look around right thrice and walk\\nA: "look around right thrice" can be solved by: "look right", "look around right", "look around right thrice". "walk" can be solved by "walk". So, "look around right thrice and walk" can be solved by: "look right", "look around right", "look around right thrice", "walk".\\n\\nQ: turn right after run right thrice\\nA: "turn right" can be solved by: "turn right". "run right thrice" can be solved by: "run right", "run right thrice". So, "turn right after run right thrice" can be solved by: "turn right", "run right", "run right thrice".\\n\\nQ: jump around left twice after walk opposite left thrice\\nA:',"initial-response":'"jump around left twice" can be solved by: "jump left", "jump around left", "jump around left twice". "walk opposite left thrice" can be solved by: "walk opposite left", "walk opposite left thrice". So, "jump around left twice after walk opposite left thrice" can be solved by: "jump left", "jump around left", "jump around left twice", "walk opposite left", "walk opposite left thrice".',"max-tokens":"256","box-rows":"18","model-temp":"0.2"}),(0,i.kt)("h3",{id:"second-attempt-least-to-most-second-step---mapping"},"Second attempt: Least to Most, second step - Mapping"),(0,i.kt)("p",null,"In the second step, we use the output of the reduction, and again use a fairly long prompt (14 cases) to translate the reduced natural language description into a sequence of actions."),(0,i.kt)("p",null,"Here, we inject the output of the first step:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'"jump around left twice" can be solved by: "jump left", "jump around left", "jump around left twice". "walk opposite left thrice" can be solved by: "walk opposite left", "walk opposite left thrice". So, "jump around left twice after walk opposite left thrice" can be solved by: "jump left", "jump around left", "jump around left twice", "walk opposite left", "walk opposite left thrice".')),(0,i.kt)("p",null,"into the LLM."),(0,i.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":'Q: turn left\\nA: "turn left" outputs "TURN LEFT".\\n\\nQ: turn right\\nA: "turn right" outputs "TURN RIGHT".\\n\\nQ: jump left\\nA: The output of "jump left" concatenates: the output of "turn left", the output of "jump". "turn left" outputs "TURN LEFT". "jump" outputs "JUMP". So concatenating the output of "turn left" and the out- put of "jump" leads to "TURN LEFT" + "JUMP". So the output of "jump left" is "TURN LEFT" + "JUMP".\\n\\nQ: run right\\nA: The output of "run right" concatenates: the output of "turn right", the output of "run". "turn right" outputs "TURN RIGHT". "run" outputs "RUN". So concatenating the output of "turn right" and the output of "run" leads to "TURN RIGHT" + "RUN". So the output of "run right" is "TURN RIGHT" + "RUN".\\n\\nQ: look twice\\nA: The output of "look twice" concatenates: the output of "look", the output of "look". "look" outputs "LOOK". So repeating the output of "look" two times leads to "LOOK" * 2. So the output of "look twice" is "LOOK" * 2.\\n\\nQ: run and look twice\\nA: The output of "run and look twice" concatenates: the output of "run", the output of "look twice". "run" outputs "RUN". "look twice" outputs "LOOK" * 2. So concatenating the output of "run" and the output of "look twice" leads to "RUN" + "LOOK" * 2. So the output of "run and look twice" is "RUN" + "LOOK" * 2.\\n\\nQ: jump right thrice\\nA: The output of "jump right thrice" concatenates: the output of "jump right", the output of "jump right", the output of "jump right". "jump right" outputs "TURN RIGHT" + "JUMP". So repeating the output of "jump right" three times leads to ("TURN RIGHT" + "JUMP") * 3. So the output of "jump right thrice" is ("TURN RIGHT" + "JUMP") * 3.\\n\\nQ: walk after run\\nA: The output of "walk after run" concatenates: the output of "run", the output of "walk". "run" outputs "RUN". "walk" outputs "WALK". So concatenating the output of "run" and the output of "walk" leads to "RUN" + "WALK". So the output of "walk after run" is "RUN" + "WALK".\\n\\nQ: turn opposite left\\nA: The output of "turn opposite left" concatenates: the output of "turn left", the output of "turn left". "turn left" outputs "TURN LEFT". So repeating the output of "turn left" twice leads to "TURN LEFT" * 2. So the output of "turn opposite left" is "TURN LEFT" * 2.\\n\\nQ: turn around left\\nA: The output of "turn around left" concatenates: the output of "turn left", the output of "turn left", the output of "turn left", the output of "turn left". "turn left" outputs "TURN LEFT". So repeating the output of "turn left" four times leads to "TURN LEFT" * 4. So the output of "turn around left" is "TURN LEFT" * 4.\\n\\nQ: turn opposite right\\nA: The output of "turn opposite right" concatenates: the output of "turn right", the output of "turn right". "turn right" outputs "TURN RIGHT". So repeating the output of "turn right" twice leads to "TURN RIGHT" * 2. So the output of "turn opposite right" is "TURN RIGHT" * 2.\\n\\nQ: turn around right\\nA: The output of "turn around right" concatenates: the output of "turn right", the output of "turn right", the output of "turn right", the output of "turn right". "turn right" outputs "TURN RIGHT". So repeating the output of "turn right" four times leads to "TURN RIGHT" * 4. So the output of "turn around right" is "TURN RIGHT" * 4.\\n\\nQ: walk opposite left\\nA: The output of "walk opposite left" concatenates: the output of "turn opposite left", the output of "walk". "turn opposite left" outputs "TURN LEFT" * 2. "walk" outputs "WALK". So concatenating the output of "turn opposite left" and the output of "walk" leads to "TURN LEFT" * 2 + "WALK". So the output of "walk opposite left" is "TURN LEFT" * 2 + "WALK".\\n\\nQ: walk around left\\nA: The output of "walk around left" concatenates: the output of "walk left", the output of "walk left", the output of "walk left", the output of "walk left". "walk left" outputs "TURN LEFT" + "WALK". So repeating the output of "walk around left" four times leads to ("TURN LEFT" + "WALK") * 4. So the output of "walk around left" is ("TURN LEFT" + "WALK") * 4.\\n\\nQ: "jump around left twice after walk opposite left thrice" \\nA:',"initial-response":'The output of "jump around left twice after walk opposite left thrice" concatenates: the output of "walk opposite left thrice", the output of "jump around left twice". "walk opposite left thrice" outputs "TURN LEFT" * 2 + "WALK" * 3. "jump around left twice" outputs ("TURN LEFT" + "JUMP") * 4. So concatenating the output of "walk opposite left thrice" and the output of "jump around left twice" leads to "TURN LEFT" * 2 + "WALK" * 3 + ("TURN LEFT" + "JUMP") * 4. So the output of "jump around left twice after walk opposite left thrice" is "TURN LEFT" * 2 + "WALK" * 3 + ("TURN LEFT" + "JUMP") * 4.',"max-tokens":"1024","box-rows":"18","model-temp":"0.2"}),(0,i.kt)("h3",{id:"results-1"},"Results"),(0,i.kt)("p",null,"LtM leads to multiple improvements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"improved accuracy over Chain of Thought"),(0,i.kt)("li",{parentName:"ul"},"increased generalization on problems harder than those in the prompt"),(0,i.kt)("li",{parentName:"ul"},"dramatically improved performance in compositional generalization, in particular the SCAN benchmark",(0,i.kt)("sup",{parentName:"li",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")))),(0,i.kt)("p",null,"Standard prompting with text-davinci-002 (the model used in the paper) results in 6% of successful SCAN problems solved, while Least to Most prompting results in an impressive 76% success rate. The results are event more significant with code-davinci-002, where Least to Most prompting achieves a 99.7% success rate."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Zhou, D., Sch\xe4rli, N., Hou, L., Wei, J., Scales, N., Wang, X., Schuurmans, D., Cui, C., Bousquet, O., Le, Q., & Chi, E. (2022). Least-to-Most Prompting Enables Complex Reasoning in Large Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"Lake, B. M., & Baroni, M. (2018). Generalization without Systematicity: On the Compositional Skills of Sequence-to-Sequence Recurrent Networks. https://doi.org/10.48550/arXiv.1711.00350\n",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);