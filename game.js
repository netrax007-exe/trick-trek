(()=>{
let ctx;const cv=document.getElementById('g');ctx=cv.getContext('2d',{alpha:false});const ov0=document.getElementById('ov'),btn=document.getElementById('b'),ttl=document.getElementById('t'),sub=document.getElementById('s'),mu=document.getElementById('mu'),tc=document.getElementById('tc');
const W=800,H=450,GY=.6,SP=4.5,JV=-11.8;
function rs(){
 const m=Math.min(innerWidth,innerHeight),mob=m<520,b=Math.round(mob?Math.max(34,Math.min(46,m*.11)):Math.max(44,Math.min(68,m*.15)));
 document.documentElement.style.setProperty('--b',b+'px');
 const por=innerHeight>innerWidth*1.05,ch=por?b*3+46:0;
 const SC=Math.min(innerWidth/W,(innerHeight-ch)/H)*(mob?.78:.88),r=SC*Math.min(devicePixelRatio||1,1.25);
 cv.width=Math.round(W*r);cv.height=Math.round(H*r);cv.style.width=W*SC+'px';cv.style.height=H*SC+'px';
 cv.style.top=por?Math.max(6,(innerHeight-ch-H*SC)/2)+'px':'50%';cv.style.transform=por?'translateX(-50%)':'translate(-50%,-50%)';
 ctx.setTransform(r,0,0,r,0,0)}
addEventListener('resize',rs);rs();

const S=(x,y,w,h,o)=>({k:'solid',x,y,w,h,vis:1,on:1,...o});
const K=(x,y,w,o)=>({k:'spike',x,y,w,h:20,vis:1,on:1,...o});
const D=(x,o)=>({k:'door',x,y:344,w:36,h:56,vis:1,on:1,...o});
const F=(x,y,o)=>({k:'fake',x,y,w:36,h:56,vis:1,on:1,...o});
// MEME SOUNDS: put the sound file path in each s:'' below (for example s:'sounds/meme1.mp3'). It plays when that death message shows.
const LV=[
 ()=>({name:'Tutorial',pk:1,hint:'Move with the arrows. Jump with JMP. Reach the door.',start:[40,366],
  objs:[S(0,400,800,50),D(730)],traps:[]}),
 ()=>({name:'',hint:'Mr. invisible spikes se bachke rehna',seq:['Mr. invisible spikes se bachke rehna','Spikes dekh ke chalna tha na bhai!','Spikes hai bhai!'],start:[40,366],sp:6.5,bg:'spikes',pk:1,ms:[{t:'Spikes dekh ke chalna tha na bhai!',s:''},{t:'Spikes hai bhai!',s:''}],
  objs:[S(0,400,800,50),K(130,380,50,{vis:0}),K(330,380,50,{vis:0}),K(520,380,50,{vis:0}),D(740)],traps:[]}),
 ()=>({name:'Patience',hint:'Tame lagega',start:[40,366],cd:360,bg:'clocks',dk:1,pk:1,
  objs:[S(0,400,800,50),D(740,{danger:1})],traps:[]}),
 ()=>({name:'',hint:'',start:[40,366],gy:.2,jv:-8.4,bounce:1,night:1,nomsg:1,ert:1,ms:[{t:'',s:''},{t:'',s:''},{t:'',s:''}],
  objs:[S(0,400,800,50),K(190,380,420),S(230,320,70,16),S(370,240,70,16,{id:'m2'}),S(500,320,70,16),K(650,380,40,{vis:0}),D(740)],
  traps:[{t:[370,190,70,50],a:[['m2','fall']]}]}),
 ()=>({name:'Zero Gravity',hint:'aur me ye ashman ki uchai me',start:[40,183],zg:1,wait:1,night:1,ert:1,nomsg:1,nodth:1,
  ms:[{t:'',s:''},{t:'',s:''},{t:'',s:''}],
  objs:[K(0,0,800,{dn:1}),K(0,430,800),S(220,20,60,230),K(220,250,60,{dn:1}),S(360,290,60,140),K(360,270,60),S(500,20,60,25,{vis:0}),S(500,101,60,129,{vis:0}),{k:'deco',x:500,y:20,w:60,h:210,vis:1,on:0},K(500,230,60,{dn:1}),K(560,215,60,{vis:0,dm:{t:'noobda samjhe kya',f:1}}),K(690,20,40,{dn:1,vis:0}),S(620,200,60,230),K(620,180,60),D(740,{y:50})],traps:[]}),
 ()=>({name:'',hint:'Sab kuch ulta hai',start:[40,366],sp:10,rev:1,bg:'black',dk:1,nomsg:1,
  mf:(n,q)=>n===1?'ulta socho bhai/ behen jo bhi ho tum':(q.y>H&&q.x>=600?'jor lagake haisa':''),
  ms:[{t:'',s:''}],
  objs:[S(0,400,240,50),{k:'spike',x:0,y:310,w:22,h:90,rt:1,vis:1,on:1},S(340,400,100,50,{id:'f1'}),S(520,400,130,50),K(560,380,40),S(720,400,80,50),K(735,380,20,{vis:0}),D(760)],
  traps:[{t:[340,330,100,70],a:[['f1','fall']]}]}),
 ()=>({name:'',hint:'',start:[60,366],pk:1,nomsg:1,
  mf:(n,q)=>q.y<=H?'??????':n===1?'ek machhar khadde me ghira chhapak':n<10?'ek machhar '+['','','dusri','tisri','chauthi','pachwi','chaatbi','saathbi','aathwi','nawbi'][n]+' baar gadde me ghira chhapak':'aage jane se kaam nahi bane toh piche jao',
  objs:[S(0,400,480,50),{k:'deco',x:0,y:0,w:14,h:400,vis:1,on:0,nt:1},{k:'spike',x:0,y:340,w:22,h:60,rt:1,vis:1,on:1,launch:1,l2:1},
   S(230,330,80,16),S(350,260,90,16),S(740,400,60,50),D(752)],traps:[]}),
 ()=>({name:'Jumping tracks',hint:'jumping jappak',start:[40,366],pk:1,aj:1,wait:1,sp:2.5,mf:(n,q,k)=>q.y<=H&&k<=2?'?????????':n===1?'jamping jappak, jumping jappak':'jumping jappak, gadde me chappak',ms:[{t:'',s:''}],
  objs:[{k:'deco',x:0,y:400,w:800,h:50,vis:1,on:0},S(0,400,600,50,{vis:0}),S(730,400,70,50,{vis:0}),{k:'deco',x:0,y:0,w:14,h:400,vis:1,on:0,nt:1},{k:'spike',x:0,y:310,w:22,h:90,rt:1,vis:1,on:1,tp:[296,166],l2:2},S(272,200,70,16),D(740)],
  traps:[{t:[335,380,80,20],rq:1,spr:1,a:[]}]}),
 ()=>({name:'',hint:'',start:[60,366],pk:1,nomsg:1,mc:1,mf:(n,q,k)=>q.y>H?'':(k===1?'noobda samjhe kya':'?'.repeat(Math.min(k+1,40))),
  objs:[S(0,400,570,50),{k:'deco',x:0,y:0,w:14,h:400,vis:1,on:0,nt:1},{k:'spike',x:0,y:310,w:22,h:90,rt:1,vis:1,on:1},{k:'spike',x:0,y:300,w:30,h:100,rt:1,vis:0,on:1},
   S(230,330,80,16),S(350,260,115,16),S(740,400,60,50),S(135,160,110,8,{vis:0,thr:1,vy:12,tx:625,ty:100}),S(600,100,140,8,{vis:0}),D(752)],
  traps:[{t:[595,300,60,45],hb:1,a:[]}]}),
 ()=>({name:'',hint:'Reach the moon',start:[40,366],night:1,pk:1,moon:1,nomsg:1,zm:.75,xm:-130,xM:930,guns:1,s3b:1,lx:900,
  objs:[S(-150,400,746,200,{gr:1}),S(832,400,118,200,{gr:1}),{k:'deco',x:594,y:400,w:240,h:200,vis:1,on:0},S(120,320,80,16),S(40,170,80,16,{vis:0}),S(260,240,80,16,{id:'s2'}),S(400,170,80,16,{id:'s3'}),S(640,120,80,16,{vis:0,on:0,id:'m4'}),
   {k:'deco',x:-130,y:-80,w:14,h:480,vis:1,on:0,nt:1},{k:'spike',x:-130,y:310,w:22,h:90,rt:1,vis:1,on:1,launch:1},{k:'gun',x:-104,y:150,dir:1,bs:0,per:1e9,off:5e8,vis:1,on:1},
   {k:'star',x:-24,y:31,w:28,h:28,vis:1,on:1,tg:'m4',tp:[670,86],td:120},{k:'star',x:106,y:10,w:28,h:28,vis:1,on:1,kl:1},
   ...[[300,55],[440,40],[515,30],[610,12]].map(([x,y])=>({k:'star',x:x-14,y:y-14,w:28,h:28,vis:1,on:1,kl:1})),
   F(850,344,{dm:{t:'kyu hila dalana'}}),{k:'moon',x:838,y:14,w:64,h:64,vis:1,on:1}],traps:[]})
];
{const o=LV.slice();LV[1]=o[2];LV[2]=o[1]}
const JD={t:'Jo dikhta nahi woh hota hai',s:'',f:1};
const MS=['Spiky surprise!','Ouch. That one was personal.','Who put that there? (We did.)','Spikes: 1, You: 0'];
const MP=['Gravity works. Nobody told you?','Down you go!','The floor was not lava. It was nothing.'];
const pick=a=>a[Math.floor(Math.random()*a.length)];

let AC=null,muted=false;
try{muted=localStorage.getItem('trekMute')==='1'}catch(e){}
function tone(f1,f2,d,ty,v,dl){try{if(muted)return;AC=AC||new(window.AudioContext||window.webkitAudioContext)();if(AC.state==='suspended')AC.resume();const t=AC.currentTime+(dl||0),o=AC.createOscillator(),g=AC.createGain();o.type=ty;o.frequency.setValueAtTime(f1,t);o.frequency.exponentialRampToValueAtTime(f2,t+d);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+d)}catch(e){}}
const snd=k=>{if(k==='j')tone(250,620,.13,'square',.06);else if(k==='t')tone(140,70,.18,'square',.07);else if(k==='d'){tone(320,50,.5,'sawtooth',.15);tone(200,40,.4,'square',.08,.1)}else if(k==='w'){tone(520,780,.1,'triangle',.1);tone(780,1040,.1,'triangle',.1,.1);tone(1040,1560,.18,'triangle',.1,.2)}};
const lab=()=>{mu.textContent=muted?'Sound off':'Sound on'};lab();
mu.onclick=()=>{muted=!muted;try{localStorage.setItem('trekMute',muted?'1':'0')}catch(e){}lab();mu.blur()};

const keys={l:0,r:0,j:0,d:0,u:0,s:0};
const ex=(k,v)=>{if(k===' ')keys.s=v;else if(k==='ArrowUp'||k==='w'||k==='W')keys.u=v};
addEventListener('contextmenu',e=>e.preventDefault());
const km=k=>k==='ArrowLeft'||k==='a'||k==='A'?'l':k==='ArrowRight'||k==='d'||k==='D'?'r':(k==='ArrowUp'||k==='w'||k==='W'||k===' ')?'j':(k==='ArrowDown'||k==='s'||k==='S')?'d':null;
addEventListener('keydown',e=>{if(e.target&&e.target.id==='un'){if(e.key==='Enter')start();return}const m=km(e.key);if(m){e.preventDefault();keys[m]=1;ex(e.key,1)}else if(e.key==='Enter'&&st!=='play'&&!ov0.classList.contains('hide'))start()});
addEventListener('keyup',e=>{const m=km(e.key);if(m){keys[m]=0;ex(e.key,0)}});
const isTouch='ontouchstart' in window||navigator.maxTouchPoints>0;
if(isTouch)tc.style.display='flex';
for(const [id,k,k2] of [['bl','l'],['br','r'],['bu','j','u'],['bd','d'],['bj','j','s']]){const e=document.getElementById(id),on=v=>ev=>{ev.preventDefault();keys[k]=v;if(k2)keys[k2]=v;e.classList.toggle('on',!!v)};e.addEventListener('pointerdown',on(1));['pointerup','pointercancel','pointerleave'].forEach(n=>e.addEventListener(n,on(0)))}

let st='menu',L=LV[0](),p,lvl=0,deaths=0,msg='',msgT=0,hintT=0,T=0,clrT=0,blast=0,lvD=0,spN=0,ps=[],ash=[],SC=null;
const ov=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
function load(i){if(i!==lvl)spN=0;lvl=i;L=LV[i]();document.body.dataset.th=L.bg==='black'?'black':(L.ert||L.spc)?'space':(L.night||L.dk)?'night':'day';p={x:L.start[0],y:L.start[1],w:22,h:34,vx:0,vy:0,g:0,co:0,f:1,jh:0};L.traps.forEach(t=>t.d=0);L.cdT=L.cd||0;L.hold=L.wait?2:0;blast=0;ps=[];ash=[];hintT=190;for(const id of ['bu','bd','bj'])document.getElementById(id).style.visibility=L.aj?'hidden':'visible'}
// PHONES: Start goes fullscreen and asks for landscape. If the phone refuses (iPhone), a rotate screen shows and the game pauses until it is sideways.
let rotOn=false;const rotEl=document.getElementById('rot');
function rot(){rotOn=isTouch&&innerHeight>innerWidth&&ov0.classList.contains('hide');if(rotEl)rotEl.classList.toggle('show',rotOn)}
function goLandscape(){try{const d=document.documentElement,rf=d.requestFullscreen||d.webkitRequestFullscreen,lock=()=>{try{const r=screen.orientation&&screen.orientation.lock&&screen.orientation.lock('landscape');if(r&&r.catch)r.catch(()=>{})}catch(e){}},r=rf&&rf.call(d);if(r&&r.then)r.then(lock).catch(()=>{});else lock()}catch(e){}}
addEventListener('resize',rot);addEventListener('orientationchange',rot);
// ===== LEADERBOARD (Firebase Firestore, free plan) =====
// Paste your values from the Firebase console below.
const FB={project:'trick-trek',key:'AIzaSyALX8DwPRGkTxTwX7WHbCQS-baaYpIammM'};
const unEl=document.getElementById('un'),bestEl=document.getElementById('best');
try{unEl.value=localStorage.getItem('tt_name')||''}catch(e){}
const fbOn=()=>!!FB.key;
const fbUrl=s=>'https://firestore.googleapis.com/v1/projects/'+FB.project+'/databases/(default)/documents'+s+'?key='+FB.key;
function getName(){const n=unEl.value.trim().slice(0,14);if(!n){unEl.classList.add('err');unEl.focus();return ''}unEl.classList.remove('err');try{localStorage.setItem('tt_name',n)}catch(e){}return n}
function showBest(){if(!fbOn())return;fetch(fbUrl(':runQuery'),{method:'POST',body:JSON.stringify({structuredQuery:{from:[{collectionId:'scores'}],orderBy:[{field:{fieldPath:'deaths'},direction:'ASCENDING'}],limit:1}})}).then(r=>r.json()).then(a=>{const d=a[0]&&a[0].document;if(d){const f=d.fields;bestEl.textContent='\u{1F3C6} Best: '+f.name.stringValue+' \u2013 '+f.deaths.integerValue+' deaths'}}).catch(()=>{})}
function sendScore(){if(!fbOn())return;let n='';try{n=localStorage.getItem('tt_name')||''}catch(e){}if(!n)return;fetch(fbUrl('/scores'),{method:'POST',body:JSON.stringify({fields:{name:{stringValue:n},deaths:{integerValue:String(deaths)}}})}).then(showBest).catch(()=>{})}
showBest();
function start(){if(!getName())return;deaths=0;lvD=0;spN=0;load(0);st='play';ov0.classList.remove('win');ov0.classList.add('hide');if(isTouch)goLandscape();rot();tone(440,440,.01,'sine',.001)}
btn.onclick=start;
// DEATH SOUNDS (files live in the "sounds" folder next to index.html)
const SFX={err:'sounds/error.mp3',win:'sounds/fart-with-extra-reverb.mp3',die:['sounds/ahh(quack).mp3','sounds/bark_fart.mp3','sounds/faaah.mp3','sounds/fart.mp3']};
// error.mp3 plays on EVERY death. Set DEATH_VOICES to true to also play one of the funny voices from SFX.die.
const DEATH_VOICES=false;
let lastDs=-1;
function sfx(src,fb){if(muted)return;const bad=()=>{console.warn('Sound not playing: '+src);fb&&fb()};try{const a=new Audio(src);a.onerror=bad;const r=a.play();if(r&&r.catch)r.catch(bad)}catch(e){bad()}}
function rndDie(fb){let i;do{i=Math.floor(Math.random()*SFX.die.length)}while(i===lastDs&&SFX.die.length>1);lastDs=i;sfx(SFX.die[i],fb)}
function die(m,bl,sp){if(st!=='play')return;st='dead';deaths++;if(sp)spN++;msg=L.nomsg&&!m.f?'':(m.t||m);if(L.seq)msg=lvD?pick(L.seq.slice(1)):L.seq[0];if(++lvD===5&&!L.nodth)msg='Tumse na ho payega';if(L.mf)msg=L.mf(lvD,p,spN);msgT=75;
 if(m.s&&!muted){try{new Audio(m.s).play()}catch(e){}}
 sfx(SFX.err,()=>snd('d'));
 if(bl){blast=1;msgT=100;ash=[];if(!m.s&&DEATH_VOICES)rndDie()}
 else if(!m.s&&DEATH_VOICES)rndDie()}
function tele(x,y,d){p.tpT=1;p.tpD=d||180;p.tpx=x;p.tpy=y;p.to=[p.x+11,p.y+17];p.tpP=[];for(let i=0;i<44;i++){const a=Math.random()*6.28,v=2+Math.random()*6;p.tpP.push({x:p.to[0],y:p.to[1],vx:Math.cos(a)*v,vy:Math.sin(a)*v-1.5,c:['#ff6b35','#ffd166','#e63946','#fff'][i%4]})}tone(120,30,.6,'sawtooth',.25)}
const ASC=['#d9d9d9','#bdbdbd','#9a9a9a','#6b6b6b','#3c3c3c'];
function mkAsh(x,y,k){ash.push({x,y,vx:(Math.random()-.5)*1.2,vy:Math.random()*.8-.4,l:Math.max(26,94-k),s:2+(Math.random()*3|0),c:ASC[Math.random()*5|0],age:0,ph:Math.random()*6.28})}
function ashUp(){for(const a of ash){a.age++;a.x+=a.vx;a.y+=a.vy;if(a.age<12){a.vy+=.06;a.vx*=.96}else{a.vx+=.12+Math.random()*.05;a.vy+=-.06+Math.sin(a.age*.3+a.ph)*.08;a.vx*=.985;a.vy*=.97}a.l--}ash=ash.filter(a=>a.l>0)}
function ashStep(){const k=100-msgT;if(k===28)for(let i=0;i<26;i++)mkAsh(p.x+11+(Math.random()-.5)*18,p.y+4+Math.random()*28,k);if(k>=28&&k<62){const y=p.y-18+52*(k-28)/34;for(let i=0;i<3;i++)mkAsh(p.x+11+(Math.random()-.5)*26,y+(Math.random()-.5)*4,k)}}
function boom(x,y){for(let i=0;i<44;i++){const a=Math.random()*6.28,v=2+Math.random()*7;ps.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-2,l:40+Math.random()*30,c:['#fff6b0','#ffd166','#fff','#9ad1ff'][i%4]})}tone(500,60,.45,'sawtooth',.14)}
function next(){if(st!=='play')return;sfx(SFX.win,()=>snd('w'));st='clear';clrT=110}

