#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { Options } from "./src/options.js";

// fs.rmdirSync("dist", { recursive: true });
const directory = "dist";

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), (err) => {
      if (err) throw err;
    });
  }
  fs.writeFile("dist/security.txt", "Learn Node FS module", function (err) {
    if (err) throw err;
  });
});
Options();
