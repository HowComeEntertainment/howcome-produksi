// ===== HOWCOME? | What If You Slept Only 4 Hours Every Night? (YouTube 16:9, Style A + KOMO) =====
// times from timing_sleep4h_yt.json
function brain(t,s=1,alarm=0){const p=0.5+0.5*Math.sin(t*8);
  let b=`<path d="M-200,40C-260,0 -250,-110 -170,-130C-170,-210 -60,-240 0,-190C60,-240 170,-210 170,-130C250,-110 260,0 200,40C230,120 140,180 70,150C30,200 -40,200 -70,150C-140,180 -230,120 -200,40Z" fill="#F4A6B8" stroke="${OL}" stroke-width="9" stroke-linejoin="round"/>
  <path d="M0,-185C-20,-100 20,-40 0,140M-150,-90C-90,-80 -80,-20 -130,20M150,-90C90,-80 80,-20 130,20M-90,80C-60,40 -20,60 -10,100M90,80C60,40 20,60 10,100" stroke="#D97C93" stroke-width="9" fill="none" stroke-linecap="round"/>`;
  if(alarm>0)b+=`<circle cx="-60" cy="40" r="${fmt(46+10*p)}" fill="#E5383B" opacity="${fmt(alarm*(.6+.4*p))}" stroke="${OL}" stroke-width="6"/>`;
  return g(`scale(${s})`,b);}
function bubbleDots(t,cx,cy,n,col,on){let s='';for(let i=0;i<n;i++){const ph=(t*0.5+rnd(i))%1;const x=cx+(rnd(i+9)-0.5)*420,y=cy+120-ph*360;s+=`<circle cx="${fmt(x)}" cy="${fmt(y)}" r="${fmt(10+rnd(i+3)*16)}" fill="${col}" opacity="${fmt(on*Math.sin(ph*Math.PI)*.8)}" stroke="#fff" stroke-width="3"/>`;}return s;}
function calendarDay(txt,s=1,x=0){return g(tr(x,0,s),`<rect x="-150" y="-170" width="300" height="320" rx="30" fill="#fff" stroke="${OL}" stroke-width="8"/><rect x="-150" y="-170" width="300" height="90" rx="30" fill="#E8505B" stroke="${OL}" stroke-width="8"/><text x="0" y="-108" text-anchor="middle" font-family="B2" font-weight="800" font-size="54" fill="#fff">${txt}</text><text x="0" y="70" text-anchor="middle" font-family="B2" font-weight="800" font-size="110" fill="${OL}">Zz</text>`,'filter="url(#dsh)"');}
const grid_old=c=>{let s=`<rect width="1920" height="1920" fill="${c}"/>`;for(let i=0;i<20;i++)s+=`<path d="M${i*100},0V1920M0,${i*100}H1920" stroke="#fff" stroke-opacity=".05" stroke-width="3"/>`;return s;};
const DAY=(txt,t,t0)=>label(txt,{x:W/2,y:140,size:64,bg:'#F4C542',fill:OL,sc:popS(t,t0,.45)});

