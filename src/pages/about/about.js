import $ from 'jquery'
import "bootstrap"
import "@/assets/js/fetch.js";
import '@/assets/css/common.scss'
import '@/assets/js/svg-icon/index.js'
import '@/assets/js/i18next'
import '@/assets/js/nav/header.js'
import '@/assets/js'
import "./about.scss";

$('#nav-about').addClass('active')
$('span[click-line="left"]').click(function(e){
  const line = $('#line')
  const width = line.width()
  const marginLeft = line.css('marginLeft').replace('px','') - 0

  if(width && width - 1200 > -marginLeft){
    line.animate({
      marginLeft: (marginLeft - 375) + 'px'
    },500)
  }
})
$('span[click-line="right"]').click(function(e){
  const line = $('#line')
  const width = line.width()
  const marginLeft = line.css('marginLeft').replace('px','') - 0

  if(marginLeft < 0){
    line.animate({
      marginLeft: (marginLeft + 375) + 'px'
    },500)
  }
})