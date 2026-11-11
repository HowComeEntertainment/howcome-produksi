// ===== HOWCOME? | What Happens If You Skip Breakfast for 30 Days? (shared by _yt and _short) =====
function bowl(s=1){return g(`scale(${s})`,`<path d="M-150,-20L150,-20Q140,110 0,120Q-140,110 -150,-20Z" fill="#5EC8FF" stroke="${OL}" stroke-width="8"/><ellipse cx="0" cy="-20" rx="150" ry="34" fill="#FFF3D6" stroke="${OL}" stroke-width="7"/>
 ${[[-80,-28],[-30,-38],[20,-26],[70,-34],[-50,-12],[40,-14]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="16" fill="#F4C542" stroke="${OL}" stroke-width="4"/>`).join('')}`);}
function toast(s=1){return g(`scale(${s})`,`<path d="M-80,90L-80,-40Q-110,-60 -100,-90Q-80,-120 0,-120Q80,-120 100,-90Q110,-60 80,-40L80,90Z" fill="#E7A85A" stroke="${OL}" stroke-width="7"/><path d="M-62,76L-62,-46Q-86,-62 -80,-84Q-64,-104 0,-104Q64,-104 80,-84Q86,-62 62,-46L62,76Z" fill="#F7D79A"/>`);}
function egg(s=1){return g(`scale(${s})`,`<path d="M-110,0C-120,-60 -40,-90 0,-70C50,-100 130,-60 110,0C120,60 40,90 0,70C-50,90 -120,50 -110,0Z" fill="#fff" stroke="${OL}" stroke-width="7"/><circle cx="0" cy="0" r="42" fill="#F4C542" stroke="${OL}" stroke-width="6"/><circle cx="-12" cy="-12" r="10" fill="#fff" opacity=".7"/>`);}
function cerealBox(s=1,txt='CRUNCHY'){return g(`scale(${s})`,`<rect x="-120" y="-180" width="240" height="360" rx="14" fill="#E8505B" stroke="${OL}" stroke-width="8"/><rect x="-96" y="-150" width="192" height="80" rx="10" fill="#FFE27A" stroke="${OL}" stroke-width="5"/><text x="0" y="-96" text-anchor="middle" font-family="B2" font-weight="800" font-size="40" fill="${OL}">${txt}</text>`+g('translate(0 60)',bowl(.55))+`<text x="0" y="150" text-anchor="middle" font-family="B2" font-weight="800" font-size="26" fill="#fff">EAT BREAKFAST!</text>`);}
function plate(s=1,empty=false){return g(`scale(${s})`,`<ellipse cx="0" cy="0" rx="220" ry="70" fill="#fff" stroke="${OL}" stroke-width="8"/><ellipse cx="0" cy="-6" rx="150" ry="44" fill="#EEF3F7"/>`+(empty?'':g('translate(-60 -40) scale(.55)',egg(1))+g('translate(80 -60) scale(.5)',toast(1))));}
function donut(s=1){return g(`scale(${s})`,`<circle r="90" fill="#E7A85A" stroke="${OL}" stroke-width="7"/><circle r="80" fill="#F49AC2"/><circle r="30" fill="#E9C9A3" stroke="${OL}" stroke-width="6"/>${[0,1,2,3,4,5,6].map(i=>`<rect x="${fmt(Math.cos(i)*55)}" y="${fmt(Math.sin(i*1.7)*55)}" width="22" height="8" rx="4" fill="${['#fff','#5EC8FF','#F4C542'][i%3]}" transform="rotate(${i*40} ${fmt(Math.cos(i)*55)} ${fmt(Math.sin(i*1.7)*55)})"/>`).join('')}`);}
function flame(s=1,k=1){return g(`scale(${s})`,`<path d="M0,-150C60,-80 110,-30 90,40C80,100 30,130 0,130C-30,130 -80,100 -90,40C-110,-30 -60,-80 0,-150Z" fill="#F28C38" stroke="${OL}" stroke-width="8"/><path d="M0,-60C30,-20 50,10 40,50C35,80 15,95 0,95C-15,95 -35,80 -40,50C-50,10 -30,-20 0,-60Z" fill="#FFE27A" transform="scale(1 ${fmt(k)})"/>`);}
function calendarFlip(t,t0,x,y,s=1){const d=Math.max(1,Math.min(30,Math.floor(1+(t-t0)*3.2)));return g(tr(x,y,s),`<rect x="-170" y="-190" width="340" height="360" rx="34" fill="#fff" stroke="${OL}" stroke-width="9"/><rect x="-170" y="-190" width="340" height="100" rx="34" fill="#E8505B" stroke="${OL}" stroke-width="9"/><text x="0" y="-122" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="#fff">DAY</text><text x="0" y="90" text-anchor="middle" font-family="B2" font-weight="800" font-size="170" fill="${OL}">${d}</text>`,'filter="url(#dsh)"');}
const kitchen=(t)=>{let s=`<rect width="1920" height="1920" fill="#F3E3C8"/><rect y="1180" width="1920" height="740" fill="#C98E5B"/><rect y="1170" width="1920" height="30" fill="#A8703F"/>`;
  s+=`<rect x="1250" y="380" width="380" height="420" rx="18" fill="#BFE6FF" stroke="#9C7A5A" stroke-width="16"/><circle cx="1500" cy="500" r="60" fill="#FFE27A" opacity=".9"/><path d="M1440,380V800M1250,590H1630" stroke="#9C7A5A" stroke-width="12"/>`;
  s+=`<circle cx="420" cy="520" r="100" fill="#fff" stroke="#8C6A52" stroke-width="12"/><path d="M420,520L420,450M420,520L470,540" stroke="${OL}" stroke-width="12" stroke-linecap="round"/><text x="420" y="660" text-anchor="middle" font-family="B2" font-weight="800" font-size="40" fill="#8C6A52">8:00 AM</text>`;return s;};
const B={
 hook:(t0,t1)=>({
  world:t=>{let s=kitchen(t)+`<circle cx="960" cy="900" r="520" fill="#fff" opacity=".35" filter="url(#glowf)"/>`;
   s+=g(tr(960,1120,popS(t,t0+.05,.5)),plate(1.15));
   [['PARENTS',WT('parents','hook'),isV?620:520,isV?760:880,'#5B6C8F'],['TEACHERS',WT('teachers','hook'),isV?1300:1400,isV?720:840,'#3BB273']].forEach(([tx,ti,x,y,c],i)=>{const k=popS(t,ti,.4);if(k>0)s+=label(tx,{x,y,size:58,bg:c,sc:k,r:i?4:-4});});
   const kc=popS(t,WT('cereal','hook'),.45);if(kc>0)s+=g(tr(isV?1320:1420,isV?1000:960,kc*.8,8),cerealBox(1));
   const kd=popS(t,WT('thirty','hook'),.5);if(kd>0)s+=calendarFlip(t,WT('thirty','hook')+.4,isV?620:520,isV?980:960,.75*kd);
   return s;},
  cam:t=>camV(t,t0,t1,[960,1000,1.12],[960,960,1.0]),
  hud:t=>hudTitle('"MOST IMPORTANT MEAL"',isV?460:150,popS(t,WT('important','hook')-.3,.45),{fill:'#FFE27A',size:isV?70:76})+(t>WT('thirty','hook')-.1?hudTitle('SKIP IT FOR 30 DAYS?',isV?600:270,popS(t,WT('thirty','hook'),.45),{size:isV?70:62}):'')}),
 sil_hook:(t0,t1)=>({
  world:t=>{let s=kitchen(t)+`<rect width="1920" height="1920" fill="#2B3350" opacity=".25"/>`;
   s+=g(tr(isV?1200:1150,1120,1),plate(.9,true));
   s+=komo({x:isV?820:760,y:1390,s:isV?.95:.8,expr:t<t0+5?'think':'surprised',aL:70,aR:-30,holdR:KOMO.magnifier,blink:blinkAt(t,2)});
   s+=calendarFlip(t,t0+2.5,isV?1250:1520,isV?700:930,isV?.7:.55);
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.1]),
  hud:t=>chapter(t,t0,t0+2.4,['HOW COME?'])+(t>t0+2.4?g(tr(W/2,isV?560:200),factCard(t,t0+2.5,['THE EXPERIMENT:','NO BREAKFAST FOR 30 DAYS'],{size:isV?52:54,w:isV?960:1200})):'')+(t>t0+7?label('WHAT HAPPENS?',{x:W/2,y:isV?1320:850,size:60,bg:'#E8505B',sc:popS(t,t0+7,.45)}):'')}),
 context:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#E9C9A3"/><circle cx="960" cy="880" r="560" fill="#fff" opacity=".4" filter="url(#glowf)"/>`;
   s+=g(tr(960,940,popS(t,t0+.1,.5)*1.3),cerealBox(1,'1917'));
   const ky=popS(t,WT('yep','context'),.45);if(ky>0)s+=label('YEP!',{x:isV?1300:1360,y:740,size:70,bg:'#F4C542',fill:OL,sc:ky,r:6});
   return s;},
  cam:t=>camV(t,t0,t1,[960,920,1.0],[960,900,1.08]),
  hud:t=>hudTitle('FUN FACT',isV?460:150,popS(t,t0+.1,.45),{fill:'#FFE27A'})+(t>WT('cereal','context')?label('PUSHED BY CEREAL ADS',{x:W/2,y:isV?1330:850,size:56,bg:'#E8505B',sc:popS(t,WT('cereal','context'),.45)}):'')}),
 sil_context:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="880" r="560" fill="#F4C542" opacity=".2" filter="url(#glowf)"/>`;
   for(let i=0;i<3;i++){const k=popS(t,t0+.6+i*.5,.45);if(k>0)s+=g(tr((isV?600:380)+i*(isV?360:330),isV?820:1030,k*(isV?.8:.6),(i-1)*6),cerealBox(1,['CRUNCHY','CORNY','OATY'][i]));}
   s+=komo({x:isV?960:1500,y:1400,s:isV?.8:.62,expr:t<t0+6?'surprised':'happy',aL:70,aR:-30,holdR:KOMO.magnifier,blink:blinkAt(t,3)});
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.08]),
  hud:t=>g(tr(W/2,isV?520:180),factCard(t,t0+.2,['"Most important meal of the day"','got a big push from','early-1900s cereal ads'],{size:isV?46:50,w:isV?980:1250}))+srcText('Source: Lenna Cooper, Good Health magazine (1917)',fadeIn(t,t0+.6))}),
 point1:(t0,t1)=>({
  world:t=>{let s=kitchen(t);const calm=t>WT('couple','point1')-.2;
   const gv=calm?0.85-0.6*ss((t-WT('couple','point1'))/1.2):0.3+0.55*ss((t-WT('ghrelin','point1'))/1);
   s+=gauge(isV?1280:1320,1220,'GHRELIN','',t>WT('ghrelin','point1')-.2?gv:0,calm?'#3BB273':'#E8505B');
   s+=komo({x:isV?720:700,y:1400,s:isV?.9:.75,expr:calm?'happy':(t>WT('cranky','point1')?'think':'surprised'),aL:70,aR:70,blink:blinkAt(t,4)});
   const kg=popS(t,WT('growls','point1'),.4);if(kg>0&&!calm)s+=g(tr((isV?720:700)+250,1120,kg),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="64" fill="#E8505B" stroke="${OL}" stroke-width="8" paint-order="stroke" transform="rotate(${fmt(Math.sin(t*30)*5)})">GRRR!</text>`);
   if(!calm){[['CRANKY',WT('cranky','point1')],['FOGGY',WT('foggy','point1')]].forEach(([tx,ti],i)=>{const k=popS(t,ti,.4);if(k>0)s+=label(tx,{x:isV?(i?1240:680):380,y:(isV?700:700)+i*(isV?0:120),size:52,bg:'#5B6C8F',sc:k,r:i?4:-4});});
    const kd=popS(t,WT('donuts','point1'),.45);if(kd>0)s+=g(tr(isV?720:700,isV?620:600,kd*.8),donut(1),'filter="url(#dsh)"');}
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.06]),
  hud:t=>label(t>WT('couple','point1')-.2?'WEEK 2-3':'WEEK 1',{x:W/2,y:isV?440:140,size:isV?76:64,bg:'#F4C542',fill:OL,sc:popS(t,t0+.05,.45)})+(t>WT('fades','point1')?label('MORNING HUNGER FADES',{x:W/2,y:isV?1330:850,size:54,bg:'#3BB273',sc:popS(t,WT('fades','point1'),.45)}):'')}),
 sil_point1:(t0,t1)=>({
  world:t=>{let s=grid('#3B3A7A');const bx=isV?480:520,bw=isV?50:60,base=1250,n=14;
   s+=`<path d="M${bx-30},${base}H${bx+n*(bw+10)+20}" stroke="#fff" stroke-width="6"/>`;
   for(let i=0;i<n;i++){const k=clamp((t-(t0+1+i*.35))/.3);if(k<=0)continue;const h=(520-i*26+(i<3?20:0)-rnd(i)*30)*eout(k);
    s+=`<rect x="${bx+i*(bw+10)}" y="${fmt(base-h)}" width="${bw}" height="${fmt(h)}" rx="10" fill="${i<4?'#E8505B':i<9?'#F4C542':'#7FD18B'}" stroke="${OL}" stroke-width="5"/>`;}
   s+=`<text x="${bx}" y="${base+70}" font-family="B2" font-weight="800" font-size="44" fill="#fff">DAY 1</text><text x="${bx+n*(bw+10)-10}" y="${base+70}" text-anchor="end" font-family="B2" font-weight="800" font-size="44" fill="#fff">DAY 14</text>`;
   return s;},
  cam:t=>camV(t,t0,t1,[960,980,1.05],[960,960,1.0]),
  hud:t=>hudTitle('MORNING HUNGER',isV?440:150,popS(t,t0+.2,.45),{size:isV?76:70})+(t>t0+7?g(tr(W/2,isV?620:270),factCard(t,t0+7,['Your hunger hormone','learns the new schedule'],{size:isV?44:46,w:isV?820:1000})):'')+srcText('Source: Cummings et al. (2004); Frecka & Mattes (2008)',fadeIn(t,t0+.5))}),
 metab:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#2A1F2B"/><circle cx="960" cy="880" r="560" fill="#F28C38" opacity=".2" filter="url(#glowf)"/>`;
   s+=g(tr(960,900,popS(t,t0+.1,.5)*1.1),flame(1.2,1+0.1*Math.sin(t*10)),'filter="url(#dsh)"');
   const kx=popS(t,WT('scoffs','metab')>0?WT('scoffs','metab'):t0+2.4,.45);const kx2=popS(t,WT('researchers','metab'),.45);if(kx2>0)s+=g(tr(960,900,kx2*1.8),xmark(1));
   return s;},
  cam:t=>camV(t,t0,t1,[960,920,1.0],[960,900,1.1]),
  hud:t=>hudTitle('"KICKSTARTS METABOLISM"?',isV?460:150,popS(t,t0+.1,.45),{size:isV?62:66})+(t>WT('calories','metab')-.3?label('SAME CALORIES BURNED AT REST',{x:W/2,y:isV?1330:850,size:isV?44:52,bg:'#3BB273',sc:popS(t,WT('calories','metab')-.3,.45)}):'')+(t>WT('researchers','metab')?srcText('Source: Betts et al., Am J Clin Nutr (2014)',fadeIn(t,WT('researchers','metab'))):'')}),
 sil_metab:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".5" filter="url(#glowf)"/>`;
   const L=isV?700:620,R=isV?1220:1300;
   s+=komo({x:L,y:1400,s:isV?.65:.6,expr:'happy',aL:70,aR:70,blink:blinkAt(t,5)})+komo({x:R,y:1400,s:isV?.65:.6,expr:'smile',aL:70,aR:70,blink:blinkAt(t,6)});
   s+=g(tr(L,860,popS(t,t0+1,.45)*.6),flame(1))+g(tr(R,860,popS(t,t0+1.3,.45)*.6),flame(1));
   s+=bigText('BREAKFAST',L,1520,isV?44:52,{sw:8})+bigText('NO BREAKFAST',R,1520,isV?44:52,{sw:8});
   const ke=popS(t,t0+3,.45);if(ke>0)s+=g(tr(960,860,ke),`<circle r="80" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="28" text-anchor="middle" font-family="B2" font-weight="800" font-size="90" fill="${OL}">=</text>`,'filter="url(#dsh)"');
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.05]),
  hud:t=>hudTitle('RESTING BURN: THE SAME',isV?440:150,popS(t,t0+.2,.45),{size:isV?64:70})+(t>t0+6?g(tr(W/2,isV?600:270),factCard(t,t0+6,['Breakfast eaters just moved','a bit more in the morning'],{size:isV?42:44,w:isV?860:1000})):'')+srcText('Source: Betts et al., Am J Clin Nutr (2014)',fadeIn(t,t0+.4))}),
 point2:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="880" r="560" fill="#E5383B" opacity=".2" filter="url(#glowf)"/>`;
   s+=g(tr(960,1100,popS(t,t0+.1,.5)),plate(1.1));
   s+=komo({x:isV?1320:1420,y:1420,s:isV?.6:.55,expr:'surprised',aL:70,aR:70,blink:blinkAt(t,7)});
   const kl=popS(t,WT('lose','point2'),.45);if(kl>0)s+=g(tr(isV?640:600,isV?1020:980,kl*.8),xmark(1));
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.08],[960,940,1.0]),
  hud:t=>hudTitle("HERE'S THE SHOCK",isV?440:150,popS(t,t0+.1,.45),{fill:'#FF8A8A',size:isV?76:70})+
   (t>WT('two','point2')-.1?g(tr(W/2,isV?650:300,popS(t,WT('two','point2'),.5)),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${isV?150:130}" fill="#FFE27A" stroke="${OL}" stroke-width="16" paint-order="stroke">+260 kcal</text>`):'')+
   (t>WT('lose','point2')?label('NO WEIGHT-LOSS HELP',{x:W/2,y:isV?1330:850,size:54,bg:'#E5383B',sc:popS(t,WT('lose','point2'),.45)}):'')+srcText('Source: Sievert et al., BMJ (2019)',fadeIn(t,t0+.5))}),
 sil_point2:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#E9C9A3"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".35" filter="url(#glowf)"/>`;
   const tilt=-10*ss((t-t0-1.5)/1);
   const PL=isV?660:560,PR=isV?1260:1360,ps=isV?.45:.6;
   s+=g(`rotate(${fmt(tilt)} 960 900)`,`<rect x="${PL-100}" y="884" width="${PR-PL+200}" height="32" rx="16" fill="#8C6A52" stroke="${OL}" stroke-width="6"/>`+g(tr(PL,840,ps),plate(1))+g(tr(PR,860,ps),plate(1,true))+`<text x="${PL}" y="770" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="#E8505B" stroke="#fff" stroke-width="8" paint-order="stroke">+260</text>`);
   s+=`<path d="M960,900L900,1240H1020Z" fill="#A8703F" stroke="${OL}" stroke-width="7"/>`;
   return s;},
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.06]),
  hud:t=>hudTitle('EVERY. SINGLE. DAY.',isV?440:150,popS(t,t0+.2,.45),{size:isV?72:70})+(t>t0+(IS_SHORT?.6:4)?g(tr(W/2,isV?1330:840),factCard(t,t0+(IS_SHORT?.6:4),['Breakfast eaters ate ~260','more calories per day'],{size:isV?42:44,w:isV?820:980})):'')+srcText('Source: Sievert et al., BMJ (2019)',fadeIn(t,t0+.3))}),
 twist:(t0,t1)=>({
  world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="880" r="560" fill="#F4C542" opacity=".2" filter="url(#glowf)"/>`;
   const tw=WT('kids','twist');
   if(t<tw-.2){[[pizza,isV?620:560,820],[chips,960,700],[candy,isV?1300:1360,840]].forEach(([f,x,y],i)=>{const k=popS(t,WT('junk','twist')-.3+i*.2,.45);if(k>0)s+=g(tr(x,y+Math.sin(t*3+i)*12,k*1.1,(i-1)*10),f(1),'filter="url(#dsh)"');});
     s+=komo({x:960,y:1420,s:isV?.75:.62,expr:'happy',aL:40+Math.sin(t*8)*10,aR:40-Math.sin(t*8)*10});
     const kx=popS(t,WT('junk','twist')+.6,.45);if(kx>0)s+=g(tr(960,800,kx*2),xmark(1));}
   else{s+=g(tr(isV?960:640,isV?760:860,popS(t,tw-.2,.45)),warn(1.3),'filter="url(#dsh)"');
     [['KIDS',WT('kids','twist')],['TEENS',WT('teens','twist')],['DIABETES MEDS',WT('diabetes','twist')]].forEach(([tx,ti],i)=>{const k=popS(t,ti,.4);if(k>0)s+=label(tx,{x:isV?960:1300,y:(isV?1000:740)+i*(isV?110:130),size:52,bg:'#E8505B',sc:k,r:i%2?3:-3});});}
   return s;},
  cam:t=>camV(t,t0,t1,[960,940,1.0],[960,920,1.08]),
  hud:t=>chapter(t,t0,WT('only','twist')>0?WT('only','twist'):t0+1.3,['PLOT TWIST!'])+(t>WT('matters','twist')-.3?label('WHAT YOU EAT ALL DAY MATTERS',{x:W/2,y:isV?470:150,size:isV?44:56,bg:'#3BB273',sc:popS(t,WT('matters','twist')-.3,.45)}):'')}),
 sil_twist:(t0,t1)=>({
  world:t=>`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".5" filter="url(#glowf)"/>`+g(tr(960,isV?880:870,popS(t,t0+.1,.5)*(isV?.9:.85)),checkCard(t,[{txt:'OK FOR MANY ADULTS',t:t0+1.2},{txt:'WATCH LUNCH & SNACKS',t:t0+3},{txt:'KIDS/MEDS: ASK A DOCTOR',t:t0+5}])),
  cam:t=>camV(t,t0,t1,[960,960,1.0],[960,940,1.04]),
  hud:t=>hudTitle('THE REAL ANSWER',isV?440:150,popS(t,t0+.2,.45),{fill:'#22335A',size:isV?76:72})}),
 cta:(t0,t1)=>({
  world:t=>{const sl=eout((t-t0)/.5);
   let s=`<rect width="1920" height="1920" fill="#222"/><path d="M0,0L${fmt(lerp(-200,1040,sl))},0L${fmt(lerp(-400,880,sl))},1920L0,1920Z" fill="#F28C38"/><path d="M1920,0L${fmt(lerp(2120,1040,sl))},0L${fmt(lerp(2320,880,sl))},1920L1920,1920Z" fill="#1B2347"/>`;
   const L=isV?680:560,R=isV?1240:1360,y=isV?880:1000;
   const k1=popS(t,WT('breakfast','cta'),.5),k2=popS(t,WT('skip','cta'),.5);
   if(k1>0)s+=g(tr(L,y,k1*.55),plate(1));if(k2>0)s+=g(tr(R,y,k2*.55),plate(1,true));
   s+=bigText('TEAM BREAKFAST',L,isV?720:820,isV?50:66,{sw:10})+bigText('TEAM SKIP',R,isV?720:820,isV?50:66,{sw:10});
   const kv=popS(t,WT('or','cta'),.4);if(kv>0)s+=g(tr(960,isV?800:900,kv,-6),`<circle r="90" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="84" fill="${OL}">VS</text>`,'filter="url(#dsh)"');
   s+=komo({x:960,y:lerp(1950,isV?1480:1440,eout((t-t0)/.6)),s:isV?.72:.68,expr:'happy',aR:-60+Math.sin(t*9)*14,aL:70,blink:blinkAt(t,13)});
   const kc=popS(t,WT('comments','cta'),.45);if(kc>0)s+=g(tr(isV?1150:1290,isV?1080:1080,kc*(isV?.85:1),3),bubble(520,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="${OL}">Tell me below!</text>`,'filter="url(#dsh)"');
   return s;},
  cam:t=>camV(t,t0,t1,[960,1000,1.0],[960,980,1.05]),
  hud:t=>hudTitle('YOUR PICK?',isV?470:150,popS(t,t0+.05,.45),{fill:'#FFE27A'})}),
 sil_outro:(t0,t1)=>subscribeEnd(null,t0,t1),
 pad:(t0,t1,it)=>it.name==='pad_end'?subscribeEnd(null,t0,t1):B.sil_point2(t0,t1),
};
buildFromPlan(B);
if(!isV)S.forEach(sc=>{const c=sc.cam;sc.cam=t=>{const v=c(t);return [v[0],v[1]+90,v[2]];};}); // 16:9: lift world above subtitles
var THUMB={t:Math.min(WT('thirty','hook')+0.6,ITEM('hook').t1-0.15),lines:['WHAT IF YOU SKIPPED','BREAKFAST FOR','30 DAYS?']};
