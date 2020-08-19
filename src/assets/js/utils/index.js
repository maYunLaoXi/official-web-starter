import $ from 'jquery'
const ua = window.navigator.userAgent

export const getStorage = (name) => {
  return JSON.parse(window.localStorage.getItem(name))
}

export const setStorage = (name, data) => {
  window.localStorage.setItem(name, JSON.stringify(data))
  return getStorage(name)
}
// 移动端
export const isMobile = !!ua.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
);

export const mobileRemoveClass = (className) => {
  const list = className.split('-')
  const number = list[list.length - 1]
  const removeName = className.replace('.m-remove-', '')
  if(number){
    $(className).removeClass(removeName)
  }
}