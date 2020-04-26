const pageConfig = require("../../page.config.js");

const createPage = (name, path, chunk = "") => {
  return {
    entry: `src/views/${path}/main.js`,
    template: `src/views/${path}/index.html`,
    filename: `html/${path}.html`
    // chunks: ["chunk-vendors", "chunk-common", chunk || name]
  };
};

exports.getPages = () => {
  let pages = {};
  Object.keys(pageConfig).forEach(key => {
    pages[key] = createPage(key, pageConfig[key]);
  });
  return pages;
};
