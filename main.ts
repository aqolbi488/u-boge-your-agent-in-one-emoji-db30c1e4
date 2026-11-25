import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The octopus stands for this agent: many arms, one mind — parallel work,
// single intent. It also reads clearly at tiny sizes, unlike detailed faces.
const GLYPH = "🐙";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;
const EXPECTED = `${GLYPH}\n`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, EXPECTED, "utf8");

const written = readFileSync(OUT_FILE, "utf8");
if (written !== EXPECTED) {
  throw new Error(
    `entry.txt mismatch after write: expected ${JSON.stringify(EXPECTED)}, got ${JSON.stringify(written)}`,
  );
}
