import * as Types from '../action-types';
import {queryCourseList, queryCollect} from '../../api/course';

const courseAction = {

    //=>基于promise完成的
    async getCourse(type) {
        /*
        1、调取API中的方法从服务器端获取数据，
        2、返回对应的action对象{type/payload}
        */
        return {
            type: Types.INIT_COURSE,
            payload: await queryCourseList(type)
        }
    },

    collectCourse(item) {
        return {
            type: Types.COLLECT,
            payload: item
        }
    },
    getCollect() {
        return {
            type: Types.COLLECT_GET,
            payload: queryCollect()
    }
    }
    //=>基于redux-thunk中间件的写法
    /*getCourse(type){
        return function (dispatch) {
            queryCourseList(type).then(result=>{
                dispatch({
                    type:Types.INIT_COURSE,
                    payload:result
                })
            })
        }
    }*/

    //=>基于redux-promise中间件完成
    /*getCourse(type) {
        return {
            type:Types.INIT_COURSE,
            payload:queryCourseList(type)
        }
    }*/

};

export default courseAction;