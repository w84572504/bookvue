import {request} from "./request";
import Qs from 'qs';

export function getIndex() {
  let headCode = {
    url: 'api/index',
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
export function uInfo() {
  let headCode = {
    url: 'api/uinfo',
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


