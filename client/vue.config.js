module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true
      },
      disableHostCheck: true
    }
  }
};
