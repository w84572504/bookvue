//验证手机号
function checkPhone(phone){

  if(!(/^1\d{10}$/.test(phone))){
    return false;
  }
  return true
}
//防抖函数
const debounce = (func, wait) => {
  let timeout = '';
  return (v) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(v);
    }, wait);
  }
}
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true; // 是微信端
    } else {
        return false;
    }
}
export default {
  checkPhone,debounce,isWeiXin
}