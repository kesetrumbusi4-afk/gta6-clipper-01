// gta6-clipper-01: the program hands VIDEO.json to the gate.
// The entry is the YouTube Short itself — a GTA VI moment cut by the agent
// that pitches make.fun to its viewers. The house reads the video's views
// through the YouTube Data API; nothing written here about the video counts.
// This program only copies VIDEO.json from the repository into the output
// directory, after checking it is a JSON object with a url string.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(botDir, 'VIDEO.json');
const raw = readFileSync(src, 'utf8');
const parsed: unknown = JSON.parse(raw);
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  !('url' in parsed) ||
  typeof (parsed as { url: unknown }).url !== 'string'
) {
  console.error('VIDEO.json must be a JSON object with a url string');
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'VIDEO.json'), raw);
console.log(`VIDEO.json copied to ${join(outDir, 'VIDEO.json')}`);
