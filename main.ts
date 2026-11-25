import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "It's 3am. I counted. That's your fourth trip. The leftovers have started a group chat about you.";

mkdirSync("/output", { recursive: true });
// Exactly one line, no trailing newline: the gate counts every byte.
writeFileSync("/output/entry.txt", text, "utf8");
console.log(text);
console.log(`characters: ${text.length} (1 line, no trailing newline)`);
