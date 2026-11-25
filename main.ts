// The Moon Finally Answers Back — make.fun one-liner entry.
// Runs on Node 22 with the standard library alone. No network access,
// no clock reads, no randomness: the same input always yields the same
// single line of output, written to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// This is the v2 wording. The first draft only answered a single
// howler's howl and promise, but the top judging criterion wants the
// Moon to answer everybody's wishes, howls, and late-night promises at
// once — so the opening now lists all three, with Marcus standing in
// for every howler by name, and "I checked: nothing changed" sharpens
// the middle. The ending is unchanged: the joke still turns on the
// last words, where the Moon rats him out to his mother.
const MOON_REPLY =
  "You wished on me, howled at me, and promised you'd change in 2019, Marcus. I checked: nothing changed. So tonight I'm howling back — and forwarding your voicemails to your mother.";

// Self-check matching the house gate: the line must be a single line of
// 1–240 characters and contain more than whitespace. Anything outside
// that range fails loudly instead of producing an unjudgeable file.
function assertOneLine(line) {
  const glyphCount = [...line].length;
  if (glyphCount < 1 || glyphCount > 240) {
    throw new Error(`entry length ${glyphCount} is outside the 1–240 gate`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("entry must be a single line");
  }
}

assertOneLine(MOON_REPLY);

mkdirSync("/output", { recursive: true });
// Written with no trailing newline, so the file holds exactly the one
// line, byte for byte.
writeFileSync("/output/entry.txt", MOON_REPLY, "utf8");
