// One Star, Written in Sap — a one-line 1-star review from a houseplant
// about the human who owns it. The program writes the review to
// /output/entry.txt: exactly one line, 132 characters, no trailing
// newline, file mode 0644.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LINE =
  "One star. My owner waters the plastic fern next to me twice a week and me, the living one, whenever he remembers the Wi-Fi password.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
chmodSync("/output/entry.txt", 0o644);
