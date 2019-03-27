import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enUs from './lang/en-US'
import zhCN from './lang/zh-CN';

Vue.use(VueI18n)

const defaultLocale = 'zh-CN'

const messages = {
    'en-US':{
        ...enUs
    },
    'zh-CN':{
        ...zhCN
    }
}

const i18n = new VueI18n({
    locale: defaultLocale,
    fallbackLocale: defaultLocale,
    messages
})

export default i18n