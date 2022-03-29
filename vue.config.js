module.exports = {
  publicPath: "/vue3/",
  devServer: {
    proxy: "https://tour.klcg.gov.tw/data",
  },
  filenameHashing: false,
  configureWebpack: {
    devtool: "source-map",
  },
  css: {
    extract: true,
  },
};
