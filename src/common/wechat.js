import {wxconfig} from "network";
import wx from 'weixin-js-sdk';

function wxshare(obj, callback) {
  let url =  window.location.href
  wxconfig(url).then(res=>{
    let data = res.msg.data;
    let share = res.msg.share
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: data.appId, // 必填，公众号的唯一标识
      timestamp: data.timestamp, // 必填，生成签名的时间戳
      nonceStr: data.nonceStr, // 必填，生成签名的随机串
      signature: data.signature,// 必填，签名
      jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
    });
    data =  obj != ""   ? obj : share
    shareConfig(data, callback);
  }).catch((err) => {
    shareConfig({}, callback);
  });
}

function shareConfig(obj, callback) {
  wx.ready(() => {
    //分享到朋友圈
    wx.updateTimelineShareData({
      title: obj.timelinetitle ? obj.timelinetitle : obj.title, // 分享标题
      link: obj.link, // 分享链接
      imgUrl: obj.icon ? obj.icon : "", // 分享图标
      success: () => {
        typeof callback === "function" && callback();
      },
      cancel: () => {
        // 用户取消分享后执行的回调函数
      }
    });

    // 分享给微信好友
    wx.updateAppMessageShareData({
      title: obj.title, // 分享标题
      desc: obj.desc, // 分享描述
      link: obj.link, // 分享链接
      imgUrl: obj.icon ? obj.icon : "",
      success: () => {
        typeof callback === "function" && callback();
      },
      cancel: () => {
        // 用户取消分享后执行的回调函数
      }
    });
  });
}

export default wxshare