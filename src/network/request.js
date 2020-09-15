import axios from 'axios'

import * as config from './config'

const instance = axios.create({
  baseURL: config.BASEURL,
  timeout: config.TIMEOUT
})

instance.interceptors.request.use(res => {
  return res
},err => {
  console.log(err);
})

instance.interceptors.response.use(res => {
  return res.data
},err => {
  console.log(err);
})


export default instance