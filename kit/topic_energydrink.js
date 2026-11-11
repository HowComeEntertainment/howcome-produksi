// ===== HOWCOME? | What If You Drank an Energy Drink Every Day? =====
function can(s=1,txt='ZAP!'){return g(`scale(${s})`,`<rect x="-80" y="-200" width="160" height="380" rx="26" fill="#2B3350" stroke="${OL}" stroke-width="8"/><rect x="-70" y="-214" width="140" height="30" rx="12" fill="#CDD6DE" stroke="${OL}" stroke-width="6"/>
 <path d="M-80,-40L80,-110L80,-20L-80,50Z" fill="#7FD18B"/><path d="M-10,-150L-50,-20L-5,-20L-30,90L45,-60L0,-60L25,-150Z" fill="#FFE27A" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/><text x="0" y="150" text-anchor="middle" font-family="B2" font-weight="800" font-size="40" fill="#fff">${txt}</text><rect x="-60" y="-180" width="16" height="320" rx="8" fill="#fff" opacity=".15"/>`);}
function headache(t,s=1){return g(`scale(${s})`,[0,1,2].map(i=>`<path d="M${-60+i*60},-120l20,-40l10,30l20,-40" stroke="#E5383B" stroke-width="10" fill="none" stroke-linecap="round" transform="rotate(${fmt(Math.sin(t*20+i)*6)})"/>`).join(''));}
function fog(t,s=1){return g(`scale(${s})`,[0,1,2].map(i=>`<ellipse cx="${fmt(-120+i*120+Math.sin(t+i)*20)}" cy="${-20*i}" rx="140" ry="60" fill="#B8C2CC" opacity=".8" stroke="${OL}" stroke-width="5"/>`).join(''));}
function receptor(t,x,y,blocked,k=1){return g(tr(x,y,k),`<path d="M-60,0L-60,-60Q-60,-90 -30,-90L-20,-90L-20,-40L20,-40L20,-90L30,-90Q60,-90 60,-60L60,0Z" fill="#9C7BE0" stroke="${OL}" stroke-width="6"/>`+(blocked?`<rect x="-18" y="-88" width="36" height="46" rx="8" fill="#8C5A3C" stroke="${OL}" stroke-width="5"/>`:''));}
function bp(t,v,x,y,s=1){const a=-120+240*v;return g(tr(x,y,s),`<path d="M-160,0A160,160 0 0 1 160,0" stroke="#1B2A3F" stroke-width="40" fill="none"/><path d="M-160,0A160,160 0 0 1 0,-160" stroke="#3BB273" stroke-width="40" fill="none"/><path d="M0,-160A160,160 0 0 1 113,-113" stroke="#F4C542" stroke-width="40" fill="none"/><path d="M113,-113A160,160 0 0 1 160,0" stroke="#E5383B" stroke-width="40" fill="none"/>
 <path d="M0,0L0,-130" stroke="${OL}" stroke-width="12" stroke-linecap="round" transform="rotate(${fmt(a)})"/><circle r="20" fill="${OL}"/><text x="0" y="70" text-anchor="middle" font-family="B2" font-weight="800" font-size="46" fill="#fff">BLOOD PRESSURE</text>`,'filter="url(#dsh)"');}
