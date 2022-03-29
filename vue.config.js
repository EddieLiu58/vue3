require("dotenv").config();
module.exports = {
  publicPath: process.env.VUE_APP_ENV === "production" ? "/vue3/" : "/",
  devServer: {
    proxy: {
      "/api": {
        target: "https://tour.klcg.gov.tw/data",
        pathRewrite: { "^/api": "" },
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
