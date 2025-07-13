import {
    getRequest,
    getSuccess,
    getFailed,
    getError,
    stuffDone
} from './studentSlice';

export const getAllStudents = (id) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(getSuccess([]));
};

export const updateStudentFields = (id, fields, address) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(stuffDone());
};

export const removeStuff = (id, address) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(stuffDone());
};