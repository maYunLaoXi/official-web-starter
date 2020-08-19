import 'bootstrap'
import '@/assets/js/i18next'
import '@/assets/js/svg-icon/index.js'
import '@/assets/css/common.scss'
import './bps.scss'
import injectAnimate from '@/assets/js/inject-animate.js'
import './bps.html'
import { isMobile } from '@/assets/js/utils'

if(isMobile){
  const a = $('[m-remove]')
  for(let i of a){
    let ele = $(i)
    ele.removeClass(ele.attr('m-remove'))
  }
}
injectAnimate()

$('#nav-production').addClass('active')
