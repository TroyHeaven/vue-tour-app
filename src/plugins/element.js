import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import i18n from '../lang' // 国际化

Vue.use(Element, {
  size: 'medium',
  locale,
  i18n: (key, value) => i18n.t(key, value)
})
