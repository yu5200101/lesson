import axios from './index';

export function queryBanner() {
    return axios.get('/course/banner');
}

export function queryCourseList(type = 'all') {
    return axios.get('/course/list', {
        params: {
            type
        }
    })
}

export function queryCourseInfo(id) {
    return axios.get(`/course/info?id=${id}`);
}

export function collectCourse(item) {
    return axios.post(`/course/collect`,{item});
}
// {item:{...item}}
export function queryCollect() {
    return axios.get(`/course/collect`);
}