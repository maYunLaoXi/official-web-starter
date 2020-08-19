import 'bootstrap'
import '@/assets/js/i18next'
import '@/assets/js/svg-icon/index.js'
import '@/assets/css/common.scss'
import './tencent-hardware.scss'
import './tencent-hardware.html'
import '@/assets/js'
import injectAnimate from '@/assets/js/inject-animate.js'

$('.content-4 .row .col-md-3 div').attr('in-zoomIn', true)
$('.content-4 .row .col-md-3 p').attr('in-zoomIn', true)
injectAnimate()
$('#nav-production').addClass('active')