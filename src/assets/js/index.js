// 默认脚本
import $ from 'jquery'
import { isMobile } from './utils'

$(document).ready(_ => {
  if(!isMobile) return
  const a = $('[m-remove]')
  for(let i of a){
    let ele = $(i)
    ele.removeClass(ele.attr('m-remove'))
  }
})