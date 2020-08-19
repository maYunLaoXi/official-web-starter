import 'bootstrap'
import $ from 'jquery'
import '@/assets/js/i18next'
import '@/assets/js/svg-icon/index.js'
import '@/assets/css/common.scss'
import "./home.scss"
// import 'animate.css'
// import aniView from 'jquery-aniview'
import seeView from 'see-view'
import injectAnimate from '@/assets/js/inject-animate.js'

injectAnimate()

seeView({
  events: {
    'click [click-li]': 'clickLi',
    'click [click-router]': 'routerPush'
  },
  clickLi: function(e){
    const $this = $(e.target)
    const attr = $this.attr('click-li')
    $('[click-li]').removeClass('active')
    $this.addClass('active')
    console.log($('[click-li-show]'))
    $(`div[click-li-show]`).hide()
    $(`div[click-li-show='${attr}']`).show('slow')
  },
  routerPush: e => {
    const $this = $(e.target)
    const url = $this.attr('click-router')
    window.location.href = window.location.origin + url.replace('.', '')
  }
})

$('#nav-home').addClass('active')
setTimeout(_ => {
  // $('#test-an').addClass('animate__animated animate__backInRight')
}, 1000)
let isOpen = 1
$('.toggle').on('click', () => {
  if (isOpen) {
    $('.progress-bar').removeClass('active')
    isOpen = false
    return
  }
  $('.progress-bar').addClass('active')
  isOpen = true
})

try {
  window.console && window.console.log && (console.log("%c" + tip , 'color: red'))
} catch (e) {}