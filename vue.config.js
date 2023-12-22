const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    client: {
      overlay: false,
    },
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-project-Build" : "/",
  outputDir: "docs",
});
