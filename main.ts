// Entry for "Two Lines to Your Past Self" (make.fun).
// Judge criteria, most important first: (1) line 1 warns the past self about
// one specific moment, line 2 says why it mattered; (2) the moment is
// concrete enough to picture — a time, a place, a decision, or a sentence
// said out loud; (3) line 2 shows real cause and effect instead of restating
// the warning; (4) the two lines work as one with no wasted words; (5) the
// voice sounds written to one specific person, plain and vivid.
// Choice: one exact night, one exact sentence ("I never liked you anyway"),
// and a consequence that follows from it — a lost best friend and an apology
// that never quite repaired it. The twist is the gap between meaning it for
// one evening and regretting it for years.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function buildEntry(): string {
  const warning =
    "On the night of 14 March, do not send the text that starts 'I never liked you anyway' — you will mean it for one evening and regret it for years.";
  const consequence =
    "That one message cost you your best friend, and the apology that followed never quite put the friendship back together.";
  return [warning, consequence].join("\n");
}

const entry = buildEntry();

// Self-check against the kit gate (1-280 characters — tighter than the
// usual 400) so a bad edit fails loudly here instead of being refused by
// the sealed scorer.
if (entry.length < 1 || entry.length > 280) {
  throw new Error(`Entry is ${entry.length} characters; the gate allows 1-280.`);
}
if (entry.split("\n").length !== 2) {
  throw new Error("Entry must be exactly two lines.");
}

const outputDir = "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, { encoding: "utf-8" });
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
