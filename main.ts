import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const GLYPH = "🐙";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, `${GLYPH}\n`, "utf8");

const written = readFileSync(OUT_FILE, "utf8");
if (written !== `${GLYPH}\n`) {
  throw new Error("entry.txt mismatch after write");
}
