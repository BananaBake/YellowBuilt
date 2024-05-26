const fs = require("fs-extra");

class fsInDirSync {
  /**
   * fs-extra sync functions, but in a directory
   * @param {string} dir - directory to peform the operation in
   */

  constructor(dir) {
    this.dir = dir;
  }

  copy(src, dest) {
    fs.copySync((this.dir + src), dest);
  }

  writeFile(path, data) {
    fs.writeFileSync((this.dir + path), data);
  }

  readFile(path, options) {
    return fs.readFileSync((this.dir + path), options);
  }

  readJson(path) {
    return fs.readJsonSync(this.dir + path);
  }

  exists(path) {
    return fs.existsSync((this.dir + path));
  }

  remove(path) {
    fs.removeSync((this.dir + path));
  }

  mkdir(path) {
    fs.mkdirSync((this.dir + path));
  }

  readdir(path) {
    return fs.readdirSync((this.dir + path));
  }
}

module.exports = fsInDirSync;