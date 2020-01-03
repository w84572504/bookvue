import {request} from "./request";
import Qs from 'qs';

export function getIndex() {
  let headCode = {
    url: 'api/index',
    method: 'post',
  }
  return request(headCode)
}

export function getRember() {
  let headCode = {
    url: 'api/rember',
    method: 'post',
  }
  return request(headCode)
}

export function getStory() {
  let headCode = {
    url: 'api/story',
    method: 'post',
  }
  return request(headCode)
}

export function getList(id) {
  let data ={'id':id}
  let headCode = {
    url: 'api/getlist',
    method: 'post',
    data: Qs.stringify(data)
  }
  return request(headCode)
}

export function changeZan(id,status) {
  let data ={'id':id ,'status':status}
  let headCode = {
    url: 'api/changezan',
    method: 'post',
    data: Qs.stringify(data)
  }
  return request(headCode)
}

export function wxconfig(url) {
  let data ={'url':url }
  let headCode = {
    url: 'api/wxconfig',
    method: 'post',
    data: Qs.stringify(data)
  }
  return request(headCode)
}

export function getShareImg(id,title,content) {
  let data ={'aid':id,'title':title,'text':content}
  let headCode = {
    url: 'api/shareimg',
    method: 'post',
    data: Qs.stringify(data)
  }
  return request(headCode)
}

export function getShareImgs() {
  let data ={'suiji':1};
  let headCode = {
    url: 'api/shareimgs',
    method: 'post',
    data: Qs.stringify(data)
  };
  return request(headCode)
}

export function uInfo() {
  let headCode = {
    url: 'api/uinfo',
    method: 'post',
  }
  return request(headCode)
}

export function getuser() {
  let headCode = {
    url: 'api/getuser',
    method: 'post',
  }
  return request(headCode)
}

export function getMore(id) {
  let data ={'id':id}
  let headCode = {
    url: 'api/getmore',
    method: 'post',
    data: Qs.stringify(data)
  }
  return request(headCode)
}

export function upImg(img) {
  let data ={'img':img};
  let headCode = {
    url: 'api/upimg',
    method: 'post',
    data: Qs.stringify(data)
  }
  return request(headCode)
}

export function editname(name) {
  let data ={'name':name};
  let headCode = {
    url: 'api/editname',
    method: 'post',
    data: Qs.stringify(data)
  }
  return request(headCode)
}

export function rechagelist() {
  let headCode = {
    url: 'api/rechagelist',
    method: 'post',
  }
  return request(headCode)
}

export function payMoney(type,id,money) {
  let data ={'id':id,'type':type,money};
  let headCode = {
    url: 'api/payMoney',
    method: 'post',
    data: Qs.stringify(data)
  }
  return request(headCode)
}

export function about(id) {
  let data ={'id':id,};
  let headCode = {
    url: 'api/about',
    method: 'post',
    data: Qs.stringify(data)
  }
  return request(headCode)
}

export function getauthor(id) {
  let data ={'id':id,};
  let headCode = {
    url: 'api/getauthor',
    method: 'post',
    data: Qs.stringify(data)
  }
  return request(headCode)
}

export function goodauthor(id) {
  let data ={'id':id,};
  let headCode = {
    url: 'api/goodauthor',
    method: 'post',
    data: Qs.stringify(data)
  }
  return request(headCode)
}




