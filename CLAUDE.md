# HOWCOME? production: fixed rules

Talk to the owner in casual Indonesian. Everything in the videos is in **English** (international audience).

## Channel
- Name: **HOWCOME?** Mascot: **KOMO** (locked, see `maskot/KOMO.md` and `maskot/KOMO_official.png`). Do not change the design.
- Narrator: young male voice, US accent. Owner sends only the audio (mp3).

## Video
- Style = MASA SIH **Style A** (`kit/STYLE_A.md`), but replace YUMA with KOMO and translate all on-screen text to English.
- Workflow: mp3 -> transcribe (faster-whisper, English) -> `subs_<id>.json` -> write `scenes_<id>.js` -> `kit/runone.sh <id>`.
- Default output: Short 9:16, 1080x1920 (length follows the single <=1000-char audio, ~55-60 s). Title thumbnail in the first 0.1 s (`THUMB`).
- Audio is used as-is; never re-generate or change the narration.
- Always check a frame sheet before delivering.

## Hosting
- Final Shorts: `videos/<id>_short.mp4`, YouTube 16:9: `videos/<id>_yt.mp4`. Commit, push to `main`.
- Watermark `kit/wm.png`: KOMO avatar + "Please Subscribe Me" (locked).
- Scripts live in `naskah/`. **TTS limit: MAX 1000 characters per audio file, tags included (LOCKED).** A Short = ONE audio file `<id>_short.mp3` written to fit in 1000 chars (~55-60 s). YouTube narration = MAX 1500 characters total incl. tags (LOCKED, ~85 s), split at a paragraph boundary into 2 files `<id>_yt_1.mp3`, `<id>_yt_2.mp3` (each <=1000) and get concatenated in order before transcription/render. Keep the split list in `naskah/AUDIO_PARTS.md`. **Always add fitting TTS audio tags** (e.g. [excited] [playful] [whispering] [pause] [slowly] [sighing] [chuckling] [gasping] [yawning] [drum roll] [heartbeat] [keyboard typing]...) sparingly where they match the emotion; tags count toward the 1000-char limit. Tags are not spoken; ignore them when matching subtitles. ALWAYS also paste the full narration text in the chat reply (owner copy-pastes it to record).
