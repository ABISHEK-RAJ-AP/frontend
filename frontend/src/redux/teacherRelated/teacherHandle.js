import {
    getRequest,
    getSuccess,
    getFailed,
    getError,
    postDone,
    doneSuccess
} from './teacherSlice';

export const getAllTeachers = (id) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(getSuccess([]));
};

export const getTeacherDetails = (id) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(doneSuccess({}));
};

export const updateTeachSubject = (teacherId, teachSubject) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(postDone());
};