# usage: python3 fa2words.py <forced_alignment.json> <timing_out.json>
# ElevenLabs forced-alignment output -> {"words":[{w,s,e}]} (same format as faster-whisper timing)
import json,sys
d=json.load(open(sys.argv[1]))
if 'words' in d and d['words'] and 'text' in d['words'][0]:
    W=[{'w':x['text'].strip(),'s':x['start'],'e':x['end']} for x in d['words'] if x['text'].strip()]
else:
    W=[];cur=None
    for c in d['characters']:
        if c['text'].isspace():
            if cur: W.append(cur);cur=None
            continue
        if cur is None: cur={'w':'','s':c['start'],'e':c['end']}
        cur['w']+=c['text'];cur['e']=c['end']
    if cur: W.append(cur)
json.dump({'words':W},open(sys.argv[2],'w'))
print(len(W),'words',W[-1]['e'] if W else 0)
