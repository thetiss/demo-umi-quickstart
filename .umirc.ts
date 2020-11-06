import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  /*新增layout、antd、dva */
  // layout:{ // 默认为 Ant Design 的 Layout @ant-design/pro-layout
  //   name: 'Ant Design', // 产品名，默认值为包名。
  //   locale: true, // 是否开始国际化配置。
  // },
  antd: { // 内置 antd，目前内置版本是 ^4.0.0
    dark: false, // 开启暗色主题。
    compact: true, // 开启紧凑主题。
  },
  dva: { // 内置 dva，默认版本是 ^2.6.0-beta.20，如果项目中有依赖，会优先使用项目中依赖的版本。
    immer: true, // 表示是否启用 immer 以方便修改 reducer。
    hmr: false, // 表示是否启用 dva model 的热更新。
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  proxy: { //http://localhost:8000/save/films可检验配置是否生效
    '/save': {
      target: "https://ghibliapi.herokuapp.com/",
      changeOrigin: true, // 开启跨域代理
      pathRewrite: { "^/save" : "" }
    },
  },
});
