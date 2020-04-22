const path = require("path");
require("./src/utils/getPage");
module.exports = {
  pages: {
    test1: {
      // page 的入口
      entry: "src/views/pro/test1/main.js",
      // 模板来源
      template: "src/views/pro/test1/index.html",
      // 在 dist/index.html 的输出
      filename: "pro/test1/index.html"
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve("src")
      }
    }
  }
};
