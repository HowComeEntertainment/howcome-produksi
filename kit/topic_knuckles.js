// ===== HOWCOME? | What If You Cracked Your Knuckles Every Day? =====
function hand(s=1,t=0,bend=0){const f=[[-90,-230,52],[-30,-260,54],[30,-250,52],[88,-215,48]];
  return g(`scale(${s})`,`<path d="M-130,-60Q-140,120 -40,170L60,170Q150,120 140,-60Z" fill="#F6D2B8" stroke="${OL}" stroke-width="8" stroke-linejoin="round"/>`+
   f.map(([x,y,w],i)=>`<rect x="${x-w/2}" y="${y+bend*40}" width="${w}" height="${-y-40}" rx="${w/2}" fill="#F6D2B8" stroke="${OL}" stroke-width="8"/><path d="M${x-14},-60Q${x},-48 ${x+14},-60" stroke="#D9A88C" stroke-width="6" fill="none" stroke-linecap="round"/>`).join('')+
   `<rect x="-200" y="-80" width="70" height="170" rx="35" fill="#F6D2B8" stroke="${OL}" stroke-width="8" transform="rotate(-30 -165 0)"/>`);}
function popFx(t,t0,x,y,txt='POP!'){const k=popS(t,t0,.35);if(k<=0||t>t0+1.2)return '';return g(tr(x,y,k,-8),`<path d="M0,-90L22,-30L85,-40L40,8L70,70L5,40L-45,85L-35,22L-95,-5L-30,-25Z" fill="#FFE27A" stroke="${OL}" stroke-width="7"/><text x="0" y="16" text-anchor="middle" font-family="B2" font-weight="800" font-size="44" fill="${OL}">${txt}</text>`,'filter="url(#dsh)"');}
function joint(t,gap,bub,s=1){return g(`scale(${s})`,`<rect x="-300" y="-90" width="300" height="180" rx="90" fill="#F3E9D8" stroke="${OL}" stroke-width="8" transform="translate(${fmt(-gap)} 0)"/><rect x="0" y="-90" width="300" height="180" rx="90" fill="#F3E9D8" stroke="${OL}" stroke-width="8" transform="translate(${fmt(gap)} 0)"/>
  <ellipse cx="0" cy="0" rx="${fmt(70+gap)}" ry="120" fill="#9FD8F5" opacity=".75" stroke="#5EC8FF" stroke-width="6"/>`+(bub>0?`<circle cx="0" cy="0" r="${fmt(48*bub)}" fill="#fff" stroke="${OL}" stroke-width="6" opacity=".95"/><circle cx="-14" cy="-14" r="${fmt(12*bub)}" fill="#fff"/>`:''));}
