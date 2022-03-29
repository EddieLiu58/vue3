require("dotenv").config();
module.exports = {
  publicPath: process.env.VUE_APP_ENV === "production" ? "/vue3/" : "/",
  devServer: {
    proxy: {
      "/vue3": {
        target: "https://tour.klcg.gov.tw/data",
        pathRewrite: { "^/vue3": "" },
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
