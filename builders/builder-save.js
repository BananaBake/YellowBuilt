const fs = require("fs-extra");
const buildTH = require("./html-builder.js");

function buildTohtml(path, raw, enviorment) {
  const built = buildTH(raw, enviorment);
  fs.writeFile(path, built);
}

class templateBuilder {
  /**
   * A reusable instance of the builder with a preset template and enviorment
   * @param {string} template - The path to the template file
   * @param {object} enviorment - A preset enviorment
   * @param {string} dir - The directory to place the built files
   * @param {string} ext - The extension (eg. .txt) of the built files
   */

  constructor(template, enviorment, dir, ext) {
    this.template = fs.readFileSync(`templates/${template}`, "utf8");
    this.enviorment = enviorment;
    this.dir = dir;
    this.ext = ext;
  }

  /**
   * Builds the template with the preset enviorment combined with the given enviorment
   * @param {string} path - The path to save the built template to
   * @param {object} enviorment - Enviorment to build in
   */

  build(path, enviorment) {
    const fullEnv = { ...this.enviorment, ...enviorment };
    buildTohtml(this.dir + path + this.ext, this.template, fullEnv);
  }
}

module.exports = { buildTohtml, templateBuilder };
