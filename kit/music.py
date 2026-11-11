# HOWCOME background music bed (self-made, royalty-free).
# usage: python3 music.py <seconds> <out.wav> [bpm]
# Upbeat, light "curious explainer" loop: pad chords + plucked arpeggio + soft kick/hat. Mixed low so narration stays clear.
import sys, wave
import numpy as np

SR = 44100
dur = float(sys.argv[1]); out = sys.argv[2]; bpm = float(sys.argv[3]) if len(sys.argv) > 3 else 108
beat = 60.0 / bpm
n = int(dur * SR)
t = np.arange(n) / SR
mix = np.zeros(n)

def note(f, start, length, amp, kind="pluck"):
    a = int(start * SR); b = min(n, a + int(length * SR))
    if a >= n or b <= a: return
    tt = np.arange(b - a) / SR
    if kind == "pluck":
        w = np.sin(2 * np.pi * f * tt) + 0.35 * np.sin(2 * np.pi * 2 * f * tt) + 0.15 * np.sin(2 * np.pi * 3 * f * tt)
        env = np.exp(-tt * 7.0)
    else:  # pad
        w = np.sin(2 * np.pi * f * tt) + 0.5 * np.sin(2 * np.pi * f * 1.003 * tt) + 0.25 * np.sin(2 * np.pi * 2 * f * tt)
        att = np.minimum(1, tt / 0.25); rel = np.minimum(1, (tt[-1] - tt) / 0.4 + 1e-9)
        env = att * rel
    mix[a:b] += amp * w * env

def hz(m): return 440.0 * 2 ** ((m - 69) / 12)

# C major, I-V-vi-IV (C G Am F), one chord per bar (4 beats)
prog = [[60, 64, 67], [55, 59, 62], [57, 60, 64], [53, 57, 60]]
bar = 4 * beat
nbars = int(np.ceil(dur / bar))
for i in range(nbars):
    ch = prog[i % 4]; s0 = i * bar
    for m in ch: note(hz(m - 12), s0, bar, 0.05, "pad")
    arp = [ch[0], ch[1], ch[2], ch[1] + 12, ch[2], ch[1], ch[0] + 12, ch[2]]
    for k, m in enumerate(arp): note(hz(m + 12), s0 + k * beat / 2, beat / 2 * 1.6, 0.045, "pluck")
    note(hz(ch[0] - 24), s0, beat * 1.8, 0.09, "pluck"); note(hz(ch[0] - 24), s0 + 2 * beat, beat * 1.8, 0.08, "pluck")
    for k in range(4):  # kick on every beat, hat on off-beats
        a = int((s0 + k * beat) * SR); L = int(0.18 * SR)
        if a + L < n:
            tt = np.arange(L) / SR; f = 110 * np.exp(-tt * 18) + 45
            mix[a:a + L] += 0.16 * np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 14)
        h = int((s0 + k * beat + beat / 2) * SR); HL = int(0.05 * SR)
        if h + HL < n:
            rng = np.random.default_rng(i * 4 + k)
            mix[h:h + HL] += 0.025 * rng.standard_normal(HL) * np.exp(-np.arange(HL) / SR * 70)

# fade in/out, normalize to a calm level
fade = int(1.5 * SR); mix[:fade] *= np.linspace(0, 1, fade); mix[-fade:] *= np.linspace(1, 0, fade)
mix = mix / (np.max(np.abs(mix)) + 1e-9) * 0.5
st = np.stack([mix, mix], 1)
with wave.open(out, "wb") as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes((st * 32767).astype(np.int16).tobytes())
print(out, round(dur, 1), "s")
