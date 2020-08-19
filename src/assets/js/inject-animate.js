import $ from 'jquery'
import aniView from 'jquery-aniview'
import 'animate.css'
import { isMobile } from './utils'

export default function({clean = '', then} = {}) {
  $(document).ready(_ => { 
    $('.content-1 h1').addClass('animate__animated animate__backInRight')
    $('.content-1 p').addClass('animate__animated animate__backInUp')
    $('[data-av-animation]').addClass('ancss')
    $('.content-3 h1,.content-4 h1,.content-5 h1,.content-6 h1').addClass('ancss').attr('data-av-animation', 'animate__animated animate__backInUp')
    if(!isMobile)$('.content-2 h1').addClass('ancss').attr('data-av-animation', 'animate__animated animate__backInUp')
    return
    // auto inject
    $('[in-backInUp]').addClass('ancss').attr('data-av-animation', 'animate__animated animate__backInUp')
    $('[in-backInLeft]').addClass('ancss').attr('data-av-animation', 'animate__animated animate__backInLeft')
    $('[in-backInRight]').addClass('ancss').attr('data-av-animation', 'animate__animated animate__backInRight')
    $('[in-zoomIn]').addClass('ancss').attr('data-av-animation', 'animate__animated animate__zoomIn')
    aniInject('[in-bounceInUp]', 'bounceInUp')

    // spin-default
    aniInject('.spin-row-4 .content-tilte h2', 'backInRight')
    aniInject('.spin-row-4 .content-tilte p,.spin-row-2 .content-tilte h2', 'backInUp')
    aniInject('.spin-row-4 .flex-column-center', 'zoomIn')
    aniInject('.spin-sample .col-md-3 div,.spin-sample .col-md-3 p', 'bounceInUp')

    $('.ancss').AniView()
    then && then()
  })
}

function aniInject(seletor, animate) {
  if(isMobile){
    // aniView在移动端首屏有不现现的BUG
    $(seletor).not('[in-remove=true] [in-remove-box]').addClass('ancss').attr('data-av-animation', 'animate__animated animate__' + animate)
  }else{
    $(seletor).addClass('ancss').attr('data-av-animation', 'animate__animated animate__' + animate)
  }
}