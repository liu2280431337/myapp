const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 设置css的主入口文件
  css:{
    loaderOptions: {
      scss: {
        additionalData: `@import "./src/styles/style.scss";`
      }
    }
  }
})
