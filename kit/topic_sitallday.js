// ===== HOWCOME? | What Happens If You Sit All Day, Every Day? (shared by _yt and _short) =====
function chairIco(s=1){return g(`scale(${s})`,`<rect x="-70" y="-160" width="140" height="150" rx="20" fill="#F28C38" stroke="${OL}" stroke-width="8"/><rect x="-90" y="-20" width="180" height="40" rx="14" fill="#D9712A" stroke="${OL}" stroke-width="8"/><path d="M-70,20V110M70,20V110" stroke="${OL}" stroke-width="14" stroke-linecap="round"/>`);}
function carIco(s=1){return g(`scale(${s})`,`<path d="M-160,30L-140,-40Q-120,-90 -60,-90L60,-90Q120,-90 140,-40L160,30Z" fill="#5EC8FF" stroke="${OL}" stroke-width="8"/><rect x="-180" y="20" width="360" height="70" rx="24" fill="#E8505B" stroke="${OL}" stroke-width="8"/><circle cx="-100" cy="95" r="36" fill="${OL}"/><circle cx="100" cy="95" r="36" fill="${OL}"/><circle cx="-100" cy="95" r="14" fill="#ccc"/><circle cx="100" cy="95" r="14" fill="#ccc"/>`);}
function deskIco(s=1){return g(`scale(${s})`,`<rect x="-190" y="-10" width="380" height="30" rx="10" fill="#8C6A52" stroke="${OL}" stroke-width="7"/><path d="M-160,20V120M160,20V120" stroke="${OL}" stroke-width="16" stroke-linecap="round"/><rect x="-90" y="-150" width="180" height="120" rx="12" fill="#2B3350" stroke="${OL}" stroke-width="7"/><rect x="-74" y="-136" width="148" height="92" rx="6" fill="#5EC8FF"/><rect x="-110" y="-28" width="220" height="18" rx="6" fill="#CDD6DE" stroke="${OL}" stroke-width="5"/>`);}
function couchIco(s=1){return g(`scale(${s})`,`<rect x="-200" y="-110" width="400" height="120" rx="40" fill="#9C7BE0" stroke="${OL}" stroke-width="8"/><rect x="-230" y="-30" width="460" height="100" rx="34" fill="#B79BEA" stroke="${OL}" stroke-width="8"/><rect x="-250" y="-70" width="70" height="140" rx="30" fill="#9C7BE0" stroke="${OL}" stroke-width="8"/><rect x="180" y="-70" width="70" height="140" rx="30" fill="#9C7BE0" stroke="${OL}" stroke-width="8"/><path d="M-180,70V110M180,70V110" stroke="${OL}" stroke-width="14" stroke-linecap="round"/>`);}
function muscle(s=1,sleep=0){return g(`scale(${s})`,`<path d="M-220,0C-200,-110 200,-110 220,0C200,110 -200,110 -220,0Z" fill="${sleep>0.5?'#C98FA0':'#F28C9C'}" stroke="${OL}" stroke-width="9"/>${[-120,-40,40,120].map(x=>`<path d="M${x},-60Q${x+30},0 ${x},60" stroke="#D96B7E" stroke-width="8" fill="none" stroke-linecap="round"/>`).join('')}<circle cx="-60" cy="-20" r="10" fill="${OL}" opacity=".4"/><circle cx="50" cy="20" r="8" fill="${OL}" opacity=".4"/>`);}
function artery(t,flow,s=1){let p=`<rect x="-500" y="-70" width="1000" height="140" rx="70" fill="#7A1F2B" stroke="${OL}" stroke-width="9"/><rect x="-480" y="-50" width="960" height="100" rx="50" fill="#B83A48"/>`;
  for(let i=0;i<12;i++){const x=((i*90+t*flow*260)%1000)-500;p+=`<ellipse cx="${fmt(x)}" cy="${fmt(Math.sin(i*2.1)*20)}" rx="28" ry="18" fill="#E5383B" stroke="${OL}" stroke-width="4"/>`;}
  return g(`scale(${s})`,p);}
