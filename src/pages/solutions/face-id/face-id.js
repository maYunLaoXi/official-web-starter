import 'bootstrap'
import '@/assets/js/i18next'
import '@/assets/js/svg-icon/index.js'
import '@/assets/css/common.scss'
import './face-id.scss'
import '@/assets/js'
import injectAnimate from '@/assets/js/inject-animate.js'

injectAnimate()

$('#nav-sample').addClass('active')

$('#content-5-nav span').on('click', function(e) {
  e.preventDefault()
  $(this).tab('show')
})