import axios from "axios"

const request = axios.create({
    baseURL: '',
    timeout: 10000
})

request.interceptors.request.use(config => {
    return config
})

request.interceptors.response.use(res => {
    return res.data
}, error => {
    alert('请求失败')
})

export default request