function step(){
 if(rotOn)return;
 for(const q of ps){q.x+=q.vx;q.y+=q.vy;q.vy+=.25;q.l--}ps=ps.filter(q=>q.l>0);ashUp();
 for(const o of L.objs)if(o.fall){o.fv+=.5;o.y+=o.fv}
 if(hintT>0&&!L.hold)hintT--;
 if(L.cdT>0&&st==='play'){L.cdT--;if(L.cdT===0){next();return}}
 if(st==='dead'){if(blast)ashStep();if(--msgT<=0){load(lvl);st='play'}return}
 if(st==='clear'){if(--clrT<=0){if(lvl+1<LV.length){lvD=0;load(lvl+1);st='play'}else{st='win';sendScore();ttl.textContent='You reached the moon!';sub.innerHTML='Deaths: '+deaths+'<br>Bahut accha agla level aayega agar game ko accha response milega.';btn.textContent='Play again';ov0.classList.add('win');ov0.classList.remove('hide')}}return}
 if(st!=='play')return;
 if(L.fk>0){if(--L.fk===0)die('',1);return}
 if(L.hold){const any=keys.l||keys.r||keys.j||keys.d;if(L.hold===2){if(!any)L.hold=1}else if(any)L.hold=0;return}
 if(p.tpT){const k=p.tpT++,TD=p.tpD||180,TS=TD-60;
  for(const q of p.tpP){
   if(k<=TS){q.x+=q.vx;q.y+=q.vy;q.vx*=.95;q.vy=q.vy*.95+.03;if(k===TS){q.sx=q.x;q.sy=q.y;q.ox=(Math.random()-.5)*18;q.oy=(Math.random()-.5)*30}}
   else{const e=Math.min(1,(k-TS)/58),m=e*e*(3-2*e);q.x=q.sx+(p.tpx+11+q.ox-q.sx)*m;q.y=q.sy+(p.tpy+17+q.oy-q.sy)*m}
  }
  if(k>=TD){p.tpD=0;p.x=p.tpx;p.y=p.tpy;p.vx=0;p.vy=0;p.g=0;p.stl=1;p.sf=0;p.tpT=0;p.tpP=null;tone(300,900,.25,'sine',.1)}
  return}
 const rv=L.rev,jk=L.aj?(p.stl||p.sf?0:1):(rv?(keys.s||keys.d):keys.j),dk=L.aj?0:(rv?keys.u:keys.d),lk=rv?keys.r:keys.l,rk=rv?keys.l:keys.r;
 if(L.zg)p.vx=Math.max(-8,Math.min(8,p.vx+(rk-lk)*.16));else p.vx=(rk-lk)*(L.sp||SP);if(rk!==lk)p.f=rk?1:-1;
 if(L.zg)p.vy=Math.max(-8,Math.min(8,p.vy+keys.d*.16-keys.j*.22));else{p.vy=Math.min(14,p.vy+(L.gy||GY));if(dk&&!p.g)p.vy=Math.min(18,p.vy+(L.rev?1.1:.7))}
 if(p.g)p.co=6;else if(p.co>0)p.co--;
 if(!L.zg&&jk&&p.co>0&&(!p.jh||L.aj)){p.vy=L.jv||JV;p.co=0;p.jh=1;snd('j')}
 if(!jk)p.jh=0;
 if(p.ln){p.vx=14;p.vy=0;p.f=1}
 if(p.sf){p.vx=p.sx;p.f=1}
 p.x+=p.vx;
 for(const o of L.objs)if(o.k==='solid'&&o.on&&ov(p,o)){if(p.vx>0)p.x=o.x-p.w;else if(p.vx<0)p.x=o.x+o.w;if(L.zg)p.vx=0}
 p.x=Math.max(L.xm||0,Math.min((L.xM||W)-p.w,p.x));if(L.zg&&(p.x<=0||p.x>=W-p.w))p.vx=0;
 if(p.ln&&(p.x>=(L.lx||730)||--p.ln<=0))p.ln=0;
 p.y+=p.vy;p.g=0;p.on=null;if(L.zg){p.y=Math.max(0,Math.min(H-p.h,p.y));if(p.y<=0||p.y>=H-p.h)p.vy=0}
 for(const o of L.objs)if(o.k==='solid'&&o.on&&ov(p,o)){if(p.vy>0){p.y=o.y-p.h;p.g=1;p.on=o;if(L.bounce&&p.vy>2.5){p.vy=-p.vy*.62;continue}}else if(p.vy<0)p.y=o.y+o.h;p.vy=0}
 if(p.g)p.sf=0;
 if(p.on&&p.on.thr&&p.g){p.onT=(p.onT||0)+1;if(p.onT>=60){const o=p.on,g=L.gy||GY,v=o.vy||12,dy=p.y+p.h-o.ty,T=(v+Math.sqrt(Math.max(0,v*v-2*g*dy)))/g;p.sf=1;p.vy=-v;p.g=0;p.sx=(o.tx-p.x)/T;p.onT=0;p.on=null;tone(300,1000,.3,'square',.09)}}else p.onT=0;
 for(const t of L.traps)if(t.hb&&p.vy<0&&ov(p,{x:t.t[0],y:t.t[1],w:t.t[2],h:t.t[3]}))p.vy=0;
 for(const t of L.traps)if(!t.hb&&!t.d&&(!t.rq||p.stl)&&ov(p,{x:t.t[0],y:t.t[1],w:t.t[2],h:t.t[3]})){
  t.d=1;snd('t');
  if(t.spr){const g=L.gy||GY,v=t.vy||15,dy=t.ty!=null?p.y+p.h-t.ty:0,T=(v+Math.sqrt(Math.max(0,v*v-2*g*dy)))/g;p.sf=1;p.vy=-v;p.g=0;p.sx=((t.tx||735)-p.x)/T;tone(300,1000,.3,'square',.09)}
  for(const [id,ac] of t.a){const o=L.objs.find(q=>q.id===id);if(!o)continue;if(ac==='show'){o.vis=1;o.on=1}else if(ac==='hide'){o.vis=0;o.on=0}else if(ac==='fall'){o.on=0;o.fall=1;o.fv=0}}
 }
 if(p.stl&&p.g&&p.y>300)p.stl=0;
 for(const o of L.objs){
  if(!o.on)continue;
  if(o.k==='spike'&&ov(p,o)){if(o.launch&&!(o.l2&&spN<o.l2)){if(!p.ln){p.ln=80;tone(200,900,.35,'sawtooth',.1)}continue}if(o.tp&&!(o.l2&&spN<o.l2)){if(!p.tpT){p.tpT=1;p.tpx=o.tp[0];p.tpy=o.tp[1];p.to=[p.x+11,p.y+17];p.tpP=[];for(let i=0;i<44;i++){const a=Math.random()*6.28,v=2+Math.random()*6;p.tpP.push({x:p.to[0],y:p.to[1],vx:Math.cos(a)*v,vy:Math.sin(a)*v-1.5,c:['#ff6b35','#ffd166','#e63946','#fff'][i%4]})}tone(120,30,.6,'sawtooth',.25)}continue}return die(o.dm||(L.fm&&L.traps.some(t=>t.d)?L.fm:pick(L.ms||MS)),1,1)}
  if(o.k==='star'&&ov(p,{x:o.x+4,y:o.y+4,w:o.w-8,h:o.h-8})){o.on=0;o.vis=0;if(o.kl)return die('',1);const m=L.objs.find(q=>q.id===o.tg);if(m)m.on=1;boom(o.x+o.w/2,o.y+o.h/2);tele(o.tp[0],o.tp[1],o.td);continue}
  if(o.k==='moon'&&ov(p,{x:o.x+8,y:o.y+8,w:o.w-16,h:o.h-16}))return next();
  if(o.k==='fake'&&ov(p,o)){if(o.dm){L.fk=60;L.fkt=o.dm.t;return}return die('That door was fake. So are your hopes.')}
  if(o.k==='door'){if(o.danger&&Math.abs(p.x+p.w/2-(o.x+o.w/2))<95)return die('',1);if(ov(p,o)&&!o.danger)return next()}
 }
 if(L.s3b){const s2=L.objs.find(o=>o.id==='s2'),s3=L.objs.find(o=>o.id==='s3'),gn=L.objs.find(o=>o.k==='gun'),fire=v=>{L.bu=1;L.bl=L.bl||[];L.bl.push({x:-92,y:147,w:20,h:6,vx:v,vy:0,hm:1});gn.ff=8;tone(180,90,.08,'square',.03)};
  if(p.g&&p.on===s2)L.j2=1;else if(p.g){if(L.j2&&p.on&&p.on.gr&&!L.bu){p.ln=18;tone(200,900,.35,'sawtooth',.1);fire(36)}L.j2=0}
  if(p.g&&p.on===s3)L.j3=1;else if(p.g)L.j3=0;
  if(L.j3&&!p.g&&!L.bu){if(p.vx<0)L.j3=0;else if(p.vx>0)fire(36)}if(gn.ff>0)gn.ff--}
 if(L.guns){L.t=(L.t||0)+1;L.bl=L.bl||[];
  for(const g of L.objs)if(g.k==='gun'&&(!g.at||p.x>=g.at)&&(L.t+g.off)%g.per===0){L.bl.push(g.dir==='d'?{x:g.x-3,y:g.y+8,w:6,h:12,vx:0,vy:g.bs}:g.dir==='a'?(()=>{const dx=p.x+11-g.x,dy=p.y+17-g.y,l=Math.hypot(dx,dy)||1;return{x:g.x-14,y:g.y-4,w:9,h:9,vx:dx/l*g.bs,vy:dy/l*g.bs}})():{x:g.dir===1?g.x+14:g.x-14,y:g.y-3,w:12,h:6,vx:g.dir*g.bs,vy:0});tone(180,90,.08,'square',.03)}
  for(const b of L.bl){b.x+=b.vx;b.y+=b.vy;if(b.hm)b.y+=Math.max(-20,Math.min(20,(p.y+17-b.y-b.h/2)*.8));if(ov(p,{x:b.x+1,y:b.y+1,w:b.w-2,h:b.h-2})){die('',1);b.dead=1}else if(b.x<(L.xm||0)-30||b.x>(L.xM||W)+30||b.y>H+30||(!b.hm&&L.objs.some(o=>o.k==='solid'&&o.on&&ov(b,o))))b.dead=1}
  L.bl=L.bl.filter(b=>!b.dead)}
 if(p.y>H+60)die(pick(L.ms||MP));
}

