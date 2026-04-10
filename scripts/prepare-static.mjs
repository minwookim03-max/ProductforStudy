import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);

function getArg(name) {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : undefined;
}

const outDir = getArg("--out");
const version = getArg("--version");

if (!outDir || !version) {
  console.error("Usage: node scripts/prepare-static.mjs --out <dir> --version <build>");
  process.exit(1);
}

const repoRoot = process.cwd();
const files = ["index.html", "main.js", "style.css"];

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  const sourcePath = path.join(repoRoot, file);
  const targetPath = path.join(outDir, file);
  let contents = fs.readFileSync(sourcePath, "utf8");

  if (file === "index.html") {
    contents = contents.replaceAll("__ASSET_VERSION__", version);
  }

  fs.writeFileSync(targetPath, contents);
}

const indexContents = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
fs.writeFileSync(path.join(outDir, "404.html"), indexContents);
fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
