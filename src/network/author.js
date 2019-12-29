import {request} from "./request";
import Qs from 'qs';

export function getUrl(reurl,type) {
  let params = {
    "reurl": reurl,
    "type": type
  }
  let headCode = {
    url: 'api/geturl',
    method: 'get',
    params :params
  }
  return request(headCode)
}
export function getOpen(code,yid) {
  let params = {
    "code": code,
    'yid':yid
  }
  let headCode = {
    url: 'api/getopenid',
    method: 'get',
    params :params
  }
  return request(headCode)
}
export function getLogout() {
  let headCode = {
    url: 'user/index/logout.html',
    method: 'post',
  }
  return request(headCode)
}

