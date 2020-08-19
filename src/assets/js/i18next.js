// i18n用法示例

import $ from "jquery"
import i18next from 'i18next'
import jqueryI18next from 'jquery-i18next'
import seeView from 'see-view'
import { getStorage, setStorage } from './utils/index'
const language = require('./lang/index.js')
const localName = 'lang'
let lang = getStorage(localName)

if(lang)init(lang)
seeView({
  events: {
    'click #i18n-ch': 'onChangeCh',
    'click #i18n-en': 'onChangeEn'
  },
  onChangeCh: (e) => {
    setStorage(localName, 'cn')
    init('cn')
  },
  onChangeEn: e => {
    setStorage(localName, 'en')
    init('en')
  }
})

function init(en = 'cn') {
  i18next.init({
    lng: en, // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
    resources: language.default, // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
    
  }, function(err, t) {
    // for options see
    // https://github.com/i18next/jquery-i18next#initialize-the-plugin
    jqueryI18next.init(i18next, $);
  
    // start localizing, details:
    // https://github.com/i18next/jquery-i18next#usage-of-selector-function
    $('body').localize();
    // $('.content').localize();
  });
}