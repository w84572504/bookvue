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


