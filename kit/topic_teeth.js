// ===== HOWCOME? | What If You Never Brushed Your Teeth Again? =====
function tooth(s=1,{expr='smile',plaque=0,tartar=0,cav=0}={}){
  let b=`<path d="M-110,-150C-150,-150 -170,-110 -165,-60C-160,0 -140,40 -120,120C-110,170 -70,180 -60,130C-50,80 -30,40 0,40C30,40 50,80 60,130C70,180 110,170 120,120C140,40 160,0 165,-60C170,-110 150,-150 110,-150C70,-150 40,-130 0,-130C-40,-130 -70,-150 -110,-150Z" fill="${plaque>0?'#F4EED2':'#fff'}" stroke="${OL}" stroke-width="9" stroke-linejoin="round"/>`;
  if(plaque>0)b+=`<path d="M-160,-40C-120,-20 -60,-30 0,-20C60,-30 120,-20 162,-40L158,-10C120,10 60,0 0,10C-60,0 -120,10 -158,-10Z" fill="#E8D77A" opacity="${fmt(.9*plaque)}"/>`;
  if(tartar>0)b+=`<path d="M-150,10C-110,30 -60,24 0,30C60,24 110,30 150,10L140,50C100,60 60,56 0,60C-60,56 -100,60 -140,50Z" fill="#A8873A" stroke="${OL}" stroke-width="5" opacity="${fmt(tartar)}"/>`;
  if(cav>0)b+=`<circle cx="60" cy="-90" r="${fmt(24*cav)}" fill="#3A2A28"/>`;
  const eyes=expr==='sad'?`<path d="M-70,-60Q-50,-74 -30,-60M30,-60Q50,-74 70,-60" stroke="${OL}" stroke-width="9" fill="none" stroke-linecap="round"/><circle cx="-50" cy="-40" r="12" fill="${OL}"/><circle cx="50" cy="-40" r="12" fill="${OL}"/>`:`<circle cx="-50" cy="-60" r="14" fill="${OL}"/><circle cx="50" cy="-60" r="14" fill="${OL}"/><circle cx="-45" cy="-65" r="5" fill="#fff"/><circle cx="55" cy="-65" r="5" fill="#fff"/>`;
  const m=expr==='sad'?`<path d="M-30,0Q0,-20 30,0" stroke="${OL}" stroke-width="8" fill="none" stroke-linecap="round"/>`:`<path d="M-30,-20Q0,10 30,-20" stroke="${OL}" stroke-width="8" fill="none" stroke-linecap="round"/>`;
  return g(`scale(${s})`,b+eyes+m+`<ellipse cx="-90" cy="-20" rx="20" ry="11" fill="#F29A9A" opacity=".5"/><ellipse cx="90" cy="-20" rx="20" ry="11" fill="#F29A9A" opacity=".5"/>`);}
