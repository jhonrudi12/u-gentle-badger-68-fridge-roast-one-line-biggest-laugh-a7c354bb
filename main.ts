// Fridge Roast: One Line, Biggest Laugh
// make.fun bounty u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
// Writes a single roast line (117 chars, within the 200-char gate) to /output/entry.txt.
// Deterministic, no network, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My smart fridge updated its firmware at 3 a.m. and now the ice maker holds my cubes hostage until I accept the terms.";

// Gate guard: the competition's gate refuses any entry over 200 characters,
// so fail loudly instead of writing an entry the judge will never see.
if (ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, over the 200-character gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
