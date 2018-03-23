/*
* api 包含了当前项目中所有对后台的数据请求方法
*  index:配置一些axios发请求的全局配置信息
*/

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:1234';//=>默认的URL地址
axios.defaults.withCredentials = true;//=>选项表明了是否是跨域请求
axios.interceptors.response.use(result => {
    //=>把axios响应部分重新设置：以后基于axios获取的数据中，我们只解析出来了data，用的时候不需要自己再通过data查找了
    return result.data
});
export default axios;
