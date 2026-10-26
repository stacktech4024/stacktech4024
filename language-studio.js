/* Illustrative language examples; display only, no code execution. */
(()=>{
const root=document.querySelector('.developer-signature');if(!root)return;
const examples={
JavaScript:['developer.js','const developer = {\n  name: "Darren Billy",\n  focus: ["AI", "software", "learning"]\n};'],
Python:['model.py','from sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\n\nmodel = make_pipeline(StandardScaler(), classifier)\nmodel.fit(X_train, y_train)'],
R:['analysis.R','retail <- read.csv("visits.csv")\nsummary(retail$amount_spent)\n\nby_channel <- table(retail$channel)\nprop.table(by_channel)'],
TypeScript:['pitch.ts','interface Player {\n  id: string;\n  position: { x: number; y: number };\n}\nconst squad: Player[] = [];'],
'C#':['Graph.cs','var frontier = new PriorityQueue<string, int>();\nfrontier.Enqueue("A", 0);\n\nwhile (frontier.TryDequeue(out var node, out var cost))\n    Visit(node, cost);'],
SQL:['insights.sql','SELECT channel,\n       COUNT(*) AS visits,\n       AVG(amount_spent) AS average_spend\nFROM customer_visits\nGROUP BY channel;'],
PHP:['contacts.php','$query = $pdo->prepare(\n  "SELECT * FROM contacts WHERE name LIKE ?"\n);\n$query->execute(["%" . $search . "%"]);'],
Java:['Portfolio.java','List<String> interests = List.of(\n    "Artificial intelligence",\n    "Software development",\n    "Learning by building"\n);']};
const reduce=matchMedia('(prefers-reduced-motion: reduce)');let paused=reduce.matches,active='JavaScript',timer=null,index=0;
root.innerHTML='<div class="studio-toolbar"><span>LANGUAGE STUDIO</span><button type="button" id="motionToggle" aria-pressed="false">Pause motion Ⅱ</button></div><div class="language-tabs" role="group" aria-label="Choose a programming language"></div><div class="studio-file"></div><pre class="typed-code"><code></code><span class="typing-caret" aria-hidden="true">▍</span></pre><small class="studio-note">Illustrative snippets · select a language to explore</small>';
const tabs=root.querySelector('.language-tabs'),code=root.querySelector('code'),file=root.querySelector('.studio-file'),control=root.querySelector('#motionToggle');
for(const language of Object.keys(examples)){const b=document.createElement('button');b.type='button';b.textContent=language;b.dataset.language=language;b.setAttribute('aria-pressed',language===active);b.onclick=()=>select(language);tabs.append(b);}
function animate(){clearTimeout(timer);if(paused||document.hidden)return;const value=examples[active][1];if(index<value.length){index=Math.min(index+2,value.length);code.textContent=value.slice(0,index);timer=setTimeout(animate,28);}else{timer=setTimeout(()=>{index=0;code.textContent='';animate();},6500);}}
function select(language){clearTimeout(timer);active=language;index=0;file.textContent=examples[language][0];tabs.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.language===language));code.textContent=paused?examples[language][1]:'';animate();}
function updatePause(){control.textContent=paused?'Resume motion ▷':'Pause motion Ⅱ';control.setAttribute('aria-pressed',paused);document.documentElement.classList.toggle('motion-paused',paused);root.querySelector('.typing-caret').hidden=paused;if(paused){clearTimeout(timer);code.textContent=examples[active][1];}else{index=0;animate();}}
control.onclick=()=>{paused=!paused;updatePause();};reduce.addEventListener('change',e=>{paused=e.matches;updatePause();});document.addEventListener('visibilitychange',()=>{if(document.hidden)clearTimeout(timer);else animate();});
const decor=document.createElement('div');decor.className='language-cloud';decor.setAttribute('aria-hidden','true');['Python','{ JavaScript }','R <- data','C# / .NET','SELECT *','<TypeScript>'].forEach((label,i)=>{const span=document.createElement('span');span.textContent=label;span.style.setProperty('--i',i);decor.append(span);});document.querySelector('.portrait-composition').append(decor);select(active);updatePause();
})();
