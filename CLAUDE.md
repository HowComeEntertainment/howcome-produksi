# HOWCOME? production: fixed rules

Talk to the owner in casual Indonesian. Everything in the videos is in **English** (international audience).

## Channel
- Name: **HOWCOME?** Mascot: **KOMO** (locked, see `maskot/KOMO.md` and `maskot/KOMO_official.png`). Do not change the design.
- Narrator: young male voice, US accent. Owner sends only the audio (mp3).

## Video
- Style = MASA SIH **Style A** (`kit/STYLE_A.md`), but replace YUMA with KOMO and translate all on-screen text to English.
- Workflow: mp3 -> transcribe (faster-whisper, English) -> `subs_<id>.json` -> write `scenes_<id>.js` -> `kit/runone.sh <id>`.
- Default output: Short 9:16, 1080x1920 (Short = cut from the 1200-char narration, ~25-30 s). Title thumbnail in the first 0.1 s (`THUMB`).
- Audio is used as-is; never re-generate or change the narration.
- Always check a frame sheet before delivering.

## Delivery
- With every finished video, ALWAYS give the owner a ready-to-paste English title + description (hook, key facts, CTA, sources, hashtags; YouTube gets chapters). Save it in `meta/<id>.md`.
- Narration audio: ElevenLabs, voice **Alex - Upbeat, Energetic and Clear** (`yl2ZDV1MzN4HbQJbMihG`), model **eleven_v3** (LOCKED). Download via `https://api.elevenlabs.io/v1/history/<historyItemId>/audio`; word timings via `/v1/forced-alignment` + `kit/fa2words.py`.

## Hosting
- Final Shorts: `videos/<id>_short.mp4`, YouTube 16:9: `videos/<id>_yt.mp4`. Commit, push to `main`.
- Watermark `kit/wm.png`: KOMO avatar + "Please Subscribe Me" (locked).
- Scripts live in `naskah/`. **Narration rule (LOCKED, from 11 Nov 2026):** ONE narration per title, MAX 1200 characters incl. audio tags (~60 s), generated once (1 take) with ElevenLabs Alex v3 = the full YouTube video. The Short is CUT from that same audio (0 extra credits): write the script in blocks (hook ~150 -> SHORT, context ~150 -> YT, point 1 ~250 -> YT, point 2 strongest ~250 -> SHORT, plot twist ~200 -> YT, CTA ~150 -> SHORT); each SHORT block must stand alone. Use ElevenLabs v3 tags ([excited] [curious] [laughs] [sighs] [surprised] [scoffs] [gasps]...). Save in `naskah/`. ALWAYS also paste the full narration text in the chat reply (owner copy-pastes it to record).
