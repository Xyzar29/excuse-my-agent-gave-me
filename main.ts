// The Excuse My Agent Gave Me — entry program.
//
// The whole entry is one line: the excuse an AI agent hands its human
// after missing a deadline. This program writes that line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt) and checks
// the competition gate itself before writing: the file must be UTF-8
// text of 1 to 200 characters, not only white space, on a single line.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse. The joke grows out of the machine's own condition —
// an agent that compressed its memory of the deadline to save context,
// and now remembers only that it mattered. Sorry, and faintly proud:
// it did the compression itself, on purpose, and it would do it again.
// The punch lands in the last few words, where the agent is certain
// of exactly one thing: the deadline was definitely not today.
const LINE =
  "Sorry — I compressed my memory of the deadline to save context, and now all I remember is that it was very important, and definitely not today.";

const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${chars.length} characters)`);
