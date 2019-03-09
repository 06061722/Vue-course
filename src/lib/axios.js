import axios from 'axios'
import { baseUrl } from '@/config'
class HttpRequest {
  constructor (baseURL = baseUrl) {
    this.baseURL =  baseURL
    this.queue = 0
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseURL,
      Headers: {

      }
    }
    return config
  }
  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      // 添加全局的loading
      if (url) this.queue++ 
      if (this.queue) {
      // Spin.show() 遮罩
      // console.log('233');
      }
      
      return config
    }, error => {
      return Promise.reject(error)
    })

    instance.interceptors.response.use(res => {
      this.queue--   
      if (!this.queue) {
        //关闭遮罩
      }
      const { data, status } = res
      return { data, status }
    }, error => {
      this.queue--  
      if (!this.queue) {
        //关闭遮罩
      }   
      return Promise.reject(error)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)   // Object.assign 合并对象，相同key值，用后者覆盖
    
    this.interceptors(instance, options.url)
    return instance(options)
  } 
}

export default HttpRequest