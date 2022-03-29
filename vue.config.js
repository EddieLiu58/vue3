require("dotenv").config();
module.exports = {
  publicPath: process.env.VUE_APP_ENV === "production" ? "/vue3/" : "/",
  devServer: {
    proxy: {
      "/vue3/api": {
        target: "https://tour.klcg.gov.tw/data",
        pathRewrite: { "^/vue3/api": "" },
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
