module.exports = {
  baseUrl: `https://eddieliu58.github.io/vue3`,
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