function germ(t,i,s=1){const c=['#7BC96F','#9C7BE0','#F28C38','#5EC8FF'][i%4];return g(`rotate(${fmt(Math.sin(t*3+i)*12)}) scale(${s})`,`<ellipse rx="44" ry="34" fill="${c}" stroke="${OL}" stroke-width="5"/><circle cx="-14" cy="-6" r="7" fill="${OL}"/><circle cx="14" cy="-6" r="7" fill="${OL}"/><path d="M-10,10Q0,18 10,10" stroke="${OL}" stroke-width="4" fill="none"/>${[0,1,2,3].map(k=>`<path d="M${-40+k*26},28l-6,16" stroke="${OL}" stroke-width="4"/>`).join('')}`);}
function brush(s=1){return g(`scale(${s})`,`<rect x="-200" y="-18" width="300" height="36" rx="18" fill="#5EC8FF" stroke="${OL}" stroke-width="7"/><rect x="100" y="-40" width="110" height="40" rx="8" fill="#fff" stroke="${OL}" stroke-width="6"/>${[0,1,2,3,4].map(k=>`<path d="M${110+k*20},-40V-80" stroke="#9FD8F5" stroke-width="10" stroke-linecap="round"/>`).join('')}`);}
function gum(t,red){return `<path d="M-300,-40Q-150,-110 0,-40Q150,-110 300,-40L300,60L-300,60Z" fill="${red?'#E5383B':'#F29AA8'}" stroke="${OL}" stroke-width="8"/>`+(red?[0,1,2].map(i=>`<path d="M${-180+i*170},50q10,${fmt(30+10*Math.sin(t*3+i))} 0,${fmt(50+10*Math.sin(t*3+i))}" stroke="#B0182A" stroke-width="12" stroke-linecap="round" fill="none"/>`).join(''):'');}
function skull(s=1){return g(`scale(${s})`,`<path d="M-120,40C-160,-60 -120,-170 0,-170C120,-170 160,-60 120,40L90,60L90,110L-90,110L-90,60Z" fill="#F3E9D8" stroke="${OL}" stroke-width="8"/><circle cx="-50" cy="-30" r="34" fill="${OL}"/><circle cx="50" cy="-30" r="34" fill="${OL}"/><path d="M-10,20L0,0L10,20Z" fill="${OL}"/>${[0,1,2,3,4,5].map(k=>`<rect x="${-75+k*25}" y="70" width="22" height="34" rx="6" fill="#fff" stroke="${OL}" stroke-width="4"/>`).join('')}`);}
const B={
 hook:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="560" fill="#fff" opacity=".5" filter="url(#glowf)"/>`;
   const kb=popS(t,WT('toothbrush','hook')-.1,.4),kp=popS(t,WT('toothpaste','hook')-.1,.4);
   const IY=isV?760:880;if(kb>0)s+=g(tr(isV?720:560,IY,kb*.9,-10),brush(1))+g(tr(isV?720:560,IY,kb*1.3),xmark(1));
   if(kp>0)s+=g(tr(isV?1220:1360,IY,kp),`<rect x="-150" y="-50" width="300" height="100" rx="40" fill="#fff" stroke="${OL}" stroke-width="8"/><rect x="150" y="-26" width="50" height="52" rx="10" fill="#5EC8FF" stroke="${OL}" stroke-width="6"/><text x="0" y="16" text-anchor="middle" font-family="B2" font-weight="800" font-size="44" fill="#5EC8FF">PASTE</text>`)+g(tr(isV?1220:1360,IY,kp*1.3),xmark(1));
   const kt=popS(t,WT('forever','hook')-.1,.5);if(kt>0)s+=g(tr(960,isV?1120:1100,kt*(isV?1.1:.8)),tooth(1,{expr:t>WT('what','hook')?'sad':'smile'}),'filter="url(#dsh)"');
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.12],[960,940,1.0]),
  hud:t=>(t>WT('forever','hook')-.1?hudTitle('FOREVER.',isV?460:150,popS(t,WT('forever','hook'),.45),{fill:'#E5383B',size:isV?100:96}):'')}),
 sil_hook:(t0,t1)=>({
  world:t=>{let s=grid('#3B3A7A');const d=Math.min(365,Math.floor(Math.max(0,t-t0-2.6)*40));
   s+=g(tr(isV?960:760,1000,isV?1:.9),tooth(1,{expr:'sad',plaque:clamp(d/30),tartar:clamp((d-20)/60),cav:clamp((d-120)/200)}),'filter="url(#dsh)"');
   if(!isV)s+=komo({x:1460,y:1420,s:.62,expr:t>t0+7?'surprised':'think',aL:70,aR:-30,holdR:KOMO.magnifier,blink:blinkAt(t,2)});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.06]),
  hud:t=>chapter(t,t0,t0+2.4,['HOW COME?'])+(t>t0+2.5?hudTitle(`DAY ${Math.max(1,Math.min(365,Math.floor(Math.max(0,t-t0-2.6)*40)))} WITHOUT BRUSHING`,isV?460:150,popS(t,t0+2.6,.45),{size:isV?62:66}):'')+(t>t0+11?label('LET\'S ZOOM IN',{x:W/2,y:isV?1330:850,size:56,bg:'#3BB273',sc:popS(t,t0+11,.45)}):'')}),
 context:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#2A1F2B"/><circle cx="960" cy="880" r="560" fill="#7BC96F" opacity=".18" filter="url(#glowf)"/>`;
   s+=g(tr(960,1000,isV?.9:.8),tooth(1,{expr:'smile'}),'filter="url(#dsh)"');
   const n=Math.min(14,Math.floor(Math.max(0,t-WT('hundreds','context'))*6));
   for(let i=0;i<n;i++){const a=i/14*2*Math.PI+t*.4,r=(isV?380:420)+rnd(i)*80;s+=g(tr(960+Math.cos(a)*r*(isV?.8:1.2),960+Math.sin(a)*r*.6,1),germ(t,i,.8));}
   const ks=popS(t,WT('sugar','context'),.45);if(ks>0)s+=g(tr(960,isV?700:720,ks),sugarCube(0,0,46),'filter="url(#dsh)"');
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.05]),
  hud:t=>hudTitle('HUNDREDS OF KINDS OF BACTERIA',isV?440:150,popS(t,WT('hundreds','context'),.45),{size:isV?50:62})+(t>WT('harmless','context')&&t<WT('sugar','context')-.2?label('MOSTLY HARMLESS',{x:W/2,y:isV?1330:850,size:52,bg:'#3BB273',sc:popS(t,WT('harmless','context'),.45)}):'')+(t>WT('sugar','context')-.2?label('SOME LOVE SUGAR',{x:W/2,y:isV?1330:850,size:52,bg:'#E8505B',sc:popS(t,WT('sugar','context')-.2,.45)}):'')}),
 sil_context:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#E9C9A3"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".35" filter="url(#glowf)"/>`;
   for(let i=0;i<6;i++){const k=popS(t,t0+1+i*.4,.4);if(k>0)s+=g(tr((isV?600:520)+(i%3)*(isV?360:440),(isV?820:900)+Math.floor(i/3)*260,k),germ(t,i,1.2));}
   const kc=popS(t,t0+4,.45);if(kc>0)s+=g(tr(960,isV?1300:1100,kc),candy(1.1),'filter="url(#dsh)"');
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.05]),
  hud:t=>hudTitle('EVERY MEAL = A PARTY FOR THEM',isV?440:150,popS(t,t0+.2,.45),{size:isV?50:62})+(t>t0+6?g(tr(W/2,isV?600:850),factCard(t,t0+6,['Sugar-loving bacteria make acid','that slowly attacks your teeth'],{size:isV?40:42,w:isV?900:1000})):'')}),
 point1:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="560" fill="#fff" opacity=".5" filter="url(#glowf)"/>`;
   const pl=ss((t-WT('plaque','point1')+.6)/1),ta=ss((t-WT('tartar','point1'))/1);
   s+=g(tr(isV?960:820,1000,isV?1.1:1),tooth(1,{expr:t>WT('tartar','point1')?'sad':'smile',plaque:pl,tartar:ta}),'filter="url(#dsh)"');
   if(t>WT('remove','point1')-.3&&t<WT('breath','point1')-.2)s+=g(tr(isV?1250:1300,isV?820:860,.7,-20),brush(1))+g(tr(isV?1250:1300,isV?820:860,1.1),xmark(1));
   if(t>WT('breath','point1')-.2){const k=popS(t,WT('breath','point1')-.2,.45);s+=g(tr(isV?1240:1300,isV?780:800,k),`<path d="M-120,40C-170,40 -170,-40 -110,-40C-100,-100 0,-100 10,-60C60,-90 140,-60 120,0C160,10 150,60 110,60Z" fill="#9BC46B" stroke="${OL}" stroke-width="7"/>${[0,1,2].map(i=>`<path d="M${-60+i*50},${fmt(80+Math.sin(t*4+i)*8)}q10,20 0,40" stroke="#9BC46B" stroke-width="10" fill="none"/>`).join('')}`,'filter="url(#dsh)"');}
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.06]),
  hud:t=>(t<WT('tartar','point1')?label(t>WT('plaque','point1')-.3?'PLAQUE (HOURS)':'WITHIN HOURS...',{x:W/2,y:isV?460:150,size:isV?64:60,bg:'#F4C542',fill:OL,sc:popS(t,t0+.1,.45)}):label('TARTAR (DAYS)',{x:W/2,y:isV?460:150,size:isV?64:60,bg:'#A8873A',sc:popS(t,WT('tartar','point1'),.45)}))+(t>WT('yikes','point1')-.1?label('YIKES!',{x:W/2,y:isV?1330:850,size:70,bg:'#E5383B',sc:popS(t,WT('yikes','point1')-.1,.45),r:-5}):'')}),
 sil_point1:(t0,t1)=>({
  world:t=>{let s=grid('#3B3A7A');const st=[['DAY 0','smile',0,0],['1-2 DAYS','smile',1,0],['A FEW DAYS','sad',1,1]];
   st.forEach(([lab,e,p,ta],i)=>{const k=popS(t,t0+.8+i*1.8,.45);if(k<=0)return;const x=(isV?640:520)+i*(isV?320:440);s+=g(tr(x,900,k*(isV?.6:.75)),tooth(1,{expr:e,plaque:p,tartar:ta}))+bigText(lab,x,1150,isV?40:48,{sw:8});
     if(i<2)s+=`<path d="M${x+(isV?120:160)},900L${x+(isV?200:280)},900" stroke="#FFE27A" stroke-width="14" stroke-linecap="round"/>`;});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.04]),
  hud:t=>hudTitle('SOFT PLAQUE → HARD TARTAR',isV?440:150,popS(t,t0+.2,.45),{size:isV?58:66})+(t>t0+7?g(tr(W/2,isV?1330:850),factCard(t,t0+7,['Tartar needs a dentist','to scrape it off'],{size:isV?42:44,w:isV?760:820})):'')}),
 point2:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#2A1F2B"/><circle cx="960" cy="880" r="560" fill="#E5383B" opacity=".2" filter="url(#glowf)"/>`;
   const red=t>WT('swollen','point2')-.2&&t<WT('healed','point2')-.3;
   s+=g(tr(960,isV?900:980,isV?1.2:1.1),[-200,0,200].map(x=>g(tr(x,60,.5),tooth(1,{expr:red?'sad':'smile',plaque:t>WT('stopped','point2')&&t<WT('healed','point2')?.8:0}))).join('')+gum(t,red),'filter="url(#dsh)"');
   const kc=popS(t,WT('two','point2'),.45);if(kc>0&&t<WT('swollen','point2'))s+=g(tr(960,isV?1250:860,kc*.9),`<rect x="-200" y="-60" width="400" height="120" rx="24" fill="#fff" stroke="${OL}" stroke-width="8"/><text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="${OL}">2-3 WEEKS</text>`,'filter="url(#dsh)"');
   if(t>WT('healed','point2')-.3)s+=g(tr(isV?1280:1400,isV?700:760,popS(t,WT('healed','point2')-.3,.45)),check(1));
   return s;},
  cam:t=>camV(t,t0,t1,[960,920,1.0],[960,900,1.06]),
  hud:t=>hudTitle('A CLASSIC EXPERIMENT',isV?440:150,popS(t,t0+.1,.45),{fill:'#FF8A8A',size:isV?72:70})+(t>WT('swollen','point2')-.2&&t<WT('healed','point2')-.3?label('EVERYONE: BLEEDING GUMS',{x:W/2,y:isV?600:270,size:isV?46:54,bg:'#E5383B',sc:popS(t,WT('swollen','point2')-.2,.45)}):'')+(t>WT('healed','point2')-.3?label('BRUSHING AGAIN = HEALED',{x:W/2,y:isV?600:270,size:isV?46:54,bg:'#3BB273',sc:popS(t,WT('healed','point2')-.3,.45)}):'')+srcText('Source: Löe et al., J Periodontol (1965)',fadeIn(t,t0+.4))}),
 sil_point2:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".5" filter="url(#glowf)"/>`;
   const ph=(t-t0)%1.2<.6;s+=g(tr(isV?960:760,1000,isV?1:.9),tooth(1,{expr:'smile'}),'filter="url(#dsh)"')+g(tr((isV?960:760)+(ph?40:-40),isV?1180:1160,.7,-8),brush(1));
   if(!isV)s+=komo({x:1460,y:1420,s:.62,expr:'happy',aL:70,aR:70,blink:blinkAt(t,5)});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.04]),
  hud:t=>hudTitle('GOOD NEWS',isV?440:150,popS(t,t0+.2,.45),{fill:OL,size:isV?84:80})+(t>t0+(IS_SHORT?.3:3)?g(tr(W/2,isV?1330:850),factCard(t,t0+(IS_SHORT?.3:3),['Early gum problems can reverse','when you clean your teeth again'],{size:isV?40:42,w:isV?900:1000})):'')+srcText('Source: Löe et al., J Periodontol (1965)',fadeIn(t,t0+.4))}),
 twist:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="880" r="560" fill="#F4C542" opacity=".2" filter="url(#glowf)"/>`;
   const L=isV?700:620,R=isV?1220:1300;
   const ka=popS(t,WT('ancient','twist'),.45);if(ka>0){s+=g(tr(L,isV?900:960,ka*.9),skull(1),'filter="url(#dsh)"')+bigText('ANCIENT',L,isV?1150:1180,isV?44:52,{sw:8,fill:'#FFE27A'});}
   const kw=popS(t,WT('we','twist'),.45);if(kw>0){s+=g(tr(R,isV?900:960,kw*.75),tooth(1,{expr:'sad',cav:1,plaque:.6}),'filter="url(#dsh)"')+bigText('US TODAY',R,isV?1150:1180,isV?44:52,{sw:8});}
   const kd=popS(t,WT('sugar','twist'),.4);if(kd>0){s+=g(tr(R+(isV?-60:-90),isV?660:740,kd),candy(.7))+g(tr(R+(isV?90:120),isV?640:720,kd),sugarCube(0,0,34));}
   return s;},
  cam:t=>camV(t,t0,t1,[960,940,1.0],[960,920,1.06]),
  hud:t=>chapter(t,t0,WT('ancient','twist')-.05,['PLOT TWIST!'])+(t>WT('fewer','twist')-.2?label('FAR FEWER CAVITIES',{x:W/2,y:isV?470:150,size:isV?56:60,bg:'#3BB273',sc:popS(t,WT('fewer','twist')-.2,.45)}):'')+(t>WT('sugar','twist')-.2?label('SUGAR + SOFT PROCESSED FOOD',{x:W/2,y:isV?1330:850,size:isV?40:50,bg:'#E5383B',sc:popS(t,WT('sugar','twist')-.2,.45)}):'')+(t>WT('ancient','twist')?srcText('Source: Adler et al., Nature Genetics (2013)',fadeIn(t,WT('ancient','twist'))):'')}),
 sil_twist:(t0,t1)=>({
  world:t=>`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".5" filter="url(#glowf)"/>`+g(tr(960,isV?900:880,popS(t,t0+.1,.5)*(isV?.9:.8)),checkCard(t,[{txt:'BRUSH 2× A DAY',t:t0+1.2},{txt:'FLUORIDE PASTE',t:t0+3},{txt:'FLOSS DAILY',t:t0+5},{txt:'FEWER SWEETS',t:t0+7}])),
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.04]),
  hud:t=>hudTitle('KEEP YOUR SMILE',isV?400:150,popS(t,t0+.2,.45),{fill:OL,size:isV?80:76})+srcText('Source: American Dental Association recommendations',fadeIn(t,t0+.4))}),
 cta:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#0F2A3A"/><circle cx="960" cy="880" r="560" fill="#5EC8FF" opacity=".2" filter="url(#glowf)"/>`;
   [['1×',WT('how','cta')],['2×',WT('many','cta')],['3×',WT('times','cta')]].forEach(([tx,ti],i)=>{const k=popS(t,ti,.4);if(k>0)s+=label(tx,{x:(isV?620:560)+i*(isV?340:400),y:isV?760:860,size:isV?80:90,bg:['#E8505B','#3BB273','#5EC8FF'][i],sc:k,r:(i-1)*5});});
   s+=komo({x:960,y:lerp(1950,isV?1480:1440,eout((t-t0)/.6)),s:isV?.72:.68,expr:'happy',aR:-60+Math.sin(t*9)*14,aL:70,holdL:null,blink:blinkAt(t,13)});
   const kc=popS(t,WT('comments','cta'),.45);if(kc>0)s+=g(tr(isV?1150:1290,1080,kc*(isV?.85:1),3),bubble(520,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="${OL}">Tell me below!</text>`,'filter="url(#dsh)"');
   return s;},
  cam:t=>camV(t,t0,t1,[960,1000,1.0],[960,980,1.05]),
  hud:t=>hudTitle('HOW MANY TIMES A DAY?',isV?470:150,popS(t,t0+.05,.45),{fill:'#FFE27A',size:isV?70:80})}),
 sil_outro:(t0,t1)=>subscribeEnd(null,t0,t1),
 pad:(t0,t1,it)=>it.name==='pad_end'?subscribeEnd(null,t0,t1):B.sil_point2(t0,t1),
};
buildFromPlan(B);
if(!isV)S.forEach(sc=>{const c=sc.cam;sc.cam=t=>{const v=c(t);return [v[0],v[1]+90,v[2]];};});
var THUMB={t:ITEM('hook').t1-0.3,lines:['WHAT IF YOU NEVER','BRUSHED YOUR','TEETH AGAIN?']};
