import Axios from "axios";

export function request(config) {
  const instance = Axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  });

  // 响应拦截器
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  return instance(config);
}