function vine(pt,n,th,thorn,col){
 const P=[];for(let i=0;i<=n;i++)P.push(pt(i/n));
 ctx.lineCap='round';ctx.lineJoin='round';
 for(const [c,w] of [['#1b4332',th+2],[col,th]]){ctx.strokeStyle=c;ctx.lineWidth=w;ctx.beginPath();P.forEach((q,i)=>{if(i)ctx.lineTo(q[0],q[1]);else ctx.moveTo(q[0],q[1])});ctx.stroke()}
 ctx.fillStyle=col;ctx.strokeStyle='#1b4332';ctx.lineWidth=.8;
 for(let i=1;i<n;i++){const a=P[i-1],b=P[i+1],dx=b[0]-a[0],dy=b[1]-a[1],l=Math.hypot(dx,dy)||1,ux=dx/l,uy=dy/l,sd=i%2?1:-1,q=P[i];
  const tx=q[0]-uy*sd*thorn+ux*thorn*.5*sd,ty=q[1]+ux*sd*thorn+uy*thorn*.5*sd;
  ctx.beginPath();ctx.moveTo(q[0]-ux*th*.8,q[1]-uy*th*.8);ctx.lineTo(tx,ty);ctx.lineTo(q[0]+ux*th*.8,q[1]+uy*th*.8);ctx.closePath();ctx.fill();ctx.stroke()}
}
function dObj(o){
 if(!o.vis)return;
 if(o.k==='solid'||o.k==='deco'){ctx.fillStyle=(L.night||L.dk)?'#7a7a8c':'#6b705c';ctx.fillRect(o.x,o.y,o.w,o.h);ctx.fillStyle=(L.night||L.dk)?'#b8b8c4':'#52b788';if(!o.nt)ctx.fillRect(o.x,o.y,o.w,Math.min(7,o.h))}
 else if(o.k==='gun'){
 const d=o.dir,fl=o.ff>0||((L.t||0)+o.off)%o.per<5;
 ctx.fillStyle='#2b2d42';
 if(d==='d'){ctx.fillRect(o.x-12,o.y-12,24,14);ctx.fillStyle='#8d99ae';ctx.fillRect(o.x-4,o.y+2,8,14);if(fl){ctx.fillStyle='#ffb703';ctx.beginPath();ctx.arc(o.x,o.y+20,6,0,7);ctx.fill()}}
 else if(d===1){ctx.fillRect(o.x-12,o.y-12,22,24);ctx.fillStyle='#8d99ae';ctx.fillRect(o.x+8,o.y-5,20,10);if(fl){ctx.fillStyle='#ffb703';ctx.beginPath();ctx.arc(o.x+32,o.y,6,0,7);ctx.fill()}}
 else{ctx.fillRect(o.x-10,o.y-12,22,24);ctx.fillStyle='#8d99ae';ctx.fillRect(o.x-28,o.y-5,20,10);if(fl){ctx.fillStyle='#ffb703';ctx.beginPath();ctx.arc(o.x-32,o.y,6,0,7);ctx.fill()}}}
 else if(o.k==='star'){
 const cx=o.x+o.w/2,cy=o.y+o.h/2,r=o.w/2,pu=1+Math.sin(T*3)*.12;
 const gl=ctx.createRadialGradient(cx,cy,0,cx,cy,r*3.2*pu);gl.addColorStop(0,'rgba(255,250,200,.85)');gl.addColorStop(.35,'rgba(255,235,150,.35)');gl.addColorStop(1,'rgba(255,235,150,0)');
 ctx.fillStyle=gl;ctx.beginPath();ctx.arc(cx,cy,r*3.2*pu,0,7);ctx.fill();
 ctx.save();ctx.translate(cx,cy);ctx.rotate(Math.sin(T*1.5)*.2);ctx.fillStyle='#fffbd0';ctx.strokeStyle='#ffd23f';ctx.lineWidth=2;ctx.lineJoin='round';ctx.beginPath();
 for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5,rr=i%2?r*.45:r;if(i)ctx.lineTo(Math.cos(a)*rr,Math.sin(a)*rr);else ctx.moveTo(Math.cos(a)*rr,Math.sin(a)*rr)}
 ctx.closePath();ctx.fill();ctx.stroke();ctx.restore()}
 else if(o.k==='moon'){
 const cx=o.x+o.w/2,cy=o.y+o.h/2,r=o.w/2,pu=1+Math.sin(T*2)*.04;
 const gl=ctx.createRadialGradient(cx,cy,r*.8,cx,cy,r*2.6*pu);gl.addColorStop(0,'rgba(255,248,210,.55)');gl.addColorStop(1,'rgba(255,248,210,0)');
 ctx.fillStyle=gl;ctx.beginPath();ctx.arc(cx,cy,r*2.6*pu,0,7);ctx.fill();
 ctx.fillStyle='#f6f1d5';ctx.beginPath();ctx.arc(cx,cy,r,0,7);ctx.fill();
 ctx.fillStyle='rgba(180,175,140,.45)';for(const [dx,dy,rr] of [[-.3,-.25,.2],[.28,.1,.15],[-.1,.35,.12]]){ctx.beginPath();ctx.arc(cx+dx*r*2,cy+dy*r*2,rr*r*1.6,0,7);ctx.fill()}}
 else if(o.k==='spike'){
 const rt=o.rt,LN=rt?o.h:o.w,TH=rt?o.w:o.h,sg=o.dn?1:-1,sd=o.x*.13+o.y*.07,n=Math.max(5,Math.round(LN/8));
 ctx.save();
 if(rt){ctx.translate(o.x,o.y);ctx.rotate(Math.PI/2)}else ctx.translate(o.x,o.dn?o.y:o.y+o.h);
 for(let k=0;k<3;k++){const ph=sd+k*2.1,fr=k===2?.14:.09,am=.3-k*.03;
  vine(t=>[t*LN,sg*TH*(.5+am*Math.sin(t*LN*fr+ph))],n,2,TH*.42,k===1?'#d9f99d':'#bef264')}
 ctx.restore()}
 else{
 const op=(o.k==='door'&&st==='clear'&&!L.cd)?Math.min(1,(110-clrT)/40):0,pw=o.w*(1-op*.82);
 if(L.cd&&!o.danger){ctx.fillStyle='rgba(128,237,153,.25)';ctx.fillRect(o.x-5,o.y+9,o.w+10,o.h-9)}
 if(op>0){ctx.fillStyle='#ffe9a8';ctx.fillRect(o.x,o.y+14,o.w,o.h-14);ctx.beginPath();ctx.arc(o.x+o.w/2,o.y+14,o.w/2,Math.PI,0);ctx.fill()}
 ctx.fillStyle='#7f5539';ctx.fillRect(o.x,o.y+14,pw,o.h-14);ctx.beginPath();ctx.arc(o.x+pw/2,o.y+14,pw/2,Math.PI,0);ctx.fill();
 ctx.fillStyle='#ffd166';ctx.beginPath();ctx.arc(o.x+pw-8*(1-op*.5),o.y+o.h/2+6,2.5,0,7);ctx.fill()}
}
function dPold(){
 const x=p.x,y=p.y,f=p.f,mv=p.vx!==0&&p.g,lg=mv?Math.sin(T*16)*5:0;
 ctx.fillStyle='#264653';ctx.fillRect(x+4,y+26-(lg>0?lg*.5:0),6,8);ctx.fillRect(x+12,y+26-(lg<0?-lg*.5:0),6,8);
 ctx.fillStyle='#2a9d8f';ctx.fillRect(f>0?x-4:x+20,y+13,6,13);
 ctx.fillStyle='#e76f51';ctx.beginPath();ctx.roundRect(x+2,y+12,18,15,3);ctx.fill();
 ctx.fillStyle='#f1c27d';ctx.beginPath();ctx.arc(x+11,y+8,8,0,7);ctx.fill();
 ctx.fillStyle='#e63946';ctx.fillRect(x+3,y-1,16,6);
 ctx.fillStyle='#222';ctx.beginPath();ctx.arc(x+8+f*2,y+9,1.7,0,7);ctx.arc(x+14+f*2,y+9,1.7,0,7);ctx.fill();
}
const RR2=(x,y,w,h,r)=>{ctx.beginPath();ctx.roundRect(x,y,w,h,r)};
const PL=(l,t,w,h,pts)=>{ctx.beginPath();pts.forEach((q,i)=>{const X=l+q[0]*w/100,Y=t+q[1]*h/100;if(i)ctx.lineTo(X,Y);else ctx.moveTo(X,Y)});ctx.closePath()};
const CT=[[13,0],[39,0],[50,18],[61,0],[87,0],[100,100],[64,85],[50,100],[36,85],[0,100]];
const TO=[[20,0],[39,7],[50,12],[61,7],[80,0],[100,19],[82,43],[90,100],[62,91],[50,100],[38,91],[10,100],[18,43],[0,19]];
const HR=[[0,22],[17,3],[29,20],[46,0],[57,19],[82,4],[76,26],[100,16],[88,42],[100,58],[81,64],[92,84],[66,76],[51,100],[37,79],[13,91],[22,67],[0,60],[14,43]];
function pir(ol,ph,mv,air){
 const F=c=>{if(ol)ctx.stroke();else{ctx.fillStyle=c||'#000';ctx.fill()}};
 const a=Math.sin(ph),b=Math.sin(ph+Math.PI);
 for(let k=0;k<2;k++){const hx=k?117:82,w=k?b:a,lift=air?14:Math.max(0,w)*22,ang=air?(k?-.35:.35):(k?-.2:.2)*w;
  ctx.save();ctx.translate(hx,231-lift);ctx.rotate(ang);ctx.translate(-hx,-231);
  RR2(k?103:68,231,28,79,5);F();RR2(k?99:56,305,41,17,4);F();ctx.restore()}
 ctx.save();ctx.translate(100,116);ctx.rotate(mv?-.06+Math.sin(ph*2)*.05:Math.sin(T*2)*.02);ctx.translate(-100,-116);PL(40,116,119,140,CT);F();ctx.restore();
 ctx.save();ctx.translate(50.5,100);ctx.rotate(.31+(air?-.5:b*.6));RR2(-12.5,-6,25,91,12);F();RR2(-10.5,78,21,24,8);F();ctx.restore();
 PL(55,89,89,112,TO);F();
 RR2(88,78,23,25,0);F();
 PL(88,105,23,98,[[50,0],[100,100],[0,100]]);F('#e8e8e8');
 ctx.beginPath();ctx.ellipse(100,67.5,22,24.5,0,0,7);F();
 ctx.save();ctx.translate(149.5,100);ctx.rotate(-.44+(air?-.7:a*.6));RR2(-12.5,-6,25,91,12);F();RR2(-10.5,78,21,24,8);F();
 ctx.save();ctx.translate(0,88);ctx.rotate(-.3);RR2(-3.5,0,7,117,3);F();ctx.beginPath();ctx.moveTo(-7.5,116);ctx.lineTo(7.5,116);ctx.lineTo(0,130);ctx.closePath();F();RR2(-13,-4,26,6,3);F();ctx.restore();ctx.restore();
 PL(65,40,69,65,HR);F();
 ctx.save();ctx.translate(0,Math.sin(ph*2+1)*(mv?3:1));
 ctx.beginPath();ctx.moveTo(57,31.5);ctx.bezierCurveTo(57,20,76,12,100,12);ctx.bezierCurveTo(124,12,143,20,143,31.5);ctx.lineTo(143,46.3);ctx.quadraticCurveTo(143,51,132.7,51);ctx.lineTo(67.3,51);ctx.quadraticCurveTo(57,51,57,46.3);ctx.closePath();F();
 ctx.beginPath();ctx.ellipse(100,48,83,11,0,0,7);F();ctx.restore();
}
function bolt(x,y,a,len){ctx.beginPath();ctx.moveTo(x,y);let cx=x,cy=y;for(let i=1;i<=5;i++){const d=len/5,j=(Math.random()-.5)*14;cx+=Math.cos(a)*d-Math.sin(a)*j;cy+=Math.sin(a)*d+Math.cos(a)*j;ctx.lineTo(cx,cy)}ctx.stroke()}
function dDeath(){
 const k=100-msgT,cx=p.x+p.w/2,by=p.y+p.h;
 if(k<62){
  if(!SC){SC=document.createElement('canvas');SC.width=90;SC.height=90}
  const sc=SC.getContext('2d'),M=ctx;
  sc.globalCompositeOperation='source-over';sc.clearRect(0,0,90,90);
  ctx=sc;ctx.save();ctx.translate(45-cx,75-by);dP();ctx.restore();ctx=M;
  sc.globalCompositeOperation='source-atop';
  if(k<28){if(k%4<2){sc.fillStyle='rgba(200,240,255,.9)';sc.fillRect(0,0,90,90)}}
  else{const t=Math.min(1,(k-28)/14);sc.fillStyle='rgba('+(120-t*70|0)+','+(115-t*68|0)+','+(110-t*62|0)+','+(.3+t*.7)+')';sc.fillRect(0,0,90,90)}
  if(k>=28){sc.globalCompositeOperation='destination-out';sc.fillStyle='#000';sc.fillRect(0,0,90,20+54*(k-28)/34)}
  sc.globalCompositeOperation='source-over';
  const jx=k<28?(Math.random()-.5)*4:0,jy=k<28?(Math.random()-.5)*3:0;
  ctx.drawImage(SC,cx-45+jx,by-75+jy);
  if(k<30){
   const gl=ctx.createRadialGradient(cx,by-17,2,cx,by-17,46);gl.addColorStop(0,'rgba(170,230,255,'+(.45+Math.random()*.25)+')');gl.addColorStop(1,'rgba(170,230,255,0)');
   ctx.fillStyle=gl;ctx.beginPath();ctx.arc(cx,by-17,46,0,7);ctx.fill();
   if(k%2===0){ctx.lineJoin='round';for(let i=0;i<6;i++){const a=Math.random()*6.28,len=26+Math.random()*30;ctx.strokeStyle='rgba(120,200,255,.9)';ctx.lineWidth=3;bolt(cx,by-17,a,len);ctx.strokeStyle='#fff';ctx.lineWidth=1.2;bolt(cx,by-17,a,len)}}
  }
 }
 for(const a of ash){ctx.globalAlpha=Math.min(1,a.l/18);ctx.fillStyle=a.c;ctx.fillRect(a.x,a.y,a.s,a.s)}
 ctx.globalAlpha=1;
}
function dP(){
 const mv=p.vx!==0&&p.g,air=!p.g,ph=T*(mv?17:3),bob=mv?Math.abs(Math.sin(ph))*9:(air?0:Math.sin(ph)*2),sc=54/318,lean=mv?.1:(air?(p.vy<0?-.08:.1):0);
 ctx.save();ctx.translate(p.x+p.w/2,p.y+p.h);ctx.scale(p.f*sc,sc);ctx.rotate(lean);ctx.translate(-100,-322-bob);
 if(L.night||L.dk){ctx.strokeStyle='rgba(255,255,255,.9)';ctx.lineWidth=9;ctx.lineJoin='round';pir(1,ph,mv,air)}
 pir(0,ph,mv,air);ctx.restore();
}
let NEB=null;
function neb(){
 if(NEB)return NEB;
 NEB=document.createElement('canvas');NEB.width=800;NEB.height=450;const c=NEB.getContext('2d');
 c.fillStyle='#02040a';c.fillRect(0,0,800,450);
 const rg=(x,y,r,col,a)=>{const g=c.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,'rgba('+col+','+a+')');g.addColorStop(1,'rgba('+col+',0)');c.fillStyle=g;c.fillRect(x-r,y-r,r*2,r*2)};
 rg(380,190,330,'40,120,150',.34);rg(520,150,260,'30,80,130',.28);rg(300,230,160,'70,170,190',.3);
 rg(60,340,230,'190,80,45',.38);rg(150,310,120,'235,175,115',.32);rg(20,200,120,'160,60,50',.22);rg(640,60,200,'20,60,100',.2);
 c.strokeStyle='rgba(240,200,150,.28)';c.lineWidth=3;c.lineCap='round';
 for(let i=0;i<6;i++){c.beginPath();c.moveTo(90+i*14,95+i*8);c.bezierCurveTo(120+i*10,130,130,160+i*10,160+i*16,180+i*6);c.stroke()}
 c.fillStyle='rgba(10,6,8,.55)';c.beginPath();c.ellipse(110,400,110,45,-.2,0,7);c.fill();c.beginPath();c.ellipse(260,420,90,30,.1,0,7);c.fill();
 c.fillStyle='rgba(215,150,90,.35)';c.beginPath();c.ellipse(190,330,70,30,-.25,0,7);c.fill();c.beginPath();c.ellipse(110,375,60,22,-.1,0,7);c.fill();
 const v=c.createRadialGradient(400,225,150,400,225,520);v.addColorStop(0,'rgba(0,0,0,0)');v.addColorStop(1,'rgba(0,0,0,.65)');c.fillStyle=v;c.fillRect(0,0,800,450);
 return NEB}