function ecg(t,x0,x1,y,col,odd){let p=`M${x0},${y}`;for(let x=x0;x<=x1;x+=6){const ph=((x-x0)/180+t*0.8)%1;let v=0;if(ph>.4&&ph<.43)v=-20;else if(ph>.45&&ph<.48)v=odd?-150:-110;else if(ph>.48&&ph<.51)v=60;else if(ph>.6&&ph<.7)v=odd?-40*Math.sin((ph-.6)/.1*Math.PI):-25*Math.sin((ph-.6)/.1*Math.PI);p+=`L${x},${fmt(y+v)}`;}return `<path d="${p}" stroke="${col}" stroke-width="8" fill="none" stroke-linejoin="round"/>`;}
const B={
 hook:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#0F2A3A"/><circle cx="960" cy="880" r="560" fill="#7FD18B" opacity=".18" filter="url(#glowf)"/>`;
   [['MORNING',WT('morning','hook')],['AFTER LUNCH',WT('lunch','hook')],['BEFORE GYM',WT('gym','hook')]].forEach(([tx,ti],i)=>{const k=popS(t,ti-.3,.45);if(k<=0)return;const x=isV?600+i*360:560+i*400;
     s+=g(tr(x,880,k*(isV?.85:.8),(i-1)*6),can(1),'filter="url(#dsh)"')+label(tx,{x,y:1150,size:isV?40:46,bg:['#F4C542','#5EC8FF','#E8505B'][i],fill:i?'#fff':OL,sc:k,r:(i-1)*3});});
   if(!isV)s+=komo({x:1640,y:1420,s:.6,expr:t>WT('what','hook')?'surprised':'happy',aL:70,aR:70,blink:blinkAt(t,1)});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.1],[960,940,1.0]),
  hud:t=>hudTitle('EVERY. SINGLE. DAY?',isV?460:150,popS(t,WT('what','hook'),.45),{fill:'#FFE27A',size:isV?84:80})}),
 sil_hook:(t0,t1)=>({
  world:t=>{let s=grid('#3B3A7A');const n=Math.min(30,Math.floor(Math.max(0,t-t0-2.6)*2.4));
   for(let i=0;i<n;i++){const x=(isV?520:420)+(i%10)*(isV?90:110),y=(isV?760:780)+Math.floor(i/10)*170;s+=g(tr(x,y,.32),can(1));}
   if(!isV)s+=komo({x:1640,y:1420,s:.6,expr:'think',aL:70,aR:-30,holdR:KOMO.magnifier,blink:blinkAt(t,2)});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.05]),
  hud:t=>chapter(t,t0,t0+2.4,['HOW COME?'])+(t>t0+2.5?hudTitle(`${Math.min(30,Math.floor(Math.max(0,t-t0-2.6)*2.4))} CANS A MONTH`,isV?460:150,popS(t,t0+2.6,.45),{size:isV?80:76}):'')+(t>t0+9?label("WHAT'S IN EACH CAN?",{x:W/2,y:isV?1330:850,size:52,bg:'#E8505B',sc:popS(t,t0+9,.45)}):'')}),
 context:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="880" r="560" fill="#F4C542" opacity=".2" filter="url(#glowf)"/>`;
   s+=g(tr(isV?960:620,900,popS(t,t0+.1,.5)*(isV?.9:1)),can(1.1),'filter="url(#dsh)"');
   const ns=t>WT('fifty','context')?Math.min(13,Math.floor((t-WT('fifty','context'))*8)):0;
   for(let i=0;i<ns;i++)s+=g(tr((isV?620:1080)+(i%5)*(isV?90:110),(isV?1240:1160)-Math.floor(i/5)*90,1),sugarCube(0,0,34));
   const kz=popS(t,WT('sleep','context'),.45);if(kz>0)s+=g(tr(isV?1300:1500,isV?760:740,kz),`<circle r="90" fill="#1B2347" stroke="${OL}" stroke-width="8"/><path d="M20,-50A60,60 0 1 0 50,30A48,48 0 1 1 20,-50Z" fill="#F6E7A8"/>`)+g(tr(isV?1300:1500,isV?760:740,kz*1.6),xmark(1));
   return s;},
  cam:t=>camV(t,t0,t1,[960,920,1.0],[960,900,1.06]),
  hud:t=>(t>WT('caffeine','context')-.3?hudTitle('~160 MG CAFFEINE',isV?460:150,popS(t,WT('one','context'),.45),{fill:'#FFE27A',size:isV?80:80}):'')+(t>WT('fifty','context')-.2?label('50+ G SUGAR',{x:W/2,y:isV?600:270,size:58,bg:'#E8505B',sc:popS(t,WT('fifty','context'),.45)}):'')+
   (t>WT('afternoon','context')?label('AFTERNOON CAN = LESS SLEEP',{x:W/2,y:isV?1330:850,size:isV?44:52,bg:'#5B6C8F',sc:popS(t,WT('afternoon','context'),.45)}):'')+srcText('Sources: typical 16 oz can labels; Drake et al., J Clin Sleep Med (2013)',fadeIn(t,t0+.4))}),
 sil_context:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".5" filter="url(#glowf)"/>`;
   const bars=[['1 CAN',54,'#E8505B'],['DAILY MAX*',36,'#3BB273']];const x0=isV?640:620,base=1250;
   bars.forEach(([lab,v,c],i)=>{const k=eout(clamp((t-t0-1-i*.6)/.7)),h=v/60*560*k,x=x0+i*(isV?320:380);s+=`<rect x="${x}" y="${fmt(base-h)}" width="200" height="${fmt(h)}" rx="18" fill="${c}" stroke="${OL}" stroke-width="7"/><text x="${x+100}" y="${base+66}" text-anchor="middle" font-family="B2" font-weight="800" font-size="46" fill="${OL}">${lab}</text>`;if(k>.9)s+=`<text x="${x+100}" y="${fmt(base-h-26)}" text-anchor="middle" font-family="B2" font-weight="800" font-size="62" fill="${c}" stroke="#fff" stroke-width="8" paint-order="stroke">${v}g</text>`;});
   if(!isV)s+=komo({x:1680,y:1420,s:.6,expr:t>t0+3?'surprised':'think',aL:70,aR:70,blink:blinkAt(t,3)});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.04]),
  hud:t=>hudTitle('SUGAR CHECK',isV?440:150,popS(t,t0+.2,.45),{fill:OL,size:isV?80:76})+(t>t0+5?g(tr(W/2,isV?1330:850),factCard(t,t0+5,['*American Heart Association: max ~36 g','added sugar a day for men, ~25 g for women'],{size:isV?36:40,w:isV?960:1250})):'')+srcText('Source: American Heart Association added-sugar guidance',fadeIn(t,t0+.4))}),
 point1:(t0,t1)=>({
  world:t=>{let s=grid('#2A1F2B');const bl=t>WT('blocks','point1')-.1&&t<WT('wears','point1');
   for(let i=0;i<4;i++)s+=receptor(t,(isV?600:560)+i*(isV?240:270),1000,bl,popS(t,t0+.1+i*.1,.4)*1.2);
   const nb=t<WT('piling','point1')?4:Math.min(16,4+Math.floor((t-WT('piling','point1'))*5));
   for(let i=0;i<nb;i++){const x=(isV?560:520)+(i%8)*(isV?120:130),y=760-Math.floor(i/8)*90+Math.sin(t*2+i)*8;const hit=t>WT('hits','point1');s+=`<circle cx="${x}" cy="${fmt(hit?y+ss((t-WT('hits','point1'))/.5)*200:y)}" r="30" fill="#F4A6B8" stroke="${OL}" stroke-width="5"/><text x="${x}" y="${fmt((hit?y+ss((t-WT('hits','point1'))/.5)*200:y)+10)}" text-anchor="middle" font-family="B2" font-weight="800" font-size="28" fill="${OL}">z</text>`;}
   return s;},
  cam:t=>camV(t,t0,t1,[960,920,1.0],[960,900,1.06]),
  hud:t=>hudTitle('CAFFEINE BLOCKS "SLEEPY" ADENOSINE',isV?440:150,popS(t,t0+.4,.45),{size:isV?46:58})+(t>WT('piling','point1')&&t<WT('crash','point1')-.1?label('ADENOSINE PILES UP',{x:W/2,y:isV?1330:850,size:52,bg:'#9C7BE0',sc:popS(t,WT('piling','point1'),.45)}):'')+(t>WT('crash','point1')-.1?label('THE CRASH',{x:W/2,y:isV?1330:850,size:64,bg:'#E5383B',sc:popS(t,WT('crash','point1')-.1,.45)}):'')}),
 sil_point1:(t0,t1)=>({
  world:t=>{let s=grid('#3B3A7A');const x0=isV?480:360,x1=isV?1440:1560,yb=1250;
   s+=`<path d="M${x0},${yb}H${x1}M${x0},${yb}V700" stroke="#fff" stroke-width="6"/>`;const p=clamp((t-t0-1)/8);let d=`M${x0},${yb-200}`;
   for(let i=0;i<=60*p;i++){const u=i/60,x=x0+(x1-x0)*u;const e=u<.15?200+u/.15*280:u<.6?480:u<.75?480-(u-.6)/.15*440:40+(u-.75)*200;d+=`L${fmt(x)},${fmt(yb-e)}`;}
   s+=`<path d="${d}" stroke="#FFE27A" stroke-width="12" fill="none" stroke-linejoin="round"/>`;
   s+=`<text x="${x0}" y="${yb+60}" font-family="B2" font-weight="800" font-size="42" fill="#fff">DRINK</text><text x="${x1}" y="${yb+60}" text-anchor="end" font-family="B2" font-weight="800" font-size="42" fill="#fff">HOURS LATER</text>`;
   if(p>.75)s+=label('CRASH',{x:x0+(x1-x0)*.72,y:yb-60,size:48,bg:'#E5383B',sc:popS(t,t0+7,.4)});
   return s;},
  cam:t=>camV(t,t0,t1,[960,980,1.04],[960,960,1.0]),
  hud:t=>hudTitle('YOUR ENERGY LEVEL',isV?440:150,popS(t,t0+.2,.45),{size:isV?76:72})+(t>t0+10?g(tr(W/2,isV?600:270),factCard(t,t0+10,['Caffeine only hides tiredness.','It doesn\'t remove it.'],{size:isV?42:44,w:isV?820:900})):'')}),
 point2:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#2A1F2B"/><circle cx="960" cy="880" r="560" fill="#E5383B" opacity=".2" filter="url(#glowf)"/>`;
   const v=0.35+0.45*ss((t-WT('jumped','point2'))/1);s+=bp(t,v,isV?960:640,isV?900:1000,isV?1:1.05);
   if(t>WT('heart','point2')-.4)s+=`<rect x="${isV?470:1060}" y="${isV?1080:740}" width="${isV?980:640}" height="300" rx="30" fill="#10202E" stroke="${OL}" stroke-width="7"/>`+ecg(t,isV?500:1090,isV?1420:1670,isV?1260:920,'#7FD18B',true);
   return s;},
  cam:t=>camV(t,t0,t1,[960,920,1.0],[960,900,1.05]),
  hud:t=>hudTitle('ONE CAN, ONE STUDY',isV?440:150,popS(t,t0+.1,.45),{fill:'#FF8A8A',size:isV?76:72})+(t>WT('jumped','point2')?label('BLOOD PRESSURE ↑',{x:W/2,y:isV?600:270,size:56,bg:'#E5383B',sc:popS(t,WT('jumped','point2'),.45)}):'')+srcText('Source: Svatikova et al., JAMA (2017)',fadeIn(t,t0+.4))}),
 sil_point2:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".5" filter="url(#glowf)"/>`;
   const L=isV?720:620,R=isV?1220:1300;
   s+=g(tr(L,900,popS(t,t0+.6,.45)*.7),can(1))+g(tr(R,900,popS(t,t0+1.2,.45)*.7),`<rect x="-70" y="-120" width="140" height="200" rx="16" fill="#8C5A3C" stroke="${OL}" stroke-width="8"/><path d="M70,-70Q130,-70 130,-20Q130,30 70,30" stroke="${OL}" stroke-width="12" fill="none"/>`);
   s+=bigText('ENERGY DRINK',L,1150,isV?44:52,{sw:8})+bigText('CAFFEINE ONLY',R,1150,isV?44:52,{sw:8});
   const k=popS(t,t0+2.5,.45);if(k>0)s+=label('BIGGER BP JUMP',{x:L,y:isV?660:770,size:44,bg:'#E5383B',sc:k,r:-3});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.04]),
  hud:t=>hudTitle('SAME CAFFEINE, DIFFERENT RESULT',isV?440:150,popS(t,t0+.2,.45),{fill:OL,size:isV?52:64})+(t>t0+(IS_SHORT?.3:5)?g(tr(W/2,isV?1330:850),factCard(t,t0+(IS_SHORT?.3:5),['Scientists think other ingredients','may play a role. More research needed.'],{size:isV?36:40,w:isV?920:1150})):'')+srcText('Source: Svatikova et al., JAMA (2017)',fadeIn(t,t0+.4))}),
 twist:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="880" r="560" fill="#F4C542" opacity=".2" filter="url(#glowf)"/>`;
   const ts=WT('skip','twist');
   if(t<ts-.2){s+=komo({x:960,y:1420,s:isV?.85:.72,expr:'smile',aL:70,aR:-40,holdR:g('scale(.35)',can(1)),blink:blinkAt(t,7)});
     const k=popS(t,WT('normal','twist'),.45);if(k>0)s+=label('NEED IT TO FEEL "NORMAL"',{x:W/2,y:isV?720:640,size:isV?46:54,bg:'#5B6C8F',sc:k});}
   else{s+=komo({x:960,y:1420,s:isV?.85:.72,expr:'think',aL:70,aR:70,blink:blinkAt(t,8)});
     const kh=popS(t,WT('headache','twist'),.4);if(kh>0)s+=g(tr(960,isV?680:740,kh),headache(t,1));
     const kf=popS(t,WT('fog','twist'),.4);if(kf>0)s+=g(tr(isV?700:600,isV?820:860,kf*.8),fog(t,1));
     const km=popS(t,WT('mood','twist'),.4);if(km>0)s+=label('BAD MOOD',{x:isV?1260:1340,y:900,size:52,bg:'#E5383B',sc:km,r:4});}
   return s;},
  cam:t=>camV(t,t0,t1,[960,940,1.0],[960,920,1.08]),
  hud:t=>chapter(t,t0,WT('body','twist')-.05,['PLOT TWIST!'])+(t>WT('withdrawal','twist')-.3?label('CAFFEINE WITHDRAWAL',{x:W/2,y:isV?470:150,size:isV?56:60,bg:'#E5383B',sc:popS(t,WT('withdrawal','twist')-.3,.45)}):'')+(t>WT('withdrawal','twist')?srcText('Source: Juliano & Griffiths, Psychopharmacology (2004)',fadeIn(t,WT('withdrawal','twist'))):'')}),
 sil_twist:(t0,t1)=>({
  world:t=>`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".5" filter="url(#glowf)"/>`+g(tr(960,isV?900:880,popS(t,t0+.1,.5)*(isV?.9:.8)),checkCard(t,[{txt:'MAX 400 MG/DAY (ADULTS)',t:t0+1.2},{txt:'NO CANS AFTER 2 PM',t:t0+3},{txt:'WATCH THE SUGAR',t:t0+5},{txt:'KIDS & TEENS: SKIP IT',t:t0+7}])),
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.04]),
  hud:t=>hudTitle('SMARTER CAFFEINE',isV?400:150,popS(t,t0+.2,.45),{fill:OL,size:isV?76:72})+srcText('Sources: US FDA (400 mg/day); American Academy of Pediatrics',fadeIn(t,t0+.4))}),
 cta:(t0,t1)=>({
  world:t=>{const sl=eout((t-t0)/.5);
   let s=`<rect width="1920" height="1920" fill="#222"/><path d="M0,0L${fmt(lerp(-200,1040,sl))},0L${fmt(lerp(-400,880,sl))},1920L0,1920Z" fill="#2B3350"/><path d="M1920,0L${fmt(lerp(2120,1040,sl))},0L${fmt(lerp(2320,880,sl))},1920L1920,1920Z" fill="#5EC8FF"/>`;
   const L=isV?680:560,R=isV?1240:1360,y=isV?900:1010;
   const k1=popS(t,WT('energy','cta'),.5),k2=popS(t,WT('water','cta'),.5);
   if(k1>0)s+=g(tr(L,y,k1*.8),can(1));if(k2>0)s+=g(tr(R,y+40,k2*.9),glass('cold',t,1));
   s+=bigText('TEAM ENERGY DRINK',L,isV?720:820,isV?44:60,{sw:10})+bigText('TEAM WATER',R,isV?720:820,isV?50:66,{sw:10});
   const kv=popS(t,WT('or','cta'),.4);if(kv>0)s+=g(tr(960,isV?800:900,kv,-6),`<circle r="90" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="84" fill="${OL}">VS</text>`,'filter="url(#dsh)"');
   s+=komo({x:960,y:lerp(1950,isV?1480:1440,eout((t-t0)/.6)),s:isV?.72:.68,expr:'happy',aR:-60+Math.sin(t*9)*14,aL:70,blink:blinkAt(t,13)});
   const kc=popS(t,WT('comments','cta'),.45);if(kc>0)s+=g(tr(isV?1150:1290,1080,kc*(isV?.85:1),3),bubble(520,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="${OL}">Tell me below!</text>`,'filter="url(#dsh)"');
   return s;},
  cam:t=>camV(t,t0,t1,[960,1000,1.0],[960,980,1.05]),
  hud:t=>hudTitle('YOUR PICK?',isV?470:150,popS(t,t0+.05,.45),{fill:'#FFE27A'})}),
 sil_outro:(t0,t1)=>subscribeEnd(null,t0,t1),
 pad:(t0,t1,it)=>it.name==='pad_end'?subscribeEnd(null,t0,t1):B.sil_point2(t0,t1),
};
buildFromPlan(B);
if(!isV)S.forEach(sc=>{const c=sc.cam;sc.cam=t=>{const v=c(t);return [v[0],v[1]+90,v[2]];};});
var THUMB={t:ITEM('hook').t1-0.3,lines:['WHAT IF YOU DRANK','AN ENERGY DRINK','EVERY DAY?']};
