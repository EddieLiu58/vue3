require("dotenv").config();
module.exports = {
  publicPath: process.env.VUE_APP_ENV === "production" ? "/vue3/" : "/",
  // devServer: {
  //   proxy: "https://tour.klcg.gov.tw/data",
  // },
  filenameHashing: false,
  configureWebpack: {
    devtool: "source-map",
  },
  css: {
    extract: true,
  },
};