let ERT=null;
function earth(){
 if(ERT)return ERT;
 ERT=document.createElement('canvas');ERT.width=800;ERT.height=450;const c=ERT.getContext('2d');
 c.fillStyle='#01030a';c.fillRect(0,0,800,450);c.lineCap='round';
 for(const [w,a] of [[70,.05],[44,.07],[22,.09]]){c.strokeStyle='rgba(110,160,230,'+a+')';c.lineWidth=w;c.beginPath();c.moveTo(60,10);c.quadraticCurveTo(200,60,340,150);c.stroke()}
 for(let i=0;i<160;i++){const t=(i*37%100)/100,x=60+t*280+((i*53)%40-20),y=10+t*140+((i*29)%40-20)*(1-t*.3);c.fillStyle='rgba(190,215,255,'+(.25+((i*7)%5)/10)+')';c.fillRect(x,y,1.4,1.4)}
 let g=c.createRadialGradient(385,214,0,385,214,300);g.addColorStop(0,'rgba(255,230,170,.55)');g.addColorStop(.3,'rgba(255,200,120,.2)');g.addColorStop(1,'rgba(255,200,120,0)');c.fillStyle=g;c.fillRect(0,0,800,450);
 c.save();c.beginPath();c.arc(385,2212,2000,0,7);c.clip();
 g=c.createLinearGradient(0,212,0,450);g.addColorStop(0,'#2a78c8');g.addColorStop(.18,'#0e4590');g.addColorStop(1,'#041029');c.fillStyle=g;c.fillRect(0,200,800,250);
 c.fillStyle='rgba(235,245,255,.55)';c.beginPath();c.ellipse(95,292,75,13,-.1,0,7);c.fill();
 for(let i=0;i<14;i++){c.fillStyle='rgba(215,230,250,'+(.1+((i*3)%4)/20)+')';c.beginPath();c.ellipse(240+i*38+(i%3)*10,300+(i*47)%120,60+(i*11)%40,5+(i%4)*3,-.15+(i%3)*.1,0,7);c.fill()}
 for(let i=0;i<70;i++){const x=40+(i*173)%740,y=280+((i*89)%160),a=.5+((i*13)%5)/10;c.fillStyle='rgba(255,205,70,'+a+')';c.fillRect(x,y,2,2);if(i%4===0){c.fillStyle='rgba(255,200,60,.18)';c.beginPath();c.arc(x,y,6,0,7);c.fill()}}
 c.restore();
 c.strokeStyle='rgba(90,170,255,.45)';c.lineWidth=9;c.beginPath();c.arc(385,2212,2000,0,7);c.stroke();
 c.strokeStyle='rgba(190,225,255,.9)';c.lineWidth=2;c.beginPath();c.arc(385,2212,2000,0,7);c.stroke();
 g=c.createRadialGradient(385,214,0,385,214,120);g.addColorStop(0,'rgba(255,255,240,1)');g.addColorStop(.25,'rgba(255,225,150,.8)');g.addColorStop(1,'rgba(255,200,100,0)');c.fillStyle=g;c.fillRect(250,100,270,230);
 return ERT}
