/*
 * @Author: Bin.Zhou
 * @Date: 2022-07-12 10:08:01
 * @LastEditTime: 2022-07-14 15:55:27
 * @LastEditors: Bin.Zhou
 * @Description:
 * @Copyright: Copyright (c) Reserved 
 */
const { defineConfig } = require('@vue/cli-service')
const path = require("path");
const defaultSettings = require("./src/settings.js");

const name = defaultSettings.title;

function resolve(dir) {
  return path.join(__dirname, dir);
}
// svg icon loader
const Icons = require('unplugin-icons/webpack')
const { FileSystemIconLoader } = require('unplugin-icons/loaders')
// 引入 Icon自动引入解析器
const IconsResolver = require('unplugin-icons/resolver')
// 引入自动引入插件
const Components = require('unplugin-vue-components/webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    name: name,
    plugins: [
      require('unplugin-element-plus/webpack')({
        // options
      }),
      // 使用自动引入插件
      Components({
        // 配置解析器
        resolvers: [
          // Icon自动引入解析器
          IconsResolver({
            // 自动引入的Icon组件统一前缀
            prefix: 'icon',
            // 标识自定义图标集
            customCollections: ['svg']
          }),
          // ElementPlusResolver()
        ],
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true,
        // 自定义图标加载
        customCollections: {
          // svg图标集，给svg文件设置fill="currentColor"属性，使图标的颜色具有适应性
          svg: FileSystemIconLoader('src/assets/svg', svg => svg.replace(/^<svg /, '<svg fill="currentColor" '))
        },
      }),
    ],
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  css: {
    //全局配置utils.scss,详细配置参考vue-cli官网
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/variables.scss";`
      }
    }
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  }
})
