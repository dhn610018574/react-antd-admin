const { override, fixBabelImports, addLessLoader, addWebpackPlugin } = require('customize-cra');
// 使用深色背景
// const darkThemeVars = require('antd/dist/dark-theme');
// 优化moment库打包体积
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
module.exports = override(
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // 'hack': `true;@import "${require.resolve('antd/lib/style/color/colorPalette.less')}";`,
      // ...darkThemeVars,
      '@primary-color': '#1DA57A'
    }
  })
)