function trophy(s=1){return g(`scale(${s})`,`<path d="M-90,-120L90,-120L70,10Q0,70 -70,10Z" fill="#F4C542" stroke="${OL}" stroke-width="8"/><path d="M-90,-100Q-150,-100 -140,-40Q-130,0 -80,0M90,-100Q150,-100 140,-40Q130,0 80,0" stroke="${OL}" stroke-width="10" fill="none"/><rect x="-20" y="40" width="40" height="60" fill="#F4C542" stroke="${OL}" stroke-width="7"/><rect x="-80" y="96" width="160" height="40" rx="10" fill="#D99A2B" stroke="${OL}" stroke-width="7"/><text x="0" y="-36" text-anchor="middle" font-family="B2" font-weight="800" font-size="40" fill="${OL}">IG</text>`);}
function timerRing(t,t0,x,y,s=1,label='20 MIN'){const p=clamp((t-t0)/3);return g(tr(x,y,s),`<circle r="130" fill="#10202E" stroke="${OL}" stroke-width="8"/><circle r="110" fill="none" stroke="#2B3350" stroke-width="22"/><circle r="110" fill="none" stroke="#5EC8FF" stroke-width="22" stroke-dasharray="${fmt(691*p)} 691" transform="rotate(-90)"/><text x="0" y="18" text-anchor="middle" font-family="B2" font-weight="800" font-size="52" fill="#fff">${label}</text>`,'filter="url(#dsh)"');}
const B={
 hook:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#C9CFC4"/><circle cx="960" cy="900" r="560" fill="#fff" opacity=".4" filter="url(#glowf)"/>`;
   s+=g(tr(960,1000,popS(t,t0,.4)*(isV?1.2:1)),hand(1,t,t<WT('crack','hook')+.2?0:.2),'filter="url(#dsh)"');
   s+=popFx(t,WT('pop','hook'),isV?700:640,720,'POP!')+popFx(t,WT('crack','hook'),isV?1220:1280,700,'CRACK!');
   if(t>WT('what','hook')-.2)s+=komo({x:isV?1240:1500,y:1420,s:isV?.6:.6,expr:t>WT('arthritis','hook')?'surprised':'think',aL:70,aR:70,blink:blinkAt(t,1)});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.15],[960,940,1.0]),
  hud:t=>(t>WT('noticing','hook')-.3&&t<WT('what','hook')?label('DONE TODAY WITHOUT NOTICING?',{x:W/2,y:isV?470:150,size:isV?42:54,bg:'#5B6C8F',sc:popS(t,WT('noticing','hook')-.3,.45)}):'')+(t>WT('what','hook')?hudTitle('= ARTHRITIS?',isV?470:150,popS(t,WT('arthritis','hook')-.2,.45),{fill:'#FFE27A',size:isV?96:90}):'')}),
 sil_hook:(t0,t1)=>({
  world:t=>{let s=grid('#3B3A7A');const ph=(t-t0)%2.2;
   s+=g(tr(isV?960:760,1000,isV?1:.9),hand(1,t,ph<.3?.25:0),'filter="url(#dsh)"');
   if(ph<.6&&t>t0+2.4)s+=popFx(t,t0+2.4+Math.floor((t-t0-2.4)/2.2)*2.2,isV?960:760,720,'POP!');
   if(!isV)s+=komo({x:1460,y:1420,s:.65,expr:'think',aL:70,aR:-30,holdR:KOMO.magnifier,blink:blinkAt(t,2)});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.06]),
  hud:t=>chapter(t,t0,t0+2.4,['HOW COME?'])+(t>t0+2.5?g(tr(W/2,isV?520:860),factCard(t,t0+2.5,['THE QUESTION:','Does cracking cause arthritis?'],{size:isV?48:52,w:isV?900:1100})):'')+(t>t0+8?label('LET\'S LOOK INSIDE',{x:W/2,y:isV?1330:150,size:56,bg:'#3BB273',sc:popS(t,t0+8,.45)}):'')}),
 context:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#E9C9A3"/><circle cx="960" cy="900" r="560" fill="#fff" opacity=".35" filter="url(#glowf)"/>`;
   const k=popS(t,WT('half','context'),.5);for(let i=0;i<10;i++){const x=(isV?540:520)+(i%5)*(isV?210:220),y=760+Math.floor(i/5)*300,on=i%2===0;if(k>0)s+=g(tr(x,y,k*.6),`<circle cy="-60" r="50" fill="#F6D2B8" stroke="${OL}" stroke-width="6"/><rect x="-55" y="-10" width="110" height="130" rx="40" fill="${on?'#F28C38':'#CDD6DE'}" stroke="${OL}" stroke-width="6"/>`+(on?`<text x="0" y="-130" text-anchor="middle" font-family="B2" font-weight="800" font-size="46" fill="#E8505B">POP!</text>`:''));}
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.05]),
  hud:t=>hudTitle('UP TO HALF OF PEOPLE',isV?440:150,popS(t,WT('half','context'),.45),{size:isV?72:72})+(t>WT('bored','context')-.2?label('BORED OR STRESSED',{x:W/2,y:isV?600:270,size:52,bg:'#5B6C8F',sc:popS(t,WT('bored','context')-.2,.45)}):'')+(t>WT('sound','context')-.4?label('WHERE DOES THE POP COME FROM?',{x:W/2,y:isV?1330:850,size:isV?40:50,bg:'#E8505B',sc:popS(t,WT('sound','context')-.4,.45)}):'')}),
 sil_context:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="880" r="560" fill="#F4C542" opacity=".2" filter="url(#glowf)"/>`;
   ['BONES?','LIGAMENTS?','BUBBLES?'].forEach((tx,i)=>{const k=popS(t,t0+1+i*1.5,.45);if(k>0)s+=label(tx,{x:(isV?600:520)+i*(isV?360:440),y:isV?760:820,size:isV?50:58,bg:['#5B6C8F','#9C7BE0','#3BB273'][i],sc:k,r:(i-1)*4});});
   s+=komo({x:960,y:1400,s:isV?.8:.55,expr:t>t0+6?'surprised':'think',aL:70,aR:-30,holdR:KOMO.magnifier,blink:blinkAt(t,3)});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.05]),
  hud:t=>hudTitle('THE GREAT KNUCKLE MYSTERY',isV?440:150,popS(t,t0+.2,.45),{size:isV?58:66})+(t>t0+7?g(tr(W/2,isV?1330:850),factCard(t,t0+7,['Scientists argued about it','for more than 100 years'],{size:isV?42:44,w:isV?800:900})):'')}),
 point1:(t0,t1)=>({
  world:t=>{let s=grid('#2A1F2B');const gp=t>WT('pull','point1')?30*ss((t-WT('pull','point1'))/1):0;const bb=t>WT('gas','point1')?ss((t-WT('gas','point1'))/.4):0;
   s+=g(tr(960,900,popS(t,t0+.1,.5)*(isV?.9:1)),joint(t,gp,bb),'filter="url(#dsh)"');
   if(t>WT('mri','point1')-.4)s+=`<rect x="${isV?560:480}" y="${isV?600:680}" width="${isV?800:960}" height="${isV?600:520}" rx="30" fill="none" stroke="#7FD18B" stroke-width="8" stroke-dasharray="30 20"/><text x="${isV?590:510}" y="${isV?650:1170}" font-family="B2" font-weight="800" font-size="40" fill="#7FD18B">● REC  MRI</text>`;
   s+=popFx(t,WT('pop','point1'),960,isV?720:660,'POP!');
   return s;},
  cam:t=>camV(t,t0,t1,[960,920,1.0],[960,900,1.08]),
  hud:t=>hudTitle('INSIDE YOUR KNUCKLE',isV?440:150,popS(t,t0+.1,.45),{size:isV?72:72})+(t>WT('pressure','point1')&&t<WT('scientists','point1')?label('PRESSURE DROPS → GAS BUBBLE',{x:W/2,y:isV?1330:850,size:isV?42:50,bg:'#5EC8FF',fill:OL,sc:popS(t,WT('pressure','point1'),.45)}):'')+(t>WT('scientists','point1')?srcText('Source: Kawchuk et al., PLOS ONE (2015)',fadeIn(t,WT('scientists','point1'))):'')}),
 sil_point1:(t0,t1)=>({
  world:t=>{let s=grid('#3B3A7A');const steps=[0,1,2];
   steps.forEach(i=>{const k=popS(t,t0+.8+i*1.8,.45);if(k<=0)return;const x=(isV?640:500)+i*(isV?320:460);s+=g(tr(x,880,k*(isV?.45:.55)),joint(t,i===0?0:30,i===2?1:0,1));s+=bigText(['TOGETHER','PULLED','BUBBLE = POP'][i],x,1120,isV?36:46,{sw:8});
     if(i<2)s+=`<path d="M${x+(isV?130:170)},880L${x+(isV?190:290)},880" stroke="#FFE27A" stroke-width="14" stroke-linecap="round"/>`;});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.04]),
  hud:t=>hudTitle('THE POP IN 3 STEPS',isV?440:150,popS(t,t0+.2,.45),{size:isV?72:72})+(t>t0+7?g(tr(W/2,isV?1330:850),factCard(t,t0+7,['It\'s a gas cavity forming,','not bones grinding'],{size:isV?42:44,w:isV?800:900})):'')+srcText('Source: Kawchuk et al., PLOS ONE (2015)',fadeIn(t,t0+.4))}),
 point2:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#0F2A3A"/><circle cx="960" cy="880" r="560" fill="#5EC8FF" opacity=".18" filter="url(#glowf)"/>`;
   const tg=WT('twenty','point2');
   if(t<tg-.3)s+=g(tr(960,960,isV?1:.9),hand(1,t,.2),'filter="url(#dsh)"')+g(tr(isV?1260:1300,isV?700:880,popS(t,WT('can\'t','point2'),.45)*1.1),xmark(1));
   else{s+=timerRing(t,tg,isV?960:700,isV?900:1010,isV?1.3:1.1);const kb=popS(t,WT('recharge','point2'),.45);if(kb>0)s+=g(tr(isV?960:1300,isV?1250:900,kb*.9),`<rect x="-150" y="-70" width="300" height="140" rx="24" fill="#fff" stroke="${OL}" stroke-width="8"/><rect x="150" y="-26" width="24" height="52" rx="6" fill="${OL}"/><rect x="-134" y="-54" width="${fmt(268*clamp((t-WT('recharge','point2'))/1.5))}" height="108" rx="16" fill="#3BB273"/>`,'filter="url(#dsh)"');}
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.06]),
  hud:t=>hudTitle('WHY NOT AGAIN RIGHT AWAY?',isV?440:150,popS(t,t0+.1,.45),{size:isV?58:66})+(t>WT('dissolve','point2')-.3?label('GAS DISSOLVES BACK',{x:W/2,y:isV?600:270,size:52,bg:'#5EC8FF',fill:OL,sc:popS(t,WT('dissolve','point2')-.3,.45)}):'')+srcText('Source: Unsworth et al., Ann Rheum Dis (1971)',fadeIn(t,t0+.4))}),
 sil_point2:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".5" filter="url(#glowf)"/>`;
   s+=timerRing(t,t0+.3,isV?960:720,isV?880:1000,isV?1.1:1.0,'RECHARGE');
   s+=komo({x:isV?960:1380,y:1420,s:isV?.6:.62,expr:'smile',aL:70,aR:70,blink:blinkAt(t,5)});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.04]),
  hud:t=>hudTitle('~20 MINUTES',isV?440:150,popS(t,t0+.2,.45),{fill:OL,size:isV?84:80})+(t>t0+(IS_SHORT?.3:4)?g(tr(W/2,isV?1330:850),factCard(t,t0+(IS_SHORT?.3:4),['Your joint needs time','before it can pop again'],{size:isV?42:44,w:isV?760:820})):'')}),
 twist:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="880" r="560" fill="#F4C542" opacity=".2" filter="url(#glowf)"/>`;
   const kl=popS(t,WT('left','twist'),.45),kr=popS(t,WT('left','twist')+.3,.45);const L=isV?700:620,R=isV?1220:1300;
   if(kl>0){s+=g(tr(L,isV?960:1020,kl*.7),`<g transform="scale(-1 1)">`+hand(1,t,Math.sin(t*6)>.6?.2:0)+`</g>`);s+=bigText('LEFT: CRACKED',L,isV?1180:1230,isV?40:48,{sw:8,fill:'#FFE27A'});}
   if(kr>0){s+=g(tr(R,isV?960:1020,kr*.7),hand(1,t,0));s+=bigText('RIGHT: NEVER',R,isV?1180:1230,isV?40:48,{sw:8});}
   const ka=popS(t,WT('arthritis','twist'),.45);if(ka>0){s+=g(tr(L,isV?720:800,ka*.6),check(1))+g(tr(R,isV?720:800,ka*.6),check(1));}
   const kt=popS(t,WT('ig','twist')-.3,.45);if(kt>0)s+=g(tr(960,isV?1250:860,kt*(isV?.9:.8)),trophy(1),'filter="url(#dsh)"');
   return s;},
  cam:t=>camV(t,t0,t1,[960,940,1.0],[960,920,1.06]),
  hud:t=>chapter(t,t0,WT('one','twist')-.05,['PLOT TWIST!'])+(t>WT('sixty','twist')-.2?hudTitle('60 YEARS!',isV?460:150,popS(t,WT('sixty','twist'),.45),{fill:'#FFE27A',size:isV?96:90}):'')+(t>WT('arthritis','twist')?label('NO ARTHRITIS IN EITHER HAND',{x:W/2,y:isV?600:270,size:isV?42:50,bg:'#3BB273',sc:popS(t,WT('arthritis','twist'),.45)}):'')+(t>WT('sixty','twist')?srcText('Source: Unger, Arthritis & Rheumatism (1998); Ig Nobel Prize (2009)',fadeIn(t,WT('sixty','twist'))):'')}),
 sil_twist:(t0,t1)=>({
  world:t=>`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".5" filter="url(#glowf)"/>`+g(tr(960,isV?900:880,popS(t,t0+.1,.5)*(isV?.9:.8)),checkCard(t,[{txt:'NO ARTHRITIS LINK',t:t0+1.2},{txt:'MAYBE SOME SWELLING',t:t0+3},{txt:'PAIN? SEE A DOCTOR',t:t0+5}])),
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.04]),
  hud:t=>hudTitle('THE VERDICT',isV?400:150,popS(t,t0+.2,.45),{fill:OL,size:isV?80:76})+srcText('Sources: deWeber et al., J Am Board Fam Med (2011); Castellanos & Axelrod, Ann Rheum Dis (1990)',fadeIn(t,t0+.4))}),
 cta:(t0,t1)=>({
  world:t=>{const sl=eout((t-t0)/.5);
   let s=`<rect width="1920" height="1920" fill="#222"/><path d="M0,0L${fmt(lerp(-200,1040,sl))},0L${fmt(lerp(-400,880,sl))},1920L0,1920Z" fill="#F28C38"/><path d="M1920,0L${fmt(lerp(2120,1040,sl))},0L${fmt(lerp(2320,880,sl))},1920L1920,1920Z" fill="#3BB273"/>`;
   const L=isV?680:560,R=isV?1240:1360,y=isV?920:1030;
   const k1=popS(t,WT('crack','cta'),.5),k2=popS(t,WT('no','cta'),.5);
   if(k1>0)s+=g(tr(L,y,k1*.45),hand(1,t,Math.sin(t*6)>.5?.2:0))+popFx(t,WT('crack','cta')+.3,L+90,y-130,'POP!');if(k2>0)s+=g(tr(R,y,k2*.45),hand(1,t,0));
   s+=bigText('TEAM CRACK',L,isV?720:820,isV?50:66,{sw:10})+bigText('TEAM NO CRACK',R,isV?720:820,isV?46:62,{sw:10});
   const kv=popS(t,WT('or','cta'),.4);if(kv>0)s+=g(tr(960,isV?800:900,kv,-6),`<circle r="90" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="84" fill="${OL}">VS</text>`,'filter="url(#dsh)"');
   s+=komo({x:960,y:lerp(1950,isV?1480:1440,eout((t-t0)/.6)),s:isV?.72:.68,expr:'happy',aR:-60+Math.sin(t*9)*14,aL:70,blink:blinkAt(t,13)});
   const kc=popS(t,WT('comments','cta'),.45);if(kc>0)s+=g(tr(isV?1150:1290,1080,kc*(isV?.85:1),3),bubble(520,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="${OL}">Tell me below!</text>`,'filter="url(#dsh)"');
   return s;},
  cam:t=>camV(t,t0,t1,[960,1000,1.0],[960,980,1.05]),
  hud:t=>hudTitle('ARE YOU A CRACKER?',isV?470:150,popS(t,t0+.05,.45),{fill:'#FFE27A',size:isV?74:80})}),
 sil_outro:(t0,t1)=>subscribeEnd(null,t0,t1),
 pad:(t0,t1,it)=>it.name==='pad_end'?subscribeEnd(null,t0,t1):B.sil_point2(t0,t1),
};
buildFromPlan(B);
if(!isV)S.forEach(sc=>{const c=sc.cam;sc.cam=t=>{const v=c(t);return [v[0],v[1]+90,v[2]];};});
var THUMB={t:ITEM('hook').t1-0.3,lines:['WHAT IF YOU CRACKED','YOUR KNUCKLES','EVERY DAY?']};
