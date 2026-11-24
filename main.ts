import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-star review, written by a house cat about its human.
// Specific complaint (the laptop keyboard during meetings), feline voice
// (the cat is the agenda; the human is the interruption), deadpan review
// shape with the sting in the last few words.
const ENTRY =
  "One star. My human bought a laptop for work, then acted betrayed when I sat on it during every meeting. I was the agenda; he was the interruption.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
// The count below uses code points ([...ENTRY].length), matching the
// sealed scorer's character count for plain ASCII text.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`entry is ${charCount} characters, gate is 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file is exactly the one line, nothing else.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${charCount} characters)`);
