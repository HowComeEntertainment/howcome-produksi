// ===== HOWCOME? | What If You Checked Your Phone Every 5 Minutes? =====
const B={
 hook:SCN({bg:'night',items:[{ic:'phone',at:'bzzz',x:.5,y:.45,s:1.3,bob:1},{ic:'bell',at:'nothing',x:.82,y:.2,s:.6},{ic:'clock',at:'five',x:.18,y:.25,s:.6}],
   labels:[{t:'NOTHING.',at:'nothing',x:.5,y:.85,bg:'#5B6C8F'}],komo:{x:.85,y:1.15,s:isV?.55:.5,expr:'think',expr2:'surprised',at2:'what'},
   title:{t:'EVERY 5 MINUTES?',at:'what',fill:'#FFE27A'}}),
 sil_hook:SCN({bg:'grid',chapter:['HOW COME?'],items:[...Array(8)].map((_,i)=>({ic:'phone',at:2.6+i*.9,x:.08+i*.12,y:.3+(i%2)*.35,s:.45,r:(i%3-1)*8})),
   komo:{x:.5,y:1.15,expr:'think',expr2:'surprised',at2:8,mag:1},title:{t:'A DAY OF "QUICK CHECKS"',at:2.5},bot:{t:'HOW MANY TIMES A DAY?',at:9}}),
 context:SCN({bg:'sand',items:[{ic:'phone',at:'ninety-six',x:.25,y:.45,s:1},{ic:'clock',at:'ten',x:.75,y:.45,s:.9}],
   title:{t:'~96 CHECKS A DAY',at:'ninety-six',fill:'#E8505B'},sub:{t:'≈ EVERY 10 MINUTES AWAKE',at:'ten'},bot:{t:'MOSTLY WITHOUT NOTICING',at:'remember'},src:'Source: Asurion US survey (2019)'}),
 sil_context:SCN({bg:'sky',items:[{ic:'phone',at:1,x:.3,y:.5,s:.9,bob:1},{ic:'brain',at:2,x:.72,y:.5,s:.8}],
   title:{t:'AUTOPILOT MODE',at:.2},card:{lines:['Unlock, scroll, lock... repeat.','Most checks last under a minute'],at:4},komo:{x:.5,y:1.15,s:isV?.55:.5,expr:'surprised',at:6}}),
 point1:SCN({bg:'grid',items:[{ic:'brain',at:.2,x:.5,y:.4,s:1.1},{ic:'bell',at:'buzz',x:.82,y:.15,s:.55},{ic:'moon',at:'bed',x:.18,y:.2,s:.6},{ic:'phone',at:'screen',x:.2,y:.62,s:.6}],
   title:{t:'EVERY CHECK = FOCUS BREAK',at:.1},bot:[{t:'HARD TO GET BACK ON TRACK',at:'track',until:'buzz'},{t:'"SOMETHING NEW!" JOLT',at:'buzz',until:'bed'},{t:'BED + SCREEN = LATER SLEEP',at:'bed'}],src:'Source: Mark et al., CHI (2008) · sleep & screens research'}),
 sil_point1:SCN({bg:'navy',extra:(t,t0,t1)=>{let s='';const x0=PX(.05),x1=PX(.95),y=PY(.55);s+=`<path d="M${x0},${y}H${x1}" stroke="#fff" stroke-width="8"/>`;
     for(let i=0;i<9;i++){const k=popS(t,t0+1+i*.6,.4);if(k<=0)continue;const x=x0+(x1-x0)*(i+.5)/9;s+=g(tr(x,y-80,k*.35),IC.phone(t));s+=`<path d="M${x},${y-10}v20" stroke="#E8505B" stroke-width="10"/>`;}
     return s;},title:{t:'FOCUS, CUT INTO PIECES',at:.2},card:{lines:['Lots of tiny checks =','no time for deep focus'],at:7}}),
 point2:SCN({bg:'plum',items:[{ic:'phone',at:'desk',x:.3,y:.5,s:.85,r:-90},{ic:'x',at:'room',x:.3,y:.5,s:.9},{ic:'brain',at:'harder',x:.72,y:.45,s:.8},{ic:'door',at:'room',x:.12,y:.45,s:.5}],
   title:{t:'PHONE ON THE DESK',at:.1,fill:'#FF8A8A'},sub:{t:'EVEN TURNED OFF!',at:'off'},bot:[{t:'PHONE IN ANOTHER ROOM = BETTER',at:'room'}],src:'Source: Ward et al., J Assoc Consum Res (2017)'}),
 sil_point2:SCN({bg:'sky',items:[{ic:'door',at:.6,x:.25,y:.5,s:.9},{ic:'phone',at:1.2,x:.25,y:.48,s:.4},{ic:'brain',at:2,x:.75,y:.5,s:.8},{ic:'check',at:3.5,x:.75,y:.2,s:.6}],
   title:{t:'OUT OF SIGHT, MORE BRAINPOWER',at:.2},card:{lines:['Try it: put your phone','in another room for 1 hour'],at:IS_SHORT?.3:5}}),
 twist:SCN({bg:'brown',chapter:['PLOT TWIST!'],chapterEnd:'ever',items:[{ic:'phone',at:'buzz',x:.5,y:.42,s:1,bob:1},{ic:'brain',at:'brain',x:.8,y:.3,s:.55}],
   komo:{x:.2,y:1.15,s:isV?.6:.55,expr:'surprised',at:'buzz'},sub:{t:'PHANTOM VIBRATION',at:'phantom',bg:'#9C7BE0'},bot:{t:'MOST HOSPITAL STAFF FELT IT',at:'most'},src:'Source: Rothberg et al., BMJ (2010)'}),
 sil_twist:CHECKS({title:'CHECK LESS, LIVE MORE',items:['NOTIFICATIONS OFF','PHONE OUT OF BEDROOM','CHECK ON A SCHEDULE','FOCUS TIMER: 25 MIN']}),
 cta:VSCTA({L:'UNDER 50 CHECKS',R:'100+ CHECKS',icL:'phone',icR:'phone',cl:'#3BB273',cr:'#E8505B',atL:'many',atR:'today',atV:'honest',title:'HOW MANY TODAY?'}),
 sil_outro:OUTRO(),
 pad:(t0,t1,it)=>it.name==='pad_end'?OUTRO()(t0,t1):B.sil_point2(t0,t1),
};
var THUMB=buildTopic(B,['WHAT IF YOU CHECKED','YOUR PHONE EVERY','5 MINUTES?']);
