require("dotenv").config();
module.exports = {
  publicPath: process.env.VUE_APP_ENV === "production" ? "https://eddieliu58.github.io/vue3/" : "/",
  devServer: {
    proxy: {
      "/api": {
        target: "https://tour.klcg.gov.tw/data",
        pathRewrite: { "^/api": "" },
        ws: true,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  filenameHashing: false,
  configureWebpack: {
    devtool: "source-map",
  },
  css: {
    extract: true,
  },
};
