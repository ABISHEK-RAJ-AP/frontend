import {
    authRequest,
    stuffAdded,
    authSuccess,
    authFailed,
    authError,
    authLogout,
    doneSuccess,
    getDeleteSuccess,
    getRequest,
    getFailed,
    getError,
} from './userSlice';

export const loginUser = (fields, role) => async (dispatch) => {
    dispatch(authRequest());
    const dummy = { _id: '1', name: 'Demo User', role, school: { _id: '1' } };
    dispatch(authSuccess(dummy));
};

export const registerUser = (fields, role) => async (dispatch) => {
    dispatch(authRequest());
    if (role === 'Admin') {
        const dummy = { _id: '1', name: fields.name || 'Demo Admin', role, school: { _id: '1', schoolName: fields.schoolName || 'Demo TCMS' } };
        dispatch(authSuccess(dummy));
    } else {
        dispatch(stuffAdded({}));
    }
};

export const logoutUser = () => (dispatch) => {
    dispatch(authLogout());
};

export const getUserDetails = (id, address) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(doneSuccess([]));
};

// export const deleteUser = (id, address) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.delete(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`);
//         if (result.data.message) {
//             dispatch(getFailed(result.data.message));
//         } else {
//             dispatch(getDeleteSuccess());
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }


export const deleteUser = (id, address) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(getFailed("Sorry the delete function has been disabled for now."));
}

export const updateUser = (fields, id, address) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(doneSuccess({}));
};

export const addStuff = (fields, address) => async (dispatch) => {
    dispatch(authRequest());
    dispatch(stuffAdded({}));
};