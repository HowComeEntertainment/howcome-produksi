import json,sys
src,out=sys.argv[1],sys.argv[2]
d=json.load(open(src));W=d['words'] if isinstance(d,dict) else d
ch=[];cur=[]
for w in W:
    cur.append(w)
    if w['w'][-1] in '.?!:,' or len(cur)==4: ch.append(cur);cur=[]
if cur: ch.append(cur)
json.dump([{'s':round(c[0]['s'],3),'e':round(c[-1]['e'],3),'t':' '.join(x['w'] for x in c)} for c in ch],open(out,'w'),ensure_ascii=False)
print(out,len(ch))