function zz(x,y,t){let s='';for(let i=0;i<3;i++){const ph=(t*0.5+i/3)%1;s+=`<text x="${fmt(x+ph*70+i*10)}" y="${fmt(y-ph*140)}" font-family="B2" font-weight="800" font-size="${50+i*12}" fill="#fff" opacity="${fmt(Math.sin(ph*Math.PI))}" stroke="${OL}" stroke-width="5" paint-order="stroke">Z</text>`;}return s;}
function hourBars(t,t0,data,{x0,base,bw=160,gap=120,max=10}){let s=`<path d="M${x0-40},${base}H${x0+data.length*(bw+gap)}" stroke="#fff" stroke-width="6"/>`;
  data.forEach(([lab,v,col],i)=>{const k=eout(clamp((t-(t0+i*.5))/.6));const h=v/max*520*k,x=x0+i*(bw+gap);
   s+=`<rect x="${x}" y="${fmt(base-h)}" width="${bw}" height="${fmt(h)}" rx="16" fill="${col}" stroke="${OL}" stroke-width="6"/><text x="${x+bw/2}" y="${base+66}" text-anchor="middle" font-family="B2" font-weight="800" font-size="50" fill="#fff">${lab}</text>`;
   if(k>.9)s+=`<text x="${x+bw/2}" y="${fmt(base-h-24)}" text-anchor="middle" font-family="B2" font-weight="800" font-size="62" fill="#FFE27A" stroke="${OL}" stroke-width="8" paint-order="stroke">${v}h</text>`;});return s;}
