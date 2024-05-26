const fs = require("fs-extra");
const copyStatic = require("./builders/static-copy-over.js");
const { templateBuilder } = require("./builders/builder-save.js");
const fsInDir = require("./builders/fs-in-dir.js");

fs.removeSync(".build");
fs.mkdirSync(".build");

copyStatic();

let builderEnv = {
  ...require("./env/displayers.js"),
};

const prodFs = new fsInDir("./product-json/");
const catPageBuilder = new templateBuilder(
  "cat-page.html",
  builderEnv,
  ".build/",
  ".html",
);
const prodPageBuilder = new templateBuilder(
  "prod-page.html",
  builderEnv,
  ".build/categories/",
  ".html",
);

let cats = prodFs.readJson("categories.json");

catPageBuilder.build("index", { cats });

fs.mkdirSync(".build/categories");

cats.forEach(({ name, url, slogan }) => {
  const tarts = prodFs.readJson(`${url}.json`);
  const env = {
    catName: name,
    slogan,
    tarts,
  };
  prodPageBuilder.build(url, env);
});
