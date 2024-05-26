/**
 * prebuilds raw to evaluable js
 * @param {string} raw - code to be prebuilt
 * @returns {string} - code that can be eval'd
 */

function prebuild(raw) {
  let prebuilt = raw.replace(/`/g, "&backtick;");
  prebuilt = prebuilt.replace(/\[%/g, "${v.");
  prebuilt = prebuilt.replace(/%\]/g, "}");
  prebuilt = prebuilt.replace(/\{%/g, "${include('");
  prebuilt = prebuilt.replace(/%\}/g, "')}");
  return prebuilt;
}

module.exports = prebuild