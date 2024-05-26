const prebuild = require("./pre-builder.js");
const include = require("./includer.js");
const requiresBuild = require("./requires-build.js");

/**
 * Builds raw to html
 * @param {string} raw - code to be built
 * @param {object} enviorment - vars to be used by the builder
 * @retruns {string} - fully functioning html
 */

function buildToHtml(raw, enviorment) {
  const v = {};
  if (enviorment) {
    for (const [key, value] of Object.entries(enviorment)) {
      v[key] = value;
    }
  }
  const builder = "`" + prebuild(raw) + "`";
  let built = raw;
  try {
    built = eval(builder);
  } catch (e) {
    console.error(new Error(`Couldn't build: \n` + raw));
    console.error(e);
  }
  if (built === raw) return raw;
  if (requiresBuild(built)) {
    built = buildToHtml(built, enviorment);
  }
  return built;
}

module.exports = buildToHtml;
