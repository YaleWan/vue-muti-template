const path = require("path");
const pages = require("./src/utils/getPage").getPages();
console.log("pages", pages);
module.exports = {
  publicPath: process.env.NODE_ENV === "development" ? "/" : "./",
  pages,
  configureWebpack: {
    output: {
      filename: `js/[name]/[name].[hash:8].js`,
      chunkFilename: `js/[name]/[name].[hash:8].js`
    }
  },
  css: {
    extract: {
      filename: "js/[name]/[name].[hash:16].css",
      chunkFilename: "js/[name]/[name].[hash:16].css"
    },
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 75, // 换算的基数
            selectorBlackList: [], // 忽略转换正则匹配项
            propList: ["*"]
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", path.resolve("src"));
    config.optimization.delete("splitChunks");
  }
};
