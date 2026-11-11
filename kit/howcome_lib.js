// HOWCOME shared scene helpers (loaded by scene.html after komo_engine.js)
const isV=ASP==='v';
// ---------- shared helpers (HOWCOME) ----------
function komo(o){return KOMO.full(o);}
function srcText(txt,k=1){return `<text x="40" y="${H-(isV?60:34)}" font-family="B2" font-weight="600" font-size="${isV?26:22}" fill="#fff" opacity="${fmt(.85*k)}">${txt}</text>`;}
function hudTitle(txt,y,k,{size=isV?96:80,fill='#fff',r=-3}={}){if(k<=0)return '';return g(tr(W/2,y,k,r),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${size}" fill="${fill}" stroke="${OL}" stroke-width="${size*0.14}" paint-order="stroke" stroke-linejoin="round">${txt}</text>`);}
function chapter(t,t0,t1,lines){ // gold chapter card: darken + letterbox + gold caps
  const a=ss((t-t0)/.25)*(1-ss((t-(t1-.25))/.25));if(a<=0)return '';
  const lb=(isV?230:120)*eout((t-t0)/.3);const n=lines.length,fs=isV?118:110;
  let s=`<rect width="${W}" height="${H}" fill="#06121C" opacity="${fmt(.55*a)}"/><rect width="${W}" height="${fmt(lb)}" fill="#000" opacity="${fmt(a)}"/><rect y="${fmt(H-lb)}" width="${W}" height="${fmt(lb)}" fill="#000" opacity="${fmt(a)}"/>`;
  const k=popS(t,t0+.05,.5);
  lines.forEach((l,i)=>{const y=H*(isV?0.36:0.42)+(i-(n-1)/2)*fs*1.08+fs*.35;
    s+=g(tr(W/2,y,k),`<text x="0" y="0" text-anchor="middle" font-family="B2" font-weight="800" font-size="${fs}" fill="url(#gold)" stroke="#1C1730" stroke-width="${fs*.13}" paint-order="stroke" stroke-linejoin="round">${l}</text>`,`opacity="${fmt(a)}" filter="url(#tsh)"`);});
  return s;}
function bedroom(t,light=0){
  const wall=light>0.5?'#E9E4D2':'#2B3350', fl=light>0.5?'#B89B7E':'#3A3448';
  let s=`<rect width="1920" height="1920" fill="${wall}"/><rect y="1300" width="1920" height="620" fill="${fl}"/>`;
  s+=`<rect x="1230" y="420" width="420" height="440" rx="18" fill="#1B2347" stroke="#7D6F60" stroke-width="16"/>`;
  for(let i=0;i<9;i++)s+=`<circle cx="${fmt(1260+rnd(i)*360)}" cy="${fmt(450+rnd(i+30)*360)}" r="${fmt(2+rnd(i+7)*3)}" fill="#fff" opacity="${fmt(0.5+0.5*Math.sin(t*3+i))}"/>`;
  s+=`<circle cx="1540" cy="530" r="48" fill="#F6E7A8"/><circle cx="1562" cy="516" r="44" fill="#1B2347"/><path d="M1440,420L1440,860M1230,640L1650,640" stroke="#7D6F60" stroke-width="12"/>`;
  return s;}
function bed(x,y,s=1,inner=''){
  return g(tr(x,y,s),`<rect x="-520" y="-80" width="1040" height="200" rx="30" fill="#8C6A52" stroke="${OL}" stroke-width="6"/>
  <rect x="-560" y="-340" width="70" height="460" rx="24" fill="#7A5A44" stroke="${OL}" stroke-width="6"/>
  <rect x="-490" y="-130" width="980" height="90" rx="40" fill="#F4F1EA" stroke="${OL}" stroke-width="5"/>
  <rect x="-470" y="-215" width="260" height="110" rx="50" fill="#fff" stroke="${OL}" stroke-width="5"/>${inner}
  <path d="M-260,-170Q120,-230 500,-150L500,-30Q120,-60 -260,-40Z" fill="#F28C38" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/>
  <path d="M-220,-120Q120,-170 470,-110" stroke="#D9712A" stroke-width="10" fill="none" stroke-linecap="round"/>`);}
function lyingHead(expr,blink){return g('translate(-330 -190) rotate(-78) scale(.62)',KOMO.head(expr,blink));}
function alarmClock(x,y,s,t,txt='4:00',shake=0){const r=Math.sin(t*40)*shake;
  return g(tr(x,y,s,r),`<path d="M-120,-110L-170,-170M120,-110L170,-170" stroke="${OL}" stroke-width="16" stroke-linecap="round"/><circle cx="-130" cy="-130" r="44" fill="#E8505B" stroke="${OL}" stroke-width="7"/><circle cx="130" cy="-130" r="44" fill="#E8505B" stroke="${OL}" stroke-width="7"/>
  <rect x="-170" y="-100" width="340" height="230" rx="60" fill="#F28C38" stroke="${OL}" stroke-width="8"/><rect x="-130" y="-60" width="260" height="150" rx="24" fill="#10202E"/>
  <text x="0" y="45" text-anchor="middle" font-family="B2" font-weight="800" font-size="104" fill="#FF5A5A">${txt}</text>`,'filter="url(#dsh)"');}
function warn(s=1){return g(`scale(${s})`,`<path d="M0,-110L120,90L-120,90Z" fill="#F4C542" stroke="${OL}" stroke-width="10" stroke-linejoin="round"/><rect x="-12" y="-50" width="24" height="80" rx="10" fill="${OL}"/><circle cx="0" cy="60" r="14" fill="${OL}"/>`);}
function gauge(x,y,name,sub,val,col,up){ // vertical hormone meter, val 0..1
  const h=360,fill=h*val;
  return g(tr(x,y),`<rect x="-70" y="${-h}" width="140" height="${h}" rx="40" fill="#1B2A3F" stroke="${OL}" stroke-width="8"/>
  <rect x="-56" y="${fmt(-14-fill+14)}" width="112" height="${fmt(Math.max(0,fill-14))}" rx="30" fill="${col}"/>
  <text x="0" y="70" text-anchor="middle" font-family="B2" font-weight="800" font-size="52" fill="#fff" stroke="${OL}" stroke-width="9" paint-order="stroke">${name}</text>`,'filter="url(#dsh)"');}
function arrowUD(up,col,s=1){return g(`scale(${s}) rotate(${up?0:180})`,`<path d="M0,-90L70,0L28,0L28,80L-28,80L-28,0L-70,0Z" fill="${col}" stroke="${OL}" stroke-width="8" stroke-linejoin="round"/>`);}
function pizza(s=1){return g(`scale(${s})`,`<path d="M0,-110L95,70Q0,105 -95,70Z" fill="#F7C46C" stroke="${OL}" stroke-width="7" stroke-linejoin="round"/><path d="M-95,70Q0,105 95,70L105,92Q0,132 -105,92Z" fill="#C9813E" stroke="${OL}" stroke-width="6"/><circle cx="-20" cy="10" r="20" fill="#D8483F"/><circle cx="30" cy="45" r="18" fill="#D8483F"/><circle cx="2" cy="-45" r="15" fill="#D8483F"/>`);}
function chips(s=1){return g(`scale(${s})`,`<path d="M-80,-110L80,-110L95,110L-95,110Z" fill="#E8505B" stroke="${OL}" stroke-width="7" stroke-linejoin="round"/><path d="M-80,-110Q0,-80 80,-110" stroke="${OL}" stroke-width="6" fill="none"/><ellipse cx="0" cy="10" rx="58" ry="40" fill="#FFD25E" stroke="${OL}" stroke-width="5"/><text x="0" y="24" text-anchor="middle" font-family="B2" font-weight="800" font-size="40" fill="${OL}">CHIPS</text>`);}
function candy(s=1){return g(`scale(${s})`,`<path d="M-60,0L-115,-40L-115,40Z M60,0L115,-40L115,40Z" fill="#9C7BE0" stroke="${OL}" stroke-width="6" stroke-linejoin="round"/><circle r="62" fill="#C9B6F2" stroke="${OL}" stroke-width="7"/><path d="M-40,-30Q0,10 40,-30M-40,10Q0,50 40,10" stroke="#fff" stroke-width="10" fill="none" stroke-linecap="round"/>`);}
function drop(s=1,col='#E5383B'){return g(`scale(${s})`,`<path d="M0,-150C60,-60 110,0 110,60A110,110 0 0 1 -110,60C-110,0 -60,-60 0,-150Z" fill="${col}" stroke="${OL}" stroke-width="8"/><ellipse cx="-45" cy="30" rx="22" ry="34" fill="#fff" opacity=".35"/>`);}
function virus(s=1,r=0,col='#7BC96F'){let sp='';for(let i=0;i<8;i++){sp+=`<g transform="rotate(${i*45})"><path d="M0,-50L0,-74" stroke="${OL}" stroke-width="8"/><circle cy="-80" r="12" fill="${col}" stroke="${OL}" stroke-width="5"/></g>`;}return g(`rotate(${fmt(r)}) scale(${s})`,sp+`<circle r="52" fill="${col}" stroke="${OL}" stroke-width="7"/><circle cx="-16" cy="-12" r="9" fill="${OL}" opacity=".5"/><circle cx="18" cy="14" r="7" fill="${OL}" opacity=".5"/>`);}
function dna(t,s=1){let p='';for(let i=0;i<12;i++){const y=-330+i*60,ph=t*2+i*0.55,a=Math.sin(ph)*120,b=-a,z=Math.cos(ph);
  p+=`<path d="M${fmt(a)},${y}L${fmt(b)},${y}" stroke="#ffffff" stroke-opacity=".5" stroke-width="10"/><circle cx="${fmt(a)}" cy="${y}" r="${fmt(20+6*z)}" fill="#5EC8FF" stroke="${OL}" stroke-width="5"/><circle cx="${fmt(b)}" cy="${y}" r="${fmt(20-6*z)}" fill="#F28C38" stroke="${OL}" stroke-width="5"/>`;}
  return g(`scale(${s})`,p);}
function checkCard(t,items){ // items [{txt,t}]
  let s=`<rect x="-420" y="-230" width="840" height="${120+items.length*150}" rx="40" fill="#fff" stroke="${OL}" stroke-width="8"/>`;
  items.forEach((it,i)=>{const y=-110+i*150;const k=popS(t,it.t,.45);
    s+=`<rect x="-360" y="${y-50}" width="100" height="100" rx="22" fill="#EEF3F7" stroke="${OL}" stroke-width="6"/>`;
    if(k>0)s+=g(tr(-310,y,k*.85),check(1));
    s+=`<text x="-220" y="${y+22}" font-family="B2" font-weight="800" font-size="62" fill="${OL}">${it.txt}</text>`;});
  return g('',s,'filter="url(#dsh)"');}


// ---------- plan-driven timelines (compose.py) ----------
function syncGet(u){const x=new XMLHttpRequest();x.open('GET',u,false);x.send();return x.responseText;}
let PLAN={items:[]},WORDS=[];try{PLAN=JSON.parse(syncGet('plan_'+(Q.get('s')||'')+'.json'));WORDS=JSON.parse(syncGet('timing_'+(Q.get('s')||'')+'.json')).words;}catch(e){} // older videos have no plan
const IS_SHORT=(Q.get('s')||'').endsWith('_short');
const norm=w=>w.toLowerCase().replace(/[^a-z0-9']/g,'');
// time of the k-th occurrence of a word (optionally inside one block) on this timeline
function WT(w,block,k=0){const L=WORDS.filter(x=>norm(x.w)===norm(w)&&(!block||x.block===block));return L.length?L[Math.min(k,L.length-1)].s:-99;}
function ITEM(name){return PLAN.items.find(x=>x.name===name);}
// B: {itemName: (t0,t1,item)=>({world,cam,hud})}; silent items fall back to B.sil, pads to B.pad
function buildFromPlan(B){PLAN.items.forEach((it,i)=>{const f=B[it.name]||(it.name.startsWith('sil_')?B.sil:null)||B.pad;if(!f)return;const sc=f(it.t0,it.t1,it);S.push(Object.assign({t0:it.t0,t1:i===PLAN.items.length-1?it.t1+2:it.t1},sc));});}
function loadTopic(id){(0,eval)(syncGet('topic_'+id+'.js'));}
// generic pieces for silent "explain" scenes
function factCard(t,t0,lines,{bg='#fff',col=OL,size=isV?60:58,w=isV?900:1300}={}){const k=popS(t,t0,.5);if(k<=0)return '';const h=lines.length*size*1.35+90;
  let s=`<rect x="${-w/2}" y="${-h/2}" width="${w}" height="${h}" rx="40" fill="${bg}" stroke="${OL}" stroke-width="8"/>`;
  lines.forEach((l,i)=>{const kk=fadeIn(t,t0+0.35+i*0.5,.35);s+=`<text x="0" y="${fmt(-h/2+75+i*size*1.35+size*0.3)}" text-anchor="middle" font-family="B2" font-weight="800" font-size="${size}" fill="${col}" opacity="${fmt(kk)}">${l}</text>`;});
  return g(tr(0,0,k),s,'filter="url(#dsh)"');}
function subscribeEnd(t,t0,t1){return {world:t=>{let s=`<rect width="1920" height="1920" fill="#0F2A3A"/><circle cx="960" cy="900" r="560" fill="#5EC8FF" opacity=".22" filter="url(#glowf)"/>`+rays(960,300,9,1600,10,.35,Math.sin(t)*2);
  s+=komo({x:isV?960:700,y:isV?1300:1400,s:isV?.9:.8,expr:'happy',aL:70,aR:-60+Math.sin(t*9)*14,blink:blinkAt(t,14)});
  const k=popS(t,t0+.3,.5);if(k>0)s+=g(tr(isV?960:1280,isV?640:900,k*(isV?.9:1)),`<rect x="-300" y="-90" width="600" height="180" rx="40" fill="#E5383B" stroke="${OL}" stroke-width="10"/><text x="0" y="34" text-anchor="middle" font-family="B2" font-weight="800" font-size="96" fill="#fff">SUBSCRIBE</text>`,'filter="url(#dsh)"');return s;},
  cam:t=>camV(t,t0,t1,[960,940,1.0],[960,920,1.05]),hud:t=>hudTitle('SEE YOU IN THE NEXT HOWCOME!',isV?470:150,popS(t,t0+.6,.45),{fill:'#FFE27A',size:isV?60:66})};}

const grid=c=>{let s=`<rect width="1920" height="1920" fill="${c}"/>`;for(let i=0;i<20;i++)s+=`<path d="M${i*100},0V1920M0,${i*100}H1920" stroke="#fff" stroke-opacity=".05" stroke-width="3"/>`;return s;};
