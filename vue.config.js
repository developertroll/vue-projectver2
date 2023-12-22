const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      overlay: false,
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/vue-projectver2" : "/",
  outputDir: "docs",
});
