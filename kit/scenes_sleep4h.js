// ===== HOWCOME? | What If You Slept Only 4 Hours Every Night? (Short, Style A + KOMO) =====
// ---------- scenes (times from timing_sleep4h.json) ----------
// 1 HOOK 0 - 6.05
S.push({t0:0,t1:6.05,
 world:t=>{let s=bedroom(t,0);
  s+=`<circle cx="960" cy="900" r="520" fill="#5EC8FF" opacity=".18" filter="url(#glowf)"/>`;
  s+=bed(isV?1240:1000,1420,1.05,lyingHead(t<3.5?'surprised':'think',blinkAt(t,1)));
  const k=popS(t,0.12,.5);if(k>0)s+=alarmClock(isV?960:560,isV?930:900,1.15*k,t,'4:00',t<1.2?3:0);
  return s;},
 cam:t=>camV(t,0,6.05,[960,1000,1.18],[960,980,1.0]),
 hud:t=>hudTitle('4 HOURS OF SLEEP',isV?440:150,popS(t,0.12,.5),{fill:'#FFE27A',size:isV?104:96})+
  ['EVERY.','SINGLE.','NIGHT.'].map((w,i)=>{const k=popS(t,[1.48,2.24,3.1][i],.4);return k>0?g(tr(isV?260+i*280:640+i*320,isV?590:270,k,-4+i*3),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${isV?72:70}" fill="#fff" stroke="${OL}" stroke-width="10" paint-order="stroke">${w}</text>`):'';}).join('')+
  (t>4.3?label('HUSTLE HACK?',{x:W/2,y:isV?1300:900,size:isV?58:52,bg:'#5B6C8F',sc:popS(t,4.3,.45),r:3}):'')
});
// 2 MYTH + HOW COME 6.05 - 10.15
S.push({t0:6.05,t1:10.15,
 world:t=>{let s=bedroom(t,1);s+=`<rect width="1920" height="1920" fill="#C9CFC4" opacity=".55"/>`;
  s+=komo({x:isV?820:760,y:1360,s:1.05,expr:'happy',aL:70,aR:-40+Math.sin(t*6)*8,blink:blinkAt(t,2)});
  const kb=popS(t,6.4,.45);if(kb>0)s+=g(tr(isV?1180:1240,700,kb,3),bubble(560,200,'bl')+`<text x="0" y="-8" text-anchor="middle" font-family="B2" font-weight="800" font-size="54" fill="${OL}">"I'll get used</text><text x="0" y="56" text-anchor="middle" font-family="B2" font-weight="800" font-size="54" fill="${OL}">to it!"</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,6.05,10.15,[960,1000,1.0],[980,960,1.1]),
 hud:t=>chapter(t,8.5,10.15,['HOW COME IT','KEEPS FALLING','APART?'])
});
// 3 DAY 1: FOCUS 10.15 - 18.85
S.push({t0:10.15,t1:18.85,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#3B3A7A"/>`;for(let i=0;i<20;i++)s+=`<path d="M${i*100},0V1920M0,${i*100}H1920" stroke="#fff" stroke-opacity=".05" stroke-width="3"/>`;
  // focus bars over 14 days
  const n=14,bx=isV?520:560,bw=isV?52:60,base=1200;
  s+=`<path d="M${bx-30},${base}H${bx+n*(bw+10)+20}" stroke="#fff" stroke-width="6"/>`;
  for(let i=0;i<n;i++){const ti=13.2+i*0.38;const k=clamp((t-ti)/.3);if(k<=0)continue;
    const hgt=(560-i*30-rnd(i)*40)*eout(k);const col=i<5?'#7FD18B':i<10?'#F4C542':'#E8505B';
    s+=`<rect x="${bx+i*(bw+10)}" y="${fmt(base-hgt)}" width="${bw}" height="${fmt(hgt)}" rx="10" fill="${col}" stroke="${OL}" stroke-width="5"/>`;}
  if(t>13.2)s+=`<text x="${bx}" y="${base+70}" font-family="B2" font-weight="800" font-size="44" fill="#fff">DAY 1</text><text x="${bx+n*(bw+10)-10}" y="${base+70}" text-anchor="end" font-family="B2" font-weight="800" font-size="44" fill="#fff">DAY 14</text>`;
  // komo thinking (day 1 intro)
  const ko=1-ss((t-12.9)/.4);if(ko>0)s+=g('',komo({x:960,y:1330,s:1.05,expr:'think',aL:70,aR:70,blink:blinkAt(t,3)}),`opacity="${fmt(ko)}"`);
  if(t<13.2){const k1=popS(t,10.94,.45),k2=popS(t,11.92,.45);
    if(k1>0)s+=label('FOCUS ↓',{x:isV?650:560,y:640,size:64,bg:'#E8505B',sc:k1,r:-4});
    if(k2>0)s+=label('REACTIONS ↓',{x:isV?1270:1360,y:780,size:60,bg:'#E8505B',sc:k2,r:3});}
  return s;},
 cam:t=>camV(t,10.15,18.85,[960,960,1.05],[960,900,1.0]),
 hud:t=>label('DAY 1',{x:W/2,y:isV?440:140,size:isV?80:64,bg:'#F4C542',fill:OL,sc:popS(t,10.2,.45)})+
  (t>13.1?hudTitle('ATTENTION SCORE',isV?600:250,popS(t,13.1,.45),{size:isV?70:60})+srcText('Source: Van Dongen et al., Sleep (2003)',fadeIn(t,13.3)):'')
});
// 4 SCARY PART 18.85 - 21.1
S.push({t0:18.85,t1:21.1,
 world:t=>{const p=0.5+0.5*Math.sin(t*7);let s=`<rect width="1920" height="1920" fill="#2A1F2B"/><circle cx="960" cy="860" r="620" fill="#E5383B" opacity="${fmt(.18+.12*p)}" filter="url(#glowf)"/>`;
  s+=g(tr(isV?700:640,isV?820:700,popS(t,18.9,.45)),warn(1.3),'filter="url(#dsh)"');
  s+=komo({x:isV?1060:1060,y:1360,s:.9,expr:'smile',aL:70,aR:-30,blink:blinkAt(t,4)});
  const kb=popS(t,19.9,.4);if(kb>0)s+=g(tr(isV?1250:1300,980,kb*.85,4),bubble(420,150,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="${OL}">"I'm fine!"</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,18.85,21.1,[960,900,1.0],[960,920,1.12]),
 hud:t=>label('THEY BARELY NOTICED',{x:W/2,y:isV?470:150,size:isV?66:60,bg:'#E5383B',sc:popS(t,19.78,.45),r:-3})
});
// 5 DAY 3: HUNGER 21.1 - 32.45
S.push({t0:21.1,t1:32.45,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#E9C9A3"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".35" filter="url(#glowf)"/>`;
  const foods=t>29.9;
  if(!foods){const lv=1-0.55*ss((t-24.4)/.8),gv=0.35+0.6*ss((t-27.2)/.8);
    s+=gauge(isV?690:640,1220,'LEPTIN','',t>23.4?lv:0,'#3BB273')+gauge(isV?1230:1280,1220,'GHRELIN','',t>23.4?gv:0,'#E8505B');
    const k1=popS(t,24.4,.45),k2=popS(t,27.2,.45);
    if(k1>0)s+=g(tr(isV?690:640,780,k1),arrowUD(false,'#3BB273',.65))+label('"I\'M FULL"',{x:isV?690:640,y:665,size:52,bg:'#3BB273',sc:k1,r:-3});
    if(k2>0)s+=g(tr(isV?1230:1280,780,k2),arrowUD(true,'#E8505B',.65))+label('"FEED ME!"',{x:isV?1230:1280,y:665,size:52,bg:'#E8505B',sc:k2,r:3});}
  else{s+=komo({x:960,y:1340,s:1.0,expr:'happy',aL:40+Math.sin(t*8)*10,aR:40-Math.sin(t*8)*10,blink:false});
    const items=[[pizza,30.18,isV?610:560,820],[chips,30.78,isV?1310:1360,780],[candy,31.34,isV?1300:1380,1120]];
    items.forEach(([f,ti,x,y],i)=>{const k=popS(t,ti,.45);if(k>0)s+=g(tr(x,y+Math.sin(t*3+i)*12,k*1.25,(i-1)*10),f(1),'filter="url(#dsh)"');});}
  return s;},
 cam:t=>t<29.9?camV(t,21.1,29.9,[960,900,1.0],[960,880,1.08]):camV(t,29.9,32.45,[960,960,1.05],[960,940,1.0]),
 hud:t=>label('DAY 3',{x:W/2,y:isV?440:140,size:isV?80:64,bg:'#F4C542',fill:OL,sc:popS(t,21.12,.45)})+
  (t>21.6&&t<29.9?hudTitle('HUNGER GOES WILD',isV?600:250,popS(t,21.7,.45),{size:isV?74:64}):'')+
  (t>29.9?hudTitle('ALL OF IT!',isV?600:250,popS(t,31.9,.45),{fill:'#FFE27A',size:isV?90:76}):'')+
  (t>24?srcText('Source: Spiegel et al., Ann Intern Med (2004)',fadeIn(t,24.2)):'')
});
// 6 DAY 6: BLOOD SUGAR 32.45 - 41.72
S.push({t0:32.45,t1:41.72,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="860" r="560" fill="#E5383B" opacity=".2" filter="url(#glowf)"/>`;
  const k=popS(t,32.6,.5);s+=g(tr(isV?760:700,880,k*1.25),drop(1.2),'filter="url(#dsh)"');
  for(let i=0;i<6;i++){const ti=35.5+i*0.7;const kk=popS(t,ti,.4);if(kk<=0)continue;const cx=(isV?760:700)+(i%3-1)*95,cy=1010-Math.floor(i/3)*95;s+=g(tr(cx,cy,kk),sugarCube(0,0,40),'filter="url(#dsh)"');}
  // glucose meter
  const v=ss((t-35.2)/5.4);const mx=isV?1250:1280;
  s+=g(tr(mx,900),`<rect x="-120" y="-260" width="240" height="420" rx="40" fill="#EEF3F7" stroke="${OL}" stroke-width="8"/><rect x="-90" y="-220" width="180" height="140" rx="16" fill="#10202E"/>
   <text x="0" y="-122" text-anchor="middle" font-family="B2" font-weight="800" font-size="84" fill="${v>0.75?'#FF5A5A':'#7FD18B'}">${Math.round(90+v*60)}</text>
   <rect x="-80" y="-40" width="160" height="26" rx="13" fill="#CDD6DE"/><rect x="-80" y="-40" width="${fmt(160*v)}" height="26" rx="13" fill="${v>0.75?'#E5383B':'#F4C542'}"/>
   <circle cx="0" cy="80" r="40" fill="#5B6C8F" stroke="${OL}" stroke-width="6"/>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,32.45,41.72,[960,920,1.08],[980,900,1.0]),
 hud:t=>label('DAY 6',{x:W/2,y:isV?440:140,size:isV?80:64,bg:'#F4C542',fill:OL,sc:popS(t,32.46,.45)})+
  hudTitle('BLOOD SUGAR GOES WEIRD',isV?600:250,popS(t,33.2,.45),{size:isV?62:60})+
  (t>40.8?label('PRE-DIABETES ZONE',{x:W/2,y:isV?1320:930,size:isV?60:56,bg:'#E5383B',sc:popS(t,40.86,.45),r:-2}):'')+
  (t>35.4?srcText('Source: Spiegel et al., The Lancet (1999)',fadeIn(t,35.6)):'')
});
// 7 IMMUNE 41.72 - 47.3
S.push({t0:41.72,t1:47.3,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#1F2E25"/><circle cx="960" cy="900" r="520" fill="#7BC96F" opacity=".15" filter="url(#glowf)"/>`;
  const sh=1-0.5*ss((t-43)/2);s+=`<circle cx="960" cy="980" r="400" fill="#5EC8FF" opacity="${fmt(.12*sh)}" stroke="#5EC8FF" stroke-opacity="${fmt(.7*sh)}" stroke-width="10" stroke-dasharray="${t>43.5?'40 26':'0'}"/>`;
  s+=komo({x:960,y:1280,s:.95,expr:t>45?'surprised':'think',aL:70,aR:70,blink:blinkAt(t,5)});
  for(let i=0;i<6;i++){const a=t*0.9+i*Math.PI/3,r=480-60*ss((t-43)/3);const k=popS(t,42+i*0.25,.45);if(k>0)s+=g(tr(960+Math.cos(a)*r,900+Math.sin(a)*r*0.8,k*.8),virus(1,t*40+i*30),'filter="url(#dsh)"');}
  return s;},
 cam:t=>camV(t,41.72,47.3,[960,940,1.0],[960,920,1.12]),
 hud:t=>hudTitle('IMMUNE SYSTEM',isV?440:150,popS(t,41.98,.45),{size:isV?84:72})+
  (t>45.2?g(tr(W/2,isV?620:300,popS(t,45.26,.5)),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${isV?150:130}" fill="#FFE27A" stroke="${OL}" stroke-width="16" paint-order="stroke">4×</text>`):'')+
  (t>46.6?label('MORE COLDS',{x:W/2,y:isV?1320:930,size:isV?62:56,bg:'#E8505B',sc:popS(t,46.84,.45),r:3}):'')+
  (t>45.2?srcText('Source: Prather et al., Sleep (2015)',fadeIn(t,45.4)):'')
});
// 8 PLOT TWIST: RARE GENE 47.3 - 53.95
S.push({t0:47.3,t1:53.95,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="880" r="560" fill="#F4C542" opacity=".2" filter="url(#glowf)"/>`;
  s+=g(tr(isV?760:720,860,popS(t,48.2,.5)*1.2),dna(t,1),'filter="url(#dsh)"');
  const kk=t>53.3?ss((t-53.3)/.5):0;
  s+=komo({x:isV?1260:1300,y:1330,s:.95-.35*kk,expr:t>53.4?'happy':'think',aL:70,aR:-20,holdR:KOMO.magnifier,blink:blinkAt(t,6)});
  if(t>51.4)s+=label('RARE GENE',{x:isV?760:720,y:1300,size:62,bg:'#3BB273',sc:popS(t,51.44,.45),r:-3});
  return s;},
 cam:t=>camV(t,47.3,53.95,[960,940,1.0],[960,960,1.1]),
 hud:t=>chapter(t,47.32,48.6,['PLOT TWIST!'])+(t>53.4?hudTitle('TINY CHANCE',isV?470:150,popS(t,53.44,.45),{fill:'#FFE27A',size:isV?96:80}):'')+
  (t>51.4?srcText('Source: He et al., Science (2009)',fadeIn(t,51.6)):'')
});
// 9 CONCLUSION 53.95 - 57.95
S.push({t0:53.95,t1:57.95,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".5" filter="url(#glowf)"/>`;
  s+=g(tr(960,isV?880:860,popS(t,54.0,.5)),checkCard(t,[{txt:'7+ HOURS',t:54.94},{txt:'NOT LAZY',t:56.1},{txt:'MAINTENANCE',t:57.22}]));
  return s;},
 cam:t=>camV(t,53.95,57.95,[960,960,1.05],[960,940,1.0]),
 hud:t=>''
});
// 10 CTA 57.95 - end
S.push({t0:57.95,t1:67,
 world:t=>{const sl=eout((t-57.95)/.5);
  let s=`<rect width="1920" height="1920" fill="#222"/>`;
  s+=`<path d="M0,0L${fmt(lerp(-200,1040,sl))},0L${fmt(lerp(-400,880,sl))},1920L0,1920Z" fill="#1B2347"/><path d="M1920,0L${fmt(lerp(2120,1040,sl))},0L${fmt(lerp(2320,880,sl))},1920L1920,1920Z" fill="#F28C38"/>`;
  const L=isV?680:600,R=isV?1240:1320;
  const k1=popS(t,60.66,.5),k2=popS(t,61.66,.5);
  if(k1>0)s+=alarmClock(L,880,.62*k1,t,'4H');
  if(k2>0)s+=alarmClock(R,880,.62*k2,t,'8H');
  s+=bigText('TEAM 4 HOURS',L,700,isV?54:72,{sw:10})+bigText('TEAM 8 HOURS',R,700,isV?54:72,{sw:10});
  const kv=popS(t,61.2,.4);if(kv>0)s+=g(tr(960,800,kv,-6),`<circle r="96" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="90" fill="${OL}">VS</text>`,'filter="url(#dsh)"');
  const yk=eout((t-58.0)/.6);
  s+=komo({x:960,y:lerp(1950,1480,yk),s:.72,expr:'happy',aR:-60+Math.sin(t*9)*14,aL:70,blink:blinkAt(t,13)});
  const kc=popS(t,62.84,.45);if(kc>0)s+=g(tr(isV?1150:1300,1080,kc*(isV?.85:1),3),bubble(520,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="${OL}">Tell me below!</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,57.95,67,[960,1000,1.0],[960,980,1.06]),
 hud:t=>hudTitle('BE HONEST!',isV?470:150,popS(t,57.96,.45),{fill:'#FFE27A'})
});
const THUMB={t:0.9,lines:['WHAT IF YOU SLEPT','ONLY 4 HOURS','EVERY NIGHT?']};
