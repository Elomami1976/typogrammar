# Daily English Reads — Audio Files

Drop all story MP3 files in this folder.

**Path used by the app:** `/audio/daily-reads/<filename>.mp3`
(Vite copies anything in `public/` to the site root, so a file at
`public/audio/daily-reads/how-tesla-became-famous.mp3` is served at
`https://typogrammar.com/audio/daily-reads/how-tesla-became-famous.mp3`.)

## Naming convention
- Lowercase, kebab-case, no spaces.
- Match the `audioSrc` declared in `src/pages/DailyEnglishReadsPage.tsx`
  (inside the `STORIES` array).

## Current story slots (Technology — active)
| Story title                | Expected filename                    |
| -------------------------- | ------------------------------------ |
| How Tesla Became Famous    | `how-tesla-became-famous.mp3`        |

## Audio specs (recommended)
- Format: **MP3** (96–128 kbps, mono is fine for speech).
- Length: **45–90 seconds** per story.
- Loudness: normalize to ~ -16 LUFS.
- The `<audio>` tag in the app already uses `preload="none"` so files
  are only downloaded when the user presses play.

## Adding a new story
1. Place the MP3 here.
2. Open `src/pages/DailyEnglishReadsPage.tsx`.
3. Add a new entry to the `STORIES` array (set `audioSrc`,
   `words`, `durationLabel`, `level`, and 6 `questions`).
4. Build & deploy.
