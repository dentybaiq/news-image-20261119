// news-image-20261119 — a one-day world news image (Node 22, standard library only).
// The entry is the entry.png beside this file: a 1024x1024 editorial infographic
// summing up Thursday 19 November 2026. This program copies it to the output
// directory as entry.png, byte for byte, so the judge sees exactly that image.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(join(here, 'entry.png'), dest);

// Confirm the copy landed and say how big it is, so a failed or partial
// copy is loud instead of silent.
const { size } = statSync(dest);
console.log(`wrote ${dest} (${size} bytes)`);
