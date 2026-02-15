import { createI18n } from 'vue-i18n'
import zhCN from './lang/zh.js'
import enUS from './lang/en.js'

const i18n = createI18n({
  // 是否在vue应用程序上使用vue-i18n Legacy API（传统）模式
  legacy: false,
  // 默认当前语言
  locale: 'zh',
  // 是否为每个组件注入全局属性和函数（true 后 在template中可以直接使用$t('')）
  globalInjection: true,
  // 语言合集
  messages: {
    zh: zhCN,
    en: enUS
  }
})

export default i18n
