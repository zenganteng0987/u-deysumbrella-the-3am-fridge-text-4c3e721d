import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "It's 3am and you're standing at the sink eating pickles like a raccoon. I see everything. I am the fridge.";
const candidates = [process.env.MAKEFUN_OUTPUT_DIR, "/output", "./entry.txt"];
for (const dir of candidates) { if (dir === undefined) continue; try { mkdirSync(dir, { recursive: true }); writeFileSync(join(dir, "entry.txt"), LINE, "utf8"); break; } catch {} }
