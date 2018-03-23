import * as Types from '../action-types';

const courseReducer = (state = {
    courseData: [],
    collectData: []
}, action) => {
    state = {...state};
    switch (action.type) {
        case Types.INIT_COURSE:
            state.courseData = action.payload;
            break;
        case Types.COLLECT:
            let isExit = false;
            isExit = state.collectData.find(item => item.id === parseInt(action.payload.id));
            !isExit ? state.collectData.push(action.payload) : null;
            break;
        case Types.COLLECT_GET:
            state.collectData = action.payload;
            break;
    }
    return state;
};

export default courseReducer;