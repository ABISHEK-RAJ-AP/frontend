import {
    getRequest,
    getSuccess,
    getFailed,
    getError,
    getStudentsSuccess,
    detailsSuccess,
    getFailedTwo,
    getSubjectsSuccess,
    getSubDetailsSuccess,
    getSubDetailsRequest
} from './sclassSlice';

export const getAllSclasses = (id, address) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(getSuccess([]));
};

export const getClassStudents = (id) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(getStudentsSuccess([]));
};

export const getClassDetails = (id, address) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(detailsSuccess({}));
};

export const getSubjectList = (id, address) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(getSubjectsSuccess([]));
};

export const getTeacherFreeClassSubjects = (id) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(getSubjectsSuccess([]));
};

export const getSubjectDetails = (id, address) => async (dispatch) => {
    dispatch(getSubDetailsRequest());
    dispatch(getSubDetailsSuccess({}));
};