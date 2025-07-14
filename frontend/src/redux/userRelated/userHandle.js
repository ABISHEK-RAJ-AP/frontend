import axios from 'axios';
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

// Login (dummy data)
export const loginUser = (fields, role) => async (dispatch) => {
  dispatch(authRequest());
  const dummy = {
    _id: '1',
    name: 'Demo User',
    role,
    school: { _id: '1' },
    sclassName: { _id: '1' },
  };
  dispatch(authSuccess(dummy));
};

// Registration (dummy for admin)
export const registerUser = (fields, role) => async (dispatch) => {
  dispatch(authRequest());
  if (role === 'Admin') {
    const dummy = {
      _id: '1',
      name: fields.name || 'Demo Admin',
      role,
      school: { _id: '1', schoolName: fields.schoolName || 'Demo TCMS' },
    };
    dispatch(authSuccess(dummy));
  } else {
    dispatch(stuffAdded({}));
  }
};

// Logout
export const logoutUser = () => (dispatch) => {
  dispatch(authLogout());
};

// Fetch user details (dummy)
export const getUserDetails = (id, address) => async (dispatch) => {
  dispatch(getRequest());
  const dummy = {
    _id: id,
    name: 'Demo User',
    sclassName: { _id: '1', sclassName: 'Demo Class' },
    attendance: [],
  };
  dispatch(doneSuccess(dummy));
};

// Delete user (example axios call; adjust as needed)
export const deleteUser = (id, address) => async (dispatch) => {
  dispatch(getRequest());
  try {
    const result = await axios.delete(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`);
    if (result.data.message) {
      dispatch(getFailed(result.data.message));
    } else {
      dispatch(getDeleteSuccess());
    }
  } catch (error) {
    dispatch(getError(error.toString()));
  }
};

// Update user (dummy)
export const updateUser = (fields, id, address) => async (dispatch) => {
  dispatch(getRequest());
  dispatch(doneSuccess({}));
};

// Add stuff (dummy)
export const addStuff = (fields, address) => async (dispatch) => {
  dispatch(authRequest());
  dispatch(stuffAdded({}));
};