// 1 HOOK 0 - 10.29
S.push({t0:0,t1:10.29,
 world:t=>{let s=bedroom(t,0);s+=`<circle cx="960" cy="900" r="520" fill="#5EC8FF" opacity=".18" filter="url(#glowf)"/>`;
  if(t<3.6){s+=bed(1100,1420,1.05,lyingHead(t<2?'surprised':'think',blinkAt(t,1)));s+=alarmClock(560,880,1.1*popS(t,0.1,.5),t,'4:00',t<1.3?3:0);}
  else{s+=komo({x:960,y:1380,s:.8,expr:'happy',aL:70,aR:-70+Math.sin(t*5)*8,blink:blinkAt(t,2)});
    const ic=[['CEOs',6.26,520,'#5B6C8F',760],['STUDENTS',7.22,1400,'#3BB273',720],['GAMERS',7.82,1420,'#9C7BE0',900]];
    ic.forEach(([tx,ti,x,c,yy],i)=>{const k=popS(t,ti,.4);if(k>0)s+=label(tx,{x,y:yy,size:58,bg:c,sc:k,r:(i-1)*4});});
    const kw=popS(t,9.94,.45);if(kw>0)s+=g(tr(520,1000,kw,6),`<path d="M-90,-60L90,-60L70,20Q0,70 -70,20Z" fill="#F4C542" stroke="${OL}" stroke-width="8"/><rect x="-20" y="40" width="40" height="50" fill="#F4C542" stroke="${OL}" stroke-width="6"/><rect x="-70" y="88" width="140" height="30" rx="8" fill="#D99A2B" stroke="${OL}" stroke-width="6"/>`,'filter="url(#dsh)"');}
  return s;},
 cam:t=>t<3.6?camV(t,0,3.6,[900,1000,1.1],[900,960,1.0]):camV(t,3.6,10.29,[960,960,1.0],[960,940,1.08]),
 hud:t=>hudTitle('4 HOURS OF SLEEP',150,popS(t,0.1,.5),{fill:'#FFE27A',size:96})+
  (t<3.6?['EVERY.','SINGLE.','NIGHT.'].map((w,i)=>{const k=popS(t,[1.7,2.44,3.18][i],.4);return k>0?g(tr(640+i*320,270,k,-4+i*3),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="70" fill="#fff" stroke="${OL}" stroke-width="10" paint-order="stroke">${w}</text>`):'';}).join(''):hudTitle('"SUPERPOWER"',270,popS(t,4.9,.45),{size:66}))
});
// 2 MYTH + HOW COME 10.29 - 15.1
S.push({t0:10.29,t1:15.1,
 world:t=>{let s=bedroom(t,1);s+=`<rect width="1920" height="1920" fill="#C9CFC4" opacity=".55"/>`;
  s+=komo({x:760,y:1380,s:.8,expr:'happy',aL:70,aR:-40+Math.sin(t*6)*8,blink:blinkAt(t,2)});
  const kb=popS(t,10.6,.45);if(kb>0)s+=g(tr(1240,760,kb,3),bubble(560,200,'bl')+`<text x="0" y="-8" text-anchor="middle" font-family="B2" font-weight="800" font-size="54" fill="${OL}">"My body will</text><text x="0" y="56" text-anchor="middle" font-family="B2" font-weight="800" font-size="54" fill="${OL}">adapt!"</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,10.29,15.1,[960,960,1.0],[980,940,1.1]),
 hud:t=>chapter(t,12.74,15.1,['HOW COME SCIENCE','SAYS THE OPPOSITE?'])
});
// 3 BRAIN CLEANING 15.1 - 23.45
S.push({t0:15.1,t1:23.45,
 world:t=>{let s=grid('#3B3A7A');s+=`<circle cx="960" cy="880" r="520" fill="#9C7BE0" opacity=".25" filter="url(#glowf)"/>`;
  const on=t<21.3?ss((t-17.6)/.6):1-ss((t-21.4)/.8);
  s+=bubbleDots(t,960,880,16,'#5EC8FF',on);
  s+=g(tr(960,900,popS(t,15.86,.5)*1.05),brain(t,1),'filter="url(#dsh)"');
  for(let i=0;i<7;i++){const k=popS(t,19.28+i*0.12,.4);if(k<=0)continue;const keep=t>21.4?1:1-ss((t-19.8-i*0.1)/.6);s+=g(tr(780+rnd(i)*360,780+rnd(i+5)*220,k*.9),`<circle r="16" fill="#7A6A3A" stroke="${OL}" stroke-width="4"/>`,`opacity="${fmt(Math.max(keep,t>21.4?1:0))}"`);}
  return s;},
 cam:t=>camV(t,15.1,23.45,[960,900,1.0],[960,880,1.12]),
 hud:t=>hudTitle('BRAIN CLEANUP MODE',150,popS(t,17.6,.45),{size:72,fill:'#5EC8FF'})+(t>21.3?label('CLEANUP CUT SHORT',{x:W/2,y:850,size:56,bg:'#E8505B',sc:popS(t,21.36,.45)}):'')+(t>17.6?srcText('Source: Xie et al., Science (2013)',fadeIn(t,17.8)):'')
});
// 4 DAY 1 + SLIGHTLY DRUNK 23.45 - 31.95
S.push({t0:23.45,t1:31.95,
 world:t=>{let s=grid('#3B3A7A');
  const wob=t>31.4?Math.sin(t*6)*8:0;
  s+=g(`rotate(${fmt(wob)} 960 1380)`,komo({x:960,y:1380,s:.8,expr:t>31.4?'happy':'think',aL:70,aR:70,blink:t>31.4?false:blinkAt(t,3)}));
  const k1=popS(t,24.42,.45),k2=popS(t,25.42,.45);
  if(k1>0)s+=label('FOCUS ↓',{x:520,y:840,size:62,bg:'#E8505B',sc:k1,r:-4});
  if(k2>0)s+=label('REACTIONS ↓',{x:1400,y:780,size:58,bg:'#E8505B',sc:k2,r:3});
  const k3=popS(t,26.8,.45);if(k3>0)s+=alarmClock(1400,1060,.6*k3,t,'17-19H');
  return s;},
 cam:t=>camV(t,23.45,31.95,[960,920,1.0],[960,900,1.06]),
 hud:t=>DAY('DAY 1',t,23.5)+(t>27?hudTitle('17-19 HOURS AWAKE',270,popS(t,27,.45),{size:62}):'')+
  (t>31.3?label('≈ SLIGHTLY DRUNK',{x:W/2,y:850,size:60,bg:'#9C7BE0',sc:popS(t,31.48,.45),r:-3}):'')+(t>27?srcText('Source: Williamson & Feyer, Occup Environ Med (2000)',fadeIn(t,27.2)):'')
});
// 5 ATTENTION BARS 31.95 - 38.3
S.push({t0:31.95,t1:38.3,
 world:t=>{let s=grid('#3B3A7A');const n=14,bx=560,bw=60,base=1250;
  s+=`<path d="M${bx-30},${base}H${bx+n*(bw+10)+20}" stroke="#fff" stroke-width="6"/>`;
  for(let i=0;i<n;i++){const ti=32.9+i*0.34;const k=clamp((t-ti)/.3);if(k<=0)continue;const hgt=(560-i*30-rnd(i)*40)*eout(k);const col=i<5?'#7FD18B':i<10?'#F4C542':'#E8505B';
    s+=`<rect x="${bx+i*(bw+10)}" y="${fmt(base-hgt)}" width="${bw}" height="${fmt(hgt)}" rx="10" fill="${col}" stroke="${OL}" stroke-width="5"/>`;}
  s+=`<text x="${bx}" y="${base+70}" font-family="B2" font-weight="800" font-size="44" fill="#fff">DAY 1</text><text x="${bx+n*(bw+10)-10}" y="${base+70}" text-anchor="end" font-family="B2" font-weight="800" font-size="44" fill="#fff">DAY 14</text>`;
  return s;},
 cam:t=>camV(t,31.95,38.3,[960,980,1.05],[960,960,1.0]),
 hud:t=>hudTitle('ATTENTION SCORE: 4H SLEEP',150,popS(t,32.0,.45),{size:64})+srcText('Source: Van Dongen et al., Sleep (2003)',fadeIn(t,32.2))
});
// 6 SCARY PART 38.3 - 43.95
S.push({t0:38.3,t1:43.95,
 world:t=>{const p=0.5+0.5*Math.sin(t*7);let s=`<rect width="1920" height="1920" fill="#2A1F2B"/><circle cx="960" cy="860" r="620" fill="#E5383B" opacity="${fmt(.18+.12*p)}" filter="url(#glowf)"/>`;
  s+=g(tr(600,860,popS(t,38.34,.45)),warn(1.4),'filter="url(#dsh)"');
  s+=komo({x:1100,y:1380,s:.78,expr:'smile',aL:70,aR:-30,blink:blinkAt(t,4)});
  const kb=popS(t,39.7,.4);if(kb>0)s+=g(tr(1420,820,kb*.9,4),bubble(480,150,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="52" fill="${OL}">"Just a bit sleepy"</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,38.3,43.95,[960,940,1.0],[960,940,1.1]),
 hud:t=>hudTitle('BUT HERE\'S THE SCARY PART',150,popS(t,38.34,.45),{size:62,fill:'#FF8A8A'})+(t>43.2?label('BRAIN FAILING, UNNOTICED',{x:W/2,y:850,size:56,bg:'#E5383B',sc:popS(t,43.34,.45)}):'')
});
// 7 DAY 3: HUNGER 43.95 - 55.3
S.push({t0:43.95,t1:55.3,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#E9C9A3"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".35" filter="url(#glowf)"/>`;
  if(t<52.7){const lv=1-0.55*ss((t-47.3)/.8),gv=0.35+0.6*ss((t-50.1)/.8);
    s+=gauge(640,1330,'LEPTIN','',t>46.3?lv:0,'#3BB273')+gauge(1280,1330,'GHRELIN','',t>46.3?gv:0,'#E8505B');
    const k1=popS(t,47.3,.45),k2=popS(t,50.08,.45);
    if(k1>0)s+=g(tr(640,900,k1),arrowUD(false,'#3BB273',.65))+label('"I\'M FULL"',{x:640,y:800,size:52,bg:'#3BB273',sc:k1,r:-3});
    if(k2>0)s+=g(tr(1280,900,k2),arrowUD(true,'#E8505B',.65))+label('"FEED ME!"',{x:1280,y:800,size:52,bg:'#E8505B',sc:k2,r:3});}
  else{s+=komo({x:960,y:1380,s:.8,expr:'happy',aL:40+Math.sin(t*8)*10,aR:40-Math.sin(t*8)*10});
    [[pizza,52.96,560,820],[chips,53.48,1360,780],[candy,54.0,1380,1120]].forEach(([f,ti,x,y],i)=>{const k=popS(t,ti,.45);if(k>0)s+=g(tr(x,y+Math.sin(t*3+i)*12,k*1.25,(i-1)*10),f(1),'filter="url(#dsh)"');});}
  return s;},
 cam:t=>t<52.7?camV(t,43.95,52.7,[960,920,1.0],[960,900,1.06]):camV(t,52.7,55.3,[960,980,1.05],[960,960,1.0]),
 hud:t=>DAY('DAY 3',t,43.96)+(t<52.7?'':hudTitle('ALL OF IT!',270,popS(t,54.56,.45),{fill:'#FFE27A',size:76}))+
  (t>47?srcText('Source: Spiegel et al., Ann Intern Med (2004)',fadeIn(t,47.2)):'')
});
// 8 MOOD 55.3 - 65.75
S.push({t0:55.3,t1:65.75,
 world:t=>{let s=grid('#2A1F2B');s+=`<circle cx="960" cy="880" r="520" fill="#E5383B" opacity=".15" filter="url(#glowf)"/>`;
  if(t<59.6){s+=komo({x:960,y:1380,s:.8,expr:'think',aL:70,aR:70,blink:blinkAt(t,7)});}
  else{s+=g(tr(800,920,popS(t,59.6,.5)*1.0),brain(t,1,ss((t-59.82)/.4)),'filter="url(#dsh)"');
    const v=ss((t-61.3)/1.2);s+=g(tr(1360,980,.75),`<rect x="-80" y="-260" width="160" height="440" rx="40" fill="#1B2A3F" stroke="${OL}" stroke-width="8"/><rect x="-62" y="${fmt(160-380*(.45+.4*v))}" width="124" height="${fmt(380*(.45+.4*v)+0)}" rx="30" fill="#E5383B"/>`,'filter="url(#dsh)"');
    if(t>63.9){const k=ss((t-64)/1.4);s+=g(tr(1100,560,0.4+1.0*k),`<path d="M-90,30C-130,30 -130,-40 -80,-40C-70,-90 10,-90 20,-50C60,-80 120,-50 100,0C130,10 120,40 90,40Z" fill="#5B6C8F" stroke="${OL}" stroke-width="7"/>`,'filter="url(#dsh)"');}}
  return s;},
 cam:t=>camV(t,55.3,65.75,[960,920,1.0],[960,900,1.08]),
 hud:t=>hudTitle('MOOD GETS SHAKY',150,popS(t,55.58,.45),{size:72})+(t>59.6&&t<64?label('AMYGDALA = EMOTIONAL ALARM',{x:W/2,y:850,size:48,bg:'#9C7BE0',sc:popS(t,59.82,.45)}):'')+
  (t>61.2?g(tr(1360,300,popS(t,61.32,.5)),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="110" fill="#FFE27A" stroke="${OL}" stroke-width="14" paint-order="stroke">+60%</text>`):'')+
  (t>64?label('TINY PROBLEMS FEEL HUGE',{x:W/2,y:850,size:54,bg:'#E5383B',sc:popS(t,64.02,.45)}):'')+(t>59.8?srcText('Source: Yoo et al., Current Biology (2007)',fadeIn(t,60)):'')
});
// 9 DAY 6: BLOOD SUGAR 65.75 - 75.28
S.push({t0:65.75,t1:75.28,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="860" r="560" fill="#E5383B" opacity=".2" filter="url(#glowf)"/>`;
  s+=g(tr(700,960,popS(t,65.9,.5)*1.0),drop(1.2),'filter="url(#dsh)"');
  for(let i=0;i<6;i++){const kk=popS(t,69+i*0.7,.4);if(kk<=0)continue;s+=g(tr(700+(i%3-1)*95,1020-Math.floor(i/3)*95,kk),sugarCube(0,0,40),'filter="url(#dsh)"');}
  const v=ss((t-68.7)/5.4);
  s+=g(tr(1280,1040,.85),`<rect x="-120" y="-260" width="240" height="420" rx="40" fill="#EEF3F7" stroke="${OL}" stroke-width="8"/><rect x="-90" y="-220" width="180" height="140" rx="16" fill="#10202E"/><text x="0" y="-122" text-anchor="middle" font-family="B2" font-weight="800" font-size="84" fill="${v>0.75?'#FF5A5A':'#7FD18B'}">${Math.round(90+v*60)}</text><rect x="-80" y="-40" width="160" height="26" rx="13" fill="#CDD6DE"/><rect x="-80" y="-40" width="${fmt(160*v)}" height="26" rx="13" fill="${v>0.75?'#E5383B':'#F4C542'}"/><circle cx="0" cy="80" r="40" fill="#5B6C8F" stroke="${OL}" stroke-width="6"/>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,65.75,75.28,[960,940,1.06],[960,920,1.0]),
 hud:t=>DAY('DAY 6',t,65.8)+hudTitle('BLOOD SUGAR GOES WEIRD',270,popS(t,66.4,.45),{size:58})+(t>74.3?label('PRE-DIABETES ZONE',{x:W/2,y:850,size:56,bg:'#E5383B',sc:popS(t,74.42,.45)}):'')+(t>69?srcText('Source: Spiegel et al., The Lancet (1999)',fadeIn(t,69.2)):'')
});
// 10 IMMUNE 75.28 - 80.9
S.push({t0:75.28,t1:80.9,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#1F2E25"/><circle cx="960" cy="900" r="520" fill="#7BC96F" opacity=".15" filter="url(#glowf)"/>`;
  const sh=1-0.5*ss((t-76.5)/2);s+=`<circle cx="960" cy="1000" r="400" fill="#5EC8FF" opacity="${fmt(.12*sh)}" stroke="#5EC8FF" stroke-opacity="${fmt(.7*sh)}" stroke-width="10" stroke-dasharray="${t>77?'40 26':'0'}"/>`;
  s+=komo({x:960,y:1330,s:.72,expr:t>78.8?'surprised':'think',aL:70,aR:70,blink:blinkAt(t,5)});
  for(let i=0;i<6;i++){const a=t*0.9+i*Math.PI/3,r=520-60*ss((t-76.5)/3);const k=popS(t,75.6+i*0.25,.45);if(k>0)s+=g(tr(960+Math.cos(a)*r,1010+Math.sin(a)*r*0.5,k*.8),virus(1,t*40+i*30),'filter="url(#dsh)"');}
  return s;},
 cam:t=>camV(t,75.28,80.9,[960,960,1.0],[960,940,1.08]),
 hud:t=>hudTitle('IMMUNE SYSTEM',150,popS(t,75.56,.45),{size:72})+(t>78.7?g(tr(1500,330,popS(t,78.8,.5)),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="130" fill="#FFE27A" stroke="${OL}" stroke-width="16" paint-order="stroke">4×</text>`):'')+
  (t>80.2?label('MORE COLDS',{x:W/2,y:850,size:56,bg:'#E8505B',sc:popS(t,80.36,.45),r:3}):'')+(t>78.7?srcText('Source: Prather et al., Sleep (2015)',fadeIn(t,78.9)):'')
});
// 11 WEEKEND CATCH-UP 80.9 - 88.7
S.push({t0:80.9,t1:88.7,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".5" filter="url(#glowf)"/>`;
  s+=g(tr(960,880),calendarDay('SAT',popS(t,81.2,.45),-200)+calendarDay('SUN',popS(t,81.6,.45),200));
  const kx=popS(t,83.02,.45);if(kx>0)s+=g(tr(960,880,kx*1.6),xmark(1));
  return s;},
 cam:t=>camV(t,80.9,88.7,[960,900,1.0],[960,880,1.1]),
 hud:t=>hudTitle('CATCH UP ON THE WEEKEND?',150,popS(t,81.0,.45),{size:62})+(t>85.3?label('SLEEP-INS DON\'T UNDO IT',{x:W/2,y:850,size:56,bg:'#E8505B',sc:popS(t,85.42,.45)}):'')+(t>85.3?srcText('Source: Depner et al., Current Biology (2019)',fadeIn(t,85.5)):'')
});
// 12 PLOT TWIST 88.7 - 95.7
S.push({t0:88.7,t1:95.7,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#2B1B14"/><circle cx="960" cy="880" r="560" fill="#F4C542" opacity=".2" filter="url(#glowf)"/>`;
  s+=g(tr(720,940,popS(t,89.6,.5)*1.0),dna(t,1),'filter="url(#dsh)"');
  const kk=t>95?ss((t-95)/.5):0;
  s+=komo({x:1300,y:1380,s:.78-.35*kk,expr:t>95.1?'happy':'think',aL:70,aR:-20,holdR:KOMO.magnifier,blink:blinkAt(t,6)});
  if(t>92.9)s+=label('RARE GENE',{x:720,y:1300,size:62,bg:'#3BB273',sc:popS(t,93.0,.45),r:-3});
  return s;},
 cam:t=>camV(t,88.7,95.7,[960,940,1.0],[960,960,1.08]),
 hud:t=>chapter(t,88.74,90.0,['PLOT TWIST!'])+(t>95?hudTitle('TINY CHANCE',150,popS(t,95.1,.45),{fill:'#FFE27A',size:80}):'')+(t>93?srcText('Source: He et al., Science (2009)',fadeIn(t,93.2)):'')
});
// 13 CONCLUSION 95.7 - 99.45
S.push({t0:95.7,t1:99.45,
 world:t=>`<rect width="1920" height="1920" fill="#CDEBF5"/><circle cx="960" cy="900" r="600" fill="#fff" opacity=".5" filter="url(#glowf)"/>`+g(tr(960,860,popS(t,95.75,.5)*.85),checkCard(t,[{txt:'7+ HOURS',t:96.78},{txt:'NOT LAZY',t:97.9},{txt:'MAINTENANCE',t:98.78}])),
 cam:t=>camV(t,95.7,99.45,[960,960,1.0],[960,940,1.05]),
 hud:t=>''
});
// 14 CTA 99.45 - 108.1
S.push({t0:99.45,t1:108.1,
 world:t=>{const sl=eout((t-99.45)/.5);
  let s=`<rect width="1920" height="1920" fill="#222"/><path d="M0,0L${fmt(lerp(-200,1040,sl))},0L${fmt(lerp(-400,880,sl))},1920L0,1920Z" fill="#1B2347"/><path d="M1920,0L${fmt(lerp(2120,1040,sl))},0L${fmt(lerp(2320,880,sl))},1920L1920,1920Z" fill="#F28C38"/>`;
  const k1=popS(t,102.14,.5),k2=popS(t,103.34,.5);
  if(k1>0)s+=alarmClock(560,1010,.62*k1,t,'4H');if(k2>0)s+=alarmClock(1360,1010,.62*k2,t,'8H');
  s+=bigText('TEAM 4 HOURS',560,820,68,{sw:10})+bigText('TEAM 8 HOURS',1360,820,68,{sw:10});
  const kv=popS(t,102.8,.4);if(kv>0)s+=g(tr(960,900,kv,-6),`<circle r="96" fill="#FFE27A" stroke="${OL}" stroke-width="10"/><text x="0" y="30" text-anchor="middle" font-family="B2" font-weight="800" font-size="90" fill="${OL}">VS</text>`,'filter="url(#dsh)"');
  s+=komo({x:960,y:lerp(1950,1440,eout((t-99.5)/.6)),s:.7,expr:'happy',aR:-60+Math.sin(t*9)*14,aL:70,blink:blinkAt(t,13)});
  const kc=popS(t,104.56,.45);if(kc>0)s+=g(tr(1280,1060,kc,3),bubble(520,170,'bl')+`<text x="0" y="20" text-anchor="middle" font-family="B2" font-weight="800" font-size="56" fill="${OL}">Tell me below!</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,99.45,108.1,[960,960,1.0],[960,940,1.05]),
 hud:t=>hudTitle('BE HONEST!',150,popS(t,99.46,.45),{fill:'#FFE27A'})
});
// 15 SUBSCRIBE 108.1 - end
S.push({t0:108.1,t1:113,
 world:t=>{let s=`<rect width="1920" height="1920" fill="#0F2A3A"/><circle cx="960" cy="900" r="560" fill="#5EC8FF" opacity=".22" filter="url(#glowf)"/>`+rays(960,300,9,1600,10,.35,Math.sin(t)*2);
  s+=komo({x:700,y:1400,s:.8,expr:'happy',aL:70,aR:-60+Math.sin(t*9)*14,blink:blinkAt(t,14)});
  const k=popS(t,109.66,.5);if(k>0)s+=g(tr(1280,900,k),`<rect x="-300" y="-90" width="600" height="180" rx="40" fill="#E5383B" stroke="${OL}" stroke-width="10"/><text x="0" y="34" text-anchor="middle" font-family="B2" font-weight="800" font-size="96" fill="#fff">SUBSCRIBE</text>`,'filter="url(#dsh)"');
  return s;},
 cam:t=>camV(t,108.1,113,[960,940,1.0],[960,920,1.05]),
 hud:t=>hudTitle('SEE YOU IN THE NEXT HOWCOME!',150,popS(t,110.5,.45),{fill:'#FFE27A',size:66})
});
// 16:9: lift the world a bit so feet/labels clear the subtitles
S.forEach(sc=>{const c=sc.cam;sc.cam=t=>{const v=c(t);return [v[0],v[1]+90,v[2]];};});
const THUMB={t:1.0,lines:['WHAT IF YOU SLEPT','ONLY 4 HOURS','EVERY NIGHT?']};
