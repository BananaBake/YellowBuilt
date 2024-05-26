const fs = require("fs-extra");
const buildToHtml = require("./html-builder.js");

class templateBuilder {
  /**
   * A reusable instance of the builder with a preset template and enviorment
   * @param {string} template - The path to the template file
   * @param {object} enviorment - A preset enviorment
   */

  constructor(template, enviorment) {
    this.template = fs.readFileSync(`templates/${template}`, "utf8");
    this.enviorment = enviorment;
  }

  /**
   * Builds the template with the preset enviorment combined with the given enviorment
   * @param {object} enviorment - Enviorment to build in
   * @returns {string} - The built template
   */
  
  build(enviorment) {
    const fullEnv = { ...this.enviorment, ...enviorment };
    return buildToHtml(this.template, fullEnv);
  }
}

module.exports = templateBuilder;
