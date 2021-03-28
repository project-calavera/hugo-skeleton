#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const walkSync = require("walk-sync");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

function writeSkeleton() {
  const argv = yargs(hideBin(process.argv)).argv;
  const sourceDirectory = path.join(__dirname, "..");
  const outputDirectory = argv.output;

  if (!outputDirectory) {
    throw new Error(
      "Please specify an output directory using hugo-skeleton --output=location"
    );
  }

  const skeletons = walkSync(sourceDirectory, {
    ignore: [
      ".git",
      ".dccache",
      ".gitignore",
      ".npmignore",
      "**/.DS_Store",
      "package.json",
      "node_modules",
      "src",
      "yarn.lock",
    ],
  });

  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);
  }

  for (const skeleton of skeletons) {
    const srcSkeleton = path.join(sourceDirectory, skeleton);
    const isDirectory = fs.statSync(srcSkeleton).isDirectory();

    if (isDirectory && !fs.existsSync(skeleton)) {
      fs.mkdirSync(outputDirectory + path.sep + skeleton);
    } else if (!isDirectory) {
      fs.copyFileSync(srcSkeleton, outputDirectory + path.sep + skeleton);
    }
  }
}

writeSkeleton();
