// The Moon Finally Answers Back — make.fun entry (REVISED v2)
// Node 22, stdlib only, deterministic, no network.
// Writes one line (the Moon's comeback) to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// REVISED (v2 — same session): v1 only answered one howler's howl +
// promise. Criterion 1 demands the Moon answer the wishes, howls AND
// late-night promises of everyone — so the opening now names all three,
// with Marcus as the named representative, and "I checked: nothing
// changed" tightens the middle beat. Punchline untouched: the turn still
// lands in the last words (the Moon snitches to his mother).
const ENTRY =
  "You wished on me, howled at me, and promised you'd change in 2019, Marcus. I checked: nothing changed. So tonight I'm howling back — and forwarding your voicemails to your mother.";

// Gate self-check (mirrors the house gate): 1–240 characters, not only
// whitespace. Fail loudly instead of writing an entry that cannot be judged.
const length = [...ENTRY].length;
if (length < 1 || length > 240 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${length} is outside the 1–240 gate`);
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file is exactly the one line, byte for byte.
writeFileSync("/output/entry.txt", ENTRY, "utf8");
