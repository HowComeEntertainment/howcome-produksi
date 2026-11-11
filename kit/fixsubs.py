import json,sys,math
sc=sys.argv[1]
d=json.load(open(f'subs_{sc}.json'))
def wrap2(t):
    w=t.split(' ')
    if len(w)<2 or (len(w)<3 and len(t)<=16): return [t]
    best=None
    for i in range(1,len(w)):
        a=' '.join(w[:i]);b=' '.join(w[i:]);dd=abs(len(a)-len(b))
        if best is None or dd<best[0]: best=(dd,a,b)
    return [best[1],best[2]]
rng=[]
old_wrap=lambda t: [t] if len(t.split())<3 else wrap2(t)
for x in d:
    if max(len(l) for l in wrap2(x['t']))>18 or wrap2(x['t'])!=old_wrap(x['t']):
        rng.append((math.floor((x['s']-0.06)*30),math.ceil((x['e']+0.26)*30)))
print(' '.join(f'{a}:{b}' for a,b in rng))
