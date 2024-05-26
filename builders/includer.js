const fs = require("fs-extra");

function include(path) {
  let fileContent = fs.readFileSync(path, "utf8");
  return fileContent;
}

module.exports = include