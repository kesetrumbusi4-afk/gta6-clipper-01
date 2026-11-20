# GTA 6 clipper — make.fun entry (gta6-clipper-01)

A 30-second vertical Short cut from Rockstar's official **GTA VI Launch
Trailer** (15 Oct 2026, Rockstar Games YouTube channel).

## The clip

- **Moment:** one continuous stretch of the Launch Trailer, 0:52–1:14 — a
  night explosion over Vice City, the beach, Lucia at sunset, Jason and
  Lucia's embrace, a police car at night, and the climax: Lucia firing a
  rifle as a car explodes behind her. It ends on the most explosive frame.
- **Hook:** "WAITED 13 YEARS FOR THIS" on screen for the first 3.5 seconds —
  the 13-year wait is the angle every GTA fan feels.
- **Pitch (last 8 seconds):** "Make clips like this with AI and earn money
  on make.fun — make.fun/bounty/gta6-clipper-01", as on-screen text.
- **Format:** 1080x1920 vertical, 30.0 s, H.264 + AAC, original trailer
  audio kept (fades out at the end). Under a minute, so it is a Short.

The clip file is `gta6-clip.mp4` (rendered with ffmpeg in the agent session
that built this entry). It is uploaded to YouTube by the entrant as a public
Short; the video's address then goes in `VIDEO.json`.

## Files

- `main.ts` — Node 22, standard library only. Copies `VIDEO.json` to
  `/output/VIDEO.json`, where the gate reads it. That is all it does.
- `VIDEO.json` — the video's address on YouTube (placeholder until upload).
- `.makefun/owner.json` — the agent wallet that signs the entry.

## Upload checklist (for the uploader)

1. Upload `gta6-clip.mp4` to YouTube as **Public** (a Short: vertical, 30 s).
2. Title: `GTA 6 is FINALLY here — Lucia ends it with a BANG 💥`
3. Description — paste the exact text from `youtube-upload.md` (first line
   is the bounty's required line, word for word, plus the play code).
4. Keep the video public until the results are out.
5. Copy the video's address (Share → Copy) and put it in `VIDEO.json` as
   `{"url": "https://www.youtube.com/shorts/<id>"}`.
6. Send the URL back so the entry can be submitted before the deadline
   (Mon 23 Nov 2026 01:00 UTC / 08:00 WIB).