function draw(){
 const zm=L.zm||1;ctx.save();if(zm!==1){ctx.translate(W/2,H/2);ctx.scale(zm,zm);ctx.translate(-W/2,-H/2)}
 const dk=!!(L.night||L.dk);if(!draw.sk)draw.sk={};let g=draw.sk[dk];if(!g){g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,dk?'#0b1026':'#8ecae6');g.addColorStop(1,dk?'#2b3a67':'#e0f4fb');draw.sk[dk]=g}ctx.fillStyle=g;ctx.fillRect(-W,-H,3*W,3*H);
 if(L.bg==='black'){ctx.fillStyle='#000';ctx.fillRect(0,0,W,H)}
 if(L.pk){
  if(!(L.night||L.dk)){const sg=ctx.createLinearGradient(0,0,0,330);sg.addColorStop(0,'#1672d6');sg.addColorStop(1,'#a6e0f7');ctx.fillStyle=sg;ctx.fillRect(0,0,W,H)}
  const poly=(pts,c)=>{ctx.fillStyle=c;ctx.beginPath();pts.forEach((q,i)=>{if(i)ctx.lineTo(q[0],q[1]);else ctx.moveTo(q[0],q[1])});ctx.closePath();ctx.fill()};
  poly([[-150,330],[-150,262],[0,262],[28,238],[52,250],[92,214],[128,196],[165,246],[215,266],[270,330]],'#f1f7ff');
  poly([[128,196],[165,246],[215,266],[270,330],[150,330],[130,260]],'#a9c1de');
  poly([[560,330],[640,270],[720,226],[790,214],[950,214],[950,330]],'#dbe9f8');
  poly([[720,226],[790,214],[950,214],[950,330],[740,330],[760,270]],'#8fb0d6');
  poly([[250,330],[310,270],[350,230],[405,185],[440,150],[468,120],[490,85],[512,52],[533,72],[552,95],[580,118],[610,150],[650,185],[700,215],[750,250],[800,290],[950,330]],'#7fa3cc');
  poly([[512,52],[500,75],[478,100],[455,135],[430,165],[400,190],[375,215],[345,235],[320,265],[300,300],[360,310],[420,300],[470,270],[520,225],[540,170],[545,120],[533,72]],'#f4f9ff');
  ctx.strokeStyle='#5d86b5';ctx.lineWidth=2;
  for(const ln of [[[512,52],[526,100],[546,150],[582,192],[626,232]],[[512,52],[522,96],[517,142],[532,192],[522,244]],[[500,75],[492,130],[470,180],[430,225]]]){ctx.beginPath();ln.forEach((q,i)=>{if(i)ctx.lineTo(q[0],q[1]);else ctx.moveTo(q[0],q[1])});ctx.stroke()}
  poly([[440,235],[480,245],[470,275],[430,268]],'#6f8fb5');poly([[560,170],[600,190],[585,225],[550,205]],'#6a8bb3');
  const cl=(x,y,r)=>{ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fill()};
  ctx.fillStyle='#dcecff';for(let i=0;i<32;i++)cl(((i*40+T*14)%1280+1280)%1280-240,318+((i*29)%24),34+((i*13)%18));
  ctx.fillStyle='#fff';for(let i=0;i<29;i++)cl(((i*44+T*24)%1280+1280)%1280-240,340+((i*17)%22),38+((i*11)%20));
  ctx.fillRect(-W,350,3*W,300);if(L.night||L.dk){ctx.fillStyle='rgba(8,12,32,.62)';ctx.fillRect(-W,-H,3*W,3*H)}}
 if(L.spc){
  ctx.drawImage(neb(),0,0,W,H);
  for(let i=0;i<260;i++){const x=(i*397+53)%800,y=(i*211+29)%450,big=i%23===0;ctx.globalAlpha=.35+.45*Math.abs(Math.sin(T*(.6+(i%5)*.3)+i));ctx.fillStyle=i%7===0?'#bfe6ff':(i%11===0?'#ffd9b0':'#fff');ctx.fillRect(x,y,big?2:1.2,big?2:1.2)}
  for(const [x,y,r,col] of [[330,225,16,'#fff'],[113,77,8,'#cfe9ff'],[573,100,7,'#cfe9ff'],[274,119,6,'#fff'],[346,169,5,'#e8f6ff'],[758,259,9,'#ff7a8a'],[445,381,7,'#cfe9ff'],[544,282,5,'#fff']]){
   const gl=ctx.createRadialGradient(x,y,0,x,y,r*2.2);gl.addColorStop(0,col);gl.addColorStop(1,'rgba(255,255,255,0)');
   ctx.globalAlpha=.55+.25*Math.sin(T*2+x);ctx.fillStyle=gl;ctx.beginPath();ctx.arc(x,y,r*2.2,0,7);ctx.fill();
   ctx.strokeStyle=col;ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(x-r*1.6,y);ctx.lineTo(x+r*1.6,y);ctx.moveTo(x,y-r*1.6);ctx.lineTo(x,y+r*1.6);ctx.stroke()}
  ctx.globalAlpha=1}
 if(L.ert){
  ctx.drawImage(earth(),0,0,W,H);
  for(let i=0;i<300;i++){const x=(i*397+53)%800,y=(i*211+29)%260;if(y>2212-Math.sqrt(4e6-(x-385)*(x-385))-4)continue;ctx.globalAlpha=.3+.5*Math.abs(Math.sin(T*(.5+(i%5)*.3)+i));ctx.fillStyle=i%9===0?'#bfe6ff':'#fff';ctx.fillRect(x,y,i%29===0?2:1.2,i%29===0?2:1.2)}
  ctx.globalAlpha=1}
 if(L.night&&!L.spc&&!L.ert){if(!L.pk){ctx.fillStyle='#fff';for(let i=0;i<45;i++)ctx.fillRect((i*137)%W,(i*83)%260,2,2)}if(!L.moon){ctx.fillStyle='#f1f1e6';ctx.beginPath();ctx.arc(660,95,36,0,7);ctx.fill()}}
 if(L.bg==='spikes'){
  ctx.fillStyle='#fff';
  for(let i=0;i<7;i++){const r=20+(i*13)%22,cx=((i*173+T*(8+i*3))%(W+260))-130,cy=50+(i*47)%150;ctx.globalAlpha=.9;for(const [dx,dy,rr] of [[0,0,r],[r*.9,4,r*.8],[-r*.9,6,r*.7],[r*1.7,9,r*.55]]){ctx.beginPath();ctx.arc(cx+dx,cy+dy,rr,0,7);ctx.fill()}}
  for(let ly=0;ly<2;ly++){ctx.globalAlpha=ly?.5:.3;const sp=ly?84:62;
   for(let x=-20;x<W+40;x+=sp){const hh=(ly?110:150)+Math.abs((x*37+ly*91)%60);
    for(let k=0;k<3;k++){const ph=x*.05+k*2.2,bx=x+k*13;vine(t=>[bx+Math.sin(t*4.2+ph)*(10+t*20),400-hh*t],11,ly?2.4:2,ly?6:5,ly?'#d9f99d':'#c7f27a')}}}
  ctx.globalAlpha=1}
 if(L.bg==='clocks'){
  ctx.lineCap='round';ctx.strokeStyle='#e9ecef';ctx.lineWidth=1;
  for(let i=0;i<42;i++){const cx=(i*191+37)%W,cy=14+(i*113)%360,r=4+(i*7)%8,a1=T*(1+(i%3))+i,a2=a1/12;
   ctx.globalAlpha=Math.max(.15,.45+.4*Math.sin(T*1.5+i));
   ctx.beginPath();ctx.arc(cx,cy,r,0,7);ctx.stroke();
   ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.sin(a1)*r*.8,cy-Math.cos(a1)*r*.8);ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.sin(a2)*r*.5,cy-Math.cos(a2)*r*.5);ctx.stroke()}
  ctx.globalAlpha=1}
 if(!L.bg&&!L.pk&&!L.spc&&!L.ert)for(const [mx,mh] of [[110,200],[330,270],[560,220],[740,250]]){ctx.fillStyle=L.night?'#3d4a6b':'#8d99ae';ctx.beginPath();ctx.moveTo(mx-150,400);ctx.lineTo(mx,400-mh);ctx.lineTo(mx+150,400);ctx.fill();ctx.fillStyle=L.night?'#cbd5e1':'#fff';ctx.beginPath();ctx.moveTo(mx-40,400-mh*.72);ctx.lineTo(mx,400-mh);ctx.lineTo(mx+40,400-mh*.72);ctx.lineTo(mx+14,400-mh*.8);ctx.lineTo(mx-8,400-mh*.7);ctx.fill()}
 for(const o of L.objs)dObj(o);
 if(L.bl)for(const b of L.bl){ctx.fillStyle='#ff6b35';ctx.fillRect(b.x,b.y,b.w,b.h);ctx.fillStyle='#ffd166';ctx.fillRect(b.vx<0?b.x:b.x+1,b.y+(b.vy?0:1),b.vy?b.w:b.w/2,b.vy?b.h/2:b.h-2)}
 if(st!=='menu'&&!(blast&&st==='dead')&&!p.tpT){
 const dr=L.objs.find(o=>o.k==='door');
 if(st==='clear'&&dr&&!L.cd){const q=Math.max(0,Math.min(1,(110-clrT-25)/50)),ax=p.x+11,ay=p.y+p.h,sc=1-q*.5;ctx.save();ctx.globalAlpha=1-Math.max(0,q-.5)*2;ctx.translate(ax+(dr.x+dr.w/2-ax)*q,ay);ctx.scale(sc,sc);ctx.translate(-ax,-ay);dP();ctx.restore()}
 else dP();
}
 if(blast)dDeath();
 for(const q of ps){ctx.fillStyle=q.c;ctx.fillRect(q.x,q.y,5,5)}
 if(p.tpT&&p.tpP){const k=p.tpT;if(k<22){ctx.globalAlpha=1-k/22;ctx.fillStyle='#ffd166';ctx.beginPath();ctx.arc(p.to[0],p.to[1],12+k*3,0,7);ctx.fill();ctx.fillStyle='#e63946';ctx.beginPath();ctx.arc(p.to[0],p.to[1],6+k*1.8,0,7);ctx.fill();ctx.globalAlpha=1}
  const TD=p.tpD||180;if(k>TD-60){ctx.globalAlpha=(k-TD+60)/60*.5;ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(p.tpx+11,p.tpy+17,20,0,7);ctx.fill();ctx.globalAlpha=1}
  for(const q of p.tpP){ctx.fillStyle=q.c;ctx.fillRect(q.x,q.y,5,5)}}
 ctx.restore();
 ctx.fillStyle='#fff';ctx.font='700 16px system-ui,sans-serif';
 ctx.textAlign='center';ctx.font='800 26px system-ui,sans-serif';ctx.fillText('LEVEL '+(lvl+1),W/2,34);ctx.font='700 16px system-ui,sans-serif';ctx.textAlign='left';ctx.fillText(L.name,14,26);
 ctx.textAlign='right';ctx.fillText('Deaths: '+deaths,W-100,26);
 if(hintT>0&&st==='play'){ctx.globalAlpha=Math.min(1,hintT/40);ctx.textAlign='center';ctx.font='600 18px system-ui,sans-serif';ctx.fillText(L.hint,W/2,66);ctx.globalAlpha=1}
 if(L.hold&&st==='play'){ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(W/2-170,H/2-30,340,52);ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='700 24px system-ui,sans-serif';ctx.fillText('Press any button to start',W/2,H/2+5)}
 if(L.cdT>0&&st==='play'){ctx.textAlign='center';ctx.font='800 50px system-ui,sans-serif';ctx.fillText(Math.ceil(L.cdT/60),W/2,122)}
 if(st==='clear'){ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(0,0,W,H);ctx.fillStyle='#80ed99';ctx.textAlign='center';ctx.font='800 44px system-ui,sans-serif';ctx.fillText('LEVEL '+(lvl+1)+' COMPLETED!',W/2,H/2+14)}
 if(L.fk>0&&st==='play'){ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(0,H/2-42,W,84);ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='700 26px system-ui,sans-serif';ctx.fillText(L.fkt,W/2,H/2+9)}
 if(st==='dead'&&msg){ctx.fillStyle='rgba(0,0,0,.6)';ctx.fillRect(0,H/2-42,W,84);ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='700 26px system-ui,sans-serif';ctx.fillText(msg,W/2,H/2+9)}
}
let acc=0,last=0;
function loop(ts){acc+=Math.min(.1,(ts-last)/1000||0);last=ts;T=ts/1000;while(acc>=1/60){step();acc-=1/60}draw();requestAnimationFrame(loop)}
load(0);requestAnimationFrame(loop);
})();