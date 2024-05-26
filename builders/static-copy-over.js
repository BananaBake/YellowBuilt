const fs = require("fs-extra");

/**
 * Copies over static files
 */

function copyStatic() {
  fs.copySync("static", ".build");
}

module.exports = copyStatic;