const B={
 hook:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#C9CFC4"/><circle cx="960" cy="900" r="560" fill="#fff" opacity=".4" filter="url(#glowf)"/>`;
   const P=isV?[[700,700],[1220,700],[700,1120],[1220,1120]]:[[560,780],[1100,780],[560,1180],[1100,1180]];
   const ic=[chairIco,carIco,deskIco,couchIco],tm=[WT('breakfast','hook'),WT('car','hook'),WT('desk','hook'),WT('couch','hook')];
   ic.forEach((f,i)=>{const k=popS(t,tm[i]-.15,.45);if(k<=0)return;s+=g(tr(P[i][0],P[i][1],k*(isV?.85:.8)),`<rect x="-240" y="-200" width="480" height="380" rx="40" fill="#fff" stroke="${OL}" stroke-width="8"/>`+f(1),'filter="url(#dsh)"');
     const ks=popS(t,tm[i]+.1,.4);if(ks>0)s+=label('SIT',{x:P[i][0]+(isV?150:140),y:P[i][1]-(isV?150:140),size:52,bg:'#E8505B',sc:ks,r:8});});
   if(!isV)s+=komo({x:1560,y:1420,s:.7,expr:t>WT('what','hook')?'surprised':'smile',aL:70,aR:70,blink:blinkAt(t,1)});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.1],[960,960,1.0]),
  hud:t=>hudTitle('ALL DAY, EVERY DAY?',isV?460:150,popS(t,WT('what','hook'),.45),{fill:'#FFE27A',size:isV?84:80})}),
 sil_hook:(t0,t1)=>({
  world:t=>{let s=grid('#3B3A7A');const f=ss((t-t0-3)/6);
   const cx=isV?960:760,cy=isV?900:960,R=260;const a=f*0.6*2*Math.PI;
   s+=`<circle cx="${cx}" cy="${cy}" r="${R}" fill="#1B2A3F" stroke="#fff" stroke-width="10"/>`;
   if(f>0)s+=`<path d="M${cx},${cy}L${cx},${cy-R}A${R},${R} 0 ${a>Math.PI?1:0} 1 ${fmt(cx+Math.sin(a)*R)},${fmt(cy-Math.cos(a)*R)}Z" fill="#E8505B" stroke="${OL}" stroke-width="6"/>`;
   for(let i=0;i<24;i+=3)s+=`<text x="${fmt(cx+Math.sin(i/24*2*Math.PI)*(R+50))}" y="${fmt(cy-Math.cos(i/24*2*Math.PI)*(R+50)+16)}" text-anchor="middle" font-family="B2" font-weight="800" font-size="40" fill="#fff">${i}</text>`;
   if(!isV)s+=komo({x:1420,y:1420,s:.7,expr:t>t0+9?'surprised':'think',aL:70,aR:-30,holdR:KOMO.magnifier,blink:blinkAt(t,2)});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.06]),
  hud:t=>chapter(t,t0,t0+2.4,['HOW COME?'])+(t>t0+2.4?hudTitle('A DAY ON YOUR BUTT',isV?460:150,popS(t,t0+2.5,.45),{size:isV?72:70}):'')+(t>t0+9?label('MOST OF THE DAY = SITTING',{x:W/2,y:isV?1330:850,size:isV?46:52,bg:'#E8505B',sc:popS(t,t0+9,.45)}):'')}),
 context:(t0,t1)=>({
  world:t=>grid('#2B3350')+hourBars(t,WT('average','context'),[['ADULTS',6.5,'#F4C542'],['TEENS',8.2,'#E8505B']],{x0:isV?640:700,base:isV?1220:1260,bw:isV?160:180,gap:isV?160:200,max:10}),
  cam:t=>camV(t,t0,t1,[960,980,1.0],[960,960,1.05]),
  hud:t=>hudTitle('HOURS SITTING PER DAY',isV?460:150,popS(t,t0+.1,.45),{size:isV?66:70})+(t>WT('call','context')?label('"THE NEW SMOKING"?',{x:W/2,y:isV?600:270,size:56,bg:'#5B6C8F',sc:popS(t,WT('call','context'),.45)}):'')+srcText('Source: Yang et al., JAMA (2019)',fadeIn(t,t0+.4))}),
 sil_context:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".5" filter="url(#glowf)"/>`;
   s+=g(tr(isV?960:620,isV?1000:1050,popS(t,t0+.3,.45)*(isV?.9:.8)),couchIco(1),'filter="url(#dsh)"');
   s+=komo({x:isV?960:620,y:isV?1440:1430,s:isV?.6:.55,expr:'smile',aL:70,aR:-40,blink:blinkAt(t,3)});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.05]),
  hud:t=>hudTitle('THE AVERAGE DAY',isV?440:150,popS(t,t0+.2,.45),{fill:OL,size:isV?76:72})+g(tr(isV?W/2:1260,isV?620:420),factCard(t,t0+1,['US adults: ~6.4 h/day','Teens: ~8.2 h/day','+ even more screen time'],{size:isV?48:50,w:isV?820:820}))+srcText('Source: Yang et al., JAMA (2019)',fadeIn(t,t0+.4))}),
 point1:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#E9C9A3"/><circle cx="960" cy="900" r="560" fill="#fff" opacity=".35" filter="url(#glowf)"/>`;
   const tm=WT('move','point1'),ta=WT('asleep','point1'),th=WT('hips','point1');
   if(t<th-.2){const sl=ss((t-ta+.3)/.6);s+=g(tr(960,900,popS(t,t0+.1,.5)*(isV?1.1:1)),muscle(1,sl),'filter="url(#dsh)"');
     for(let i=0;i<6;i++){const ang=i/6*2*Math.PI+t*.6;let r=360;if(t>tm&&t<ta-.3)r=360-260*ss((t-tm-i*.1)/1);const kk=popS(t,WT('sugar','point1')+i*.08,.4);if(kk>0)s+=g(tr(960+Math.cos(ang)*r*(isV?.75:1),900+Math.sin(ang)*r*.55,kk),sugarCube(0,0,34),'filter="url(#dsh)"');}
     if(t>ta-.3)s+=zz(1120,760,t);}
   else{s+=komo({x:960,y:1400,s:isV?.95:.8,expr:'think',aL:70,aR:70,blink:blinkAt(t,4)});
     const k1=popS(t,th,.4),k2=popS(t,WT('back','point1'),.4);
     if(k1>0)s+=label('TIGHT HIPS',{x:isV?700:600,y:1200,size:52,bg:'#E8505B',sc:k1,r:-4});if(k2>0)s+=label('BACK PAIN',{x:isV?1240:1320,y:1080,size:52,bg:'#E8505B',sc:k2,r:4});}
   return s;},
  cam:t=>camV(t,t0,t1,[960,920,1.0],[960,900,1.08]),
  hud:t=>hudTitle('LEG MUSCLES = SUGAR SPONGES',isV?460:150,popS(t,t0+.1,.45),{size:isV?54:64})+(t>WT('asleep','point1')-.3&&t<WT('hips','point1')-.2?label('SPONGES FALL ASLEEP',{x:W/2,y:isV?1330:850,size:52,bg:'#5B6C8F',sc:popS(t,WT('asleep','point1')-.3,.45)}):'')}),
 sil_point1:(t0,t1)=>({
  world:t=>{let s=grid('#2A1F2B');const L=isV?700:600,R=isV?1220:1320;
   const MY=isV?860:980;s+=g(tr(L,MY,popS(t,t0+.3,.45)*.55),muscle(1,0))+g(tr(R,MY,popS(t,t0+.6,.45)*.55),muscle(1,1));
   s+=bigText('MOVING',L,MY-160,isV?52:60,{sw:8,fill:'#7FD18B'})+bigText('SITTING',R,MY-160,isV?52:60,{sw:8,fill:'#FF8A8A'});
   for(let i=0;i<5;i++){const ph=(t*.4+i/5)%1;s+=g(tr(L+(i-2)*50,lerp(MY+320,MY+40,ph),.8),sugarCube(0,0,26),`opacity="${fmt(1-ph)}"`);s+=g(tr(R+(i-2)*60,MY+290+Math.sin(t*2+i)*20,.8),sugarCube(0,0,26));}
   if(t>t0+5)s+=zz(R+120,MY-100,t);
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.05]),
  hud:t=>hudTitle('WHERE DOES THE SUGAR GO?',isV?440:150,popS(t,t0+.2,.45),{size:isV?58:66})+(t>t0+6?g(tr(W/2,isV?1330:850),factCard(t,t0+6,['Moving muscles pull sugar out','of your blood. Idle ones don\'t.'],{size:isV?40:42,w:isV?900:1000})):'')+srcText('Source: Dunstan et al., Diabetes Care (2012)',fadeIn(t,t0+.4))}),
 point2:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#2A1F2B"/><circle cx="960" cy="880" r="560" fill="#E5383B" opacity=".2" filter="url(#glowf)"/>`;
   const tw=WT('but','point2');const fl=t<WT('three','point2')?1:t<tw?0.25:1.2;
   s+=g(tr(960,900,popS(t,t0+.1,.5)*(isV?.95:1)),artery(t,fl),'filter="url(#dsh)"');
   const kc=popS(t,WT('three','point2'),.45);if(kc>0&&t<tw)s+=alarmClock(960,isV?1180:1160,.6*kc,t,'3H');
   const kw=popS(t,WT('walk','point2'),.45);if(kw>0)s+=komo({x:isV?960:1400,y:isV?1440:1430,s:isV?.6:.6,expr:'happy',aL:70+Math.sin(t*8)*25,aR:70-Math.sin(t*8)*25,blink:false});
   return s;},
  cam:t=>camV(t,t0,t1,[960,940,1.0],[960,920,1.08]),
  hud:t=>hudTitle("HERE'S THE SCARY PART",isV?460:150,popS(t,t0+.1,.45),{fill:'#FF8A8A',size:isV?66:70})+(t>WT('worse','point2')&&t<WT('but','point2')?label('BLOOD FLOW ↓',{x:W/2,y:isV?620:270,size:60,bg:'#E5383B',sc:popS(t,WT('worse','point2'),.45)}):'')+(t>WT('walk','point2')?label('5-MIN WALK EVERY HOUR = OK',{x:W/2,y:isV?620:270,size:isV?46:54,bg:'#3BB273',sc:popS(t,WT('walk','point2'),.45)}):'')+srcText('Source: Thosar et al., Med Sci Sports Exerc (2015)',fadeIn(t,t0+.4))}),
 sil_point2:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".5" filter="url(#glowf)"/>`;
   const x0=isV?560:420,x1=isV?1360:1500,y=1000;s+=`<path d="M${x0},${y}H${x1}" stroke="${OL}" stroke-width="10" stroke-linecap="round"/>`;
   for(let i=0;i<4;i++){const x=x0+(x1-x0)*i/3;s+=`<circle cx="${x}" cy="${y}" r="18" fill="${OL}"/><text x="${x}" y="${y+80}" text-anchor="middle" font-family="B2" font-weight="800" font-size="46" fill="${OL}">${i}H</text>`;}
   const p=clamp((t-t0-1)/Math.max(1,(t1-t0-2)));const kx=x0+(x1-x0)*p;
   s+=komo({x:kx,y:y-30,s:isV?.42:.45,expr:'happy',aL:70+Math.sin(t*9)*25,aR:70-Math.sin(t*9)*25,flip:false});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.04]),
  hud:t=>hudTitle('THE EASY FIX',isV?440:150,popS(t,t0+.2,.45),{fill:OL,size:isV?76:72})+g(tr(W/2,isV?620:850),factCard(t,t0+(IS_SHORT?.4:1.5),['Stand up and walk','5 minutes every hour'],{size:isV?46:48,w:isV?760:820}))}),
 twist:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="880" r="560" fill="#F4C542" opacity=".2" filter="url(#glowf)"/>`;
   const tm=WT('study','twist');
   if(t<tm-.2){s+=g(tr(isV?700:640,900,popS(t,WT('sitting','twist'),.45)*.8),chairIco(1))+g(tr(isV?1220:1280,900,popS(t,WT('smoking','twist',1),.45)*.8),`<rect x="-150" y="-30" width="300" height="60" rx="14" fill="#fff" stroke="${OL}" stroke-width="7"/><rect x="100" y="-30" width="50" height="60" rx="10" fill="#F28C38" stroke="${OL}" stroke-width="7"/>${[0,1,2].map(i=>`<path d="M${150+i*12},-50q20,-40 0,-80" stroke="#aaa" stroke-width="8" fill="none" opacity=".7"/>`).join('')}`);
     const kn=popS(t,WT('not','twist'),.45);if(kn>0)s+=g(tr(960,900,kn),`<circle r="80" fill="#E5383B" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="90" fill="#fff">≠</text>`,'filter="url(#dsh)"');}
   else{for(let i=0;i<40;i++){const k=popS(t,tm+i*.03,.3);if(k<=0)continue;const cx=(isV?600:500)+(i%10)*(isV?80:100),cy=760+Math.floor(i/10)*90;s+=`<g transform="${tr(cx,cy,k*.9)}"><circle cy="-30" r="22" fill="#F6D2B8" stroke="${OL}" stroke-width="4"/><rect x="-24" y="-6" width="48" height="50" rx="16" fill="${['#F28C38','#5EC8FF','#3BB273','#9C7BE0'][i%4]}" stroke="${OL}" stroke-width="4"/></g>`;}
     const kw=popS(t,WT('walking','twist'),.45);if(kw>0)s+=komo({x:960,y:1440,s:isV?.6:.55,expr:'happy',aL:70+Math.sin(t*8)*25,aR:70-Math.sin(t*8)*25});}
   return s;},
  cam:t=>camV(t,t0,t1,[960,940,1.0],[960,920,1.06]),
  hud:t=>chapter(t,t0,WT('sitting','twist')+.1,['PLOT TWIST!'])+(t>WT('worse','twist')-.2&&t<WT('study','twist')-.2?label('SMOKING IS WAY WORSE',{x:W/2,y:isV?1330:850,size:52,bg:'#E5383B',sc:popS(t,WT('worse','twist')-.2,.45)}):'')+
   (t>WT('million','twist')?hudTitle('1,000,000+ PEOPLE',isV?460:150,popS(t,WT('million','twist'),.45),{fill:'#FFE27A',size:isV?76:76}):'')+(t>WT('walking','twist')?label('~1 HOUR BRISK WALK/DAY',{x:W/2,y:isV?620:270,size:isV?50:56,bg:'#3BB273',sc:popS(t,WT('walking','twist'),.45)}):'')+(t>WT('study','twist')?srcText('Source: Ekelund et al., The Lancet (2016)',fadeIn(t,WT('study','twist'))):'')}),
 sil_twist:(t0,t1)=>({
  world:t=>`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".5" filter="url(#glowf)"/>`+g(tr(960,isV?900:880,popS(t,t0+.1,.5)*(isV?.9:.8)),checkCard(t,[{txt:'STAND UP ON CALLS',t:t0+1.2},{txt:'TAKE THE STAIRS',t:t0+3},{txt:'MOVE EVERY 30 MIN',t:t0+5},{txt:'WALK AFTER DINNER',t:t0+7}])),
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.04]),
  hud:t=>hudTitle('YOUR EASY PLAN',isV?400:150,popS(t,t0+.2,.45),{fill:OL,size:isV?76:72})}),
 cta:(t0,t1)=>({
  world:t=>{const sl=eout((t-t0)/.5);
   let s=`<rect width="1920" height="1920" fill="#222"/><path d="M0,0L${fmt(lerp(-200,1040,sl))},0L${fmt(lerp(-400,880,sl))},1920L0,1920Z" fill="#3BB273"/><path d="M1920,0L${fmt(lerp(2120,1040,sl))},0L${fmt(lerp(2320,880,sl))},1920L1920,1920Z" fill="#9C7BE0"/>`;
   const L=isV?680:560,R=isV?1240:1360,y=isV?900:1010;
   const k1=popS(t,WT('standing','cta'),.5),k2=popS(t,WT('couch','cta'),.5);
   if(k1>0)s+=g(tr(L,y,k1*.5),deskIco(1));if(k2>0)s+=g(tr(R,y,k2*.45),couchIco(1));
   s+=bigText('TEAM STANDING DESK',L,isV?720:820,isV?42:60,{sw:10})+bigText('TEAM COUCH',R,isV?720:820,isV?50:66,{sw:10});
   const kv=popS(t,WT('or','cta'),.4);if(kv>0)s+=g(tr(960,isV?800:900,kv,-6),`<circle r="90" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="84" fill="${OL}">VS</text>`,'filter="url(#dsh)"');
   s+=komo({x:960,y:lerp(1950,isV?1480:1440,eout((t-t0)/.6)),s:isV?.72:.68,expr:'happy',aR:-60+Math.sin(t*9)*14,aL:70,blink:blinkAt(t,13)});
   const kc=popS(t,WT('comments','cta'),.45);if(kc>0)s+=g(tr(isV?1150:1290,1080,kc*(isV?.85:1),3),bubble(520,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="${OL}">Tell me below!</text>`,'filter="url(#dsh)"');
   return s;},
  cam:t=>camV(t,t0,t1,[960,1000,1.0],[960,980,1.05]),
  hud:t=>hudTitle("DON'T MARRY YOUR CHAIR",isV?470:150,popS(t,t0+.05,.45),{fill:'#FFE27A',size:isV?62:76})}),
 sil_outro:(t0,t1)=>subscribeEnd(null,t0,t1),
 pad:(t0,t1,it)=>it.name==='pad_end'?subscribeEnd(null,t0,t1):B.sil_point2(t0,t1),
};
buildFromPlan(B);
if(!isV)S.forEach(sc=>{const c=sc.cam;sc.cam=t=>{const v=c(t);return [v[0],v[1]+90,v[2]];};});
var THUMB={t:ITEM('hook').t1-0.3,lines:['WHAT HAPPENS IF YOU','SIT ALL DAY,','EVERY DAY?']};
