# HOWCOME? production: fixed rules

Talk to the owner in casual Indonesian. Everything in the videos is in **English** (international audience).

## Channel
- Name: **HOWCOME?** Mascot: **KOMO** (locked, see `maskot/KOMO.md` and `maskot/KOMO_official.png`). Do not change the design.
- Narrator: young male voice, US accent. Owner sends only the audio (mp3).

## Video
- Style = MASA SIH **Style A** (`kit/STYLE_A.md`), but replace YUMA with KOMO and translate all on-screen text to English.
- Workflow: mp3 -> transcribe (faster-whisper, English) -> `subs_<id>.json` -> write `scenes_<id>.js` -> `kit/runone.sh <id>`.
- Default output: Short 9:16, 1080x1920 (length follows the audio, ~89 s). Title thumbnail in the first 0.1 s (`THUMB`).
- Audio is used as-is; never re-generate or change the narration.
- Always check a frame sheet before delivering.

## Delivery
- With every finished video, ALWAYS give the owner a ready-to-paste English title + description (hook, key facts, CTA, sources, hashtags; YouTube gets chapters). Save it in `meta/<id>.md`.
- Narration audio: ElevenLabs, voice **Alex - Upbeat, Energetic and Clear** (`yl2ZDV1MzN4HbQJbMihG`), model **eleven_v3** (LOCKED). Download via `https://api.elevenlabs.io/v1/history/<historyItemId>/audio`; word timings via `/v1/forced-alignment` + `kit/fa2words.py`.

## Hosting
- Final Shorts: `videos/<id>_short.mp4`, YouTube 16:9: `videos/<id>_yt.mp4`. Commit, push to `main`.
- Watermark `kit/wm.png`: KOMO avatar + "Please Subscribe Me" (locked).
- Scripts live in `naskah/`. **Narration (owner records in Voice Studio):** no character limit. Short `<id>_short.mp3` ~89 s; YouTube `<id>_yt.mp3` ~144 s; one audio file each. Keep ready-to-record texts in `naskah/AUDIO_PARTS.md`. **Use ONLY these Voice Studio tags**, sparingly where they fit: [laughter] [sigh] [confirmation-en] [question-en] [question-ah] [question-oh] [question-ei] [question-yi] [surprise-ah] [surprise-oh] [surprise-wa] [surprise-yo] [dissatisfaction-hnn]. Tags are not spoken; ignore them when matching subtitles. ALWAYS also paste the full narration text in the chat reply (owner copy-pastes it to record).
