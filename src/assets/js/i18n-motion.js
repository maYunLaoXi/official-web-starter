import $ from 'jquery'
import seeView from 'see-view'

seeView({
  events: {
    'click #i18n-ch': 'onChangeCh',
    'click #i18n-en': 'onChangeEn'
  },
  onChangeCh: (e) => {
    alert(100)
  },
  onChangeEn: e => {
    alert('en')
  }
})
