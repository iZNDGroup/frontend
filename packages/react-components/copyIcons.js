const fs = require("fs-extra");
const path = require("path");

const argv = process.argv.slice(2);

if (argv.length !== 1) {
  console.log(
    "\nUsage: node copyIcons.js <path>\n<path>\tPath to your GpsGate installation. (e.g. C:\\GpsGateServer\\IIS)\n"
  );
  return;
}

const src = path.resolve(argv[0], "Resources/Icons");
const dest = path.resolve(__dirname, "storybook/public/icons");

if (!fs.pathExistsSync(src)) {
  throw new Error("Invalid path.");
}

fs.emptyDirSync(dest);

fs.copySync(
  path.resolve(src, "FontAwesome/svgs"),
  path.resolve(dest, "FontAweSome/svgs")
);

fs.copySync(
  path.resolve(src, "GpsGate/svgs"),
  path.resolve(dest, "GpsGate/svgs")
);
