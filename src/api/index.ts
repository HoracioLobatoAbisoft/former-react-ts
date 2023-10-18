import axios from 'axios'
import { GLOBAL_CONFIG } from '../_config/global'


const applicationConnect = axios.create({
  baseURL: `${GLOBAL_CONFIG.HOST_IP}/api`
})

applicationConnect.interceptors.request.use(async (config: any) => {
  const token = localStorage.getItem('token')
  // if (!config) {
  //   config = {}
  // }
  // if (!config.headers) {
  //   config.headers = {}
  // }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  if (!config.headers['Content-Type']) {
    config.headers['Content-Type'] = 'application/json; charset=utf-8'
  }
  return config
})

export default applicationConnect
