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
- Scripts live in `naskah/`. **Narration limits (LOCKED, tags included):** a Short = ONE audio file `<id>_short.mp3` written to fit in 1000 chars (~55-60 s). YouTube = ONE audio file `<id>_yt.mp3`, MAX 1500 characters incl. tags (LOCKED, ~85 s). Keep the ready-to-record texts in `naskah/AUDIO_PARTS.md`. **Always add fitting TTS audio tags** (e.g. [excited] [playful] [whispering] [pause] [slowly] [sighing] [chuckling] [gasping] [yawning] [drum roll] [heartbeat] [keyboard typing]...) sparingly where they match the emotion; tags count toward the character limit. Tags are not spoken; ignore them when matching subtitles. ALWAYS also paste the full narration text in the chat reply (owner copy-pastes it to record).
