import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../constants/authTypes";

const initialState = {
  user: null,
  isLoggedIn: false,
  isFetching: false,
  message: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, message: "" };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isFetching: false,
        isLoggedIn: true,
      };
    case LOGOUT:
      return { ...state, user: null, isLoggedIn: false };
    case LOGIN_FAILURE:
      return { ...state, isFetching: false, message: action.message };
    default:
      return state;
  }
};

export default authReducer;